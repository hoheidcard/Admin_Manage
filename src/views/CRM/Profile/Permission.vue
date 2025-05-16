<template>
  <section class="teacher-permission-page">
    <!-- <section class="permission-page user-profile"> -->
      <div class="table-body p-16">
          <section class="permission-page user-profile">
            <div class="title text-primary top-header">
              <div class="title">Permission</div>
              <div class="title">All</div>
              <div class="title">Create</div>
              <div class="title">Read</div>
              <div class="title">Update</div>
              <div class="title">Delete</div>
            </div>
            <div class="per-table" v-for="(item, index) in storeVar.permissiondata" :key="index">
              <div class="left-title">
                <div class="title">{{ item.title }}</div>
              </div>
              <div class="right-permissions">
                <div class="input-row">
                  <div class="toggle-input">
                    <p>All</p>
                    <label class="toggle-control">
                      <input type="checkbox" v-model="item.allStatus" disabled>
                      <span class="control"></span>
                    </label>
                  </div>
                </div>
                <div class="input-row" v-for="(perms, permsIndex) in item.userPermission" :key="permsIndex">
                  <div class="toggle-input">
                    <p>{{ perms.permission?.name }}</p>
                    <label class="toggle-control">
                      <input type="checkbox" v-model="perms.status" disabled>
                      <span class="control"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    <!-- </section> -->
  </section>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

/* Constants */
const store = useStore();
const route = useRoute();
const router = useRouter();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({

});

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  getProfile()
})
/* Lifecycle/Hooks */
/* Functions/Methods */
function getProfile() {
  store.dispatch("Auth/getProfile");
}

/* Functions/Methods */

/* Search Function */
/* Search Function */

/* Validation */

/* Validation */
</script>

<style></style>
