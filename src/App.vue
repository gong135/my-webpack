<template>
  <div>
    <div class="radius">啥第，额偶 1</div>
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
      app: '123',
    };
  },
};
</script>
