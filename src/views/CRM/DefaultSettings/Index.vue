<template>
  <section class="profile-layout">
    <div class="container">
      <div class="left-card card">
        <br />
        <div class="bottom-links bottom-links-desk">
          <a v-for="(item, index) in filteredMenu" :key="index">
            <router-link :to="item.link" class="profile-link">
              <div class="title">{{ item.name }}</div>
              <div class="icon">
                <icon-right-arrow></icon-right-arrow>
              </div>
            </router-link>
          </a>
        </div>
      </div>
      <div class="right-card card">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeMount, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const type = computed(() => route.query.type);
const formVar = reactive({
  type: route.query.type,
});

let menus = ref([
  {
    name: "Designation",
    link: "/crm/default-setting/designation?type=" + formVar.type,
    status: true,
  },
  {
    name: "Class",
    link: "/crm/default-setting/class-list?type=" + formVar.type,
    status: formVar.type != "ORGANIZATION" ? true : false,
  },
  {
    name: "Section",
    link: "/crm/default-setting/division-list?type=" + formVar.type,
    status: formVar.type != "ORGANIZATION" ? true : false,
  },
  {
    name: "Book Category",
    link: "/crm/default-setting/books-category?type=" + formVar.type,
    status: formVar.type != "ORGANIZATION" ? true : false,
  },
  {
    name: "Department",
    link: "/crm/default-setting/department?type=" + formVar.type,
    status: true,
  },
  {
    name: "House Zone",
    link: "/crm/default-setting/house-zone?type=" + formVar.type,
    status: formVar.type == "SCHOOL" ? true : false,
  },
  {
    name: "Subject",
    link: "/crm/default-setting/subject?type=" + formVar.type,
    status: formVar.type != "ORGANIZATION" ? true : false,
  },
]);
onBeforeMount(() => {
  formVar.type = route.query.type;
  loadMenu();
});
watch(type, (newType, oldType) => {
  if (newType) {
    formVar.type = newType;
    loadMenu();
  }
});

const loadMenu = () => {
  menus.value = [
    {
      name: "Designation",
      link: "/crm/default-setting/designation?type=" + formVar.type,
      status: true,
    },
    {
      name: "Class",
      link: "/crm/default-setting/class-list?type=" + formVar.type,
      status: formVar.type != "ORGANIZATION" ? true : false,
    },
    {
      name: "Section",
      link: "/crm/default-setting/division-list?type=" + formVar.type,
      status: formVar.type != "ORGANIZATION" ? true : false,
    },
    {
      name: "Book Category",
      link: "/crm/default-setting/books-category?type=" + formVar.type,
      status: formVar.type != "ORGANIZATION" ? true : false,
    },
    {
      name: "Department",
      link: "/crm/default-setting/department?type=" + formVar.type,
      status: true,
    },
    {
      name: "House Zone",
      link: "/crm/default-setting/house-zone?type=" + formVar.type,
      status: formVar.type == "SCHOOL" ? true : false,
    },
    {
      name: "Subject",
      link: "/crm/default-setting/subject?type=" + formVar.type,
      status: formVar.type != "ORGANIZATION" ? true : false,
    },
  ];
};

const filteredMenu = computed(() => {
  return menus.value.filter((item) => item.status);
});
</script>

<style></style>
