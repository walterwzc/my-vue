<template lang="html">
  <!-- Horizontal Form -->
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">编辑职位信息</h3>
    </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form class="form-horizontal" method="post" id="Form" enctype="multipart/form-data">
      <div class="box-body">
        <div class="form-group">
          <label for="companyName" class="col-sm-1 control-label">公司名称</label>

          <div class="col-sm-11">
            <input type="text" v-model="companyName" class="form-control" id="companyName" name="companyName" placeholder="请输入公司名称">
          </div>
        </div>
        <div class="form-group">
          <label for="companyLogo" class="col-sm-1 control-label">公司logo</label>

          <div class="col-sm-11">
            <img v-if="companyLogo" :src="`http://localhost:3000/uploads/${companyLogo}`" style="width: 100px; height: 100px;" alt="">
            <input type="file" id="companyLogo" name="companyLogo">
          </div>
        </div>
        <div class="form-group">
          <label for="positionName" class="col-sm-1 control-label">职位名称</label>

          <div class="col-sm-11">
            <input type="text" v-model="positionName" class="form-control" id="positionName" name="positionName" placeholder="请输入职位名称">
          </div>
        </div>
        <div class="form-group">
          <label for="positionSalary" class="col-sm-1 control-label">职位薪资</label>

          <div class="col-sm-11">
            <input type="text" v-model="positionSalary" class="form-control" id="positionSalary" name="positionSalary" placeholder="请输入职位薪资">
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        <a href="#/position"><button type="button" class="btn btn-default">返回</button></a>
        <button type="button" @click="doSubmit" class="btn btn-info pull-right">提交</button>
      </div>
      <!-- /.box-footer -->
    </form>
  </div>
  <!-- /.box -->
</template>

<script>
export default {
  data: () => {
    return {
      id: 0,
      companyName: '',
      companyLogo: '',
      positionName: '',
      positionSalary: ''
    }
  },
  mounted() {
    if (this.$route.name == 'add') {
      this.$store.commit('setNav', {
        title: '职位管理',
        subtitle: '职位添加',
        navLevel1: '职位管理',
        navLevel2: '添加',
        url: '#/position'
      })
    } else {
      this.$store.commit('setNav', {
        title: '职位管理',
        subtitle: '职位编辑',
        navLevel1: '职位管理',
        navLevel2: '编辑',
        url: '#/position'
      })

      $.ajax({
        url: `/api/position/item/${this.$route.params.id}`
      })
        .then((result) => {
          if (result.ret) {
            this.id = result.data._id
            this.companyName = result.data.companyName
            this.companyLogo = result.data.companyLogo
            this.positionName = result.data.positionName
            this.positionSalary = result.data.positionSalary
            // bindEditSubmit(params[1])
          }
        })
    }
  },
  methods: {
    doSubmit () {
      let url = this.$route.name === 'add' ? '/api/position/add' : '/api/position/edit/' + this.$route.params.id

      let options = {
        "success" : handleSuccess,
        "resetForm" : true,
        "dataType" : "json",
        url
      };
      $("#Form").ajaxSubmit(options);

      function handleSuccess(data, status) {
        if (data.ret) {
          alert('succ')
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
