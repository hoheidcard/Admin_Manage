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
              <div class="sub-title">Class : List</div>
              <h5 class="main-title">Our Class</h5>
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
            <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
              <icon-plus></icon-plus>
              <div class="tooltip">Add Class</div>
            </div>
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
              @click.prevent="openProductModal()"
            >
              <icon-asign></icon-asign>
              <div class="tooltip">Assign Product</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-body mt-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>
                <input
                  type="checkbox"
                  @change="selectAll"
                  v-model="formVar.selectAllStatus"
                />
                All
              </th>
              <th>Class</th>
              <th>Priority</th>
              <th>Section/Teacher/Co-Ordinator</th>
              <th class="text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.classList" :key="index">
                <td>
                  <input
                    type="checkbox"
                    v-model="item.checked"
                    @change="selectClasses(item.id)"
                  />
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.priority }}</td>
                <td>
                  <div class="option-btns">
                    <div
                      class="icon tooltip-wrapper"
                      @click.prevent="
                        teacherDetailModal(item.classListDiv, item.id)
                      "
                    >
                      <icon-eye></icon-eye>
                      <div class="tooltip">View Details</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="option-btns">
                    <div
                      v-if="!item.classListDiv || item.classListDiv.length <= 0"
                      class="icon tooltip-wrapper"
                      @click.prevent="studentByClassDiv(item.id, null)"
                    >
                      <icon-eye></icon-eye>
                      <div class="tooltip">Students</div>
                    </div>
                    <div
                      class="icon tooltip-wrapper"
                      @click="openEditModal(item)"
                    >
                      <icon-edit></icon-edit>
                      <div class="tooltip">Edit</div>
                    </div>
                    <div
                      v-if="item.idCardsStock"
                      class="icon tooltip-wrapper"
                      @click="openProductDetailModal(item)"
                    >
                      <icon-info></icon-info>
                      <div class="tooltip">View Product</div>
                    </div>
                    <div
                      class="icon tooltip-wrapper"
                      @click.prevent="openDeleteModal(item.id)"
                    >
                      <icon-delete></icon-delete>
                      <div class="tooltip">Delete</div>
                    </div>
                    <div
                      class="icon tooltip-wrapper"
                      @click.prevent="openAsignModal(item.id)"
                    >
                      <icon-asign></icon-asign>
                      <div class="tooltip">Asign</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data" v-if="storeVar.classList.length <= 0">
          <div>No records Found!</div>
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
        <div class="title" showHeader="true">Generate Card/Order</div>
        <div class="close-btn" @click.prevent="storeVar.orderModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="row">
        <div class="mb-16 col-3">
          <div class="btn white-btn" @click="generateCard(0)">Remaining CL</div>
        </div>
        <div class="mb-16 col-3">
          <div class="btn white-btn" @click="generateCard(1)">Final CL</div>
        </div>
        <div class="mb-16 col-3">
          <div class="btn white-btn" @click="generateFinalCard('Class')">Final Print</div>
        </div>
      </div>
      <div class="row">
        <div class="mb-16 col-3">
          <div class="btn white-btn" @click="generateFinalCard('Parent')">Final Parent Print</div>
        </div>
        <div class="mb-16 col-3">
          <div class="btn white-btn" @click="generateFinalCard('House')">Final HZ Print</div>
        </div>
        <div class="mb-16 col-3">
          <div class="btn white-btn" @click="downloadCSV">Down. CSV</div>
        </div>
      </div>
      <div class="row">
        <div class="mb-16 col-3">
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
        <div class="form-item mb-16 col-10">
          <div class="title">Parent Card</div>
          <input type="checkbox" v-model="formVar.parentCard" />
        </div>
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

    <Modal
      v-model:show="storeVar.productModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Select product</div>
        <div class="close-btn" @click.prevent="storeVar.productModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div>
        <form class="form mb-16">
          <div class="form-item mb-16 col-10">
            <div class="title">Search Product</div>
            <input
              type="text"
              placeholder="Search Product"
              @keydown="searchProduct($event.target.value)"
            />
          </div>
        </form>
        <div class="i-grid">
          <label
            class="i-card"
            v-for="(item, i) in idCardStockVar.data"
            :key="i"
          >
            <input
              name="plan"
              class="radio"
              type="radio"
              v-model="formVar.idCardStockId"
              :value="item.id"
            />

            <span class="plan-details">
              <img :src="`${item.productImage[0]?.file}?width=200`" alt="" />
              <span>{{ item.title }}</span>
            </span>
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <!-- <div
            class="btn red-btn"
            @click.prevent="storeVar.productModal = false"
          >
            Cancel
          </div> -->
          <div class="btn white-btn" @click="assignProduct('S')">
            Assign Student
          </div>
          <div class="btn white-btn" @click="assignProduct('P')">
            Assign Parent
          </div>
        </div>
      </div>
    </Modal>

    <!-- Class Add Modal  -->
    <Modal
      v-model:show="storeVar.addModal"
      class="faq-modal"
      headerClasses="header-bg"
      type="lg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Class" : "Add Class" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.addModal = false">
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
            maxlength="2"
          />
          <div class="err-msg" v-if="formVar.submit && priorityValid">
            {{ priorityValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addClass">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Asign Teacher Modal  -->
    <Modal
      v-model:show="storeVar.asignModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Teacher" : "Add Teacher" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.asignModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16 col-10">
          <div class="title">Section</div>
          <SingleSelect
            v-model="formVar.classDiv"
            :options="storeVar.classDiv"
            @selected="selectSection"
          />
          <div class="err-msg" v-if="formVar.submit && classDivValid">
            {{ classDivValid }}
          </div>
        </div>
        <div class="form-item mb-16 col-10">
          <div class="title">Class Teacher</div>
          <SingleSelect
            v-model="formVar.teacher"
            :options="storeVarStaff.staffList"
            @selected="selectStaff"
          />
          <!-- <div class="err-msg" v-if="formVar.submit && teacherValid">
            {{ teacherValid }}
          </div> -->
        </div>
        <div class="row" v-if="formVar.teacher">
          <div class="form-item mb-16 col-10">
            <SingleSelect
              v-model="formVar.type"
              :options="techerTypeOption"
              placeholder="Select Type"
              @selected="selectType"
            />
          </div>
          <div class="form-item mb-16 col-10">
            <SingleSelect
              v-model="formVar.subject"
              :options="storeVar.subject"
              placeholder="Select Subject"
              @selected="selectSubject"
            />
          </div>
        </div>
        <div class="row" v-if="formVar.teacher">
          <div class="form-item mb-16 col-10">
            <input type="time" name="start-time" v-model="formVar.time_start" />
          </div>
          <div class="form-item mb-16 col-10">
            <input type="time" name="end-time" v-model="formVar.time_end" />
          </div>
        </div>
        <div class="form-item mb-16 col-10">
          <div class="title">Class Co-Ordinator</div>
          <SingleSelect
            v-model="formVar.coOrdinator"
            :options="storeVarStaff.staffList"
            @selected="selectCoOrdinator"
          />
          <!-- <div class="err-msg" v-if="formVar.submit && coOrdinatorValid">
            {{ coOrdinatorValid }}
          </div> -->
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.asignModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="submitAsignTeacher">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Delete Modal -->
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

    <!-- Product Detail Modal -->
    <Modal
      v-model:show="formVar.productDetailModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          Product For ({{ formVar.product?.name }})
        </div>
        <div
          class="close-btn"
          @click.prevent="formVar.productDetailModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <div>
        <label class="i-card">
          For Student
          <span class="plan-details">
            <img
              :src="`${formVar.product?.idCardsStock?.productImage[0]?.file}?width=200`"
              alt=""
              style="height: auto; width: 100%"
            />
            <span>{{ formVar.product?.idCardsStock?.title }}</span>
          </span>
        </label>
        <router-link
          class="btn white-btn"
          :to="{
            path: '/crm/editor',
            query: {
              id: formVar?.product?.id,
              from: 'Class',
              sp: 'Student',
              type: 'Student',
              settingId: formVar?.organizationSettingId,
            },
          }"
        >
          Editor
        </router-link>
      </div>
      <div>
        <label class="i-card">
          For Parent
          <span class="plan-details">
            <img
              :src="`${formVar.product?.pIdCardsStock?.productImage[0]?.file}?width=200`"
              alt=""
              style="height: auto; width: 100%"
            />
            <span>{{ formVar.product?.pIdCardsStock?.title }}</span>
          </span>
        </label>
        <router-link
          class="btn white-btn"
          :to="{
            path: '/crm/editor',
            query: {
              id: formVar?.product?.id,
              from: 'Class',
              sp: 'Father',
              type: 'Parent',
              settingId: formVar?.organizationSettingId,
            },
          }"
        >
          Editor
        </router-link>
      </div>
    </Modal>

    <!-- Product Detail Modal -->
    <Modal
      v-model:show="formVar.teacherDetailModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Section/Teacher/Co-Ordinator</div>
        <div
          class="close-btn"
          @click.prevent="formVar.teacherDetailModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <div>
        <div class="table-body mt-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Section</th>
                <th col-span="5">Teacher</th>
                <th>Co-Ordinator</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(divItem, i) in formVar.teacherDetail" :key="i">
                  <td>
                    {{ divItem.classDiv?.name }}
                  </td>
                  <td>
                    {{ getClassTeacherData(divItem) }}
                  </td>
                  <td>
                    {{ divItem.coOrdinator?.name }}
                  </td>
                  <td>
                    <div class="option-btns">
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          studentByClassDiv(
                            formVar.itemId,
                            divItem.classDiv?.id
                          )
                        "
                      >
                        <icon-eye></icon-eye>
                        <div class="tooltip">Students</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          deleteClassSection(divItem.id, formVar.itemId)
                        "
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
          <div class="table-no-data" v-if="formVar.teacherDetail.length <= 0">
            <div>No records Found!</div>
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationSettings);
const storeVarStaff = computed(() => store.state.OrganizationStaff);
const deliveryPartnerVar = computed(() => store.state.DeliveryPartner);
const idCardStockVar = computed(() => store.state.IdCardStock);

