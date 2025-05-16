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
                <div class="sub-title">Staff : List</div>
                <h5 class="main-title">Staff List</h5>
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
              <router-link
                :to="
                  '/crm/college/import-staff?id=' +
                  formVar.organizationId +
                  '&settingId=' +
                  formVar.organizationSettingId
                "
                class="icon tooltip-wrapper"
              >
                <icon-download class=""></icon-download>
                <div class="tooltip">Import List</div>
              </router-link>
            </div>
            <div class="icons">
              <div
                class="icon tooltip-wrapper"
                @click.prevent="storeVar.orderModal = true"
              >
                <icon-card></icon-card>
                <div class="tooltip">Card/Order</div>
              </div>
            </div>

            <div class="icons">
              <div
                class="icon tooltip-wrapper"
                @click.prevent="
                  navigaters(
                    formVar.organizationId,
                    formVar.organizationSettingId,
                    '/crm/college/add-staff',
                    formVar.accountId
                  )
                "
              >
                <icon-plus></icon-plus>
                <div class="tooltip">Add Staff</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th></th>
                <th>Card</th>
                <th>Image</th>
                <th>Name</th>
                <!-- <th>Email</th> -->
                <th>Phone</th>
                <!-- <th>Gender</th> -->
                <th>Dob</th>
                <th>Designation</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in storeVar.branchStaffData"
                  :key="index"
                >
                  <td>
                    <input type="checkbox" @change="selectStaff(item.id)" />
                  </td>
                  <td>
                    <span v-if="item.card == 0">Remaining</span>
                    <span v-if="item.card == 1">In Process</span>
                    <span v-if="item.card == 2">Printed</span>
                    <span v-if="item.card == 3">RePrinted</span>
                  </td>
                  <td>
                    <div class="zoom-image" v-if="item.profile">
                      <img :src="`${item.profile}?width=200`" alt="" />
                    </div>
                  </td>
                  <td>{{ item.name }}</td>
                  <!-- <td>{{ item.emailId }}</td> -->
                  <td>{{ item.account?.phoneNumber }}</td>
                  <!-- <td>{{ item.gender }}</td> -->
                  <td>{{ getDate(item.dob) }}</td>
                  <td>{{ item.designation?.name }}</td>
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
                      <router-link
                        class="icon tooltip-wrapper"
                        :to="{
                          path: '/crm/college/final-staff-card',
                          query: { id: item.id, status: 'Designation' },
                        }"
                      >
                        <icon-card></icon-card>
                        <div class="tooltip">Staff</div>
                      </router-link>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigate(item.accountId, '/crm/staff-permission')
                        "
                      >
                        <icon-permission></icon-permission>
                        <div class="tooltip">Permission</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          openStatusModal(item.accountId, item.status)
                        "
                      >
                        <icon-status></icon-status>
                        <div class="tooltip">Change Status</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.accountId,
                            formVar.organizationSettingId,
                            '/crm/college-staff-profile-layout'
                          )
                        "
                      >
                        <icon-profile></icon-profile>
                        <div class="tooltip">Profile</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="table-no-data"
            v-if="storeVar.branchStaffData?.length <= 0"
          >
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.branchStaffData?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalBranchStaff"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Order Modal  -->
    <Modal
      v-model:show="storeVar.orderModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Generate Order</div>
        <div class="close-btn" @click.prevent="storeVar.orderModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn white-btn" @click="downloadCSV">Down. CSV</div>
          <div class="btn white-btn" @click="downloadPhoto">Dwon. Photo</div>
        </div>
      </div>
      <h4 style="text-align: center">OR</h4>
      <form class="form mb-16">
        <div class="form-item mb-16 col-10">
          <div class="title">Delivery Date</div>
          <input
            type="date"
            v-model="formVar.deliveryDate"
            placeholder="Delivery Date"
            :min="formVar.todayDate"
          />
          <div class="err-msg" v-if="formVar.submit && deliveryDateValid">
            {{ deliveryDateValid }}
          </div>
        </div>
        <div class="form-item mb-16 col-10">
          <div class="title">Approx Quantity</div>
          <input
            type="number"
            v-model="formVar.qty"
            placeholder="Approx Quantity"
          />
          <div class="err-msg" v-if="formVar.submit && qtyValid">
            {{ qtyValid }}
          </div>
        </div>
        <div class="form-item mb-16 col-10">
          <div class="title">Delivery Contact No</div>
          <input
            type="text"
            v-model="formVar.contactNumber"
            placeholder="Delivery Contact Number"
            @keydown="isNumber($event)"
            maxlength="10"
          />
          <div class="err-msg" v-if="formVar.submit && contactNumberValid">
            {{ contactNumberValid }}
          </div>
        </div>
        <!-- <div class="form-item mb-16 col-10">
          <div class="title">Parent Card</div>
          <input type="checkbox" v-model="formVar.parentCard" />
        </div> -->
        <div class="form-item mb-16 col-10">
          <div class="title">Delivery Address</div>
          <textarea
            type="text"
            v-model="formVar.deliveryAddress"
            placeholder="Delivery Address"
            maxlength="200"
            rows="4"
          />
          <div class="err-msg" v-if="formVar.submit && deliveryAddressValid">
            {{ deliveryAddressValid }}
          </div>
        </div>
        <div class="form-item mb-16 col-10">
          <div class="title">Delivery Partner</div>
          <single-select-id
            v-model="formVar.deliveryPartnerId"
            :options="deliveryPartnerVar.data"
          />
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.orderModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="createOrder">Create Order</div>
        </div>
      </div>
    </Modal>

    <!-- Staff Edit Modal  -->
    <Modal
      v-model:show="storeVar.branchStaffModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Staff" : "Add Staff" }}
        </div>
        <div
          class="close-btn"
          @click.prevent="storeVar.branchStaffModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
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
          <div class="title">Office Email</div>
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
        <div class="form-item mb-16">
          <div class="title">Designation</div>
          <SingleSelect
            :options="designationVar.designationData"
            @selected="handleSelectedDesignation"
            v-model="formVar.designation"
            :next="false"
            placeholder="Select Designation"
            @search="searchDesignation"
          >
          </SingleSelect>
          <div class="err-msg" v-if="formVar.submit && designationValid">
            {{ designationValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.branchStaffModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="updateStaff">Submit</div>
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
const storeVar = computed(() => store.state.OrganizationStaff);
const designationVar = computed(() => store.state.Designation);
const deliveryPartnerVar = computed(() => store.state.DeliveryPartner);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  roles: "COLLEGE",
  staffType: "ORGANIZATION",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  organizationId: null,
  organizationAccountId: null,
  organizationSettingId: null,
  changeStatus: null,
  accountId: null,

  staffId: null,
  staffAccountId: null,

  name: null,
  emailId: null,
  phoneNumber: null,
  password: null,
  gender: "MALE",
  dob: null,
  designation: "",
  designationId: null,

  searchKey: null,

  deliveryDate: null,
  parentCard: false,
  qty: 0,
  deliveryAddress: null,
  contactNumber: null,
  deliveryPartnerId: null,

  ids: [],

  idCardStockId: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    formVar.accountId = route.query.accountId;
    getOrganizationStaff();
    store.dispatch("DeliveryPartner/getDeliveryPartners");
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
      getOrganizationStaff();
    }, formVar.typingDelay);
  }
);
/* Search Function */
/* Functions/Methods */
function selectStaff(id) {
  const objIndex = formVar.ids.findIndex((oid) => oid === id);
  if (objIndex < 0) {
    formVar.ids.push(id);
  } else {
    formVar.ids.splice(objIndex, 1);
  }
}
const createOrder = () => {
  if (formVar.ids.length > 0) {
    if (
      deliveryAddressValid.value ||
      deliveryDateValid.value ||
      qtyValid.value ||
      contactNumberValid.value
    ) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;

    store.dispatch("OrganizationSettings/createStaffOrder", {
      staff: formVar.ids,
      deliveryDate: formVar.deliveryDate,
      deliveryAddress: formVar.deliveryAddress,
      contactNumber: formVar.contactNumber,
      qty: formVar.qty,
      deliveryPartnerId: formVar.deliveryPartnerId,
      settingId: formVar.organizationSettingId,
    });
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect staff!" });
  }
};

