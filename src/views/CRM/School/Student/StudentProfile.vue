<template>
  <section class="student-profile-page">
    <div class="container align-start gap-16">
      <div class="left-card">
        <div class="card student-card mb-16">
          <div class="top-icons align-center gap-10">
            <div class="icon align-center justify-center">
              <icon-edit></icon-edit>
            </div>
            <div class="icon align-center justify-center">
              <icon-card></icon-card>
            </div>
          </div>
          <div class="profile-img justify-center mb-16">
            <div class="img flex">
              <img src="/images/jpg/users/profile-4.jpg" alt="" />
            </div>
          </div>
          <h5 class="name mb-16">Miss. Rashmi V. Thakur</h5>
          <div class="other-details">
            <div class="data align-start gap-16">
              <div class="title">Parent Name :</div>
              <div class="val">Vishwakumar D. Thakur</div>
            </div>
            <div class="data align-start gap-16">
              <div class="title">Phone No :</div>
              <div class="val">+91 8888888888</div>
            </div>
            <div class="data align-start gap-16">
              <div class="title">Email :</div>
              <div class="val">student@email.com</div>
            </div>
            <div class="data align-start gap-16">
              <div class="title">Address</div>
              <div class="val">
                Near KGN Park, Shivaji Nagar, Satpur, Nashik, Maharashtra -
                422012
              </div>
            </div>
          </div>
        </div>
        <div class="card login-card mb-16">
          <div class="flex justify-space gap-16">
            <div class="title">Login Access</div>
            <div class="inputs flex align-center gap-16">
              <label for="pl" class="input align-center gap-5 pointer">
                <input type="checkbox" id="pl" />
                <div class="text">Parent</div>
              </label>
              <label for="sl" class="input align-center gap-5 pointer">
                <input type="checkbox" id="sl" />
                <div class="text">Student</div>
              </label>
            </div>
          </div>
        </div>
        <div class="card login-card">
          <div class="flex justify-space gap-16">
            <div class="title">Siblings</div>
            <div class="align-center gap-10">
              <label for="no" class="input align-center gap-5 pointer">
                <input type="checkbox" id="no" />
                <div class="text">5</div>
              </label>
              <div class="text-grey text-small">Click here to see tree</div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-card">
        <div class="card herarchy-card mb-16">
          <ul class="tree w-full">
            <li>
              <div class="span tooltip-wrapper">Class Co-Ordinator
                <div class="tooltip">Pro. Amar Kumar Singh</div>
              </div>
              <ul>
                <li>
                  <div class="span tooltip-wrapper">Class Teacher
                    <div class="tooltip">Mrs. Amar Kumar Singh</div>
                  </div>
                  <ul>
                    <li >
                      <div class="span tooltip-wrapper">Parent
                        <div class="tooltip">Mr. Amar Kumar Singh</div>
                      </div>
                      <ul>
                        <li class="child-list">
                          <div class="span tooltip-wrapper end-child">Child 1
                            <div class="tooltip">Mr. Amar Kumar Singh</div>
                          </div>
                        </li>
                        <li class="child-list">
                          <div class="span tooltip-wrapper end-child">Child 2
                            <div class="tooltip">Mr. Amar Kumar Singh</div>
                          </div>
                        </li>
                        <li class="child-list">
                          <div class="span tooltip-wrapper end-child">Child 3
                            <div class="tooltip">Mr. Amar Kumar Singh</div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="card student-details-card align-center gap-16">
          <div class="img flex">
            <img src="/images/jpg/users/profile-4.jpg" alt="" />
          </div>
          <div class="info">
            <h5 class="name mb-10">Miss. Rashmi V. Thakur</h5>
            <div class="detail-row align-start gap-16 flex-wrap">
              <div class="data align-center gap-10">
                <div class="title">Class</div>
                <div class="val">6th</div>
              </div>
              <div class="data align-center gap-10">
                <div class="title">Sec</div>
                <div class="val">B</div>
              </div>
              <div class="badge success-badge">Green House</div>
              <div class="badge info-badge">Roll No 54</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-card">
        <div class="card">
          <div class="img flex">
            <img src="/images/png/id-card.png" alt="" />
          </div>
          <div class="img flex">
            <img src="/images/png/id-card.png" alt="" />
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