const techerTypeOption = [
  { id: "CLASS_TEACHER", name: "CLASS TEACHER" },
  { id: "TEACHER", name: "TEACHER" },
];

const formVar = reactive({
  organizationSettingId: null,
  organizationId: null,
  editMode: false,
  limit: 10,
  offset: 0,
  keyword: "",
  todayDate: moment().format("YYYY-MM-DD"),

  classId: null,
  classDivId: null,
  classDiv: null,
  name: null,
  priority: null,
  teacher: null,
  coOrdinator: null,
  staffDetailId: null,
  coOrdinatorId: null,
  type: null,
  typeId: null,
  time_start: "00:00",
  time_end: "00:00",
  subject: null,
  subjectId: null,

  deliveryDate: null,
  parentCard: false,
  qty: 0,
  deliveryAddress: null,
  contactNumber: null,
  deliveryPartnerId: null,

  ids: [],

  idCardStockId: null,

  productDetailModal: false,
  product: null,

  selectAllStatus: false,

  teacherDetailModal: false,
  teacherDetail: [],
  itemId: null,
});
/* Constants */
/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationSettingId = route.query.settingId;
    formVar.organizationId = route.query.id;
    store.dispatch("OrganizationStaff/getStaffList", {
      limit: formVar.limit,
      offset: formVar.offset,
      keyword: formVar.keyword,
      status: "ACTIVE",
      settingId: formVar.organizationId,
    });
    store.dispatch("DeliveryPartner/getDeliveryPartners");
  }

  storeVar.value.  addModal= false;
  storeVar.value.  asignModal= false;
  storeVar.value.  confirmModal= false;
  storeVar.value.  statusModal= false;
  storeVar.value.  orderModal= false;
  storeVar.value.  productModal= false;
});
/* Lifecycle/Hooks */

