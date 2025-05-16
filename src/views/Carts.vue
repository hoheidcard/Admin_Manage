<template>
  <section class="faq-page">
    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
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
          </div>
          <div class="right">
            <div class="searchbar">
              <div class="select-dropdown">
                <select v-model="formVar.status">
                  <option value="null" disabled>Select Order Status</option>
                  <option value="CANCELLED">CANCELLED</option>
                  <option value="ORDERED">ORDERED</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="DISPATCH">DISPATCH</option>
                </select>
              </div>
            </div>
            <div class="searchbar">
              <div class="select-dropdown">
                <select v-model="formVar.paymentStatus">
                  <option value="null" disabled>Select Payment Status</option>
                  <option value="ALL">ALL</option>
                  <option value="PENDING">PENDING</option>
                  <option value="CANCELLED">CANCELLED</option>
                  <option value="REFUNDED">REFUNDED</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
              </div>
            </div>
            <div class="searchbar">
              <div class="select-dropdown">
                <select v-model="formVar.paymentMode">
                  <option value="null" disabled>Select Payment Mode</option>
                  <option value="All">ALL</option>
                  <option value="COD">COD</option>
                  <option value="Razor Pay">Razor Pay</option>
                  <option value="Phone Pe">Phone Pe</option>
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
              <button
                class="btn white-btn w-full"
                type="button"
                @click.prevent="getOrders"
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
                <th>Order Id</th>
                <th>Order Date</th>
                <th>Invoice Number</th>
                <th>Total</th>
                <th>Status</th>
                <th>Payment Status</th>
                <th>Payment Mode</th>
                <th class="text-center">From</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <!-- <td>{{ index + 1 }}</td> -->
                  <td>{{ item.orderId }}</td>
                  <td>{{ getDate(item.orderDate) }}</td>
                  <td>
                    {{ item.invoiceNumber }}
                  </td>
                  <td>{{ item.total }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.paymentHistory?.status }}</td>
                  <td>{{ item.paymentHistory?.mode }}</td>
                  <td style="display: flex; gap: 2px">
                    <router-link
                      v-if="item.partnerAccount"
                      :to="{
                        path: '/crm/partners/setting/department',
                        query: {
                          id: item.partnerAccount.partnerDetail[0].id,
                          settingId: item.partnerAccount.settingId,
                        },
                      }"
                      class="btn primary-btn"
                    >
                      Partner
                    </router-link>
                    <router-link
                      v-if="item.subPartnerAccount"
                      :to="{
                        path: '/crm/partners/setting/department',
                        query: {
                          id: item.subPartnerAccount.partnerDetail[0].id,
                          settingId: item.subPartnerAccount.settingId,
                        },
                      }"
                      class="btn primary-btn"
                    >
                      Sub Partner
                    </router-link>
                    <router-link
                      v-if="item.account && item.roles === 'SCHOOL'"
                      :to="{
                        path: '/crm/school/setting/class-list',
                        query: {
                          id: item.account.organizationDetail[0].id,
                          settingId: item.account.settingId,
                        },
                      }"
                      class="btn primary-btn"
                    >
                      SCHOOL
                    </router-link>
                    <router-link
                      v-if="item.account && item.roles === 'USER'"
                      :to="{
                        path: '/crm/user-detail',
                        query: {
                          id: item.account.id,
                        },
                      }"
                      class="btn primary-btn"
                    >
                      USER
                    </router-link>
                    <router-link
                      v-if="item.account && item.roles === 'COLLEGE'"
                      :to="{
                        path: '/crm/college/setting/class-list',
                        query: {
                          id: item.account.organizationDetail[0].id,
                          settingId: item.account.settingId,
                        },
                      }"
                      class="btn primary-btn"
                    >
                      COLLGE
                    </router-link>
                    <router-link
                      v-if="item.account && item.roles === 'ORGANIZATION'"
                      :to="{
                        path: '/crm/organization/setting/designation',
                        query: {
                          id: item.account.organizationDetail[0].id,
                          settingId: item.account.settingId,
                        },
                      }"
                      class="btn primary-btn"
                    >
                      CORP
                    </router-link>
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
                      <a
                        class="icon tooltip-wrapper"
                        @click="downloadInvoice(item.id)"
                      >
                        <icon-down-arrow-round></icon-down-arrow-round>
                        <div class="tooltip">Download Invoice</div>
                      </a>
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
      type="lg"
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
              <b>Order Date :</b>{{ getDate(formVar.orderDetails.orderDate) }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Invoice Number :</b>Order-{{
                formVar.orderDetails.invoiceNumber
              }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Price :</b>{{ formVar.orderDetails.total }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Delivery Address :</b
              >{{ formVar.orderDetails?.userAddress?.address }}
            </div>
          </div>
          <div class="data">
            <div class="title">
              <b>Order Status :</b>{{ formVar.orderDetails.status }}
            </div>
          </div>
          <div class="table-body">
            <div class="table-outer">
              <table class="table">
                <thead>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Variants</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th class="text-center">Status</th>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, i) in formVar.orderDetails?.cartProduct"
                    :key="i"
                  >
                    <td>
                      <img
                        :src="item.idCardsStock?.productImage[0]?.file"
                        style="width: 50px; height: auto"
                        alt=""
                      />
                    </td>
                    <td>{{ item.idCardsStock?.title }}</td>
                    <td>
                      <li
                        v-for="(row, ind) in item.cartProductVariant"
                        :key="ind"
                      >
                        <b>{{ row.productVariant.type }}:</b>
                        {{ row.productVariant.name }}
                      </li>
                    </td>
                    <td>{{ item.idCardsStock?.category?.title }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.status }}</td>
                  </tr>
                </tbody>
              </table>
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
      <div class="row">
        <div class="form-item mb-16">
          <div class="title">CGST</div>
          <input
            type="text"
            name="otp"
            v-model="formVar.cgst"
            maxlength="2"
            @keydown="isNumber($event)"
          />
        </div>
        <div class="form-item mb-16">
          <div class="title">SGST</div>
          <input
            type="text"
            name="otp"
            v-model="formVar.sgst"
            maxlength="2"
            @keydown="isNumber($event)"
          />
        </div>
        <div class="form-item mb-16">
          <div class="title">IGST</div>
          <input
            type="text"
            name="otp"
            v-model="formVar.igst"
            maxlength="2"
            @keydown="isNumber($event)"
          />
        </div>
        <div class="form-item mb-16">
          <div class="title">Shipping</div>
          <input
            type="text"
            name="otp"
            v-model="formVar.shipping"
            maxlength="2"
            @keydown="isNumber($event)"
          />
        </div>
        <div class="form-item mb-16">
          <div class="title">Additional Discount</div>
          <input
            type="text"
            name="otp"
            v-model="formVar.addDiscount"
            maxlength="2"
            @keydown="isNumber($event)"
          />
        </div>

      </div>
      <div class="status-row">
        <label for="approve" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="DISPATCH"
            id="approve"
            name="status"
          />
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">DISPATCH</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="DELIVERED"
            id="pending"
            name="status"
          />
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">DELIVERED</div>
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const router = useRouter();
const storeVar = computed(() => store.state.Carts);

const formVar = reactive({
  submit: false,

  limit: 10,
  offset: 0,
  keyword: "",
  status: "ORDERED",
  paymentStatus: "ALL",
  paymentMode: "All",
  filterType: "ORDER DATE",
  changeStatus: null,
  currentPage: 1,

  fromDate: moment().subtract(30, "days").format("YYYY-MM-DD"),
  toDate: moment().format("YYYY-MM-DD"),

  typingTimer: null,
  typingDelay: 500,

  detailsModal: false,
  orderDetails: null,

  sgst: 0,
  cgst: 0,
  igst: 0,
  shipping:0,
  addDiscount: 0,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getOrders();
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
      getOrders();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function getOrders() {
  store.dispatch("Carts/all", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    paymentStatus: formVar.paymentStatus,
    paymentMode: formVar.paymentMode,
    fromDate: formVar.fromDate,
    toDate: formVar.toDate,
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
    store.dispatch("Carts/status", {
      id: formVar.id,
      status: formVar.changeStatus,
      sgst: formVar.sgst,
      cgst: formVar.cgst,
      igst: formVar.igst,
      shipping: formVar.shipping,
      addDiscount: formVar.addDiscount
    });
  }
}
function downloadInvoice(id) {
  store.dispatch("Carts/downloadInvoice", {
    id,
  });
}

const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getOrders();
};

function getDate(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY");
  }
  return "-";
}
/* Functions/Methods */
/* Validation */
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
