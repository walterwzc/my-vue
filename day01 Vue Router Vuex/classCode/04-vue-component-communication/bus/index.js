const bus = new Vue()

Vue.component('grandfatherComponent', {
    template: `
    <div>
        <h3>Grandfather Component</h3>
        <parent-component></parent-component>
        <child1-component></child1-component>
    </div>
    `,
    mounted() {
        bus.$on('event', (msg) => {
            console.log('Grandfather Component get event, and emit event2 at the same time!!!')
            bus.$emit('event2', msg)
        })
    }
})

Vue.component('parentComponent', {
    template: `<child2-component></child2-component>`,
    mounted() {
        bus.$on('event', (msg) => {
            console.log("Parent Component get the event, the message is: ")
            console.log(msg);
        })
    }
})

Vue.component('child1Component', {
    template: `<h4>child1Component</h4>`,
    mounted() {
        bus.$on('event', (msg) => {
            console.log("Child1 Component get the event, the message is: ")
            console.log(msg);
        })
        bus.$on('event2', (msg) => {
            console.log('Child1 Component get the event2, the message is: ')
            console.log(msg + '//');
        })
    }
})

Vue.component('child2Component', {
    template: `
        <div>
            <h4>child2Component</h4>
            <button @click="send">send</button>
        </div>
    `,
    methods: {
        send() {
            console.log('child2Component emit event, and the message is test')
            bus.$emit('event', 'test')
        }
    }
})

new Vue({
    el: '#app',
    template: `<grandfather-component></grandfather-component>`
})