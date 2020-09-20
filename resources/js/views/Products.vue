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
                                <span>{{comName }} Management</span>

                                <button type="button" v-on:click="showNewProductModal" class="btn btn-light ml-2 float-right"><span class="fa fa-plus"></span> Create New</button>

                                <button type="button" v-on:click="importProductModal" class="btn btn-primary ml-2 float-right"><i class="fas fa-file-import"></i> Import Product</button>

                                <a v-on:click="exportProductData()" class="btn btn-info ml-2 float-right"><span class="fa fa-cloud"></span> Export Excel</a>
                                <a v-on:click="exportPdfProductData()" class="btn btn-success ml-2 float-right"><i class="fas fa-file-pdf"></i> Export Pdf</a>

                            </div>

                        </div>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category Name</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category Name</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                    </tfoot>
                                    <tbody>
                                    <tr v-for="(product, index) in products" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ product.category.name }}</td>
                                        <td>{{ product.name }}</td>
                                        <td>
                                            <img :src="`${$store.state.serverPath}/storage/${product.image}`" :alt="product.name" class="image-table">
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-primary" v-on:click="editProduct(product)">
                                                <span class="fa fa-edit"></span>
                                            </button>
                                            <button class="btn btn-sm btn-danger" v-on:click="deleteProducts(product)">
                                                <span class="fa fa-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div class="text-center" v-show="moreExist">
                                    <button class="btn btn-primary" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> Load More</button>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <b-modal ref="newProductModal" hide-footer title="Add new Product">
            <div class="d-block">
                <form v-on:submit.prevent="createProducts">

                    <div class="form-group">
                        <label for="category_id">Category : </label>
                        <select v-model="productData.category_id" id="category_id" class="form-control">
                            <option value="">Select Category</option>
                            <option v-for="(category, index) in categories" :value="category.id" :key="index"> {{ category.name }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="name">Name : </label>
                        <input type="text" class="form-control" id="name" v-model="productData.name" placeholder="Enter name">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>

                    <div class="form-group">
                        <label for="image">Image : </label>
                        <input type="file" class="form-control" id="image" v-on:change="attachImage" ref="newProductImage">
                        <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
                        <br>
                        <div v-if="productData.image.name">
                            <img src="" ref="newProductImageDisplay" class="w-150px">
                        </div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewProductModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Save</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <b-modal ref="newImportProductModal" hide-footer title="Import  Product">
            <div class="d-block">
                <form v-on:submit.prevent="importProducts">

                    <div class="form-group">
                        <label for="import">Import : </label>
                        <input type="hidden" ref="importFile">
                        <input type="file" name="import_file" id="import" v-on:change="uploadExcel($event)" ref="importProductExcel" class="form-control">
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="importHideproductModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Import Now</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <b-modal ref="EditProductModal" hide-footer title="Update Product">
            <div class="d-block">
                <form v-on:submit.prevent="updateProduct">

                    <div class="form-group">
                        <label for="category_id">Category : </label>
                        <select v-model="editProductData.category_id" id="category_id" class="form-control">
                            <option value="">Select Category</option>
                            <option v-for="(category, index) in categories" :value="category.id" :key="index" :selected="category.id == editProductData.category_id"> {{ category.name }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="name">Name : </label>
                        <input type="text" class="form-control" id="name" v-model="editProductData.name" placeholder="Enter name">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>

                    <div class="form-group">
                        <label for="image">Image : </label>
                        <input type="file" class="form-control" id="image" v-on:change="editAttachImage" ref="editProductImage">
                        <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
                        <br>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editProductData.image}`" ref="editProductImageDisplay" class="w-150px">
                        </div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideEditProductModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Edit</button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import * as productServices from '../services/product_services';

    export default {
        data(){
            return{
                comName: "Product",
                categories: [],
                products: [],
                productData: {
                    category_id: '',
                    name: '',
                    image: ''
                },
                moreExist: false,
                importData: {
                    import_file: '',
                },

                fileName: '',

                nextPage: 0,
                editProductData: {},
                errors: {},
            }
        },

        mounted()
        {
            this.loadCategories();

        },

        created(){
            this.loadProducts();
        },

        methods: {

            exportProductData: async function()
            {
                try{
                    await productServices.exportExcel();
                }catch (error){
                    this.flashMessage.error({
                        message: 'Something Went Wrong',
                        time: 5000
                    });
                }
            },

            exportPdfProductData: async function()
            {
                try{
                    const response = await productServices.exportPdf();
                    console.log(response);
                    this.flashMessage.success({
                        message: "Product Pdf Download Successfully",
                        time: 5000
                    });
                }catch (error){
                    this.flashMessage.error({
                        message: 'Something Went Wrong',
                        time: 5000
                    });
                }
            },

            loadCategories: async function()
            {
                try{
                    const response = await productServices.loadCategories();

                    this.categories = response.data;

                }catch (error){
                    this.flashMessage.error({
                        message: 'category Data Not Found',
                        time: 5000
                    });
                }

            },

            loadProducts: async function(){

                try {
                    const response = await productServices.loadProducts();
                    this.products = response.data.data;

                    if(response.data.current_page < response.data.last_page)
                    {
                        this.moreExist = true;
                        this.nextPage = response.data.current_page + 1;
                    }else {
                        this.moreExist = false;
                    }
                }catch (error){
                    this.flashMessage.error({
                        message: 'Product Data Not Found',
                        time: 5000
                    });
                }
            },

            attachImage: function(){
                //to use some file todo
                this.productData.image = this.$refs.newProductImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.newProductImageDisplay.src = reader.result;
                }.bind(this),false);

                reader.readAsDataURL(this.productData.image);
            },

            hideNewProductModal: function(){
                //hide modal
                this.$refs.newProductModal.hide();
            },

            showNewProductModal: function(){
                //show Modal
                this.$refs.newProductModal.show();
            },

            importProductModal: function () {
                //show Modal
                this.$refs.newImportProductModal.show();
            },

            importHideproductModal: function () {
                //hide modal
                this.$refs.newImportProductModal.hide();
            },


            uploadExcel: function (e) {
                this.importData.import_file = this.$refs.importProductExcel.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.importFile = reader.result;
                }.bind(this),false);

                reader.readAsDataURL(this.importData.import_file);

            },

            importProducts: async function()
            {
                let formData = new FormData();

                formData.append('import_file', this.importData.import_file);

                try {
                    const response = await productServices.importProduct(formData);
                    //console.log(response);
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.importHideproductModal();
                }catch (error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },

            createProducts: async function(){
                // store category into database

                let formData = new FormData();

                formData.append('category_id', this.productData.category_id);
                formData.append('name', this.productData.name);
                formData.append('image', this.productData.image);

                try{
                    const response = await productServices.createProducts(formData);

                    this.loadProducts();

                    this.hideNewProductModal();

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });

                    this.productData.category_id = '',
                    this.productData.name = '';
                    this.productData.image = '';
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

            deleteProducts: async function (category) {
                if (!window.confirm(`Are you sure want to delete ${category.name}`))
                {
                    return;
                }

                try {
                    const response = await productServices.deleteProduct(category.id);
                    this.loadProducts();
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

            hideEditProductModal: function () {
                this.$refs.EditProductModal.hide();
            },

            showEditProductModal: function () {
                this.$refs.EditProductModal.show();
            },


            editProduct: function(product){
                this.editProductData = product;
                this.showEditProductModal();
            },

            editAttachImage: function () {
                this.editProductData.image = this.$refs.editProductImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.editProductImageDisplay.src = reader.result;
                }.bind(this),false);

                reader.readAsDataURL(this.editProductData.image);
            },

            updateProduct: async function () {

                let formData = new FormData();

                formData.append('category_id', this.editProductData.category_id);
                formData.append('name', this.editProductData.name);
                formData.append('image', this.editProductData.image);
                formData.append('_method','put');

                try {
                    const response = await productServices.updateProduct(this.editProductData.id, formData);

                    this.hideEditProductModal();

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });

                    this.loadProducts();

                }catch (error){
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },

            loadMore: async function(){
                try{
                    const response = await productServices.loadMore(this.nextPage);
                    if(response.data.current_page < response.data.last_page)
                    {
                        this.moreExist = true;
                        this.nextPage = response.data.current_page + 1;
                    }else {
                        this.moreExist = false;
                    }

                    response.data.data.forEach(data =>{
                        this.products.push(data);
                    });
                }catch (error){
                    this.flashMessage.error({
                        message: 'Some Error',
                        time: 5000
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>