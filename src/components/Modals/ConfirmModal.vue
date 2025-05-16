<template>
  <Modal
    v-model:show="false"
    class="confirm-modal"
    headerClasses="header-bg"
    >
    <template v-slot:header>
      <div class="title" showHeader="true">Delete</div>
      <div class="close-btn" @click.prevent="nav.confirmModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="delete-icon">
      <img src="/images/png/tick2.png" alt="">
    </div>
    <h4>
      Are you sure want to Proceed?
    </h4>
    <div class="modal-footer">
      <div class="btns">
        <div class="btn red-btn" @click.prevent="nav.confirmModal = false">Cancel</div>
        <div class="btn white-btn">Confirm</div>
      </div>
    </div>
  </Modal>
</template>