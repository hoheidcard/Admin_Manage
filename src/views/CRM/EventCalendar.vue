<template>
  <div class="event-calendar-section">
    <div class="container calender-box flex gap-10">
      <div class="card">
        <div class="top-row">
          <div class="left">
            <div class="date-input w-10-r">
              <!-- <input type="date" />
              <div class="icon">
                <icon-calendar></icon-calendar>
              </div> -->
              <Select
                v-model="formVar.eventFor"
                :options="eventForOption"
                @selected="flterEvent"
                placeholder="Select"
              ></Select>
            </div>
            <div class="arrows">
              <div class="icon" @click="previousMounth()">
                <icon-left-arrow></icon-left-arrow>
              </div>
              <div class="icon" @click="nextMounth()">
                <icon-right-arrow></icon-right-arrow>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="openAddModal()">
                <icon-plus></icon-plus>
                <div class="tooltip">Create Event</div>
              </div>
            </div>
            <div class="btns">
              <button
                type="button"
                v-for="item in typeList"
                :key="item"
                :class="`btn ${typeIndex === item ? 'active' : ''}`"
                @click="onTypeChange(item)"
              >
                {{ moment(inputDate).format("MMMM") }}
              </button>
            </div>
          </div>
        </div>
        <div class="calendar-content">
          <ul :class="typeIndex" class="main-list">
            <li
              class="main-list-item"
              :class="
                moment().format('YYYY-MM-DD') == item.date ? 'current' : ''
              "
              v-for="item in gridList"
              :key="item.time"
            >
              <div class="main-list-time">
                {{ item.time }}
              </div>
              <ul class="sub-list">
                <li
                  class="sub-list-item"
                  v-for="event in checkKeyInEventList(item.date)"
                  :key="event.title"
                  @click.prevent="openEventModal(event)"
                >
                  <div class="event-badge">
                    {{ event.title }}
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-container w-40">
        <div class="card">
          <div class="top-row">
            <div class="apt-btn">
              <div class="icon">Event List</div>
              <!-- <div class="icon">
                Add Appointment
                <icon-add></icon-add>
              </div> -->
            </div>
          </div>
          <div class="tabs"></div>
          <div class="patient-list">
            <div
              class="list-item"
              v-for="(item, index) in storeVar2.eventData"
              :key="index"
            >
              <div
                class="p-info-card card1 pointer"
                @click="openEventModal(item)"
              >
                <div class="top">
                  <div class="p-img">
                    <!-- <img src="/src/assets/images/png/user.png" alt="" /> -->
                  </div>
                  <div class="p-info">
                    <div class="name">
                      <strong>{{ item.title }}</strong>
                    </div>
                    <div class="about">
                      <span>{{ getDate(item.eventDate) }}</span>
                    </div>
                    <div class="p-id">
                      {{ getTime(item.fromTime) }} - {{ getTime(item.toTime) }}
                    </div>
                  </div>
                </div>
                <!-- <div class="message">
                  <router-link
                    :to="`/new-prescription?pid=${item.patientDetail?.id}&aid=${item.id}`"
                    class="span">Prescription</router-link>
                  <router-link :to="`/patient/profile?id=${item.patientDetail?.id}`" class="span">Profile</router-link>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //modals -->
    <Modal
      v-model:show="storeVar2.createModal"
      class="create-event-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Event" : "Create Event" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar2.createModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <!-- <div class="tabs"> -->
      <!-- <div class="tab" :class="eventVar.tab === 1 ? 'active' : ''" @click.prevent="eventVar.tab = 1">
          Event
        </div> -->
      <!-- <div class="tab" :class="eventVar.tab === 2 ? 'active' : ''" @click.prevent="eventVar.tab = 2">
          Reminder
        </div> -->
      <!-- </div> -->
      <div class="tab-content" v-if="eventVar.tab === 1">
        <form action="" class="form">
          <div class="form-item mb-16">
            <div class="title">Title</div>
            <input
              type="text"
              v-model="formVar.title"
              placeholder="Name of event"
            />
            <div class="err-msg" v-if="formVar.submit && titleValid">
              {{ titleValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Description</div>
            <textarea
              name=""
              id=""
              v-model="formVar.desc"
              rows="5"
              placeholder="Enter"
            ></textarea>
            <div class="err-msg" v-if="formVar.submit && descValid">
              {{ descValid }}
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Date</div>
            <div class="date-input">
              <input
                type="date"
                v-model="formVar.eventDate"
                class="w-100-i"
                :min="moment().format('YYYY-MM-DD')"
              />
              <div class="icon">
                <icon-calendar> </icon-calendar>
              </div>
            </div>
            <div class="err-msg" v-if="formVar.submit && dateValid">
              {{ dateValid }}
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-10 col-5">
              <div class="title">From Time</div>
              <time-picker class="mb-10" v-model="formVar.fromTime" />
              <div class="err-msg" v-if="formVar.submit && formTimeValid">
                {{ formTimeValid }}
              </div>
            </div>
            <div class="form-item mb-10 col-5">
              <div class="title">To Time</div>
              <time-picker class="mb-10" v-model="formVar.toTime" />
              <div class="err-msg" v-if="formVar.submit && toTimeValid">
                {{ toTimeValid }}
              </div>
            </div>
          </div>
          <div class="form-item mb-10 col-5">
            <div class="title">Event For</div>
            <Select
              v-model="formVar.eventFor"
              :options="eventForOption"
              @selected="getOrganization"
              placeholder="Select"
            ></Select>
            <div class="err-msg" v-if="formVar.submit && eventForValid">
              {{ eventForValid }}
            </div>
          </div>
          <label
            for="all-school"
            class="repeat align-center mb-10 gap-10 pointer w-max"
          >
            <input type="checkbox" v-model="formVar.all" id="all-school" />
            <div class="text">ALL {{ formVar.eventFor }}</div>
          </label>
          <div class="form-item" v-if="!formVar.all">
            <div class="title">Select</div>
            <MultiSelect
              v-model="formVar.eventIds"
              :options="storeVar.organizationEventList"
              :tabs="tab"
              @specific="handleSelectOption"
              @selectedArr="handleSelectedOptionTests"
              @search="dataSearch"
            />
            <div class="err-msg" v-if="formVar.submit && eventIdsValid">
              {{ eventIdsValid }}
            </div>
          </div>
          <!-- <div class="form-item mb-16">
            <div class="title mb-10-i">Choose theme color</div>
            <div class="color-row">
              <label for="color1">
                <input type="radio" id="color1" name="color">
                <div class="color red"></div>
              </label>
              <label for="color2">
                <input type="radio" id="color2" name="color">
                <div class="color green"></div>
              </label>
              <label for="color3">
                <input type="radio" id="color3" name="color">
                <div class="color yellow"></div>
              </label>
              <label for="color4">
                <input type="radio" id="color4" name="color">
                <div class="color blue"></div>
              </label>
            </div>
          </div> -->
          <!-- <label for="repeat" class="repeat align-center gap-10 pointer w-max">
            <input type="checkbox" id="repeat" checked>
            <div class="text">Repeat</div>
          </label> -->
          <div class="modal-footer">
            <div class="btns">
              <div
                class="btn red-btn"
                @click.prevent="storeVar2.createModal = false"
              >
                Cancel
              </div>
              <div class="btn white-btn" @click="createEvent()">
                {{ formVar.editMode ? "Update" : "Create" }}
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- <div class="tab-content" v-if="eventVar.tab === 2">
        <form action="" class="form">
          <div class="form-item mb-16">
            <div class="title">Title</div>
            <input type="text" placeholder="Name of event">
            <div class="err-msg">Please enter title</div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Description</div>
            <textarea name="" id="" rows="5" placeholder="Enter"></textarea>
            <div class="err-msg">Please enter description</div>
          </div>
          <div class="form-item mb-16">
            <div class="title">Date</div>
            <div class="date-input">
              <input type="date" class="w-100-i">
              <div class="icon">
                <icon-calendar> </icon-calendar>
              </div>
            </div>
            <div class="err-msg">Please select date</div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">From Time</div>
              <input type="time">
              <div class="err-msg">Please select from time</div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">
                <Tfoot></Tfoot> Time
              </div>
              <input type="time">
              <div class="err-msg">Please select to time</div>
            </div>
          </div>
          <div class="form-item mb-16">
            <div class="title mb-10-i">Choose theme color</div>
            <div class="color-row">
              <label for="color1">
                <input type="radio" id="color1" name="color">
                <div class="color red"></div>
              </label>
              <label for="color2">
                <input type="radio" id="color2" name="color">
                <div class="color green"></div>
              </label>
              <label for="color3">
                <input type="radio" id="color3" name="color">
                <div class="color yellow"></div>
              </label>
              <label for="color4">
                <input type="radio" id="color4" name="color">
                <div class="color blue"></div>
              </label>
            </div>
          </div>
          <label for="repeat" class="repeat align-center gap-10 pointer w-max">
            <input type="checkbox" id="repeat" checked>
            <div class="text">Repeat</div>
          </label>
          <div class="modal-footer">
            <div class="btns">
              <div class="btn red-btn" @click.prevent="eventVar.createModal = false">Cancel</div>
              <div class="btn white-btn">Create</div>
            </div>
          </div>
        </form>
      </div> -->
    </Modal>
    <Modal
      v-model:show="eventVar.eventModal"
      class="event-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Event Details</div>
        <div class="close-btn" @click.prevent="eventVar.eventModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="event-details">
        <div class="data">
          <div class="title">Event Title :</div>
          <div class="val">{{ formVar.eventTitle }}</div>
        </div>
        <div class="data">
          <div class="title">Description :</div>
          <div class="val">{{ formVar.eventDesc }}</div>
        </div>
        <div class="data">
          <div class="title">Date :</div>
          <div class="val">{{ getDate(formVar.evntDate) }}</div>
        </div>
        <div class="data">
          <div class="title">Time :</div>
          <div class="val">
            {{ getTime(formVar.evtFromTime) }} to
            {{ getTime(formVar.evtToTime) }}
          </div>
        </div>
        <div class="data">
          <div class="title">Event For :</div>
          <div class="val">{{ formVar.evtFor }}</div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="deleteToggle()">Delete</div>
          <div class="btn white-btn" @click.prevent="editToggle()">Edit</div>
        </div>
      </div>
    </Modal>
    <Modal
      v-model:show="storeVar2.confirmModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <div class="delete-icon">
        <img src="/images/png/delete.png" alt="" />
      </div>
      <h4 class="text-gree">Are you sure want to Delete?</h4>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            @click.prevent="storeVar2.confirmModal = false"
          >
            Cancel
          </div>
          <div class="btn white-btn" @click="deleteEvent()">Delete</div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import {
  getCurrentInstance,
  onBeforeMount,
  ref,
  reactive,
  computed,
} from "vue";
import moment from "moment";
import { useStore } from "vuex";

const store = useStore();
const storeVar = computed(() => store.state.Organization);
const storeVar2 = computed(() => store.state.Event);

/** Constants **/
const eventForOption = [
  { id: "SCHOOL", name: "SCHOOL" },
  { id: "COLLEGE", name: "COLLEGE" },
  { id: "ORGANIZATION", name: "ORGANIZATION" },
  { id: "PARTNER", name: "PARTNER" },
  { id: "SUB PARTNER", name: "SUB PARTNER" },
];
const tab = [];
const eventVar = reactive({
  createModal: false,
  eventModal: false,
  confirmModal: false,
  tab: 1,
  timePicker: "00:00",
});
const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  editMode: false,
  school: null,
  allSchoolStatus: false,
  title: null,
  desc: null,
  eventDate: null,
  fromTime: "00:00",
  toTime: "00:00",
  eventFor: "SCHOOL",
  all: false,
  eventIds: null,

  fromDate: null,
  toDate: null,
  for: eventForOption[0],

  eventTitle: null,
  eventDesc: null,
  evntDate: null,
  evtFromTime: null,
  evtToTime: null,
  evtFor: null,
  eventId: null,
});

