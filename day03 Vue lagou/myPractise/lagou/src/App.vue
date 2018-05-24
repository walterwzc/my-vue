<template lang="html">
  <div class="container">
    <!-- <header>拉勾网</header> -->
    <div class="main">
      <!-- <nav>
        <div class="custom-info">
          <span>
            10秒钟定制职位
          </span>
          <a>
            <em class="icon"></em>
            <em class="text">去登录</em>
          </a>
        </div>
      </nav> -->

      <!-- 在页面之中通过 router-view 将 路由对应的 页面， 渲染到在这里的页面 -->
      <router-view></router-view>
    </div>

    <footer>
      <ul>
        <router-link to="/" tag="li" active-class="active" exact>
          <i class="yo-ico">&#xe6b8;</i>
          <b>职位</b>
        </router-link>
        <router-link to="/search" tag="li" active-class="active">
          <i class="yo-ico">&#xe7da;</i>
          <b>搜索</b>
        </router-link>
        <router-link to="/mine" tag="li" active-class="active">
          <i class="yo-ico">&#xe78b;</i>
          <b>我的</b>
        </router-link>
      </ul>
    </footer>
  </div>

</template>

<script>
export default {};
</script>


<style>
header {
    background: red;
    font-weight: bold;
    font-style: italic;
}
</style>
