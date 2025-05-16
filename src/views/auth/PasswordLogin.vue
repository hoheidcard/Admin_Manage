<template>
  <div class="login-inner-card">
    <div class="logo">
      <img src="/images/logo/logo.png" alt="">
    </div>
    <div class="card">
      <form class="form" @submit.prevent="onSubmitLogin">
        <div class="login-heading">
          <h3>Sign In</h3>
        </div>
        <div class="form-item mb-16">
          <div class="title text-white">User Id</div>
          <input type="text" v-model="formVar.loginId" placeholder="Enter User Id">
          <div class="err-msg" v-if="formVar.submit && loginIdValid">{{ loginIdValid }}</div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Password</div>
          <input type="password" name="password" v-model="formVar.password" placeholder="Enter Password">
          <div class="err-msg" v-if="formVar.submit && passwordValid">{{ passwordValid }}</div>
        </div>
        <div class="remember-row flex align-center justify-space gap-16 mb-16">
          <label for="check" class="text-small flex align-center gap-10 pointer">
            <input type="checkbox" id="check" class="w-max pointer">
            <div class="text">Remember me</div>
          </label>
          <router-link to="/forgot" class="text-small text-primary f-w-bold">Forgot Password?</router-link>
        </div>
        <div class="submit-btn">
          <button type="submit" class="btn primary-btn w-100">Sign In</button>
        </div>
      </form>
    </div>
    <div class="reg-row flex align-center gap-16">
      <div class="text  text-grey">Login Via OTP</div>
      <router-link to="/otp-login" class="btn white-btn">Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  submit: false,
  loginId: null,
  password: null,
})
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLogin = (e) => {
  e.preventDefault();
  if (
    loginIdValid.value ||
    passwordValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/crmLogin", { loginId: formVar.loginId, password:formVar.password, roles: 'ROOT', passwordStatus: true });
};

/* Functions/Methods */
/* Validation */
const loginIdValid = computed(() => {
  if (!formVar.loginId) {
    return "Please Enter Your Login Id";
  }
});

const passwordValid = computed(() => {
  if (!formVar.password) {
    return "Please Enter Your Password";
  }
});
</script>

<style></style>
