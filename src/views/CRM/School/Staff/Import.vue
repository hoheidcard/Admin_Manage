<template>
  <div class="section import-page">
    <div class="container">
      <div class="main-card mid-cardd">
        <div class="card-header">
          <div class="left">
            <div class="icon">
              <icon-download class="rotate-18"></icon-download>
            </div>
            Import Staff
          </div>
          <div class="right">
            <div class="text text-grey"></div>
          </div>
        </div>
        <div class="card-body flex justify-center">
          <div
            class="import-data flex flex-d-col align-center text-center w-90 p-6-r"
          >
            <div class="cssProgress" v-if="formVar.progressStatus">
              <div class="progress3">
                <div
                  class="cssProgress-bar cssProgress-active"
                  :data-percent="formVar.uploadPercentage"
                  :style="{ width: formVar.uploadPercentage + '%' }"
                >
                  <span class="cssProgress-label"
                    >{{ formVar.uploadPercentage }}%</span
                  >
                </div>
              </div>
            </div>
            <h4 class="mb-16">Import Students Data</h4>
            <div class="text text-grey mb-16 w-50">
              If the university or school is aware of these cases, they can
              monitor the
              <!-- <router-link to="/" class="text-primary text-small f-w-bold">Download CSV File</router-link> -->
              <a
                class="text-primary text-small f-w-bold pointer"
                @click.prevent="downloadCSV"
                >Download CSV File</a
              >
              & Upload it where threats found
            </div>
            <label for="list" class="flex justify-center">
              <input
                type="file"
                id="list"
                class="d-none"
                accept=".zip"
                @change="uploadCSV($event)"
              />
              <div class="btn white-btn">Upload ZIP File</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const images = ref([]);
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationSettings);

const fields = [
  "Sr.No.",
  "SR No.",
  "Photo No.",
  "Staff Name",
  "Guardian Name",
  "Designation",
  "DOB",
  "Mobile No. 1",
  "Mobile No. 2",
  "Address",
];

const formVar = reactive({
  submit: false,
  organizationId: null,
  organizationSettingId: null,

  file: null,
  uploadPercentage: 0,
  progressStatus: false,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    getOneOrganizationSettings();
  }
});

onBeforeUnmount(() => {
  formVar.progressStatus = false;
  formVar.uploadPercentage = 0;
});
/* Lifecycle/Hooks */
/* Functions/Methods */
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.organizationSettingId,
  });
}
const onUploadProgress = (progressEvent) => {
  formVar.uploadPercentage = Math.round(
    (progressEvent.loaded * 100) / progressEvent.total
  );
};
async function uploadCSV(event) {
  if (event) {
    formVar.progressStatus = false;
    formVar.uploadPercentage = 0;

    const file = event.target.files[0];
    if (file.type.endsWith("zip") || file.type === 'application/x-zip-compressed') {
      const formData = new FormData();
      formData.append("file", file);
      formVar.progressStatus = true;
      store.dispatch("OrganizationStaff/uploadStaffCsvFile", {
        organizationDetailId: formVar.organizationId,
        settingId: formVar.organizationSettingId,
        files: formData,
        onUploadProgress,
      });
      event.target.value = null;
    } else {
      store.dispatch("Alert/error", {
        msg: "Upload file in zip format.",
      });
    }
  } else {
    store.dispatch("Alert/error", {
      msg: "Upload file in zip format.",
    });
  }
}
const convertToCSV = (fields) => {
  const header = fields.join(",") + "\n";
  return header;
};
const downloadCSV = () => {
  if (storeVar.value.staffCsvFields) {
    const csvContent = convertToCSV(JSON.parse(storeVar.value.staffCsvFields));
    // const csvContent = convertToCSV(fields);
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    store.dispatch("Alert/error", {
      msg: "Please select csv fields from setting.",
    });
  }
};
/* Functions/Methods */
</script>

<style></style>
