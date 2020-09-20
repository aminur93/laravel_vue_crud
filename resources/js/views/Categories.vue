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
                                <button type="button" v-on:click="showNewCategoryModal" class="btn btn-light float-right"><span class="fa fa-plus"></span> Create New</button>
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
                                    <tr v-for="(category,index) in categories" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ category.name }}</td>
                                        <td>
                                            <img :src="`${$store.state.serverPath}/storage/${category.image}`" :alt="category.name" class="image-table">
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-primary" v-on:click="editCategory(category)">
                                                <span class="fa fa-edit"></span>
                                            </button>

                                            <button class="btn btn-sm btn-danger" v-on:click="deleteCategory(category)">
                                                <span class="fa fa-trash"></span>
                                            </button>
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

        <b-modal ref="editCategoryModal" hide-footer title="Edit category">
            <div class="d-block">
                <form v-on:submit.prevent="updateCategory">
                    <div class="form-group">
                        <label for="name">Name : </label>
                        <input type="text" class="form-control" id="name" v-model="editCategoryData.name" placeholder="Enter name">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>

                    <div class="form-group">
                        <label for="image">Image : </label>
                        <input type="file" class="form-control" id="image" v-on:change="editAttachImage" ref="editCategoryImage">
                        <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
                        <br>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`" ref="editCategoryImageDisplay" class="w-150px">
                        </div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideEditCategoryModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Edit</button>
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
                categories: [],
                categoryData: {
                    name: "",
                    image: ""
                },
                moreExist: false,
                nextPage: 0,
                editCategoryData: {},
                errors: {},
            }
        },

        mounted()
        {
            this.loadCategories();
        },
        
        methods: {
            loadCategories: async function(){

                try {
                    const response = await categoryServices.loadCategories();

                    this.categories = response.data.categories;

                }catch (error){
                    this.flashMessage.error({
                        message: 'Category Data Not Found',
                        time: 5000
                    });
                }
            },

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

                let formData = new FormData();

                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);

                try{
                    const response = await categoryServices.createCategories(formData);

                    this.loadCategories();

                    this.hideNewcategoryModal();

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });

                    this.categoryData.name = '';
                    this.categoryData.image = '';
                }catch(error) {
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        default:
                            this.flashMessage.error({
                                message: 'Something Went Wrong',
                                time: 5000
                            });
                            break;
                    }
                }
            },

            deleteCategory: async function (category) {
                if (!window.confirm(`Are you sure want to delete ${category.name}`))
                {
                    return;
                }

                try {
                    const response = await categoryServices.deleteCategory(category.id);
                    this.loadCategories();
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                }catch (error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },

            hideEditCategoryModal: function () {
                this.$refs.editCategoryModal.hide();
            },

            showEditCategoryModal: function () {
                this.$refs.editCategoryModal.show();
            },



            editCategory: function(category){
                this.editCategoryData = category;
                this.showEditCategoryModal();
            },

            editAttachImage: function () {
                this.editCategoryData.image = this.$refs.editCategoryImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.editCategoryImageDisplay.src = reader.result;
                }.bind(this),false);

                reader.readAsDataURL(this.editCategoryData.image);
            },

            updateCategory: async function () {
                console.log('update category');

                let formData = new FormData();
                formData.append('name', this.editCategoryData.name);
                formData.append('image', this.editCategoryData.image);
                formData.append('_method','put');

                try {
                    const response = await categoryServices.updateCategory(this.editCategoryData.id, formData);

                    this.categories.map(category => {
                        if (category.id == response.data.id)
                        {
                            for (let key in response.data)
                            {
                                category[key] = response.data[key];
                            }
                        }
                    });

                    this.hideEditCategoryModal();

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });

                    this.loadCategories();

                }catch (error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
        }
    }
</script>

<style scoped>

</style>