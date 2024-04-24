<template>
  <div style="padding-top: 56px;">
    <nav class="navbar navbar-expand-xs navbar-light bg-light fixed-top" style="z-index: 1000;">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" @click="handleShow">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <a class="navbar-brand" href="#">AppMemory</a> -->
        <div style="width:200px" :class="{ 'offcanvas': true, 'offcanvas-start': true, 'show': show }"
          :id="`offcanvasNavbar-expand-${false}`" :aria-labelledby="`offcanvasNavbarLabel-expand-${false}`">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" :id="`offcanvasNavbarLabel-expand-${false}`">AppMemory</h5>
            <button type="button" class="btn-close text-reset" @click="handleClose"></button>
          </div>
          <div class="offcanvas-body">
            <div class="btn-group-vertical" style="width: 160px;" role="group" aria-label="Button group">
              <button type="button" class="btn btn-light" @click="handleButtonClick">Booklet</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleShow() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
    },
    handleButtonClick() {
      this.$router.push({ path: '/booklet' });
      this.handleClose();
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
