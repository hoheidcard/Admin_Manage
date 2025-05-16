<template>
  <section class="cards-list-page">
    <div class="container">
      <div class="cards-wrapper">
        <div class="filter-section card">
          <div class="filter-header flex">
            <icon-filter></icon-filter>
            Filter
            <!-- </div> -->
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="navigate('/crm/card-design')">
                <icon-plus></icon-plus>
                <div class="tooltip">Add Card</div>
              </div>
            </div>
          </div>
          <div class="filter-body">
            <Filter />
          </div>
        </div>
        <div class="mob-filter-card">
          <div class="icon" @click.prevent="formVar.filterModal = true">
            <icon-filter></icon-filter>
          </div>
        </div>
        <div class="mob-filter-modal" v-if="formVar.filterModal">
          <div class="mob-filter-wrapper">
            <div class="filter-header">
              <div class="title">Filter</div>
              <icon-cross @click.prevent="formVar.filterModal = false"></icon-cross>
            </div>
            <div class="filter-body">
              <Filter />
            </div>
            <div class="filter-footer">
              <button class="btn primary-btn">Apply</button>
            </div>
          </div>
        </div>
        <div class="cards-section">
          <div class="cards-list">
            <div class="card" v-for="item in cardsData" :key="item">
              <div class="img">
                <img :src="`/images/products/${item.img}.png`" alt="" />
              </div>
              <div class="info">
                <h5 class="title">{{ item.title }}</h5>
                <div class="price">
                  <div class="current-price">₹{{ item.current_price }}</div>
                  <div class="actual-price">₹{{ item.actual_price }}</div>
                  <div class="off">{{ item.off }}% Off</div>
                </div>
                <router-link to="/" class="btn white-btn w-100">Design / Customize</router-link>
              </div>
            </div>
          </div>
          <div class="load-more-btn">
            <button class="btn primary-btn">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute()
const router = useRouter();
const storeVar = computed(() => store.state.Organization);

const formVar = reactive({
  filterModal: false,
})

/* Constants */

/* Lifecycle/Hooks */

/* Lifecycle/Hooks */

/* Search Function */
/* Search Function */
/* Functions/Methods */

function navigate(link){
  router.push({path:link})
}

const cardsData = [
  {
    img: "lanyard",
    title: "Lanyard",
    current_price: "2900",
    actual_price: "3900",
    off: "10",
  },
  {
    img: "rfid_card",
    title: "RFID Card",
    current_price: "2900",
    actual_price: "3900",
    off: "10",
  },
  {
    img: "rfid_reader",
    title: "RFID Reader",
    current_price: "2900",
    actual_price: "3900",
    off: "10",
  },
  {
    img: "sports_tshirt",
    title: "Sports T-Shirts",
    current_price: "2900",
    actual_price: "3900",
    off: "10",
  },
  {
    img: "tent_card",
    title: "Tent Card",
    current_price: "2900",
    actual_price: "3900",
    off: "10",
  },
  {
    img: "yoyo",
    title: "Yoyo",
    current_price: "2900",
    actual_price: "3900",
    off: "10",
  },
];
</script>

<style></style>
