<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Add Partners</h3>
        </div>
        <form class="form mb-16">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Login Id</div>
              <input
                type="text"
                v-model="formVar.phoneNumber"
                placeholder="Login Id"
                maxlength="10"
                disabled
              />
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Firm Name</div>
              <input
                type="text"
                v-model="formVar.firmName"
                placeholder="Enter Name"
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && nameValid">
                {{ nameValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Office Email</div>
              <input
                type="text"
                v-model="formVar.firmEmail"
                placeholder="Enter E-mail "
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && emailValid">
                {{ emailValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Phone Number</div>
              <input
                type="text"
                v-model="formVar.phoneNumber"
                placeholder="Enter phone Number"
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
              <div class="title">Owner Mobile</div>
              <input
                type="text"
                v-model="formVar.ownerMobile"
                placeholder="Enter Contact Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && ownerMobileValid">
                {{ ownerMobileValid }}
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
            <div class="form-item mb-16 col-5">
              <div class="title">Owner Email</div>
              <input
                type="text"
                v-model="formVar.ownerEmail"
                placeholder="Enter Owner Email"
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && ownerEmailValid">
                {{ ownerEmailValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Owner WhatsApp</div>
              <input
                type="text"
                v-model="formVar.ownerWhatsApp"
                placeholder="Enter WhatsApp Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && whatsAppValid">
                {{ whatsAppValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Website</div>
              <input
                type="text"
                v-model="formVar.website"
                placeholder="Enter website URL"
                maxlength="100"
              />
              <!-- <div class="err-msg" v-if="formVar.submit && websiteValid">
                {{ websiteValid }}
              </div> -->
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
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Address</div>
              <textarea
                name=""
                id=""
                v-model="formVar.firmAddress"
                rows="4"
                placeholder="Address"
                maxlength="200"
              ></textarea>
              <div class="err-msg" v-if="formVar.submit && addressValid">
                {{ addressValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Nature Of Business</div>
              <textarea
                name=""
                id=""
                v-model="formVar.natureOfBusiness"
                rows="4"
                placeholder="Nature Of Business"
                maxlength="500"
              ></textarea>
              <div
                class="err-msg"
                v-if="formVar.submit && natureOfBusinessValid"
              >
                {{ natureOfBusinessValid }}
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="w-30 flex gap-10">
              <button
                class="btn white-btn w-full"
                type="button"
                @click.prevent="addPartners"
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
  firmName: null,
  firmEmail: null,
  ownerName: null,
  ownerMobile: null,
  ownerEmail: null,
  ownerWhatsApp: null,
  natureOfBusiness: null,
  website: null,
  gstDetail: null,
  firmShort: null,
  firmAddress: null,
  state: null,
  city: null,
  pincode: null,
  roles: "PARTNER",
  singleMultiType: "SINGLE",
});
/* Constants */

/* Lifecycle/Hooks */

/* Lifecycle/Hooks */

function addPartners() {
  if (
    nameValid.value ||
    emailValid.value ||
    phoneValid.value ||
    ownerMobileValid.value ||
    whatsAppValid.value ||
    stateValid.value ||
    cityValid.value ||
    ownerNameValid.value ||
    pincodeValid.value ||
    addressValid.value ||
    singleMultiTypeValid.value ||
    accountTypeValid.value ||
    ownerEmailValid.value ||
    // websiteValid.value ||
    natureOfBusinessValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Partners/addPartners", {
    phoneNumber: formVar.phoneNumber,
    firmName: formVar.firmName,
    firmEmail: formVar.firmEmail,
    ownerName: formVar.ownerName,
    ownerMobile: formVar.ownerMobile,
    ownerEmail: formVar.ownerEmail,
    ownerWhatsApp: formVar.ownerWhatsApp,
    natureOfBusiness: formVar.natureOfBusiness,
    website: formVar.website,
    gstDetail: formVar.gstDetail,
    firmShort: formVar.firmShort,
    firmAddress: formVar.firmAddress,
    state: formVar.state,
    city: formVar.city,
    pincode: formVar.pincode,
    roles: formVar.roles,
    singleMultiType: formVar.singleMultiType,
  });
}
function resetForm() {
  formVar.phoneNumber = null;
  formVar.firmName = null;
  formVar.firmEmail = null;
  formVar.ownerName = null;
  formVar.ownerMobile = null;
  formVar.ownerEmail = null;
  formVar.ownerWhatsApp = null;
  formVar.natureOfBusiness = null;
  formVar.website = null;
  formVar.gstDetail = null;
  formVar.firmShort = null;
  formVar.firmAddress = null;
  formVar.state = null;
  formVar.city = null;
  formVar.pincode = null;
  formVar.roles = "PARTNER";
  formVar.singleMultiType = "SINGLE";
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!formVar.firmName) {
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
  if (!formVar.firmEmail) {
    return "Please Enter Email!";
  } else if (!emailValid.test(formVar.firmEmail)) {
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
const ownerEmailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!formVar.ownerEmail) {
    return "Please Enter Email!";
  } else if (!emailValid.test(formVar.ownerEmail)) {
    return "Please Enter Valid Email!";
  }
});

const ownerMobileValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.ownerMobile) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(formVar.ownerMobile)) {
    return "Please Enter Valid Number!";
  }
});
const whatsAppValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!formVar.ownerWhatsApp) {
    return "Please Enter WhatsApp Number!";
  } else if (!phoneValid.test(formVar.ownerWhatsApp)) {
    return "Please Enter Valid Number!";
  }
});
const websiteValid = computed(() => {
  if (!formVar.website) {
    return "Please Enter website url";
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
const natureOfBusinessValid = computed(() => {
  if (!formVar.natureOfBusiness) {
    return "Please Enter Nature Of Business";
  }
});
const addressValid = computed(() => {
  if (!formVar.firmAddress) {
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
const accountTypeValid = computed(() => {
  if (!formVar.roles) {
    return "Please Select Account Type";
  }
});
const singleMultiTypeValid = computed(() => {
  if (!formVar.singleMultiType) {
    return "Please Select Organization Type";
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
}
/* Validation */
</script>

<style></style>
