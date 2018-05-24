const vm = new Vue({
    el: '#app',
    data: {
        inputValue: '',
        list: ['item']
    },
    methods: {
        changeValue() {
            this.list.push(this.inputValue)
            this.inputValue = ''
        },
        removeItem(i) {
            this.list.splice(i, 1)
        }
    }
})