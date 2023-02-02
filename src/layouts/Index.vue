<template>
  <div>
    <router-view></router-view>
    <router-link to="main">메인으로</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style scoped>
div {
  overflow: scroll;
}
</style>
