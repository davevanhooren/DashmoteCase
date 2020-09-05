<template>
  <div id="dashmote-case-layout">
    <a-layout>
      <!-- header part -->
      <a-layout-header>
        <div class="logo">
          <img alt="Dashmote logo" src="./assets/images/dashmote-logo.png" width=200px>
        </div>
        <div class="profile">
          <b>Dave van Hooren </b>
          <img alt="User profile photo" src="./assets/images/circle-dave.png" height=50px>
        </div>
      </a-layout-header>

      <!-- content part -->
      <a-layout-content>
        Content Here
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
      </a-layout-content>

      <!-- footer part -->
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style src="./assets/styles/layout.css"></style>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>
