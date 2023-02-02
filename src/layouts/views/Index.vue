<template>
  <div class="main-layouts">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <BottomNav />
    </footer>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav';

export default {
  name: 'Index',
  components: {
    BottomNav,
  },
};
</script>

<style>
footer {
  position: sticky;
  bottom: 0;
}
main {
  height: 100%;
}
.main-layouts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
