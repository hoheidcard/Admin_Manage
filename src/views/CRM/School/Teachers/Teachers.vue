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
                <div class="sub-title">Teachers : List</div>
                <h5 class="main-title">Our Teachers</h5>
              </div>
            </div>
            <div class="about">This is our teachers This is our teachers</div>
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
              <router-link to="/crm/add-teacher" class="icon tooltip-wrapper" >
                <icon-plus></icon-plus>
                <div class="tooltip">Add Teacher</div>
              </router-link>
              <router-link to="/crm/teacher-import" class="icon tooltip-wrapper" >
                <icon-download class=""></icon-download>
                <div class="tooltip">Import List</div>
              </router-link>
              <router-link to="/crm/teacher-export" class="icon tooltip-wrapper" >
                <icon-download class="rotate-180"></icon-download>
                <div class="tooltip">Export List</div>
              </router-link>
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
                <th>Name of Teacher</th>
                <th>Mobile Number</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Department</th>
                <th>House</th>
                <th>DOB</th>
                <th>Admin</th>
                <th>Status</th>
                <th>Action</th>
              </thead> 
              <tbody>
                <tr v-for="(item, index) in teachersData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <div class="s-name flex align-center gap-10">
                      <img :src="`/images/jpg/users/${item.img}.jpg`" class="h-2-r w-2-r b-r-100" alt="">
                      <div class="name">{{ item.t_name }}</div>
                    </div>
                  </td>
                  <td>{{ item.mob }}</td>
                  <td>{{ item.gender }}</td>
                  <td>{{ item.class }}</td>
                  <td>{{ item.dept }}</td>
                  <td>{{ item.house }}</td>
                  <td>{{ item.dob }}</td>
                  <td>{{ item.admin }}</td>
                  <td>
                    <div class="badge success-badge">Active</div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <router-link to="/crm/teacher-details" class="icon tooltip-wrapper" >
                        <icon-eye></icon-eye>
                        <div class="tooltip">View</div>
                      </router-link>
                      <router-link to="/crm/add-teacher" class="icon tooltip-wrapper" >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </router-link>
                      <div class="icon tooltip-wrapper" @click.prevent="formVar.idModal = true">
                        <icon-card></icon-card>
                        <div class="tooltip">ID Card</div>
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
    <!-- Status Modal -->
    <Modal v-model:show="formVar.statusModal" class="status-modal" headerClasses="header-bg">
      <template v-slot:header>
        <div class="title" showHeader="true">Change Status</div>
        <div class="close-btn" @click.prevent="formVar.statusModal = false">
          <icon-cross></icon-cross>
        </div>
      </template>
      <div class="status-row">
        <label for="approve" class="data">
          <input type="radio" id="approve" name="status">
          <div class="data-inner approve-card">
            <icon-success></icon-success>
            <div class="title">ACTIVE</div>
          </div>
        </label>
        <label for="pending" class="data">
          <input type="radio" id="pending" name="status">
          <div class="data-inner pending-card">
            <icon-warning></icon-warning>
            <div class="title">PENDING</div>
          </div>
        </label>
        <label for="block" class="data">
          <input type="radio" id="block" name="status">
          <div class="data-inner block-card">
            <icon-block></icon-block>
            <div class="title">DEACTIVE</div>
          </div>
        </label>
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div class="btn red-btn" @click.prevent="formVar.statusModal = false">Cancel</div>
          <div class="btn white-btn" >Submit</div>
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
  statusModal: false,
  house: null,
  class: null,
  section: null,
})

const teachersData = [
  {
    img: 'profile-1',
    t_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    dept: 'Science',
    house: 'Red',
    dob: '12/10/2002',
    admin: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    t_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    dept: 'Science',
    house: 'Red',
    dob: '12/10/2002',
    admin: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    t_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    dept: 'Science',
    house: 'Red',
    dob: '12/10/2002',
    admin: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    t_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    dept: 'Science',
    house: 'Red',
    dob: '12/10/2002',
    admin: 'Rahul Sharma',
  },
  {
    img: 'profile-1',
    t_name: 'Abhilash Sharma',
    mob: '8888888888',
    gender: 'Male',
    class: '6',
    dept: 'Science',
    house: 'Red',
    dob: '12/10/2002',
    admin: 'Rahul Sharma',
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

//Functions
function closeFilterList() {
  formVar.filterList = false;
}

function toggleFilterList() {
  formVar.filterList =  !formVar.filterList
}

</script>

<style>

</style>