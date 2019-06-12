<template>
  <div>
    <div class="radius">啥第，额偶 1 {{app}}</div>
    <router-view/>
  </div>
</template>

<style lang="less">
  .radius{
    border-radius: 50%;
    background: red;
  }
</style>
<script>

export default {
  name: 'App',
  data() {
    return {
      app: process.env.API_WWW,
    };
  },
  mounted() {
    console.log(process.env.API_WWW);
  },
};
</script>
