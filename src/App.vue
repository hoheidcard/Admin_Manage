<template>
  <section>
    <div id="app">
      <router-view />
    </div>
    <Notification />
    <Loader v-if="storeVar.loader" />
  </section>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const storeVar = computed(() => store.state);
</script>
