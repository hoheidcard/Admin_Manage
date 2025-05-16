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
                <div class="sub-title">Student : List</div>
                <h5 class="main-title">Student</h5>
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
            <div class="icons">
              <div
                class="icon tooltip-wrapper"
                @click.prevent="storeVar.cardModal = true"
              >
                <icon-card></icon-card>
                <div class="tooltip">Card</div>
              </div>
            </div>
            <!-- <div class="searchbar">
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.status" @change="statusChangeSearch">
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DEACTIVE">DEACTIVE</option>
                </select>
              </div>
            </div> -->
            <div class="icons">
              <div
                class="icon tooltip-wrapper"
                @click.prevent="
                  navigate(
                    formVar.organizationId,
                    formVar.organizationSettingId,
                    '/crm/college/create-my-student'
                  )
                "
              >
                <icon-plus></icon-plus>
                <div class="tooltip">Add Student</div>
              </div>
            </div>
            <div class="icons">
              <div
                class="icon tooltip-wrapper"
                @click.prevent="storeVar.promoteModal = true"
              >
                <icon-asign></icon-asign>
                <div class="tooltip">Promote Class</div>
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
                <th>SR No.</th>
                <th>S. Name</th>
                <th>F. Name</th>
                <th>Class-Section</th>
                <th>College</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.studentData" :key="index">
                  <td>
                    <input type="checkbox" @change="selectStudents(item.id)" />
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
                  <td>{{ item.srNo }}</td>
                  <td class="text-primary">
                    <router-link
                      :to="{
                        path: '/crm/college/student-profile',
                        query: {
                          studentId: item.id,
                          id: formVar.organizationId,
                          settingId: formVar.organizationSettingId,
                        },
                      }"
                    >
                      {{ item.name }}
                    </router-link>
                  </td>
                  <td>{{ item.fatherName }}</td>
                  <td>{{ item.classList?.name }}-{{ item.classDiv?.name }}</td>
                  <td>{{ item.organizationDetail?.name }}</td>
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
                        @click="
                          navigate(
                            item.id,
                            formVar.organizationSettingId,
                            '/crm/college/update-my-student'
                          )
                        "
                      >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <router-link
                        class="icon tooltip-wrapper"
                        :to="{
                          path: '/crm/college/final-student-card',
                          query: { id: item.id, status: 'Class' },
                        }"
                      >
                        <icon-card></icon-card>
                        <div class="tooltip">Student</div>
                      </router-link>
                      <router-link
                        class="icon tooltip-wrapper"
                        :to="{
                          path: '/crm/college/final-student-card',
                          query: { id: item.id, status: 'Parent' },
                        }"
                      >
                        <icon-card></icon-card>
                        <div class="tooltip">Parent</div>
                      </router-link>
                      <router-link
                        class="icon tooltip-wrapper"
                        :to="{
                          path: '/crm/college/final-student-card',
                          query: { id: item.id, status: 'House' },
                        }"
                      >
                        <icon-card></icon-card>
                        <div class="tooltip">House</div>
                      </router-link>
                      <!-- <div class="icon tooltip-wrapper" @click.prevent="navigate(item.accountId, '/crm/staff-permission')">
                        <icon-permission></icon-permission>
                        <div class="tooltip">Permission</div>
                      </div> -->
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
          <div class="table-no-data" v-if="storeVar.studentData?.length <= 0">
            <div>No records Found!</div>
          </div>
          <!-- <div class="table-footer" v-if="storeVar.studentData?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalStudent"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div> -->
        </div>
      </div>
    </div>

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

    <!-- Card Modal -->
    <Modal
      v-model:show="storeVar.cardModal"
      class="status-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          Are you sure you want to submit?
        </div>
        <div class="close-btn" @click.prevent="storeVar.cardModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            type="button"
            @click.prevent="storeVar.cardModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" type="submit" @click.prevent="assignCard">
            Submit
          </div>
        </div>
      </div>
    </Modal>

    <!-- Promote Class Modal -->
    <Modal
      v-model:show="storeVar.promoteModal"
      class="status-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          Are you sure you want to submit?
        </div>
        <div class="close-btn" @click.prevent="storeVar.promoteModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div>
        <SingleSelectId
          v-model="formVar.classListId"
          :options="storeVar.classData"
        ></SingleSelectId>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            type="button"
            @click.prevent="storeVar.promoteModal = false"
          >
            Cancel
          </div>
          <div
            class="btn white-btn"
            type="submit"
            @click.prevent="promoteClass"
          >
            Submit
          </div>
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
const storeVar = computed(() => store.state.OrganizationStudent);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  organizationId: null,
  studentId: null,
  organizationSettingId: null,
  changeStatus: null,

  ids: [],
  classListId: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    getStudent();
    store.dispatch("OrganizationStudent/getMyClasses", {
      settingId: route.query.settingId,
    });
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
      getStudent();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function selectStudents(id) {
  const objIndex = formVar.ids.findIndex((oid) => oid === id);
  if (objIndex < 0) {
    formVar.ids.push(id);
  } else {
    formVar.ids.splice(objIndex, 1);
  }
}

const assignCard = () => {
  if (formVar.ids.length > 0) {
    const payload = [];
    formVar.ids.forEach((element) => {
      payload.push({ id: element, card: true });
    });
    store.dispatch("OrganizationStudent/updateStudentCard", payload);
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect student!" });
  }
};

const promoteClass = () => {
  if (formVar.ids.length > 0 && formVar.classListId) {
    const payload = [];
    formVar.ids.forEach((element) => {
      payload.push({ id: element, classListId: formVar.classListId });
    });
    store.dispatch("OrganizationStudent/promoteClass", payload);
  } else {
    store.dispatch("Alert/error", { msg: "Please seclect student and class!" });
  }
};

function getStudent() {
  store.dispatch("OrganizationStudent/getStudentByClassDiv", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    organizationDetailId: formVar.organizationId,
    classListId: route.query.classListId,
    classDivId: route.query.classDivId,
  });
}

function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.studentId = id;
  storeVar.value.statusModal = true;
}

function submitStatus() {
  store.dispatch("OrganizationStudent/updateStudentStatus", {
    id: formVar.studentId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getStudent();
};
function statusChangeSearch() {
  getStudent();
}
function getDate(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY");
  }
  return "-";
}
function navigate(id, settingId, link) {
  router.push({ path: link, query: { id, settingId } });
}

/* Functions/Methods */
</script>

<style></style>
