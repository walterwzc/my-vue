const Child = {
    data: () => {
        return {
            count: 0
        }
    },
    template: `
        <div>
            {{count}}
            <button @click="add">按钮</button>
        </div>
    `,
    methods: {
        add() {
            this.count++
                this.$emit('do-add', this.count)
        }
    }
}
const Child2 = {
    props: ['id'],
    data: () => {
        return {
            count: 0
        }
    },
    template: `
        <div>
            {{id}}
            <button @click="add">按钮</button>
        </div>
    `,
    methods: {
        add() {
            this.count++
                this.$emit('do-add')
        }
    }
}

const vm = new Vue({
    el: '#app',
    template: `
        <div>
            <div>{{counter}}</div>
            <child @do-add="count"></child>
            <child2 @do-add="count" :id="passId"></child2>
        </div>
    `,
    data: {
        counter: 0,
        passId: 0
    },
    components: {
        Child,
        Child2
    },
    methods: {
        count(id) {
            // this.counter++
            this.passId = id
        }
    }
})