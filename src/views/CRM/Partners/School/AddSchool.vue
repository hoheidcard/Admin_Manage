<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Add School</h3>
        </div>
        <form class="form mb-16">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Login Id</div>
              <input
                type="text"
                v-model="formVar.contactNo"
                placeholder="Enter Login Id"
                maxlength="10"
                disabled
              />
              <!-- <div class="err-msg" v-if="formVar.submit && phoneValid">
                {{ phoneValid }}
              </div> -->
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Password</div>
              <input
                type="text"
                v-model="formVar.password"
                placeholder="Enter Password"
              />
              <div class="err-msg" v-if="formVar.submit && passwordValid">
                {{ passwordValid }}
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
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Email</div>
              <input
                type="text"
                v-model="formVar.email"
                placeholder="Enter E-mail "
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && emailValid">
                {{ emailValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Contact No</div>
              <input
                type="text"
                v-model="formVar.contactNo"
                placeholder="Enter Contact Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && contactNoValid">
                {{ contactNoValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Owner Name</div>
              <input
                type="text"
                v-model="formVar.ownerName"
                placeholder="Enter Woner Name"
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && ownerNameValid">
                {{ ownerNameValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">WhatsApp</div>
              <input
                type="text"
                v-model="formVar.whatsApp"
                placeholder="Enter WhatsApp Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && whatsAppValid">
                {{ whatsAppValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">State</div>
              <input
                type="text"
                v-model="formVar.state"
                placeholder="Enter State Name"
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && stateValid">
                {{ stateValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">City</div>
              <input
                type="text"
                v-model="formVar.city"
                placeholder="Enter City Name"
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && cityValid">
                {{ cityValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Pincode</div>
              <input
                type="text"
                v-model="formVar.pincode"
                placeholder="Enter Pincode"
                @keydown="isNumber($event)"
                maxlength="6"
              />
              <div class="err-msg" v-if="formVar.submit && pincodeValid">
                {{ pincodeValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Organization Type</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="formVar.singleMultiType">
                  <option :value="null">Select</option>
                  <option value="SINGLE">SINGLE</option>
                  <option value="MULTI">MULTI</option>
                </select>
              </div>
              <div
                class="err-msg"
                v-if="formVar.submit && singleMultiTypeValid"
              >
                {{ singleMultiTypeValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5" v-if="formVar.singleMultiType === 'MULTI'">
              <div class="title">Number Of Branch</div>
              <input
                type="text"
                v-model="formVar.numberOfBranch"
                placeholder="Enter Number Of Branch"
                @keydown="isNumber($event)"
                maxlength="6"
              />
              <div class="err-msg" v-if="formVar.submit && numberOfBranchValid">
                {{ numberOfBranchValid }}
              </div>
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
            ></textarea>
            <div class="err-msg" v-if="formVar.submit && addressValid">
              {{ addressValid }}
            </div>
          </div>
          <div class="card-footer">
            <div class="w-30 flex gap-10">
              <button
                class="btn white-btn w-full"
                type="button"
                @click.prevent="addOrganization"
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
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Organization);

const formVar = reactive({
  submit: false,
  organizationId: null,
  organizationAccountId: null,

  phoneNumber: null,
  singleMultiType: null,
  password: "AA12345",
  name: null,
  address: null,
  pincode: null,
  city: null,
  state: null,
  contactNo: null,
  whatsApp: null,
  email: null,
  ownerName: null,
  type: "MAIN",
  numberOfBranch: null,
});
/* Constants */

/* Lifecycle/Hooks */

/* Lifecycle/Hooks */

function addOrganization() {
  if (
    nameValid.value ||
    emailValid.value ||
    // phoneValid.value ||
    passwordValid.value ||
    contactNoValid.value ||
    whatsAppValid.value ||
    stateValid.value ||
    cityValid.value ||
    ownerNameValid.value ||
    pincodeValid.value ||
    addressValid.value ||
    singleMultiTypeValid.value
  ) {
    formVar.submit = true;
    return;
  }
  if (formVar.singleMultiType !== "MULTI") {
    formVar.numberOfBranch = 1;
  } else {
    if (numberOfBranchValid.value) {
      formVar.submit = true;
      return;
    }
  }
  formVar.submit = false;
  store.dispatch("Organization/addOrganizationByCreator", {
    creatorId: route.query.id,
    phoneNumber: formVar.contactNo,
    singleMultiType: formVar.singleMultiType,
    roles: "SCHOOL",
    password: formVar.password,
    name: formVar.name,
    address: formVar.address,
    pincode: formVar.pincode,
    city: formVar.city,
    stateName: formVar.state,
    contactNo: formVar.contactNo,
    whatsApp: formVar.whatsApp,
    email: formVar.email,
    ownerName: formVar.ownerName,
    type: formVar.type,
    numberOfBranch: formVar.numberOfBranch,
  });
}
function resetForm() {
  formVar.phoneNumber = null;
  formVar.singleMultiType = null;
  formVar.password = null;
  formVar.name = null;
  formVar.address = null;
  formVar.pincode = null;
  formVar.city = null;
  formVar.state = null;
  formVar.contactNo = null;
  formVar.whatsApp = null;
  formVar.email = null;
  formVar.ownerName = null;
  formVar.type = "MAIN";
  formVar.numberOfBranch = null;
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.name) {
    return "Please Enter Name";
  }
});
const ownerNameValid = computed(() => {
  if (!formVar.ownerName) {
    return "Please Enter Owner Name";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!formVar.email) {
    return "Please Enter Email!";
  } else if (!emailValid.test(formVar.email)) {
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

const contactNoValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.contactNo) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(formVar.contactNo)) {
    return "Please Enter Valid Number!";
  }
});
const whatsAppValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.whatsApp) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(formVar.whatsApp)) {
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
const numberOfBranchValid = computed(() => {
  if (!formVar.numberOfBranch) {
    return "Please Enter Number Of Branch";
  }
});
const singleMultiTypeValid = computed(() => {
  if (!formVar.singleMultiType) {
    return "Please Select Organization Type";
  }
});
const passwordValid = computed(() => {
  let passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
  if (!formVar.password) {
    return "Please Enter Password";
  }
  // else if (!passwordValid.test(formVar.password)) {
  //   return "password must have at least one uppercase and lowercase character,one number and special character!";
  // }
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
