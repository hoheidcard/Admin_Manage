<template>
  <section class="card-design-page">
    <div v-if="formVar.deviceWidth < 768">
      <h4 style="text-align: center">Unsupported Device!</h4>
    </div>
    <div class="container" v-else>
      <div class="left-card main-card">
        <div class="card-header">
          <div class="left">
            <icon-card></icon-card>
            <h5>Id Card Editor</h5>
          </div>
        </div>

        <div class="card-body">
          <form class="form">
            <div class="row">
              <div class="form-item mb-16">
                <div class="title mb-10-i">Height(mm)</div>
                <input
                  type="number"
                  id="card_height"
                  v-model="formVar.cardHeight"
                  placeholder="Card Height"
                />
              </div>
              <div class="form-item mb-16">
                <div class="title mb-10-i">Width(mm)</div>
                <input
                  type="number"
                  id="card_width"
                  v-model="formVar.cardWidth"
                  placeholder="Card Width"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-item mb-16">
                <div class="title mb-10-i">Horizontal Gap(mm)</div>
                <input
                  type="number"
                  v-model="formVar.cardHorizontalGap"
                  placeholder="Card Gap"
                />
              </div>
              <div class="form-item mb-16">
                <div class="title mb-10-i">Vertical Gap(mm)</div>
                <input
                  type="number"
                  v-model="formVar.cardVerticalGap"
                  placeholder="Gap"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-item mb-16">
                <div class="title mb-10-i">Type</div>
                <Select
                  v-model="formVar.cardType"
                  :options="cardTypeOptions"
                  placeholder="Select Type"
                ></Select>
              </div>
              <div class="form-item mb-16">
                <div class="title mb-10-i">Side</div>
                <Select
                  v-model="formVar.cardSide"
                  :options="sideOptions"
                  placeholder="Select Side"
                ></Select>
              </div>
            </div>
            <div class="row">
              <div class="form-item mb-16">
                <div class="title mb-10-i">Front Image</div>
                <input
                  type="file"
                  @change="uploadFrontBackground"
                  placeholder="Front Background"
                />
              </div>
              <div class="form-item mb-16">
                <div class="title mb-10-i">Back Image</div>
                <input
                  type="file"
                  @change="uploadBackBackground"
                  placeholder="Back Background"
                />
              </div>
            </div>
            <div v-if="formVar.componentData">
              <div v-if="formVar.componentData.content.type == 'Text'">
                <div class="form-item mb-16">
                  <div class="title mb-10-i">Title</div>
                  <input
                    type="text"
                    v-model="formVar.componentData.name"
                    placeholder="Title"
                  />
                </div>
                <div class="form-item mb-16">
                  <FontSelect
                    v-model="formVar.componentData.content['font-family']"
                    :options="fontList"
                    placeholder="Select Font"
                  ></FontSelect>
                </div>
                <div class="row">
                  <div class="form-item mb-16">
                    <FontSelect
                      v-model="formVar.componentData.content['font-weight']"
                      :options="fontWeightOptions"
                      placeholder="Select Weight"
                    ></FontSelect>
                  </div>
                  <div class="form-item mb-16">
                    <FontSelect
                      v-model="formVar.componentData.content['font-style']"
                      :options="fontStyleOptions"
                      placeholder="Select Style"
                    ></FontSelect>
                  </div>
                  <div class="form-item mb-16">
                    <FontSelect
                      v-model="formVar.componentData.content['text-align']"
                      :options="textAlignOptions"
                      placeholder="Select Align"
                    ></FontSelect>
                  </div>
                </div>
                <div class="row">
                  <div class="form-item mb-16">
                    <input
                      type="color"
                      v-model="formVar.componentData.content['color']"
                      :style="{
                        backgroundColor: formVar.componentData.content['color'],
                      }"
                    />
                  </div>
                  <div class="form-item mb-16">
                    <FontSelect
                      v-model="formVar.componentData.content['font-size']"
                      :options="fontSizeOptions"
                      placeholder="Select Size"
                    ></FontSelect>
                  </div>
                </div>
              </div>
              <div v-if="formVar.componentData.content.type == 'Image'">
                <div class="row">
                  <div class="form-item mb-16">
                    <input
                      type="color"
                      v-model="formVar.componentData.content['border-color']"
                      :style="{
                        backgroundColor:
                          formVar.componentData.content['border-color'],
                      }"
                    />
                  </div>
                  <div class="form-item mb-16">
                    <FontSelect
                      v-model="formVar.componentData.content['border']"
                      :options="borderOptions"
                      placeholder="Select Border"
                    ></FontSelect>
                  </div>
                  <div class="form-item mb-16">
                    <FontSelect
                      v-model="formVar.componentData.content['border-radius']"
                      :options="radiusOptions"
                      placeholder="Select Radius"
                    ></FontSelect>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item mb-16">
                  <div class="title mb-10-i">Top</div>
                  <div class="quantity">
                    <button
                      type="button"
                      class="plus"
                      aria-label="Decrease"
                      @click.prevent="
                        updateByTransform(
                          (formVar.componentData.props.top -= 1),
                          formVar.componentData.props.left
                        )
                      "
                    >
                      &minus;
                    </button>
                    <input
                      type="number"
                      class="input-box"
                      v-model="formVar.componentData.props.top"
                      @keydown="
                        updateByTransform(
                          formVar.componentData.props.top,
                          formVar.componentData.props.left
                        )
                      "
                    />
                    <button
                      type="button"
                      class="plus"
                      aria-label="Increase"
                      @click.prevent="
                        updateByTransform(
                          (formVar.componentData.props.top += 1),
                          formVar.componentData.props.left
                        )
                      "
                    >
                      &plus;
                    </button>
                  </div>
                </div>
                <div class="form-item mb-16">
                  <div class="title mb-10-i">Left</div>

                  <div class="quantity">
                    <button
                      type="button"
                      class="plus"
                      aria-label="Decrease"
                      @click.prevent="
                        updateByTransform(
                          formVar.componentData.props.top,
                          (formVar.componentData.props.left -= 1)
                        )
                      "
                    >
                      &minus;
                    </button>
                    <input
                      type="number"
                      class="input-box"
                      v-model="formVar.componentData.props.left"
                      @keydown="
                        updateByTransform(
                          formVar.componentData.props.top,
                          formVar.componentData.props.left
                        )
                      "
                    />
                    <button
                      type="button"
                      class="plus"
                      aria-label="Increase"
                      @click.prevent="
                        updateByTransform(
                          formVar.componentData.props.top,
                          (formVar.componentData.props.left += 1)
                        )
                      "
                    >
                      &plus;
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item mb-16">
                  <div class="title mb-10-i">Height</div>
                  <div class="quantity">
                    <button
                      type="button"
                      class="plus"
                      aria-label="Decrease"
                      @click.prevent="
                        updateHeightWidth(
                          (formVar.componentData.props.h -= 1),
                          formVar.componentData.props.w
                        )
                      "
                    >
                      &minus;
                    </button>
                    <input
                      type="number"
                      class="input-box"
                      v-model="formVar.componentData.props.h"
                      @keydown="
                        updateHeightWidth(
                          formVar.componentData.props.h,
                          formVar.componentData.props.w
                        )
                      "
                    />
                    <button
                      type="button"
                      class="plus"
                      aria-label="Increase"
                      @click.prevent="
                        updateHeightWidth(
                          (formVar.componentData.props.h += 1),
                          formVar.componentData.props.w
                        )
                      "
                    >
                      &plus;
                    </button>
                  </div>
                </div>
                <div class="form-item mb-16">
                  <div class="title mb-10-i">Width</div>

                  <div class="quantity">
                    <button
                      type="button"
                      class="plus"
                      aria-label="Decrease"
                      @click.prevent="
                        updateHeightWidth(
                          formVar.componentData.props.h,
                          (formVar.componentData.props.w -= 1)
                        )
                      "
                    >
                      &minus;
                    </button>
                    <input
                      type="number"
                      class="input-box"
                      v-model="formVar.componentData.props.w"
                      @keydown="
                        updateHeightWidth(
                          formVar.componentData.props.h,
                          formVar.componentData.props.w
                        )
                      "
                    />
                    <button
                      type="button"
                      class="plus"
                      aria-label="Increase"
                      @click.prevent="
                        updateHeightWidth(
                          formVar.componentData.props.h,
                          (formVar.componentData.props.w += 1)
                        )
                      "
                    >
                      &plus;
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item mb-16">
                  <FontSelect
                    v-model="formVar.componentData.rotate"
                    :options="rotateOptions"
                    @selected="rotateComponent($event)"
                    placeholder="Select Rotation"
                  ></FontSelect>
                </div>
                <div class="form-item mb-16">
                  <button
                    type="button"
                    class="btn red-btn"
                    @click.prevent="deleteComponent"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div class="form-btns mb-16" style="flex-wrap: wrap; justify-content: start;">
              <button
                type="button"
                class="btn white-btn w-25"
                @click.prevent="createComponentModal('Text')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fonts"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="btn white-btn w-25"
                @click.prevent="createComponentModal('Image')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  <path
                    d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="btn white-btn w-25"
                @click.prevent="createComponentModal('QR')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-qr-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2h2v2H2z" />
                  <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z" />
                  <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z" />
                  <path
                    d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"
                  />
                  <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z" />
                </svg>
              </button>
              <button
                type="button"
                class="btn white-btn w-25"
                @click.prevent="createComponentModal('Barcode')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-upc"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"
                  />
                </svg>
              </button>
              <button
                type="button"
                v-if="formVar.cardSide === 'Double'"
                class="btn white-btn w-25"
                @click="toggleSide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                  />
                </svg>
              </button>

              <button type="button" class="btn white-btn w-25" @click="zoomIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-zoom-in"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                  />
                  <path
                    d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="btn white-btn w-25"
                @click.prevent="zoomOut"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-zoom-out"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                  />
                  <path
                    d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
            </div>
            <div class="form-item save-btn mb-16 col-5">
              <button
                type="button"
                class="btn primary-btn"
                @click.prevent="saveImage"
              >
                Save
              </button>
            </div>
            <div
              class="form-item save-btn mb-16 col-5"
              v-if="
                route.query.from == 'Class' ||
                route.query.from == 'House' ||
                route.query.from == 'Designation'
              "
            >
              <button
                type="button"
                class="btn primary-btn"
                @click.prevent="loadMaxData"
              >
                Max Data Fill
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="right-design">
        <div class="design-card-outer">
          <div
            class="design-card"
            :style="{
              height: getCardHeight + 'px',
              width: getCardWidth + 'px',
              transform: `rotateY(${isFlipped ? 180 : 0}deg) scale(${scale})`,
              marginTop: '5rem',
            }"
          >
            <div
              class="front-side"
              :style="{
                width: '100%',
                height: '100%',
                display: `flex`,
                overflow: `hidden`,
                padding: `3px 3px`,
                border: '1px solid #ccc',
                // position: `relative`,
                backgroundImage: formVar.frontBackground
                  ? `url(${formVar.frontBackground})`
                  : 'none',
                'background-size': 'cover',
                'background-position': 'center',
              }"
            >
              <div
                v-for="(copiedComponent, index) in frontComponents"
                :key="index"
              >
                <component
                  :h="copiedComponent.props.h"
                  :w="copiedComponent.props.w"
                  :x="copiedComponent.props.left"
                  :y="copiedComponent.props.top"
                  :parent="copiedComponent.props.parent"
                  :is="copiedComponent.type"
                  @resize="updateTransform(index)"
                  @drag="updateTransform(index)"
                  @activated="openEditModal(copiedComponent, index)"
                  ref="frontComponentRefs"
                  :id="'component-' + index"
                >
                  <div style="width: 100%; height: 100%">
                    <img
                      :id="copiedComponent.id"
                      :style="copiedComponent.content"
                      v-if="copiedComponent.content.type === 'Image'"
                      src="/images/png/camera.png"
                      alt=""
                    />
                    <img
                      :id="copiedComponent.id"
                      :style="copiedComponent.content"
                      v-if="copiedComponent.content.type === 'QR'"
                      src="/qr.png"
                      alt=""
                    />
                    <img
                      :id="copiedComponent.id"
                      :style="copiedComponent.content"
                      v-if="copiedComponent.content.type === 'Barcode'"
                      src="/barcode.png"
                      alt=""
                    />
                    <div
                      v-if="copiedComponent.content.type === 'Text'"
                      :style="copiedComponent.content"
                      :id="copiedComponent.id"
                    >
                      {{ copiedComponent.name }}
                    </div>
                  </div>
                </component>
              </div>
            </div>
            <div
              class="back-side"
              :style="{
                width: '100%',
                height: '100%',
                display: `flex`,
                overflow: `hidden`,
                padding: `3px 3px`,
                border: '1px solid #ccc',
                // position: `relative`,
                backgroundImage: formVar.backBackground
                  ? `url(${formVar.backBackground})`
                  : 'none',
                'background-size': 'cover',
                'background-position': 'center',
              }"
            >
              <div
                v-for="(copiedComponent, index) in backComponents"
                :key="index"
              >
                <component
                  :h="copiedComponent.props.h"
                  :w="copiedComponent.props.w"
                  :x="copiedComponent.props.left"
                  :y="copiedComponent.props.top"
                  :parent="copiedComponent.props.parent"
                  :is="copiedComponent.type"
                  @resize="updateTransform(index)"
                  @drag="updateTransform(index)"
                  @activated="openEditModal(copiedComponent, index)"
                  :id="'component-' + index"
                  ref="backComponentRefs"
                >
                  <div style="width: 100%; height: 100%">
                    <img
                      :id="copiedComponent.id"
                      :style="copiedComponent.content"
                      v-if="copiedComponent.content.type === 'Image'"
                      src="/images/png/camera.png"
                      alt=""
                    />
                    <img
                      :id="copiedComponent.id"
                      :style="copiedComponent.content"
                      v-if="copiedComponent.content.type === 'QR'"
                      src="/qr.png"
                      alt=""
                    />
                    <img
                      :id="copiedComponent.id"
                      :style="copiedComponent.content"
                      v-if="copiedComponent.content.type === 'Barcode'"
                      src="/barcode.png"
                      alt=""
                    />
                    <div
                      v-if="copiedComponent.content.type === 'Text'"
                      :style="copiedComponent.content"
                      :id="copiedComponent.id"
                    >
                      {{ copiedComponent.name }}
                    </div>
                  </div>
                </component>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal
      v-model:show="formVar.addComponentModal"
      class="faq-modal"
      headerClasses="header-bg"
    >
      <template v-slot:header>
        <div class="title" showHeader="true">Add Text/Image/QR/Barcode</div>
        <div
          class="close-btn"
          @click.prevent="formVar.addComponentModal = false"
        >
          <icon-cross></icon-cross>
        </div>
      </template>
      <form class="form mb-16">
        <div class="form-item mb-16" v-if="formVar.cardType !== 'Other'">
          <div class="title">Type</div>
          <FontSelect
            :options="keyValueOptions"
            v-model="formVar.keyValueType"
          ></FontSelect>
        </div>
        <div
          class="form-item mb-16"
          v-if="formVar.keyValueType == 'Value' && formVar.cardType === 'Staff'"
        >
          <div class="title">Component Id</div>
          <single-select
            :options="staffFields"
            v-model="formVar.componentId"
          ></single-select>
        </div>
        <div
          class="form-item mb-16"
          v-if="
            formVar.keyValueType == 'Value' && formVar.cardType === 'Student'
          "
        >
          <div class="title">Component Id</div>
          <single-select
            :options="studentFields"
            v-model="formVar.componentId"
          ></single-select>
        </div>
        <div class="form-item mb-16" v-if="formVar.componentType == 'Text'">
          <div class="title">Component Name</div>
          <input
            type="text"
            placeholder="Enter"
            v-model="formVar.componentName"
            maxlength="30"
          />
        </div>
      </form>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn red-btn"
            type="button"
            @click.prevent="formVar.addComponentModal = false"
          >
            Cancel
          </div>
          <div
            class="btn white-btn"
            type="button"
            @click.prevent="createComponent"
          >
            Create
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import {
  computed,
  nextTick,
  onBeforeMount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { borderOptions, radiusOptions } from "../constants/border";
import { fontList } from "../constants/fonts";
import { fontSizeOptions } from "../constants/fontSize";
import { rotateOptions } from "../constants/rotate";
import { studentFields } from "../constants/studentFields";
import { apiServices } from "../services/api.service";

const route = useRoute();
const store = useStore();

const frontComponentRefs = ref([]);
const backComponentRefs = ref([]);
const scale = ref(1);

const formVar = reactive({
  colorModal: false,

  cardHeight: 60,
  cardWidth: 40,
  cardVerticalGap: 0,
  cardHorizontalGap: 0,
  cardType: "Other",
  cardSide: "Single",

  frontBackgroundFile: "",
  frontBackground: "",

  backBackgroundFile: "",
  backBackground: "",

  editComponentModal: false,
  addComponentModal: false,

  componentId: "",
  componentTitle: "",
  componentName: "",
  componentType: "Text",
  keyValueType: "Title",
  imageUrl: "",

  componentData: null,
  componentIndex: null,

  deviceWidth: 1000,
});

const isFlipped = ref(false);

const toggleSide = () => {
  isFlipped.value = !isFlipped.value;
};

const cardTypeOptions = [
  { id: "Staff", name: "Staff" },
  { id: "Student", name: "Student" },
  { id: "Parent", name: "Parent" },
  { id: "Other", name: "Other" },
];

const keyValueOptions = [
  { id: "Title", name: "Title" },
  { id: "Value", name: "Value" },
];

const sideOptions = [
  { id: "Single", name: "Single" },
  { id: "Double", name: "Double" },
];

const fontStyleOptions = [
  { id: "Normal", name: "Normal" },
  { id: "italic", name: "Italic" },
];

const fontWeightOptions = [
  { id: "Normal", name: "Normal" },
  { id: "bold", name: "Bold" },
];

const textAlignOptions = [
  { id: "start", name: "start" },
  { id: "center", name: "center" },
  { id: "end", name: "end" },
];

let action = "";

const getCardHeight = computed(() => {
  const dpi = window.devicePixelRatio * 192; // Assumes 96 DPI standard and multiplies by device pixel ratio
  const mmToInch = 25.4; // 1 inch = 25.4 mm
  return (formVar.cardHeight / mmToInch) * dpi;
});

const getCardWidth = computed(() => {
  const dpi = window.devicePixelRatio * 192; // Assumes 96 DPI standard and multiplies by device pixel ratio
  const mmToInch = 25.4; // 1 inch = 25.4 mm
  return (formVar.cardWidth / mmToInch) * dpi;
});

const zoomIn = () => {
  if (scale.value < 1.7) scale.value += 0.1;
};

const zoomOut = () => {
  if (scale.value > 0.5) scale.value -= 0.1;
};

const frontComponents = ref([]);

const backComponents = ref([]);

const loadEditor = async () => {
  const payload = await store.dispatch("IdCardStock/getEditor", {
    id: route.query.id,
    settingId: route.query.settingId,
    type: route.query.from,
    sp: route.query.sp,
  });
  if (payload.status === 200 && payload.data.card) {
    const data = JSON.parse(payload.data.card);
    frontComponents.value = data.frontCard;
    formVar.backBackground = data.backCardImage;
    backComponents.value = data.backCard;
    formVar.frontBackground = data.frontCardImage;
    formVar.cardHeight = data.cardHeight;
    formVar.cardWidth = data.cardWidth;
    formVar.cardVerticalGap = data.cardVerticalGap;
    formVar.cardHorizontalGap = data.cardHorizontalGap;
    formVar.cardType = data.type;
    formVar.cardSide = data.side;
  }
};

const loadMaxData = async () => {
  if (route.query.from === "Class" || route.query.from === "House") {
    const payload = await store.dispatch("IdCardStock/findMaxDetailStudent", {
      settingId: route.query.settingId,
    });
    if (payload.status === 200 && payload.data) {
      studentFields.forEach(async (element) => {
        const item = document.getElementById(element.name);
        if (item) {
          await nextTick();
          if (item.tagName.toLowerCase() === "img") {
            item.src = payload.data[element.id] || "";
          } else {
            item.innerText = payload.data[element.id] || "";
          }
        }
      });
    }
  }
  if (route.query.from === "Class" || route.query.from === "Designation") {
    const payload = await store.dispatch("IdCardStock/findMaxDetailStaff", {
      settingId: route.query.settingId,
    });
    if (payload.status === 200 && payload.data) {
    }
  }
};

onBeforeMount(() => {
  if (route.query.type === "Staff" || route.query.type === "Student") {
    formVar.cardType = route.query.type;
  }
  loadEditor();
});

const updateScreenWidth = () => {
  formVar.deviceWidth = window.innerWidth;
};

onMounted(() => {
  updateScreenWidth(); // Set the initial value
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

const deleteComponent = async () => {
  const index = formVar.componentIndex;

  const components = isFlipped.value
    ? backComponents.value
    : frontComponents.value;

  components.splice(index, 1);
  formVar.componentData = null;
};

const rotateComponent = async (value) => {
  const index = formVar.componentIndex;

  const components = isFlipped.value
    ? backComponents.value
    : frontComponents.value;
  components[index] = {
    ...components[index],
    rotate: value.name,
    style: {
      transform: `translate(${components[index].props.top}px, ${components[index].props.left}px) ${value.name}`,
      "z-index": "auto",
      "user-select": "auto",
    },
  };

  const element = document.getElementById("component-" + index);
  if (element) {
    await nextTick();
    element.style.transform = `translate(${components[index].props.top}px, ${components[index].props.left}px) ${value.name}`; // Set new transform value
  }
};

const updateByTransform = async (top, left) => {
  const index = formVar.componentIndex;
  // Wait for the DOM to update
  await nextTick();

  const componentRefs = isFlipped.value
    ? backComponentRefs.value
    : frontComponentRefs.value;
  const componentRef = componentRefs[index] && componentRefs[index].$el;

  if (!componentRef) {
    return;
  }

  const componentRect = componentRef.getBoundingClientRect();

  const { width, height } = componentRect;

  const components = isFlipped.value
    ? backComponents.value
    : frontComponents.value;
  components[index] = {
    ...components[index],
    props: {
      w: width,
      h: height,
      top: top,
      left: left,
    },
    style: {
      transform: `translate(${top}px, ${left}px)`,
      "z-index": "auto",
      "user-select": "auto",
    },
  };
};

const updateHeightWidth = async (height, width) => {
  const index = formVar.componentIndex;
  // Wait for the DOM to update
  await nextTick();

  const components = isFlipped.value
    ? backComponents.value
    : frontComponents.value;

  components[index] = {
    ...components[index],
    props: {
      ...components[index].props,
      w: width,
      h: height,
    },
    style: {
      width: `${width}px`,
      height: `${height}px`,
    },
  };
};

const updateTransform = async (index) => {
  // Wait for the DOM to update
  await nextTick();

  const containerRef = isFlipped.value
    ? document.querySelector(".back-side")
    : document.querySelector(".front-side");
  const componentRefs = isFlipped.value
    ? backComponentRefs.value
    : frontComponentRefs.value;
  const componentRef = componentRefs[index] && componentRefs[index].$el;

  if (!componentRef) {
    return;
  }

  const containerRect = containerRef.getBoundingClientRect();
  const componentRect = componentRef.getBoundingClientRect();

  const { width, height, left, top } = componentRect;
  const { left: containerLeft, top: containerTop } = containerRect;

  const relativeLeft = left - containerLeft - 4;
  const relativeTop = top - containerTop - 4;

  const components = isFlipped.value
    ? backComponents.value
    : frontComponents.value;

  components[index] = {
    ...components[index],
    props: {
      w: width,
      h: height,
      top: relativeTop,
      left: relativeLeft,
    },
    style: {
      transform: `translate(${relativeLeft}px, ${relativeTop}px)`,
    },
  };
  formVar.componentData = components[index];
};

const createComponent = () => {
  if (action === "copy") {
    let content = null;
    if (formVar.componentType === "Image") {
      content = {
        type: formVar.componentType,
        height: "100%",
        width: "100%",
        "border-radius": "1px",
        border: "0px solid",
        "border-color": "#000000",
      };
    }
    if (formVar.componentType === "QR") {
      content = {
        type: formVar.componentType,
        height: "100%",
        width: "100%",
        "border-radius": "1px",
        border: "0px solid",
        "border-color": "#000000",
      };
    }
    if (formVar.componentType === "Barcode") {
      content = {
        type: formVar.componentType,
        height: "100%",
        width: "100%",
        "border-radius": "1px",
        border: "0px solid",
        "border-color": "#000000",
      };
    }

    if (formVar.componentType === "Text") {
      content = {
        type: formVar.componentType,
        color: "#000000",
        "font-weight": "Normal",
        "font-style": "Normal",
        "font-size": "12px",
        "line-height": 1,
        "font-family": "",
        "text-align": "start",
      };
    }
    if (isFlipped.value) {
      backComponents.value.push({
        type: "vue-draggable-resizable",
        props: { w: 200, h: 50, top: 0, left: 0 },
        content,
        rotate: "rotate(0deg)",
        id: formVar.componentId,
        name: formVar.componentName,
      });
    } else {
      frontComponents.value.push({
        type: "vue-draggable-resizable",
        props: { w: 200, h: 50, top: 0, left: 0 },
        content,
        rotate: "rotate(0deg)",
        id: formVar.componentId,
        name: formVar.componentName,
      });
    }
  }
  formVar.addComponentModal = false;
  formVar.componentName = "";
  formVar.componentId = "";
  formVar.componentType = "";
  formVar.imageUrl = "";
};

async function uploadFrontBackground(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    try {
      const payload = await apiServices.createImage(file);
      formVar.frontBackground = payload.data.image;
    } catch (error) {
      alert("Please upload a valid image file.");
    }
  } else {
    alert("Please upload a valid image file.");
  }
  event.target.files = null;
}

async function uploadBackBackground(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    try {
      const payload = await apiServices.createImage(file);
      formVar.backBackground = payload.data.image;
    } catch (error) {
      alert("Please upload a valid image file.");
    }
  } else {
    alert("Please upload a valid image file.");
  }
  event.target.files = null;
}

const createComponentModal = (type) => {
  formVar.componentType = type;
  action = "copy";
  formVar.addComponentModal = true;
};

const openEditModal = (data, index) => {
  formVar.componentData = data;
  formVar.componentIndex = index;
};

const saveImage = () => {
  if (!route.query.id) return;
  const card = JSON.stringify({
    frontCard: frontComponents.value,
    backCardImage: formVar.backBackground,
    backCard: backComponents.value,
    frontCardImage: formVar.frontBackground,
    cardHeight: formVar.cardHeight,
    cardWidth: formVar.cardWidth,
    cardVerticalGap: formVar.cardVerticalGap,
    cardHorizontalGap: formVar.cardHorizontalGap,
    type: formVar.cardType,
    side: formVar.cardSide,
  });
  if (route.query.from === "Editor") {
    store.dispatch("IdCardStock/updateProduct", { id: route.query.id, card });
  }
  if (route.query.from === "Class") {
    if (route.query.sp === "Student") {
      store.dispatch("IdCardStock/updateIdCardClassStudent", {
        id: route.query.id,
        card,
        settingId: route.query.settingId,
      });
    }
    if (route.query.sp === "Father") {
      store.dispatch("IdCardStock/updateIdCardParent", {
        id: route.query.id,
        card,
        settingId: route.query.settingId,
      });
    }
  }
  if (route.query.from === "Designation") {
    store.dispatch("IdCardStock/updateIdCardDesignation", {
      id: route.query.id,
      card,
      settingId: route.query.settingId,
    });
  }
  if (route.query.from === "House") {
    store.dispatch("IdCardStock/updateIdCardHouse", {
      id: route.query.id,
      card,
      settingId: route.query.settingId,
    });
  }
  // const canvas = document.createElement("canvas");
  // const ctx = canvas.getContext("2d");
  // const img = document.querySelector(".i-card-preview img");
  // canvas.width = img.naturalWidth;
  // canvas.height = img.naturalHeight;
  // ctx.filter = `brightness(${brightness.value}%) saturate(${saturation.value}%) invert(${inversion.value}%) grayscale(${grayscale.value}%)`;
  // ctx.translate(canvas.width / 2, canvas.height / 2);
  // if (rotate.value !== 0) {
  //   ctx.rotate((rotate.value * Math.PI) / 180);
  // }
  // ctx.scale(flipHorizontal.value, flipVertical.value);
  // ctx.drawImage(
  //   img,
  //   -canvas.width / 2,
  //   -canvas.height / 2,
  //   canvas.width,
  //   canvas.height
  // );
  // const link = document.createElement("a");
  // link.download = "image.jpg";
  // link.href = canvas.toDataURL();
  // link.click();
};
</script>

<style lang="scss"></style>
