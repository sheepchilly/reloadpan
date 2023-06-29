<template>
  <div class="login-body">
    <div class="bg"></div>
  </div>
</template>

<script setup>
import {ref} from "vue"
</script>

<style lang="scss" scoped>
.login-body{
  width: 100%;
  height: calc(100vh);
  background-size: cover;
  background: url("../assets/img/BackGroundLogin.png") no-repeat;
  display: flex;
  .bg{
    flex: 1;
    background-size: cover;
    background-position: center;
    background-size: 800px;
    background-repeat: no-repeat;
    background-image: url("../assets/img/Login-left2.png");
  }
  .login-panel{
    width: 430px;
    margin-right: 15%;
    margin-top: calc((100vh - 500px) / 2);
  }
}
</style>
