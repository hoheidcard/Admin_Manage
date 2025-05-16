<template>
  <section class="profile-layout">
    <div class="container">
      <div class="left-card card ">
        <div class="top-info">
          <div class="img">
            <img src="/images/jpg/users/profile-1.jpg" alt="">
          </div>
          <div class="info">
            <div class="name">
              <div class="text">Welcome,</div> 
              <h3>Mrs. Rekha Deshmukh</h3>
            </div>
            <div class="about f-w-bold">
              Teacher
            </div>
          </div>
        </div> 
        <div class="bottom-links bottom-links-desk">
          <router-link to="/crm/teacher-details" class="profile-link">
            <div class="title">Teacher Details</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link to="/crm/teacher-permission" class="profile-link">
            <div class="title">Permissions</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
        </div>
      </div>
      <div class="right-card card">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>