<template>
  <!-- <div class="select-dropdown"> -->
  <div class="single-select">
    <input
      type="button"
      ref="inputField"
      @click.prevent="handleKeyDown"
      :value="modelValue ? modelValue : placeholder"
      :disabled="disabled"
    />
    <ul class="dropdown-options">
      <li
        v-for="option in options"
        :key="option"
        @click.prevent="selectOption(option)"
        :style="{ 'font-family': option.name }"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, onBeforeUnmount, ref } from "vue";
defineEmits(["update:modelValue", "selected"]);
// import {}

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
  next: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Array,
    required: true,
  },
  outside: {
    type: Boolean,
    default: true,
  },
  search: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

let searchQuery = ref(props.modelValue || "");
let inputField = ref(null);

const instance = getCurrentInstance();

const selectOption = (option) => {
  searchQuery.value = option.name;
  instance.emit("update:modelValue", option.name);
  instance.emit("selected", option);
  if (props.next) {
    focusNextInput();
  }
};
const focusNextInput = () => {
  const inputs = document.querySelector("body").querySelectorAll("input");
  const currentIndex = Array.from(inputs).indexOf(inputField.value);
  inputs[currentIndex].parentNode.classList.remove("show-drop");
  if (currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
    inputs[currentIndex + 1].parentNode.classList.add("show-drop");
  }
};
const handleKeyDown = () => {
  const inputs = document.querySelector("body").querySelectorAll("input");
  const currentIndex = Array.from(inputs).indexOf(inputField.value);
  if (currentIndex >= 0) {
    inputs[currentIndex].parentNode.classList.add("show-drop");
  }
};

// this is if required click outside to display none dropdown-options
onBeforeMount(() => {
  if (props.outside) {
    window.addEventListener("click", handleClickOutside);
  }
});

onBeforeUnmount(() => {
  if (props.outside) {
    window.removeEventListener("click", handleClickOutside);
  }
});

const handleClickOutside = (event) => {
  const clickedElement = event.target;
  const parentClassList = inputField.value.parentNode;
  if (!parentClassList.contains(clickedElement)) {
    parentClassList.classList.remove("show-drop");
  }
};
</script>
