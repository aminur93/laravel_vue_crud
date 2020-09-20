<template>
    <div>
        <div class="container-fluid">
            <h1 class="mt-4">Brand</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Brand</li>
            </ol>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="text-left">
                                <span>Brand Management</span>
                                <button type="button" v-on:click="showNewBrandModal" class="btn btn-light float-right"><span class="fa fa-plus"></span> Create New</button>
                            </div>

                        </div>

                        <div class="card-body">
                            <div class="table-responsive">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <b-modal ref="newBrandModal" hide-footer title="Add new Brand">
            <div class="d-block">
                <form v-on:submit.prevent="createBrand">
                    <div class="form-group">
                        <label for="name">Name : </label>
                        <input type="text" class="form-control" id="name" v-model="brandData.name" placeholder="Enter Brand Name">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>

                    <hr>

                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewBrandModal">Cancel</button>
                        <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Save</button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>


    import * as brandServices from '../services/brand_service';

    export default{
        name: "brand",
        data(){
            return{

                brands: [],

                brandData:{
                    name: ''
                },
                errors: {}
            }
        },

        mounted(){
            this.loadAllBrand();
        },

        methods:{

            loadAllBrand: async function(){
                try {
                    const response = await brandServices.loadBrand();
                    this.brands = response.data.brand;
                }catch(error){
                    this.flashMessage.error({
                        message: 'Brand data not found',
                        time: 5000
                    });
                }
            },

            showNewBrandModal(){
                //show Modal
                this.$refs.newBrandModal.show();
            },
            hideNewBrandModal(){
                this.$refs.newBrandModal.hide();
            },

            createBrand: async function(){
                try {
                    let formData = new FormData();

                    formData.append('name', this.brandData.name);

                    const response = await brandServices.createBrand(formData);

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });

                    this.hideNewBrandModal();

                }catch (error){
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
        }
    }
</script>