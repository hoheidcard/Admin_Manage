<template>
  <div class="profile-page">
    <form action="" class="form">
      <div class="card-body">
        <div class="row">
          <div class="col-25">
            <div class="img-upload flex flex-d-col align-centerr mb-16">
              <div class="img-upload-wrapper h-w-7-r" @click="openUpload1">
                <img
                  v-if="formVar.imagePreview1"
                  :src="formVar.imagePreview1"
                  class="preview-image"
                  alt=""
                />
                <img
                  v-else-if="storeVar.profile"
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
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <input
              type="text"
              placeholder="Name of Admin"
              v-model="storeVar.name"
            />
            <div class="err-msg" v-if="formVar.submit && nameValid">
              {{ nameValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input
              type="text"
              v-model="storeVar.emailId"
              placeholder="Enter Email"
            />
            <div class="err-msg" v-if="formVar.submit && emailValid">
              {{ emailValid }}
            </div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="form-item mb-16 col-25">
            <Select v-model="formVar.class" :options="classOptions" placeholder="Select Class"></Select>
            <div class="err-msg">Please select class</div>
          </div>
          <div class="form-item mb-16 col-25">
            <Select v-model="formVar.section" :options="sectionOptions" placeholder="Select Section"></Select>
            <div class="err-msg">Please select section</div>
          </div>
          <div class="form-item mb-16 col-25">
            <Select v-model="formVar.house" :options="houseOptions" placeholder="Select House"></Select>
            <div class="err-msg">Please select house</div>
          </div>
          <div class="form-item mb-16 col-25">
            <SingleSelect v-model="formVar.teacher" :options="teacherOptions" placeholder="Select Teacher">
            </SingleSelect>
            <div class="err-msg">Please select teacher</div>
          </div>
        </div> -->
        <div class="row">
          <div class="form-item mb-16 col-5">
            <Select
              v-model="storeVar.gender"
              :options="genderOptions"
              placeholder="Select Gender"
            ></Select>
            <div class="err-msg" v-if="formVar.submit && genderValid">
              {{ genderValid }}
            </div>
          </div>
          <div class="form-item mb-16 col-5">
            <div class="date-input">
              <input
                type="date"
                v-model="storeVar.dob"
                :max="moment().format('YYYY-MM-DD')"
              />
              <div class="icon">
                <icon-calendar> </icon-calendar>
              </div>
            </div>
            <div class="err-msg" v-if="formVar.submit && dobValid">
              {{ dobValid }}
            </div>
          </div>
          <!-- <div class="form-item col-5 mb-16">
            <input type="text" v-model="storeVar.contactNo" placeholder="Contact Number"
              @keydown="isNumber($event)" maxlength="10" />
            <div class="err-msg" v-if="formVar.submit && contactNoValid">{{ contactNoValid }}</div>
          </div>
          <div class="form-item col-5 mb-16">
            <input type="text" v-model="storeVar.state" placeholder="Enter State" />
            <div class="err-msg" v-if="formVar.submit && stateValid">{{ stateValid }}</div>
          </div> -->
        </div>

        <!-- <div class="row">
          <div class="row">
            <div class="form-item col-5 mb-16">
              <input type="text" v-model="storeVar.city" placeholder="Enter City" />
              <div class="err-msg" v-if="formVar.submit && cityValid">{{ cityValid }}</div>
            </div>
            <div class="form-item col-5 mb-16">
              <input type="text" v-model="storeVar.pincode" placeholder="Enter Pincode" @keydown="isNumber($event)"
                maxlength="6" />
              <div class="err-msg" v-if="formVar.submit && pincideValid">{{ pincideValid }}</div>
            </div>
          </div>
          <div class="row">

            <div class="form-item col-10 mb-16">
              <textarea v-model="storeVar.address" name="" id="" rows="3" placeholder="Address"></textarea>
              <div class="err-msg" v-if="formVar.submit && addreaaValid">{{ addreaaValid }}</div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="card-footer pb-0-i">
        <div class="w-30 flex gap-10">
          <button
            type="button"
            class="btn white-btn w-full"
            @click="updateProfile"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import moment from "moment";
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  submit: false,
  imagePreview1: "",
  file: null,
});

const genderOptions = [
  { id: "MALE", name: "MALE" },
  { id: "FEMALE", name: "FEMALE" },
  { id: "OTHER", name: "OTHER" },
];
/* Constants */

/* Lifecycle/Hooks */

/* Lifecycle/Hooks */
/* Functions/Methods */
function updateProfile() {
  if (
    nameValid.value ||
    emailValid.value ||
    // contactNoValid.value ||
    genderValid.value ||
    dobValid.value
    // stateValid.value ||
    // cityValid.value ||
    // addreaaValid.value ||
    // pincideValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Auth/updateProfile", {
    name: storeVar.value.name,
    emailId: storeVar.value.emailId,
    gender: storeVar.value.gender,
    dob: storeVar.value.dob,
  });
}
function updatePreview1(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview1 = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    formVar.file = files[0];
    store.dispatch("Auth/updateProfileImage", {
      id: storeVar.value.accountId,
      file: files[0],
    });
  }
}

function openUpload1() {
  document.getElementById("file-field1").click();
}
/* Functions/Methods */

/* Search Function */
/* Search Function */

/* Validation */
const nameValid = computed(() => {
  if (!storeVar.value.name) {
    return "Please Enter Name";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!storeVar.value.emailId) {
    return "Please Enter Email!";
  } else if (!emailValid.test(storeVar.value.emailId)) {
    return "Please Enter Valid Email!";
  }
});
const contactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.contactNo) {
    return "Please Enter Phone Number!";
  } else if (!phoneValid.test(storeVar.value.contactNo)) {
    return "Please Enter Valid Phone Number!";
  }
});

const genderValid = computed(() => {
  if (!storeVar.value.gender) {
    return "Please Select Gender";
  }
});
const dobValid = computed(() => {
  if (!storeVar.value.dob) {
    return "Please Select Date of Birth";
  }
});
const stateValid = computed(() => {
  if (!storeVar.value.state) {
    return "Please Enter State";
  }
});
const cityValid = computed(() => {
  if (!storeVar.value.city) {
    return "Please Enter city";
  }
});
const addreaaValid = computed(() => {
  if (!storeVar.value.addreaa) {
    return "Please Enter addreaa";
  }
});
const pincideValid = computed(() => {
  if (!storeVar.value.pincide) {
    return "Please Enter Pincide";
  } else if (storeVar.value.pincide.length < 6) {
    return "Please Enter Valid Pincide";
  }
});
function isNumber(e) {
  let char = String.fromCharCode(e.keyCode);
  // Allow numbers (0-9), the backspace key (keyCode 8), tab key (keyCode 9), number pad keys (keyCode 96-105),
  // left arrow (keyCode 37), and right arrow (keyCode 39)
  if (
    /^[0-9]+$/.test(char) ||
    e.keyCode === 8 ||
    e.keyCode === 9 ||
    e.keyCode === 37 ||
    e.keyCode === 39 ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    return true;
  } else {
    e.preventDefault();
  }
} /* Validation */
</script>

<style></style>