// const props = defineProps({
//   date: {
//     type: Date,
//     required: true,
//   },
//   eventList: {
//     type: Array,
//     required: true,
//     default: [
//       { date: '2024-03-11 01:05:00.000000', name: 'Testt' }
//     ]
//   },
// });

const instance = getCurrentInstance();
const gridList = ref([]);
const inputDate = ref(null);
// const typeList = ["Day", "Week", "Month"];
const typeList = ["Month"];
const typeIndex = ref("Month");

let startOfDay = moment(inputDate).startOf(typeIndex.value);
let endOfDay = moment(inputDate).endOf(typeIndex.value);

/** Constants **/

/** Lifecycle/Hooks **/
onBeforeMount(() => {
  inputDate.value = moment().format("YYYY-MM-DD");
  generateGridList();
  getEvent();
});
/** Lifecycle/Hooks **/

/** Functions/Methods **/
const onDateChange = () => {
  instance.emit("update:changeDate", {
    date: inputDate.value,
    type: typeIndex.value,
  });
};
function nextMounth() {
  inputDate.value = moment(startOfDay).add(32, "days").format("YYYY-MM-DD");
  generateGridList();
  getEvent();
}
function previousMounth() {
  inputDate.value = moment(endOfDay).subtract(32, "days").format("YYYY-MM-DD");
  generateGridList();
  getEvent();
}
function openEventModal(item) {
  eventVar.eventModal = true;
  formVar.eventTitle = item.title;
  formVar.eventDesc = item.desc;
  formVar.evntDate = item.eventDate;
  formVar.evtFromTime = item.fromTime;
  formVar.evtToTime = item.toTime;
  formVar.evtFor = item.eventFor;
  formVar.eventId = item.id;

  formVar.title = item.title;
  formVar.desc = item.desc;
  formVar.eventDate = item.eventDate;
  formVar.fromTime = item.fromTime;
  formVar.toTime = item.toTime;
  formVar.eventFor = item.eventFor;
  formVar.all = item.all;
}
function getOrganization() {
  store.dispatch("Organization/getOrganizationByType", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    type: formVar.eventFor,
  });
}

