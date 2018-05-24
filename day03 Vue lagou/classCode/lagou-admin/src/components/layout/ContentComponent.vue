<template lang="html">
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <nav-component></nav-component>

    <!-- Main content -->
    <section class="content">

      <!-- 由路由改变的地方，使用 router-view 来判断这里显示的是 PositionForm 或者是 PositionList  -->
      <router-view></router-view>

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  import PositionList from '../position/PositionList.vue'
  import NavComponent from './NavComponent'

  export default {
    components: { PositionList, NavComponent }
  }
</script>
