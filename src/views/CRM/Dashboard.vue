<template>
  <section class="dashboard-page">
    <div class="container">
      <div class="dashboard-header align-center justify-end gap-16 mb-16 p-6">
        <div class="date-input">
          <input type="date" class="w-12-r-i" v-model="dateFilter.fromDate" />
          <div class="icon">
            <icon-calendar></icon-calendar>
          </div>
        </div>
        <div class="text">To</div>
        <div class="date-input">
          <input type="date" class="w-12-r-i" v-model="dateFilter.toDate" />
          <div class="icon">
            <icon-calendar></icon-calendar>
          </div>
        </div>
        <div class="searchbar">
          <div class="select-dropdown w-8-r">
            <select v-model="dateFilter.all" @change="onChangeDate">
              <option value="No">BY DATE</option>
              <option value="Yes">ALL</option>
            </select>
          </div>
        </div>
        <div class="searchbar">
          <button class="btn white-btn w-full" type="button" @click="onChangeDate">Submit</button>
        </div>
      </div>
      <div class="dash-cards">
        <div class="ag-format-container">
          <div class="ag-courses_box">
            <div class="ag-courses_item" @click="cardClick('PARTNER')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/school.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.PARTNER }}</div>
                  <div class="title">PARTNER</div>
                </div>
              </a>
            </div>
            <div class="ag-courses_item" @click="cardClick('SUB_PARTNER')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/school.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.SUB_PARTNER }}</div>
                  <div class="title">SUB PARTNER</div>
                </div>
              </a>
            </div>
            <div class="ag-courses_item" @click="cardClick('SCHOOL')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/school.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.SCHOOL }}</div>
                  <div class="title">SCHOOL</div>
                </div>
              </a>
            </div>
            <div class="ag-courses_item" @click="cardClick('COLLEGE')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/school.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.COLLEGE }}</div>
                  <div class="title">COLLEGE</div>
                </div>
              </a>
            </div>
            <div class="ag-courses_item" @click="cardClick('ORGANIZATION')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/school.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.ORGANIZATION }}</div>
                  <div class="title">ORGANIZATION</div>
                </div>
              </a>
            </div>
            <div class="ag-courses_item" @click="cardClick('STAFF')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/teacher.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.STAFF }}</div>
                  <div class="title">STAFF</div>
                </div>
              </a>
            </div>
            <div class="ag-courses_item" @click="cardClick('STUDENTS')">
              <a href="#" class="card ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="img ag-courses-item_title">
                  <img src="/images/dashboard/student.png" alt="" />
                  <div class="dot"></div>
                </div>
                <div class="details ag-courses-item_date-box">
                  <div class="count-number">{{ storeVar.STUDENT }}</div>
                  <div class="title">STUDENTS</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- <div class="card">
          <div class="img">
            <img src="/images/dashboard/department.png" alt="" />
            <div class="dot"></div>
          </div>
          <div class="details">
            <h4>200</h4>
            <div class="title text-grey">DEPARTMENT</div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src="/images/dashboard/house.png" alt="" />
            <div class="dot"></div>
          </div>
          <div class="details">
            <h4>200</h4>
            <div class="title text-grey">HOUSE</div>
          </div>
        </div> -->
      </div>

      <div>
        <DashOrganizationList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'ORGANIZATION'" />
        <DashSchoolList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'SCHOOL'" />
        <DashCollegeList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'COLLEGE'" />
        <DashPartnerList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'PARTNER'" />
        <DashSubPartnerList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'SUB_PARTNER'" />
        <DashStudentList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'STUDENTS'" />
        <DashStaffList :fromDate="dateFilter.fromDate" :toDate="dateFilter.toDate" :all="dateFilter.all" v-if="dateFilter.cardType === 'STAFF'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import { computed, onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";

/* Constants */
const store = useStore();
const storeVar = computed(() => store.state.Dashboard);
const dateFilter = reactive({
  fromDate: moment().subtract(30, "days").format("YYYY-MM-DD"),
  toDate: moment().format("YYYY-MM-DD"),
  cardType: null,
  all:'No'
});
/* Constants */

/* Lifecycle */
onBeforeMount(() => {
  store.dispatch("Dashboard/getDashboardCount", {
    fromDate: dateFilter.fromDate,
    toDate: dateFilter.toDate,
    all:dateFilter.all,
  });
});
/* Lifecycle */

/* Functions */
const onChangeDate = () => {
  if (dateFilter.fromDate && dateFilter.toDate) {
    store.dispatch("Dashboard/getDashboardCount", {
      fromDate: dateFilter.fromDate,
      toDate: dateFilter.toDate,
      all:dateFilter.all,
    });
  }
};
function cardClick(type) {
  dateFilter.cardType = type
}
/* Functions */
</script>

<style>

.ag-format-container {
  width: 100vw;
  margin: 0 auto;
}

.ag-courses_box {
  display: flex;
  gap: 1rem;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 0 50px 0;
}

.ag-courses_item {
  /* -ms-flex-preferred-size: calc(33.33333% - 30px); */
  /* flex-basis: calc(33.33333% - 30px); */
  /* border-radius: 28px; */
  width: 24%;
  /* margin: 0 15px 30px; */
  overflow: hidden;
}

.ag-courses-item_link {
  /* padding: 0.4rem; */
  /* background-color: #121212; */
  display: flex;
  overflow: hidden;
  position: relative;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #FFF;
}

.ag-courses-item_link:hover .ag-courses-item_date-box {
  text-decoration: none;
  color: #FFF;
}

.ag-courses-item_link:hover .count-number {
  color: #FFF;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}

.ag-courses-item_title {
  /* min-height: 87px; */
  /* margin: 0 0 25px; */
  overflow: hidden;
  font-weight: bold;
  font-size: 30px;
  color: #FFF;
  z-index: 2;
  position: relative;
}

.ag-courses-item_date-box {
  font-size: 18px;
  color: gray;
  z-index: 2;
  position: relative;
}

.count-number {
  font-size: 22px;
  font-weight: bold;
  color: var(--primary);
}

.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;
  -webkit-transition: color .5s ease;
  -o-transition: color .5s ease;
  transition: color .5s ease
}

.ag-courses-item_bg {
  height: 105px;
  width: 105px;
  background-color: #f9b234;
  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;
  border-radius: 50%;
  -webkit-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}

.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: #3ecd5e;
}

.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: #ff4603bb;
}

.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #952affbb;
}

.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #cd3e94;
}

.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #4c49eace;
}

.ag-courses_item:nth-child(7n) .ag-courses-item_bg {
  background-color: #49b7ea;
}

@media only screen and (max-width: 999px) {
  .ag-courses_item {
    width: 48%;

  }

  /* .ag-courses_box {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (min-width: 1000px) and (max-width: 1300px) {
  .ag-courses_item {
    width: 32%;

  }

  /* .ag-courses_box {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .ag-courses-item_title {
    font-size: 24px;
  }
}
 

@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }

  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;
    font-size: 24px;
  }

  .ag-courses-item_link {
    padding: 22px 40px;
  }

  .ag-courses-item_date-box {
    font-size: 16px;
  }
}
</style>
