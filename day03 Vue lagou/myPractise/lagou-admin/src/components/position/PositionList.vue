<template lang="html">
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">
        <a href="#/add"><button class='btn btn-primary'>添加 <span class="fa fa-plus"></span></button></a>
      </h3>
      <div class="box-tools">
        <div class="input-group input-group-sm" style="width: 150px;">
          <input type="text" name="table_search" id="search" class="form-control pull-right" placeholder="输入职位名称">

          <div class="input-group-btn">
            <button type="submit" id="searchSubmit" class="btn btn-default"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th style="width: 10px">#</th>
            <th style="width: 100px">公司Logo</th>
            <th>公司名称</th>
            <th style="width: 15%;">职位名称</th>
            <th style="width: 10%;">职位薪资</th>
            <th style="width: 10%;">发布时间</th>
            <th style="width: 180px">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v,i) in data">
            <td>{{i+1}}.</td>
            <td><img :src="`http://localhost:3000/uploads/${v.companyLogo}`" style="width: 50px; height: 50px;" alt=""></td>
            <td>{{v.companyName}}</td>
            <td>{{v.positionName}}</td>
            <td>{{v.positionSalary}}</td>
            <td>{{v.createTime}}</td>
            <td>
              <a :href="`#/edit/${v._id}`"><button class="btn btn-info">编辑 <span class="fa fa-edit"></span></button></a>
              <button class="btn btn-danger" :id="v._id">删除 <span class="fa fa-remove"></span></button>
            </td>
          </tr>

          <tr v-if="data.length == 0"><td colspan="7">没有找到符合条件的文档。</td></tr>
        </tbody>

      </table>
    </div>

    <pagination-component
      :pageno="pageno"
      :pagesize="pagesize"
      :pagecount="pagecount"></pagination-component>
  </div>
  <!-- /.box -->
</template>

<script>
import axios from 'axios'
import PaginationComponent from '../layout/PaginationComponent'

export default {
  props: ['pageno'],
  mounted() {
    //do something after mounting vue instance
    this.renderPositionList()
  },
  data: () => {
    return {
      data: [],
      pagecount: 0,
      pagesize: 0
    }
  },
  beforeCreate() {
    this.$store.commit('setNav', {
      title: '职位管理',
      subtitle: '职位列表',
      navLevel1: '职位管理',
      navLevel2: '列表',
      url: '#/position/0'
    })
  },
  components: {
    PaginationComponent
  },
  methods: {
    renderPositionList() {
      let pageno = parseInt( this.pageno || 0 , 10)
      axios({
        url: '/api/position/list/' + pageno
      })
        .then((result) => {
          let data = result.data.data
          if (result.data.ret) {
            const {pagesize, total} = data
            const pagecount = Math.ceil( total / pagesize )
            if (pageno < pagecount && pageno >= 0) {

              this.data = data.result
              this.pagecount = pagecount
              this.pagesize = pagesize

              //
              // $('.btn-danger').on('click', async function() {
              //   if (confirm('真的要删除吗')) {
              //     let id = $(this).attr('id')
              //     let result = await removePosition(id)
              //     if (result) {
              //       renderPositionList(pageno)
              //     } else {
              //       alert('数据删除失败~')
              //     }
              //   }
              // })

              // search()
            } else {
              this.$router.push('/position/' + ( pageno - 1 ))
            }
          }
        })
    }
  },
  watch: {
    'pageno': function () {
      this.renderPositionList()
    }
  }
}
</script>

<style lang="css">
</style>
