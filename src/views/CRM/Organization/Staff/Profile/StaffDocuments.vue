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
              <div class="sub-title">Documents : List</div>
              <h5 class="main-title">Documents</h5>
            </div>
          </div>
          <!-- <div class="about">This is my report This is my report</div> -->
        </div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search here">
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div>
          <div class="icons">
            <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
              <icon-plus></icon-plus>
              <div class="tooltip">Add Documents</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-body mt-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Documents</th>
              <th>Type</th>
              <th>Date & Time</th>
              <th class="text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.staffDocument" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <div class="s-name flex align-center gap-10">
                    <img v-if="item.url" :src="item.url" class="h-w-3r" alt="" />
                    <img v-else src="/images/png/no-image.png" class="h-w-3r" alt="" />
                  </div>
                </td>
                <td>{{ item.type }}</td>
                <td>{{ getDateTime(item.createdAt) }}</td>
                <td>
                  <div class="option-btns">
                    <div class="icon tooltip-wrapper" @click.prevent="openDeleteModal(item.id)">
                      <icon-delete></icon-delete>
                      <div class="tooltip">Delete</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data" v-if="storeVar.staffDocument?.length <= 0">
          <div>No records Found!</div>
        </div>
      </div>
    </div>

    <!-- Image Add Modal  -->
    <Modal v-model:show="storeVar.addDocModal" :centerModal="true" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Update Image</div>
        <div class="close-btn" @click.prevent="storeVar.addDocModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="upload-section">
          <div class="form-item mb-16">
            <div class="title">Documents Type</div>
            <div class="select-dropdown">
              <select name="" id="" v-model="formVar.type">
                <option :value="null">Select</option>
                <option value="AADHAR CARD">AADHAR CARD</option>
                <option value="PAN CARD">PAN CARD</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div class="err-msg" v-if="formVar.submit && typeValid">{{ typeValid }}</div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Documents Number</div>
            <input type="text" v-model="formVar.documentId" placeholder="Enter Document Number">
            <div class="err-msg" v-if="formVar.submit && documentIdValid">{{ documentIdValid }}</div>
          </div>
          <div class="pic-upload">
            <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image pic" id="profilePic"
              alt="" />
            <img v-else src="/images/png/img.png" class="dummy-img pic" alt="" />
            <label for="imgUpload-doc" class="upload-file-block">
              {{ formVar.imagePreview ? 'Change Doc' : 'Upload Doc' }}
            </label>
            <input class="uploadProfileInput" type="file" name="profile_doc" id="imgUpload-doc" 
              @change="previewProfile($event)" style="display: none" />
          </div>
          <div class="err-msg" v-if="formVar.submit && fileValid">{{ fileValid }}</div>
        </div>
      </form>
      <div class="modal-footer justify-center">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addDocModal = false">Cancel</div>
          <div class="btn white-btn" @click="addStaffDoc">Submit</div>
        </div>
      </div>
    </Modal>
    <!-- Status Modal -->
    <Modal v-model:show="storeVar.docStatusModal" class="status-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Change Status</div>
        <div class="close-btn" @click.prevent="storeVar.docStatusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="status-row">
        <label for="approve" class="data">
          <input type="radio" v-model="formVar.changeStatus" value="ACTIVE" id="approve" name="status">
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">ACTIVE</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input type="radio" v-model="formVar.changeStatus" value="PENDING" id="pending" name="status">
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">PENDING</div>
          </div>
        </label>
        <label for="block" class="data">
          <input type="radio" v-model="formVar.changeStatus" value="DEACTIVE" id="block" name="status">
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">DEACTIVE</div>
          </div>
        </label>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.docStatusModal = false">Cancel</div>
          <div class="btn white-btn" @click="submitStatus">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Delete Modal -->
    <Modal v-model:show="storeVar.confirmDocModal" class="confirm-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Delete</div>
        <div class="close-btn" @click.prevent="storeVar.confirmDocModal = false">
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
          <div class="btn red-btn" @click.prevent="storeVar.confirmDocModal = false">Cancel</div>
          <div class="btn white-btn" @click="submitDelete">Delete</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router"
import moment from "moment";

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationStaff);
const storeVar2 = computed(() => store.state.OrganizationSettings);

const formVar = reactive({
  submit: false,
  staffAccountId: null,
  name: null,
  subjectId: null,
  searchKey: null,
  editMode: false,

  imagePreview: null,
  imagelink: null,
  documentId:null,
  file: null,
  type: null,
  changeStatus: null,
})
/* Constants */
/* Search Function */

/* Search Function */
/* Functions/Methods */
function addStaffDoc() {
  if (fileValid.value ||
    typeValid.value ||
    documentIdValid.value) {
    formVar.submit = true
    return
  }
  formVar.submit = false
  store.dispatch("OrganizationStaff/addStaffDoc", {
    staffAccountId: storeVar.value.accountId,
    staffDetailId: storeVar.value.id,
    type: formVar.type,
    documentId:formVar.documentId,
    file: formVar.file,
    imageUrl:formVar.imagePreview
  });
}
function submitDelete() {
  store.dispatch("OrganizationStaff/deleteStaffDoc", {
    id: formVar.subjectId,
    staffAccountId: storeVar.value.accountId,
  });
}
function openAddModal() {
  storeVar.value.addDocModal = true
  formVar.editMode = false
  formVar.name = null
  formVar.subjectId = null
}
function openDeleteModal(id) {
  formVar.subjectId = id
  storeVar.value.confirmDocModal = true
}
async function previewProfile(event) {
  if (event) {
    const input = await event.target;
    if (
      input.files[0].type === 'image/png' ||
      input.files[0].type === 'image/jpg' ||
      input.files[0].type === 'image/jpeg'
    ) {
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          formVar.imagePreview = e.target.result;
        };
        if (input.files[0]) {
          reader.readAsDataURL(input.files[0]);
          formVar.file = input.files[0]
        }
      }
    } else {
      formVar.imagePreview = null;
      store.dispatch('Alert/error', {
        msg: 'Upload image in png, jpeg, jpg format.',
      });
    }
  }
}
function getDateTime(date) {
  if (date) {
    return moment(date).format('MMM Do YYYY hh:mm A')
  } else {
    return '-'
  }
}
/* Functions/Methods */
/* Validation */
const typeValid = computed(() => {
  if (!formVar.type) {
    return "Please Select Document Type";
  }
});
const documentIdValid = computed(() => {
  if (!formVar.documentId) {
    return "Please Enter Document Number";
  }
});
const fileValid = computed(() => {
  if (!formVar.file) {
    return "Please Select a File";
  }
});
/* Validation */
</script>

<style></style>