/* Functions/Methods */
function openProductDetailModal(item) {
  formVar.productDetailModal = true;
  formVar.product = item;
}

function selectAll() {
  if (formVar.selectAllStatus) {
    storeVar.value.classList.forEach((element) => {
      element.checked = true;
      formVar.ids.push(element.id);
    });
  } else {
    storeVar.value.classList.forEach((element) => {
      element.checked = false;
    });
    formVar.ids = [];
  }
}

function selectClasses(id) {
  const objIndex = formVar.ids.findIndex((oid) => oid === id);
  if (objIndex < 0) {
    formVar.ids.push(id);
  } else {
    formVar.ids.splice(objIndex, 1);
  }
}

function openAddModal() {
  storeVar.value.addModal = true;
  formVar.editMode = false;
  formVar.name = null;
  formVar.priority = null;
}

function teacherDetailModal(data, classId) {
  formVar.teacherDetailModal = true;
  formVar.teacherDetail = data;
  formVar.itemId = classId;
}
function openEditModal(item) {
  storeVar.value.addModal = true;
  formVar.editMode = true;
  formVar.classId = item.id;
  formVar.name = item.name;
  formVar.priority = item.priority;
}
function openDeleteModal(id) {
  formVar.classId = id;
  storeVar.value.confirmModal = true;
}
function openProductModal() {
  formVar.idCardStockId = null;
  storeVar.value.productModal = true;
  searchProduct("");
}
function openAsignModal(id) {
  formVar.classId = id;
  storeVar.value.asignModal = true;
  formVar.classDiv = null;
  formVar.staffDetail = null;
  formVar.coOrdinator = null;
  formVar.teacher = null;

  formVar.classDivId = null;
  formVar.staffDetailId = null;
  formVar.coOrdinatorId = null;

  formVar.type = null;
  formVar.time_start = "00:00";
  formVar.time_end = "00:00";
  formVar.subject = null;
  formVar.subjectId = null;
}
const selectCoOrdinator = (option) => {
  formVar.coOrdinatorId = option.id;
};
const selectSection = (option) => {
  formVar.classDivId = option.id;
};
const selectStaff = (option) => {
  formVar.staffDetailId = option.id;
};
const selectSubject = (option) => {
  // formVar.subject = option
  formVar.subjectId = option.id;
};
const selectType = (option) => {
  // formVar.type = option
  formVar.typeId = option.id;
};
const searchProduct = (option) => {
  store.dispatch("IdCardStock/getIdCardStocks", {
    limit: 10,
    offset: 0,
    keyword: option,
  });
};
const downloadCSV = () => {
  if (formVar.ids.length > 0) {
    store.dispatch("CardOrder/downloadStudentCSVByOrganizationId", {
      id: formVar.organizationId,
      classess: JSON.stringify(formVar.ids),
    });
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect class!" });
  }
};
const downloadPhoto = () => {
  if (formVar.ids.length > 0) {
    store.dispatch("CardOrder/downloadStudentFileByOrganizationId", {
      id: formVar.organizationId,
      classess: JSON.stringify(formVar.ids),
    });
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect class!" });
  }
};
const generateFinalCard = (status) => {
  if (formVar.ids.length > 0) {
    router.push({
      path: "/crm/college/final-student-id-card",
      query: {
        classId: JSON.stringify(formVar.ids),
        organizationId: formVar.organizationId,
        status
      },
    });
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect class!" });
  }
};
const generateCard = (status) => {
  if (formVar.ids.length > 0) {
    router.push({
      path: "/crm/college/student-id-card",
      query: {
        classId: JSON.stringify(formVar.ids),
        organizationId: formVar.organizationId,
        status
      },
    });
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect class!" });
  }
};
const assignProduct = (type) => {
  if (formVar.ids.length > 0 && formVar.idCardStockId) {
    const payload = [];
    if (type === "S") {
      formVar.ids.forEach((element) => {
        payload.push({ id: element, idCardsStockId: formVar.idCardStockId });
      });
      store.dispatch("OrganizationSettings/assignClassProduct", payload);
    }
    if (type === "P") {
      formVar.ids.forEach((element) => {
        payload.push({ id: element, pIdCardsStockId: formVar.idCardStockId });
      });
      store.dispatch("OrganizationSettings/assignParentProduct", payload);
    }
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect class and prdouct!" });
  }
};

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

    store.dispatch("OrganizationSettings/createStudentOrder", {
      classes: formVar.ids,
      deliveryDate: formVar.deliveryDate,
      deliveryAddress: formVar.deliveryAddress,
      contactNumber: formVar.contactNumber,
      qty: formVar.qty,
      parentCard: formVar.parentCard,
      deliveryPartnerId: formVar.deliveryPartnerId,
      settingId:formVar.organizationSettingId
    });
      formVar.ids = [];
      formVar.deliveryDate = null;
      formVar.deliveryAddress = null;
      formVar.contactNumber = null;
      formVar.qty = 0;
      formVar.parentCard = false;
      formVar.deliveryPartnerId = null;
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect class and prdouct!" });
  }
};
async function submitAsignTeacher() {
  // if (classDivValid.value) {
  //   formVar.submit = true;
  //   return;
  // }
  // formVar.submit = false;
  if (formVar.classDivId || formVar.staffDetailId || formVar.coOrdinatorId) {
    await store.dispatch("OrganizationSettings/addAsignClass", {
      classListId: formVar.classId,
      classDivId: formVar.classDivId,
      staffDetailId: formVar.staffDetailId,
      coOrdinatorId: formVar.coOrdinatorId,
      teacher: formVar.teacher,
      coOrdinator: formVar.coOrdinator,
      section: formVar.classDiv,
      subjectId: formVar.subjectId,
      subject: formVar.subject,
      type: formVar.typeId,
      time_start: formVar.time_start,
      time_end: formVar.time_end,
    });

    formVar.classId = null;
    formVar.classDiv = null;
    formVar.staffDetail = null;
    formVar.teacher = null;
    formVar.type = null;
    formVar.time_start = "00:00";
    formVar.time_end = "00:00";
    formVar.subject = null;
    formVar.subjectId = null;
  }
}

