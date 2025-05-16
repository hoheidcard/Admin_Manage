<template>
  <Modal
    v-model:show="nav.confirmModal"
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
      <img src="/images/png/delete.png" alt="">
    </div>
    <h4 class="text-red">
      Are you sure want to Delete
    </h4>
    <div class="modal-footer">
      <div class="btns">
        <div class="btn red-btn" @click.prevent="nav.confirmModal = false">Cancel</div>
        <div class="btn white-btn">Confirm</div>
      </div>
    </div>
  </Modal>
</template>
