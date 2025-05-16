<template>
  <div class="base-time-picker">
    {{ fatherContactNoValid }}
    <select class="select" v-model="selectedHour" @change="updateTime" :disabled="props.disabled">
      <option class="option" v-for="hour in hours" :key="hour" :value="hour">{{ hour }}</option>
    </select>
    :
    <select class="select" v-model="selectedMinute" @change="updateTime" :disabled="props.disabled">
      <option class="option" v-for="minute in minutes" :key="minute" :value="minute">{{ minute }}</option>
    </select>
    :
    <select class="select" v-model="selectedPeriod" @change="updateTime" :disabled="props.disabled">
      <option class="option" value="AM">AM</option>
      <option class="option" value="PM">PM</option>
    </select>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const fatherContactNoValid = computed(() => {
  if (props.modelValue !== '00:00') {
    const [hour, minute] = props.modelValue.split(':');
    let formattedHour = parseInt(hour, 10);

    // Convert 24-hour format to 12-hour format and determine AM/PM
    let period = 'AM';
    if (formattedHour >= 12) {
      period = 'PM';
      formattedHour = formattedHour !== 12 ? formattedHour - 12 : formattedHour;
    }
    formattedHour = formattedHour === 0 ? 12 : formattedHour;

    selectedHour.value = formattedHour < 10 ? `0${formattedHour}` : `${formattedHour}`;
    selectedMinute.value = minute;
    selectedPeriod.value = period;
  }
});


const hours = [...Array(12).keys()].map((hour) => (hour === 0 ? '12' : hour < 10 ? `0${hour}` : `${hour}`));
const minutes = [...Array(60).keys()].map((minute) => (minute < 10 ? `0${minute}` : `${minute}`)).filter((minute) => minute % 5 === 0);

const selectedHour = ref('12');
const selectedMinute = ref('00');
const selectedPeriod = ref('AM');
const emit = defineEmits(['update:modelValue']);

const updateTime = () => {
  let hour = parseInt(selectedHour.value, 10);
  const minute = selectedMinute.value;

  // Convert selectedHour to 24-hour format based on selectedPeriod (AM/PM)
  if (selectedPeriod.value === 'PM' && hour !== 12) {
    hour += 12;
  } else if (selectedPeriod.value === 'AM' && hour === 12) {
    hour = 0;
  }

  const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  const time = `${formattedHour}:${minute}`;
  emit('update:modelValue', time);
};

onBeforeMount(() => {
    const [hour, minute] = props.modelValue.split(':');
    let formattedHour = parseInt(hour, 10);

    // Convert 24-hour format to 12-hour format and determine AM/PM
    let period = 'AM';
    if (formattedHour >= 12) {
      period = 'PM';
      formattedHour = formattedHour !== 12 ? formattedHour - 12 : formattedHour;
    }
    formattedHour = formattedHour === 0 ? 12 : formattedHour;

    selectedHour.value = formattedHour < 10 ? `0${formattedHour}` : `${formattedHour}`;
    selectedMinute.value = minute;
    selectedPeriod.value = period;
  updateTime();
});
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>
<style></style>
