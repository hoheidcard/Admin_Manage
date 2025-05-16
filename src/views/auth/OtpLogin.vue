<template>
  <div class="login-inner-card">
    <div class="logo">
      <img src="/images/logo/logo.png" alt="" />
    </div>
    <div class="card">
      <form class="form" @submit.prevent="onSubmitLogin">
        <div class="login-heading">
          <h3>Sign In</h3>
        </div>
        <div class="form-item mb-16">
          <div class="title text-white">User Id</div>
          <input
            type="text"
            v-model="formVar.loginId"
            placeholder="Enter User Id"
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && loginIdValid">
            {{ loginIdValid }}
          </div>
        </div>
        <div class="form-item mb-16" v-if="storeVar.otpStatus">
          <div class="title">OTP</div>
          <input
            type="text"
            name="otp"
            v-model="formVar.otp"
            placeholder="Enter OTP"
            maxlength="4"
            @keydown="isNumber($event)"
          />
          <div class="err-msg" v-if="formVar.submit && otpValid">
            {{ otpValid }}
          </div>
        </div>
        <div class="remember-row flex align-center justify-space gap-16 mb-16">
          <label
            for="check"
            class="text-small flex align-center gap-10 pointer"
          >
          </label>
          <div class="send-again" v-if="storeVar.otpStatus">
            Didn't get it ?
            <strong class="code-msg" v-if="formVar.timerRunning"
              >Resend Code in {{ formVar.time }} Seconds</strong
            >
            <strong class="resend" v-else @click="resentOtp()"
              >Resend OTP</strong
            >
          </div>
        </div>
        <div class="submit-btn">
          <button
            type="submit"
            v-if="storeVar.otpStatus"
            class="btn primary-btn w-100"
          >
            Sign In
          </button>
          <button type="submit" v-else class="btn primary-btn w-100">
            Get Otp In
          </button>
        </div>
      </form>
    </div>
    <div class="reg-row flex align-center gap-16">
      <div class="text text-grey">Login Via Password</div>
      <router-link to="/login" class="btn white-btn">Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, reactive, ref } from "vue";
import { useStore } from "vuex";

/* Constants */
const otpValue = ref("");
const store = useStore();
const storeVar = computed(() => store.state.Auth);
const formVar = reactive({
  submit: false,
  submitOtp: false,
  loginId: null,
  input1: null,
  input2: null,
  input3: null,
  input4: null,
  otp: "",

  time: 30,
  timerRunning: false,
  intervalId: null,
});

/* Constants */

/* Lifecycle/Hooks */
onBeforeUnmount(() => {
  storeVar.value.otpStatus = false;
});
/* Lifecycle/Hooks */

/* Functions/Methods */

const onSubmitLogin = () => {
  console.log("Login ID:", formVar.loginId); 
  if (storeVar.value.otpStatus) {
    if (otpValid.value) {
      formVar.submitOtp = true;
      return;
    }
    formVar.submitOtp = false;
    store.dispatch("Auth/crmVerifyOtp", {
      loginId: formVar.loginId,
      otp: formVar.otp,
      roles: "ROOT",
    });
  } else {
    if (loginIdValid.value) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    startTimer();
    store.dispatch("Auth/crmLogin", {
      loginId: formVar.loginId,
      password: null,
      roles: "ROOT",
      passwordStatus: false,
    });
  }
};

function resentOtp() {
  if (loginIdValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  startTimer();
  store.dispatch("Auth/crmLogin", {
    loginId: formVar.loginId,
    password: null,
    roles: "ROOT",
    passwordStatus: false,
  });
}

function startTimer() {
  formVar.timerRunning = true;
  formVar.time = 30;
  formVar.intervalId = setInterval(() => {
    if (formVar.time > 1) {
      formVar.time--;
    } else {
      clearInterval(formVar.intervalId);
      formVar.timerRunning = false;
    }
  }, 1000);
}

/* Functions/Methods */

/* Validation */
const loginIdValid = computed(() => {
  if (!formVar.loginId) {
    return "Please Enter Your Registered Phone Number";
  }
});
const otpValid = computed(() => {
  if (!formVar.otp) {
    return "Please Enter OTP!";
  } else if (formVar.otp.length != 4) {
    return "Pleade Enter Valid OTP !";
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
function phnum(e) {
  formVar.loginId = e.slice(0, 10);
}
/* Validation */
</script>
