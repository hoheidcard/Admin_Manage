<template>
  <div class="section import-page">
    <div class="container">
      <div class="main-card mid-cardd">
        <div class="card-header">
          <div class="left">
            <div class="icon">
              <icon-download class="rotate-180"></icon-download>
            </div>
            Export Data
          </div>
          <div class="right">
            <div class="text text-grey">

            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="import-data flex flex-d-col align-center text-center p-5-r">
            <h4 class="mb-16">Export Teachers Data</h4>
            <div class="drop-row align-center gap-16 mb-16">
              <Select v-model="formVar.class" :options="classOptions" placeholder="Select Class" class="w-10-r"></Select>
              <Select v-model="formVar.section" :options="sectionOptions" placeholder="Select section" class="w-10-r"></Select>
              <Select v-model="formVar.house" :options="houseOptions" placeholder="Select House" class="w-10-r"></Select>
            </div>
            <div class="badge success-badge mb-16">Total 120 Teachers</div>
            <div class="btn-row flex align-center gap-16">
              <div class="text f-w-bold text-blue">Export as</div>
              <div class="btns flex align-center gap-16">
                <div class="btn primary-btn">CSV</div>
                <div class="btn primary-btn">Excel</div>
                <div class="btn primary-btn">PDF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  house: null,
  class: null,
  section: null,
})

const classOptions = [
  { id: "1", name: "5" },
  { id: "2", name: "6" },
];
const houseOptions = [
  { id: "1", name: "house 1" },
  { id: "2", name: "house 2" },
];
const sectionOptions = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];
const handleSelectedOption = (option) => {
};


</script>

<style>

</style>