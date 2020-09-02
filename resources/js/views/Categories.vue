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
                    </div>
    
                    <div class="form-group">
                        <label for="image">Image : </label>
                        <input type="file" class="form-control" id="image" v-on:change="attachImage">
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
    export default {
        name: "categories",
        data(){
            return{
                comName: "Category",
                categoryData: {
                    name: "",
                    image: ""
                }
            }
        },
        
        methods: {
            attachImage: function(){
                //to use some file todo
            },
    
            hideNewcategoryModal: function(){
                //hide modal
                this.$refs.newCategoryModal.hide();
            },
            
            showNewCategoryModal: function(){
                //show Modal
              this.$refs.newCategoryModal.show();
            },
    
            createCategory: function(){
                // store category into databse
                console.log("From Submitted");
            }
        }
    }
</script>

<style scoped>

</style>