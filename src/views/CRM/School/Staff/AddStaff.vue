<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Add Staff</h3>
        </div>
        <form class="form mb-16">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Login Id</div>
              <input
                type="text"
                v-model="formVar.phoneNumber"
                placeholder="Enter Phone Number"
                @keydown="isNumber($event)"
                maxlength="10"
                disabled
              />
              <div class="err-msg" v-if="formVar.submit && phoneValid">
                {{ phoneValid }}
              </div>
            </div>
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
              <div class="title">Phone</div>
              <input
                type="text"
                v-model="formVar.phoneNumber"
                placeholder="Enter Phone Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && phoneValid">
                {{ phoneValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Gender</div>
              <div class="select-dropdown">
                <select name="Gender" id="gender" v-model="formVar.gender">
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
              <div class="err-msg" v-if="formVar.submit && genderValid">
                {{ genderValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Dob</div>
              <input
                type="date"
                v-model="formVar.dob"
                :max="moment().format('YYYY-MM-DD')"
              />
              <div class="err-msg" v-if="formVar.submit && dobValid">
                {{ dobValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Designation</div>
              <!-- <SingleSelect :options="designationVar.designationData" @selected="handleSelectedDesignation"
                v-model="formVar.designation" placeholder="Select Designation" @search="searchDesignation">
              </SingleSelect> -->
              <SingleSelect
                :options="storeVar2.designation"
                @selected="handleSelectedDesignation"
                v-model="formVar.designation"
                placeholder="Select Designation"
                @search="searchDesignation"
              >
              </SingleSelect>
              <div class="err-msg" v-if="formVar.submit && designationValid">
                {{ designationValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Joining Date</div>
              <input
                type="date"
                v-model="formVar.joiningDate"
                :max="moment().format('YYYY-MM-DD')"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && joiningDateValid">{{ joiningDateValid }}</div> -->
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
              <div class="title">Nationality</div>
              <input
                type="text"
                v-model="formVar.nationality"
                placeholder="Enter Nationality"
                maxlength="20"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">State</div>
              <input
                type="text"
                v-model="formVar.state"
                placeholder="Enter State"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && joiningDateValid">{{ joiningDateValid }}</div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">City</div>
              <input
                type="text"
                v-model="formVar.city"
                placeholder="Enter City"
                maxlength="10"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && contactNoValid">{{ contactNoValid }}</div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Pincode</div>
              <input
                type="text"
                v-model="formVar.pincode"
                placeholder="Enter Pincode"
                @keydown="isNumber($event)"
                maxlength="6"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && phoneValid">{{ phoneValid }}</div> -->
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Father Name</div>
              <input
                type="text"
                v-model="formVar.guardianName"
                placeholder="Enter Father Name"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && joiningDateValid">{{ joiningDateValid }}</div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Father Contact No</div>
              <input
                type="text"
                v-model="formVar.guardianContactNo"
                placeholder="Enter Father Contact No"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && contactNoValid">{{ contactNoValid }}</div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Password</div>
              <input
                type="password"
                name="password"
                v-model="formVar.password"
                placeholder="Enter Password "
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && passwordValid">
                {{ passwordValid }}
              </div>
            </div>
          </div>
          <div class="form-item mb-16">
            <textarea
              name="Address"
              id="address"
              v-model="formVar.address"
              rows="5"
              placeholder="Address"
            ></textarea>
            <!-- <div class="err-msg">Please enter address</div> -->
          </div>
        </form>
        <div class="card-footer">
          <div class="w-30 flex gap-10">
            <button
              class="btn white-btn w-full"
              type="button"
              @click.prevent="addStaff"
            >
              Add
            </button>
          </div>
        </div>
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
const storeVar = computed(() => store.state.OrganizationStaff);
const designationVar = computed(() => store.state.Designation);
const storeVar2 = computed(() => store.state.OrganizationSettings);

const formVar = reactive({
  submit: false,
  organizationAccountId: null,
  organizationSettingId: null,

  typingTimer: null,
  typingDelay: 500,

  searchKey: null,
  designationId: null,

  designation: "",
  phoneNumber: null,
  name: null,
  emailId: null,
  gender: "MALE",
  password: null,
  dob: null,
  joiningDate: null,
  contactNo: null,
  nationality: null,
  address: null,
  city: null,
  state: null,
  pincode: null,
  guardianName: null,
  guardianContactNo: null,
  designationId: null,
  organizationDetailId: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationDetailId = route.query.id;
    formVar.organizationSettingId = route.query.settingId;
    getDesignation();
    getOneOrganizationSettings();
  }
});
/* Lifecycle/Hooks */
function getDesignation() {
  store.dispatch("Designation/getMyDesignationBySetting", {
    settingId: route.query.settingId,
  });
}

function getOneOrganizationSettings() {
  store.dispatch("OrganizationSettings/getOneOrganizationSettings", {
    id: formVar.organizationSettingId,
  });
}

function addStaff() {
  if (
    designationValid.value ||
    nameValid.value ||
    // emailValid.value ||
    phoneValid.value ||
    genderValid.value ||
    dobValid.value ||
    designationValid.value ||
    passwordValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("OrganizationStaff/addStaff", {
    phoneNumber: formVar.phoneNumber,
    name: formVar.name,
    emailId: formVar.emailId,
    gender: formVar.gender,
    password: formVar.password,
    dob: formVar.dob,
    joiningDate: formVar.joiningDate,
    contactNo: formVar.phoneNumber,
    nationality: formVar.nationality,
    address: formVar.address,
    city: formVar.city,
    stateName: formVar.state,
    pincode: formVar.pincode,
    guardianName: formVar.guardianName,
    guardianContactNo: formVar.guardianContactNo,
    designationId: formVar.designationId,
    organizationDetailId: formVar.organizationDetailId,
    designation: formVar.designation,
    accountId: route.query.accountId,
    settingId: route.query.settingId,
  });
}
function resetForm() {
  (formVar.designation = ""), (formVar.phoneNumber = null);
  formVar.name = null;
  formVar.emailId = null;
  formVar.gender = "MALE";
  formVar.password = null;
  formVar.dob = null;
  formVar.joiningDate = null;
  formVar.contactNo = null;
  formVar.nationality = null;
  formVar.address = null;
  formVar.city = null;
  formVar.state = null;
  formVar.pincode = null;
  formVar.guardianName = null;
  formVar.guardianContactNo = null;
  formVar.designationId = null;
}
const handleSelectedDesignation = (option) => {
  formVar.designationId = option.id;
};
const searchDesignation = (key) => {
  formVar.searchKey = key;
};
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
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
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.phoneNumber) {
    return "Please Enter Phone Number!";
  } else if (!phoneValid.test(formVar.phoneNumber)) {
    return "Please Enter Valid Phone Number!";
  }
});
const designationValid = computed(() => {
  if (!formVar.designationId) {
    return "Please Select Designation";
  }
});
const genderValid = computed(() => {
  if (!formVar.gender) {
    return "Please Select Gender";
  }
});
const dobValid = computed(() => {
  if (!formVar.dob) {
    return "Please Select Date of Birth";
  }
});
const passwordValid = computed(() => {
  let passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
  if (!formVar.password) {
    return "Please Enter Password";
  } else if (!passwordValid.test(formVar.password)) {
    return "password must have at least one uppercase and lowercase character,one number and special character!";
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
