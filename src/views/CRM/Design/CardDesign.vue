<template>
  <section class="card-design-page">
    <div class="container">
      <div class="left-card main-card">
        <div class="card-header">
          <div class="left">
            <div class="btn white-btn">
              <div class="text">Export via class</div>
              <icon-download class="rotate-180"></icon-download>
            </div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search Name, Phone, Roll no" />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form action="" class="form">
            <div class="form-item mb-16">
              <input type="text" id="s_name" v-model="nameInputValue" placeholder="Student Name" />
              <!-- <div class="err-msg">Please enter student name</div> -->
            </div>
            <div class="form-item mb-16">
              <input type="text" id="p_name" v-model="parentInputValue" placeholder="Parent Name" />
              <!-- <div class="err-msg">Please enter parent name</div> -->
            </div>
            <div class="row">
              <div class="form-item mb-16">
                <Select v-model="formVar.class" :options="classOptions" placeholder="Select Class"></Select>
                <!-- <div class="err-msg">Please select class</div> -->
              </div>
              <div class="form-item mb-16">
                <Select v-model="formVar.section" :options="sectionOptions" placeholder="Select Section"></Select>
                <!-- <div class="err-msg">Please select section</div> -->
              </div>
            </div>
            <div class="row">
              <div class="form-item mb-16">
                <Select v-model="formVar.house" :options="houseOptions" placeholder="Select House"></Select>
                <!-- <div class="err-msg">Please select house</div> -->
              </div>
              <div class="form-item mb-16">
                <input type="number" id="roll" v-model="rollInputValue" placeholder="Roll No" />
                <!-- <div class="err-msg">Please enter roll no</div> -->
              </div>
            </div>
            <div class="row">
              <div class="form-item mb-16">
                <Select v-model="formVar.gender" :options="genderOptions" placeholder="Select Gender"></Select>
                <!-- <div class="err-msg">Please select gender</div> -->
              </div>
              <div class="form-item mb-16">
                <Select v-model="formVar.blood" :options="bloodOptions" placeholder="Select Blood Group"></Select>
                <!-- <div class="err-msg">Please select gender</div> -->
              </div>
            </div>
            <div class="form-item mb-16">
              <input type="number" id="phone" v-model="phoneInputValue" placeholder="Phone No" />
              <!-- <div class="err-msg">Please enter phone no</div> -->
            </div>
            <div class="form-item mb-16">
              <textarea name="" id="address" v-model="addressInputValue" rows="2" placeholder="Full Address"></textarea>
              <!-- <div class="err-msg">Please enter full address</div> -->
            </div>
            <div class="form-item mb-16">
              <div class="title mb-10-i">Choose Background Color</div>
              <div class="color-row">
                <label for="color5" @click="changeCardColor('white')">
                  <input type="radio" id="color5" name="color">
                  <div class="color white"></div>
                </label>
                <label for="color1" @click="changeCardColor('#e7515a')">
                  <input type="radio" id="color1" name="color">
                  <div class="color red"></div>
                </label>
                <label for="color2" @click="changeCardColor('#1baa70')">
                  <input type="radio" id="color2" name="color">
                  <div class="color green"></div>
                </label>
                <label for="color3" @click="changeCardColor('#e2a03f')">
                  <input type="radio" id="color3" name="color">
                  <div class="color yellow"></div>
                </label>
                <label for="color4" @click="changeCardColor('#00a3c8')">
                  <input type="radio" id="color4" name="color">
                  <div class="color blue"></div>
                </label>
              </div>
            </div>
            <div class="row mb-20">
              <div class="col-33">
                <div class="img-upload flex flex-d-col align-center">
                  <div class="text text-small mb-10">Student Pic</div>
                  <div class="img-upload-wrapper h-w-8-r" :class="formVar.s_img ? 'img-active' : ''"
                    @click="openUpload1">
                    <img v-if="formVar.imagePreview1" :src="formVar.imagePreview1" class="preview-image" alt="" />
                    <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
                    <div class="form-group">
                      <input name="image" type="file" id="file-field1" v-on:change="updatePreview1"
                        style="display: none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-33">
                <div class="img-upload flex flex-d-col align-center">
                  <div class="text text-small mb-5">Parent Pic</div>
                  <div class="img-upload-wrapper h-w-8-r" :class="formVar.p_img ? 'img-active' : ''"
                    @click="openUpload2">
                    <img v-if="formVar.imagePreview2" :src="formVar.imagePreview2" class="preview-image" alt="" />
                    <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
                    <div class="form-group">
                      <input name="image" type="file" id="file-field2" v-on:change="updatePreview2"
                        style="display: none" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-33">
                <div class="img-upload flex flex-d-col align-center">
                  <div class="text text-small mb-5">Signature</div>
                  <div class="img-upload-wrapper h-w-8-r" :class="formVar.sign_img ? 'img-active' : ''"
                    @click="openUpload3">
                    <img v-if="formVar.imagePreview3" :src="formVar.imagePreview3" class="preview-image" alt="" />
                    <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
                    <div class="form-group">
                      <input name="image" type="file" id="file-field3" v-on:change="updatePreview3"
                        style="display: none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-btns">
              <button class="btn red-btn w-50">Reset</button>
              <button class="btn white-btn w-50">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div class="right-design">
        <div class="main-card">
          <div class="card-header">
            <div class="left">
              <icon-card></icon-card>
              <h5>Id Card Design</h5>
            </div>
            <div class="right">
              <label for="list" class="flex justify-center">
                <input type="file" id="list" class="d-none">
                <div class="btn white-btn">
                  <div class="text">Import CSV</div>
                  <icon-download class=""></icon-download>
                </div>
              </label>
              <div class="btn white-btn">
                <div class="text">Save as PDF</div>
                <icon-download class=""></icon-download>
              </div>
            </div>
          </div>
        </div>
        <div class="design-card-outer">
          <div class="design-card card" :class="{ flipped: isFlipped }">
            <div class="front-side" :style="{ backgroundColor: currentColor }">
              <div class="card-header">
                <img src="/images/logo/school-logo.png" alt="">
                <h5 class="name">K.V.N. Naik School</h5>
              </div>
              <div class="card-body front-card-body">
                <div class="left-img pointer" v-click-outside="closeActiveImage1">
                  <div class="img" @click.prevent="formVar.s_img = true">
                    <img v-if="formVar.imagePreview1" :src="formVar.imagePreview1" class="preview-image" alt="" />
                    <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
                  </div>
                </div>
                <div class="right-details">
                  <label for="s_name">
                    <h6>{{ displayNameValue }}</h6>
                  </label>

                  <div class="data-section">
                    <div class="data align-start gap-16">
                      <div class="title">Class :</div>
                      <div class="val align-center gap-10">
                        <label for="class">
                          <div class="class">{{ displayClassValue }}</div>
                        </label>
                        <div class="section">B</div>
                        <div class="house">Red</div>
                      </div>
                    </div>
                    <div class="data align-start gap-16">
                      <div class="title">Phone No :</div>
                      <div class="val">
                        <label for="phone">
                          {{ displayPhoneValue }}
                        </label>
                      </div>
                    </div>
                    <div class="data align-start gap-16">
                      <div class="title">Gardian :</div>
                      <div class="val">
                        <label for="p_name">
                          {{ displayParentValue }}
                        </label>
                      </div>
                    </div>
                    <div class="data align-start gap-16">
                      <div class="title">Roll No :</div>
                      <div class="val">
                        <label for="roll">
                          {{ displayRollValue }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flip-btn">
                <button class="btn" @click="toggleSide">Back Side <icon-right-arrow></icon-right-arrow> </button>
              </div>
            </div>
            <div class="back-side">
              <div class="card-header">
                <img src="/images/logo/school-logo.png" alt="">
                <h5 class="name">K.V.N. Naik School</h5>
              </div>
              <div class="card-body back-card-body">
                <div class="back-details">
                  <div class="data-section">
                    <div class="data align-start gap-16">
                      <div class="title">Blood Group :</div>
                      <div class="val">
                        <label for="blood">
                          <div class="class">{{ displayBloodValue }}</div>
                        </label>
                      </div>
                    </div>
                    <div class="data align-start gap-16">
                      <div class="title">Address :</div>
                      <div class="val">
                        <label for="address">
                          {{ displayAddressValue }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="imgs">
                  <div class="img-outer pointer" v-click-outside="closeActiveImage2">
                    <div class="title">Parent Pic</div>
                    <div class="img big-img" @click.prevent="formVar.p_img = true">
                      <img v-if="formVar.imagePreview2" :src="formVar.imagePreview2" class="preview-image" alt="" />
                      <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
                    </div>
                  </div>
                  <!-- <div class="sign-imgs"> -->
                  <div class="img-outer pointer" v-click-outside="closeActiveImage3">
                    <div class="title">Student Signature</div>
                    <div class="img small-img" @click.prevent="formVar.sign_img = true">
                      <img v-if="formVar.imagePreview3" :src="formVar.imagePreview3" class="preview-image" alt="" />
                      <img v-else src="/images/png/camera.png" class="dummy-img" alt="" />
                    </div>
                  </div>
                  <div class="img-outer pointer">
                    <div class="title">Principal Signature</div>
                    <div class="img small-img">
                      <img src="/images/png/sign.png" class="dummy-img" alt="" />
                    </div>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
              <div class="flip-btn">
                <button class="btn" @click="toggleSide"> <icon-left-arrow></icon-left-arrow> Front Side</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, onMounted, watch, nextTick } from "vue";

const formVar = reactive({
  imagePreview1: "",
  imagePreview2: "",
  imagePreview3: "",
  house: null,
  class: null,
  section: null,
  gender: null,
  blood: null,
  s_img: false,
  s_img: false,
  sign_img: false,
});

const currentColor = ref('white');

const changeCardColor = (color) => {
  currentColor.value = color;
};

const isFlipped = ref(false);

const toggleSide = () => {
  isFlipped.value = !isFlipped.value;
};

const nameInputValue = ref('');
const parentInputValue = ref('');
const classInputValue = ref('');
const rollInputValue = ref('');
const phoneInputValue = ref('');
const bloodInputValue = ref('');
const addressInputValue = ref('');

const nameDefaultValue = 'Student Name';
const parentDefaultValue = 'Parent Name Name';
const classDefaultValue = '5th';
const rollDefaultValue = '45';
const phoneDefaultValue = '+91 8888888888';
const bloodDefaultValue = 'A+';
const addressDefaultValue = 'Near xxx, xxx Residency, Jadhavpura, Kolkata, West Bengal - 888888';


const displayNameValue = computed(() => {
  return nameInputValue.value || nameDefaultValue;
});
const displayParentValue = computed(() => {
  return parentInputValue.value || parentDefaultValue;
});
const displayClassValue = computed(() => {
  return classInputValue.value || classDefaultValue;
});
const displayRollValue = computed(() => {
  return rollInputValue.value || rollDefaultValue;
});
const displayPhoneValue = computed(() => {
  return phoneInputValue.value || phoneDefaultValue;
});
const displayBloodValue = computed(() => {
  return bloodInputValue.value || bloodDefaultValue;
});
const displayAddressValue = computed(() => {
  return addressInputValue.value || addressDefaultValue;
});



const classOptions = [
  { id: "1", name: "5" },
  { id: "2", name: "6" },
];
const houseOptions = [
  { id: "1", name: "house 1" },
  { id: "2", name: "house 2" },
];
const sectionOptions = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];
const genderOptions = [
  { id: "1", name: "Male" },
  { id: "2", name: "Female" },
  { id: "3", name: "Other" },
];
const bloodOptions = [
  { id: "1", name: "A+" },
  { id: "2", name: "B+" },
  { id: "3", name: "AB+" },
];
const handleSelectedOption = (option) => { };

function updatePreview1(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview1 = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    // store.dispatch("PostEnquiry/PostImageUpload", {
    //   file: files[0],
    //   id: formVar.id,
    //   type: "User",
    // });
  }
}
function updatePreview2(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview2 = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    store.dispatch("PostEnquiry/PostImageUpload", {
      file: files[0],
      id: formVar.id,
      type: "User",
    });
  }
}
function updatePreview3(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview3 = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    store.dispatch("PostEnquiry/PostImageUpload", {
      file: files[0],
      id: formVar.id,
      type: "User",
    });
  }
}

function openUpload1() {
  document.getElementById("file-field1").click();
}
function openUpload2() {
  document.getElementById("file-field2").click();
}
function openUpload3() {
  document.getElementById("file-field3").click();
}

function closeActiveImage1() {
  formVar.s_img = false
}
function closeActiveImage2() {
  formVar.p_img = false
}
function closeActiveImage3() {
  formVar.sign_img = false
}

</script>

<style></style>