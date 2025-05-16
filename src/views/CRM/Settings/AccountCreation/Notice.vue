<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Notice Board</div>
            <h5>Notice List</h5>
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
                  Notice for : Department
                </div>
                <div class="bottom">
                  <div class="status">
                    <div class="text">Status :</div>
                    <div class="status-list">
                      <span class="s-active">Send</span>&nbsp;|&nbsp;
                      <span>Draft</span>&nbsp;|&nbsp;
                      <span>Expired</span>
                    </div>
                  </div>
                  <div class="days">7 Days ago</div>
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
                  Notice for : Department
                </div>
                <div class="bottom">
                  <div class="status">
                    <div class="text">Status :</div>
                    <div class="status-list">
                      <span class="s-active">Send</span>&nbsp;|&nbsp;
                      <span>Draft</span>&nbsp;|&nbsp;
                      <span>Expired</span>
                    </div>
                  </div>
                  <div class="days">7 Days ago</div>
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
            <div class="text text-grey text-small">Notice Board</div>
            <h5>Create Notice </h5>
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
              <Select v-model="formVar.division" :options="divisionOptions" placeholder="Select Section"></Select>
              <div class="err-msg">Please select section</div>
            </div>
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.house" :options="houseOptions" placeholder="Select House"></Select>
              <div class="err-msg">Please select house</div>
            </div>
          </div>
          <div class="form-item mb-16">
            <Select v-model="formVar.noice_type" :options="noticeTypeOptions" placeholder="Notice Type"></Select>
            <div class="err-msg">Please select notice type</div>
          </div>
          <div class="form-item">
            <textarea name="" id="" rows="8" placeholder="Type Notice"></textarea>
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
              <div class="col-33">
                <button class="btn red-btn">Delete</button>
              </div>
              <div class="col-33">
                <button class="btn green-btn">Publish</button>
              </div>
              <div class="col-33">
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
})

const deptOptions = [
  { id: "1", name: "Chemistry" },
  { id: "2", name: "Geography" },
];
const houseOptions = [
  { id: "1", name: "house 1" },
  { id: "2", name: "house 2" },
];
const teacherOptions = [
  { id: "1", name: "Class Teacher" },
  { id: "2", name: "Subject Teacher" },
];
const divisionOptions = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];
const genderOptions = [
  { id: "1", name: "Male" },
  { id: "2", name: "Female" },
  { id: "3", name: "Other" },
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
