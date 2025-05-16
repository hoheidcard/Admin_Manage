<template>
  <section class="users-list-page">
    <div class="container">
      <div class="card table-card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="titles">
                <div class="sub-title">Pages : List</div>
                <h5 class="main-title">Our Pages</h5>
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
                <th class="text-center">Actions</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in storeVar.pageData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.title }}</td>
                  <td>
                    <div class="option-btns">
                      <div class="icon tooltip-wrapper" @click="navigate(item.id, '/crm/pages/edit')">
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <div class="table-no-data">
            <div>No records Found!</div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router"

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.Page);

const formVar = reactive({
  confirmModal: false,
  addModal: false,
  editModal: false,
})
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getPage()
})
/* Lifecycle/Hooks */
/* Functions/Methods */
function getPage() {
  store.dispatch("Page/getPage");
}
function navigate(id, link) {
  storeVar.value.desc=null
  router.push({ path: link, query: { id:id } })
}
/* Functions/Methods */

</script>

<style></style>