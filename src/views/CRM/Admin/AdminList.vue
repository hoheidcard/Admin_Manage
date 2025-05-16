<template>
  <section class="faq-page">
    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-admin></icon-admin>
              </div>
              <div class="titles">
                <div class="sub-title">Admin : List</div>
                <h5 class="main-title">Our Admin</h5>
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
            <div class="searchbar">
              <div class="select-dropdown">
                <select
                  name=""
                  id=""
                  v-model="formVar.status"
                  @change="statusChangeSearch"
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DEACTIVE">DEACTIVE</option>
                </select>
              </div>
            </div>
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Admin</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Dob</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.adminData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.staffDetail?.name }}</td>
                  <td>{{ item.staffDetail?.emailId }}</td>
                  <td>{{ item.phoneNumber }}</td>
                  <td>{{ item.staffDetail?.gender }}</td>
                  <td>{{ getDate(item.staffDetail?.dob) }}</td>
                  <td>
                    <div
                      v-if="item.status === 'ACTIVE'"
                      class="badge success-badge"
                    >
                      {{ item.status }}
                    </div>
                    <div
                      v-if="item.status === 'PENDING'"
                      class="badge warning-badge"
                    >
                      {{ item.status }}
                    </div>
                    <div
                      v-if="item.status === 'DEACTIVE'"
                      class="badge danger-badge"
                    >
                      {{ item.status }}
                    </div>
                  </td>
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
                        @click.prevent="
                          navigate(item.id, '/crm/admin-permission')
                        "
                      >
                        <icon-permission></icon-permission>
                        <div class="tooltip">Permission</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openStatusModal(item.id, item.status)"
                      >
                        <icon-status></icon-status>
                        <div class="tooltip">Change Status</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.adminData?.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.adminData?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalAdmin"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Staff Add Modal  -->
    <Modal
      v-model:show="storeVar.adminModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Admin" : "Add Admin" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.adminModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16" v-if="!formVar.editMode">
          <div class="title">Login Id</div>
          <input
            type="text"
            v-model="formVar.phoneNumber"
            placeholder="Enter Phone Number"
            @keydown="isNumber($event)"
            maxlength="10"
            disabled
          />
        </div>
        <div class="form-item mb-16">
          <div class="title">Name</div>
          <input
            type="text"
            v-model="formVar.name"
            placeholder="Enter Name"
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && nameValid">
            {{ nameValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Email</div>
          <input
            type="text"
            v-model="formVar.emailId"
            placeholder="Enter E-mail "
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && emailValid">
            {{ emailValid }}
          </div>
        </div>
        <div class="form-item mb-16" v-if="!formVar.editMode">
          <div class="title">Phone</div>
          <input
            type="text"
            v-model="formVar.phoneNumber"
            placeholder="Enter Phone Number"
            @keydown="isNumber($event)"
            maxlength="10"
          />
          <div class="err-msg" v-if="formVar.submit && phoneValid">
            {{ phoneValid }}
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16 col-5">
            <div class="title">Gender</div>
            <div class="select-dropdown">
              <select name="" id="" v-model="formVar.gender">
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div class="err-msg" v-if="formVar.submit && genderValid">
              {{ genderValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="title">Dob</div>
            <input
              type="date"
              v-model="formVar.dob"
              :max="moment().format('YYYY-MM-DD')"
            />
            <div class="err-msg" v-if="formVar.submit && dobValid">
              {{ dobValid }}
            </div>
          </div>
        </div>
        <div class="form-item mb-16" v-if="!formVar.editMode">
          <div class="title">Password</div>
          <input
            type="password"
            name="password"
            v-model="formVar.password"
            placeholder="Enter Password "
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && passwordValid">
            {{ passwordValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.adminModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="createAdmin">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Status Modal -->
    <Modal
      v-model:show="storeVar.statusModal"
      class="status-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Change Status</div>
        <div class="close-btn" @click.prevent="storeVar.statusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="status-row">
        <label for="approve" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="ACTIVE"
            id="approve"
            name="status"
          />
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">ACTIVE</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="PENDING"
            id="pending"
            name="status"
          />
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">PENDING</div>
          </div>
        </label>
        <label for="block" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="DEACTIVE"
            id="block"
            name="status"
          />
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">DEACTIVE</div>
          </div>
        </label>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.statusModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="submitStatus">Submit</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Admin);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  roles: "ADMIN",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  staffId: null,
  staffAccountId: null,
  changeStatus: null,

  name: null,
  emailId: null,
  phoneNumber: null,
  password: null,
  gender: "MALE",
  dob: null,
  designation: "",
  designationId: null,

  searchKey: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getAdmin();
});
/* Lifecycle/Hooks */

/* Search Function */
watch(
  () => formVar.keyword,
  () => {
    clearTimeout(formVar.typingTimer);
    formVar.typingTimer = setTimeout(() => {
      formVar.limit = 10;
      formVar.offset = 0;
      formVar.currentPage = 1;
      getAdmin();
    }, formVar.typingDelay);
  }
);
watch(
  () => formVar.searchKey,
  () => {
    clearTimeout(formVar.typingTimer);
    formVar.typingTimer = setTimeout(() => {
      store.dispatch("Designation/getDesignation", {
        limit: 10,
        offset: 0,
        keyword: formVar.searchKey,
      });
    }, formVar.typingDelay);
  }
);
/* Search Function */
/* Functions/Methods */
function getAdmin() {
  store.dispatch("Admin/getAdmin", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
  });
}

function openAddModal() {
  storeVar.value.adminModal = true;
  formVar.editMode = false;
  formVar.name = null;
  formVar.emailId = null;
  formVar.dob = null;
  formVar.gender = "MALE";
  formVar.designationId = null;
  formVar.designation = "";
}
function openEditModal(item) {
  storeVar.value.adminModal = true;
  formVar.editMode = true;
  formVar.staffId = item.staffDetail.id;
  formVar.staffAccountId = item.id;
  formVar.name = item.staffDetail.name;
  formVar.emailId = item.staffDetail.emailId;
  formVar.dob = item.staffDetail.dob;
  formVar.gender = item.staffDetail.gender;
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.staffAccountId = id;
  storeVar.value.statusModal = true;
}
function createAdmin() {
  if (!formVar.editMode) {
    if (
      nameValid.value ||
      emailValid.value ||
      phoneValid.value ||
      genderValid.value ||
      dobValid.value ||
      passwordValid.value
    ) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("Admin/addAdmin", {
      phoneNumber: formVar.phoneNumber,
      password: formVar.password,
      name: formVar.name,
      emailId: formVar.emailId,
      gender: formVar.gender,
      dob: formVar.dob,
      roles: formVar.roles,
    });
  } else {
    if (
      nameValid.value ||
      emailValid.value ||
      genderValid.value ||
      dobValid.value
    ) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("Admin/updateAdmin", {
      id: formVar.staffAccountId,
      name: formVar.name,
      emailId: formVar.emailId,
      gender: formVar.gender,
      dob: formVar.dob,
      roles: formVar.roles,
    });
  }
}
function submitStatus() {
  store.dispatch("Admin/updateAdminStatus", {
    id: formVar.staffAccountId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getAdmin();
};
function statusChangeSearch() {
  getAdmin();
}
const handleSelectedDesignation = (option) => {
  formVar.designationId = option.id;
};
const searchDesignation = (key) => {
  formVar.searchKey = key;
};
function navigate(id, link) {
  router.push({ path: link, query: { id } });
}
function getDate(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY");
  }
  return "-";
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!formVar.emailId) {
    return "Please Enter Email!";
  } else if (!emailValid.test(formVar.emailId)) {
    return "Please Enter Valid Email!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.phoneNumber) {
    return "Please Enter Phone Number!";
  } else if (!phoneValid.test(formVar.phoneNumber)) {
    return "Please Enter Valid Phone Number!";
  }
});
const designationValid = computed(() => {
  if (!formVar.designationId) {
    return "Please Select Designation";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please Select Gender";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please Select Date of Birth";
  }
});
const passwordValid = computed(() => {
  let passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
  if (!formVar.password) {
    return "Please Enter Password";
  } else if (!passwordValid.test(formVar.password)) {
    return "password must have at least one uppercase and lowercase character,one number and special character!";
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
}
/* Validation */
</script>

<style></style>
