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
                <div class="sub-title">Feedback : List</div>
                <h5 class="main-title">User Feedbacks</h5>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input type="text" v-model="formVar.keyword" placeholder="Search here">
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            <div class="searchbar">
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.status" @change="statusChangeSearch">
                  <option :value="true">ACTIVE</option>
                  <option :value="false">DEACTIVE</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Username</th>
                <th>Name</th>
                <th>Feedback</th>
                <th>Rating</th>
                <th>Created At</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.feedbackData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.account?.phoneNumber }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.desc }}</td>
                  <td>
                    <div class="rating">
                      {{ item.rating }} <icon-star></icon-star>
                    </div>
                  </td>
                  <td>{{ getDateTime(item.createdAt) }}</td>
                  <td>
                    <div v-if="item.status === true" class="badge success-badge">ACTIVE</div>
                    <div v-if="item.status === false" class="badge danger-badge">DEACTIVE</div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <div class="icon tooltip-wrapper" @click.prevent="openStatusModal(item.id, item.status)">
                        <icon-setting></icon-setting>
                        <div class="tooltip">Change Status</div>
                      </div>
                      <!-- <div class="icon tooltip-wrapper" @click.prevent="storeVar.confirmModal = true">
                        <icon-delete></icon-delete>
                        <div class="tooltip">Delete</div>
                      </div> -->
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.feedbackData.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.feedbackData?.length > 0">
            <Pagination :currentPage="formVar.currentPage" :totalItem="storeVar.totalFeedback"
              :itemsPerPage="formVar.limit" @update:currentPage="pageChange($event)" />
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <Modal v-model:show="storeVar.confirmModal" class="confirm-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Delete</div>
        <div class="close-btn" @click.prevent="storeVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="delete-icon">
        <img src="/images/png/delete.png" alt="">
      </div>
      <h4 class="text-gree">
        Are you sure want to Delete?
      </h4>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn white-btn" @click.prevent="storeVar.confirmModal = false">Cancel</div>
          <div class="btn red-btn" @click="logout">Delete</div>
        </div>
      </div>
    </Modal>
    <Modal v-model:show="storeVar.statusModal" class="status-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Change Status</div>
        <div class="close-btn" @click.prevent="storeVar.statusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="status-row">
        <label for="approve" class="data">
          <input type="radio" v-model="formVar.changeStatus" id="approve" name="status" :value="true">
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">ACTIVE</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input type="radio" v-model="formVar.changeStatus" id="pending" name="status" :value="false">
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">DEACTIVE</div>
          </div>
        </label>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.statusModal = false">Cancel</div>
          <div class="btn white-btn" @click="submitStatus">Submit</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount, watch } from "vue";
import moment from "moment";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Feedback);

const formVar = reactive({
  limit: 10,
  offset: 0,
  keyword: '',
  status: true,
  changeStatus: null,
  currentPage: 1,
  feedbackId: null,

  typingTimer: null,
  typingDelay: 500,
})
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getFeedback()
})
/* Lifecycle/Hooks */

/* Search Function */
watch(() => formVar.keyword, () => {
  clearTimeout(formVar.typingTimer);
  // Start a new timer
  formVar.typingTimer = setTimeout(() => {
    formVar.limit = 10
    formVar.offset = 0
    formVar.currentPage = 1
    getFeedback()
  }, formVar.typingDelay);
})
/* Search Function */
/* Functions/Methods */
function getFeedback() {
  store.dispatch("Feedback/getFeedback", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status
  });
}
function openStatusModal(id, status) {
  formVar.changeStatus = status
  formVar.feedbackId = id
  storeVar.value.statusModal = true
}
function submitStatus() {
  store.dispatch("Feedback/updateFeedbackStatus", {
    id: formVar.feedbackId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page
  formVar.offset = formVar.limit * (page - 1)
  getFeedback()
};
function statusChangeSearch() {
  getFeedback()
}
function getDateTime(date) {
  if (date) {
    return moment(date).format('MMM Do YYYY hh:mm A')
  }
  return "-";
}
/* Functions/Methods */
/* Validation */
</script>

<style></style>