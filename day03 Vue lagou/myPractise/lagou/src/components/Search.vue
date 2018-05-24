<template>
    <div>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>
</template>

<script>
import Vue from "vue";
import { Button } from "mint-ui";

// output: mt-button   
// [Button.name] => ES6 的方式， 组件的名字为： mt-button， 标签对应的组件为： Button
// console.log(Button.name);

export default {
    components: {
        [Button.name]: Button
    }
};
</script>
