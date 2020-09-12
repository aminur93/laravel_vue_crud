<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                        <div class="card-body">
                            <form v-on:submit.prevent="login">
                                <div class="form-group">
                                    <label class="small mb-1" for="inputEmailAddress">Email</label>
                                    <input v-model="user.email" class="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                </div>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputPassword">Password</label>
                                    <input v-model="user.password" class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" />
                                    <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input v-model="user.remember_me" class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                        <label class="custom-control-label" for="rememberPasswordCheck">Remember password</label>

                                    </div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <router-link class="small" to="/reset-password">Forgot Password?</router-link>
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <div class="small"><router-link to="/register">Need an account? Sign up!</router-link></div>
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
                    email: '',
                    password: '',
                    remember_me: false
                },

                errors: {}
            }
        },

        methods: {

            login: async function(){

                try{
                    let response = await authServices.login(this.user);

                    this.errors = {};

                    this.$router.push('/home');

                    this.user.email = '';
                    this.user.password = '';

                }catch(error){
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.message,
                                time: 5000
                            });
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

<style>

</style>