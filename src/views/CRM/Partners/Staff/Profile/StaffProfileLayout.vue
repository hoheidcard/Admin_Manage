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
          <router-link :to="'/crm/staff-profile?id='+formVar.staffAccountId + '&settingId='+formVar.settingId" class="profile-link">
            <div class="title">Profile</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="'/crm/staff-class?id='+formVar.staffAccountId + '&settingId='+formVar.settingId" class="profile-link">
            <div class="title">Class</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="'/crm/staff-department?id='+formVar.staffAccountId + '&settingId='+formVar.settingId" class="profile-link">
            <div class="title">Department</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="'/crm/staff-division?id='+formVar.staffAccountId + '&settingId='+formVar.settingId" class="profile-link">
            <div class="title">Section</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="'/crm/staff-subject?id='+formVar.staffAccountId + '&settingId='+formVar.settingId" class="profile-link">
            <div class="title">Subject</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="'/crm/staff-documents?id='+formVar.staffAccountId + '&settingId='+formVar.settingId" class="profile-link">
            <div class="title">Documents</div>
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

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router"

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationStaff);

const formVar = reactive({
  staffAccountId:null,
  settingId:null,
})
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.staffAccountId = route.query.id
    formVar.settingId = route.query.settingId
    getOneStaff()
    getOneOrganizationSettings()
  }
})
/* Lifecycle/Hooks */
/* Functions/Methods */
function getOneStaff() {
  store.dispatch("OrganizationStaff/getOneStaff", { id: formVar.staffAccountId });
}
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", { id: formVar.settingId });
}
/* Functions/Methods */
</script>

<style>

</style>
