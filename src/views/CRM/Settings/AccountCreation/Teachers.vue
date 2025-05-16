<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Teachers</div>
            <h5>Teacher List </h5>
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
        <div class="teacher-list">
          <label for="card-1" class="list-item">
            <input type="radio" class="radio-input" id="card-1" name="teacher-list-item" checked>
            <div class="logo">
              <img src="/images/jpg/users/profile-4.jpg" class="b-r-100" alt="">
            </div>
            <div class="teacher-details">
              <div class="top">
                <div class="data">
                  <div class="title">
                    Name :
                  </div>
                  <div class="val">Mrs. Shila D. Dixit</div>
                </div>
                <div class="data">
                  <div class="title">
                    Subject :
                  </div>
                  <div class="val">Marathi</div>
                </div>
              </div>
              <div class="bottom">
                <div class="data">
                  <div class="title">
                    Class :
                  </div>
                  <div class="val">6th</div>
                </div>
                <div class="data">
                  <div class="title">
                    Section :
                  </div>
                  <div class="val">B</div>
                </div>
                <div class="data">
                  <div class="title">
                    House :
                  </div>
                  <div class="val">Red</div>
                </div>
              </div>
            </div>
          </label>
          <label for="card-2" class="list-item">
            <input type="radio" class="radio-input" id="card-2" name="teacher-list-item">
            <div class="logo">
              <img src="/images/jpg/users/profile-5.jpg" class="b-r-100" alt="">
            </div>
            <div class="teacher-details">
              <div class="top">
                <div class="data">
                  <div class="title">
                    Name :
                  </div>
                  <div class="val">Mrs. Shila D. Dixit</div>
                </div>
                <div class="data">
                  <div class="title">
                    Subject :
                  </div>
                  <div class="val">Marathi</div>
                </div>
              </div>
              <div class="bottom">
                <div class="data">
                  <div class="title">
                    Class :
                  </div>
                  <div class="val">6th</div>
                </div>
                <div class="data">
                  <div class="title">
                    Section :
                  </div>
                  <div class="val">B</div>
                </div>
                <div class="data">
                  <div class="title">
                    House :
                  </div>
                  <div class="val">Red</div>
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
            <div class="text text-grey text-small">Teachers</div>
            <h5>Create Teacher </h5>
          </div>
        </div>
        <div class="right flex justify-space align-start gap-16">
          <div class="text">Active</div>
          <label for="toggle1" class="toggle-control">
            <input type="checkbox" id="toggle1">
            <div class="control"></div>
          </label>
        </div>
      </div>
      <div class="card-body p-10">
        <form action="" class="form">
          <div class="row">
            <div class="form-item mb-16 col-5">
              <input type="text" placeholder="Salutation">
              <div class="err-msg">Please enter salutation</div>
            </div>
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.gender" :options="genderOptions" placeholder="Select Gender"></Select>
              <div class="err-msg">Please select gender</div>
            </div>
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Teacher Name">
            <div class="err-msg">Please enter teacher name</div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <input type="text" placeholder="Year of Experience">
              <div class="err-msg">Please enter experience</div>
            </div>
            <div class="form-item mb-16 col-5">
              <div class="date-input">
                <input type="date">
                <div class="icon">
                  <icon-calendar> </icon-calendar>
                </div>
              </div>
              <div class="err-msg">Please select DOB</div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.dept" :options="deptOptions" placeholder="Department / Subject"></Select>
              <div class="err-msg">Please select department/subject</div>
            </div>
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.house" :options="houseOptions" placeholder="Select House"></Select>
              <div class="err-msg">Please select house</div>
            </div>
          </div>
          <div class="row">
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.teacher" :options="teacherOptions" placeholder="Select Teacher"></Select>
              <div class="err-msg">Please select teacher</div>
            </div>
            <div class="form-item mb-16 col-5">
              <Select v-model="formVar.division" :options="divisionOptions" placeholder="Select Section"></Select>
              <div class="err-msg">Please select section</div>
            </div>
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Login Id">
            <div class="err-msg">Please enter login id</div>
          </div>
          <div class="form-item mb-16">
            <input type="text" placeholder="Login Password">
            <div class="err-msg">Please enter login password</div>
          </div>
          <div class="row">
            <div class="col-5">
              <div class="img-upload">
                <div class="text text-small mb-5">Profile Pic</div>
                <div class="img-upload-wrapper" @click="openUpload">
                  <img v-if="formVar.imagePreview" :src="formVar.imagePreview" class="preview-image" alt="">
                  <img v-else src="/images/png/camera.png" class="dummy-img" alt="">
                  <div class="form-group">
                      <input name="image" type="file" id="file-field" v-on:change="updatePreview" style="display:none;">
                  </div>
                </div>
              </div>
            </div>
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
