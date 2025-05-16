<template>
  <div class="section import-page">
    <div class="container">
      <div class="main-card mid-cardd">
        <div class="card-header">
          <div class="left">
            <div class="icon">
              <icon-card class="rotate-18"></icon-card>
            </div>
            Final Id Cards
          </div>
          <div class="right">
            <div class="searchbar">
              <input
                type="text"
                v-model="formVar.height"
                placeholder="Height(mm)"
              />
            </div>
            <div class="searchbar">
              <input
                type="text"
                v-model="formVar.width"
                placeholder="Width(mm)"
              />
            </div>

            <div class="text text-grey">
              <div class="icons">
                <div
                  class="icon tooltip-wrapper pointer"
                  @click="downloadAsPDF"
                >
                  <icon-download class=""></icon-download>
                  <div class="tooltip">Print & Download</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body id-card-body">
          <div id="download-pdf">
            <div
              class="page"
              :style="{
                width: getCardWidth + 'px',
                width: getCardHeight + 'px',
                padding: 0,
                margin: '0 auto',
                'border-radius': '5px',
                'break-inside': 'avoid',
              }"
            >
              <div
                ref="htmlContainer"
                style="display: flex; flex-wrap: wrap"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import JsBarcode from "jsbarcode";
import moment from "moment";
import QRCode from "qrcode";
import { computed, onBeforeMount, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { studentFinalFields } from "../../../../constants/studentFields";

/* Constants */
const store = useStore();
const route = useRoute();
const htmlContainer = ref(null);

const formVar = reactive({
  organizationId: null,
  classId: null,
  organizationSettingId: null,

  height: 297,
  width: 210,

  file: null,

  card: [],
});
/* Constants */

/* Lifecycle/Hooks */
onBeforeMount(async () => {
  setPageSize();
  if (route.query.organizationId && route.query.classId) {
    formVar.organizationId = route.query.organizationId;
    formVar.classId = route.query.classId;
    getOneOrganizationSettings();
    // setTimeout(() => {
    //   htmlContainer.value.innerHTML = getHtml();
    // }, 2000); // Example: Update after 2 seconds
  }
});

const getCardHeight = computed(() => {
  setPageSize();
  const dpi = window.devicePixelRatio * 96; // Assumes 96 DPI standard and multiplies by device pixel ratio
  const mmToInch = 25.4; // 1 inch = 25.4 mm
  return (formVar.height / mmToInch) * dpi;
});

const getCardWidth = computed(() => {
  setPageSize();
  const dpi = window.devicePixelRatio * 96; // Assumes 96 DPI standard and multiplies by device pixel ratio
  const mmToInch = 25.4; // 1 inch = 25.4 mm
  return (formVar.width / mmToInch) * dpi;
});

function setPageSize() {
  const style = document.createElement("style");
  style.type = "text/css";
  const pageSizeRule = `@page { size: ${formVar.width}mm ${formVar.height}mm; }`;
  style.innerHTML = pageSizeRule;
  document.head.appendChild(style);
}

const getMmToPx = (size) => {
  const dpi = window.devicePixelRatio * 96; // Assumes 96 DPI standard and multiplies by device pixel ratio
  const mmToInch = 25.4 / 2; // 1 inch = 25.4 mm
  return (size / mmToInch) * dpi;
};

async function getOneOrganizationSettings() {
  const payload = await store.dispatch(
    "OrganizationStudent/getStudentFinalForCard",
    {
      organizationId: formVar.organizationId,
      classId: formVar.classId,
    }
  );
  let finalHtml = "";
  if (payload.status === 200 && payload.data.result.length > 0) {
    console.log(payload.data.result);

    for (const element of payload.data.result) {
      if (
        element.houseZone_card ||
        element.classList_card ||
        element.classList_pCard
      ) {
        let card;

        try {
          if (route.query.status === "House") {
            card = JSON.parse(element.houseZone_card);
          } else if (route.query.status === "Class") {
            card = JSON.parse(element.classList_card);
          } else if (route.query.status === "Parent") {
            card = JSON.parse(element.classList_pCard);
          }
        } catch (error) {
          card = null;
        }

        if (!card) {
          return;
        }

        const cardHtml = `
            <div class="design-card"
              style="
                height: ${getMmToPx(card.cardHeight)}px;
                width: ${getMmToPx(card.cardWidth)}px;
                margin-bottom: ${getMmToPx(card.cardVerticalGap)}px;
                margin-right: ${getMmToPx(card.cardHorizontalGap)}px;
                margin-left: ${getMmToPx(card.cardHorizontalGap)}px;
              "
            >
              <div class="front-side"
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  overflow: hidden;
                  padding: 3px;
                  border: 1px solid #ccc;
                  background-image: url('${card.frontCardImage}');
                  background-size: cover;
                  background-position: center;
                "
              >
                ${await getComponent(card.frontCard, element)}
              </div>
            </div>
            ${
              card.side !== "Single"
                ? `
            <div class="design-card"
              style="
                height: ${getMmToPx(card.cardHeight)}px;
                width: ${getMmToPx(card.cardWidth)}px;
                margin-bottom: ${getMmToPx(card.cardVerticalGap)}px;
                margin-right: ${getMmToPx(card.cardHorizontalGap)}px;
                margin-left: ${getMmToPx(card.cardHorizontalGap)}px;
              "
            >
              <div class="back-side"
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  overflow: hidden;
                  padding: 3px;
                  border: 1px solid #ccc;
                  background-image: url('${card.backCardImage}');
                  background-size: cover;
                  background-position: center;
                "
              >
                ${await getComponent(card.backCard, element)}
              </div>
            </div>`
                : ""
            }
          `;

        finalHtml += cardHtml;
      }
    }
  }

  htmlContainer.value.innerHTML = finalHtml;
}
async function getComponent(data, item) {
  let innerHtml = "";

  // Process each element asynchronously
  for (const element of data) {
    let content = null;
    const foundObject = studentFinalFields.find(
      (obj) => obj.name === element.id
    );

    if (foundObject) {
      let value = item[foundObject.id];
      if (!isNaN(Date.parse(value))) {
        const date = new Date(value);
        content = getDate(date);
      } else {
        content = value;
      }
    }

    let htmlDataDiv = "";

    if (element.content.type === "Image") {
      htmlDataDiv = `<div style="width: 100%; height: 100%;">
        <img
          id="${element.id}"
          src="${element.id ? content : ""}"
          alt=""
          style="
            height: 100%;
            width: 100%;
            border-radius: ${element.content["border-radius"]};
            border: ${element.content["border"]} ${
        element.content["border-color"]
      };
          "
        />
      </div>`;
    }

    if (element.content.type === "Barcode") {
      const canvas = document.createElement("canvas");
      JsBarcode(canvas, content, {
        format: "CODE128",
        width: 2,
        height: 60,
        displayValue: false,
      });

      // Convert canvas to data URL
      const barcodeImageUrl = canvas.toDataURL();
      htmlDataDiv = `<div style="width: 100%; height: 100%;">
          <img
            id="${element.id}"
            src="${barcodeImageUrl}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${element.content["border-radius"]};
              border: ${element.content["border"]} ${element.content["border-color"]};
            "
          />
        </div>`;
    }

    if (element.content.type === "QR") {
      const qrCodeDataURL = await QRCode.toDataURL(content);
      htmlDataDiv = `<div style="width: 100%; height: 100%;">
          <img
            id="${element.id}"
            src="${qrCodeDataURL}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${element.content["border-radius"]};
              border: ${element.content["border"]} ${element.content["border-color"]};
            "
          />
        </div>`;
    }

    if (element.content.type === "Text") {
      htmlDataDiv = `<div
        id="${element.id}"
        style="
          color: ${element.content["color"]};
          font-weight: ${element.content["font-weight"]};
          font-style: ${element.content["font-style"]};
          font-size: ${element.content["font-size"]};
          line-height: ${element.content["line-height"]};
          font-family: ${element.content["font-family"]};
          text-align: ${element.content["text-align"]};
        "
      >
        ${element.id ? content : element.name}
      </div>`;
    }

    const htmlData = `
      <div>
        <div
          style="
            touch-action: none;
            position: absolute;
            box-sizing: border-box;
            transform: translate(${element.props.left}px, ${element.props.top}px) ${element.rotate};
            z-index: auto;
            user-select: auto;
            width: ${element.props.w}px;
            height: ${element.props.h}px;
          "
        >
          ${htmlDataDiv}
        </div>
      </div>
    `;

    innerHtml += htmlData; // Concatenate the generated HTML for each element
  }

  return innerHtml;
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

<style></style>
