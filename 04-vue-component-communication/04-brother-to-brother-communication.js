const childComponent = {

}

const vm = new Vue({
    el: '#app',
    data: {
        fatherID: 0,
        fatherCounter: 0
    },
    components: {
        childComponent
    }
});