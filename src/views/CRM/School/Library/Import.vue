<template>
  <div class="section import-page">
    <div class="container">
      <div class="main-card mid-cardd">
        <div class="card-header">
          <div class="left">
            <div class="icon">
              <icon-download class="rotate-18"></icon-download>
            </div>
            Import Data
          </div>
          <div class="right">
            <div class="text text-grey"></div>
          </div>
        </div>
        <div class="card-body">
          <div
            class="import-data flex flex-d-col align-center text-center p-5-r"
          >
            <h4 class="mb-16">Import Books Data</h4>
            <div class="text text-grey mb-16 w-50">
              If the university or school is aware of these cases, they can
              monitor the
              <router-link to="/" class="text-primary text-small f-w-bold"
                >Download CSV File</router-link
              >
              & Upload it where threats found
            </div>
            <label for="list" class="flex justify-center">
              <input type="file" id="list" class="d-none" />
              <!-- <input type="radio" id="list"> -->
              <div class="btn white-btn">Upload ZIP File</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
