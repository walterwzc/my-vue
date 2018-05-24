const mapGetters = Vuex.mapGetters
const mapMutations = Vuex.mapMutations

const store = new Vuex.Store({
    state: {
        count: []
    },

    mutations: {
        add(state) {
            state.count.push(Math.floor(Math.random() * (10 - 1) + 1))
        },

        // 如果不使用 mapMutations 的方式：
        // add(state, payload) {
        //     state.count.push(payload);
        // },

        remove(state) {
            state.count.pop()
        },

        setCount(state, payload) {
            state.count = state.count.concat(payload)
        }
    },

    getters: {
        total(state) {
            return state.count.length
        },

        sum(state) {
            return state.count.reduce((a, b) => a + b, 0)
        },

        average(state, getters) {
            return parseInt(getters.sum / getters.total * 100, 10) / 100
        },
    },

    actions: {
        getCount(context) {
            axios.get('http://localhost:8090/api/count')
                .then((result) => {

                    console.log(result);

                    context.commit('setCount', result.data)
                })
        }
    }
})

const vm = new Vue({
    el: '#app',
    store,
    template: `
        <div>
            <div>{{average}}</div>
            <button @click="add">add</button>
            <button @click="remove">remove</button>
            <hr />
            <div>个数是：{{total}}, 总和是: {{sum}}</div>
        </div>
    `,
    computed: {
        ...mapGetters([
            'total',
            'sum',
            'average'
        ])

        // 如果不使用 mapGetters 的方式：
        // total() {
        //     return this.$store.getters.total;
        // },

        // sum() {
        //     return this.$store.getters.sum;
        // },

        // average() {
        //     return this.$store.getters.average;
        // }
    },
    methods: {
        ...mapMutations([
            'add',
            'remove'
        ])

        // 如果不使用 mapMutations 的方式：
        // add() {
        //     this.$store.commit('add', Math.floor(Math.random() * (10 - 1) + 1));
        // }

        // remove() {
        //     this.$store.commit('remove');
        // }

    },

    // 由 Vue Component 来 dispatch action ， dispatch 会在 action 之中寻找对应的方法( 在 Action 之中可以声明异步的代码 )。
    mounted() {
        // this.$store.commit('getCount')
        this.$store.dispatch('getCount')

        console.log(this.$store);
    }
})