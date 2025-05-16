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
                <div class="sub-title">Branch : List</div>
                <h5 class="main-title">My Branch</h5>
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
                <div class="tooltip">Add Branch</div>
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
                <th>Contact No</th>
                <th>Owner Name</th>
                <th>Address</th>
                <th>Type</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in storeVar.organizationBranchData"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.contactNo }}</td>
                  <td>{{ item.ownerName }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.type }}</td>
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
                        @click="navigate(item.id, '/crm/edit-school')"
                      >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openStatusModal(item.id, item.status)"
                      >
                        <icon-status></icon-status>
                        <div class="tooltip">Change Status</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/library'
                          )
                        "
                      >
                        <icon-library-list></icon-library-list>
                        <div class="tooltip">Library</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/my-staff'
                          )
                        "
                      >
                        <icon-user-list></icon-user-list>
                        <div class="tooltip">My Staff</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/my-student'
                          )
                        "
                      >
                        <icon-student-list></icon-student-list>
                        <div class="tooltip">My Student</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/setting/class-list'
                          )
                        "
                      >
                        <icon-setting></icon-setting>
                        <div class="tooltip">Settings</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="table-no-data"
            v-if="storeVar.organizationBranchData?.length <= 0"
          >
            <div>No records Found!</div>
          </div>
          <div
            class="table-footer"
            v-if="storeVar.organizationBranchData?.length > 0"
          >
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalOrganizationBranch"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Branch Add Modal  -->
    <Modal
      v-model:show="storeVar.organizationModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Branch" : "Add Branch" }}
        </div>
        <div
          class="close-btn"
          @click.prevent="storeVar.organizationModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="row">
          <div class="form-item mb-16 col-5">
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
          <div class="form-item mb-16 col-5">
            <div class="title">Email</div>
            <input
              type="text"
              v-model="formVar.email"
              placeholder="Enter E-mail "
              maxlength="30"
            />
            <div class="err-msg" v-if="formVar.submit && emailValid">
              {{ emailValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16 col-5">
            <div class="title">Contact No</div>
            <input
              type="text"
              v-model="formVar.contactNo"
              placeholder="Enter Contact Number"
              @keydown="isNumber($event)"
              maxlength="10"
            />
            <div class="err-msg" v-if="formVar.submit && contactNoValid">
              {{ contactNoValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="title">Owner Name</div>
            <input
              type="text"
              v-model="formVar.ownerName"
              placeholder="Enter Woner Name"
              maxlength="20"
            />
            <div class="err-msg" v-if="formVar.submit && ownerNameValid">
              {{ ownerNameValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16 col-5">
            <div class="title">WhatsApp</div>
            <input
              type="text"
              v-model="formVar.whatsApp"
              placeholder="Enter WhatsApp Number"
              @keydown="isNumber($event)"
              maxlength="10"
            />
            <div class="err-msg" v-if="formVar.submit && whatsAppValid">
              {{ whatsAppValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="title">State</div>
            <input
              type="text"
              v-model="formVar.state"
              placeholder="Enter State Name"
              maxlength="30"
            />
            <div class="err-msg" v-if="formVar.submit && stateValid">
              {{ stateValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16 col-5">
            <div class="title">City</div>
            <input
              type="text"
              v-model="formVar.city"
              placeholder="Enter City Name"
              maxlength="30"
            />
            <div class="err-msg" v-if="formVar.submit && cityValid">
              {{ cityValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="title">Pincode</div>
            <input
              type="text"
              v-model="formVar.pincode"
              placeholder="Enter Pincode"
              @keydown="isNumber($event)"
              maxlength="6"
            />
            <div class="err-msg" v-if="formVar.submit && pincodeValid">
              {{ pincodeValid }}
            </div>
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Address</div>
          <textarea
            name=""
            id=""
            v-model="formVar.address"
            rows="4"
            placeholder="Address"
          ></textarea>
          <div class="err-msg" v-if="formVar.submit && addressValid">
            {{ addressValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.organizationModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="addOrganizationBranch">Submit</div>
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
const storeVar = computed(() => store.state.OrganizationBranch);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  roles: "SCHOOL",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  id: null,
  organizationId: null,
  organizationAccountId: null,
  organizationSettingId: null,
  changeStatus: null,

  name: null,
  address: null,
  pincode: null,
  city: null,
  state: null,
  contactNo: null,
  whatsApp: null,
  email: null,
  ownerName: null,
  type: "BRANCH",
  numberOfBranch: 1,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationAccountId = route.query.accountId;
    formVar.organizationSettingId = route.query.settingId;
    formVar.organizationId = route.query.id;
    getOrganization();
  }
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
      getOrganization();
    }, formVar.typingDelay);
  }
);

/* Search Function */
/* Functions/Methods */
function getOrganization() {
  store.dispatch("OrganizationBranch/getOrganizationBranch", {
    id: formVar.organizationId,
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    roles: formVar.roles,
  });
}
function openAddModal() {
  storeVar.value.organizationModal = true;
  formVar.editMode = false;
  formVar.name = null;
  formVar.address = null;
  formVar.pincode = null;
  formVar.state = null;
  formVar.city = null;
  formVar.contactNo = null;
  formVar.whatsApp = null;
  formVar.email = null;
  formVar.ownerName = null;
  formVar.type = "BRANCH";
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.id = id;
  storeVar.value.statusModal = true;
}

function addOrganizationBranch() {
  if (
    nameValid.value ||
    emailValid.value ||
    contactNoValid.value ||
    whatsAppValid.value ||
    stateValid.value ||
    cityValid.value ||
    ownerNameValid.value ||
    pincodeValid.value ||
    addressValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("OrganizationBranch/addOrganizationBranch", {
    name: formVar.name,
    address: formVar.address,
    pincode: formVar.pincode,
    city: formVar.city,
    stateName: formVar.state,
    contactNo: formVar.contactNo,
    whatsApp: formVar.whatsApp,
    email: formVar.email,
    ownerName: formVar.ownerName,
    type: formVar.type,
    numberOfBranch: formVar.numberOfBranch,
    accountId: formVar.organizationAccountId,
    settingId: formVar.organizationSettingId,
    organizationId: formVar.organizationId,
    roles: formVar.roles,
  });
}
function submitStatus() {
  store.dispatch("OrganizationBranch/updateOrganizationBranchStatus", {
    id: formVar.id,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getOrganization();
};
function statusChangeSearch() {
  getOrganization();
}

function navigate(id, link) {
  router.push({ path: link, query: { id } });
}
function navigaters(id, settingId, link) {
  router.push({ path: link, query: { id, settingId } });
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
const ownerNameValid = computed(() => {
  if (!formVar.ownerName) {
    return "Please Enter Owner Name";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!formVar.email) {
    return "Please Enter Email!";
  } else if (!emailValid.test(formVar.email)) {
    return "Please Enter Valid Email!";
  }
});
const contactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.contactNo) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(formVar.contactNo)) {
    return "Please Enter Valid Number!";
  }
});
const whatsAppValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.whatsApp) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(formVar.whatsApp)) {
    return "Please Enter Valid Number!";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Please Enter State";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please Enter City";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please Enter Address";
  }
});
const pincodeValid = computed(() => {
  if (!formVar.pincode) {
    return "Please Select Pincode";
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
