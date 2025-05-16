<template>
  <section class="user-activity user-profile">
    <div class="table-card">
      <div class="table-header">
        <div class="left">
          <div class="title-row">
            <div class="icon">
              <icon-user></icon-user>
            </div>
            <div class="titles">
              <div class="sub-title">CSV : List</div>
              <h5 class="main-title">CSV</h5>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- <div class="searchbar">
            <input type="text" placeholder="Search here">
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div>
          <div class="icons">
            <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
              <icon-plus></icon-plus>
              <div class="tooltip">Add Subject</div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="download-body">
        <div
          class="body-item"
          v-for="(item, index) in storeVar.staffCSVData"
          :key="index"
        >
          <div class="data">
            <div class="title">{{ item.title }}</div>
            <div class="val">
              <input
                class="pointer"
                v-model="item.status"
                type="checkbox"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="btns flex">
          <div class="btn white-btn" @click="addSubject">Submit</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import moment from "moment";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationSettings);

const formVar = reactive({
  organizationSettingId: null,
  organizationId: null,
  editMode: false,

  subjectId: null,
  name: null,

  fields: [],
});
/* Constants */
/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationSettingId = route.query.settingId;
    formVar.organizationId = route.query.id;
  }
});
/* Lifecycle/Hooks */

/* Functions/Methods */
function addSubject() {
  storeVar.value.staffCSVData.forEach((element) => {
    const objIndex = formVar.fields.findIndex((obj) => obj === element.name);
    if (element.status && objIndex < 0) {
      formVar.fields.push(element.name);
    }
  });
  store.dispatch("OrganizationSettings/updateCsvField", {
    id: formVar.organizationSettingId,
    csvFields: storeVar.value.studentCsvFields,
    staffCsvFields: JSON.stringify(formVar.fields),
  });
  storeVar.value.staffCsvFields = JSON.stringify(formVar.fields);
  formVar.fields = [];
}

/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
  }
});
/* Validation */
</script>

<style></style>
