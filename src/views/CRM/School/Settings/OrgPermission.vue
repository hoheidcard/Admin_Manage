<template>
  <section class="user-activity user-profile">
    <div class="table-card">
      <div class="table-header">
        <div class="left">
          <div class="title-row">
            <div class="icon">
              <icon-permission></icon-permission>
            </div>
            <div class="titles">
              <div class="sub-title">Permission : List</div>
              <h5 class="main-title">Permission</h5>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="searchbar">
            <span>All</span>
          </div>
          <div class="searchbar">
            <div class="toggle-input">
              <label class="toggle-control">
                <input
                  type="checkbox"
                  v-model="formVar.all"
                  @change="selectAll"
                />
                <span class="control"></span>
              </label>
            </div>
          </div>
          <div class="btns justify-end">
            <div class="btn white-btn" @click="updatePermission">
              Save Changes
            </div>
          </div>
        </div>
      </div>
      <div class="table-body mt-16">
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
            v-for="(item, index) in storeVar.orgPermissionData"
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
        <div class="btns justify-end mt-10">
          <div class="btn white-btn" @click="updatePermission">
            Save Changes
          </div>
        </div>
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
  staffId: null,
  staffAccountId: null,
  allStatus: false,
  all: false,
});

/* Constants */

/* Lifecycle/Hooks */

/* Lifecycle/Hooks */

/* Search Function */
/* Search Function */
/* Functions/Methods */

function updatePermission() {
  store.dispatch("Staff/updatePermission", {
    menu: storeVar.value.orgPermissionData,
  });
}
function checkedAll(id, status) {
  const objIndex = storeVar.value.orgPermissionData.findIndex(
    (obj) => obj.id === id
  );
  if (objIndex >= 0) {
    let userPerms = storeVar.value.orgPermissionData[objIndex].userPermission;
    userPerms.forEach((element) => {
      element.status = status;
    });
  }
}
function checkedAllOrNot(id) {
  const objIndex = storeVar.value.orgPermissionData.findIndex(
    (obj) => obj.id === id
  );
  if (objIndex >= 0) {
    let userPerms = storeVar.value.orgPermissionData[objIndex].userPermission;
    const allTrue = userPerms.every((obj) => obj.status === true);
    storeVar.value.orgPermissionData[objIndex].allStatus = allTrue;
  }
}
function selectAll() {
  if (formVar.all) {
    storeVar.value.orgPermissionData.forEach((element) => {
      element.allStatus = true;
      element.userPermission.forEach((item) => {
        item.status = true;
      });
    });
  } else {
    storeVar.value.orgPermissionData.forEach((element) => {
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
