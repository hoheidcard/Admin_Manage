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
                <div class="sub-title">Book : List</div>
                <h5 class="main-title">Book</h5>
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
              <div class="icon tooltip-wrapper" @click.prevent="opemAddModal()">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Books</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Auther</th>
                <th>Code</th>
                <th>Book Category</th>
                <th>Class</th>
                <th>Quantity</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.bookData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <div class="s-name flex align-center gap-10">
                      <img
                        v-if="item.image"
                        :src="item.image"
                        class="h-w-3r"
                        alt=""
                      />
                      <img
                        v-else
                        src="/images/png/no-image.png"
                        class="h-w-3r"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.author }}</td>
                  <td>{{ item.code }}</td>
                  <td>{{ item.bookCategory?.name }}</td>
                  <td>{{ item.classList?.name }}</td>
                  <td>{{ item.quantity }}</td>
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
                        @click.prevent="openStatusModal(item.id, item.status)"
                      >
                        <icon-status></icon-status>
                        <div class="tooltip">Change Status</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openfileModal(item.id, item.image)"
                      >
                        <icon-image-edit></icon-image-edit>
                        <div class="tooltip">Change Image</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.bookData?.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.bookData?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.totalBook"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Library Add Modal  -->
    <Modal
      v-model:show="storeVar.libraryModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Books" : "Add Books" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.libraryModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16">
          <div class="title">Book Name</div>
          <input
            type="text"
            v-model="formVar.name"
            placeholder="Enter Book Name"
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && nameValid">
            {{ nameValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Author</div>
          <input
            type="text"
            v-model="formVar.author"
            placeholder="Enter Author Name"
            maxlength="30"
          />
          <div class="err-msg" v-if="formVar.submit && authorValid">
            {{ authorValid }}
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16 col-5">
            <div class="title">Quantity</div>
            <input
              type="text"
              v-model="formVar.quantity"
              placeholder="Enter quantity"
              @keydown="isNumber($event)"
              maxlength="7"
            />
            <div class="err-msg" v-if="formVar.submit && quantityValid">
              {{ quantityValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="title">Code</div>
            <input
              type="text"
              v-model="formVar.code"
              placeholder="Enter code"
              @keydown="isNumber($event)"
              maxlength="7"
            />
            <div class="err-msg" v-if="formVar.submit && codeValid">
              {{ codeValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16 col-5">
            <div class="title">Book Category</div>
            <Select
              v-model="formVar.bookCategory"
              :options="storeVar2.bookCategory"
              :placeholder="
                formVar.bookCategory ? formVar.bookCategory : 'Select'
              "
              @selected="handleSelectBookCate"
            ></Select>
            <div class="err-msg" v-if="formVar.submit && bookCategoryIdValid">
              {{ bookCategoryIdValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="title">Class</div>
            <Select
              v-model="formVar.class"
              :options="storeVar2.classList"
              :placeholder="formVar.class ? formVar.class : 'Select'"
              @selected="handleSelectClass"
            ></Select>
            <div class="err-msg" v-if="formVar.submit && classListIdValid">
              {{ classListIdValid }}
            </div>
          </div>
        </div>
        <div class="form-item mb-16" v-if="!formVar.editMode">
          <div class="title">Image</div>
          <input type="file" @change="previewProfile($event)" />
          <div class="err-msg" v-if="formVar.submit && fileValid">
            {{ fileValid }}
          </div>
        </div>
        <div class="form-item mb-16">
          <div class="title">Short Description</div>
          <textarea
            name=""
            id=""
            v-model="formVar.shortDesc"
            rows="4"
            placeholder="Short Description"
          ></textarea>
          <div class="err-msg" v-if="formVar.submit && shortDescValid">
            {{ shortDescValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.libraryModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="addBooks">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Image Add Modal  -->
    <Modal
      v-model:show="storeVar.fileUploadModal"
      :centerModal="true"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Update Image</div>
        <div
          class="close-btn"
          @click.prevent="storeVar.fileUploadModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="upload-section">
          <div class="pic-upload">
            <img
              v-if="formVar.imagePreview"
              :src="formVar.imagePreview"
              class="preview-image pic"
              id="profilePic"
              alt=""
            />
            <img
              v-else
              src="/images/png/img.png"
              class="dummy-img pic"
              alt=""
            />
            <label for="imgUpload-doc" class="upload-file-block">
              {{ formVar.imagePreview ? "Change Doc" : "Upload Doc" }}
            </label>
            <input
              class="uploadProfileInput"
              type="file"
              name="profile_doc"
              id="imgUpload-doc"
              @change="previewProfile($event)"
              style="display: none"
            />
          </div>
          <div class="err-msg" v-if="formVar.submit && fileValid">
            {{ fileValid }}
          </div>
        </div>
      </form>
      <div class="modal-footer justify-center">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.fileUploadModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="updateImageBooks">Submit</div>
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
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import { useRoute, useRouter } from "vue-router";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationLibrary);
const storeVar2 = computed(() => store.state.OrganizationSettings);

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
  bookId: null,
  organizationSettingId: null,
  changeStatus: null,
  imagePreview: null,
  imagelink: null,

  file: null,
  name: null,
  shortDesc: null,
  quantity: null,
  author: null,
  code: null,
  bookCategoryId: null,
  classListId: null,
  bookId: null,
  bookCategory: null,
  class: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    getBooks();
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
      getBooks();
    }, formVar.typingDelay);
  }
);
/* Search Function */
/* Functions/Methods */
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.organizationSettingId,
  });
}
function getBooks() {
  store.dispatch("OrganizationLibrary/getBooks", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
    organizationDetailId: formVar.organizationId,
  });
}
function opemAddModal() {
  storeVar.value.libraryModal = true;
  formVar.editMode = false;
  getOneOrganizationSettings();
}
function openEditModal(item) {
  storeVar.value.libraryModal = true;
  formVar.editMode = true;
  getOneOrganizationSettings();
  formVar.bookId = item.id;
  formVar.name = item.name;
  formVar.shortDesc = item.shortDesc;
  formVar.quantity = item.quantity;
  formVar.author = item.author;
  formVar.code = item.code;
  formVar.bookCategoryId = item.bookCategory?.id;
  formVar.classListId = item.classList?.id;
  formVar.bookCategory = item.bookCategory?.name;
  formVar.class = item.classList?.name;
}
function openfileModal(id, image) {
  storeVar.value.fileUploadModal = true;
  formVar.bookId = id;
  formVar.imagePreview = image;
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.bookId = id;
  storeVar.value.statusModal = true;
}
function handleSelectBookCate(option) {
  formVar.bookCategoryId = option.id;
}
function handleSelectClass(option) {
  formVar.classListId = option.id;
}
async function previewProfile(event) {
  if (event) {
    const input = await event.target;
    if (
      input.files[0].type === "image/png" ||
      input.files[0].type === "image/jpg" ||
      input.files[0].type === "image/jpeg"
    ) {
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          formVar.imagePreview = e.target.result;
        };
        if (input.files[0]) {
          reader.readAsDataURL(input.files[0]);
          formVar.file = input.files[0];
        }
      }
    } else {
      formVar.imagePreview = null;
      store.dispatch("Alert/error", {
        msg: "Upload image in png, jpeg, jpg format.",
      });
    }
  }
}
function updateImageBooks() {
  if (fileValid.value) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("OrganizationLibrary/updateImage", {
    id: formVar.bookId,
    file: formVar.file,
  });
}
function addBooks() {
  if (!formVar.editMode) {
    if (
      nameValid.value ||
      authorValid.value ||
      quantityValid.value ||
      codeValid.value ||
      bookCategoryIdValid.value ||
      classListIdValid.value ||
      shortDescValid.value ||
      fileValid.value
    ) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("OrganizationLibrary/addBooks", {
      name: formVar.name,
      shortDesc: formVar.shortDesc,
      quantity: formVar.quantity,
      author: formVar.author,
      code: formVar.code,
      bookCategoryId: formVar.bookCategoryId,
      classListId: formVar.classListId,
      file: formVar.file,
      organizationDetailId: formVar.organizationId,
    });
  } else {
    if (
      nameValid.value ||
      authorValid.value ||
      quantityValid.value ||
      codeValid.value ||
      bookCategoryIdValid.value ||
      classListIdValid.value ||
      shortDescValid.value
    ) {
      formVar.submit = true;
      return;
    }
    formVar.submit = false;
    store.dispatch("OrganizationLibrary/editBooks", {
      name: formVar.name,
      shortDesc: formVar.shortDesc,
      quantity: formVar.quantity,
      author: formVar.author,
      code: formVar.code,
      bookCategoryId: formVar.bookCategoryId,
      classListId: formVar.classListId,
      organizationDetailId: formVar.organizationId,
      id: formVar.bookId,
      bookCategory: formVar.bookCategory,
      className: formVar.class,
    });
  }
}

