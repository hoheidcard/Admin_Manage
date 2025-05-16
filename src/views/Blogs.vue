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
                <div class="sub-title">Blog : List</div>
                <h5 class="main-title">Blog List</h5>
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
                <div class="tooltip">Add Blog</div>
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
                <th>Author</th>
                <th>Image</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.author }}</td>
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
      type="full"
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
          <div class="title">Title</div>
          <input
            type="text"
            v-model="formVar.title"
            placeholder="Enter Title"
          />
          <div class="err-msg" v-if="formVar.submit && titleValid">
            {{ titleValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Author</div>
          <input
            type="text"
            v-model="formVar.author"
            placeholder="Enter Author"
          />
          <div class="err-msg" v-if="formVar.submit && authorValid">
            {{ authorValid }}
          </div>
        </div>
      </div>
      <div class="form-item mb-16">
          <div class="title">Description</div>
          <QuillEditor
            v-model:content="formVar.desc"
            ref="targetElement"
            content-type="html"
            theme="snow"
            toolbar="full"
          />
        </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addBlog">Submit</div>
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
        <div class="title" showHeader="true">Upload Blog Image</div>
        <div class="close-btn" @click.prevent="storeVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="img-upload flex flex-d-col align-center">
        <div class="text text-small mb-10">Blog Image</div>
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
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Blogs);

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
  title: null,
  desc: null,
  image: null,
  author: null,
  file: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getBlog();
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
      getBlog();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function getBlog() {
  store.dispatch("Blogs/getBlogsByStatus", {
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
  formVar.title = null;
  formVar.desc = null;
  formVar.author = null;
}
function openEditModal(item) {
  storeVar.value.addModal = true;
  formVar.editMode = true;
  formVar.id = item.id;
  formVar.title = item.title;
  formVar.desc = item.desc;
  formVar.author = item.author;
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

function addBlog() {
  if (titleValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (!formVar.editMode) {
    store.dispatch("Blogs/createBlog", {
      title: formVar.title,
      author: formVar.author,
      desc: formVar.desc,
    });
  } else {
    store.dispatch("Blogs/updateBlog", {
      id: formVar.id,
      title: formVar.title,
      author: formVar.author,
      desc: formVar.desc,
    });
  }
}
function submitStatus() {
  if (formVar.id && formVar.changeStatus) {
    store.dispatch("Blogs/updateBlogtatus", {
      id: formVar.id,
      status: formVar.changeStatus,
    });
  }
}
function submitImage() {
  if (formVar.id && formVar.file) {
    store.dispatch("Blogs/updateBlogImage", {
      id: formVar.id,
      file: formVar.file,
    });
  }
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getBlog();
};
function statusChangeSearch() {
  getBlog();
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
}
/* Functions/Methods */
/* Validation */
const titleValid = computed(() => {
  if (!formVar.title) {
    return "Please Enter title";
  }
});

const descValid = computed(() => {
  if (!formVar.desc) {
    return "Please Enter Desc";
  }
});

const authorValid = computed(() => {
  if (!formVar.author) {
    return "Please Enter Author";
  }
});
</script>

<style></style>
