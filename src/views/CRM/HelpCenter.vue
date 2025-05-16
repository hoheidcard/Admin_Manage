<template>
  <section class="faq-page">
    <div class="container">
      <div class="bread-crumb">
        <div class="content">
          <h4 class="title">Help Center</h4>
          <div class="path">
            <router-link to="/">Home</router-link>
            >>
            <div class="text">Help Canter</div>
          </div>
        </div>
      </div>
      <div class="main-card ">
        <div class="card-header">
          <div class="left">
          </div>
          <div class="right">
            <div class="searchbar">
              <input type="text" class="w-15-r-i" placeholder="Search here" />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="faq-content">
            <div class="img">
              <img src="/images/svg/faq3.svg" alt="">
            </div>
            <div class="faq-list">
              <div v-for="faqItem in faqItems" :key="faqItem.id" class="faq-item" :class="{ 'active': faqItem.showAnswer }">
                <h2 class="faq-question" @click="toggleAnswer(faqItem.id)">
                  <span>{{ faqItem.question }}</span>
                  <icon-right-arrow v-if="!faqItem.showAnswer"></icon-right-arrow>
                  <icon-down-arrow v-if="faqItem.showAnswer"></icon-down-arrow>
                </h2>
                <div v-show="faqItem.showAnswer" class="faq-answer">
                  {{ faqItem.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const faqItems = reactive([
  {
    id: 1,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: true,
  },
  {
    id: 2,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: false,
  },
  {
    id: 3,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: false,
  },
  {
    id: 4,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: false,
  },
  {
    id: 5,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: false,
  },
  {
    id: 6,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: false,
  },
  {
    id: 7,
    question: "How to get started with us?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus consectetur temporibus possimus? Aliquam, eveniet provident debitis quam nesciunt, sunt rem quo enim consequatur tenetur sit excepturi, obcaecati placeat voluptatum.",
    showAnswer: false,
  },
])

function toggleAnswer(id) {
  this.faqItems.forEach((faqItem) => {
    if (faqItem.id === id) {
      faqItem.showAnswer = !faqItem.showAnswer;
    } else {
      faqItem.showAnswer = false;
    }
  });
}

</script>

<style>

</style>