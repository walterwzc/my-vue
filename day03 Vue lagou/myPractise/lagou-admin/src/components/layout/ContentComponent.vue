<template lang="html">
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <nav-component></nav-component>

    <!-- Main content -->
    <section class="content">

      <!-- Your Page Content Here -->
      <router-view></router-view>

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
  import PositionList from '../position/PositionList'
  import NavComponent from './NavComponent'

  export default {
    components: { PositionList, NavComponent }
  }
</script>
