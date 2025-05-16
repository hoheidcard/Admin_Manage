<template>
  <section
    :class="`menu-wrapper ${storeVar.sidebarVisible ? 'desk-view' : 'desk-none'}`"
  >
  <div class="close-icon" @click.prevent="toggleSidebar">X</div>
  <div class="container">
      <div class="menu-list" @click.prevent="toggleSidebar">
        <router-link to="/crm/dashboard" class="menu-list-item">
          <div class="menu-list-title">Dashboard</div>
        </router-link>
        <router-link to="/crm/admin" class="menu-list-item">
          <div class="menu-list-title">Admin</div>
        </router-link>
        <router-link to="/crm/partners" class="menu-list-item">
          <div class="menu-list-title">Partners</div>
        </router-link>
        <router-link to="/crm/school-list" class="menu-list-item">
          <div class="menu-list-title">School</div>
        </router-link>
        <router-link to="/crm/college-list" class="menu-list-item">
          <div class="menu-list-title">College</div>
        </router-link>
        <router-link to="/crm/organization-list" class="menu-list-item">
          <div class="menu-list-title">Organization</div>
        </router-link>
        <router-link to="/crm/staff" class="menu-list-item">
          <div class="menu-list-title">My Staff</div>
        </router-link>
        <router-link to="/crm/order-list" class="menu-list-item">
          <div class="menu-list-title">Orders</div>
        </router-link>
        <router-link to="/crm/carts" class="menu-list-item">
          <div class="menu-list-title">Carts</div>
        </router-link>

        <div class="menu-list-item">
          <div class="menu-list-title">Default Setting</div>
          <div class="sub-list">
            <router-link
              to="/crm/default-setting?type=ORGANIZATION"
              class="sub-list-item main-item"
            >
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Organization</div>
            </router-link>
            <router-link
              to="/crm/default-setting?type=COLLEGE"
              class="sub-list-item"
            >
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">College</div>
            </router-link>
            <router-link
              to="/crm/default-setting?type=SCHOOL"
              class="sub-list-item"
            >
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">School</div>
            </router-link>
            <router-link to="/crm/designation" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Designation</div>
            </router-link>
          </div>
        </div>
        <div class="menu-list-item">
          <div class="menu-list-title">Setting</div>
          <div class="sub-list">
            <router-link
              to="/crm/event-calendar"
              class="sub-list-item main-item"
            >
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Events</div>
            </router-link>
            <router-link to="/crm/faq" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Faqs</div>
            </router-link>
            <router-link to="/crm/delivery-partners" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Delivery Partner</div>
            </router-link>
            <router-link to="/crm/category-list" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Category List</div>
            </router-link>
            <router-link to="/crm/pages" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Pages</div>
            </router-link>
            <router-link to="/crm/blogs" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Blogs</div>
            </router-link>
            <router-link to="/crm/banners" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Banners</div>
            </router-link>
            <router-link to="/crm/users" class="sub-list-item">
              <div class="icon">
                <icon-setting></icon-setting>
              </div>
              <div class="sub-list-title">Users</div>
            </router-link>
          </div>
        </div>
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

// const
const dash = reactive({
  agentList: false,
  cardList: false,
});
// const

// function
function toggleSidebar() {
  console.log('hi');
  storeVar.value.sidebarVisible = !storeVar.value.sidebarVisible;
}
// function
</script>

<style></style>
