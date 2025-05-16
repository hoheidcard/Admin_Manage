<template>
  <section class="user-activity user-profile">
    <div class="table-card">
      <div class="table-header">
        <div class="left">
          <div class="title-row">
            <div class="icon">
              <icon-user></icon-user>
            </div>
            <div class="titles">
              <div class="sub-title">Class : List</div>
              <h5 class="main-title">Class</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="table-body mt-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Class Section</th>
              <th class="text-center">Action</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in storeVar.coOrdinator" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.classList?.name }} {{ item.classDiv?.name }}(C)</td>
                <td>
                  <div class="option-btns">
                    <div
                      class="icon tooltip-wrapper"
                      @click.prevent="
                        routeMyStudents(item.classListId, item.classDivId)
                      "
                    >
                      <icon-eye></icon-eye>
                      <div class="tooltip">View Students</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-for="(item, index) in storeVar.classListDiv" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  {{ item.classList?.name }} {{ item.classDiv?.name }}({{
                    item.type
                  }}) ({{ item.subject?.name }}
                  {{ formatTimeToAmPm(item.time_start) }}-{{
                    formatTimeToAmPm(item.time_end)
                  }}
                  )
                </td>
                <td>
                  <div class="option-btns">
                    <div
                      class="icon tooltip-wrapper"
                      @click.prevent="
                        routeMyStudents(item.classListId, item.classDivId)
                      "
                    >
                      <icon-eye></icon-eye>
                      <div class="tooltip">View Students</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="table-no-data"
          v-if="
            storeVar.coOrdinator?.length <= 0 &&
            storeVar.clasListDiv?.length <= 0
          "
        >
          <div>No records Found!</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const router = useRouter();
const storeVar = computed(() => store.state.OrganizationStaff);

const formVar = reactive({
  submit: false,
  staffAccountId: null,
  className: null,
  classListId: null,
  searchKey: null,
  editMode: false,
});
/* Constants */
/* Search Function */

/* Search Function */
/* Functions/Methods */

function routeMyStudents(classListId, classDivId) {
  console.log(classListId, classDivId);
  router.push({
    path: "/crm/school/students-by-class-section",
    query: {
      classListId,
      classDivId,
      id: storeVar.value.organizationDetail?.id,
      settingId: storeVar.value.organizationDetail?.settingId,
    },
  });
}
function formatTimeToAmPm(time) {
  if (!time) {
    return "";
  }
  return moment(time, "HH:mm").format("hh:mm A");
}
/* Functions/Methods */
/* Validation */
/* Validation */
</script>

<style></style>
