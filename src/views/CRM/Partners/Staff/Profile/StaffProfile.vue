<template>
  <section class="user-profile">
    <div class="data-list">
      <div class="data">
        <div class="title">Name :</div>
        <div class="val">{{ storeVar.name }}</div>
      </div>
      <div class="data">
        <div class="title">Role :</div>
        <div class="val">{{ storeVar.account?.roles }}</div>
      </div>
    </div>
    <div class="data-list">
      <div class="data">
        <div class="title">Email :</div>
        <div class="val">{{ storeVar.emailId }}</div>
      </div>
      <div class="data">
        <div class="title">Contact No :</div>
        <div class="val">{{ storeVar.contactNo }}</div>
      </div>
    </div>
    <div class="data-list">
      <div class="data">
        <div class="title">DOB :</div>
        <div class="val">{{ storeVar.dob }}</div>
      </div>
      <div class="data">
        <div class="title">Gender :</div>
        <div class="val">{{ storeVar.gender }}</div>
      </div>
    </div>
    <div class="data-list">
      <div class="data">
        <div class="title">Username :</div>
        <div class="val">{{ storeVar.account?.phoneNumber }}</div>
      </div>
      <div class="data">
        <div class="title">Status :</div>
        <div class="val badge">{{ storeVar.status }}</div>
      </div>
    </div>
    <!-- <div class="data-list">
      <div class="data">
        <div class="title">Status :</div>
        <div class="val badge">Active</div>
      </div>
    </div> -->
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
const storeVar = computed(() => store.state.OrganizationStaff);

const formVar = reactive({
  staffAccountId:null,
})
/* Constants */
</script>

<style>

</style>