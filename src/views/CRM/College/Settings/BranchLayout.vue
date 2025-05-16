<template>
  <section class="profile-layout">
    <div class="container">
      <div class="left-card card">
        <div class="top-info">
          <div class="img" @click="openUpload">
            <img v-if="storeVar.image" :src="storeVar.image" alt="" />
            <img v-else src="/images/png/no-image.png" alt="" />
            <input
              name="image"
              type="file"
              id="file-field"
              v-on:change="updatePreview"
              style="display: none"
            />
          </div>
          <div class="flex">
            <div class="info w-50">
              <div class="name">
                <div class="text">Welcome,</div>
                <h3>{{ storeVar.name }}</h3>
              </div>
              <div class="about flex">
                <div class="f-w-bold titles">Account Type</div>
                <div class="desc">
                  <strong>:</strong> &nbsp; {{ storeVar.type }}
                </div>
              </div>
              <div class="about flex">
                <div class="f-w-bold titles">Created By</div>
                <div class="desc">
                  <strong>:</strong> &nbsp; {{ storeVar.updated?.staffDetail?.name }}
                </div>
              </div>
              <div class="about flex">
                <div class="f-w-bold titles">Address</div>
                <div class="desc">
                  <strong>:</strong> &nbsp; {{ storeVar.address }}
                </div>
              </div>
            </div>
            <div class="info w-50">
              <div class="about flex">
                <div class="f-w-bold titles">Contact No</div>
                <div class="desc">
                  <strong>:</strong> &nbsp; {{ storeVar.contactNo }}
                </div>
              </div>
              <div class="about flex">
                <div class="f-w-bold titles">Email</div>
                <div class="desc">
                  <strong>:</strong> &nbsp; {{ storeVar.email }}
                </div>
              </div>
              <div class="about flex">
                <div class="f-w-bold titles">Status</div>
                <div class="desc">
                  <strong>:</strong> &nbsp; {{ storeVar.status }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-links bottom-links-desk">
          <router-link
            :to="`/crm/college/setting/class-list?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Class</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/division-list?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Section</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/books-category?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Book Category</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/department?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Department</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/designation?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Designation</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/subject?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Subject</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/permission?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Permission</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/csv-download?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Student CSV Download</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="`/crm/college/setting/staff-csv-download?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`"
            class="profile-link"
          >
            <div class="title">Staff CSV Download</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <!-- <router-link :to="`/crm/college/setting/import-student?id=${formVar.organizationId}&settingId=${formVar.organizationSettingId}`" class="profile-link">
            <div class="title">Import Student</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link> -->
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
import { useRoute, useRouter } from "vue-router";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Organization);

const formVar = reactive({
  organizationSettingId: null,
  organizationId: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationSettingId = route.query.settingId;
    formVar.organizationId = route.query.id;
    getOneOrganization();
    getOneOrganizationSettings();
  }
});
/* Lifecycle/Hooks */

/* Functions/Methods */
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.organizationSettingId,
  });
}
function getOneOrganization() {
  store.dispatch("Organization/getOneOrganization", {
    id: formVar.organizationId,
  });
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
    store.dispatch("Organization/updateOrganizationImage", {
      id: formVar.organizationId,
      file: files[0],
    });
}
/* Functions/Methods */
</script>

<style></style>
