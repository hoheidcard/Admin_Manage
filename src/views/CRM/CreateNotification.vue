<template>
  <section class="create-notification-page">
    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-bell></icon-bell>
              </div>
              <div class="titles">
                <div class="sub-title">Notifications</div>
                <h5 class="main-title">Notifications</h5>
              </div>
            </div>
            <div class="about">These are our notifications</div>
          </div>
          <div class="right">
            <div class="searchbar">
              <input type="text" placeholder="Search here" />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            <div class="date-input">
                <input type="date" class="" />
                <div class="icon">
                  <icon-calendar></icon-calendar>
                </div>
              </div>
            <div class="icons">
              <div class="icon tooltip-wrapper" @click.prevent="formVar.createModal = true">
                <icon-plus></icon-plus>
                <div class="tooltip">Create Notification</div>
              </div>
              <div class="icon tooltip-wrapper">
                <icon-reload></icon-reload>
                <div class="tooltip">Refresh</div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-body p-16">
          <div class="table-outer">
            <table class="table">
              <thead>
                <th>#</th>
                <th>Source</th>
                <th>Message</th>
                <th>Time</th>
                <th>Date</th>
                <th>Status</th>
                <th class="text-center">Actions</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in notiData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.source }}</td>
                  <td>{{ item.message }}</td>
                  <td>{{ item.time }} ago</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <div class="badge success-badge">Published</div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <div class="icon tooltip-wrapper" @click.prevent="formVar.createModal = true">
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </div>
                      <div class="icon tooltip-wrapper" @click.prevent="formVar.statusModal = true">
                        <icon-setting></icon-setting>
                        <div class="tooltip">Change Status</div>
                      </div>
                      <div class="icon tooltip-wrapper" @click.prevent="formVar.confirmModal = true">
                        <icon-delete></icon-delete>
                        <div class="tooltip">Delete</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="table-no-data">
            <div>No records Found!</div>
          </div>
          <div class="table-footer">
            <Pagination
              :currentPage="1"
              :totalItem="10"
              :itemsPerPage="10"
              @update:currentPage="pageChange($event)"
            />
          </div>
        </div>
      </div>
      <!-- Modals -->
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
        <h4>
          Are you sure want to Delete
        </h4>
        <div class="modal-footer">
          <div class="btns">
            <div class="btn red-btn" @click.prevent="formVar.confirmModal = false">Cancel</div>
            <div class="btn white-btn">Save</div>
          </div>
        </div>
      </Modal>
      <Modal
        v-model:show="formVar.createModal"
        class="create-modal"
        headerClasses="header-bg"
        >
        <template v-slot:header>
          <div class="title" showHeader="true">Create Notification</div>
          <div class="close-btn" @click.prevent="formVar.createModal = false">
            <icon-cross></icon-cross>
          </div>
        </template>
        <form action="" class="form">
          <div class="form-item mb-16">
            <input type="text" placeholder="Enter Title">
            <div class="err-msg">Please enter title</div>
          </div>
          <div class="form-item mb-16">
            <textarea name="" id="" rows="5" placeholder="Enter Description"></textarea>
            <div class="err-msg">Please enter description</div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <div class="title">Publish Date</div>
              <div class="date-input">
                <input type="date" class="w-100-i" />
                <div class="icon">
                  <icon-calendar></icon-calendar>
                </div>
              </div>
              <div class="err-msg">Please select date</div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="title">Publish Time</div>
              <time-picker class="mb-16" v-model="formVar.timePicker" />
              <!-- <div class="err-msg">Please select time</div> -->
            </div>
          </div>
          <div class="modal-footer">
            <div class="btns">
              <div class="btn red-btn" @click.prevent="formVar.createModal = false">Cancel</div>
              <div class="btn white-btn">Create</div>
            </div>
          </div>
        </form>
      </Modal>
      <Modal
        v-model:show="formVar.statusModal"
        class="status-modal"
        headerClasses="header-bg"
      >
        <template v-slot:header>
          <div class="title" showHeader="true">Change Status</div>
          <div class="close-btn" @click.prevent="formVar.statusModal = false">
            <icon-cross></icon-cross>
          </div>
        </template>
        <div class="status-row">
          <label for="approve" class="data">
            <input type="radio" id="approve" name="status" />
            <div class="data-inner approve-card">
              <icon-success></icon-success>
              <div class="title">PUBLISHED</div>
            </div>
          </label>
          <label for="pending" class="data">
            <input type="radio" id="pending" name="status" />
            <div class="data-inner pending-card">
              <icon-warning></icon-warning>
              <div class="title">HOLD</div>
            </div>
          </label>
          <label for="block" class="data">
            <input type="radio" id="block" name="status" />
            <div class="data-inner block-card">
              <icon-block></icon-block>
              <div class="title">OUTDATED</div>
            </div>
          </label>
        </div>
        <div class="modal-footer">
          <div class="btns">
            <div class="btn red-btn" @click.prevent="formVar.statusModal = false">
              Cancel
            </div>
            <div class="btn white-btn">Submit</div>
          </div>
        </div>
      </Modal>
    </div>
  </section>
  <!-- <Loader /> -->
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  confirmModal: false,
  createModal: false,
  statusModal: false,
  timePicker: '00:00',
})

const notiData = [
  {
    source: 'Ecommerce',
    message: 'New user created',
    time: '1 hour',
    date: '12-05-2022',
  },
  {
    source: 'Ecommerce',
    message: 'New user created',
    time: '1 hour',
    date: '12-05-2022',
  },
  {
    source: 'Ecommerce',
    message: 'New user created',
    time: '1 hour',
    date: '12-05-2022',
  },
  {
    source: 'Ecommerce',
    message: 'New user created',
    time: '1 hour',
    date: '12-05-2022',
  },
]

</script>

<style>

</style>