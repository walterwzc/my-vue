<template lang="html">
  <div class="container">
    <header>拉勾网</header>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <footer>
      <ul>
        <router-link to="/position" tag="li" active-class="active">
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
