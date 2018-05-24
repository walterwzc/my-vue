const bus = new Vue();

Vue.component('grandfatherComponent', {
    template: `
        <div></div>
    `,
})

Vue.component('parentComponent', {
    template: `
        <div></div>
    `,
})

Vue.component('childOneComponent', {
    template: `
        <div><div>
    `,

    mounted() {
        bus.$on('busEvent', (msg) => {
            console.log(msg);
        })
    }
})

Vue.component('childTwoComponent', {
    template: `
        <div>
            <button>child Two Button</button>
        </div>
    `,
})

const vm = new Vue({
    el: '#app',

    data: {
        todoList: [],
        todoItem: '',
    },

    methods: {

    }
});