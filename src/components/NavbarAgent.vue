<template>
  <section class="navbar" id="navbar">
    <div class="navbar-container">
      <div class="top-line">
        <!-- <div class="container flex align-center">
          Psst! You have more to discover here. 🌟
        </div> -->
        <div id="scroll-container">
          <div id="scroll-text">
            <span id="sc-text">
              Welcome to Abhitprints. 🎉
            </span> &nbsp;
            <a href="https://wa.link/f6pmvx">WhatsApp</a> 
            <icon-whatsapp></icon-whatsapp>
          </div>
        </div>
      </div>
      <div class="nav-wrapper">
        <div class="container">
          <div class="nav-left">
            <div class="menu-icon" @click.prevent="toggleSidebar">
              <icon-menu></icon-menu>
            </div>
            <router-link to="/" class="logo mob-logo">
              <img src="/images/logo/org-logo.png" alt="">
            </router-link>
          </div>
          <router-link to="/" class="logo desk-logo">
            <img src="/images/logo/org-logo.png" alt="">
          </router-link>
          <div class="searchbar desk-search">
            <SingleSelect v-model="formVar.search" :options="searchOptions" @selected="handleSelectedOption" class="after-d-none" placeholder="Search">
            </SingleSelect>
            <icon-search></icon-search>
          </div>
          <div class="nav-icons">
            <div class="nav-icon mob-icon">
              <div class="icon" @click.prevent="formVar.searchModal = true">
                <icon-search></icon-search>
              </div>
              <div class="mob-search-modal" v-if="formVar.searchModal" >
                <div class="searchbar" >
                  <icon-search></icon-search>
                  <SingleSelect v-model="formVar.search" :options="searchOptions" @selected="handleSelectedOption" placeholder="Search">
                  </SingleSelect>
                </div>
                <div class="close-btn">
                  <div class="icon" @click.prevent="formVar.searchModal = false">
                    <icon-cross></icon-cross>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-icon" v-click-outside="closeNotiList">
              <div class="icon tooltip-wrapper" @click.prevent="toggleNotiList">
                <icon-bell></icon-bell>
                <div class="tooltip">Notifications</div>
              </div>
              <div class="noti-popup" :class="formVar.notiList ? 'noti-active' : 'noti-inactive'" >
                <div class="noti-header">
                  <icon-bell></icon-bell>
                  <div class="right-info">
                    <h6>Noifications</h6>
                    <div class="text-small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
                  </div>
                  <div class="close-icon" @click.prevent="formVar.notiList = false">
                    <icon-cross></icon-cross>
                  </div>
                </div>
                <div class="noti-body">
                  <router-link to="#" class="list-item" @click.prevent="closeNotiList()">
                    <div class="img">
                      <icon-success></icon-success>
                    </div>
                    <div class="details"> 
                      <h6 class="title">New Customers</h6>
                      <div class="sub-title text-grey">5 new user registered</div>
                    </div>
                    <div class="time text-light-grey">15 min ago</div>
                  </router-link>
                  <router-link to="#" class="list-item" @click.prevent="closeNotiList()">
                    <div class="img">
                      <icon-success></icon-success>
                    </div>
                    <div class="details"> 
                      <h6 class="title">New Customers</h6>
                      <div class="sub-title text-light-grey">5 new user registered</div>
                    </div>
                    <div class="time text-grey">15 min ago</div>
                  </router-link>
                  <router-link to="#" class="list-item" @click.prevent="closeNotiList()">
                    <div class="img">
                      <icon-success></icon-success>
                    </div>
                    <div class="details"> 
                      <h6 class="title">New Customers</h6>
                      <div class="sub-title text-light-grey">5 new user registered</div>
                    </div>
                    <div class="time text-grey">15 min ago</div>
                  </router-link>
                  <router-link to="#" class="list-item" @click.prevent="closeNotiList()">
                    <div class="img">
                      <icon-success></icon-success>
                    </div>
                    <div class="details"> 
                      <h6 class="title">New Customers</h6>
                      <div class="sub-title text-light-grey">5 new user registered</div>
                    </div>
                    <div class="time text-grey">15 min ago</div>
                  </router-link>
                </div>
                <div class="noti-footer">
                  <router-link to="#" class="view-all text-center" @click.prevent="closeNotiList()">
                    View All
                  </router-link>
                </div>
              </div>
            </div>
            <div class="nav-icon" v-click-outside="closeAccList">
              <div class="icon tooltip-wrapper" @click.prevent="toggleAccList">
                <icon-user></icon-user>
                <div class="tooltip">Account</div>
              </div>
              <div class="noti-popup" :class="formVar.accList ? 'noti-active' : 'noti-inactive'">
                <div class="noti-header">
                  <div class="icon">
                    <icon-user></icon-user>
                  </div>
                  <div class="right-info">
                    <h6>My Profile</h6>
                    <div class="text-small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
                  </div>
                  <div class="close-icon" @click.prevent="formVar.accList = false">
                    <icon-cross></icon-cross>
                  </div>
                </div>
                <div class="menu-body">
                  <div class="body-item">
                    <div class="icon">
                      <icon-setting></icon-setting>
                    </div>
                    <div class="title">Setting</div>
                  </div>
                  <div class="body-item">
                    <div class="icon">
                      <icon-user></icon-user>
                    </div>
                    <div class="title">User</div>
                  </div>
                  <div class="body-item">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">Updates</div>
                  </div>
                  <div class="body-item" @click="openConfirmModal">
                    <div class="icon">
                      <icon-exit></icon-exit>
                    </div>
                    <div class="title">Logout</div>
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/crm/help-center" class="nav-icon" >
              <div class="icon tooltip-wrapper" >
                <icon-help></icon-help>
                <div class="tooltip">Help Center</div>
              </div>
            </router-link>
            <div class="nav-icon" v-click-outside="closeMenuList">
              <div class="icon tooltip-wrapper" @click.prevent="toggleMenuList">
                <icon-menu2></icon-menu2>
                <div class="tooltip">Menu</div>
              </div>
              <div class="noti-popup" :class="formVar.menuList ? 'noti-active' : 'noti-inactive'">
                <div class="noti-header">
                  <div class="icon">
                    <icon-menu2></icon-menu2>
                  </div>
                  <div class="right-info">
                    <h6>Our Menu</h6>
                    <div class="text-small">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </div>
                  </div>
                  <div class="close-icon" @click.prevent="formVar.menuList = false">
                    <icon-cross></icon-cross>
                  </div>
                </div>
                <div class="menu-body">
                  <div class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-setting></icon-setting>
                    </div>
                    <div class="title">Documents</div>
                  </div>
                  <router-link to="/agent" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">FAQ</div>
                  </router-link>
                  <router-link to="/agent" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">Feedback</div>
                  </router-link>
                  <div class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-setting></icon-setting>
                    </div>
                    <div class="title">Parteners</div>
                  </div>
                  <router-link to="#" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-phone></icon-phone>
                    </div>
                    <div class="title">Contact</div>
                  </router-link>
                  <router-link to="/" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">Privacy</div>
                  </router-link>
                  <router-link to="/agent" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">Pages</div>
                  </router-link>
                  <router-link to="/agent" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">Designation</div>
                  </router-link>
                  <router-link to="/agent" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-info></icon-info>
                    </div>
                    <div class="title">Staff</div>
                  </router-link>
                  <router-link to="/agent" class="body-item" @click.prevent="closeMenuList()">
                    <div class="icon">
                      <icon-organization></icon-organization>
                    </div>
                    <div class="title">Organization</div>
                  </router-link>
                </div>
                <div class="noti-footer">
                  <router-link to="#" class="view-all text-center" @click.prevent="closeMenuList()">
                    View All
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuWrapperAgent /> 
    </div>
    <Modal
        v-model:show="formVar.confirmModal"
      class="confirm-modal"
      headerClasses="header-bg"
      >
      <template v-slot:header>
        <div class="title" showHeader="true">Delete</div>
        <div class="close-btn" @click.prevent="formVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="delete-icon">
        <img src="/images/png/logout.png" alt="">
      </div>
      <h4 class="text-gree">
        Are you sure want to Logout?
      </h4>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn white-btn" @click.prevent="formVar.confirmModal = false">Cancel</div>
          <div class="btn red-btn" @click="logout">Logout</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router"

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.Auth);

const formVar = reactive({
  search: null,
  notiList: false,
  accList: false,
  menuList: false,
  confirmModal: false,
  searchModal: false,
})

const searchOptions = [
  { id: '1', name: "Search 1" },
  { id: '2', name: "Search 2" },
  { id: '3', name: "Search 3" },
];
const handleSelectedOption = (option) => {
};
/* Constants */

/* Lifecycle/Hooks */
/* Lifecycle/Hooks */

/* Functions/Methods */
function logout(){
  store.dispatch("Auth/crmLoout");
}
function openConfirmModal(){
  formVar.confirmModal=true
}
function closeNotiList() {
  formVar.notiList = false;
}
function closeAccList() {
  formVar.accList = false;
}
function closeMenuList() {
  formVar.menuList = false;
}
function toggleAccList() {
  formVar.accList = !formVar.accList;
}
function toggleMenuList() {
  formVar.menuList = !formVar.menuList;
}
function toggleNotiList() {
  formVar.notiList = !formVar.notiList;
}
function toggleSidebar(){
  storeVar.value.sidebarVisible = !storeVar.value.sidebarVisible
};
/* Functions/Methods */
/* Validation */

/* Validation */
</script>

<style>

</style>