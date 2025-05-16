<template>
  <section class="menu-wrapper desk-view">
    <div class="container">
      <div class="menu-list">
        <router-link to="/agent/dashboard" class="menu-list-item">
          <div class="menu-list-title">Dashboard</div>
        </router-link>
        <div class="menu-list-item">
          <div class="menu-list-title">
            School
            <icon-down-single-arrow></icon-down-single-arrow>
          </div>
          <div class="sub-list">
            <router-link to="/agent/school" class="sub-list-item main-item">
              <div class="icon">
                <icon-student></icon-student>
              </div>
              <div class="sub-list-title">School List</div>
            </router-link>
            <router-link to="/agent" class="sub-list-item">
              <div class="icon">
                <icon-status></icon-status>
              </div>
              <div class="sub-list-title">Report</div>
            </router-link>
          </div>
        </div>
        <router-link to="/agent/users" class="menu-list-item">
          <div class="menu-list-title">Users</div>
        </router-link>
        <div class="menu-list-item">
          <div class="menu-list-title">
            Design
            <icon-down-single-arrow></icon-down-single-arrow>
          </div>
          <div class="sub-list">
            <router-link to="/agent/card-design" class="sub-list-item main-item">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="sub-list-title">ID Card</div>
            </router-link>
            <router-link to="/agent/card-list" class="sub-list-item">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="sub-list-title">Id Card List</div>
            </router-link>
          </div>
        </div>
        <div class="menu-list-item">
          <div class="menu-list-title">
            Services
            <icon-down-single-arrow></icon-down-single-arrow>
          </div>
          <div class="sub-list">
            <router-link to="/agent" class="sub-list-item main-item">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="sub-list-title">Service 1</div>
            </router-link>
            <router-link to="/agent" class="sub-list-item">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="sub-list-title">Service 2</div>
            </router-link>
            <router-link to="/agent" class="sub-list-item">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="sub-list-title">Service 3</div>
            </router-link>
          </div>
        </div>
        <!-- <router-link to="/agent" class="menu-list-item">
          <div class="menu-list-title">Calendar</div>
        </router-link>
        <router-link to="/agent" class="menu-list-item">
          <div class="menu-list-title">Settings</div>
        </router-link> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

// const
const dash = reactive({
  agentList: false,
  cardList: false,
})
// const

// function

// function

</script>

<style>

</style>