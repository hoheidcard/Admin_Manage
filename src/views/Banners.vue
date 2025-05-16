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
                <div class="sub-title">Banner : List</div>
                <h5 class="main-title">Banner List</h5>
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
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Banner</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Type</th>
                <th>Date</th>
                <th>Image</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.date }}</td>
                  <td><img :src="`${item.image}?width=50`" alt="" /></td>
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
                        @click="openEditModal(item)"
                      >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click="openImageModal(item.id, item.image)"
                      >
                        <icon-card></icon-card>
                        <div class="tooltip">Image</div>
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
      <div class="form mb-16">
        <div class="form-item mb-16">
          <div class="title">Type</div>
          <input
            type="radio"
            name="type"
            v-model="formVar.type"
            value="TOP"
          />
          Top
          <input
            type="radio"
            name="type"
            v-model="formVar.type"
            value="DEAL"
          />
          Deal
        </div>
        <div class="form-item mb-16" v-if="formVar.type === 'DEAL'">
          <div class="title">End Date</div>
          <input
            type="date"
            v-model="formVar.date"
          />
        </div>
      </div>
      <div class="img-upload flex flex-d-col align-center">
        <div class="text text-small mb-10">Banner Image</div>
        <div class="img-upload-wrapper h-10-r w-10-r" @click="openUpload1">
          <img
            v-if="formVar.image"
            :src="formVar.image"
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
          <div class="btn red-btn" @click.prevent="storeVar.addModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addBanner">Submit</div>
        </div>
      </div>
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

    <!-- modals -->
    <Modal
      v-model:show="storeVar.imageModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Upload Banner Image</div>
        <div class="close-btn" @click.prevent="storeVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="img-upload flex flex-d-col align-center">
        <div class="text text-small mb-10">Banner Image</div>
        <div class="img-upload-wrapper h-10-r w-10-r" @click="openUpload1">
          <img
            v-if="formVar.image"
            :src="formVar.image"
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
    </Modal>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Banners);

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

  id: null,
  image: null,
  file: null,
  type: 'TOP',

  date: moment().format("YYYY-MM-DD"),
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getBanner();
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
      getBanner();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function getBanner() {
  store.dispatch("Banners/getBannersByStatus", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
  });
}
function openAddModal() {
  storeVar.value.addModal = true;
  formVar.editMode = false;
  formVar.id = null;
}
function openEditModal(item) {
  storeVar.value.addModal = true;
  formVar.editMode = true;
  formVar.id = item.id;
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.id = id;
  storeVar.value.statusModal = true;
}

function openImageModal(id, image) {
  formVar.image = image;
  formVar.id = id;
  storeVar.value.imageModal = true;
}

function addBanner() {
  store.dispatch("Banners/createBannerImage", {
    type: formVar.type,
    date: formVar.date,
    file: formVar.file,
  });
}
function submitStatus() {
  if (formVar.id && formVar.changeStatus) {
    store.dispatch("Banners/updateBannertatus", {
      id: formVar.id,
      status: formVar.changeStatus,
    });
  }
}
function submitImage() {
  if (formVar.id && formVar.file) {
    store.dispatch("Banners/updateBannerImage", {
      id: formVar.id,
      file: formVar.file,
    });
  }
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getBanner();
};
function statusChangeSearch() {
  getBanner();
}

function openUpload1() {
  document.getElementById("file-field1").click();
}
function updatePreview1(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.image = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  formVar.file = files[0];
  e.target.files = null;
}
/* Functions/Methods */
/* Validation */
</script>

<style></style>
