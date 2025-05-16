<template>
  <section class="add-student">
    <div class="container">
      <div class="card-outer">
        <div class="main-card">
          <div class="card-header">
            <div class="left">
              <div class="icon">
                <icon-teacher></icon-teacher>
              </div>
              Add Teacher
            </div>
          </div>
          <form action="" class="form">
            <div class="card-body">
              <div class="row">
                <div class="form-item mb-16">
                  <input type="text" placeholder="Name of Teacher" />
                  <!-- <div class="err-msg">Please enter teacher name</div> -->
                </div>
                <div class="form-item mb-16">
                  <input type="text" placeholder="Educational Qualification" />
                  <!-- <div class="err-msg">Please enter teacher name</div> -->
                </div>
              </div>
              <div class="row">
                <div class="form-item mb-16 col-25">
                  <Select
                    v-model="formVar.class"
                    :options="classOptions"
                    placeholder="Select Class"
                  ></Select>
                  <!-- <div class="err-msg">Please select class</div> -->
                </div>
                <div class="form-item mb-16 col-25">
                  <Select
                    v-model="formVar.section"
                    :options="sectionOptions"
                    placeholder="Select Section"
                  ></Select>
                  <!-- <div class="err-msg">Please select section</div> -->
                </div>
                <div class="form-item mb-16 col-25">
                  <Select
                    v-model="formVar.house"
                    :options="houseOptions"
                    placeholder="Select House"
                  ></Select>
                  <!-- <div class="err-msg">Please select house</div> -->
                </div>
                <div class="form-item mb-16 col-25">
                  <SingleSelect
                    v-model="formVar.teacher"
                    :options="teacherOptions"
                    placeholder="Select Teacher"
                  ></SingleSelect>
                  <!-- <div class="err-msg">Please select teacher</div> -->
                </div>
              </div>
              <div class="row">
                <div class="form-item mb-16 col-5">
                  <Select
                    v-model="formVar.gender"
                    :options="genderOptions"
                    placeholder="Select Gender"
                  ></Select>
                  <!-- <div class="err-msg">Please select gender</div> -->
                </div>
                <div class="form-item mb-16 col-5">
                  <div class="date-input">
                    <input type="date" />
                    <div class="icon">
                      <icon-calendar> </icon-calendar>
                    </div>
                  </div>
                  <!-- <div class="err-msg">Please select DOB</div> -->
                </div>
                <div class="form-item col-5 mb-16">
                  <input type="number" placeholder="Phone Number" />
                  <!-- <div class="err-msg">Please enter phone no</div> -->
                </div>
                <div class="form-item col-5 mb-16">
                  <input type="text" placeholder="Email Id" />
                  <!-- <div class="err-msg">Please enter email</div> -->
                </div>
              </div>
              <div class="row">
                <div class="form-item col-5 mb-16">
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    placeholder="Address"
                  ></textarea>
                  <!-- <div class="err-msg">Please enter address</div> -->
                </div>
              </div>
              <div class="row">
                <div class="form-item col-25 mb-16 flex align-center gap-16">
                  <div class="title text-small">Parent Can Login</div>
                  <div class="form-toggle">
                    <label class="toggle-control">
                      <input type="checkbox" />
                      <span class="control"></span>
                    </label>
                  </div>
                </div>
                <div class="form-item col-25 mb-16 flex align-center gap-16">
                  <div class="title">Student Can Login</div>
                  <div class="form-toggle">
                    <label class="toggle-control">
                      <input type="checkbox" />
                      <span class="control"></span>
                    </label>
                  </div>
                </div>
                <div class="col-25">
                  <div class="img-upload flex flex-d-col align-center">
                    <div class="text text-small mb-10">Teacher Pic</div>
                    <div
                      class="img-upload-wrapper h-10-r w-10-r"
                      @click="openUpload1"
                    >
                      <img
                        v-if="formVar.imagePreview1"
                        :src="formVar.imagePreview1"
                        class="preview-image"
                        alt=""
                      />
                      <img
                        v-else
                        src="/images/png/camera.png"
                        class="dummy-img"
                        alt=""
                      />
                      <div class="form-group">
                        <input
                          name="image"
                          type="file"
                          id="file-field1"
                          v-on:change="updatePreview1"
                          style="display: none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-25">
                  <div class="img-upload flex flex-d-col align-center">
                    <div class="text text-small mb-5">Degree Pic</div>
                    <div
                      class="img-upload-wrapper h-10-r w-10-r"
                      @click="openUpload2"
                    >
                      <img
                        v-if="formVar.imagePreview2"
                        :src="formVar.imagePreview2"
                        class="preview-image"
                        alt=""
                      />
                      <img
                        v-else
                        src="/images/png/camera.png"
                        class="dummy-img"
                        alt=""
                      />
                      <div class="form-group">
                        <input
                          name="image"
                          type="file"
                          id="file-field2"
                          v-on:change="updatePreview2"
                          style="display: none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row"></div>
            </div>
            <div class="card-footer">
              <div class="w-30 flex gap-10">
                <button class="btn white-btn w-full">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- //modals -->
    <Modal
      v-model:show="formVar.successModal"
      class="confirm-modal"
      headerClasses="header-bg"
    >
      <div class="delete-icon mb-10-i">
        <icon-success></icon-success>
      </div>
      <h4 class="text-gree mb-10-i">Teacher Added Successfully</h4>
      <div class="text text-small text-center mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
        necessitatibus, sed mollitia pariatur veritatis ipsam?
      </div>
      <div class="modal-footer">
        <div class="btns">
          <div
            class="btn white-btn"
            @click.prevent="formVar.successModal = false"
          >
            Okay
          </div>
        </div>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const formVar = reactive({
  imagePreview1: "",
  imagePreview2: "",
  house: null,
  class: null,
  teacher: null,
  section: null,
  gender: null,
  successModal: false,
});

const classOptions = [
  { id: "1", name: "5" },
  { id: "2", name: "6" },
];
const houseOptions = [
  { id: "1", name: "house 1" },
  { id: "2", name: "house 2" },
];
const teacherOptions = [
  { id: "1", name: "Class Teacher" },
  { id: "2", name: "Subject Teacher" },
];
const sectionOptions = [
  { id: "1", name: "A" },
  { id: "2", name: "B" },
];
const genderOptions = [
  { id: "1", name: "Male" },
  { id: "2", name: "Female" },
  { id: "3", name: "Other" },
];
const handleSelectedOption = (option) => {};

function updatePreview1(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview1 = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    store.dispatch("PostEnquiry/PostImageUpload", {
      file: files[0],
      id: formVar.id,
      type: "User",
    });
  }
}

function updatePreview2(e) {
  var reader,
    files = e.target.files;
  reader = new FileReader();
  reader.onload = (e) => {
    formVar.imagePreview2 = e.target.result;
  };
  reader.readAsDataURL(files[0]);
  if (files[0]) {
    store.dispatch("PostEnquiry/PostImageUpload", {
      file: files[0],
      id: formVar.id,
      type: "User",
    });
  }
}

function openUpload1() {
  document.getElementById("file-field1").click();
}
function openUpload2() {
  document.getElementById("file-field2").click();
}
</script>

<style></style>
