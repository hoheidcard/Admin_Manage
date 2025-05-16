<template>
  <section class="faq-page">
    <!-- <div class="container"> -->
    <div class="table-card card">
      <div class="table-header">
        <div class="left">
          <div class="title-row">
            <div class="icon">
              <icon-partner></icon-partner>
            </div>
            <div class="titles">
              <div class="sub-title">Staff : List</div>
              <h5 class="main-title">Our Staff List</h5>
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
          <!-- <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="navigate(null, '/crm/add-partners')">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Partners</div>
              </div>
            </div> -->
        </div>
      </div>
      <div class="table-body p-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Firm Name</th>
              <th>Designation</th>
              <th>Status</th>
              <th class="text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.staffData" :key="index">
                <td>
                  <div class="zoom-image" v-if="item.profile">
                    <img :src="`${item.profile}?width=200`" alt="" />
                  </div>
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.account?.phoneNumber }}</td>
                <td>
                  {{ item.organizationDetail?.name }}
                  ({{ item.organizationDetail?.account.roles }})
                </td>
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
                      v-if="item.organizationDetail?.account.roles === 'SCHOOL'"
                      class="icon tooltip-wrapper"
                      @click.prevent="
                        navigaters(
                          item.accountId,
                          item.settingId,
                          '/crm/school-staff-profile-layout'
                        )
                      "
                    >
                      <icon-profile></icon-profile>
                      <div class="tooltip">Profile</div>
                    </div>
                    <div
                      v-if="
                        item.organizationDetail?.account.roles ===
                        'ORGANIZATION'
                      "
                      class="icon tooltip-wrapper"
                      @click.prevent="
                        navigaters(
                          item.accountId,
                          formVar.organizationSettingId,
                          '/crm/organization-staff-profile-layout'
                        )
                      "
                    >
                      <icon-profile></icon-profile>
                      <div class="tooltip">Profile</div>
                    </div>
                    <div
                      v-if="
                        item.organizationDetail?.account.roles === 'COLLEGE'
                      "
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
        <div class="table-no-data" v-if="storeVar.staffData?.length <= 0">
          <div>No records Found!</div>
        </div>
        <div class="table-footer" v-if="storeVar.staffData?.length > 0">
          <Pagination
            :currentPage="formVar.currentPage"
            :totalItem="storeVar.totalStaff"
            :itemsPerPage="formVar.limit"
            @update:currentPage="pageChange($event)"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->

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

const props = defineProps({
  fromDate: {
    type: String,
    default: true,
  },
  toDate: {
    type: String,
    required: true,
  },
  all: {
    type: String,
    required: true,
  },
});

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Dashboard);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  roles: "STAFF",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  id: null,
  partnersAccountId: null,
  changeStatus: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getStaff();
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
      getStaff();
    }, formVar.typingDelay);
  }
);

/* Search Function */
/* Functions/Methods */
function getStaff() {
  store.dispatch("Dashboard/getStaffs", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    fromDate: props.fromDate,
    toDate: props.toDate,
    roles: "STAFF",
    all: props.all,
  });
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.id = id;
  storeVar.value.statusModal = true;
}
function submitStatus() {
  store.dispatch("Partners/updatePartnersStatus", {
    id: formVar.id,
    status: formVar.changeStatus,
  });
  storeVar.value.statusModal = false;
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getStaff();
};
function statusChangeSearch() {
  getStaff();
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

/* Validation */
</script>

<style></style>
