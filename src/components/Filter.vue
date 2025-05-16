<template>
  <div class="data filter-data">
    <div class="header" @click.prevent="brandToggle()">
      <div class="title">BRAND</div>
      <div class="icon">
        <icon-right-single-arrow
          v-if="filterVar.brandStatus"
        ></icon-right-single-arrow>
        <icon-down-single-arrow
          v-if="!filterVar.brandStatus"
        ></icon-down-single-arrow>
      </div>
    </div>
    <div class="list" v-if="filterVar.brandStatus">
      <div class="search">
        <div class="input">
          <input type="text" placeholder="Search Barnd" />
          <icon-search></icon-search>
        </div>
      </div>
      <label for="brand1" class="list-item">
        <input type="checkbox" id="brand1" />
        <div class="text">Brand1</div>
      </label>
      <label for="brand2" class="list-item">
        <input type="checkbox" id="brand2" />
        <div class="text">Brand2</div>
      </label>
      <label for="brand3" class="list-item">
        <input type="checkbox" id="brand3" />
        <div class="text">Brand3</div>
      </label>
      <label for="brand4" class="list-item">
        <input type="checkbox" id="brand4" />
        <div class="text">Brand4</div>
      </label>
      <label for="brand5" class="list-item">
        <input type="checkbox" id="brand5" />
        <div class="text">Brand5</div>
      </label>
      <label for="brand6" class="list-item">
        <input type="checkbox" id="brand6" />
        <div class="text">Brand6</div>
      </label>
    </div>
  </div>
  <div class="data filter-data">
    <div class="header" @click.prevent="colorToggle()">
      <div class="title">COLOR</div>
      <div class="icon">
        <icon-right-single-arrow
          v-if="filterVar.colorStatus"
        ></icon-right-single-arrow>
        <icon-down-single-arrow
          v-if="!filterVar.colorStatus"
        ></icon-down-single-arrow>
      </div>
    </div>
    <div class="list" v-if="filterVar.colorStatus">
      <label for="color1" class="list-item">
        <input type="checkbox" id="color1" />
        <div class="text">Red</div>
      </label>
      <label for="color2" class="list-item">
        <input type="checkbox" id="color2" />
        <div class="text">Blue</div>
      </label>
      <label for="color3" class="list-item">
        <input type="checkbox" id="color3" />
        <div class="text">Green</div>
      </label>
      <label for="color4" class="list-item">
        <input type="checkbox" id="color4" />
        <div class="text">Orange</div>
      </label>
      <label for="color5" class="list-item">
        <input type="checkbox" id="color5" />
        <div class="text">Brown</div>
      </label>
      <label for="color6" class="list-item">
        <input type="checkbox" id="color6" />
        <div class="text">Purple</div>
      </label>
    </div>
  </div>
  <div class="data filter-data">
    <div class="header" @click.prevent="discountToggle()">
      <div class="title">DISCOUNT</div>
      <div class="icon">
        <icon-right-single-arrow
          v-if="filterVar.discountStatus"
        ></icon-right-single-arrow>
        <icon-down-single-arrow
          v-if="!filterVar.discountStatus"
        ></icon-down-single-arrow>
      </div>
    </div>
    <div class="list" v-if="filterVar.discountStatus">
      <label for="disc1" class="list-item">
        <input type="checkbox" id="disc1" />
        <div class="text">10% and bellow</div>
      </label>
      <label for="disc2" class="list-item">
        <input type="checkbox" id="disc2" />
        <div class="text">10% or more</div>
      </label>
      <label for="disc3" class="list-item">
        <input type="checkbox" id="disc3" />
        <div class="text">20% or more</div>
      </label>
      <label for="disc4" class="list-item">
        <input type="checkbox" id="disc4" />
        <div class="text">30% or more</div>
      </label>
      <label for="disc5" class="list-item">
        <input type="checkbox" id="disc5" />
        <div class="text">40% or more</div>
      </label>
      <label for="disc6" class="list-item">
        <input type="checkbox" id="disc6" />
        <div class="text">50% or more</div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const filterVar = reactive({
  colorStatus: true,
  brandStatus: true,
  discountStatus: false,
});

const colorToggle = () => {
  filterVar.colorStatus = !filterVar.colorStatus;
};

const brandToggle = () => {
  filterVar.brandStatus = !filterVar.brandStatus;
};

const discountToggle = () => {
  filterVar.discountStatus = !filterVar.discountStatus;
};

</script>

<style>
</style>