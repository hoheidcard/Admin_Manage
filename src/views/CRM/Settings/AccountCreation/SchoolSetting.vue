<template>
  <section class="create-school cards">
    <div class="card p-0-i">
      <div class="setting-header">
        <div class="left">
          <div class="icon">
            <icon-setting></icon-setting>
          </div>
          <div class="heading">
            <div class="text text-grey text-small">School Setting</div>
            <h5>School List </h5>
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
              <icon-reload></icon-reload>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body p-10">
        <div class="school-list">
          <label for="card-1" class="list-item">
            <input type="radio" class="radio-input" id="card-1" name="school-list-item" checked>
            <div class="logo">
              <img src="/images/logo/school-logo.png" alt="">
            </div>
            <div class="school-details">
              <h5 class="name text-center">BIRLA OPEN MINDS INTERNATIONAL SCHOOL</h5>
              <div class="data">
                <div class="title">
                  <icon-user></icon-user>
                  Estabish :
                </div>
                <div class="val">1992 (LKG to 12th)</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-mail></icon-mail>
                  Email :
                </div>
                <div class="val">jexog83454-sfhv@force.com. </div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-google></icon-google>
                  Website :
                </div>
                <div class="val">www.birlainternationschool.edu.in</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-phone></icon-phone>
                  Phone :
                </div>
                <div class="val">+91 8888888888</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-user></icon-user>
                  Principal :
                </div>
                <div class="val">Mr. Amit Maheshwari (MPhil, Bed)</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-location></icon-location>
                  Address :
                </div>
                <div class="val">Near South City Mall, Jadhavpura, Kolkata, West Bengal - 888888</div>
              </div>
            </div>
          </label>
          <label for="card-2" class="list-item">
            <input type="radio" class="radio-input" id="card-2" name="school-list-item">
            <div class="logo">
              <img src="/images/logo/school-logo.png" alt="">
            </div>
            <div class="school-details">
              <h5 class="name text-center">BIRLA OPEN MINDS INTERNATIONAL SCHOOL</h5>
              <div class="data">
                <div class="title">
                  <icon-user></icon-user>
                  Estabish :
                </div>
                <div class="val">1992 (LKG to 12th)</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-mail></icon-mail>
                  Email :
                </div>
                <div class="val">jexog83454-sfhv@force.com. </div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-google></icon-google>
                  Website :
                </div>
                <div class="val">www.birlainternationschool.edu.in</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-phone></icon-phone>
                  Phone :
                </div>
                <div class="val">+91 8888888888</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-user></icon-user>
                  Principal :
                </div>
                <div class="val">Mr. Amit Maheshwari (MPhil, Bed)</div>
              </div>
              <div class="data">
                <div class="title">
                  <icon-location></icon-location>
                  Address :
                </div>
                <div class="val">Near South City Mall, Jadhavpura, Kolkata, West Bengal - 888888</div>
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
            <div class="text text-grey text-small">School Setting</div>
            <h5>School Setting </h5>
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
        <div class="toggle-list">
          <div class="list-item flex justify-space align-start gap-16">
            <div class="title">Can delete user?</div>
            <label for="toggle1" class="toggle-control">
              <input type="checkbox" id="toggle1">
              <div class="control"></div>
            </label>
          </div>
          <div class="list-item flex justify-space align-start gap-16">
            <div class="title">Can delete user?</div>
            <label for="toggle2" class="toggle-control">
              <input type="checkbox" id="toggle2">
              <div class="control"></div>
            </label>
          </div>
          <div class="list-item flex justify-space align-start gap-16">
            <div class="title">Can delete user?</div>
            <label for="toggle3" class="toggle-control">
              <input type="checkbox" id="toggle3">
              <div class="control"></div>
            </label>
          </div>
          <div class="list-item flex justify-space align-start gap-16">
            <div class="title">Can delete user?</div>
            <label for="toggle4" class="toggle-control">
              <input type="checkbox" id="toggle4">
              <div class="control"></div>
            </label>
          </div>
          <div class="list-item flex justify-space align-start gap-16">
            <div class="title">Can delete user?</div>
            <label for="toggle5" class="toggle-control">
              <input type="checkbox" id="toggle5">
              <div class="control"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>



</script>

<style>

</style>