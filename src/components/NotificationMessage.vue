<template>
  <div class="context-animi" :class="anyMeClass">
    <div :class="typeClass" class="notiAlert" role="alert" id="img">
      <div class="inn">
        <div class="alert-icon">
          <icon-alert-danger v-if="notification.type === 'danger'"></icon-alert-danger>
          <icon-alert-success v-if="notification.type === 'success'"></icon-alert-success>
        </div>
        <div class="text-success">{{ notification.message }}</div>
      </div>
    </div>
    <div class="progress2 progress-moved">
      <div :class="barClass">
      </div>
    </div>
    <div class="area">
      <ul class="circles">
        <div @click="remov" class="close">X</div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['notification'],

  data() {
    return {
      timeout: null,
      removetimeout: null,
      status: false,
    }
  },

  computed: {
    typeClass() {
      return `notiAlert-${this.notification.type}`
    },
    barClass() {
      return `bar-${this.notification.type}`
    },
    anyMeClass() {
      return `animation-${this.notification.type}`
    }
  },

  created() {
    this.timeout = setTimeout(() => {
      var notificationContainer = document.querySelector('.notificationAlert');
      if (notificationContainer) {
        notificationContainer.classList.remove('notificationAlert');
        notificationContainer.classList.add('notificationAlert1');
      }
    }, 5000)
    this.removetimeout = setTimeout(() => {
      this.removeNotification(this.notification)
    }, 6000)
  },

  beforeUnmount() {
    clearTimeout(this.timeout)
    clearTimeout(this.removetimeout)
  },

  methods: {
    ...mapActions(['removeNotification']),
    remov() {
      var notificationContainer = document.querySelector('.notificationAlert');
      if (notificationContainer) {
        notificationContainer.classList.remove('notificationAlert');
        notificationContainer.classList.add('notificationAlert1');
      }
      this.removetimeout = setTimeout(() => {
        this.removeNotification(this.notification)
      }, 2000)
    }
  }
}
</script>
<style lang="scss">
.notiAlert {
  z-index: 1000000000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-top-left-radius: 20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 2px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.11);
}

.notiAlert .inn {
  display: flex;
  align-items: center;
}

.inn .alert-icon {
  display: flex;
  align-items: center;
}

.notiAlert .close {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.1rem;
  height: 1.2rem;
  /* border: 1px solid blue; */
}

.notiAlert h4 {
  margin-top: 0;
  color: inherit;
}

.notiAlert .alert-link {
  font-weight: bold;
}

.notiAlert>p,
.notiAlert>ul {
  margin-bottom: 0;
}

.notiAlert>p+p {
  margin-top: 5px;
}

.alert-dismissable {
  padding-right: 35px;
}

.alert-dismissable .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}

.notiAlert-success {
  padding: 15px 4px;
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
  border-left: 10px solid #60c060;
  border-right: 10px solid #60c060;
  background-color: transparent;
}

.notiAlert-success #icon {
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;

  #icon-inner {
    fill: #60c060;
  }
}

.notiAlert-success hr {
  border-top-color: #c9e2b3;
}

.notiAlert-success .alert-link {
  color: #2b542c;
}

.notiAlert-danger {
  padding: 17px 8px;
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
  border-left: 10px solid #dd1d0075;
  border-right: 10px solid #dd1d0075;
}

.notiAlert-danger #icon {
  height: 1.7rem;
  width: 1.7rem;
  margin-right: 0.5rem;

  #icon-inner {
    fill: #dd1d0075;
  }
}

.notiAlert-danger hr {
  border-top-color: #e4b9c0;
}

.notiAlert-danger .alert-link {
  color: #843534;
}

.notiAlert .sign {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
  text-align: center;
  width: 25px;
  display: inline-block;
}

