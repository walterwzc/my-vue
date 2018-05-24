<template lang="html">
  <main>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="(v,i) in poslist">
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
      </li>
    </ul>
    </mt-loadmore>
  </main>
</template>

<script>
import axios from "axios";
import { Loadmore } from "mint-ui";

export default {
    data: () => {
        return {
            poslist: [],
            allLoaded: false
        };
    },

    methods: {
        loadTop() {
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded();
            }, 2000);
        },
        loadBottom() {
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded();
            }, 2000);
        }
    },

    mounted() {
        axios({
            url: "/api/position/m/list/",
            data: {
                start: 0,
                count: 10
            }
        }).then(result => {
            this.poslist = result.data.data;
        });
    },

    components: {
        [Loadmore.name]: Loadmore
    }
};
</script>

<style lang="css">

</style>
