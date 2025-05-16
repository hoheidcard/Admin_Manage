<template>
  <section class="users-list-page">
    <div class="container">
      <div class="card table-card">
        <div class="table-header">
          <div class="left">
            <div class="title-row">
              <div class="icon">
                <icon-user></icon-user> 
              </div>
              <div class="titles">
                <div class="sub-title">Users : List</div>
                <h5 class="main-title">Our Users</h5>
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
              <router-link to="/crm/add-user" class="icon tooltip-wrapper">
                <icon-plus></icon-plus>
                <div class="tooltip">Add User</div>
              </router-link>
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
        <div class="table-body p-16">
          <div class="table-outer">
            
            <table class="table">
              <thead>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Status</th>
                <th class="text-center">Actions</th>
              </thead>
              <tbody>
                <tr v-for="(item, index) in projectData" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.first_name }}</td>
                  <td>{{ item.last_name }}</td>
                  <td>{{ item.username }}</td>
                  <td>
                    <div class="badge success-badge">{{ item.status }}</div>
                  </td>
                  <td>
                    <div class="option-btns">
                      <router-link to="/crm/user-profile" class="icon tooltip-wrapper" >
                        <icon-eye></icon-eye>
                        <div class="tooltip">View</div>
                      </router-link>
                      <router-link to="/crm/edit-user" class="icon tooltip-wrapper" >
                        <icon-edit></icon-edit>
                        <div class="tooltip">Edit</div>
                      </router-link>
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
          <!-- <div class="table-no-data">
            <div>No records Found!</div>
          </div> -->
          <div class="table-footer">
            <Pagination :currentPage="formVar.currentPage" :totalItem="55" :visiblePageCount="3"
              :itemsPerPage="formVar.limit" @update:currentPage="pageChange($event)" />
          </div>
        </div>
        <!-- Modals -->
        <Modal
          v-model:show="formVar.addModal"
          class="add-modal mid-modal"
          headerClasses="header-bg"
          >
          <template v-slot:header>
            <div class="title" showHeader="true">Add User</div>
            <div class="close-btn" @click.prevent="formVar.addModal = false">
              <icon-cross></icon-cross>
            </div>
          </template>
          <form action="" class="form">
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Username</div>
                <input type="text" placeholder="Username">
                <div class="err-msg">Plase enter username</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Password</div>
                <input type="text" placeholder="Password">
                <div class="err-msg">Plase enter password</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">First Name</div>
                <input type="text" placeholder="First Name">
                <div class="err-msg">Plase enter first name</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Last Name</div>
                <input type="text" placeholder="Last Name">
                <div class="err-msg">Plase enter last name</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">DOB</div>
                <div class="date-input">
                  <input type="date">
                  <div class="icon">
                    <icon-calendar></icon-calendar>
                  </div>
                </div>
                <div class="err-msg">Plase enter DOB</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Gender</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Email</div>
                <input type="text" placeholder="Email">
                <div class="err-msg">Plase enter email</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Phone No</div>
                <input type="text" placeholder="Phone no">
                <div class="err-msg">Plase enter phone no</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Role</div>
                <div class="form-toggle">
                  <label class="toggle-control">
                    <input type="checkbox" >
                    <span class="control"></span>
                  </label>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Status</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Active</option>
                    <option value="">Suspended</option>
                  </select>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Choose</div>
                <div class="radio-inputs">
                  <label for="input1" class="radio" >
                    <div class="input-title">Option 1</div>
                    <input type="radio" id="input1" name="radio-input">
                  </label>
                  <label for="input2" class="radio" >
                    <div class="input-title">Option 2</div>
                    <input type="radio" id="input2" name="radio-input">
                  </label>
                  <label for="input3" class="radio" >
                    <div class="input-title">Option 3</div>
                    <input type="radio" id="input3" name="radio-input">
                  </label>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Choose</div>
                <input type="file" class="b-none">
                <div class="err-msg">Plase select gender</div>
              </div>
            </div>
          
            <div class="modal-footer">
              <div class="btns">  
                <div class="btn red-btn" @click.prevent="formVar.addModal = false">Cancel</div>
                <div class="btn white-btn">Save</div>
              </div>
            </div>
          </form>
        </Modal>
        <Modal
          v-model:show="formVar.editModal"
          class="add-modal mid-modal"
          headerClasses="header-bg"
          >
          <template v-slot:header>
            <div class="title" showHeader="true">Edit User</div>
            <div class="close-btn" @click.prevent="formVar.editModal = false">
              <icon-cross></icon-cross>
            </div>
          </template>
          <form action="" class="form">
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Username</div>
                <input type="text" placeholder="Username">
                <div class="err-msg">Plase enter username</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Password</div>
                <input type="text" placeholder="Password">
                <div class="err-msg">Plase enter password</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">First Name</div>
                <input type="text" placeholder="First Name">
                <div class="err-msg">Plase enter first name</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Last Name</div>
                <input type="text" placeholder="Last Name">
                <div class="err-msg">Plase enter last name</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">DOB</div>
                <div class="date-input">
                  <input type="date">
                  <div class="icon">
                    <icon-calendar></icon-calendar>
                  </div>
                </div>
                <div class="err-msg">Plase enter DOB</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Gender</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Email</div>
                <input type="text" placeholder="Email">
                <div class="err-msg">Plase enter email</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Phone No</div>
                <input type="text" placeholder="Phone no">
                <div class="err-msg">Plase enter phone no</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Role</div>
                <div class="form-toggle">
                  <label class="toggle-control">
                    <input type="checkbox" >
                    <span class="control"></span>
                  </label>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Status</div>
                <div class="select-dropdown">
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Active</option>
                    <option value="">Suspended</option>
                  </select>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="title">Choose</div>
                <div class="radio-inputs">
                  <label for="input1" class="radio" >
                    <div class="input-title">Option 1</div>
                    <input type="radio" id="input1" name="radio-input">
                  </label>
                  <label for="input2" class="radio" >
                    <div class="input-title">Option 2</div>
                    <input type="radio" id="input2" name="radio-input">
                  </label>
                  <label for="input3" class="radio" >
                    <div class="input-title">Option 3</div>
                    <input type="radio" id="input3" name="radio-input">
                  </label>
                </div>
                <div class="err-msg">Plase select gender</div>
              </div>
              <div class="form-item col-5 mb-16">
                <div class="title">Choose</div>
                <input type="file" class="b-none">
                <div class="err-msg">Plase select gender</div>
              </div>
            </div>
          
            <div class="modal-footer">
              <div class="btns">  
                <div class="btn red-btn" @click.prevent="formVar.editModal = false">Cancel</div>
                <div class="btn white-btn">Update</div>
              </div>
            </div>
          </form>
        </Modal>
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
              <div class="btn secondary-btn" @click.prevent="formVar.confirmModal = false">Cancel</div>
              <div class="btn primary-btn">Save</div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const formVar = reactive({
  limit: 10,
  offset: 0,
  currentPage: 1,
  keyword: '',
  submit: false,

  confirmModal: false,
  addModal: false,
  editModal: false,
  filterList: false,
})

const pageChange = (page) => {
  formVar.currentPage = page
  formVar.offset = formVar.limit * (page - 1)
};
const projectData = [
  {
    first_name: 'John',
    last_name: 'Carter',
    username: 'john_carter',
    status: 'Active'
  },
  {
    first_name: 'John',
    last_name: 'Carter',
    username: 'john_carter',
    status: 'Active'
  },
  {
    first_name: 'John',
    last_name: 'Carter',
    username: 'john_carter',
    status: 'Active'
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