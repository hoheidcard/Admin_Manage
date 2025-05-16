<template>
  <section class="dr-schedule">
    <div class="table-card mb-10">
      <div class="table-header">
        <div class="left">
          <div class="title-row">
            <div class="icon">
              <icon-user></icon-user>
            </div>
            <div class="titles">
              <div class="sub-title">Time Table : List</div>
              <h5 class="main-title">Time Table</h5>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- <div class="searchbar">
            <input type="text" placeholder="Search here">
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div> -->
          <!-- <div class="icons">
            <div class="icon tooltip-wrapper" @click.prevent="openAddModal">
              <icon-plus></icon-plus>
              <div class="tooltip">Add Time Table</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div
      v-for="(item, index) in storeVar.staffTimeTable"
      :key="index"
      class="schedule-item"
    >
      <h2 class="schedule-question">
        <span>{{ item.name }}</span>
        <label class="switch">
          <input
            type="checkbox"
            :checked="item.status"
            @change="toggleAnswer(index, item.id, item.status)"
          />
          <span class="slider"></span>
        </label>
      </h2>
      <div v-show="item.status" class="schedule-answer">
        <!-- <div class="schedule-plus">
          <div class="icon tooltip-wrapper" @click="openAddModal(item)">
            <icon-plus></icon-plus> &nbsp;
            <div class="tooltip">Add Schedule</div>
          </div>
        </div> -->
        <div class="icons schedule-plus">
          <div class="icon tooltip-wrapper" @click="openAddModal(item)">
            <icon-plus></icon-plus>
            <div class="tooltip">Add Schedule</div>
          </div>
        </div>
        <div class="cards">
          <div
            class="single-card"
            v-for="(period, index) in item.period"
            :key="index"
          >
            <div class="main-title">
              <div>
                <div class="">Subject : {{ period.subject?.name }}</div>
                <div class="">Class : {{ period.classList?.name }}</div>
                <div class="">Section : {{ period.classDiv?.name }}</div>
              </div>
              <div class="icons flex align-center gap-10">
                <div class="hed-icon icon tooltip-wrapper">
                  <icon-edit @click="openEditModal(period)"></icon-edit>
                  <div class="tooltip">Edit Schedule</div>
                </div>
                <div class="hed-icon icon tooltip-wrapper">
                  <icon-delete
                    @click="deletePeriod(period.id, item.id)"
                  ></icon-delete>
                  <div class="tooltip">Delete Schedule</div>
                </div>
              </div>
            </div>
            <div>
              <div class="time-row row">
                <div class="form-item col-6 mb-16">
                  <div class="title">Start Time</div>
                  <time-picker v-model="period.time_start" disabled />
                </div>
                <div class="form-item col-6 mb-16">
                  <div class="title">End Time</div>
                  <time-picker v-model="period.time_end" disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal
      v-model:show="storeVar.addModal"
      class="add-schdule"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">
          {{ formVar.editMode ? "Update Period" : "Add Period" }}
        </div>
        <div class="close-btn" @click.prevent="storeVar.addModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <form action="" class="form" @submit.prevent="addPeriod">
        <div class="single-card">
          <!-- <div class="main-title">Organization ({{ formVar.organization?.name }})</div>
        <SingleSelectId v-model="formVar.organizationId" :options="storeVar.drOrganizationData"
          @selected="handleSelectedOption" placeholder="Search"></SingleSelectId> -->
          <div class="form-item mb-10 col-5">
            <div class="title">Subject</div>
            <div class="select-dropdown">
              <select name="" id="" v-model="formVar.subjectId">
                <option :value="null">Select</option>
                <option
                  v-for="(slt, index) in storeVar.staffSubject"
                  :key="index"
                  :value="slt.subject?.id"
                >
                  {{ slt.subject?.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-item mb-10 col-5">
            <div class="title">Class</div>
            <div class="select-dropdown">
              <select name="" id="" v-model="formVar.classListId">
                <option :value="null">Select</option>
                <option
                  v-for="(slt, index) in storeVar.staffClass"
                  :key="index"
                  :value="slt.classList?.id"
                >
                  {{ slt.classList?.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-item mb-10 col-5">
            <div class="title">Section</div>
            <div class="select-dropdown">
              <select name="" id="" v-model="formVar.classDivId">
                <option :value="null">Select</option>
                <option
                  v-for="(slt, index) in storeVar.staffDivision"
                  :key="index"
                  :value="slt.classDiv?.id"
                >
                  {{ slt.classDiv?.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="time-row row">
            <div class="form-item col-6 mb-16">
              <div class="title">Start Time</div>
              <time-picker
                v-if="formVar.edit_time_start"
                v-model="formVar.edit_time_start"
              />
              <time-picker v-else v-model="formVar.time_start" />
              <!-- <input type="time" v-model="item.time_start"> -->
            </div>
            <div class="form-item col-6 mb-16">
              <div class="title">End Time</div>
              <time-picker
                v-if="formVar.edit_time_end"
                v-model="formVar.edit_time_end"
              />
              <time-picker v-else v-model="formVar.time_end" />
              <!-- <input type="time" v-model="item.time_end"> -->
            </div>
          </div>
        </div>
        <button type="submit" class="btn white-btn w-100">
          {{ formVar.editMode ? "Update" : "Add" }}
        </button>
      </form>
    </Modal>
    <Modal
      v-model:show="formVar.confirmModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Delete</div>
        <div class="close-btn" @click.prevent="formVar.confirmModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="delete-icon">
        <img src="/images/png/delete.png" alt="" />
      </div>
      <h4>Are you sure want to Delete ?</h4>
      <div class="btns">
        <button
          class="btn red-btn cancel-btn"
          @click.prevent="formVar.confirmModal = false"
        >
          Cancel
        </button>
        <button class="btn confirm-btn" @click="deletePeriodConfirm">
          Confirm
        </button>
      </div>
    </Modal>
    <!-- <div v-for="item in storeVar.staffTimeTable" :key="item.id" class="schedule-item">
      <div class="schedule-header">
        <h4 class="">
          {{ item.name }}
        </h4>
        <div class="input-status">
          <label class="switch">
            <input type="checkbox" v-model="item.status" :checked="item.status">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div class="time-row" v-if="item.status">
        <div class="form-item col-5">
          <div class="title">Subject</div>
          <div class="select-dropdown">
            <select name="" id="" v-model="item.subjectId">
              <option :value="null">Select</option>
              <option v-for="(slt, index) in storeVar.staffSubject" :key="index" :value="slt.id">{{ slt.subject?.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <div class="title">Start Time</div>
          <time-picker v-model="item.timeStart" />
        </div>
        <div class="form-item">
          <div class="title">End Time</div>
          <time-picker v-model="item.timeEnd" />
        </div>
      </div>
      <div class="add-btn flex justify-center">
        <button type="button" class="btn white-btn w-10-r" @click="onSubmitSchedule">Save</button>
      </div>
    </div> -->
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.OrganizationStaff);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  status: true,
  org: null,
  confirmModal: false,
  editMode: false,
  addModal: false,

  periodStatus: true,
  offline: false,
  online: false,
  redioStatus: null,
  clinicVisitStatus: false,

  time_start: "00:00:00",
  time_end: "00:00:00",

  staffTimeTableId: null,
  subjectId: null,
  classListId: null,
  classDivId: null,

  periodId: null,
  scheduleId: null,
  edit_time_start: null,
  edit_time_end: null,
});

/* Constants */
/* Lifecycle/Hooks */
/* Lifecycle/Hooks */
/* Functions/Methods */

function deletePeriod(id, sId) {
  formVar.periodId = id;
  formVar.staffTimeTableId = sId;
  formVar.confirmModal = true;
}
function deletePeriodConfirm() {
  store.dispatch("OrganizationStaff/deletePeriod", {
    scheduleId: formVar.staffTimeTableId,
    id: formVar.periodId,
  });
  formVar.confirmModal = false;
}
function addPeriod() {
  const obj = {
    time_start: formVar.time_start,
    time_end: formVar.time_end,
    staffTimeTableId: formVar.staffTimeTableId,
    subjectId: formVar.subjectId,
    classListId: formVar.classListId,
    classDivId: formVar.classDivId,
  };

  if (formVar.editMode) {
    store.dispatch("OrganizationStaff/updatePeriod", {
      periodId: formVar.periodId,
      data: obj,
    });
    storeVar.value.addModal = false;
  } else {
    store.dispatch("OrganizationStaff/addTimeTable", {
      data: obj,
    });
    storeVar.value.addModal = false;
  }
}

function openAddModal(item) {
  formVar.staffTimeTableId = item.id;
  formVar.editMode = false;
  formVar.edit_time_start = null;
  formVar.edit_time_end = null;
  storeVar.value.addModal = true;
}

function openEditModal(data) {
  formVar.staffTimeTableId = data.staffTimeTableId;
  formVar.periodId = data.id;
  formVar.subjectId = data.subjectId;
  formVar.classListId = data.classListId;
  formVar.classDivId = data.classDivId;
  formVar.time_end = data.time_end;
  formVar.time_start = data.time_start;

  formVar.editMode = true;
  storeVar.value.addModal = true;
}
//search select start//

const handleSelectedOption = (option) => {
  formVar.organization = option;
  formVar.organizationId = option.id;
};

function toggleAnswer(index, id, status) {
  storeVar.value.staffTimeTable[index].status = !status;
  store.dispatch("OrganizationStaff/scheduleStatus", { id, status: !status });
}
</script>

<style></style>
