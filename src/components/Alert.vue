<template>
  <div>
    <div class="alert alert-success" :class="{ 'show': isVisible }">
      <div class="alert-content">
        <h5>Success!</h5>
        <span class="message">Lorem Ipsum is simply dummy text of the.</span>
        <icon-cross></icon-cross>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

const hideAlert = () => {
  // isVisible.value = false;
  isVisible.value = !isVisible.value;
};

setTimeout(hideAlert, 3000);
</script>

<style>

</style>