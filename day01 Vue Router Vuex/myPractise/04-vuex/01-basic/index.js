const store = new Vuex.Store({
    state: {
        count: 0
    },

    mutations: {
        add(state, payload) {
            state.count += payload;
        }
    }
});


const vm = new Vue({
    el: '#app',

    data: {
        count: 0
    },

    // 将Vuex的实例挂载在 Vue 的实例之中。
    store,

    template: `
        <div>{{count}}</div>
    `,

    computed: {
        addCount() {
            return this.$store.getters.total;
        }
    },

    methods: {
        add() {
            const randomNumber = Math.floor(Math.random()) * (10 - 1) + 1;
            console.log(randomNumber);
            this.$store.commit('add', randomNumber);
        }
    },

    updated() {
        this.count = this.$store.state.count;
    }
});








