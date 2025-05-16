<template>
  <section class="faq-page">
    <input
      name="image"
      type="file"
      id="file-field1"
      v-on:change="updatePreview1"
      style="display: none"
    />

    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-help></icon-help>
              </div>
              <div class="titles">
                <div class="sub-title">Product : List</div>
                <h5 class="main-title">Product List</h5>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input
                type="text"
                v-model="formVar.keyword"
                placeholder="Search here"
              />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            <div class="searchbar">
              <div class="select-dropdown">
                <select
                  name=""
                  id=""
                  v-model="formVar.status"
                  @change="statusChangeSearch"
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DEACTIVE">DEACTIVE</option>
                </select>
              </div>
            </div>
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Product</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Dis.</th>
                <th>Total</th>
                <th>P. Dis.</th>
                <th>A Dis.</th>
                <th>Status</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.code }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.discount }}</td>
                  <!-- <td>{{ item.discountedPrice }}</td> -->
                  <td>{{ item.finalPrice }}</td>
                  <td>{{ item.partnerDiscount }}</td>
                  <td>{{ item.additionalDiscount }}</td>
                  <td>{{ item.status }}</td>
                  <td>
                    <div class="option-btns">
                      <div
                        class="icon tooltip-wrapper"
                        @click="openEditModal(item)"
                      >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <router-link
                        :to="{
                          path: '/crm/editor',
                          query: { id: item.id, from: 'Editor' },
                        }"
                        class="icon tooltip-wrapper"
                      >
                        <icon-image-edit></icon-image-edit>
                        <div class="tooltip">Editor</div>
                      </router-link>
                      <div
                        class="icon tooltip-wrapper"
                        @click="openImageModal(item.productImage)"
                      >
                        <icon-card></icon-card>
                        <div class="tooltip">Image</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click="openUpload1(item.id)"
                      >
                        <icon-top-arrow></icon-top-arrow>
                        <div class="tooltip">Upload</div>
                      </div>
                      <div
                        class="icon tooltip-wrapper"
                        @click.prevent="openStatusModal(item.id, item.status)"
                      >
                        <icon-setting></icon-setting>
                        <div class="tooltip">Status Change</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data" v-if="storeVar.data?.length <= 0">
            <div>No records Found!</div>
          </div>
          <div class="table-footer" v-if="storeVar.data?.length > 0">
            <Pagination
              :currentPage="formVar.currentPage"
              :totalItem="storeVar.total"
              :itemsPerPage="formVar.limit"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Faq Add Modal  -->
    <Modal
      v-model:show="storeVar.addModal"
      class="faq-modal"
      type="full"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Product" : "Add Product" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="form mb-16">
        <div class="row">
          <div class="form-item mb-16">
            <div class="title">Title</div>
            <input
              type="text"
              v-model="formVar.title"
              placeholder="Enter title"
              maxlength="200"
            />
            <div class="err-msg" v-if="formVar.submit && titleValid">
              {{ titleValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Code</div>
            <input
              type="text"
              v-model="formVar.code"
              placeholder="Enter Code"
              maxlength="100"
            />
            <div class="err-msg" v-if="formVar.submit && codeValid">
              {{ codeValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Price</div>
            <input
              type="text"
              v-model="formVar.price"
              placeholder="Enter Price"
              @keydown="isNumber($event)"
              maxlength="5"
              @change="onChangeAmount"
            />
            <div class="err-msg" v-if="formVar.submit && priceValid">
              {{ priceValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Discount</div>
            <input
              type="text"
              v-model="formVar.discount"
              placeholder="Enter Discount"
              @keydown="isNumber($event)"
              @change="onChangeAmount"
              maxlength="2"
            />
            <div class="err-msg" v-if="formVar.submit && discountValid">
              {{ discountValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <div class="title">Discounted Price</div>
            <input type="text" v-model="formVar.discountedPrice" />
          </div>
          <div class="form-item mb-16">
            <div class="title">Final Price</div>
            <input
              type="text"
              v-model="formVar.finalPrice"
              placeholder="Enter Code"
            />
          </div>
          <div class="form-item mb-16">
            <div class="title">Partner Discount</div>
            <input
              type="text"
              v-model="formVar.partnerDiscount"
              placeholder="Enter Price"
              @keydown="isNumber($event)"
              maxlength="2"
            />
            <div class="err-msg" v-if="formVar.submit && partnerDiscountValid">
              {{ partnerDiscountValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Additional Discount</div>
            <input
              type="text"
              v-model="formVar.additionalDiscount"
              placeholder="Enter Discount"
              @keydown="isNumber($event)"
              maxlength="2"
            />
            <div
              class="err-msg"
              v-if="formVar.submit && additionalDiscountValid"
            >
              {{ additionalDiscountValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            <div class="title">Short Description</div>
            <input type="text" v-model="formVar.shortDesc" maxlength="200" />
            <div class="err-msg" v-if="formVar.submit && shortDescValid">
              {{ shortDescValid }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="form-item mb-16">
            Variants
            <button
              style="width: 20px; height: 20px"
              @click.prevent="pushVariant"
            >
              +
            </button>
          </div>
        </div>
        <div
          class="row"
          v-for="(item, index) in formVar.productVariant"
          :key="index"
        >
          <div class="col-4 form-item mb-16">
            <div class="title">Variant Type</div>
            <select class="select" v-model="item.type">
              <option value="null" disabled>Select Variant</option>
              <option v-for="(row, i) in variantTypes" :key="i" :value="row.id">
                {{ row.id }}
              </option>
            </select>
          </div>
          <div class="form-item mb-16">
            <div class="title">Name</div>
            <input type="text" v-model="item.name" maxlength="100" />
          </div>
          <div class="col-1 form-item mb-16">
            <div class="title">Action</div>
            <button
              style="width: 40px; height: 40px"
              @click.prevent="removeVariant(index)"
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div class="form-item mb-16">
        <div class="title">Description</div>
        <QuillEditor
          v-model:content="formVar.desc"
          ref="targetElement"
          content-type="html"
          theme="snow"
          toolbar="full"
        />
        <div class="err-msg" v-if="formVar.submit && descValid">
          {{ descValid }}
        </div>
      </div>

      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.addModal = false">
            Cancel
          </div>
          <div class="btn white-btn" @click="addIdCardStock">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- Status Modal -->

    <Modal
      v-model:show="storeVar.statusModal"
      class="status-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Change Status</div>
        <div class="close-btn" @click.prevent="storeVar.statusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="status-row">
        <label for="approve" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="ACTIVE"
            id="approve"
            name="status"
          />
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">ACTIVE</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="PENDING"
            id="pending"
            name="status"
          />
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">PENDING</div>
          </div>
        </label>
        <label for="block" class="data">
          <input
            type="radio"
            v-model="formVar.changeStatus"
            value="DEACTIVE"
            id="block"
            name="status"
          />
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">DEACTIVE</div>
          </div>
        </label>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar.statusModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="submitStatus">Submit</div>
        </div>
      </div>
    </Modal>

    <!-- modals -->
    <Modal
      v-model:show="storeVar.imageModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Upload Product Image</div>
        <div class="close-btn" @click.prevent="storeVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="image-container">
        <div
          class="card image-card"
          v-for="(item, i) in formVar.productImages"
          :key="i"
        >
          <img :src="item.file" :alt="item.file" />
          <div class="btn red-btn" @click.prevent="deleteProductImage(item)">
            Delete
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="storeVar.imageModal = false">
            Cancel
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const storeVar = computed(() => store.state.IdCardStock);

const variantTypes = [
  { id: "SIZE", name: "SIZE" },
  { id: "PRODUCT COLOR", name: "PRODUCT COLOR" },
  { id: "MATERIAL", name: "MATERIAL" },
  { id: "STYLE", name: "STYLE" },
  { id: "WEIGHT", name: "WEIGHT" },
  { id: "LENGTH", name: "LENGTH" },
  { id: "WIDTH", name: "WIDTH" },
  { id: "HEIGHT", name: "HEIGHT" },
  { id: "TYPE", name: "TYPE" },
  { id: "DIRECTION", name: "DIRECTION" },
  { id: "PRINTING", name: "PRINTING" },
  { id: "PRINTING COLOR", name: "PRINTING COLOR" },
  { id: "PRINTABLE", name: "PRINTABLE" },
  { id: "LAMINATION", name: "LAMINATION" },
];

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: "ACTIVE",
  changeStatus: null,
  currentPage: 1,
  editMode: false,

  typingTimer: null,
  typingDelay: 500,

  id: null,
  image: null,
  file: null,

  code: null,
  title: null,
  shortDesc: null,
  desc: null,
  price: 0,
  discount: 0,
  discountedPrice: 0,
  finalPrice: 0,
  partnerDiscount: 0,
  additionalDiscount: 0,
  productVariant: [],
  categoryId: null,

  productImages: [],
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getIdCardStocks();
});
/* Lifecycle/Hooks */

/* Search Function */
watch(
  () => formVar.keyword,
  () => {
    clearTimeout(formVar.typingTimer);
    // Start a new timer
    formVar.typingTimer = setTimeout(() => {
      formVar.limit = 10;
      formVar.offset = 0;
      formVar.currentPage = 1;
      getIdCardStocks();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
const pushVariant = () => {
  const variantForm = {
    name: null,
    type: null,
  };

  formVar.productVariant.push(variantForm);
};

const removeVariant = (index) => {
  formVar.productVariant.splice(index, 1);
};

function getIdCardStocks() {
  store.dispatch("IdCardStock/getIdCardStocksByStatus", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    status: formVar.status,
  });
}
function openAddModal() {
  storeVar.value.addModal = true;
  formVar.editMode = false;
  formVar.title = null;
  formVar.code = null;
  formVar.title = null;
  formVar.shortDesc = null;
  formVar.desc = null;
  formVar.price = 0;
  formVar.discount = 0;
  formVar.discountedPrice = 0;
  formVar.finalPrice = 0;
  formVar.partnerDiscount = 0;
  formVar.additionalDiscount = 0;
  formVar.productVariant = [];
}
function openEditModal(item) {
  storeVar.value.addModal = true;
  formVar.editMode = true;
  formVar.id = item.id;
  formVar.title = item.title;

  formVar.code = item.code;
  formVar.title = item.title;
  formVar.shortDesc = item.shortDesc;
  formVar.desc = item.desc;
  formVar.price = item.price;
  formVar.discount = item.discount;
  formVar.discountedPrice = item.discountedPrice;
  formVar.finalPrice = item.finalPrice;
  formVar.partnerDiscount = item.partnerDiscount;
  formVar.additionalDiscount = item.additionalDiscount;
  formVar.productVariant = item.productVariant;
  formVar.categoryId = item.categoryId;
}
function openStatusModal(id, status) {
  formVar.changeStatus = status;
  formVar.id = id;
  storeVar.value.statusModal = true;
}

function openImageModal(images) {
  storeVar.value.imageModal = true;
  formVar.productImages = images;
}

function addIdCardStock() {
  if (
    titleValid.value ||
    codeValid.value ||
    descValid.value ||
    shortDescValid.value ||
    priceValid.value ||
    discountValid.value ||
    partnerDiscountValid.value ||
    additionalDiscountValid.value
  ) {
    formVar.submit = true;
    return;
  }
  formVar.submit = false;
  if (!formVar.editMode) {
    store.dispatch("IdCardStock/createIdCardStock", {
      code: formVar.code,
      title: formVar.title,
      shortDesc: formVar.shortDesc,
      desc: formVar.desc,
      price: formVar.price,
      discount: formVar.discount,
      discountedPrice: formVar.discountedPrice,
      finalPrice: formVar.finalPrice,
      partnerDiscount: formVar.partnerDiscount,
      additionalDiscount: formVar.additionalDiscount,
      productVariant: formVar.productVariant,
      categoryId: route.query.id,
    });
  } else {
    store.dispatch("IdCardStock/updateIdCardStock", {
      id: formVar.id,
      code: formVar.code,
      title: formVar.title,
      shortDesc: formVar.shortDesc,
      desc: formVar.desc,
      price: formVar.price,
      discount: formVar.discount,
      discountedPrice: formVar.discountedPrice,
      finalPrice: formVar.finalPrice,
      partnerDiscount: formVar.partnerDiscount,
      additionalDiscount: formVar.additionalDiscount,
      productVariant: formVar.productVariant,
      categoryId: route.query.id,
    });
  }
}

function submitStatus() {
  if (formVar.id && formVar.changeStatus) {
    store.dispatch("IdCardStock/updateIdCardStockStatus", {
      id: formVar.id,
      status: formVar.changeStatus,
    });
  }
}

function submitImage() {
  if (formVar.id && formVar.file) {
    store.dispatch("IdCardStock/updateIdCardStockImage", {
      id: formVar.id,
      file: formVar.file,
    });
  }
}

const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getIdCardStocks();
};

function statusChangeSearch() {
  getIdCardStocks();
}

function openUpload1(id) {
  formVar.id = id;
  document.getElementById("file-field1").click();
}

function deleteProductImage(item) {
  store.dispatch("IdCardStock/deleteIdCardStockImage", {
    id: item.id,
    rowId: item.idCardsStockId,
  });
}

const convertFileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

async function updatePreview1(e) {
  const files = e.target.files;
  const file = files[0];

  const image = await convertFileToDataURL(file);

  // Dispatch the action with the file and the image data URL
  await store.dispatch("IdCardStock/uploadIdCardStockImage", {
    id: formVar.id,
    file: file,
    image: image,
  });

  // Clear the file input
  e.target.value = null;
}

const onChangeAmount = computed(() => {
  formVar.discountedPrice = formVar.price * formVar.discount * 0.01;
  formVar.finalPrice = formVar.price - formVar.discountedPrice;
});

/* Functions/Methods */
/* Validation */
const titleValid = computed(() => {
  if (!formVar.title) {
    return "Please Enter title";
  }
});

const descValid = computed(() => {
  if (!formVar.desc) {
    return "Please Enter Desc";
  }
});

const codeValid = computed(() => {
  if (!formVar.code) {
    return "Please Enter Code";
  }
});

const shortDescValid = computed(() => {
  if (!formVar.shortDesc) {
    return "Please Enter Short Desc.";
  }
});

const priceValid = computed(() => {
  if (!formVar.price) {
    return "Please Enter Price";
  } else if (isNaN(formVar.price)) {
    return "Please Enter Number Only";
  } else if (formVar.price < 0) {
    return "Please Enter Valid Amount";
  }
});

const discountValid = computed(() => {
  if (!formVar.discount) {
    return "Please Enter Discount";
  } else if (isNaN(formVar.discount)) {
    return "Please Enter Number Only";
  } else if (formVar.discount < 0 || formVar.discount > 100) {
    return "Please Enter Valid Discount";
  }
});

const partnerDiscountValid = computed(() => {
  if (isNaN(formVar.partnerDiscount)) {
    return "Please Enter Number Only";
  } else if (formVar.partnerDiscount < 0 || formVar.partnerDiscount > 100) {
    return "Please Enter Valid Discount";
  }
});

const additionalDiscountValid = computed(() => {
  if (isNaN(formVar.additionalDiscount)) {
    return "Please Enter Number Only";
  } else if (
    formVar.additionalDiscount < 0 ||
    formVar.additionalDiscount > 100
  ) {
    return "Please Enter Valid Discount";
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
</script>

<style>
.select {
  width: 100% !important;
  padding: 10px;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 16px;
  color: #333;
  appearance: none; /* Remove default arrow */
  -webkit-appearance: none; /* Remove default arrow for Safari */
  -moz-appearance: none; /* Remove default arrow for Firefox */
  background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCAxMCI+PHBhdGggZD0iTSA1IDcgTCAxMCAyIEwgMCAyIFoiIC8+PC9zdmc+");
  background-repeat: no-repeat; /* No repeat for the icon */
  background-position: right 10px center; /* Position of the icon */
  background-size: 12px; /* Size of the icon */
}

option {
  align-items: stretch;
  background-color: #fff;
  color: #333;
  padding: 10px;
}
.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px; /* Optional: Adds space between items */
}

.image-card {
  width: 145px; /* Fixed width for each card */
  height: auto; /* Adjust height based on content */
  flex: 0 0 auto; /* Prevent the flex items from growing or shrinking */
}

.image-card img {
  width: 100%; /* Ensure the image takes the full width of the card */
  height: auto; /* Maintain aspect ratio */
}
</style>