const onTypeChange = (type) => {
  if (type !== typeIndex.value) {
    typeIndex.value = type;
    onDateChange();
    generateGridList();
  }
};
const handleSelectedOptionTests = (option) => {
  formVar.eventIds = option;
  formVar.eventIds.forEach((element) => {
    element.organizationDetailId = element.id;
    element.partnerDetailId = element.id;
  });
};
const dataSearch = (option) => {
  // allLabTest(formVar.limit, formVar.offset, option, 'ACTIVE')
};
const handleSelectOption = (option) => {};
function getDate(date) {
  if (date) {
    return moment(date).format("MMM Do YYYY");
  }
}
function getTime(time) {
  if (time) {
    return moment(time, "HH:mm:ss").format("hh:mm A");
  }
}
const checkKeyInEventList = (key) => {
  if (key) {
    if (typeIndex.value === "Day") {
      return storeVar2.value.eventData.filter(
        (item) =>
          moment(item.eventDate).format("YYYY-MM-DD hh:mm A").toString() === key
      );
    } else {
      return storeVar2.value.eventData.filter(
        (item) => moment(item.eventDate).format("YYYY-MM-DD").toString() === key
      );
    }
  }
};

const generateGridList = () => {
  startOfDay = moment(inputDate.value).startOf(typeIndex.value);
  endOfDay = moment(inputDate.value).endOf(typeIndex.value);

  // Create an array to store the intervals
  const intervals = [];
  let currentInterval = startOfDay.clone();
  while (currentInterval <= endOfDay) {
    // if (typeIndex.value === "Day") {
    //   intervals.push({
    //     time: currentInterval.format("HH:mm A"),
    //     date: currentInterval.format("YYYY-MM-DD hh:mm A"),
    //   });
    //   currentInterval.add(5, "minutes");
    // }
    if (typeIndex.value === "Week" || typeIndex.value === "Month") {
      intervals.push({
        time:
          typeIndex.value === "Month"
            ? currentInterval.format("DD")
            : currentInterval.format("ddd"),
        date: currentInterval.format("YYYY-MM-DD"),
      });
      currentInterval.add(1, "day");
    }
  }
  gridList.value = intervals;
};
function flterEvent() {
  store.dispatch("Event/getEvent", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    fromDate: moment(startOfDay).format("YYYY-MM-DD"),
    toDate: moment(endOfDay).format("YYYY-MM-DD"),
    eventFor: formVar.eventFor,
  });
}
function getEvent() {
  store.dispatch("Event/getEvent", {
    limit: formVar.limit,
    offset: formVar.offset,
    keyword: formVar.keyword,
    fromDate: moment(startOfDay).format("YYYY-MM-DD"),
    toDate: moment(endOfDay).format("YYYY-MM-DD"),
    eventFor: formVar.for?.id,
  });
}