function submitStatus() {
  store.dispatch("OrganizationLibrary/updateBooksStatus", {
    id: formVar.bookId,
    status: formVar.changeStatus,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getBooks();
};
function statusChangeSearch() {
  getBooks();
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
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
  }
});
const authorValid = computed(() => {
  if (!formVar.author) {
    return "Please Enter Author";
  }
});
const quantityValid = computed(() => {
  if (!formVar.quantity) {
    return "Please Enter Quantity";
  }
});
const codeValid = computed(() => {
  if (!formVar.code) {
    return "Please Enter Code";
  }
});
const bookCategoryIdValid = computed(() => {
  if (!formVar.bookCategoryId) {
    return "Please Enter Book Category";
  }
});
const classListIdValid = computed(() => {
  if (!formVar.classListId) {
    return "Please Select Class";
  }
});
const shortDescValid = computed(() => {
  if (!formVar.shortDesc) {
    return "Please Enter Short Description";
  }
});
const fileValid = computed(() => {
  if (!formVar.file) {
    return "Please Select a File";
  }
});
const isNumber = (e) => {
  let char = String.fromCharCode(e.keyCode);
  // Allow numbers (0-9) and the backspace key (keyCode 8)
  if (/^[0-9]+$/.test(char) || e.keyCode === 8) return true;
  else e.preventDefault();
};
</script>

<style></style>
