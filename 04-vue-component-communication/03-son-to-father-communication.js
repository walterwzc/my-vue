const Child = {
    data: () => {
        return {
            count: 0
        }
    },
    template: `
        <div>
            son: {{count}}
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


const vm = new Vue({
    el: '#app',
    data: {
        fatherID: 0,
        fatherCounter: 0
    },
    template: `
        <div>
            father: {{fatherID}}
            <child @do-add='setFatherCount'></child>
        </div>
    `,
    methods: {
        setFatherCount(sonCount) {
            this.fatherID = sonCount;
        }
    },
    components: {
        Child
    }
});