function deleteEvent() {
  store.dispatch("Event/deleteEvent", { id: formVar.eventId });
}
function createEvent() {
  if (
    titleValid.value ||
    descValid.value ||
    dateValid.value ||
    formTimeValid.value ||
    toTimeValid.value ||
    eventForValid.value ||
    eventIdsValid.value
  ) {
    formVar.submit = true;
    return null;
  }
  formVar.submit = false;
  if (formVar.editMode) {
    store.dispatch("Event/updateEvent", {
      title: formVar.title,
      desc: formVar.desc,
      eventDate: formVar.eventDate,
      fromTime: formVar.fromTime,
      toTime: formVar.toTime,
      eventFor: formVar.eventFor,
      all: formVar.all,
      eventIds: formVar.all ? null : formVar.eventIds,
      id: formVar.eventId,
    });
  } else {
    store.dispatch("Event/addEvent", {
      title: formVar.title,
      desc: formVar.desc,
      eventDate: formVar.eventDate,
      fromTime: formVar.fromTime,
      toTime: formVar.toTime,
      eventFor: formVar.eventFor,
      all: formVar.all,
      eventIds: formVar.all ? null : formVar.eventIds,
    });
  }
}
/** Functions/Methods **/

/** Validation **/

const titleValid = computed(() => {
  if (!formVar.title) {
    return "Please Enter Title";
  }
});
const descValid = computed(() => {
  if (!formVar.desc) {
    return "Please Enter Event Description";
  }
});
const dateValid = computed(() => {
  if (!formVar.eventDate) {
    return "Please Select Date";
  }
});
const formTimeValid = computed(() => {
  if (formVar.fromTime === "00:00") {
    return "Please Select Time";
  }
});
const toTimeValid = computed(() => {
  if (formVar.toTime === "00:00") {
    return "Please Select Time";
  }
});
const eventForValid = computed(() => {
  if (!formVar.eventFor) {
    return "Please Select Event For";
  }
});
const eventIdsValid = computed(() => {
  if (!formVar.all) {
    if (formVar.eventIds?.length <= 0) {
      return "Please Select Organization";
    }
  } else {
    return null;
  }
});
/** Validation **/

let events = {
  "00:00 AM": [{ title: "Event 1" }, { title: "Event 2" }],
  "00:15 AM": [{ title: "Event 3" }],
};

function editToggle() {
  eventVar.eventModal = false;
  storeVar2.value.createModal = true;
  formVar.editMode = true;
}
function openAddModal() {
  storeVar2.value.createModal = true;
  formVar.editMode = false;

  formVar.title = null;
  formVar.desc = null;
  formVar.eventDate = null;
  formVar.fromTime = "00:00:00";
  formVar.toTime = "00:00:00";
  formVar.eventFor = null;
  formVar.all = false;
}
function deleteToggle() {
  eventVar.eventModal = false;
  storeVar2.value.confirmModal = true;
}
</script>

<style lang="scss">
.event-calendar {
  .btn {
    padding: 1px 1px;
    background-color: azure;
  }

  .active {
    background-color: tomato !important;
  }
}
</style>
