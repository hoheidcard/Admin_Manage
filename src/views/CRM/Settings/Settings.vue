<template>
  <section class="user-settings-layout">
    <div class="container">
      <div class="setting-list-card card">
        <div class="setting-header">
          <div class="left">
            <div class="icon">
              <icon-setting></icon-setting>
            </div>
            <div class="heading">
              <div class="text text-grey text-small">Dashboard</div>
              <h5>Settings</h5>
            </div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search here">
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
          </div>
        </div>
        <div class="setting-list-body">
          <div class="list-item">
            <div class="title aa" @click.prevent="toggleList1">
              <div class="left">
                <icon-setting></icon-setting>
                <div class="text">Account Creation Admin </div>
              </div>
              <div class="arrow-icon">
                <icon-right-single-arrow v-if="!settingVar.list1"></icon-right-single-arrow>
                <icon-down-single-arrow v-if="settingVar.list1"></icon-down-single-arrow>
              </div>
            </div>
            <div class="sub-list" v-if="settingVar.list1">
              <router-link to="/crm/settings/schools" class="sub-list-item">
                <div class="text">School List</div>
              </router-link>
              <!-- <router-link to="/crm/settings/schools" class="sub-list-item">
                <div class="text">Create School</div>
              </router-link> -->
              <router-link to="/crm/settings/school-setting" class="sub-list-item">
                <div class="text">School Setting</div>
              </router-link>
              <router-link to="/crm/settings/create-class" class="sub-list-item">
                <div class="text">Create Department | Class | Section</div>
              </router-link>
              <router-link to="/crm/settings/houses" class="sub-list-item">
                <div class="text">Create Houses</div>
              </router-link>
              <router-link to="/crm/settings/map" class="sub-list-item">
                <div class="text">Map Everything</div>
              </router-link>
            </div>
          </div>
          <div class="list-item">
            <div class="title aa" @click.prevent="toggleList2">
              <div class="left">
                <icon-setting></icon-setting>
                <div class="text">Teacher Setting </div>
              </div>
              <div class="arrow-icon">
                <icon-right-single-arrow v-if="!settingVar.list2"></icon-right-single-arrow>
                <icon-down-single-arrow v-if="settingVar.list2"></icon-down-single-arrow>
              </div>
            </div>
            <div class="sub-list" v-if="settingVar.list2">
              <router-link to="/crm/settings/teachers" class="sub-list-item">
                <div class="text">Teacher List</div>
              </router-link>
              <!-- <router-link to="/crm/settings/teachers" class="sub-list-item">
                <div class="text">Create Teacher</div>
              </router-link> -->
            </div>
          </div>
          <div class="list-item">
            <div class="title aa" @click.prevent="toggleList3">
              <div class="left">
                <icon-setting></icon-setting>
                <div class="text">Notice Board Mapping </div>
              </div>
              <div class="arrow-icon">
                <icon-right-single-arrow v-if="!settingVar.list3"></icon-right-single-arrow>
                <icon-down-single-arrow v-if="settingVar.list3"></icon-down-single-arrow>
              </div>
            </div>
            <div class="sub-list" v-if="settingVar.list3">
              <router-link to="/crm/settings/notice" class="sub-list-item">
                <div class="text">Notice List</div>
              </router-link>
              <!-- <router-link to="/crm/settings/notice" class="sub-list-item">
                <div class="text">Create Notice</div>
              </router-link> -->
            </div>
          </div>
          <div class="list-item">
            <div class="title aa" @click.prevent="toggleList4">
              <div class="left">
                <icon-setting></icon-setting>
                <div class="text">Library & Attendance Mapping</div>
              </div>
              <div class="arrow-icon">
                <icon-right-single-arrow v-if="!settingVar.list4"></icon-right-single-arrow>
                <icon-down-single-arrow v-if="settingVar.list4"></icon-down-single-arrow>
              </div>
            </div>
            <div class="sub-list" v-if="settingVar.list4">
              <router-link to="/crm/settings/library" class="sub-list-item">
                <div class="text">Library</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="setting-list-data">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Auth);

// const start
const settingVar = reactive({
  list1: false,
  list2: false,
  list3: false,
  list4: false,
})
//const end

//function start
function toggleList1() {
  settingVar.list1 = ! settingVar.list1
}
function toggleList2() {
  settingVar.list2 = ! settingVar.list2
}
function toggleList3() {
  settingVar.list3 = ! settingVar.list3
}
function toggleList4() {
  settingVar.list4 = ! settingVar.list4
}
//function end


</script>

<style>

</style>
