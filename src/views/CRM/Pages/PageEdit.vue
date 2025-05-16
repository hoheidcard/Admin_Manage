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
                <div class="sub-title">Pages : Update</div>
                <h5 class="main-title">{{ storeVar.title }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <QuillEditor v-model:content="storeVar.desc" ref="targetElement" content-type="html" theme="snow"
              toolbar="full" />
          </div>
          <div class="flex justify-center text-center">
            <div class="btns">
              <div class="btn white-btn" @click="submitPage">Submit</div>
            </div>
          </div>
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
  pageId: null,
})
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.pageId = route.query.id
    getPageDetails()
  }
})
/* Lifecycle/Hooks */
/* Functions/Methods */
function getPageDetails() {
  store.dispatch("Page/getPageDetails", { id: formVar.pageId });
}
function submitPage() {
  store.dispatch("Page/updatePage", { 
    id: formVar.pageId,
    desc:storeVar.value.desc 
  });
}
/* Functions/Methods */

</script>

<style></style>