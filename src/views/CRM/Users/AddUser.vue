<template>
  <section class="add-page">
    <div class="container">
      <div class="card">
        <div class="heading-edit">
          <h3 class="heading">Add User</h3>
        </div>
        <form action="" class="form">
          <div class="row">
            <div class="form-item col-5 mb-16">
              <div class="title">Username</div>
              <input type="text" placeholder="Username" />
              <div class="err-msg">Plase enter username</div>
            </div>
            <div class="form-item col-5 mb-16">
              <div class="title">Password</div>
              <input type="text" placeholder="Password" />
              <div class="err-msg">Plase enter password</div>
            </div>
          </div>
          <div class="row">
            <div class="form-item col-5 mb-16">
              <div class="title">First Name</div>
              <input type="text" placeholder="First Name" />
              <div class="err-msg">Plase enter first name</div>
            </div>
            <div class="form-item col-5 mb-16">
              <div class="title">Last Name</div>
              <input type="text" placeholder="Last Name" />
              <div class="err-msg">Plase enter last name</div>
            </div>
          </div>
          <div class="row">
            <div class="form-item col-5 mb-16">
              <div class="title">DOB</div>
              <div class="date-input">
                <input type="date" />
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
              <input type="text" placeholder="Email" />
              <div class="err-msg">Plase enter email</div>
            </div>
            <div class="form-item col-5 mb-16">
              <div class="title">Phone No</div>
              <input type="text" placeholder="Phone no" />
              <div class="err-msg">Plase enter phone no</div>
            </div>
          </div>
          <div class="row">
            <div class="form-item col-5 mb-16">
              <div class="title">Role</div>
              <div class="form-toggle">
                <label class="toggle-control">
                  <input type="checkbox" />
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
                <label for="input1" class="radio">
                  <div class="input-title">Option 1</div>
                  <input type="radio" id="input1" name="radio-input" />
                </label>
                <label for="input2" class="radio">
                  <div class="input-title">Option 2</div>
                  <input type="radio" id="input2" name="radio-input" />
                </label>
                <label for="input3" class="radio">
                  <div class="input-title">Option 3</div>
                  <input type="radio" id="input3" name="radio-input" />
                </label>
              </div>
              <div class="err-msg">Plase select gender</div>
            </div>
            <div class="form-item col-5 mb-16">
              <div class="title">Choose</div>
              <input type="file"  />
              <div class="err-msg">Plase select gender</div>
            </div>
          </div>
          <div class="form-btns">  
            <div class="btn red-btn">Cancel</div>
            <div class="btn white-btn">Save</div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>