<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Edit College</h3>
        </div>
        <form class="form mb-16">
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
              <div class="title">Email</div>
              <input
                type="text"
                v-model="storeVar.email"
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
                v-model="storeVar.contactNo"
                placeholder="Enter Contact Number"
                @keydown="isNumber($event)"
                maxlength="10"
              />
              <div class="err-msg" v-if="formVar.submit && contactNoValid">
                {{ contactNoValid }}
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
              <div class="title">WhatsApp</div>
              <input
                type="text"
                v-model="storeVar.whatsApp"
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
          </div>
          <div class="row">
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
            <div class="form-item mb-16 col-5">
              <div class="title">Organization Type</div>
              <div class="select-dropdown">
                <select name="" id="" v-model="storeVar.type">
                  <option :value="null">Select</option>
                  <option value="MAIN">MAIN</option>
                  <option value="BRANCH">BRANCH</option>
                </select>
              </div>
              <div class="err-msg" v-if="formVar.submit && typeValid">
                {{ typeValid }}
              </div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Number Of Branch</div>
              <input
                type="text"
                v-model="storeVar.numberOfBranch"
                placeholder="Enter Number Of Branch"
                @keydown="isNumber($event)"
                maxlength="3"
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
              v-model="storeVar.address"
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
                type="button"
                class="btn white-btn w-full"
                @click.prevent="updateOrganization"
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
import { computed, onBeforeMount, reactive } from "vue";
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
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.organizationId = route.query.id;
    getOneOrganization();
  }
});
/* Lifecycle/Hooks */

function getOneOrganization() {
  store.dispatch("Organization/getOneOrganization", {
    id: formVar.organizationId,
  });
}
function updateOrganization() {
  if (
    nameValid.value ||
    emailValid.value ||
    contactNoValid.value ||
    whatsAppValid.value ||
    stateValid.value ||
    cityValid.value ||
    ownerNameValid.value ||
    pincodeValid.value ||
    addressValid.value ||
    typeValid.value ||
    numberOfBranchValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  store.dispatch("Organization/updateOrganization", {
    id: formVar.organizationId,
    name: storeVar.value.name,
    address: storeVar.value.address,
    pincode: storeVar.value.pincode,
    city: storeVar.value.city,
    stateName: storeVar.value.state,
    contactNo: storeVar.value.contactNo,
    whatsApp: storeVar.value.whatsApp,
    email: storeVar.value.email,
    ownerName: storeVar.value.ownerName,
    type: storeVar.value.type,
    numberOfBranch: storeVar.value.numberOfBranch,
  });
}
function resetForm() {
  getOneOrganization();
  // storeVar.value.name=null
  // storeVar.value.address=null
  // storeVar.value.pincode=null
  // storeVar.value.city=null
  // storeVar.value.state=null
  // storeVar.value.contactNo=null
  // storeVar.value.whatsApp=null
  // storeVar.value.email=null
  // storeVar.value.ownerName=null
  // storeVar.value.type=null
  // storeVar.value.numberOfBranch=null
}
/* Functions/Methods */
/* Validation */
const nameValid = computed(() => {
  if (!storeVar.value.name) {
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
  if (!storeVar.value.email) {
    return "Please Enter Email!";
  } else if (!emailValid.test(storeVar.value.email)) {
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
const whatsAppValid = computed(() => {
  let phoneValid = /^[6-9][0-9]{9}$/;
  if (!storeVar.value.whatsApp) {
    return "Please Enter Contact Number!";
  } else if (!phoneValid.test(storeVar.value.whatsApp)) {
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
const typeValid = computed(() => {
  if (!storeVar.value.type) {
    return "Please Select Organization Type";
  }
});
const numberOfBranchValid = computed(() => {
  if (!storeVar.value.numberOfBranch) {
    return "Please Enter Number Of Branch";
  }
});
const accountTypeValid = computed(() => {
  if (!storeVar.value.accountType) {
    return "Please Select Account Type";
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
