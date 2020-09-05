<template>
  <div id="dashmote-case-layout">
    <a-layout>
      <!-- header part -->
      <a-layout-header>
        <div class="logo">
          <img alt="Dashmote logo" src="./assets/images/dashmote-logo.png" width=200px>
        </div>
      
        <div class="profile-photo">
          <img alt="User profile photo" src="./assets/images/circle-dave.png" height=50px>
        </div>

        <div class="profile-name">
          <b>Dave van Hooren</b>
        </div>

      </a-layout-header>

      <!-- content part -->
      <a-layout-content>
        <DashboardOverview></DashboardOverview>
      </a-layout-content>

      <!-- footer part -->
      <a-layout-footer>Created for Dashmote, by Dave van Hooren</a-layout-footer>
    </a-layout>
  </div>
</template>

<style src="./assets/styles/layout.css"></style>

<script>
import DashboardOverview from './components/DashboardOverview.vue'

export default {
  name: 'App',
  components: {
    DashboardOverview
  }
}
</script>
