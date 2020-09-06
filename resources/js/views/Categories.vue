<template>
    <div>
        <div class="container-fluid">
            <h1 class="mt-4">{{ comName }}</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">{{ comName }}</li>
            </ol>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="text-left">
                                <span>Category Management</span>
                            </div>
                            
                            <div class="text-right">
                                <button type="button" v-on:click="showNewCategoryModal"><span class="fa fa-plus"></span> Create New</button>
                            </div>
                        </div>
                        
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                    </tfoot>
                                    <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>
                                            <button class="btn btn-sm btn-primary"><span class="fa fa-edit"></span></button>
                                            <button class="btn btn-sm btn-danger"><span class="fa fa-trash"></span></button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
        <b-modal ref="newCategoryModal" hide-footer title="Add new category">
            <div class="d-block">
                <form v-on:submit.prevent="createCategory">
                    <div class="form-group">
                        <label for="name">Name : </label>
                        <input type="text" class="form-control" id="name" v-model="categoryData.name" placeholder="Enter name">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
    
                    <div class="form-group">
                        <label for="image">Image : </label>
                        <input type="file" class="form-control" id="image" v-on:change="attachImage" ref="newCategoryImage">
                        <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
                        <br>
                        <div v-if="categoryData.image.name">
                            <img src="" ref="newCategoryImageDisplay" class="w-150px">
                        </div>
                    </div>
    
                    <hr>
                    
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewcategoryModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Save</button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import * as categoryServices from '../services/category_service';

    export default {
        name: "categories",
        data(){
            return{
                comName: "Category",
                categoryData: {
                    name: "",
                    image: ""
                },

                errors: {}
            }
        },
        
        methods: {
            attachImage: function(){
                //to use some file todo
                this.categoryData.image = this.$refs.newCategoryImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.newCategoryImageDisplay.src = reader.result;
                }.bind(this),false)

                reader.readAsDataURL(this.categoryData.image);
            },
    
            hideNewcategoryModal: function(){
                //hide modal
                this.$refs.newCategoryModal.hide();
            },
            
            showNewCategoryModal: function(){
                //show Modal
              this.$refs.newCategoryModal.show();
            },
    
            createCategory: async function(){
                // store category into database
                console.log("From Submitted");

                let formData = new FormData();

                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);

                try{
                    const response = await categoryServices.createCategories(formData);
                    console.log(response);
                    this.hideNewcategoryModal();
                }catch(error) {
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        default:
                            alert('some wrong');
                            break;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>