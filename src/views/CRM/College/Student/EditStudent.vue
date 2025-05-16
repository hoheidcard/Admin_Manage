<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Update Student</h3>
        </div>
        <form class="form mb-16">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Login Id</div>
              <input
                type="text"
                v-model="storeVar.contactNo"
                placeholder="Login Id"
                maxlength="10"
                disabled
              />
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">UID Number</div>
              <input
                type="text"
                v-model="storeVar.UID"
                placeholder="Enter UID Number"
                maxlength="50"
              />
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">PEN Number</div>
              <input
                type="text"
                v-model="storeVar.PEN"
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
                v-model="storeVar.name"
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
                v-model="storeVar.regNo"
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
                v-model="storeVar.studentNo"
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
                v-model="storeVar.contactNo"
                placeholder="Enter Contact No"
                maxlength="10"
                disabled
              />
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Admission No</div>
              <input
                type="text"
                v-model="storeVar.admissionNo"
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
                v-model="storeVar.rollNo"
                placeholder="Enter Roll No"
                maxlength="10"
                @keydown="isNumber($event)"
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
                <select name="" id="" v-model="storeVar.houseZoneId">
                  <option :value="null">Select</option>
                  <option
                    v-for="(item, index) in storeVar2.houseZone"
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
                <select name="" id="" v-model="storeVar.classDivId">
                  <option :value="null">Select</option>
                  <option
                    v-for="(item, index) in storeVar2.classDiv"
                    :key="index"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="err-msg" v-if="formVar.submit && classDivIdValid">
                {{ classDivIdValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Class</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="storeVar.classListId">
                  <option :value="null">Select</option>
                  <option
                    v-for="(item, index) in storeVar2.classList"
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
                v-model="storeVar.rfidNo"
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
                v-model="storeVar.cast"
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
                v-model="storeVar.religion"
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
                v-model="storeVar.nationality"
                placeholder="Enter Nationality"
                maxlength="30"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && nationalityValid">
                {{ nationalityValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Email</div>
              <input
                type="text"
                v-model="storeVar.emailId"
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
                <select name="" id="" v-model="storeVar.gender">
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
                v-model="storeVar.dob"
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
                v-model="storeVar.fatherName"
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
                v-model="storeVar.fatherContactNo"
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
                v-model="storeVar.fatherOccupation"
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
                v-model="storeVar.fatherIncome"
                placeholder="Enter Father Income"
                maxlength="10"
                @keydown="isNumber($event)"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && fatherIncomeValid">
                {{ fatherIncomeValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Mother Name</div>
              <input
                type="text"
                v-model="storeVar.motherName"
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
                v-model="storeVar.motherContactNo"
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
                v-model="storeVar.motherOccupation"
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
                v-model="storeVar.motherIncome"
                placeholder="Enter Mother Income"
                maxlength="10"
                @keydown="isNumber($event)"
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
                <select name="" id="" v-model="storeVar.transport">
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
                <select name="" id="" v-model="storeVar.stream">
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
                <select name="" id="" v-model="storeVar.canteen">
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
                <select name="" id="" v-model="storeVar.library">
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
                <select name="" id="" v-model="storeVar.hostel">
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
                v-model="storeVar.state"
                placeholder="Enter State"
                maxlength="50"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && stateValid">
                {{ stateValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">City</div>
              <input
                type="text"
                v-model="storeVar.city"
                placeholder="Enter city"
                maxlength="50"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && cityValid">
                {{ cityValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">pincode</div>
              <input
                type="text"
                v-model="storeVar.pincode"
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
              v-model="storeVar.address"
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
                @click.prevent="updateOrganization()"
              >
                Update
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
const storeVar = computed(() => store.state.OrganizationStudent);
const storeVar2 = computed(() => store.state.OrganizationSettings);

const formVar = reactive({
  submit: false,
  organizationId: null,
  organizationSettingId: null,
  studentId: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.studentId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    getOneOrganizationSettings();
    getOneStudent();
  }
});
/* Lifecycle/Hooks */
function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.organizationSettingId,
  });
}
function getOneStudent() {
  store.dispatch("OrganizationStudent/getOneStudent", {
    id: formVar.studentId,
  });
}

function updateOrganization() {
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
  store.dispatch("OrganizationStudent/updateStudent", {
    name: storeVar.value.name,
    regNo: storeVar.value.regNo,
    studentNo: storeVar.value.studentNo,
    admissionNo: storeVar.value.admissionNo,
    rollNo: storeVar.value.rollNo,
    rfidNo: storeVar.value.rfidNo,
    emailId: storeVar.value.emailId,
    cast: storeVar.value.cast,
    religion: storeVar.value.religion,
    nationality: storeVar.value.nationality,
    contactNo: storeVar.value.contactNo,
    address: storeVar.value.address,
    city: storeVar.value.city,
    stateName: storeVar.value.state,
    pincode: storeVar.value.pincode,
    gender: storeVar.value.gender,
    dob: storeVar.value.dob,
    fatherName: storeVar.value.fatherName,
    fatherContactNo: storeVar.value.fatherContactNo,
    fatherOccupation: storeVar.value.fatherOccupation,
    fatherIncome: storeVar.value.fatherIncome,
    motherName: storeVar.value.motherName,
    motherContactNo: storeVar.value.motherContactNo,
    motherOccupation: storeVar.value.motherOccupation,
    motherIncome: storeVar.value.motherIncome,
    transport: storeVar.value.transport,
    stream: storeVar.value.stream,
    canteen: storeVar.value.canteen,
    library: storeVar.value.library,
    hostel: storeVar.value.hostel,
    houseZoneId: storeVar.value.houseZoneId,
    organizationDetailId: storeVar.value.organizationDetailId,
    classDivId: storeVar.value.classDivId,
    classListId: storeVar.value.classListId,
    id: formVar.studentId,
    settingId: formVar.organizationSettingId,
    PEN: storeVar.value.PEN,
    UID: storeVar.value.UID,
  });
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!storeVar.value.name) {
    return "Please Enter Name";
  }
});
const regNoValid = computed(() => {
  if (!storeVar.value.regNo) {
    return "Please Registation No";
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
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(storeVar.value.contactNo)) {
    return "Please Enter Valid Number!";
  }
});
const stateValid = computed(() => {
  if (!storeVar.value.state) {
    return "Please Enter State";
  }
});
const cityValid = computed(() => {
  if (!storeVar.value.city) {
    return "Please Enter City";
  }
});
const addressValid = computed(() => {
  if (!storeVar.value.address) {
    return "Please Enter Address";
  }
});
const pincodeValid = computed(() => {
  if (!storeVar.value.pincode) {
    return "Please Select Pincode";
  }
});
const studentNoValid = computed(() => {
  if (!storeVar.value.studentNo) {
    return "Please Enter Student Number";
  }
});
const admissionNoValid = computed(() => {
  if (!storeVar.value.admissionNo) {
    return "Please Enter Admission No";
  }
});
const rollNoValid = computed(() => {
  if (!storeVar.value.rollNo) {
    return "Please Enter Roll No";
  }
});

const rfidNoValid = computed(() => {
  if (!storeVar.value.rfidNo) {
    return "Please Enter rfid No";
  }
});

const castValid = computed(() => {
  if (!storeVar.value.cast) {
    return "Please Enter cast";
  }
});

const religionValid = computed(() => {
  if (!storeVar.value.religion) {
    return "Please Enter Religion";
  }
});
const nationalityValid = computed(() => {
  if (!storeVar.value.nationality) {
    return "Please Enter Nationality";
  }
});
const genderValid = computed(() => {
  if (!storeVar.value.gender) {
    return "Please Select Gender";
  }
});
const dobValid = computed(() => {
  if (!storeVar.value.dob) {
    return "Please Select dob";
  }
});
const fatherNameValid = computed(() => {
  if (!storeVar.value.fatherName) {
    return "Please Enter Father Name";
  }
});
const fatherContactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.fatherContactNo) {
    return "Please Enter Father Contact No";
  } else if (!phoneValid.test(storeVar.value.fatherContactNo)) {
    return "Please Enter Valid Number!";
  }
});
const fatherOccupationValid = computed(() => {
  if (!storeVar.value.fatherOccupation) {
    return "Please Enter Father Occupation";
  }
});
const fatherIncomeValid = computed(() => {
  if (!storeVar.value.fatherIncome) {
    return "Please Enter Father Income";
  }
});
const motherNameValid = computed(() => {
  if (!storeVar.value.motherName) {
    return "Please Enter Mother Name";
  }
});
const motherContactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.motherContactNo) {
    return "Please Enter Mother Contact No";
  } else if (!phoneValid.test(storeVar.value.motherContactNo)) {
    return "Please Enter Valid Number!";
  }
});
const motherOccupationValid = computed(() => {
  if (!storeVar.value.motherOccupation) {
    return "Please Enter Mother Occupation";
  }
});
const motherIncomeValid = computed(() => {
  if (!storeVar.value.motherIncome) {
    return "Please Enter Mother Income";
  }
});
const transportValid = computed(() => {
  if (!storeVar.value.transport) {
    return "Please Select Transport";
  }
});
const streamValid = computed(() => {
  if (!storeVar.value.stream) {
    return "Please Select Stream";
  }
});
const canteenValid = computed(() => {
  if (!storeVar.value.canteen) {
    return "Please Select Canteen";
  }
});
const libraryValid = computed(() => {
  if (!storeVar.value.library) {
    return "Please Select Library";
  }
});
const hostelValid = computed(() => {
  if (!storeVar.value.hostel) {
    return "Please Select Hostel";
  }
});
const houseZoneIdValid = computed(() => {
  if (!storeVar.value.houseZoneId) {
    return "Please Select House Zone";
  }
});
const classDivIdValid = computed(() => {
  if (!storeVar.value.classDivId) {
    return "Please Select Class Section";
  }
});
const classListIdValid = computed(() => {
  if (!storeVar.value.classListId) {
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