function getClassTeacherData(data) {
  const name = data.staffDetail?.name || "";
  const type = name ? `(${data.type})` : "";
  const subject = name ? `(${data.subject?.name})` : "";
  const from = name ? formatTimeToAmPm(data.time_start) : "";
  const to = name ? formatTimeToAmPm(data.time_end) : "";
  return `${name} \n ${type} \n ${subject} \n ${from}-${to}`;
}

function addClass() {
  if (nameValid.value || priorityValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (!formVar.editMode) {
    store.dispatch("OrganizationSettings/addClass", {
      name: formVar.name,
      priority: formVar.priority,
      settingId: formVar.organizationSettingId,
    });
  } else {
    store.dispatch("OrganizationSettings/updateClass", {
      id: formVar.classId,
      name: formVar.name,
      priority: formVar.priority,
      settingId: formVar.organizationSettingId,
    });
  }
}
function navigater(id, orgId, link) {
  router.push({ path: link, query: { classId: id, organizationId: orgId } });
}

function studentByClassDiv(classListId, classDivId) {
  router.push({
    path: "/crm/college/students-by-class-section",
    query: {
      classListId,
      classDivId,
      id: formVar.organizationId,
      settingId: formVar.organizationSettingId,
    },
  });
}
function submitDelete() {
  store.dispatch("OrganizationSettings/deleteClass", {
    id: formVar.classId,
    status: "DELETED",
  });
}

function deleteClassSection(id, classListId) {
  store.dispatch("OrganizationSettings/deleteAsignClass", {
    id,
    classListId,
  });
}
function getDateTime(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY hh:mm A");
  } else {
    return "-";
  }
}
function formatTimeToAmPm(time) {
  if (!time) {
    return "";
  }
  return moment(time, "HH:mm").format("hh:mm A");
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

const classDivValid = computed(() => {
  if (!formVar.classDivId) {
    return "Please select section";
  }
});

const coOrdinatorValid = computed(() => {
  if (!formVar.coOrdinator) {
    return "Please Select coOrdinator";
  }
});
const teacherValid = computed(() => {
  if (!formVar.teacher) {
    return "Please Select Teacher";
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
}
/* Validation */
</script>

<style></style>
