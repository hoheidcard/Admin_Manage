<template>
  <div class="login-inner-card">
    <div class="logo">  
      <img src="/images/logo/logo.png" alt="">
    </div>
    <div class="card">
      <form action="" class="form">
        <div class="login-heading">
          <h3>Reset password</h3>
        </div>
        <ul >
          <li class="data-text">Password must contain atleast : <span class="text-primary">8 characters, 1 letter, 1 number</span> . </li>
        </ul>
        <div class="pass">
          <div class="form-item mb-16">
            <div class="title">New Password</div>
            <input type="password" name="newPassword" placeholder="Enter New Password">
            <!-- <div class="err-msg">Please enter new password</div> -->
          </div>
          <div class="form-item mb-16">
            <div class="title">Confirm Password</div>
            <input type="password" name="confirmPassword" placeholder="Enter Confirm Password">
            <!-- <div class="err-msg">Please enter confirm password</div> -->
          </div>
          <div class="form-item mb-16">
            <div class="title">Security Question</div>
            <Select v-model="formVar.question" :options="questionOptions" placeholder="Select Question"></Select>
            <!-- <div class="err-msg">Please select security question</div> -->
          </div>
          <div class="form-item mb-16">
            <div class="title">Security Answer</div>
            <input type="text" placeholder="Enter Security Answer">
            <!-- <div class="err-msg">Please enter security answer</div> -->
          </div>
        </div>
        <div class="submit-btn flex gap-16">
          <button class="btn primary-btn w-100">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// const
const formVar = reactive({
  question: null,

})

const questionOptions = [
  { id: 1, name: 'What is your pet name ' },
  { id: 2, name: 'who is favorite cricketer' },
]
// const

</script>

<style>

</style>