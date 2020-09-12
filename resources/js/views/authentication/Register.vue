<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                        <div class="card-body">
                            <form v-on:submit.prevent="Register">

                                <div class="form-group">
                                    <label class="small mb-1" for="inputFirstName">Name</label>
                                    <input v-model="user.name" class="form-control py-4" id="inputFirstName" type="text" placeholder="Enter name" />
                                    <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                                </div>

                                <div class="form-group">
                                    <label class="small mb-1" for="inputEmailAddress">Email</label>
                                    <input v-model="user.email" class="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                </div>

                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputPassword">Password</label>
                                            <input v-model="user.password" class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" />
                                            <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                                            <input v-model="user.password_confirmation" class="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password" />
                                            <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group mt-4 mb-0">
                                    <button type="submit" class="btn btn-primary btn-block">Create Account</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <div class="small"><router-link to="/login">Have an account? Go to login</router-link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as authServices from '../../services/auth_services';

    export default{
        created()
        {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },

        data(){
            return{
                user: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },

                errors: {}
            }
        },

        methods: {
            Register: async function(){
                try {
                    const response = await authServices.register(this.user);


                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });

                    this.user.name = '';
                    this.user.email = '';
                    this.user.password = '';
                    this.user.password_confirmation = '';

                    this.$router.push('/login');

                }catch (error){
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;

                        default:
                            this.flashMessage.error({
                                message: 'Something Went Wrong',
                                time: 5000
                            });
                            break;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>