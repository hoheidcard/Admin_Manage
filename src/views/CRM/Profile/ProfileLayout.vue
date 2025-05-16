<template>
  <section class="profile-layout">
    <div class="container">
      <div class="left-card card ">
        <div class="top-info">
          <div class="img">
            <img v-if="storeVar.profile" :src="storeVar.profile" alt="">
            <img v-else src="/images/png/no-image.png" alt="">
          </div>
          <div class="info">
            <div class="name">
              <div class="text">Welcome,</div> 
              <h3>{{ storeVar.name }}</h3>
            </div>
            <div class="about f-w-bold">
              {{ storeVar.account?.roles }}
            </div>
          </div>
        </div> 
        <div class="bottom-links bottom-links-desk">
          <router-link to="/crm/profile" class="profile-link">
            <div class="title">My Details</div>
          </router-link>
          <router-link to="/crm/permission" class="profile-link">
            <div class="title">Permissions</div>
          </router-link>
          <router-link to="/crm/password-reset" class="profile-link">
            <div class="title">Password Reset</div>
          </router-link>
        </div>
      </div>
      <div class="right-card card">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import { useRoute, useRouter } from "vue-router"

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: '',
  status: 'ACTIVE',
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,
})
/* Lifecycle/Hooks */
onBeforeMount(() => {
  getProfile()
})
/* Lifecycle/Hooks */
/* Functions/Methods */
function getProfile() {
  store.dispatch("Auth/getProfile");
}
/* Functions/Methods */
</script>

<style>

</style>