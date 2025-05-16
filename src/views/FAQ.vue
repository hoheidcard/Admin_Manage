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
                <div class="sub-title">FAQ : List</div>
                <h5 class="main-title">Frequently Asked Questions</h5>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input type="text" v-model="formVar.keyword" placeholder="Search here" />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            <div class="searchbar">
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.status" @change="statusChangeSearch">
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DEACTIVE">DEACTIVE</option>
                </select>
              </div>
            </div>
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
                <icon-plus></icon-plus>
                <div class="tooltip">Add FAQ</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>FAQ Question</th>
                <th>FAQ Answer</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.faqData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.question }}</td>
                  <td>{{ item.answer }}</td>
                  <td>
                    <div v-if="item.status === 'ACTIVE'" class="badge success-badge">
                      {{ item.status }}
                    </div>
                    <div v-if="item.status === 'PENDING'" class="badge warning-badge">
                      {{ item.status }}
                    </div>
                    <div v-if="item.status === 'DEACTIVE'" class="badge danger-badge">
                      {{ item.status }}
                    </div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <div class="icon tooltip-wrapper" @click="openEditModal(item)">
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <!-- <div class="icon tooltip-wrapper" @click.prevent="formVar.confirmModal = true">
                        <icon-delete></icon-delete>
                        <div class="tooltip">Delete</div>
                      </div> -->
                      <div class="icon tooltip-wrapper" @click.prevent="openStatusModal(item.id, item.status)">
                        <icon-setting></icon-setting>
                        <div class="tooltip">Status Change</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.faqData?.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.faqData?.length > 0">
            <Pagination :currentPage="formVar.currentPage" :totalItem="storeVar.totalFaq" :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)" />
          </div>
        </div>
      </div>
    </div>

    <!-- Faq Add Modal  -->
    <Modal v-model:show="storeVar.faqModal" class="faq-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update FAQ" : "Add FAQ" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.faqModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16">
          <div class="title">FAQ Question</div>
          <input type="text" v-model="formVar.question" placeholder="Enter Question" :disabled="formVar.editMode" />
          <div class="err-msg" v-if="formVar.submit && questionValid">
            {{ questionValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">FAQ Answer</div>
          <textarea name="" v-model="formVar.answer" id="" rows="10" placeholder="Enter Answer"></textarea>
          <!-- <div class="err-msg">Please enter answer</div> -->
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.faqModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addFaq">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Status Modal -->

    <Modal v-model:show="storeVar.statusModal" class="status-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Change Status</div>
        <div class="close-btn" @click.prevent="storeVar.statusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="status-row">
        <label for="approve" class="data">
          <input type="radio" v-model="formVar.changeStatus" value="ACTIVE" id="approve" name="status" />
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">ACTIVE</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input type="radio" v-model="formVar.changeStatus" value="PENDING" id="pending" name="status" />
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">PENDING</div>
          </div>
        </label>
        <label for="block" class="data">
          <input type="radio" v-model="formVar.changeStatus" value="DEACTIVE" id="block" name="status" />
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">DEACTIVE</div>
          </div>
        </label>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.statusModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="submitStatus">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- modals -->
    <Modal v-model:show="storeVar.confirmModal" class="confirm-modal" headerClasses="header-bg">
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
          <div class="btn red-btn" @click.prevent="storeVar.confirmModal = false">
            Cancel
          </div>
          <div class="btn white-btn">Delete</div>
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
const storeVar = computed(() => store.state.Faqs);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  changeStatus: null,
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  faqId: null,
  question: null,
  answer: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getFaq();
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
      getFaq();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function getFaq() {
  store.dispatch("Faqs/getFaq", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
  });
}
function openAddModal() {
  storeVar.value.faqModal = true;
  formVar.editMode = false;
  formVar.question = null;
  formVar.answer = null;
}
function openEditModal(item) {
  storeVar.value.faqModal = true;
  formVar.editMode = true;
  formVar.faqId = item.id;
  formVar.question = item.question;
  formVar.answer = item.answer;
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.faqId = id;
  storeVar.value.statusModal = true;
}
function addFaq() {
  if (questionValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (!formVar.editMode) {
    store.dispatch("Faqs/addFaq", {
      question: formVar.question,
      answer: formVar.answer,
      changeStatus: formVar.status,
    });
  } else {
    store.dispatch("Faqs/updateFaq", {
      id: formVar.faqId,
      answer: formVar.answer,
    });
  }
}
function submitStatus() {
  store.dispatch("Faqs/updateFaqStatus", {
    id: formVar.faqId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getFaq();
};
function statusChangeSearch() {
  getFaq();
}

/* Functions/Methods */
/* Validation */
const questionValid = computed(() => {
  if (!formVar.question) {
    return "Please Enter Question";
  }
});
</script>

<style></style>