function getOrganizationStaff() {
  store.dispatch("OrganizationStaff/getBranchStaff", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    type: formVar.staffType,
    organizationDetailId: formVar.organizationId,
  });
}
function getDesignation() {
  store.dispatch("Designation/getMyDesignationBySetting", {
    settingId: route.query.settingId,
  });
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.organizationAccountId = id;
  storeVar.value.statusModal = true;
}
function openEditModal(item) {
  storeVar.value.branchStaffModal = true;
  formVar.editMode = true;
  formVar.staffId = item.id;
  formVar.staffAccountId = item.accountId;
  formVar.name = item.name;
  formVar.emailId = item.emailId;
  formVar.dob = item.dob;
  formVar.gender = item.gender;
  formVar.designationId = item.designationId;
  formVar.designation = item.designation?.name;
  getDesignation();
}
function submitStatus() {
  store.dispatch("OrganizationStaff/updateBranchStaffStatus", {
    id: formVar.organizationAccountId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getOrganizationStaff();
};
function statusChangeSearch() {
  getOrganizationStaff();
}
const handleSelectedDesignation = (option) => {
  formVar.designationId = option.id;
};
const searchDesignation = (key) => {
  formVar.searchKey = key;
};
function getDate(date) {
  if (date) {
    return moment(date).format("DD.MM.YYYY");
  }
  return "-";
}
function navigate(id, link) {
  router.push({ path: link, query: { id } });
}
function navigaters(id, settingId, link, accountId) {
  router.push({ path: link, query: { id, settingId, accountId } });
}
function updateStaff() {
  if (
    nameValid.value ||
    emailValid.value ||
    designationValid.value ||
    genderValid.value ||
    dobValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("OrganizationStaff/updateStaff", {
    id: formVar.staffAccountId,
    name: formVar.name,
    emailId: formVar.emailId,
    dob: formVar.dob,
    gender: formVar.gender,
    designationId: formVar.designationId,
    designationName: formVar.designation,
  });
}
const downloadCSV = () => {
  store.dispatch("CardOrder/downloadStaffCSVByOrganizationId", {
    id: formVar.organizationSettingId,
  });
};
const downloadPhoto = () => {
  store.dispatch("CardOrder/downloadStaffFileByOrganizationId", {
    id: formVar.organizationSettingId,
  });
};

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

const deliveryDateValid = computed(() => {
  if (!formVar.deliveryDate) {
    return "Please select delivery date";
  }
});

const deliveryAddressValid = computed(() => {
  if (!formVar.deliveryAddress) {
    return "Please enter delivery address";
  }
});

const contactNumberValid = computed(() => {
  if (!formVar.contactNumber) {
    return "Please enter contact no";
  }
});

const qtyValid = computed(() => {
  if (formVar.qty <= 0) {
    return "Please enter approx quantity";
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
