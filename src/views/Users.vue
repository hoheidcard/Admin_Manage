<template>
  <section class="faq-page">
    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-help></icon-help>
              </div>
              <div class="titles">
                <div class="sub-title">Users : List</div>
                <h5 class="main-title">Users List</h5>
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
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>CreatedAt</th>
                <th class="text-center">Action</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.data" :key="index">
                  <!-- <td>{{ index + 1 }}</td> -->
                  <td><img :src="`${item.image}?width=50`" alt="" /></td>
                  <td>{{ item.firstName }} {{ item.lastName }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.account.phoneNumber }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ getDate(item.createdAt) }}</td>
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
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, watch } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Users);

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
  title: null,
  desc: null,
  image: null,
  file: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getUsers();
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
      getUsers();
    }, formVar.typingDelay);
  }
);
/* Search Function */

/* Functions/Methods */
function getUsers() {
  store.dispatch("Users/getUsers", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
  });
}
const pageChange = (page) => {
  formVar.currentPage = page;
  formVar.offset = formVar.limit * (page - 1);
  getUsers();
};

function getDate(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY");
  }
  return "-";
}

/* Functions/Methods */
/* Validation */
/* Validation */
</script>

<style></style>
