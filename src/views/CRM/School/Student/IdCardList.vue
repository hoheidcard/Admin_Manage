<template>
  <div class="section import-page">
    <div class="container">
      <div class="main-card mid-cardd">
        <div class="card-header">
          <div class="left">
            <div class="icon">
              <icon-card class="rotate-18"></icon-card>
            </div>
            Id Cards
          </div>
          <div class="right">
            <div class="text text-grey">
              <div class="icons">
                <!-- <router-link :to="'/crm/organization/import-student?id='+formVar.organizationId+'&settingId='+formVar.organizationSettingId" class="icon tooltip-wrapper"> -->
                <div
                  class="icon tooltip-wrapper pointer"
                  @click="downloadAsPDF"
                >
                  <icon-download class=""></icon-download>
                  <div class="tooltip">Print & Download</div>
                </div>
                <!-- </router-link> -->
              </div>
            </div>
          </div>
        </div>
        <div class="card-body id-card-body">
          <div id="download-pdf">
            <div
              class="page"
              style="
                width: 793.7px;
                height: 1150px;
                padding: 0;
                margin: 0 auto;
                border-radius: 5px;
                font-family: sans-serif;
                break-inside: avoid;
                /* border: 1px solid gray; */
                background-color: rgb(255, 255, 255);
                /* border:1px solid #cdcdcd; */
              "
              v-for="(page, i) in storeVar.studentCardData"
              :key="i"
            >
              <div
                style="
                  height: 100%;
                  width: 100%;
                  display: grid;
                  margin: 10px;
                  break-inside: avoid;
                  grid-template-columns: repeat(2, 1fr);
                  place-content: start;
                "
              >
                <div
                  class="item"
                  style="
                    width: 95%;
                    min-height: 110px;
                    max-height: 150px;
                    border: 1px #d3d3d3 solid;
                    display: flex;
                    overflow: hidden;
                    break-inside: avoid;
                    padding: 3px 0;
                  "
                  v-for="(item, index) in page"
                  :key="index"
                >
                  <div
                    class="left"
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      width: 100px;
                      width: 30px;
                    "
                  >
                    <div
                      class="name"
                      style="
                        /* rotate: -180deg; */
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <h6
                        style="
                          text-align: center;
                          /* writing-mode: vertical-lr; */
                          width: 7rem;
                          transform: rotate(270deg);
                        "
                      >
                        {{ item.organizationDetail?.name }}
                      </h6>
                    </div>
                  </div>

                  <div
                    class="middle"
                    style="
                      display: flex;
                      width: 24%;
                      height: 100%;
                      align-items: center;
                      overflow: hidden;
                    "
                  >
                    <div
                      class="image"
                      style="
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                      "
                    >
                      <h6 style="margin: 0; line-height: 1; font-size: 0.4rem">
                        SR. No. {{ item?.srNo }}
                      </h6>
                      <img
                        v-if="item.profile"
                        :src="item.profile"
                        alt="img"
                        height="100%"
                        width="90%"
                        style="border-radius: 2px; object-fit: cover"
                      />
                      <!-- <img
                        v-else
                        src="/images/png/no-image.png"
                        alt="img"
                        height="100%"
                        width="90%"
                        style="border-radius: 2px; object-fit: cover"
                      /> -->
                      <h6 style="margin: 0; font-size: 0.4rem">
                        Photo No.{{ item?.photoNumber }}
                      </h6>
                    </div>
                  </div>

                  <div
                    class="right"
                    style="
                      margin-left: 0.5rem;
                      width: 70%;
                      padding: 0.3rem 0;
                      display: flex;
                      flex-direction: column;
                      gap: 0.1rem;
                    "
                  >
                    <div class="name" style="display: flex">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        Name
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item?.name }}
                      </h6>
                    </div>

                    <div class="name" style="display: flex">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        F.Name
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span>:</span> {{ item?.fatherName }}
                      </h6>
                    </div>

                    <div
                      class="name"
                      style="display: flex"
                      v-if="item.motherName"
                    >
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        M.Name
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span>:</span> {{ item.motherName }}
                      </h6>
                    </div>

                    <div
                      class="name"
                      style="display: flex"
                      v-if="item.classList?.name"
                    >
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        Class
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span>:</span> {{ item.classList?.name }}&nbsp;{{
                          item.classDiv?.name
                        }}
                      </h6>
                    </div>

                    <div class="name" style="display: flex" v-if="item.dob">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        DOB
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span>:</span> {{ getDate(item.dob) }}
                      </h6>
                    </div>

                    <div
                      class="name"
                      style="display: flex"
                      v-if="item.fatherContactNo || item.motherContactNo"
                    >
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        Phone no.
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span>:</span>
                        {{ item?.fatherContactNo }}
                        {{ item?.motherContactNo ? ' / ':'' }}
                        {{ item?.motherContactNo }}
                      </h6>
                    </div>

                    <div class="name" style="display: flex" v-if="item.address">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        Adress
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span>:</span> {{ item.address }}
                      </h6>
                    </div>

                    <div class="name" style="display: flex" v-if="item.PEN">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        PEN
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item.PEN }}
                      </h6>
                    </div>
                    <div class="name" style="display: flex" v-if="item.UID">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        UID
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item.UID }}
                      </h6>
                    </div>
                    <div
                      class="name"
                      style="display: flex"
                      v-if="item.bloodGroup"
                    >
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        Blood Group
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item.bloodGroup }}
                      </h6>
                    </div>
                    <div class="name" style="display: flex" v-if="item.rfidNo">
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        RFID No.
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item.rfidNo }}
                      </h6>
                    </div>
                    <div
                      class="name"
                      style="display: flex"
                      v-if="item.aadharNumber"
                    >
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        Aadhar No.
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item.aadharNumber }}
                      </h6>
                    </div>
                    <div
                      class="name"
                      style="display: flex"
                      v-if="item.houseZone?.name"
                    >
                      <h6
                        style="
                          width: 25%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                        "
                      >
                        House
                      </h6>
                      <h6
                        style="
                          width: 70%;
                          margin: 0;
                          height: fit-content;
                          padding: 0;
                          display: flex;
                          gap: 0.2rem;
                          line-height: 1;
                        "
                      >
                        <span> :</span> {{ item.houseZone?.name }}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const route = useRoute();
const storeVar = computed(() => store.state.OrganizationStudent);

const formVar = reactive({
  submit: false,
  limit: 10,
  offset: 0,
  keyword: "",
  organizationId: null,
  classId: null,
  organizationSettingId: null,

  file: null,
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(() => {
  if (route.query.organizationId && route.query.classId) {
    formVar.organizationId = route.query.organizationId;
    formVar.classId = route.query.classId;
    getOneOrganizationSettings();
  }
});

function getOneOrganizationSettings() {
  store.dispatch("OrganizationStudent/getStudentForCard", {
    organizationId: formVar.organizationId,
    classId: formVar.classId,
    status: route.query.status,
  });
}

async function downloadAsPDF() {
  const contentDiv = document.getElementById("download-pdf");
  const originalContent = document.body.innerHTML; // Store original content

  // Create a new window to print the content
  const printWindow = window.open("", "_self");
  // // Write the content of the div to the new window
  printWindow.document.write(contentDiv.innerHTML);
  // // Close the document stream
  printWindow.document.close();

  // Print the content
  printWindow.print();

  printWindow.close();
  location.reload();
}

function getDate(date) {
  if (date) {
    return moment(date).format("DD.MM.YYYY");
  }
  return "-";
}
/* Functions/Methods */
</script>

<style>
@media print {
  div {
    page-break-inside: avoid;
  }
}
</style>
