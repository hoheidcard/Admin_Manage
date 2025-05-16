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
                <div class="sub-title">School : List</div>
                <h5 class="main-title">Our School</h5>
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
                <select v-model="formVar.status" @change="statusChangeSearch">
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DEACTIVE">DEACTIVE</option>
                </select>
              </div>
            </div>
            <div class="icons">
              <div
                class="icon tooltip-wrapper"
                @click.prevent="
                  navigate(route.query.id, '/crm/partners/add-school')
                "
              >
                <icon-plus></icon-plus>
                <div class="tooltip">Add School</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Owner Name</th>
                <th>Address</th>
                <th>Type</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in storeVar.organizationData"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.contactNo }}</td>
                  <td>{{ item.ownerName }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.type }}</td>
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
                        @click="navigate(item.id, '/crm/edit-school')"
                      >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openStatusModal(item.id, item.status)"
                      >
                        <icon-status></icon-status>
                        <div class="tooltip">Change Status</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        v-if="item.setting?.type === 'MULTI'"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/my-branch',
                            item.accountId,
                          )
                        "
                      >
                        <icon-menu></icon-menu>
                        <div class="tooltip">My Branch</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/library'
                          )
                        "
                      >
                        <icon-library-list></icon-library-list>
                        <div class="tooltip">Library</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/my-staff',
                            item.accountId
                          )
                        "
                      >
                        <icon-user-list></icon-user-list>
                        <div class="tooltip">My Staff</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/my-student'
                          )
                        "
                      >
                        <icon-student-list></icon-student-list>
                        <div class="tooltip">My Student</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="
                          navigaters(
                            item.id,
                            item.settingId,
                            '/crm/school/setting/class-list'
                          )
                        "
                      >
                        <icon-setting></icon-setting>
                        <div class="tooltip">Setttngs</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="table-no-data"
            v-if="storeVar.organizationData?.length <= 0"
          >
            <div>No records Found!</div>
          </div>
          <div
            class="table-footer"
            v-if="storeVar.organizationData?.length > 0"
          >
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalOrganization"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
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
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Organization);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  roles: "SCHOOL",
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  organizationId: null,
  organizationAccountId: null,
  changeStatus: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getOrganization();
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
      getOrganization();
    }, formVar.typingDelay);
  }
);

/* Search Function */
/* Functions/Methods */
function getOrganization() {
  store.dispatch("Organization/getOrganizationByCreator", {
    id: route.query.id,
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    roles: formVar.roles,
  });
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.organizationId = id;
  storeVar.value.statusModal = true;
}
function submitStatus() {
  store.dispatch("Organization/updateOrganizationStatus", {
    id: formVar.organizationId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getOrganization();
};
function statusChangeSearch() {
  getOrganization();
}

function navigate(id, link) {
  router.push({ path: link, query: { id } });
}
function navigaters(id, settingId, link) {
  router.push({ path: link, query: { id, settingId } });
}

/* Functions/Methods */
/* Validation */

/* Validation */
</script>

<style></style>
