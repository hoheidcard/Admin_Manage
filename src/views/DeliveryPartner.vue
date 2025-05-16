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
                <div class="sub-title">Deliver Partner : List</div>
                <h5 class="main-title">Deliver Partners</h5>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Delivery Partner</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Title</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.title }}</td>
                  <td>
                    <div class="option-btns">
                      <div
                        class="icon tooltip-wrapper"
                        @click="openDeleteModal(item.id)"
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
          <div class="table-no-data" v-if="storeVar.data?.length <= 0">
            <div>No records Found!</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Faq Add Modal  -->
    <Modal
      v-model:show="storeVar.addModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Title" : "Add Title" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16">
          <div class="title">Title</div>
          <input
            type="text"
            v-model="formVar.title"
            placeholder="Enter title"
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && titleValid">
            {{ titleValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addDeliveryPartner">Submit</div>
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
            type="button"
            @click.prevent="storeVar.confirmModal = false"
          >
            Cancel
          </div>
          <div
            class="btn white-btn"
            type="button"
            @click.prevent="submitStatus"
          >
            Delete
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.DeliveryPartner);

const formVar = reactive({
  submit: false,

  id: null,
  title: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getDeliveryPartners();
});
/* Lifecycle/Hooks */

/* Functions/Methods */
function getDeliveryPartners() {
  store.dispatch("DeliveryPartner/getDeliveryPartners");
}
function openAddModal() {
  storeVar.value.addModal = true;
  formVar.title = null;
}
function openDeleteModal(id) {
  storeVar.value.confirmModal = true;
  formVar.id = id;
}
function addDeliveryPartner() {
  if (titleValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("DeliveryPartner/createDeliveryPartner", {
    title: formVar.title,
  });
}
function submitStatus() {
  store.dispatch("DeliveryPartner/updateIdCardStockStatus", {
    id: formVar.id,
  });
}
/* Functions/Methods */
/* Validation */
const titleValid = computed(() => {
  if (!formVar.title) {
    return "Please Enter title";
  }
});
</script>

<style></style>
