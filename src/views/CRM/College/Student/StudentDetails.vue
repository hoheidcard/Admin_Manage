<template>
  <div class="student-details-page">
    <div class="container flexx jjustify-center">
      <div class="main-card mid-cardd">
        <div class="card-header">
          <div class="left">
            <div class="icon">
              <icon-student></icon-student>
            </div>
            Student Information
          </div>
          <div class="right">
            <div class="icons">
              <router-link
                class="icon"
                :to="{
                  path: '/crm/college/update-my-student',
                  query: {
                    id: storeVar.id,
                    // id: route.query.id,
                    settingId: storeVar.settingId,
                  },
                }"
              >
                <icon-edit></icon-edit>
              </router-link>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-20">
              <div class="img-upload flex flex-d-col align-center">
                <div class="text text-small mb-10">Student Pic</div>
                <div
                  class="img-upload-wrapper h-10-r w-10-r"
                  @click="openUpload('Student')"
                >
                  <img
                    v-if="storeVar.profile"
                    :src="storeVar.profile"
                    class="preview-image"
                    alt=""
                  />
                  <img
                    v-else
                    src="/images/png/camera.png"
                    class="dummy-img"
                    alt=""
                  />
                  <!-- <div class="form-group">
                    <input
                      name="image"
                      type="file"
                      id="file-field1"
                      v-on:change="updatePreview1"
                      style="display: none"
                    />
                  </div> -->
                </div>
                <div class="w-100 flex gap-10 pt-10" v-if="storeVar.profile">
                  <button
                    class="btn white-btn w-full"
                    @click.prevent="downloadImage(storeVar.profile)"
                    type="button"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div class="col-20">
              <div class="img-upload flex flex-d-col align-center">
                <div class="text text-small mb-5">Father Pic</div>
                <div
                  class="img-upload-wrapper h-10-r w-10-r"
                  @click="openUpload('Father')"
                >
                  <img
                    v-if="storeVar.fatherImage"
                    :src="storeVar.fatherImage"
                    class="preview-image"
                    alt=""
                  />
                  <img
                    v-else
                    src="/images/png/camera.png"
                    class="dummy-img"
                    alt=""
                  />
                  <!-- <div class="form-group">
                    <input
                      name="image"
                      type="file"
                      id="file-field2"
                      v-on:change="updatePreview2"
                      style="display: none"
                    />
                  </div> -->
                </div>
                <div
                  class="w-100 flex gap-10 pt-10"
                  v-if="storeVar.fatherImage"
                >
                  <button
                    class="btn white-btn w-full"
                    @click.prevent="downloadImage(storeVar.fatherImage)"
                    type="button"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div class="col-20">
              <div class="img-upload flex flex-d-col align-center">
                <div class="text text-small mb-5">Mother Pic</div>
                <div
                  class="img-upload-wrapper h-10-r w-10-r"
                  @click="openUpload('Mother')"
                >
                  <img
                    v-if="storeVar.motherImage"
                    :src="storeVar.motherImage"
                    class="preview-image"
                    alt=""
                  />
                  <img
                    v-else
                    src="/images/png/camera.png"
                    class="dummy-img"
                    alt=""
                  />
                  <!-- <div class="form-group">
                    <input
                      name="image"
                      type="file"
                      id="file-field3"
                      v-on:change="updatePreview3"
                      style="display: none"
                    />
                  </div> -->
                </div>
                <div
                  class="w-100 flex gap-10 pt-10"
                  v-if="storeVar.motherImage"
                >
                  <button
                    class="btn white-btn w-full"
                    @click.prevent="downloadImage(storeVar.motherImage)"
                    type="button"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
            <div class="col-20">
              <div class="img-upload flex flex-d-col align-center">
                <div class="text text-small mb-5">Guardian Pic</div>
                <div
                  class="img-upload-wrapper h-10-r w-10-r"
                  @click="openUpload('Guardian')"
                >
                  <img
                    v-if="storeVar.guardianImage"
                    :src="storeVar.guardianImage"
                    class="preview-image"
                    alt=""
                  />
                  <img
                    v-else
                    src="/images/png/camera.png"
                    class="dummy-img"
                    alt=""
                  />
                  <!-- <div class="form-group">
                    <input
                      name="image"
                      type="file"
                      id="file-field4"
                      v-on:change="updatePreview4"
                      style="display: none"
                    />
                  </div> -->
                </div>
                <div
                  class="w-100 flex gap-10 pt-10"
                  v-if="storeVar.guardianImage"
                >
                  <button
                    class="btn white-btn w-full"
                    @click.prevent="downloadImage(storeVar.guardianImage)"
                    type="button"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="user-profile">
            <div class="data-list">
              <div class="data">
                <div class="title">College :</div>
                <div class="val">{{ storeVar.organizationDetail?.name }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Id :</div>
                <div class="val">{{ storeVar.id }}</div>
              </div>
              <div class="data">
                <div class="title">Reg. No :</div>
                <div class="val">{{ storeVar.regNo }}</div>
              </div>
              <div class="data">
                <div class="title">Admission No. :</div>
                <div class="val">{{ storeVar.admissionNo }}</div>
              </div>
              <div class="data">
                <div class="title">UID No. :</div>
                <div class="val">{{ storeVar.admissionNo }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">PEN No :</div>
                <div class="val">{{ storeVar.PEN }}</div>
              </div>
              <div class="data">
                <div class="title">Student. No :</div>
                <div class="val">{{ storeVar.studentNo }}</div>
              </div>
              <div class="data">
                <div class="title">Photo No. :</div>
                <div class="val">{{ storeVar.photoNumber }}</div>
              </div>
              <div class="data">
                <div class="title">Rfid No. :</div>
                <div class="val">{{ storeVar.rfidNo }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Roll No :</div>
                <div class="val">
                  {{ storeVar.rollNo > 0 ? storeVar.rollNo : "" }}
                </div>
              </div>
              <div class="data">
                <div class="title">Name :</div>
                <div class="val">{{ storeVar.name }}</div>
              </div>
              <div class="data">
                <div class="title">Contact No. :</div>
                <div class="val">{{ storeVar.contactNo }}</div>
              </div>
              <div class="data">
                <div class="title">Email id :</div>
                <div class="val">{{ storeVar.emailId }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Alt Contact No :</div>
                <div class="val">{{ storeVar.altContactNo }}</div>
              </div>
              <div class="data">
                <div class="title">Class :</div>
                <div class="val">{{ storeVar.classList?.name }}</div>
              </div>
              <div class="data">
                <div class="title">Section :</div>
                <div class="val">{{ storeVar.classDiv?.name }}</div>
              </div>
              <div class="data">
                <div class="title">Zone :</div>
                <div class="val">{{ storeVar.houseZone?.name }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Gender :</div>
                <div class="val">{{ storeVar.gender }}</div>
              </div>
              <div class="data">
                <div class="title">DOB :</div>
                <div class="val">{{ getDate(storeVar.dob) }}</div>
              </div>
              <div class="data">
                <div class="title">Blood Group :</div>
                <div class="val">{{ storeVar.bloodGroup }}</div>
              </div>
              <div class="data">
                <div class="title">Aadhar No. :</div>
                <div class="val">{{ storeVar.aadharNumber }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Cast :</div>
                <div class="val">{{ storeVar.cast }}</div>
              </div>
              <div class="data">
                <div class="title">Religion :</div>
                <div class="val">{{ storeVar.relation }}</div>
              </div>
              <div class="data">
                <div class="title">Nationality :</div>
                <div class="val">{{ storeVar.nationality }}</div>
              </div>
              <div class="data">
                <div class="title">Guardian Relation :</div>
                <div class="val">{{ storeVar.guardianRelation }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Guardian Name :</div>
                <div class="val">{{ storeVar.guardianName }}</div>
              </div>
              <div class="data">
                <div class="title">Guardian Contact No :</div>
                <div class="val">{{ storeVar.guardianContactNo }}</div>
              </div>
              <div class="data">
                <div class="title">Father Name :</div>
                <div class="val">{{ storeVar.fatherName }}</div>
              </div>
              <div class="data">
                <div class="title">Father Contact No :</div>
                <div class="val">{{ storeVar.fatherContactNo }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Mother Name :</div>
                <div class="val">{{ storeVar.motherName }}</div>
              </div>
              <div class="data">
                <div class="title">Mother Contact No :</div>
                <div class="val">{{ storeVar.motherContactNo }}</div>
              </div>
              <div class="data">
                <div class="title">Stream :</div>
                <div class="val">{{ storeVar.stream }}</div>
              </div>
              <div class="data">
                <div class="title">Transport :</div>
                <div class="val">{{ storeVar.transport }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">Conteen :</div>
                <div class="val">{{ storeVar.canteen }}</div>
              </div>
              <div class="data">
                <div class="title">Library :</div>
                <div class="val">{{ storeVar.library }}</div>
              </div>
              <div class="data">
                <div class="title">Hostel :</div>
                <div class="val">{{ storeVar.hostel }}</div>
              </div>
              <div class="data">
                <div class="title">City :</div>
                <div class="val">{{ storeVar.city }}</div>
              </div>
            </div>
            <div class="data-list">
              <div class="data">
                <div class="title">State :</div>
                <div class="val">{{ storeVar.state }}</div>
              </div>
              <div class="data">
                <div class="title">Pincode :</div>
                <div class="val">{{ storeVar.pincode }}</div>
              </div>
              <div class="data">
                <div class="title">Address :</div>
                <div class="val">{{ storeVar.address }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Status Modal -->
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
  </div>
</template>

<script setup>
import axios from "axios";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import moment from "moment";
import { computed, onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const imageRef = ref(null);
const route = useRoute();
const store = useStore();
const storeVar = computed(() => store.state.OrganizationStudent);
const formVar = reactive({
  cropModal: false,

  imageUrl: null,
  imageFile: null,
  croppedImageUrl: null,
  cropper: null,
  cropperEnable: false,
  type: "",
});

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
    aspectRatio: 35 / 45, // Change this to your desired aspect ratio
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
onBeforeUnmount(() => {
  if (formVar.cropper) {
    formVar.cropper.destroy();
  }
});
onBeforeMount(() => {
  store.dispatch("OrganizationStudent/getOneStudent", {
    id: route.query.studentId,
  });
});

async function uploadImage() {
  if (!formVar.cropperEnable) {
    store.dispatch("OrganizationStudent/updateStudentImage", {
      id: storeVar.value.id,
      type: formVar.type,
      orgId: route.query.id,
      file: formVar.imageFile,
    });
  } else {
    const canvas = formVar.cropper.getCroppedCanvas();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve));
    const croppedFile = new File([blob], "cropped-image.png", {
      type: "image/png",
    });
    store.dispatch("OrganizationStudent/updateStudentImage", {
      id: storeVar.value.id,
      type: formVar.type,
      orgId: route.query.id,
      file: croppedFile,
    });
  }
  formVar.cropModal = false;
}

function openUpload(type) {
  formVar.type = type;
  formVar.cropModal = true;
}

function getDate(date) {
  if (date) {
    return moment(date).format("DD.MM.YYYY");
  }
  return "-";
}

const downloadImage = async (imageUrls) => {
  store.dispatch("Alert/success", { msg: "Downloading image" });
  const response = await axios.get(
    "https://service.abhitprints.in:3111/api/v1/card-orders/download-image?image=" +
      imageUrls,
    {
      responseType: "blob", // Ensure response type is blob to handle binary data
    }
  );
  // Create a Blob from the response data
  const blob = new Blob([response.data]);

  // Create a link element to trigger the download
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  // Set the download attribute and filename
  const fileName = imageUrls.substring(imageUrls.lastIndexOf("/") + 1);
  const newFileName = fileName.replace(".webp", ".jpg"); // Replace .webp with .jpg in filename
  link.setAttribute("download", newFileName);

  // Append the link to the body and click it
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};
</script>

<style></style>
