<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Houses</div>
            <h5>House List </h5>
          </div>
        </div>
        <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-reload></icon-reload>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="add-class-card">
          <div class="tab-content" >
            <div class="class-list">
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="houseVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="houseVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="houseVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="houseVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="houseVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="houseVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card p-0-i" >
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Houses</div>
            <h5>Create House </h5>
          </div>
        </div>
        <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-reload></icon-reload>
            </div>
          </div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">House</option>
              <option value="">Map Class</option>
              <option value="">Map Depart</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <form class="form">
          <div class="form-item mb-16">
            <input type="text" placeholder="House Name">
            <div class="err-msg">Please enter house name</div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="houseVar.class" :options="classOptions" placeholder="Select Class"></Select>
            <div class="err-msg">Please select class</div>
          </div>
          <div class="submit-btns mt-16">
            <div class="row">
              <div class="col-10">
                <button class="btn white-btn">Update</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Modal
    v-model:show="houseVar.confirmModal"
    class="confirm-modal"
    headerClasses="header-bg"
    >
    <template v-slot:header>
      <div class="title" showHeader="true">Delete</div>
      <div class="close-btn" @click.prevent="houseVar.confirmModal = false">
        <icon-cross></icon-cross>
      </div>
    </template>
    <div class="delete-icon">
      <img src="/images/png/delete.png" alt="">
    </div>
    <h4 class="text-gree">
      Are you sure want to Delete?
    </h4>
    <div class="modal-footer">
      <div class="btns">
        <div class="btn red-btn" @click.prevent="houseVar.confirmModal = false">Cancel</div>
        <div class="btn white-btn">Delete</div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { reactive } from "vue";

const houseVar = reactive({
  confirmModal: false,
  class: null,
})

const classOptions = [
  { id: 1, name: 'class 1 ' },
  { id: 2, name: 'class 2' },
]

</script>

<style>

</style>
