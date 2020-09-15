<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Password Recovery Request</h3></div>
                        <div class="card-body">
                            <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                            <form v-on:submit.prevent="onSubmit">
                                <div class="form-group">
                                    <label class="small mb-1" for="inputEmailAddress">Email</label>
                                    <input v-model="user.email" class="form-control py-4" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <router-link class="small" to="/login">Return to login</router-link>
                                    <button type="submit" ref="btnSubmit" class="btn btn-primary">Reset Password</button>
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

        data(){
          return{
              user: {
                  email: ''
              },
              btnOldHtml: '',
              errors: {},

          }
        },
        created()
        {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },

        methods: {
            onSubmit: async function(){
                this.$router.push({name: 'reset-password', params: {email: this.user.email}});
                try{
                    this.disableSubmission(this.$refs.btnSubmit);
                    this.errors = {};
                    const response = await authServices.resetPasswordRequest(this.user);
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.$router.push({name: 'reset-password', params: {email: this.user.email}});
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

                    this.enableSubmission(this.$refs.btnSubmit);
                }
            },

            disableSubmission(btn)
            {
                btn.setAttribute('disabled','disabled');
                this.btnOldHtml = btn.innerHTML;
                btn.innerHTML = "<span class='fa fa-spinner fa-spin'></span>Please Wait..";
            },

            enableSubmission(btn)
            {
                btn.removeAttribute('disabled','disabled');
                btn.innerHTML = this.btnOldHtml;
            }
        }
    }
</script>

<style>

</style>