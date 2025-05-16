<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Edit Sub Partners</h3>
        </div>
        <form class="form mb-16">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Firm Name</div>
              <input
                type="text"
                v-model="storeVar.firmName"
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
                v-model="storeVar.firmEmail"
                placeholder="Enter E-mail "
                maxlength="30"
              />
              <div class="err-msg" v-if="formVar.submit && emailValid">
                {{ emailValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Owner Mobile</div>
              <input
                type="text"
                v-model="storeVar.ownerMobile"
                placeholder="Enter Contact Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && ownerMobileValid">
                {{ ownerMobileValid }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Owner Name</div>
              <input
                type="text"
                v-model="storeVar.ownerName"
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
                v-model="storeVar.ownerEmail"
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
                v-model="storeVar.ownerWhatsApp"
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
                v-model="storeVar.website"
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
                v-model="storeVar.state"
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
                v-model="storeVar.city"
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
                v-model="storeVar.pincode"
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
                v-model="storeVar.firmAddress"
                rows="4"
                placeholder="Address"
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
                v-model="storeVar.natureOfBusiness"
                rows="4"
                placeholder="Nature Of Business"
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
                @click.prevent="editPartners"
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
import { computed, onBeforeMount, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Partners);

const formVar = reactive({
  submit: false,
  subPartnersAccountId: null,
  subPartnerId: null,

  roles: "PARTNER",
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.subPartnersAccountId = route.query.accountId;
    formVar.subPartnerId = route.query.id;
    getOnePartner();
  }
});
/* Lifecycle/Hooks */
function getOnePartner() {
  store.dispatch("Partners/getOnePartner", { id: formVar.subPartnerId });
}

function editPartners() {
  if (
    nameValid.value ||
    emailValid.value ||
    ownerMobileValid.value ||
    whatsAppValid.value ||
    stateValid.value ||
    cityValid.value ||
    ownerNameValid.value ||
    pincodeValid.value ||
    addressValid.value ||
    ownerEmailValid.value ||
    // websiteValid.value ||
    natureOfBusinessValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Partners/editPartners", {
    firmName: storeVar.value.firmName,
    firmEmail: storeVar.value.firmEmail,
    ownerName: storeVar.value.ownerName,
    ownerMobile: storeVar.value.ownerMobile,
    ownerEmail: storeVar.value.ownerEmail,
    ownerWhatsApp: storeVar.value.ownerWhatsApp,
    natureOfBusiness: storeVar.value.natureOfBusiness,
    website: storeVar.value.website,
    gstDetail: storeVar.value.gstDetail,
    firmShort: storeVar.value.firmShort,
    firmAddress: storeVar.value.firmAddress,
    state: storeVar.value.state,
    city: storeVar.value.city,
    pincode: storeVar.value.pincode,
    roles: formVar.roles,
    singleMultiType: storeVar.value.singleMultiType,
    id: formVar.subPartnerId,
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
  if (!storeVar.value.firmName) {
    return "Please Enter Name";
  }
});
const ownerNameValid = computed(() => {
  if (!storeVar.value.ownerName) {
    return "Please Enter Owner Name";
  }
});
const emailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!storeVar.value.firmEmail) {
    return "Please Enter Email!";
  } else if (!emailValid.test(storeVar.value.firmEmail)) {
    return "Please Enter Valid Email!";
  }
});
const phoneValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.phoneNumber) {
    return "Please Enter Phone Number!";
  } else if (!phoneValid.test(storeVar.value.phoneNumber)) {
    return "Please Enter Valid Phone Number!";
  }
});
const ownerEmailValid = computed(() => {
  let emailValid = /^([a-z0-9.-]+)@([a-z]{4,12}).([a-z.]{2,20})$/;
  if (!storeVar.value.ownerEmail) {
    return "Please Enter Email!";
  } else if (!emailValid.test(storeVar.value.ownerEmail)) {
    return "Please Enter Valid Email!";
  }
});

const ownerMobileValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.ownerMobile) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(storeVar.value.ownerMobile)) {
    return "Please Enter Valid Number!";
  }
});
const whatsAppValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.ownerWhatsApp) {
    return "Please Enter WhatsApp Number!";
  } else if (!phoneValid.test(storeVar.value.ownerWhatsApp)) {
    return "Please Enter Valid Number!";
  }
});
const websiteValid = computed(() => {
  if (!storeVar.value.website) {
    return "Please Enter website url";
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
const natureOfBusinessValid = computed(() => {
  if (!storeVar.value.natureOfBusiness) {
    return "Please Enter Nature Of Business";
  }
});
const addressValid = computed(() => {
  if (!storeVar.value.firmAddress) {
    return "Please Enter Address";
  }
});
const pincodeValid = computed(() => {
  if (!storeVar.value.pincode) {
    return "Please Select Pincode";
  }
});
const numberOfBranchValid = computed(() => {
  if (!storeVar.value.numberOfBranch) {
    return "Please Enter Number Of Branch";
  }
});
const accountTypeValid = computed(() => {
  if (!storeVar.value.roles) {
    return "Please Select Account Type";
  }
});
const singleMultiTypeValid = computed(() => {
  if (!storeVar.value.singleMultiType) {
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
} /* Validation */
</script>

<style></style>
