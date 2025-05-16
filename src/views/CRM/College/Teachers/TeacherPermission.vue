<template>
  <section class="teacher-permission-page">
    <section class="permission-page user-profile">
      <div class="title text-primary top-header">
        <div class="title">Permission</div>
        <div class="title">All</div>
        <div class="title">Create</div>
        <div class="title">Read</div>
        <div class="title">Update</div>
        <div class="title">Delete</div>
      </div>
      <div
        class="per-table"
        v-for="(item, index) in storeVar.permissiondata"
        :key="index"
      >
        <div class="left-title">
          <div class="title">{{ item.title }}</div>
        </div>
        <div class="right-permissions">
          <div class="input-row">
            <div class="toggle-input">
              <p>All</p>
              <label class="toggle-control">
                <input
                  type="checkbox"
                  v-model="item.allStatus"
                  @change="checkedAll(item.id, item.allStatus)"
                />
                <span class="control"></span>
              </label>
            </div>
          </div>
          <div
            class="input-row"
            v-for="(perms, permsIndex) in item.userPermission"
            :key="permsIndex"
          >
            <div class="toggle-input">
              <p>{{ perms.permission?.name }}</p>
              <label class="toggle-control">
                <input
                  type="checkbox"
                  v-model="perms.status"
                  @change="checkedAllOrNot(item.id)"
                />
                <span class="control"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="btns justify-center mt-16">
      <div class="btn white-btn" @click="updatePermission">Save</div>
    </div>
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
const storeVar = computed(() => store.state.Staff);

const formVar = reactive({
  staffId: null,
  staffAccountId: null,
  allStatus: false,
  all: false,
});

/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.id) {
    formVar.staffAccountId = route.query.id;
    getOneStaff();
  }
});
/* Lifecycle/Hooks */

/* Search Function */
/* Search Function */
/* Functions/Methods */
function getOneStaff() {
  store.dispatch("Staff/getOneStaff", { id: formVar.staffAccountId });
}

function updatePermission() {
  store.dispatch("Staff/updatePermission", {
    menu: storeVar.value.permissiondata,
  });
}
function checkedAll(id, status) {
  const objIndex = storeVar.value.permissiondata.findIndex(
    (obj) => obj.id === id
  );
  if (objIndex >= 0) {
    let userPerms = storeVar.value.permissiondata[objIndex].userPermission;
    userPerms.forEach((element) => {
      element.status = status;
    });
  }
}
function checkedAllOrNot(id) {
  const objIndex = storeVar.value.permissiondata.findIndex(
    (obj) => obj.id === id
  );
  if (objIndex >= 0) {
    let userPerms = storeVar.value.permissiondata[objIndex].userPermission;
    const allTrue = userPerms.every((obj) => obj.status === true);
    storeVar.value.permissiondata[objIndex].allStatus = allTrue;
  }
}
function selectAll() {
  if (formVar.all) {
    storeVar.value.permissiondata.forEach((element) => {
      element.allStatus = true;
      element.userPermission.forEach((item) => {
        item.status = true;
      });
    });
  } else {
    storeVar.value.permissiondata.forEach((element) => {
      element.allStatus = false;
      element.userPermission.forEach((item) => {
        item.status = false;
      });
    });
  }
}

/* Functions/Methods */
/* Validation */

/* Validation */
</script>

<style></style>
