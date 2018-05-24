<template>
  <div class="m-mine">
    <div>
      <signin :isshow="false"></signin>
      <div v-for="(v, index) in 100" :key="index">{{v}}</div>
    </div>
  </div>
</template>

<script>
  import Signin from './Sign.vue'
  export default {
    components: {
      Signin
    },
    mounted() {
      //do something after mounting vue instance
      console.log('mine');
    },
    beforeDestroy() {
      //do something before destroying vue instance
      console.log('destroyed');
    }
  }
</script>

<style lang="scss">
  .m-mine {
    height: 100%;
    overflow-y: scroll;
  }
</style>
