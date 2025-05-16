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
                <div class="sub-title">Orders : List</div>
                <h5 class="main-title">Order List</h5>
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
                  @change="getCardOrders"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="IN_PROCESS">IN_PROCESS</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            </div>
            <div class="text">From</div>
            <div class="date-input">
              <input type="date" class="w-12-r-i" v-model="formVar.fromDate" />
              <div class="icon">
                <icon-calendar></icon-calendar>
              </div>
            </div>
            <div class="text">To</div>
            <div class="date-input">
              <input type="date" class="w-12-r-i" v-model="formVar.toDate" />
              <div class="icon">
                <icon-calendar></icon-calendar>
              </div>
            </div>
            <div class="searchbar">
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.filterType">
                  <option value="ORDER DATE">ORDER DATE</option>
                  <option value="DELIVERY DATE">DELIVERY DATE</option>
                </select>
              </div>
            </div>
            <div class="searchbar">
              <button
                class="btn white-btn w-full"
                type="button"
                @click.prevent="getCardOrders"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Type</th>
                <th>Name</th>
                <th>Contact NO.</th>
                <th>Student/Staff</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <!-- <td>{{ index + 1 }}</td> -->
                  <td>{{ getDate(item.orderDate) }}</td>
                  <td>{{ getDate(item.deliveryDate) }}</td>
                  <td>
                    {{ item.setting?.organizationDetail[0]?.account?.roles }}
                  </td>
                  <td>{{ item.setting?.organizationDetail[0]?.name }}</td>
                  <td>{{ item.contactNumber }}</td>
                  <td>{{ item.type }}</td>
                  <td>
                    <div
                      v-if="item.status === 'COMPLETED'"
                      class="badge success-badge"
                    >
                      {{ item.status }}
                    </div>
                    <div
                      v-if="item.status === 'IN_PROCESS'"
                      class="badge warning-badge"
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
                      v-if="item.status === 'CANCELLED'"
                      class="badge danger-badge"
                    >
                      {{ item.status }}
                    </div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <div
                        class="icon tooltip-wrapper"
                        @click="openDetailsModal(item)"
                      >
                        <icon-eye></icon-eye>
                        <div class="tooltip">Order Detail</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click="
                          routeOrganization(
                            item.setting?.organizationDetail[0]?.id,
                            item.setting.id,
                            item.setting?.organizationDetail[0]?.account?.roles,
                            item.type
                          )
                        "
                      >
                        <icon-info></icon-info>
                        <div class="tooltip">View</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click="downloadCSV(item.id, item.type)"
                      >
                        <icon-down-arrow-round></icon-down-arrow-round>
                        <div class="tooltip">Download CSV</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click="downloadImage(item.id, item.type)"
                      >
                        <icon-down-arrow></icon-down-arrow>
                        <div class="tooltip">Download Images</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openStatusModal(item.id, item.status)"
                      >
                        <icon-setting></icon-setting>
                        <div class="tooltip">Status Change</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.data?.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.data?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.total"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Order Details  -->
    <Modal
      v-model:show="formVar.detailsModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Order Details</div>
        <div class="close-btn" @click.prevent="formVar.detailsModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="row" v-if="formVar.orderDetails">
        <div class="data-list">
          <div class="data">
            <div class="title">
              <b>Order Id :</b>{{ formVar.orderDetails.id }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Order Number :</b>Order-{{ formVar.orderDetails.orderNumber }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Approx Qty. :</b>{{ formVar.orderDetails.qty }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Contact No. :</b>{{ formVar.orderDetails.contactNumber }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Order Date :</b>{{ getDate(formVar.orderDetails.orderDate) }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Delivery Date :</b
              >{{ getDate(formVar.orderDetails.deliveryDate) }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Session :</b>{{ formVar.orderDetails.fromYear }}-{{
                formVar.orderDetails.toYear
              }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Delivery Address :</b
              >{{ formVar.orderDetails.deliveryAddress }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Parent Card :</b
              >{{ formVar.orderDetails.parentCard ? "Yes" : "No" }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Type :</b>{{ formVar.orderDetails.type }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Status :</b>{{ formVar.orderDetails.status }}
            </div>
          </div>
          <div
            v-for="(item, i) in formVar.orderDetails?.cardOrderList"
            :key="i"
          >
            <hr />
            <div class="data">
              <div class="title"><b>Class :</b>{{ item.classList?.name }}</div>
            </div>
            <div class="data">
              <div class="title">
                <b>ProClasduct Title :</b>
                {{ item.classList?.idCardsStock.title }}
              </div>
              <div>
                <img
                  :src="`${item.classList?.idCardsStock?.image}?width=200`"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>No data available. Please select order!</div>
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
            value="COMPLETED"
            id="approve"
            name="status"
          />
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">COMPLETED</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="IN_PROCESS"
            id="pending"
            name="status"
          />
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">IN PROCESS</div>
          </div>
        </label>
        <label for="block" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="CANCELLED"
            id="block"
            name="status"
          />
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">CANCELLED</div>
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

    <!-- modals -->
    <!-- <Modal
      v-model:show="storeVar.imageModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Upload Product Image</div>
        <div class="close-btn" @click.prevent="storeVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="img-upload flex flex-d-col align-center">
        <div class="text text-small mb-10">Product Image</div>
        <div class="img-upload-wrapper h-10-r w-10-r" @click="openUpload1">
          <img
            v-if="formVar.file"
            :src="formVar.file"
            class="preview-image"
            alt=""
          />
          <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
          <div class="form-group">
            <input
              name="image"
              type="file"
              id="file-field1"
              v-on:change="updatePreview1"
              style="display: none"
            />
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.imageModal = false">
            Cancel
          </div>
          <div class="btn white-btn" type="button" @click.prevent="submitImage">
            Upload
          </div>
        </div>
      </div>
    </Modal> -->
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const router = useRouter();
const storeVar = computed(() => store.state.CardOrder);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "PENDING",
  filterType: "ORDER DATE",
  changeStatus: null,
  currentPage: 1,
  editMode: false,

  fromDate: moment().subtract(30, "days").format("YYYY-MM-DD"),
  toDate: moment().format("YYYY-MM-DD"),

  typingTimer: null,
  typingDelay: 500,

  id: null,
  title: null,
  image: null,
  file: null,

  detailsModal: false,
  orderDetails: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getCardOrders();
});
/* Lifecycle/Hooks */

/* Search Function */
watch(
  () => formVar.keyword,
  () => {
    clearTimeout(formVar.typingTimer);
    // Start a new timer
    formVar.typingTimer = setTimeout(() => {
      formVar.limit = 10;
      formVar.offset = 0;
      formVar.currentPage = 1;
      getCardOrders();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function getCardOrders() {
  store.dispatch("CardOrder/getOrders", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    fromDate: formVar.fromDate,
    toDate: formVar.toDate,
    filterType: formVar.filterType,
  });
}

function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.id = id;
  storeVar.value.statusModal = true;
}

function openDetailsModal(item) {
  formVar.detailsModal = true;
  formVar.orderDetails = item;
}
function submitStatus() {
  if (formVar.id && formVar.changeStatus) {
    store.dispatch("CardOrder/updateCardOrderStatus", {
      id: formVar.id,
      status: formVar.changeStatus,
    });
  }
}
function downloadCSV(id, type) {
  if (type === "STAFF") {
    store.dispatch("CardOrder/downloadStaffCSVByOrderId", {
      id,
    });
  }
  if (type === "STUDENT") {
    store.dispatch("CardOrder/downloadStudentCSVByOrderId", {
      id,
    });
  }
}

function downloadImage(id, type) {
  if (type === "STAFF") {
    store.dispatch("CardOrder/downloadStaffFileByOrderId", {
      id,
    });
  }
  if (type === "STUDENT") {
    store.dispatch("CardOrder/downloadStudentFileByOrderId", {
      id,
    });
  }
}

const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getCardOrders();
};

const routeOrganization = (id, settingId, roles, type) => {
  if (roles === "SCHOOL") {
    if (type === "STUDENT") {
      router.push({
        path: "/crm/school/setting/class-list",
        query: { id, settingId },
      });
    } else {
      router.push({
        path: "/crm/school/setting/designation",
        query: { id, settingId },
      });
    }
  }
  if (roles === "COLLEGE") {
    if (type === "STUDENT") {
      router.push({
        path: "/crm/college/setting/class-list",
        query: { id, settingId },
      });
    } else {
      router.push({
        path: "/crm/college/setting/designation",
        query: { id, settingId },
      });
    }
  }
  if (roles === "ORGANIZATION") {
    router.push({
      path: "/crm/organization/setting/designation",
      query: { id, settingId },
    });
  }
};
function getDate(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY");
  }
  return "-";
}
/* Functions/Methods */
/* Validation */
const titleValid = computed(() => {
  if (!formVar.title) {
    return "Please Enter title";
  }
});
</script>

<style lang="scss">
.modal-body {
  overflow-y: auto;
  max-height: 90vh;
  .data {
    padding-bottom: 0.5rem;
  }
}
</style>
