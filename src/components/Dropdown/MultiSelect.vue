<template>
  <div class="multi-select">
    <div class="tab-input">
      <div class="tabs">
        <span v-for="(tab, index) in resultList" :key="index" class="tab">
          {{ tab.name }}
          <button @click.prevent="removeTab(tab, index)">⤫</button>
        </span>
      </div>
      <input type="text" v-model="searchQuery" :placeholder="placeholder" @input="performSearch" @focus="performSearch"
        @keydown.enter.prevent="handleTabCreation" @keyup.enter="clearTabCreation" @keyup="search($event)"
        v-click-outside="closeOptions" />
    </div>
    <ul class="search-results" v-if="showDropdown && searchResults.length > 0">
      <li v-for="result in searchResults" :key="result.id" @click="addTab(result)">
        <!-- <input type="checkbox"> -->
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref } from "vue";
import { useStore } from 'vuex';
const store = useStore()

defineEmits(["update:modelValue", "selected", "specific", "removed", "errorMsg", "selectedArr"]);
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  tabs: {
    type: Array,
    default: [],
  },
  placeholder: {
    type: String,
    default: "Select",
  },
});

let searchQuery = ref("");
let list = ref([]);
let resultList = ref([]);
let errorMsg = ref(null);
let searchResults = ref([]);
let showDropdown = ref(false);
const instance = getCurrentInstance();

const handleTabCreation = () => {
  if (searchQuery.value !== "") {
    list.value.push(searchQuery.value);
    instance.emit("specific", { id: null, name: searchQuery.value });
    instance.emit("selected", list.value);
    searchQuery.value = "";
    showDropdown.value = false;
  }
};
const clearTabCreation = () => {
  searchQuery.value = "";
};
const removeTab = (tab, index) => {
  instance.emit("removed", tab);
  list.value.splice(index, 1);
  resultList.value.splice(index, 1);
  instance.emit("selected", list.value);
  instance.emit("selectedArr", resultList.value);
};
const search = (event) => {
  instance.emit("search", event.target.value);
}
const addTab = (result) => {
  const objIndex = resultList.value.findIndex((obj) => obj.id === result.id);
  if (objIndex < 0) {
    list.value.push(result.name);
    resultList.value.push(result);
  } else {
    errorMsg.value = 'Already Selected!'
    instance.emit("errorMsg", errorMsg.value);
    store.dispatch('Alert/error', { msg: 'Already Selected!' })
  }
  setTimeout(() => {
    errorMsg.value = null
    instance.emit("errorMsg", errorMsg.value);
  }, 2000);
  instance.emit("specific", result);
  instance.emit("selected", list.value);
  instance.emit("selectedArr", resultList.value);
  searchQuery.value = "";
  searchResults.value = [];
  showDropdown.value = false;
};
const performSearch = () => {
  const searchTerm = searchQuery.value.toLowerCase() || '';
  searchResults.value = props.options.filter((option) =>
    option.name?.toLowerCase().includes(searchTerm)
  );
  showDropdown.value = true;
};
const closeOptions = () => {
  showDropdown.value = false;
};
</script>

<style></style>
