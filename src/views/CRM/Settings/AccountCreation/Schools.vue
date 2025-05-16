<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Schools</div>
            <h5>School List</h5>
          </div>
        </div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search here" />
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div>
          <div class="icons">
            <!-- <div class="icon">
              <icon-edit></icon-edit>
            </div> -->
            <div class="icon tooltip-wrapper" @click="addSchool">
              <icon-plus></icon-plus>
              <div class="tooltip">Add School</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <div class="school-list">
          <div>
            <label for="card-1" class="list-item" @click="editSchool">
              <input
                type="radio"
                class="radio-input"
                id="card-1"
                name="school-list-item"
              />
              <div class="logo">
                <img src="/images/logo/school-logo.png" alt="" />
              </div>
              <div class="school-details">
                <h5 class="name text-center">
                  BIRLA OPEN MINDS INTERNATIONAL SCHOOL
                </h5>
                <div class="data">
                  <div class="title">
                    <icon-user></icon-user>
                    Estabish :
                  </div>
                  <div class="val">1992 (LKG to 12th)</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-mail></icon-mail>
                    Email :
                  </div>
                  <div class="val">jexog83454-sfhv@force.com.</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-google></icon-google>
                    Website :
                  </div>
                  <div class="val">www.birlainternationschool.edu.in</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-phone></icon-phone>
                    Phone :
                  </div>
                  <div class="val">+91 8888888888</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-user></icon-user>
                    Principal :
                  </div>
                  <div class="val">Mr. Amit Maheshwari (MPhil, Bed)</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-location></icon-location>
                    Address :
                  </div>
                  <div class="val">
                    Near South City Mall, Jadhavpura, Kolkata, West Bengal -
                    888888
                  </div>
                </div>
              </div>
            </label>
            <label for="card-2" class="list-item">
              <input
                type="radio"
                class="radio-input"
                id="card-2"
                name="school-list-item"
              />
              <div class="logo">
                <img src="/images/logo/school-logo.png" alt="" />
              </div>
              <div class="school-details">
                <h5 class="name text-center">
                  BIRLA OPEN MINDS INTERNATIONAL SCHOOL
                </h5>
                <div class="data">
                  <div class="title">
                    <icon-user></icon-user>
                    Estabish :
                  </div>
                  <div class="val">1992 (LKG to 12th)</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-mail></icon-mail>
                    Email :
                  </div>
                  <div class="val">jexog83454-sfhv@force.com.</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-google></icon-google>
                    Website :
                  </div>
                  <div class="val">www.birlainternationschool.edu.in</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-phone></icon-phone>
                    Phone :
                  </div>
                  <div class="val">+91 8888888888</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-user></icon-user>
                    Principal :
                  </div>
                  <div class="val">Mr. Amit Maheshwari (MPhil, Bed)</div>
                </div>
                <div class="data">
                  <div class="title">
                    <icon-location></icon-location>
                    Address :
                  </div>
                  <div class="val">
                    Near South City Mall, Jadhavpura, Kolkata, West Bengal -
                    888888
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="card p-0-i" v-if="formVar.addMode || formVar.editMode">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Schools</div>
            <h5>Create School</h5>
          </div>
        </div>
        <!-- <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-reload></icon-reload>
            </div>
          </div>
          <div class="selects">
            <Select v-model="formVar.mode" :options="modeOptions" />
            <div class="select-dropdown">
              <select name="" id="">
                <option value="">House</option>
                <option value="">Map Class</option>
                <option value="">Map Depart</option>
              </select>
            </div>
          </div>
        </div> -->
      </div>
      <div class="card-body p-10">
        <form action="" class="form">
          <div class="form-item mb-16">
            <input
              type="text"
              v-model="formVar.schoolName"
              placeholder="School Name"
            />
            <div class="err-msg" v-if="formVar.submit && schoolNameValid">
              {{ schoolNameValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input
              type="text"
              v-model="formVar.estabish"
              placeholder="Establish Year"
            />
            <div class="err-msg" v-if="formVar.submit && estabishValid">
              {{ estabishValid }}
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <input type="text" v-model="classFrom" placeholder="Intek From" />
              <div class="err-msg" v-if="formVar.submit && classFromValid">
                {{ classFromValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <input
                type="text"
                v-model="formVar.classTo"
                placeholder="Intek To"
              />
              <div class="err-msg" v-if="formVar.submit && classToValid">
                {{ classToValid }}
              </div>
            </div>
          </div>
          <div class="form-item mb-16">
            <input type="text" v-model="formVar.email" placeholder="Email" />
            <div class="err-msg" v-if="formVar.submit && emailValid">
              {{ emailValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input
              type="text"
              v-model="formVar.website"
              placeholder="Website"
            />
            <div class="err-msg" v-if="formVar.submit && websiteValid">
              {{ websiteValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input
              type="text"
              v-model="formVar.principal"
              placeholder="Principal Name"
            />
            <div class="err-msg" v-if="formVar.submit && principalValid">
              {{ principalValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <input
              type="text"
              v-model="formVar.address"
              placeholder="Full Address"
            />
            <div class="err-msg" v-if="formVar.submit && addressValid">
              {{ addressValid }}
            </div>
          </div>
          <div class="row">
            <div class="col-5">
              <div class="img-upload align-center flex-d-col">
                <div class="text text-small mb-10">School Logo</div>
                <div class="img-upload-wrapper h-w-8-r" @click="openUpload">
                  <img
                    v-if="formVar.imagePreview"
                    :src="formVar.imagePreview"
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
                      id="file-field"
                      v-on:change="updatePreview"
                      style="display: none"
                    />
                  </div>
                </div>
                <div class="err-msg" v-if="formVar.submit && logoValid">
                  {{ logoValid }}
                </div>
              </div>
            </div>
            <div class="col-5">
              <div class="form-item mb-16">
                <SingleSelect
                  v-model="formVar.state"
                  :options="stateOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select State"
                >
                </SingleSelect>
                <div class="err-msg" v-if="formVar.submit && stateValid">
                  {{ stateValid }}
                </div>
              </div>
              <div class="form-item mb-16">
                <SingleSelect
                  v-model="formVar.city"
                  :options="cityOptions"
                  @selected="handleSelectedOption"
                  placeholder="Select City"
                >
                </SingleSelect>
                <div class="err-msg" v-if="formVar.submit && cityValid">
                  {{ cityValid }}
                </div>
              </div>
              <div class="form-item mb-16">
                <input
                  type="text"
                  v-model="formVar.pincode"
                  placeholder="Pin Code"
                />
                <div class="err-msg" v-if="formVar.submit && pincodeValid">
                  {{ pincodeValid }}
                </div>
              </div>
            </div>
          </div>
          <div class="submit-btns mt-16">
            <div class="row">
              <div class="col-10">
                <button
                  type="button"
                  class="btn white-btn"
                  @click="submitSchool"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  imagePreview: "",
  addMode: false,
  editMode: false,
  submit: false,
  logoFile: null,

  schoolName: null,
  estabish: null,
  classFrom: null,
  classTo: null,
  email: null,
  website: null,
  phone: null,
  principal: null,
  address: null,
  pincode: null,
  state: null,
  city: null,
  mode: "House",
});
const modeOptions = [
  { id: "House", name: "House" },
  { id: "Map Class", name: "Map Class" },
  { id: "Map Depart", name: "Map Depart" },
];
const stateOptions = [
  { id: "1", name: "Maharashtra" },
  { id: "2", name: "Goa" },
];
const cityOptions = [
  { id: "1", name: "Nashik" },
  { id: "2", name: "Pune" },
];
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */
const submitSchool = () => {
  if (
    schoolNameValid.value ||
    estabishValid.value ||
    classFromValid.value ||
    classToValid.value ||
    emailValid.value ||
    websiteValid.value ||
    principalValid.value ||
    addressValid.value ||
    stateValid.value ||
    cityValid.value ||
    pincodeValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
};
const handleSelectedOption = (option) => {};

function addSchool() {
  formVar.addMode = true;
  formVar.editMode = false;
}
function editSchool() {
  formVar.addMode = false;
  formVar.editMode = true;
}
function updatePreview(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    formVar.logoFile = files[0];
  }
}
function openUpload() {
  document.getElementById("file-field").click();
}
/* Functions/Methods */
/* Validation */
const schoolNameValid = computed(() => {
  if (!formVar.schoolName) {
    return "Please Enter School Name";
  }
});
const estabishValid = computed(() => {
  if (!formVar.estabish) {
    return "Please Enter Estabish Year";
  }
});
const classFromValid = computed(() => {
  if (!formVar.classFrom) {
    return "Please Enter Intek From";
  }
});
const classToValid = computed(() => {
  if (!formVar.classTo) {
    return "Please Enter Intek To";
  }
});
const emailValid = computed(() => {
  if (!formVar.email) {
    return "Please Enter School Email";
  }
});
const websiteValid = computed(() => {
  if (!formVar.website) {
    return "Please Enter School Website";
  }
});
const principalValid = computed(() => {
  if (!formVar.principal) {
    return "Please Enter School Principal";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please Enter School Address";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Please Select State";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please Select City";
  }
});
const pincodeValid = computed(() => {
  if (!formVar.pincode) {
    return "Please Enter Pincode";
  }
});
const logoValid = computed(() => {
  if (!formVar.logoFile) {
    return "Please Select Logo";
  }
});
/* Validation */
</script>

<style></style>
