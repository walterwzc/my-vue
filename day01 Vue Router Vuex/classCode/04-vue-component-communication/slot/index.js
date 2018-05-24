const Child = {

    // 作用域插槽。
    template: `
        <div>
            <slot :msg="childMessage" :aaa="bbbb">default</slot>
        </div>
    `,
    data: () => {
        return {
            childMessage: 'test',
            bbbb: 'test222'
        }
    }
}

new Vue({
    el: '#app',
    template: `
        <child>
            <template slot-scope="props">
                {{message}}
                {{props.msg}}
                {{props.aaa}}
            </template>
        </child>
    `,
    data: {
        message: 'text',
        // aaa: 'cccc',
        // bbbb: 'test22',
    },
    components: {
        Child
    }
})