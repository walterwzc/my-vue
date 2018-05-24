<template lang="html">
  <div class="m-position">
    <!-- <button @click="pushnew">加载</button> -->
    <signin :isshow="true"></signin>
    <main class="m-position-main">
      <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      topDropText="放下了"
      @top-status-change="handleTopChange"
      ref="loadmore">
      <ul>
        <router-link :to="`/detail/${v._id}`" tag="li" :key="v._id" v-for="(v,i) in poslist">

          <!-- src属性不受浏览器同源策略影响，可以直接进行跨域 -->
          <img :src="`http://localhost:3000/uploads/${v.companyLogo}`">
          <div>
            <h2>{{v.companyName}}</h2>
            <p>
              <span>
                {{v.positionName}}
              </span>
              <span>{{v.positionSalary}}</span>
            </p>
            <p>{{v.createTime}}</p>
          </div>
        </router-link>
        <!-- <li v-for="(v,i) in count">{{v}}</li> -->
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <div v-if="status=='pull'">aaa</div>
        <div v-if="status=='drop'">bbb</div>
        <div v-if="status=='loading'">ccc</div>
      </div>
    </mt-loadmore>
  </main>
</div>
</template>

<script>
import axios from 'axios'
import { Loadmore, Indicator } from 'mint-ui'
import Signin from './Sign.vue'
export default {
    data: () => {
        return {
            poslist: [],
            allLoaded: false,
            status: '',
            count: [1, 3, 3]
        }
    },

    methods: {
        loadTop() {
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded()
            }, 2000)
        },
        loadBottom() {
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded()
            }, 2000)
            setTimeout(() => {
                // 设置了 allLoaded 属性之后， 就不能够再次进行下拉操作，代表数据全局加载完成。
                this.allLoaded = true
            }, 8000)
        },
        handleTopChange(status) {
            switch (status) {
                case 'pull':
                    this.status = 'pull'
                    console.log('now the status is pull');
                    break
                case 'drop':
                    this.status = 'drop'
                    console.log('now the status is drop');
                    break
                case 'loading':
                    this.status = 'loading'
                    console.log('now the status is loading');
                    break
                default:
            }
        },
        pushnew() {
            this.count.push(7);

            // nextTick 表示等待上面的 DOM 操作结束之后，才执行的操作。
            this.$nextTick(() => {
                console.log(this.$refs.myul.children.length);
            })
        }
    },

    created() {},

    mounted() {
        // 
        // mint-ui, Indicator 指示器， 用来在页面加载的时候给用户一个转圈等待的提示信息。

        console.log("now is in mounted()");
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })
        axios({
            url: '/api/position/m/list/',
            data: {
                start: 0,
                count: 10
            }
        }).then(result => {
            this.poslist = result.data.data;

            // 渲染完成之后 关闭指示器。
            Indicator.close();
        })
    },

    components: {
        [Loadmore.name]: Loadmore,
        Signin
    }
}
</script>

<style lang="scss">
@import '../styles/app.scss';
.m-position {
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
}

.m-position-main {
    overflow-y: scroll;
}

.container {
    .main {
        width: 100%;
        height: 100%;
        @include flexbox();
        @include flex-direction(column);
        nav {
            height: 0.44rem;
            .custom-info {
                height: 100%;
                @include flexbox();
                @include align-items();
                padding: 0 15px;
                span {
                    @include flex();
                }
                a {
                    width: 0.84rem;
                    position: absolute;
                    right: 0.15rem;
                    top: 0;
                    display: block;
                    background-color: #f5f5f5;
                    padding: 0 0.2rem;
                    height: 0.3rem;
                    line-height: 0.3rem;
                    margin-top: 0.06rem;
                    color: $base-color;
                    @include border-radius(0.15rem);
                }
            }
            @include border(0 0 1px 0);
        }
        main {
            @include flex();
            width: 100%;
            overflow-y: scroll;
            ul {
                width: 100%;
                height: 100%;

                .head {
                    text-align: center;
                    height: 100px;
                    line-height: 100px;
                }
                .head img {
                    display: inline-block;
                    transform: rotate(180deg);
                    -webkit-transform: rotate(180deg);
                    transition: transform 150ms;
                    -webkit-transition: transform 150ms;
                }
                .up {
                    transform: rotate(360deg) !important;
                    -webkit-transform: rotate(360deg) !important;
                }
                .foot {
                    text-align: center;
                    height: 100px;
                    line-height: 100px;
                }
                .foot img {
                    display: inline-block;
                    /*transform: rotate(0deg);*/
                    /*-webkit-transform: rotate(0deg);*/
                    transition: transform 150ms;
                    -webkit-transition: transform 150ms;
                }
                .down {
                    transform: rotate(180deg) !important;
                    -webkit-transform: rotate(180deg) !important;
                }

                li {
                    padding: 0.14rem;
                    height: 1rem;
                    @include flexbox();
                    @include align-items();
                    @include border(0 0 1px 0);

                    > img {
                        width: 0.6rem;
                    }
                    > div {
                        padding-left: 0.06rem;
                        @include flex();
                        h2 {
                            font-size: 0.18rem;
                            margin-bottom: 0.04rem;
                        }
                        p {
                            font-size: 0.14rem;
                            height: 0.24rem;
                            &:nth-child(2) {
                                @include flexbox();
                                span {
                                    display: block;
                                    height: 100%;
                                    @include ellipsis();
                                    &:first-child {
                                        @include flex();
                                    }
                                    &:last-child {
                                        width: 0.7rem;
                                        color: $base-color;
                                        font-size: 0.16rem;
                                        text-align: right;
                                        margin-bottom: 0.2rem;
                                    }
                                }
                            }
                            &:last-child {
                                color: #888;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
