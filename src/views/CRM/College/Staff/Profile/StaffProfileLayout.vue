<template>
  <section class="profile-layout">
    <div class="container">
      <div class="left-card card">
        <div class="top-info">
          <div class="img" @click.prevent="openUpload">
            <img v-if="storeVar.profile" :src="storeVar.profile" alt="" />
            <img v-else src="/images/png/no-image.png" alt="" />
          </div>
          <div class="info">
            <div class="name">
              <div class="text">Welcome,</div>
              <h3>{{ storeVar.name }}</h3>
            </div>
            <div class="about f-w-bold">
              {{ storeVar.designation?.name }}
            </div>
          </div>
          <!-- <div class="about f-w-bold">
            <span v-for="item in storeVar.classListDiv" :key="item.id">
              <button
                v-if="item.staffDetailId"
                class="btn white-btn w-full"
                type="button"
                @click.prevent="
                  routeMyStudents(item.classListId, item.classDivId)
                "
              >
                {{ item.classList?.name }}
                {{ item.classDiv?.name }}(T)
              </button>
            </span>
          </div>
          <div class="about f-w-bold">
            <span v-for="item in storeVar.coOrdinator" :key="item.id">
              <button
                v-if="item.coOrdinatorId"
                class="btn white-btn w-full"
                type="button"
                @click.prevent="
                  routeMyStudents(item.classListId, item.classDivId)
                "
              >
                {{ item.classList?.name }}
                {{ item.classDiv?.name }}(C)
              </button>
            </span>
          </div> -->
        </div>
        <div class="bottom-links bottom-links-desk">
          <router-link
            :to="
              '/crm/college-staff-profile?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Profile</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <!-- <router-link
            :to="
              '/crm/college-staff-class?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Class</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link> -->
          <router-link
            :to="
              '/crm/college-staff-class-students?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Students</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="
              '/crm/college-staff-department?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Department</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <!-- <router-link
            :to="
              '/crm/college-staff-division?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Section</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link> -->
          <router-link
            :to="
              '/crm/college-staff-subject?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Subject</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <router-link
            :to="
              '/crm/college-staff-documents?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Documents</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link>
          <!-- <router-link
            :to="
              '/crm/college-staff-time-table?id=' +
              formVar.staffAccountId +
              '&settingId=' +
              formVar.settingId
            "
            class="profile-link"
          >
            <div class="title">Time Table</div>
            <div class="icon">
              <icon-right-arrow></icon-right-arrow>
            </div>
          </router-link> -->
        </div>
      </div>
      <div class="right-card card">
        <router-view></router-view>
      </div>
    </div>
    <Modal
      v-model:show="formVar.cropModal"
      class="status-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Upload Image</div>
        <div class="close-btn" @click.prevent="formVar.cropModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="image-upload-crop">
        <input type="file" @change="onFileChange"  />
        <div v-if="formVar.imageUrl">
          <img
            ref="imageRef"
            :src="formVar.imageUrl"
            alt="Source Image"
            style="max-width: 100%"
          />
          <br />
          <button
            v-if="formVar.cropperEnable"
            type="button"
            class="btn green-btn"
            @click="cropImage"
          >
            Crop Image
          </button>
          <br />
        </div>
        <div v-if="formVar.croppedImageUrl">
          <img
            :src="formVar.croppedImageUrl"
            alt="Cropped Image"
            style="max-width: 100%; height: 150px"
          />
        </div>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="formVar.cropModal = false">
            Cancel
          </div>
          <div
            v-if="!formVar.cropperEnable"
            class="btn green-btn"
            @click.prevent="initializeCropper"
          >
            Crop
          </div>
          <div
            v-else
            class="btn green-btn"
            @click.prevent="deInitializeCropper"
          >
            Crop
          </div>
          <div class="btn white-btn" @click="uploadImage">Upload</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, ref, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

/* Constants */
const imageRef = ref(null);
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationStaff);
const formVar = reactive({
  staffAccountId: null,
  settingId: null,

  cropModal: false,

  imageUrl: null,
  imageFile: null,
  croppedImageUrl: null,
  cropper: null,
  cropperEnable: false,
  type: "",
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.staffAccountId = route.query.id;
    formVar.settingId = route.query.settingId;
    getOneStaff();
    getOneOrganizationSettings();
  }
});
onBeforeUnmount(() => {
  if (formVar.cropper) {
    formVar.cropper.destroy();
  }
});
/* Lifecycle/Hooks */
/* Functions/Methods */
const deInitializeCropper = () => {
  if (formVar.cropper) {
    formVar.cropper.destroy();
  }
  formVar.cropperEnable = false;
};

const initializeCropper = () => {
  if (formVar.cropper) {
    formVar.cropper.destroy();
  }
  formVar.cropperEnable = true;
  const image = imageRef.value; // Access the ref directly
  formVar.cropper = new Cropper(image, {
    aspectRatio: 1, // Change this to your desired aspect ratio
    viewMode: 1,
  });
};
const onFileChange = (event) => {
  formVar.imageFile = event.target.files[0];
  if (formVar.imageFile && formVar.imageFile.type.startsWith("image/")) {
    formVar.imageUrl = URL.createObjectURL(formVar.imageFile);
  }
};
const cropImage = () => {
  const canvas = formVar.cropper.getCroppedCanvas();
  formVar.croppedImageUrl = canvas.toDataURL();
};

async function uploadImage() {
  if (!formVar.cropperEnable) {
    store.dispatch("OrganizationStaff/updateProfileImage", {
      id: formVar.staffAccountId,
      file: formVar.imageFile,
    });
  } else {
    const canvas = formVar.cropper.getCroppedCanvas();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve));
    const croppedFile = new File([blob], "cropped-image.png", {
      type: "image/png",
    });
    store.dispatch("OrganizationStaff/updateProfileImage", {
      id: formVar.staffAccountId,
      file: croppedFile,
    });
  }
  formVar.cropModal = false;
}

function openUpload() {
  formVar.cropModal = true;
  // document.getElementById("file-field1").click();
}

function getOneStaff() {
  store.dispatch("OrganizationStaff/getOneStaff", {
    id: formVar.staffAccountId,
  });
}
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.settingId,
  });
}
/* Functions/Methods */
</script>

<style></style>