.alert-white {
  background-image: linear-gradient(to bottom, #ffffff, #f9f9f9);
  border-top-color: #d8d8d8;
  border-bottom-color: #bdbdbd;
  border-left-color: #cacaca;
  border-right-color: #cacaca;
  color: #404040;
  padding-left: 20px;
  position: relative;
}

.alert-white .icon {
  text-align: center;
  width: 5px;
  height: 104%;
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #bdbdbd;
}

.alert-white.rounded {
  border-radius: 3px;
  -webkit-border-radius: 3px;
}

.alert-white.rounded .icon {
  border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
}

.alert-white .icon i {
  font-size: 20px;
  color: #fff;
  left: 12px;
  margin-top: -10px;
  position: absolute;
  top: 50%;
}

.alert-white.alert-danger .icon,
.alert-white.alert-danger .icon:after {
  border-color: #ca452e;
  background: #da4932;
}

.alert-white.notiAlert-success .icon,
.alert-white.notiAlert-success .icon:after {
  border-color: #54a754;
  background: #60c060;
}

.progress2 {
  border-radius: 30px;
  margin-top: -4px;
}

.bar-success {
  height: 4px;
  background-image: linear-gradient(to bottom, #ffffff4d, #ffffff0d);
  transition: 0.4s linear;
  transition-property: width, background-color;
}

.progress-moved .bar-success {
  width: 0%;
  background-color: #60c060;
  animation: progressAnimation-success 5s;
}

.bar-danger {
  height: 4px;
  background-image: linear-gradient(to bottom, #ffffff4d, #ffffff0d);
  transition: 0.4s linear;
  transition-property: width, background-color;
}

.progress-moved .bar-danger {
  width: 0%;
  background-color: #dd1d0075;
  animation: progressAnimation-danger 5s;
}

@keyframes progressAnimation-success {
  0% {
    width: 95%;
    background-color: #60c060;
  }

  100% {
    width: 0%;
    background-color: #60c060;
  }
}

@keyframes progressAnimation-danger {
  0% {
    width: 95%;
    background-color: #dd1d0075;
  }

  100% {
    width: 0%;
    background-color: #dd1d0075;
  }
}



.animation-success {
  width: 100%;
  height: max-content;
  background: #dff0d8;
  border-top-left-radius: 20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 2px;
  position: absolute;

}

.animation-danger {
  width: 100%;
  height: max-content;
  background: #f2dede;
  border-top-left-radius: 20px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 2px;
  position: absolute;

}

.animation-success .area {
  width: 100%;
  .close{
    position: absolute;
    color: #0f721c;
    cursor: pointer;
    right: 15px;
    top: 2%;
  }
}
.animation-danger .area {
  width: 100%;
  .close{
    position: absolute;
    color: #d67474;
    cursor: pointer;
    right: 15px;
    top: 2%;
  }
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.animation-success .circles li {
  background: #0f721c33;
}

.animation-danger .circles li {
  background: #e08c8cb4;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 5px;
  height: 5px;
  background: #0f721c33;
  animation: animate 25s linear infinite;
  bottom: -150px;
}


.circles li:nth-child(1) {
  left: 25%;
  width: 10px;
  height: 10px;
  animation-delay: 15s;
}


.circles li:nth-child(2) {
  left: 18%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 15px;
  height: 15px;
  animation-delay: 8s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 17px;
  height: 17px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 18px;
  height: 18px;
  animation-delay: 12s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 20px;
  height: 20px;
  animation-delay: 10s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 15px;
  height: 15px;
  animation-delay: 10s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 12px;
  height: 12px;
  animation-delay: 5s;
  animation-duration: 15s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 14px;
  height: 14px;
  animation-delay: 2s;
  animation-duration: 15s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 17px;
  height: 17px;
  animation-delay: 0s;
  animation-duration: 15s;
}

.circles li:nth-child(11) {
  left: 65%;
  width: 12px;
  height: 12px;
  animation-delay: 1.2s;
  animation-duration: 15s;
}

.circles li:nth-child(12) {
  left: 15%;
  width: 12px;
  height: 12px;
  animation-delay: 0s;
  animation-duration: 12s;
}

.circles li:nth-child(13) {
  left: 22%;
  width: 22px;
  height: 22px;
  animation-delay: 0s;
  animation-duration: 13s;
}

.circles li:nth-child(14) {
  left: 38%;
  width: 16px;
  height: 16px;
  animation-delay: 0.5s;
  animation-duration: 13s;
}

.circles li:nth-child(15) {
  left: 30%;
  width: 8px;
  height: 8px;
  animation-delay: 1.5s;
  animation-duration: 13s;
}

.circles li:nth-child(16) {
  left: 53%;
  width: 10px;
  height: 10px;
  animation-delay: 2s;
  animation-duration: 13s;
}

@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1200px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}</style>
