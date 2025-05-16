<template>
  <section class="profile-layout">
    <div class="container">
      <div class="left-card card ">
        <div class="top-info">
          <div class="img" @click="openUpload">
            <img v-if="storeVar.logo" :src="storeVar.logo" alt="">
            <img v-else src="/images/png/no-image.png" alt="">
            <input
              name="image"
              type="file"
              id="file-field"
              v-on:change="updatePreview"
              style="display: none"
            />
          </div>
          <div class="info">
            <div class="name">
              <div class="text">Welcome,</div>
              <h3>{{ storeVar.firmName }}</h3>
            </div>
            <div class="about flex">
              <div class="f-w-bold">Account Type :</div>
              <div> &nbsp; {{ storeVar.accountType }}</div>
            </div>
            <div class="about flex">
              <div class="f-w-bold">Address :</div>
              <div> &nbsp; {{ storeVar.firmAddress }}</div>
            </div>
          </div>
          <div class="info">
            <div class="about flex">
              <div class="f-w-bold">Contact No :</div>
              <div> &nbsp; {{ storeVar.ownerMobile }}</div>
            </div>
            <div class="about flex">
              <div class="f-w-bold">Email :</div>
              <div> &nbsp; {{ storeVar.firmEmail }}</div>
            </div>
            <div class="about flex">
              <div class="f-w-bold">Status :</div>
              <div> &nbsp; {{ storeVar.status }}</div>
            </div>

          </div>



        </div>
        <div class="bottom-links bottom-links-desk">
          <router-link :to="`/crm/partners/setting/department?id=${formVar.partnerId}&settingId=${formVar.partnerSettingId}`" class="profile-link">
            <div class="title">Department</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="`/crm/partners/setting/designation?id=${formVar.partnerId}&settingId=${formVar.partnerSettingId}`" class="profile-link">
            <div class="title">Designation</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link :to="`/crm/partners/setting/permission?id=${formVar.partnerId}&settingId=${formVar.partnerSettingId}`" class="profile-link">
            <div class="title">Permission</div>
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
const storeVar = computed(() => store.state.Partners);

const formVar = reactive({
  partnerSettingId: null,
  partnerId:null,
})
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.partnerSettingId = route.query.settingId
    formVar.partnerId = route.query.id
    getOneOrganization()
    getOneOrganizationSettings()
  }
})
/* Lifecycle/Hooks */

/* Functions/Methods */
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", { id: formVar.partnerSettingId });
}
function getOneOrganization() {
  store.dispatch("Partners/getOnePartner", { id: formVar.partnerId });
}
function openUpload() {
  document.getElementById("file-field").click();
}
function updatePreview(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    storeVar.value.image = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  // formVar.file = files[0];
  if (files[0])
    store.dispatch("Partners/updatePartnerImage", {
      id: formVar.partnerId,
      file: files[0],
    });
}
/* Functions/Methods */
</script>

<style>

</style>
