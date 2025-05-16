<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Library</div>
            <h5>Library List</h5>
          </div>
        </div>
        <div class="right">
          <div class="searchbar">
            <input type="text" placeholder="Search here">
            <div class="icon">
              <icon-search></icon-search>
            </div>
          </div>
          <div class="icons">
            <!-- <div class="icon">
              <icon-edit></icon-edit>
            </div> -->
            <div class="icon">
              <icon-plus></icon-plus>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <div class="notice-list">
          <label for="card-1" class="list-item">
            <input type="radio" class="radio-input" id="card-1" name="school-list-item" checked>
            <div class="notice-details">
              <div class="img">
                <img src="/images/jpg/users/user.jpg" alt="">
              </div>
              <div class="details">
                <div class="title">
                  Library Department
                </div>
                <div class="bottom">
                  <div class="status">
                    <div class="text">Status :</div>
                    <div class="status-list">
                      <span class="s-active">Books</span>&nbsp;|&nbsp;
                      <span>Books</span>&nbsp;|&nbsp;
                      <span>Books</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
          <label for="card-2" class="list-item">
            <input type="radio" class="radio-input" id="card-2" name="school-list-item">
            <div class="notice-details">
              <div class="img">
                <img src="/images/jpg/users/user.jpg" alt="">
              </div>
              <div class="details">
                <div class="title">
                  Library Department
                </div>
                <div class="bottom">
                  <div class="status">
                    <div class="text">Status :</div>
                    <div class="status-list">
                      <span class="s-active">Books</span>&nbsp;|&nbsp;
                      <span>Books</span>&nbsp;|&nbsp;
                      <span>Books</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Library</div>
            <h5>Create Library </h5>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <form action="" class="form">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.dept" :options="deptOptions" placeholder="Select Department"></Select>
              <div class="err-msg">Please select department</div>
            </div>
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.class" :options="classOptions" placeholder="Select Class"></Select>
              <div class="err-msg">Please select class</div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.division" :options="divisionOptions" placeholder="Select section"></Select>
              <div class="err-msg">Please select section</div>
            </div>
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.house" :options="houseOptions" placeholder="Select House"></Select>
              <div class="err-msg">Please select house</div>
            </div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="formVar.library_type" :options="libraryTypeOptions" placeholder="Library Type"></Select>
            <div class="err-msg">Please select library type</div>
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Book Name">
            <div class="err-msg">Please enter book name</div>
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Student Name">
            <div class="err-msg">Please enter student name</div>
          </div>
          <div class="submit-btns mt-16">
            <div class="row">
              <div class="col-10">
                <button class="btn white-btn">Add</button>
              </div>
            </div>
          </div>
          <div class="submit-btns mt-16">
            <div class="row">
              <div class="col-5">
                <button class="btn red-btn">Delete</button>
              </div>
              <div class="col-5">
                <button class="btn white-btn">Update</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  imagePreview: '',
  dept: null,
  house: null,
  teacher: null,
  division: null,
  gender: null,
  class: null,
  library_type: null,
})

const deptOptions = [
  { id: "1", name: "Chemistry" },
  { id: "2", name: "Geography" },
];
const classOptions = [
  { id: "1", name: "5" },
  { id: "2", name: "6" },
];
const houseOptions = [
  { id: "1", name: "house 1" },
  { id: "2", name: "house 2" },
];
const divisionOptions = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];
const libraryTypeOptions = [
  { id: "1", name: "Library 1" },
  { id: "2", name: "Library 2" },
];
const handleSelectedOption = (option) => {
};


function updatePreview(e) {
  var reader, files = e.target.files
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview = e.target.result
  }
  reader.readAsDataURL(files[0])
  if (files[0]) {
    store.dispatch('PostEnquiry/PostImageUpload', { file: files[0], id: formVar.id, type: 'User' })
  }
}

function openUpload() {
  document.getElementById('file-field').click()
}


</script>

<style>

</style>
