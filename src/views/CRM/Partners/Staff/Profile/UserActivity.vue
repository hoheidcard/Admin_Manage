<template>
  <section class="user-activity user-profile">
    <div class="table-card">
      <div class="table-header">
        <div class="left">
          <div class="title-row">
            <div class="icon">
              <icon-user></icon-user>
            </div>
            <div class="titles">
              <div class="sub-title">Users : Activity Log</div>
              <h5 class="main-title">Activity Log</h5>
            </div>
          </div>
          <div class="about">This is my report This is my report</div>
        </div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search here">
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div>
          <div class="icons">
            <div class="icon-wrapper" v-click-outside="closeFilterList">
              <div class="icon tooltip-wrapper" @click.prevent="toggleFilterList">
                <icon-filter></icon-filter>
                <div class="tooltip">Filter</div>
              </div>
              <div class="filter-list" v-if="formVar.filterList">
                <div class="list-item">High to Low</div>
                <div class="list-item">Low to High</div>
              </div>
            </div>
            <div class="icon tooltip-wrapper">
              <icon-reload></icon-reload>
              <div class="tooltip">Refresh</div>
            </div>
          </div>
        </div>
      </div>
      <div class="table-body mt-16">
        <div class="table-outer">
          <table class="table">
            <thead>
              <th>#</th>
              <th>Username</th>
              <th>IP Address</th>
              <th>Date & Time</th>
              <th>Device</th>
              <th>Activity Type</th>
              <th>Location</th>
            </thead> 
            <tbody>
              <tr v-for="(item, index) in activityData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.date_time }}</td>
                <td>{{ item.device }}</td>
                <td>{{ item.activity_type }}</td>
                <td>{{ item.location }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-no-data">
          <div>No records Found!</div>
        </div>
        <div class="table-footer">
          <Pagination :currentPage="1" :totalItem="10"
            :itemsPerPage="10" @update:currentPage="pageChange($event)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue"

const formVar = reactive({
  filterList: false,
})

const activityData = [
  {
    username: 'john_carter254',
    ip: 254793584,
    date_time: '24 Dec 2020 16:45PM',
    device: 'Laptop',
    activity_type: 'Login',
    location: 'Mumbai',
  },
  {
    username: 'john_carter254',
    ip: 254793584,
    date_time: '24 Dec 2020 16:45PM',
    device: 'Laptop',
    activity_type: 'Login',
    location: 'Mumbai',
  },
  {
    username: 'john_carter254',
    ip: 254793584,
    date_time: '24 Dec 2020 16:45PM',
    device: 'Laptop',
    activity_type: 'Login',
    location: 'Mumbai',
  },
  {
    username: 'john_carter254',
    ip: 254793584,
    date_time: '24 Dec 2020 16:45PM',
    device: 'Laptop',
    activity_type: 'Login',
    location: 'Mumbai',
  },
]


function closeFilterList() {
  formVar.filterList = false;
}

function toggleFilterList() {
  formVar.filterList =  !formVar.filterList
}


</script>

<style>

</style>