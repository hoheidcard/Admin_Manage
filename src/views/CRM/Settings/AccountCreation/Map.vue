<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Mapping</div>
            <h5>Map List </h5>
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
                <div class="name">Department &nbsp; > &nbsp; Class &nbsp; > &nbsp; House</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="mapVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
            <div class="class-list">
              <div class="list-item">
                <div class="name">Department &nbsp; > &nbsp; Class &nbsp; > &nbsp; House</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="mapVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
            <div class="class-list">
              <div class="list-item">
                <div class="name">Department &nbsp; > &nbsp; Class &nbsp; > &nbsp; House</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="mapVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
            <div class="class-list">
              <div class="list-item">
                <div class="name">Department &nbsp; > &nbsp; Class &nbsp; > &nbsp; House</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="mapVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
            <div class="class-list">
              <div class="list-item">
                <div class="name">Department &nbsp; > &nbsp; Class &nbsp; > &nbsp; House</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="mapVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
            <div class="class-list">
              <div class="list-item">
                <div class="name">Department &nbsp; > &nbsp; Class &nbsp; > &nbsp; House</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="mapVar.confirmModal = true">
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
            <div class="text text-grey text-small">Mapping</div>
            <h5>Map </h5>
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
            <Select v-model="mapVar.dept" :options="deptOptions" placeholder="Select Department"></Select>
            <div class="err-msg">Please select department</div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="mapVar.class" :options="classOptions" placeholder="Select Class"></Select>
            <div class="err-msg">Please select class</div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="mapVar.house" :options="houseOptions" placeholder="Select House"></Select>
            <div class="err-msg">Please select house</div>
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
    v-model:show="mapVar.confirmModal"
    class="confirm-modal"
    headerClasses="header-bg"
    >
    <template v-slot:header>
      <div class="title" showHeader="true">Delete</div>
      <div class="close-btn" @click.prevent="mapVar.confirmModal = false">
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
        <div class="btn red-btn" @click.prevent="mapVar.confirmModal = false">Cancel</div>
        <div class="btn white-btn">Delete</div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { reactive } from "vue";

const mapVar = reactive({
  confirmModal: false,
  dept: null,
  class: null,
  house: null,
})

const deptOptions = [
  { id: 1, name: 'department 1 ' },
  { id: 2, name: 'department 2' },
]
const classOptions = [
  { id: 1, name: 'class 1 ' },
  { id: 2, name: 'class 2' },
]
const houseOptions = [
  { id: 1, name: 'house 1 ' },
  { id: 2, name: 'house 2' },
]

</script>

<style>

</style>
