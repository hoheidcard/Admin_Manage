<template>
  <div class="table-card">
    <div class="table-header">
      <div class="left">
        <div class="title-row">
          <div class="icon">
            <icon-user></icon-user>
          </div>
          <div class="titles">
            <div class="sub-title">Department : List</div>
            <h5 class="main-title">Our Department</h5>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="searchbar">
          <input type="text" placeholder="Search here" />
          <div class="icon">
            <icon-search></icon-search>
          </div>
        </div>
        <div class="icons">
          <div class="icon tooltip-wrapper" @click.prevent="opencreateModal">
            <icon-plus></icon-plus>
            <div class="tooltip">Add Department</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-drag">
    <div class="dragTableHead flex text-primary top-header bold">
      <div class="sl">#</div>
      <div class="title">Name</div>
      <div class="title">Priority</div>
      <div class="title actn">Action</div>
    </div>
    <VueDraggableNext
      class="dragArea list-group w-full"
      :list="storeVar.data"
      @change="log"
    >
      <div class="dragAreaList" v-for="(element, i) in storeVar.data" :key="i">
        <div class="list">
          <div class="sl">{{ i + 1 }}</div>
          <div class="area">{{ element.name }}</div>
          <div class="area">{{ element.priority }}</div>
          <div class="area">
            <div class="option-btns">
              <div class="icon tooltip-wrapper" @click="openEditModal(element)">
                <icon-edit></icon-edit>
                <div class="tooltip">Edit</div>
              </div>
              <div
                class="icon tooltip-wrapper"
                @click.prevent="openDeleteModal(element.id)"
              >
                <icon-delete></icon-delete>
                <div class="tooltip">Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueDraggableNext>
  </div>
  <div class="table-no-data" v-if="storeVar.data?.length <= 0">
    <div>No records Found!</div>
  </div>
  <!-- Class Add Modal  -->
  <Modal
    v-model:show="storeVar.createModal"
    :centerModal="true"
    class="faq-modal"
    headerClasses="header-bg"
  >
    <template v-slot:header>
      <div class="title" showHeader="true">
        {{ formVar.editMode ? "Update Department" : "Add Department" }}
      </div>
      <div class="close-btn" @click.prevent="storeVar.createModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <form class="form mb-16">
      <div class="form-item mb-16 col-10">
        <div class="title">Name</div>
        <input
          type="text"
          v-model="formVar.name"
          placeholder="Enter Name"
          maxlength="50"
        />
        <div class="err-msg" v-if="formVar.submit && nameValid">
          {{ nameValid }}
        </div>
      </div>
      <div class="form-item mb-16 col-10">
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
        <div class="btn red-btn" @click.prevent="storeVar.createModal = false">
          Cancel
        </div>
        <div class="btn white-btn" @click="addClass">Submit</div>
      </div>
    </div>
  </Modal>

  <!-- Delete Modal -->
  <Modal
    v-model:show="storeVar.deleteModal"
    class="confirm-modal"
    headerClasses="header-bg"
  >
    <template v-slot:header>
      <div class="title" showHeader="true">Delete</div>
      <div class="close-btn" @click.prevent="storeVar.deleteModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="delete-icon">
      <img src="/images/png/delete.png" alt="" />
    </div>
    <h4 class="text-gree">Are you sure want to Delete?</h4>
    <div class="modal-footer">
      <div class="btns">
        <div class="btn red-btn" @click.prevent="storeVar.deleteModal = false">
          Cancel
        </div>
        <div class="btn white-btn" @click="submitDelete">Delete</div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.DefaultSetting);

const formVar = reactive({
  organizationSettingId: null,
  organizationId: null,
  editMode: false,

  classId: null,
  name: null,
  priority: null,
  type: "DEPARTMENT",
  for: "SCHOOL",
});
/* Constants */
/* Lifecycle/Hooks */
onBeforeMount(() => {
  getDefaultSetting();
});
/* Lifecycle/Hooks */

/* Functions/Methods */
function getDefaultSetting() {
  store.dispatch("DefaultSetting/getDefaultSetting", {
    settingType: formVar.type,
    settingFor: formVar.for,
  });
}
function opencreateModal() {
  storeVar.value.createModal = true;
  formVar.editMode = false;
  formVar.name = null;
  formVar.priority = null;
}
function openEditModal(item) {
  storeVar.value.createModal = true;
  formVar.editMode = true;
  formVar.classId = item.id;
  formVar.name = item.name;
  formVar.priority = item.priority;
}
function openDeleteModal(id) {
  formVar.classId = id;
  storeVar.value.deleteModal = true;
}
function addClass() {
  if (nameValid.value || priorityValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  let payload = {
    name: formVar.name,
    priority: formVar.priority,
    type: formVar.type,
    for: formVar.for,
  };
  if (!formVar.editMode) {
    store.dispatch("DefaultSetting/createDefaultSetting", payload);
  } else {
    store.dispatch("DefaultSetting/updateDefaultSetting", {
      id: formVar.classId,
      payload,
    });
  }
}
function submitDelete() {
  store.dispatch("DefaultSetting/deleteDefaultSetting", {
    id: formVar.classId,
    status: "DELETED",
  });
}
function getDateTime(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY hh:mm A");
  } else {
    return "-";
  }
}
function swapIds() {
  for (let i = 0; i < storeVar.value.data.length; i++) {
    storeVar.value.data[i].priority = i + 1;
  }
}

function log(event) {
  swapIds();
  store.dispatch("DefaultSetting/bulkDefaultSetting", storeVar.value.data);
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
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
