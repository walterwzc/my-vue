<template>
  <div>
    <div>欢迎使用本系统，系统采用 Node.js+EJS+Express+ArtTemplate+MongDB+Mongoose</div>
  </div>
</template>

<script>
import NavComponent from "../layout/NavComponent.vue";
export default {
    created() {
        this.$store.commit("setNav", {
            title: "首页",
            subtitle: "欢迎信息",
            navLevel1: "首页",
            navLevel2: "welcome",
            url: "#/"
        });
    },
    components: { NavComponent }
};
</script>
