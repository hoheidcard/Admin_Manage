<template>
  <div class="img-upload-wrapper">
    <img src="/images/png/camera.png" class="dummy-img" alt="">
    <img v-bind:src="imgVar.imagePreview" class="preview-image" v-on:click="openUpload" alt="">

    <div class="form-group">
      <input
        name="image"
        type="file"
        id="file-field"
        v-on:change="updatePreview"
        style="display:none;"
      >
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  const imgVar = reactive({
    imagePreview: '',
  })

  function openUpload () {
    document.getElementById('file-field').click()
  }

  function updatePreview (e) {
    var reader, files = e.target.files

    if (files.length === 0) {
    }

    reader = new FileReader();

    reader.onload = (e) => {
      imgVar.imagePreview = e.target.result
    }

    reader.readAsDataURL(files[0])
  }
</script>

<style>

</style>