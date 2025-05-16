<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Add Student</h3>
        </div>
        <form class="form mb-16">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Login Id</div>
              <input
                type="text"
                v-model="formVar.contactNo"
                placeholder="Login Id"
                maxlength="10"
                disabled
              />
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">UID Number</div>
              <input
                type="text"
                v-model="formVar.UID"
                placeholder="Enter UID"
                maxlength="50"
              />
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">PEN Numberer</div>
              <input
                type="text"
                v-model="formVar.PEN"
                placeholder="Enter PEN Number"
                maxlength="50"
              />
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Name</div>
              <input
                type="text"
                v-model="formVar.name"
                placeholder="Enter Name"
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && nameValid">
                {{ nameValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Registration No</div>
              <input
                type="text"
                v-model="formVar.regNo"
                placeholder="Enter Registration"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && regNoValid">
                {{ regNoValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Sr No</div>
              <input
                type="text"
                v-model="formVar.studentNo"
                placeholder="Enter Sr No"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && studentNoValid">
                {{ studentNoValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Contact No</div>
              <input
                type="text"
                v-model="formVar.contactNo"
                placeholder="Enter Contact No"
                maxlength="10"
                @keydown="isNumber($event)"
              />
              <div class="err-msg" v-if="formVar.submit && contactNoValid">
                {{ contactNoValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Admission No</div>
              <input
                type="text"
                v-model="formVar.admissionNo"
                placeholder="Enter Admission Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && admissionNoValid">
                {{ admissionNoValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Roll No</div>
              <input
                type="text"
                v-model="formVar.rollNo"
                placeholder="Enter Roll No"
                @keydown="isNumber($event)"
                maxlength="3"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && rollNoValid">
                {{ rollNoValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">House Zone</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.houseZoneId">
                  <option :value="null">Select</option>
                  <option
                    v-for="(item, index) in storeVar.houseZone"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && houseZoneIdValid">
                {{ houseZoneIdValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Class Section</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.classDivId">
                  <option :value="null">Select</option>
                  <option
                    v-for="(item, index) in storeVar.classDiv"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && classDivIdValid">
                {{ classDivIdValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Class</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.classListId">
                  <option :value="null">Select</option>
                  <option
                    v-for="(item, index) in storeVar.classList"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="err-msg" v-if="formVar.submit && classListIdValid">
                {{ classListIdValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">rfid No</div>
              <input
                type="text"
                v-model="formVar.rfidNo"
                placeholder="Enter rfid Number"
                maxlength="50"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && rfidNoValid">
                {{ rfidNoValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Cast</div>
              <input
                type="text"
                v-model="formVar.cast"
                placeholder="Enter Cast"
                maxlength="30"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && castValid">
                {{ castValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Religion</div>
              <input
                type="text"
                v-model="formVar.religion"
                placeholder="Enter Religion"
                maxlength="30"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && religionValid">
                {{ religionValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Nationality</div>
              <input
                type="text"
                v-model="formVar.nationality"
                placeholder="Enter Nationality"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && nationalityValid">
                {{ nationalityValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Email</div>
              <input
                type="text"
                v-model="formVar.emailId"
                placeholder="Enter E-mail "
                maxlength="30"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && emailValid">
                {{ emailValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Gender</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.gender">
                  <option :value="null">Select</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
              <div class="err-msg" v-if="formVar.submit && genderValid">
                {{ genderValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Dob</div>
              <input
                type="date"
                v-model="formVar.dob"
                :max="moment().format('YYYY-MM-DD')"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && dobValid">
                {{ dobValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Father Name</div>
              <input
                type="text"
                v-model="formVar.fatherName"
                placeholder="Enter Father Name"
                maxlength="50"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && fatherNameValid">
                {{ fatherNameValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Father Contact No</div>
              <input
                type="text"
                v-model="formVar.fatherContactNo"
                placeholder="Enter Father Contact No"
                maxlength="10"
                @keydown="isNumber($event)"
              />
              <!-- <div
                class="err-msg"
                v-if="formVar.submit && fatherContactNoValid"
              >
                {{ fatherContactNoValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Father Occupation</div>
              <input
                type="text"
                v-model="formVar.fatherOccupation"
                placeholder="Enter Father Occupation"
                maxlength="50"
              />
              <!-- <div
                class="err-msg"
                v-if="formVar.submit && fatherOccupationValid"
              >
                {{ fatherOccupationValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Father Income</div>
              <input
                type="text"
                v-model="formVar.fatherIncome"
                placeholder="Enter Father Income"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && fatherIncomeValid">
                {{ fatherIncomeValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Mother Name</div>
              <input
                type="text"
                v-model="formVar.motherName"
                placeholder="Enter Mother Name"
                maxlength="50"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && motherNameValid">
                {{ motherNameValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Mother Contact No</div>
              <input
                type="text"
                v-model="formVar.motherContactNo"
                placeholder="Enter Mother Contact No"
                maxlength="10"
                @keydown="isNumber($event)"
              />
              <!-- <div
                class="err-msg"
                v-if="formVar.submit && motherContactNoValid"
              >
                {{ motherContactNoValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Mother Occupation</div>
              <input
                type="text"
                v-model="formVar.motherOccupation"
                placeholder="Enter Mother Occupation"
                maxlength="50"
              />
              <!-- <div
                class="err-msg"
                v-if="formVar.submit && motherOccupationValid"
              >
                {{ motherOccupationValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Mother Income</div>
              <input
                type="text"
                v-model="formVar.motherIncome"
                @keydown="isNumber($event)"
                maxlength="10"
                placeholder="Enter Mother Income"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && motherIncomeValid">
                {{ motherIncomeValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Transport</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.transport">
                  <option :value="null">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && transportValid">
                {{ transportValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Stream</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.stream">
                  <option :value="null">Select</option>
                  <option value="SCIENCE">SCIENCE</option>
                  <option value="COMMERCE">COMMERCE</option>
                  <option value="ARTS">ARTS</option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && streamValid">
                {{ streamValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Canteen</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.canteen">
                  <option :value="null">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && canteenValid">
                {{ canteenValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Library</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.library">
                  <option :value="null">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && libraryValid">
                {{ libraryValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Hostel</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.hostel">
                  <option :value="null">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <!-- <div class="err-msg" v-if="formVar.submit && hostelValid">
                {{ hostelValid }}
              </div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">State</div>
              <input
                type="text"
                v-model="formVar.state"
                placeholder="Enter State"
                maxlength="30"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && stateValid">
                {{ stateValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">City</div>
              <input
                type="text"
                v-model="formVar.city"
                placeholder="Enter city"
                maxlength="30"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && cityValid">
                {{ cityValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">pincode</div>
              <input
                type="text"
                v-model="formVar.pincode"
                placeholder="Enter pincode"
                @keydown="isNumber($event)"
                maxlength="6"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && pincodeValid">
                {{ pincodeValid }}
              </div> -->
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Address</div>
            <textarea
              name=""
              id=""
              v-model="formVar.address"
              rows="4"
              placeholder="Address"
              maxlength="200"
            ></textarea>
            <!-- <div class="err-msg" v-if="formVar.submit && addressValid">
              {{ addressValid }}
            </div> -->
          </div>
          <div class="card-footer">
            <div class="w-30 flex gap-10">
              <button
                class="btn white-btn w-full"
                type="button"
                @click.prevent="addOrganization()"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationSettings);

const formVar = reactive({
  submit: false,
  organizationId: null,
  organizationSettingId: null,

  name: null,
  regNo: null,
  studentNo: null,
  admissionNo: null,
  rollNo: null,
  rfidNo: null,
  emailId: null,
  cast: null,
  religion: null,
  nationality: null,
  contactNo: null,

  address: null,
  city: null,
  state: null,
  pincode: null,
  gender: null,
  dob: null,

  UID: null,
  PEN: null,

  fatherName: null,
  fatherContactNo: null,
  fatherOccupation: null,
  fatherIncome: null,
  motherName: null,
  motherContactNo: null,
  motherOccupation: null,
  motherIncome: null,

  transport: "No",
  stream: null,
  canteen: "No",
  library: "No",
  hostel: "No",

  houseZoneId: null,
  organizationDetailId: null,
  classDivId: null,
  classListId: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationDetailId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    getOneOrganizationSettings();
  }
});
/* Lifecycle/Hooks */
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.organizationSettingId,
  });
}

function addOrganization() {
  if (
    nameValid.value ||
    // regNoValid.value ||
    // emailValid.value ||
    contactNoValid.value ||
    // stateValid.value ||
    // cityValid.value ||
    // addressValid.value ||
    // pincodeValid.value ||
    // studentNoValid.value ||
    // admissionNoValid.value ||
    // rollNoValid.value ||
    // rfidNoValid.value ||
    // castValid.value ||
    // religionValid.value ||
    // nationalityValid.value ||
    genderValid.value ||
    // dobValid.value ||
    // fatherNameValid.value ||
    // fatherContactNoValid.value ||
    // fatherOccupationValid.value ||
    // fatherIncomeValid.value ||
    // motherNameValid.value ||
    // motherContactNoValid.value ||
    // motherOccupationValid.value ||
    // motherIncomeValid.value ||
    // transportValid.value ||
    // streamValid.value ||
    // canteenValid.value ||
    // libraryValid.value ||
    // hostelValid.value ||
    // houseZoneIdValid.value ||
    // classDivIdValid.value ||
    classListIdValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("OrganizationStudent/addStudent", {
    name: formVar.name,
    regNo: formVar.regNo,
    studentNo: formVar.studentNo,
    admissionNo: formVar.admissionNo,
    rollNo: formVar.rollNo,
    rfidNo: formVar.rfidNo,
    emailId: formVar.emailId,
    cast: formVar.cast,
    religion: formVar.religion,
    nationality: formVar.nationality,
    contactNo: formVar.contactNo,
    address: formVar.address,
    city: formVar.city,
    stateName: formVar.state,
    pincode: formVar.pincode,
    gender: formVar.gender,
    dob: formVar.dob,
    fatherName: formVar.fatherName,
    fatherContactNo: formVar.fatherContactNo,
    fatherOccupation: formVar.fatherOccupation,
    fatherIncome: formVar.fatherIncome,
    motherName: formVar.motherName,
    motherContactNo: formVar.motherContactNo,
    motherOccupation: formVar.motherOccupation,
    motherIncome: formVar.motherIncome,
    transport: formVar.transport,
    stream: formVar.stream,
    canteen: formVar.canteen,
    library: formVar.library,
    hostel: formVar.hostel,
    houseZoneId: formVar.houseZoneId,
    organizationDetailId: formVar.organizationDetailId,
    classDivId: formVar.classDivId,
    classListId: formVar.classListId,
    settingId: formVar.organizationSettingId,
    PEN: formVar.PEN,
    UID: formVar.UID,
  });
}
function resetForm() {
  formVar.name = null;
  formVar.regNo = null;
  formVar.studentNo = null;
  formVar.admissionNo = null;
  formVar.rollNo = null;
  formVar.rfidNo = null;
  formVar.emailId = null;
  formVar.cast = null;
  formVar.religion = null;
  formVar.nationality = null;
  formVar.contactNo = null;
  formVar.address = null;
  formVar.city = null;
  formVar.state = null;
  formVar.pincode = null;
  formVar.gender = null;
  formVar.dob = null;
  formVar.fatherName = null;
  formVar.fatherContactNo = null;
  formVar.fatherOccupation = null;
  formVar.fatherIncome = null;
  formVar.motherName = null;
  formVar.motherContactNo = null;
  formVar.motherOccupation = null;
  formVar.motherIncome = null;
  formVar.transport = null;
  formVar.stream = null;
  formVar.canteen = null;
  formVar.library = null;
  formVar.hostel = null;
  formVar.houseZoneId = null;
  formVar.organizationDetailId = null;
  formVar.classDivId = null;
  formVar.classListId = null;
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
  }
});
const regNoValid = computed(() => {
  if (!formVar.regNo) {
    return "Please Registation No";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!formVar.emailId) {
    return "Please Enter Email!";
  } else if (!emailValid.test(formVar.emailId)) {
    return "Please Enter Valid Email!";
  }
});

const contactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.contactNo) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(formVar.contactNo)) {
    return "Please Enter Valid Number!";
  }
});
const stateValid = computed(() => {
  if (!formVar.state) {
    return "Please Enter State";
  }
});
const cityValid = computed(() => {
  if (!formVar.city) {
    return "Please Enter City";
  }
});
const addressValid = computed(() => {
  if (!formVar.address) {
    return "Please Enter Address";
  }
});
const pincodeValid = computed(() => {
  if (!formVar.pincode) {
    return "Please Select Pincode";
  }
});
const studentNoValid = computed(() => {
  if (!formVar.studentNo) {
    return "Please Enter Student Number";
  }
});
const admissionNoValid = computed(() => {
  if (!formVar.admissionNo) {
    return "Please Enter Admission No";
  }
});
const rollNoValid = computed(() => {
  if (!formVar.rollNo) {
    return "Please Enter Roll No";
  }
});

const rfidNoValid = computed(() => {
  if (!formVar.rfidNo) {
    return "Please Enter rfid No";
  }
});

const castValid = computed(() => {
  if (!formVar.cast) {
    return "Please Enter cast";
  }
});

const religionValid = computed(() => {
  if (!formVar.religion) {
    return "Please Enter Religion";
  }
});
const nationalityValid = computed(() => {
  if (!formVar.nationality) {
    return "Please Enter Nationality";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please Select Gender";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please Select dob";
  }
});
const fatherNameValid = computed(() => {
  if (!formVar.fatherName) {
    return "Please Enter Father Name";
  }
});
const fatherContactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.fatherContactNo) {
    return "Please Enter Father Contact No";
  } else if (!phoneValid.test(formVar.fatherContactNo)) {
    return "Please Enter Valid Number!";
  }
});
const fatherOccupationValid = computed(() => {
  if (!formVar.fatherOccupation) {
    return "Please Enter Father Occupation";
  }
});
const fatherIncomeValid = computed(() => {
  if (!formVar.fatherIncome) {
    return "Please Enter Father Income";
  }
});
const motherNameValid = computed(() => {
  if (!formVar.motherName) {
    return "Please Enter Mother Name";
  }
});
const motherContactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.motherContactNo) {
    return "Please Enter Mother Contact No";
  } else if (!phoneValid.test(formVar.motherContactNo)) {
    return "Please Enter Valid Number!";
  }
});
const motherOccupationValid = computed(() => {
  if (!formVar.motherOccupation) {
    return "Please Enter Mother Occupation";
  }
});
const motherIncomeValid = computed(() => {
  if (!formVar.motherIncome) {
    return "Please Enter Mother Income";
  }
});
const transportValid = computed(() => {
  if (!formVar.transport) {
    return "Please Select Transport";
  }
});
const streamValid = computed(() => {
  if (!formVar.stream) {
    return "Please Select Stream";
  }
});
const canteenValid = computed(() => {
  if (!formVar.canteen) {
    return "Please Select Canteen";
  }
});
const libraryValid = computed(() => {
  if (!formVar.library) {
    return "Please Select Library";
  }
});
const hostelValid = computed(() => {
  if (!formVar.hostel) {
    return "Please Select Hostel";
  }
});
const houseZoneIdValid = computed(() => {
  if (!formVar.houseZoneId) {
    return "Please Select House Zone";
  }
});
const classDivIdValid = computed(() => {
  if (!formVar.classDivId) {
    return "Please Select Class Section";
  }
});
const classListIdValid = computed(() => {
  if (!formVar.classListId) {
    return "Please Select Class";
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
