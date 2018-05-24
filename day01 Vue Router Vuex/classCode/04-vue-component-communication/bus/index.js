const bus = new Vue()

Vue.component('grandfatherComponent', {
    template: `
    <div>
        <parent-component></parent-component>
        <child1-component></child1-component>
    </div>
    `,
    mounted() {
        bus.$on('event', (msg) => {
            bus.$emit('event2', msg)
        })
    }
})

Vue.component('parentComponent', {
    template: `<child2-component></child2-component>`
})

Vue.component('child1Component', {
    template: `<div></div>`,
    mounted() {
        bus.$on('event', (msg) => {
            console.log(msg);
        })
        bus.$on('event2', (msg) => {
            console.log(msg + '//');
        })
    }
})

Vue.component('child2Component', {
    template: `
        <button @click="send">send</button>
    `,
    methods: {
        send() {
            bus.$emit('event', 'test')
        }
    }
})

new Vue({
    el: '#app',
    template: `<grandfather-component></grandfather-component>`
})