<template>
  <div id="bottomNav">
    <router-link to="main">홈</router-link>
    <router-link to="statistics">통계</router-link>
    <router-link to="budget">예산</router-link>
    <router-link to="assets">자산</router-link>
    <router-link to="setting">설정</router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
};
</script>

<style>
#bottomNav {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
</style>
