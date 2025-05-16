<template>
  <section class="contact-page">
    <div class="container">
      <div class="bread-crumb">
        <div class="content">
          <h4 class="title">Contact Us</h4>
          <div class="path">
            <router-link to="/">Home</router-link>
            >>
            <div class="text">Contact Us</div>
          </div>
        </div>
      </div>
      <div class="contact-content">
        <div class="contact-card card">
          <form action="" class="form">
            <h4 class="text-primary">Get in touch</h4>
            <div class="sub-text text-grey">We are always here to help out whatever way we can</div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="animate-label">
                  <input type="text" id="first_name" required/>
                  <label for="first_name"> First Name </label>
                  <line></line>
                </div>
                <!-- <div class="err-msg">Please enter first name</div> -->
              </div>
              <div class="form-item col-5 mb-16">
                <div class="animate-label">
                  <input type="text" id="last_name" required/>
                  <label for="last_name"> Last Name </label>
                  <line></line>
                </div>
                <!-- <div class="err-msg">Please enter last name</div> -->
              </div>
            </div>
            <div class="row">
              <div class="form-item col-5 mb-16">
                <div class="animate-label">
                  <input type="text" id="email" required/>
                  <label for="email"> Email </label>
                  <line></line>
                </div>
                <!-- <div class="err-msg">Please enter email</div> -->
              </div>
              <div class="form-item col-5 mb-16">
                <div class="animate-label">
                  <input type="number" id="phone" required/>
                  <label for="phone"> Phone No </label>
                  <line></line>
                </div>
                <!-- <div class="err-msg">Please enter phone no</div> -->
              </div>
            </div>
            <div class="row align-end">
              <div class="form-item col-5 mb-16">
                <div class="animate-label">
                  <input type="text" id="message" required/>
                  <label for="message"> Message </label>
                  <line></line>
                </div>
                <!-- <div class="err-msg">Please enter message</div> -->
              </div>
              <div class="form-item save-btn mb-16 col-5">
                <button class="btn primary-btn">
                  Send
                  <icon-telegram></icon-telegram>
                </button>
              </div>
            </div>
          </form>
          <div class="contact-info">
            <h5>Contact Information</h5>
            <div class="data-content">
              <div class="data">
                <div class="icon">
                  <icon-phone></icon-phone>
                </div>
                <a href="#" class="val">+91 8888888888</a>
              </div>
              <div class="data">
                <div class="icon">
                  <icon-mail></icon-mail>
                </div>
                <a href="#" class="val">company@gmail.com</a>
              </div>
              <div class="data">
                <div class="icon">
                  <icon-location></icon-location>
                </div>
                <div class="val">
                  South City Mall, Near Jadhavpura, Kolkata, West Bengal - 444444.
                </div>
              </div>
            </div>
            <!-- <div class="social-links">
              <a href="#" class="icon">
                <icon-google></icon-google>
              </a>
              <a href="#" class="icon">
                <icon-twitter></icon-twitter>
              </a>
              <a href="#" class="icon">
                <icon-instagram></icon-instagram>
              </a>
              <a href="#" class="icon">
                <icon-telegram></icon-telegram>
              </a>
            </div> -->
          </div>
        </div>
        <!-- <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.2168978238!2d88.26495129652356!3d22.53556493596121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1689458114084!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
