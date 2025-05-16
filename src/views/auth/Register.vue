<template>
  <div class="login-inner-card">
    <div class="logo">  
      <img src="/images/logo/logo.png" alt="">
    </div>
    <div class="card">
      <form action="" class="form">
        <div class="login-heading">
          <h3>Sign Up</h3>
        </div>
        <div class="form-item mb-16">
          <div class="title text-white">Name</div>
          <input type="text" placeholder="Enter Name">
          <!-- <div class="err-msg">Please enter name</div> -->
        </div>
        <div class="form-item mb-16">
          <div class="title text-white">Username (Email Id)</div>
          <input type="text" placeholder="Enter Username">
          <!-- <div class="err-msg">Please enter username</div> -->
        </div>
        <div class="form-item mb-16">
          <div class="title">Create Password</div>
          <input type="password" name="password" placeholder="Enter Password">
          <!-- <div class="err-msg">Please enter Password</div> -->
        </div>
        <div class="submit-btn">
          <button class="btn primary-btn w-100">Sign Up</button>
        </div>
      </form>
    </div>
    <div class="reg-row flex align-center gap-16">
      <div class="text text-small text-grey">Alredy have an account</div>
      <router-link to="/login" class="btn white-btn">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>