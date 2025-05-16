<template>
  <section class="notification-page">
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
            <div class="table-toggle flex align-center gap-10">
              <div class="text text-small">Do not disturb</div>
              <label class="toggle-control">
                <input type="checkbox" >
                <span class="control"></span>
              </label>
            </div>
            <div class="searchbar">
              <input type="text" placeholder="Search here" />
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            
            <div class="icons">
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
                    <div class="option-btns">
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
    </div>
  </section>
  <!-- <Loader /> -->
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  confirmModal: false,
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