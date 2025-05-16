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
              <div class="sub-title">Section : List</div>
              <h5 class="main-title">Section</h5>
            </div>
          </div>
          <!-- <div class="about">This is my report This is my report</div> -->
        </div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search here">
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div>
          <div class="icons">
            <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
              <icon-plus></icon-plus>
              <div class="tooltip">Add Section</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-body mt-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Section</th>
              <th>Date & Time</th>
              <th class="text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.staffDivision" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.classDiv?.name }}</td>
                <td>{{ getDateTime(item.createdAt) }}</td>
                <td>
                  <div class="option-btns">
                    <div class="icon tooltip-wrapper" @click.prevent="openDeleteModal(item.id)">
                      <icon-delete></icon-delete>
                      <div class="tooltip">Delete</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data" v-if="storeVar.staffDivision?.length <= 0">
          <div>No records Found!</div>
        </div>
      </div>
    </div>

    <!-- Class Add Modal  -->
    <Modal v-model:show="storeVar.addDivisionModal" class="faq-modal" :centerModal="true" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">{{ formVar.editMode ? 'Update Section' : 'Add Section' }}</div>
        <div class="close-btn" @click.prevent="storeVar.addDivisionModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16">
          <div class="title">Department Name</div>
          <SingleSelect :options="storeVar2.classDiv" @selected="handleSelected" v-model="formVar.name"
            :next="false" placeholder="Select" @search="search">
          </SingleSelect>
          <div class="err-msg" v-if="formVar.submit && divisionValid">{{ divisionValid }}</div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addDivisionModal = false">Cancel</div>
          <div class="btn white-btn" @click="addstaffDivision">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Delete Modal -->
    <Modal v-model:show="storeVar.confirmDivisionModal" class="confirm-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Delete</div>
        <div class="close-btn" @click.prevent="storeVar.confirmDivisionModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="delete-icon">
        <img src="/images/png/delete.png" alt="">
      </div>
      <h4 class="text-gree">
        Are you sure want to Delete?
      </h4>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.confirmDivisionModal = false">Cancel</div>
          <div class="btn white-btn" @click="submitDelete">Delete</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router"
import moment from "moment";

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationStaff);
const storeVar2 = computed(() => store.state.OrganizationSettings);

const formVar = reactive({
  submit: false,
  staffAccountId: null,
  name: null,
  divisionId: null,
  searchKey: null,
  editMode: false,
})
/* Constants */
/* Search Function */

/* Search Function */
/* Functions/Methods */
function addstaffDivision() {
  if (divisionValid.value) {
    formVar.submit = true
    return
  }
  formVar.submit = false
  store.dispatch("OrganizationStaff/addStaffDivision", {
    classDivId: formVar.divisionId,
    staffDetailId: storeVar.value.id,
    name: formVar.name
  });
}
function submitDelete() {
  store.dispatch("OrganizationStaff/deleteStaffDivision", {
    id: formVar.divisionId,
  });
}
function openAddModal() {
  storeVar.value.addDivisionModal = true
  formVar.editMode = false
  formVar.name = null
  formVar.divisionId = null
}
function openDeleteModal(id) {
  formVar.divisionId = id
  storeVar.value.confirmDivisionModal = true
}
const handleSelected = (option) => {
  formVar.divisionId = option.id
};
const search = (key) => {
  formVar.searchKey = key
}
function getDateTime(date) {
  if (date) {
    return moment(date).format('MMM Do YYYY hh:mm A')
  } else {
    return '-'
  }
}
/* Functions/Methods */
/* Validation */
const divisionValid = computed(() => {
  if (!formVar.divisionId) {
    return "Please Select Department";
  }
});
/* Validation */
</script>

<style></style>
