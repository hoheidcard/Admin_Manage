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
              <div class="sub-title">House Zone : List</div>
              <h5 class="main-title">Our House Zone</h5>
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
              <div class="tooltip">Add House Zone</div>
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
              <th></th>
              <th>House Zone</th>
              <!-- <th>Date & Time</th> -->
              <th class="text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.houseZone" :key="index">
                <!-- <td>{{ index + 1 }}</td> -->
                <td>
                  <input
                    type="checkbox"
                    v-model="item.checked"
                    @change="selectClasses(item.id)"
                  />
                </td>
                <td>{{ item.name }}</td>
                <!-- <td>{{ getDateTime(item.createdAt) }}</td> -->
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data" v-if="storeVar.houseZone?.length <= 0">
          <div>No records Found!</div>
        </div>
      </div>
    </div>

    <!-- Class Add Modal  -->
    <Modal
      v-model:show="storeVar.addModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update House Zone" : "Add House Zone" }}
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
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addHouseZone">Submit</div>
        </div>
      </div>
    </Modal>

        <!-- Product List Modal -->
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
          <div
            class="btn red-btn"
            @click.prevent="storeVar.productModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="assignProduct">Assign Product</div>
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
              from: 'House',
              type: 'Student',
              settingId: formVar?.organizationSettingId,
            },
          }"
        >
          Editor
        </router-link>
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
const idCardStockVar = computed(() => store.state.IdCardStock);

const formVar = reactive({
  organizationSettingId: null,
  organizationId: null,
  editMode: false,

  houseZoneId: null,
  name: null,
  priority: null,

  idCardStockId: null,

  ids: []
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
function openAddModal() {
  storeVar.value.addModal = true;
  formVar.editMode = false;
  formVar.name = null;
}
function openEditModal(item) {
  storeVar.value.addModal = true;
  formVar.editMode = true;
  formVar.houseZoneId = item.id;
  formVar.name = item.name;
}
function openDeleteModal(id) {
  formVar.houseZoneId = id;
  storeVar.value.confirmModal = true;
}
function addHouseZone() {
  if (nameValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (!formVar.editMode) {
    store.dispatch("OrganizationSettings/addHouseZone", {
      name: formVar.name,
      settingId: formVar.organizationSettingId,
    });
  } else {
    store.dispatch("OrganizationSettings/updateHouseZone", {
      id: formVar.houseZoneId,
      name: formVar.name,
      settingId: formVar.organizationSettingId,
    });
  }
}
function submitDelete() {
  store.dispatch("OrganizationSettings/deleteHouseZone", {
    id: formVar.houseZoneId,
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
function selectClasses(id) {
  const objIndex = formVar.ids.findIndex((oid) => oid === id);
  if (objIndex < 0) {
    formVar.ids.push(id);
  } else {
    formVar.ids.splice(objIndex, 1);
  }
}
function openProductModal() {
  formVar.idCardStockId = null;
  storeVar.value.productModal = true;
  searchProduct("");
}

function openProductDetailModal(item) {
  formVar.productDetailModal = true;
  formVar.product = item;
}
const searchProduct = (option) => {
  store.dispatch("IdCardStock/getIdCardStocks", {
    limit: 10,
    offset: 0,
    keyword: option,
  });
};
const assignProduct = () => {
  if (formVar.ids.length > 0 && formVar.idCardStockId) {
    const payload = [];
    formVar.ids.forEach((element) => {
      payload.push({ id: element, idCardsStockId: formVar.idCardStockId });
    });
    store.dispatch("OrganizationSettings/assignHouseProduct", payload);
  } else {
    store.dispatch("Alert/error", {
      msg: "Either no house zone or select product!",
    });
  }
};
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
