<template>
  <section :duration="animationDuration">
    <div
      class="modal fade"
      :class="[
        { 'show d-block': show },
        { 'd-none': !show },
        { 'align-center': centerModal },
      ]"
      v-show="show"
      tabindex="-1"
      role="dialog"
      :aria-hidden="!show"
    >
      <div
        class="modal-dialog"
        :class="[
          { 'modal-lg': type === 'lg', 'modal-full': type === 'full' },
          modalClasses,
        ]"
      >
        <div class="modal-content">
          <div class="modal-header" :class="headerClasses" v-if="showHeader">
            <slot name="header"></slot>
          </div>

          <div class="modal-body" :class="bodyClasses">
            <slot></slot>
          </div>

          <div
            class="modal-footer"
            :class="footerClasses"
            v-if="showFooter && $slots.footer"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "modal",
  props: {
    show: Boolean,
    centerModal: {
      type: Boolean,
      default: false,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        const acceptedValues = ["", "lg", "full"];
        return acceptedValues.indexOf(value) !== -1;
      },
    },
    modalClasses: [Object, String],
    headerClasses: [Object, String],
    bodyClasses: [Object, String],
    footerClasses: [Object, String],
    animationDuration: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:show", false);
      this.$emit("close");
    },
  },
  watch: {
    show(val) {
      const documentClasses = document.body.classList;
      if (val) {
        documentClasses.add("modal-open");
      } else {
        documentClasses.remove("modal-open");
      }
    },
  },
};
</script>

<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
