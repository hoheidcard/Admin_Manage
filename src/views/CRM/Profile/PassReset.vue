<template>
  <section class="reset-pass">
    <form action="" class="form">
      <div class="row pt-2-r pb-2-r">
        <div class="form-item col-25">
          <input type="password" name="currentPassword" v-model="formVar.oldPassword" placeholder="Current Password">
          <div class="err-msg" v-if="formVar.submit && oldPasswordValid">{{ oldPasswordValid }}</div>
          <!-- <div class="err-msg">Please enter current password</div> -->
        </div>
        <div class="form-item col-25">
          <input type="password" name="password" v-model="formVar.password" placeholder="New Password">
          <div class="err-msg" v-if="formVar.submit && passwordValid">{{ passwordValid }}</div>
          <!-- <div class="err-msg">Please enter new password</div> -->
        </div>
        <div class="form-item col-25">
          <input type="password" name="confirmPassword" v-model="formVar.confirmPassword" placeholder="Confirm Password">
          <div class="err-msg" v-if="formVar.submit && confirmPasswordValid">{{ confirmPasswordValid }}</div>
          <!-- <div class="err-msg">Please enter confirm password</div> -->
        </div>
        <div class="form-item col-25">
          <button type="button" class="btn white-btn" @click="updatePassword" >Save</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import { useRoute, useRouter } from "vue-router"

/* Constants */
const store = useStore();

const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  submit: false,
  oldPassword: null,
  password: null,
  confirmPassword: null,
});

/* Constants */

/* Lifecycle/Hooks */

/* Lifecycle/Hooks */
/* Functions/Methods */
function updatePassword() {
  if (
    oldPasswordValid.value ||
    passwordValid.value ||
    confirmPasswordValid.value
  ) {
    formVar.submit = true
    return
  }
  formVar.submit = false
  store.dispatch("Auth/updatePassword", {
    oldPassword: formVar.oldPassword,
    password: formVar.password,
    confirmPassword: formVar.confirmPassword,
  });
}

/* Functions/Methods */

/* Search Function */
/* Search Function */

/* Validation */
const oldPasswordValid = computed(() => {
  if (!formVar.oldPassword) {
    return "Please Enter Current Password";
  }
});
const passwordValid = computed(() => {
  let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/
  if (!formVar.password) {
    return "Please Enter New Password";
  } else if (!passwordValid.test(formVar.password)) {
    return "password must have at least one uppercase and lowercase character,one number and special character!";
  }
});
const confirmPasswordValid = computed(() => {
  if (!formVar.confirmPassword) {
    return "Please Enter Confirm Password";
  } else if (formVar.password !== formVar.confirmPassword) {
    return "Password and Confirm Password are Not Match";
  }
});
/* Validation */


</script>

<style></style>