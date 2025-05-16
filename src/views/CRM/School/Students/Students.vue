<template>
  <section class="user-activity">
    <div class="container">
      <div class="table-card card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-user></icon-user>
              </div>
              <div class="titles">
                <div class="sub-title">Students : List</div>
                <h5 class="main-title">Our Students</h5>
              </div>
            </div>
            <div class="about">This is our students This is our students</div>
          </div>
          <div class="right">
            <Select
              v-model="formVar.class"
              :options="classOptions"
              placeholder="Select Class"
            ></Select>
            <Select
              v-model="formVar.section"
              :options="sectionOptions"
              placeholder="Select Section"
            ></Select>
            <Select
              v-model="formVar.house"
              :options="houseOptions"
              placeholder="Select House"
            ></Select>
            <div class="searchbar">
              <input type="text" placeholder="Search here">
              <div class="icon">
                <icon-search></icon-search>
              </div>
            </div>
            <div class="icons">
              <router-link to="/crm/add-student" class="icon tooltip-wrapper" >
                <icon-plus></icon-plus>
                <div class="tooltip">Add Student</div>
              </router-link>
              <router-link to="/crm/student-import" class="icon tooltip-wrapper" >
                <icon-download class=""></icon-download>
                <div class="tooltip">Import List</div>
              </router-link>
              <router-link to="/crm/student-export" class="icon tooltip-wrapper" >
                <icon-download class="rotate-180"></icon-download>
                <div class="tooltip">Export List</div>
              </router-link>
              <!-- <div class="icon-wrapper" v-click-outside="closeFilterList">
                <div class="icon tooltip-wrapper" @click.prevent="toggleFilterList">
                  <icon-filter></icon-filter>
                  <div class="tooltip">Filter</div>
                </div>
                <div class="filter-list" v-if="formVar.filterList">
                  <div class="list-item">High to Low</div>
                  <div class="list-item">Low to High</div>
                </div>
              </div> -->
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
                <th>Name of Student</th>
                <th>Mobile Number</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Section</th>
                <th>House</th>
                <th>DOB</th>
                <th>Parent Name</th>
                <th>Status</th>
                <th>Action</th>
              </thead> 
              <tbody>
                <tr v-for="(item, index) in studentsData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <div class="s-name flex align-center gap-10">
                      <img :src="`/images/jpg/users/${item.img}.jpg`" class="h-2-r w-2-r b-r-100" alt="">
                      <div class="name">{{ item.s_name }}</div>
                    </div>
                  </td>
                  <td>{{ item.mob }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ item.class }}</td>
                  <td>{{ item.section }}</td>
                  <td>{{ item.house }}</td>
                  <td>{{ item.dob }}</td>
                  <td>{{ item.parent_name }}</td>
                  <td>
                    <div class="badge success-badge">Active</div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <router-link to="/crm/student-details" class="icon tooltip-wrapper" >
                        <icon-eye></icon-eye>
                        <div class="tooltip">View</div>
                      </router-link>
                      <router-link to="/crm/add-student" class="icon tooltip-wrapper" >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </router-link>
                      <div class="icon tooltip-wrapper" @click.prevent="formVar.idModal = true">
                        <icon-card></icon-card>
                        <div class="tooltip">ID Card</div>
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
            <Pagination :currentPage="1" :totalItem="10"
              :itemsPerPage="10" @update:currentPage="pageChange($event)" />
          </div>
        </div>
      </div>
    </div>
    <!-- //modals -->
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
      <div class="delete-icon">
        <img src="/images/png/delete.png" alt="">
      </div>
      <h4 class="text-gree">
        Are you sure want to Delete?
      </h4>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="formVar.confirmModal = false">Cancel</div>
          <div class="btn white-btn">Delete</div>
        </div>
      </div>
    </Modal>
    <Modal
      v-model:show="formVar.idModal"
      class="id-modal"
      headerClasses="header-bg"
      >
      <template v-slot:header>
        <div class="title" showHeader="true">ID Card</div>
        <div class="close-btn" @click.prevent="formVar.idModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="img w-100 flex mb-16">
        <img src="/images/png/id-card.png" class="w-100" alt="">
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="formVar.idModal = false">Close</div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue"

const formVar = reactive({
  confirmModal: false,
  idModal: false,
  filterList: false,
  house: null,
  class: null,
  section: null,
})

const studentsData = [
  {
    img: 'profile-1',
    s_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    section: 'B',
    house: 'Red',
    dob: '12/10/2002',
    parent_name: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    s_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    section: 'B',
    house: 'Red',
    dob: '12/10/2002',
    parent_name: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    s_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    section: 'B',
    house: 'Red',
    dob: '12/10/2002',
    parent_name: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    s_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    section: 'B',
    house: 'Red',
    dob: '12/10/2002',
    parent_name: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    s_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    section: 'B',
    house: 'Red',
    dob: '12/10/2002',
    parent_name: 'Rahul Sharma',
  },
  
]

const classOptions = [
  { id: "1", name: "5" },
  { id: "2", name: "6" },
];
const houseOptions = [
  { id: "1", name: "house 1" },
  { id: "2", name: "house 2" },
];
const sectionOptions = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];
const handleSelectedOption = (option) => {};


function closeFilterList() {
  formVar.filterList = false;
}

function toggleFilterList() {
  formVar.filterList =  !formVar.filterList
}

</script>

<style>

</style>