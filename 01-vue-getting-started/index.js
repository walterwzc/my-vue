Vue.component('my-component', {
    props: ['content'],
    template: '<div>{{content}}</div>'
})

new Vue({
    el: '#app',
    data: {
        message: 'hello2',
        title: 'world',
        isShow: true,
        courses: ['html', 'css', 'javascript']
    },
    methods: {
        showMessage() {
            console.log(this.message)
        }
    }
})
