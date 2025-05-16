<template>
  <div class="login-inner-card">
    <div class="logo">
      <img src="/images/logo/logo.png" alt="" />
    </div>
    <div class="card">
      <form action="" class="form">
        <div class="login-heading">
          <h3>Forgot password</h3>
        </div>
        <ul>
          <li class="data-text">
            Usernames are in the form of an
            <span class="text-primary">phone number</span>.
          </li>
          <li class="data-text">Passwords are case sensitive.</li>
          <li class="data-text">
            Enter your <span class="text-primary">username</span> .
          </li>
          <li class="data-text">
            To reset your password, enter your phone number.
          </li>
        </ul>
        <div class="u-name" v-if="!storeVar.forgotPasswordStatus">
          <div class="form-item mb-16">
            <div class="title text-white">Username</div>
            <input
              type="text"
              v-model="formVar.userName"
              placeholder="Enter Username"
              maxlength="30"
            />
            <div class="err-msg" v-if="formVar.submit && userNameValid">
              {{ userNameValid }}
            </div>
          </div>
          <div class="otp" v-if="storeVar.forgotOtpStatus">
            <div class="form-item mb-16">
              <div class="title text-white">OTP</div>
              <input
                type="number"
                v-model="formVar.otp"
                placeholder="Enter OTP"
                maxlength="4"
                @keydown="isNumber($event)"
              />
              <div class="err-msg" v-if="formVar.submit && otpValid">
                {{ otpValid }}
              </div>
            </div>
          </div>
          <div class="remember-row flex align-center justify-end gap-16 mb-16">
            <router-link to="/login" class="text-small text-primary f-w-bold"
              >Remember Password?</router-link
            >
          </div>
        </div>
        <div v-if="storeVar.forgotPasswordStatus">
          <div class="pass">
            <ul>
              <li class="data-text">
                Password must contain atleast :
                <span class="text-primary"
                  >8 characters, 1 letter, 1 number</span
                >
                .
              </li>
            </ul>
            <div class="form-item mb-16">
              <div class="title">New Password</div>
              <input
                type="password"
                name="password"
                v-model="formVar.password"
                placeholder="Enter New Password"
              />
              <div class="err-msg" v-if="formVar.submit && passwordValid">
                {{ passwordValid }}
              </div>
            </div>
            <div class="form-item mb-16">
              <div class="title">Confirm Password</div>
              <input
                type="password"
                name="confirmPassword"
                v-model="formVar.cPassword"
                placeholder="Enter Confirm Password"
              />
              <div
                class="err-msg"
                v-if="formVar.submit && confirmPasswordValid"
              >
                {{ confirmPasswordValid }}
              </div>
            </div>
          </div>
        </div>
        <div class="submit-btn flex gap-16">
          <button class="btn white-btn w-50">Cancel</button>
          <button
            type="button"
            class="btn primary-btn w-50"
            @click="onSubmitLogin"
          >
            Continue
          </button>
        </div>
      </form>
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
  cPassword: null,
  userName: null,
  otp: null,
});
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLogin = (e) => {
  e.preventDefault();
  if (!storeVar.value.forgotPasswordStatus && !storeVar.value.forgotOtpStatus) {
    if (userNameValid.value) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("Auth/forgotPassword", {
      loginId: formVar.userName,
      roles: "ROOT",
    });
    // storeVar.value.forgotOtpStatus = true
  } else if (
    !storeVar.value.forgotPasswordStatus &&
    storeVar.value.forgotOtpStatus
  ) {
    if (otpValid.value) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("Auth/forgotVerifyOtp", {
      loginId: formVar.userName,
      otp: formVar.otp,
      roles: "ROOT",
    });
    // storeVar.value.forgotOtpStatus = false
    // storeVar.value.forgotPasswordStatus = true
  } else if (
    storeVar.value.forgotPasswordStatus &&
    !storeVar.value.forgotOtpStatus
  ) {
    if (passwordValid.value || confirmPasswordValid.value) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("Auth/resetPassword", {
      id: storeVar.value.id,
      password: formVar.password,
      confirmPassword: formVar.cPassword,
    });
  }
};
/* Functions/Methods */
/* Validation */
const userNameValid = computed(() => {
  if (!formVar.userName) {
    return "Please Enter Your Username";
  }
});
const otpValid = computed(() => {
  if (!formVar.otp) {
    return "Please Enter Your OTP";
  }
});
const passwordValid = computed(() => {
  if (!formVar.password) {
    return "Please Enter Your Password";
  }
});
const confirmPasswordValid = computed(() => {
  if (!formVar.cPassword) {
    return "Please Enter Your Password";
  } else if (formVar.password !== formVar.cPassword) {
    return "Password and Confirm Password are not Match";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  // Allow numbers (0-9), the backspace key (keyCode 8), tab key (keyCode 9), number pad keys (keyCode 96-105),
  // left arrow (keyCode 37), and right arrow (keyCode 39)
  if (
    /^[0-9]+$/.test(char) ||
    e.keyCode === 8 ||
    e.keyCode === 9 ||
    e.keyCode === 37 ||
    e.keyCode === 39 ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    return true;
  } else {
    e.preventDefault();
  }
}

/* Validation */
</script>

<style></style>
