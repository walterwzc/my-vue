<template>
  <div class="m-search">
    <!-- <signin :message="8" :isshow="false"></signin> -->
    <ul>
      <li>
        <span>全国</span>
        <span class="yo-ico">&#xf031;</span>
      </li>
      <li><input type="text" /></li>
      <li class="yo-ico">&#xf067;</li>
    </ul>
    <ol>
      <li>
        <span>多点</span>
        <span class="yo-ico">&#xf077;</span>
      </li>
    </ol>
  </div>
</template>

<script>
import Signin from './Sign.vue'
export default {
    data: () => {
        return {
            isShow: false
        }
    },
    components: {
        Signin
    },
    created() {
        if (true) {
            this.isShow = true
        }
    },
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('beforeRouteEnter')
        console.log(from, to)
        next()
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        console.log('beforeRouteUpdate')
        console.log(from, to)
        next()
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log('beforeRouteLeave')
        console.log(from, to)
        next()
    }
}
</script>

<style lang="scss">
@import '../styles/app.scss';
.m-search {
    height: 100%;
    overflow: scroll;
    // margin-top: -40px;
    @include flexbox();
    @include flex-direction(column);
    ul {
        width: 100%;
        height: 0.44rem;
        @include flexbox();
        @include border(0 0 1px 0);
        li:first-child {
            width: 0.9rem;
            font-size: 0.16rem;
            line-height: 0.16rem;
            @include border(0 1px 0 0);
            @include flexbox();
            @include align-items(center);
            @include justify-content(center);
            span:last-child {
                margin-top: 0.04rem;
            }
        }
        li:nth-child(2) {
            @include flex();
            input {
                width: 100%;
                height: 100%;
                padding: 0.06rem;
            }
        }
        li:last-child {
            width: 0.46rem;
            font-size: 0.18rem;
            line-height: 0.46rem;
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
        }
    }
    ol {
        @include flex();
        width: 100%;
        li {
            @include flexbox();
            background: #fafafa;
            @include border(0 0 1px 0);
            span:first-child {
                @include flex();
                line-height: 0.44rem;
                padding: 0 0.2rem;
            }
            span:last-child {
                width: 0.44rem;
                line-height: 0.44rem;
                text-align: center;
            }
        }
    }
}
</style>
