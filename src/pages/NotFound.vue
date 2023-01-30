<template>
  <div>
    없는 페이지입니다.
    <button type="button" @click="$router.go(-1)">뒤로가기</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
