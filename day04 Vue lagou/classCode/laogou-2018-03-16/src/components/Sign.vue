<template lang="html">
  <nav v-if="isshow">
    <div class="custom-info">
      <span>
        {{message}}秒钟定制职位
      </span>
      <a>
        <em class="icon"></em>
        <em class="text">去登录</em>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
    props: {
        message: {
            type: Number,
            default: 10
        },
        isshow: [Boolean]
    }
}
</script>

<style lang="css">
</style>
