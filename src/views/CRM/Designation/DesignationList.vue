<template>
  <section class="faq-page">
    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-help></icon-help>
              </div>
              <div class="titles">
                <div class="sub-title">Designation : List</div>
                <h5 class="main-title">Our Designation</h5>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input
                type="text"
                v-model="formVar.keyword"
                placeholder="Search here"
              />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Designation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Designation Name</th>
                <th>Priority</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in storeVar.designationData"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.priority }}</td>
                  <td>
                    <div class="option-btns">
                      <div
                        class="icon tooltip-wrapper"
                        @click="openEditModal(item)"
                      >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openDeleteModal(item.id)"
                      >
                        <icon-delete></icon-delete>
                        <div class="tooltip">Delete</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="table-no-data"
            v-if="storeVar.designationData?.length <= 0"
          >
            <div>No records Found!</div>
          </div>
          <!-- <div class="table-footer" v-if="storeVar.designationData?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalDesignation"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div> -->
        </div>
      </div>
    </div>

    <!-- Designation Add Modal  -->
    <Modal
      v-model:show="storeVar.designationModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Designation" : "Add Designation" }}
        </div>
        <div
          class="close-btn"
          @click.prevent="storeVar.designationModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16">
          <div class="title">Designation Name</div>
          <input
            type="text"
            v-model="formVar.name"
            placeholder="Enter Designation Name"
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && designationValid">
            {{ designationValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Priority</div>
          <input
            type="text"
            v-model="formVar.priority"
            placeholder="Enter Priority"
            @keydown="isNumber($event)"
            maxlength="3"
          />
          <div class="err-msg" v-if="formVar.submit && priorityValid">
            {{ priorityValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.designationModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="addDesignation">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- modals -->
    <Modal
      v-model:show="storeVar.confirmModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Delete</div>
        <div class="close-btn" @click.prevent="storeVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="delete-icon">
        <img src="/images/png/delete.png" alt="" />
      </div>
      <h4 class="text-gree">Are you sure want to Delete?</h4>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.confirmModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="submitDelete">Delete</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Designation);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  designationId: null,
  name: null,
  priority: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getDesignation();
});
/* Lifecycle/Hooks */

/* Search Function */
/* Search Function */
/* Functions/Methods */
function getDesignation() {
  store.dispatch("Designation/getMyDesignation");
}
function openAddModal() {
  storeVar.value.designationModal = true;
  formVar.editMode = false;
  formVar.name = null;
  formVar.priority = null;
}
function openEditModal(item) {
  storeVar.value.designationModal = true;
  formVar.editMode = true;
  formVar.designationId = item.id;
  formVar.name = item.name;
  formVar.priority = item.priority;
}
function openDeleteModal(id) {
  formVar.designationId = id;
  storeVar.value.confirmModal = true;
}
function addDesignation() {
  if (designationValid.value || priorityValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (!formVar.editMode) {
    store.dispatch("Designation/addDesignation", {
      name: formVar.name,
      priority: formVar.priority,
    });
  } else {
    store.dispatch("Designation/updateDesignation", {
      id: formVar.designationId,
      name: formVar.name,
      priority: formVar.priority,
    });
  }
}
function submitDelete() {
  store.dispatch("Designation/deleteDesignation", {
    id: formVar.designationId,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getDesignation();
};

/* Functions/Methods */
/* Validation */
const designationValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Designation Name";
  }
});
const priorityValid = computed(() => {
  if (!formVar.priority) {
    return "Please Enter Priority";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  // Allow numbers (0-9), the backspace key (keyCode 8), tab key (keyCode 9), number pad keys (keyCode 96-105),
  // left arrow (keyCode 37), and right arrow (keyCode 39)
  if (
    /^[0-9]+$/.test(char) ||
    e.keyCode === 8 ||
    e.keyCode === 9 ||
    e.keyCode === 37 ||
    e.keyCode === 39 ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    return true;
  } else {
    e.preventDefault();
  }
} /* Validation */
</script>

<style></style>
