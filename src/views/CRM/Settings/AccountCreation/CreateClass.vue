<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">Department | Class | Section</div>
            <h5 v-if="classVar.tab === 1">Department  </h5>
            <h5 v-if="classVar.tab === 2">Class  </h5>
            <h5 v-if="classVar.tab === 3">Section</h5>
          </div>
        </div>
        <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-plus></icon-plus>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="add-class-card">
          <div class="tabs">
            <div class="tab" :class="classVar.tab === 1 ? 'active' : ''" @click.prevent="classVar.tab = 1">Department</div>
            <div class="tab" :class="classVar.tab === 2 ? 'active' : ''" @click.prevent="classVar.tab = 2">Class</div>
            <div class="tab" :class="classVar.tab === 3 ? 'active' : ''" @click.prevent="classVar.tab = 3">Section</div>
          </div>
          <div class="tab-content" v-if="classVar.tab === 1">
            <div class="class-list">
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="classVar.tab === 2">
            <div class="class-list">
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content" v-if="classVar.tab === 3">
            <div class="class-list">
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="name">Chemistry Lab</div>
                <div class="icons">
                  <div class="icon">
                    <icon-edit></icon-edit>
                  </div>
                  <div class="icon" @click.prevent="classVar.confirmModal = true">
                    <icon-delete></icon-delete>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card p-0-i" v-if="classVar.tab === 1">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small" v-if="classVar.tab === 1">Department</div>
            <h5>Create Department </h5>
          </div>
        </div>
        <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-reload></icon-reload>
            </div>
          </div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">House</option>
              <option value="">Map Class</option>
              <option value="">Map Depart</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <form class="form">
          <div class="form-item mb-16">
            <input type="text" placeholder="Department Name">
            <div class="err-msg">Please enter department name</div>
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
    <div class="card p-0-i" v-if="classVar.tab === 2">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small" v-if="classVar.tab === 2">Class</div>
            <h5>Create Class </h5>
          </div>
        </div>
        <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-reload></icon-reload>
            </div>
          </div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">House</option>
              <option value="">Map Class</option>
              <option value="">Map Depart</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <form class="form">
          <div class="form-item mb-16">
            <input type="text" placeholder="Class Name">
            <div class="err-msg">Please enter class name</div>
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
    <div class="card p-0-i" v-if="classVar.tab === 3">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small" v-if="classVar.tab === 3">Section</div>
            <h5>Create Section </h5>
          </div>
        </div>
        <div class="right">
          <div class="icons">
            <div class="icon">
              <icon-reload></icon-reload>
            </div>
          </div>
          <div class="select-dropdown">
            <select name="" id="">
              <option value="">House</option>
              <option value="">Map Class</option>
              <option value="">Map Depart</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <form class="form">
          <div class="form-item mb-16">
            <input type="text" placeholder="Section Name">
            <div class="err-msg">Please enter section name</div>
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
  <!-- //modals -->
  <Modal
    v-model:show="classVar.confirmModal"
    class="confirm-modal"
    headerClasses="header-bg"
    >
    <template v-slot:header>
      <div class="title" showHeader="true">Delete</div>
      <div class="close-btn" @click.prevent="classVar.confirmModal = false">
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
        <div class="btn red-btn" @click.prevent="classVar.confirmModal = false">Cancel</div>
        <div class="btn white-btn">Delete</div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { reactive } from "vue";

const classVar = reactive({
  tab: 1,
  confirmModal: false,
})


</script>

<style>

</style>
