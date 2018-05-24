const dataSource = {
    message: '上海自来水来自海上吗？',
    gender: 0,
    str: ''
}

const vm = new Vue({
    el: '#app',
    data: dataSource,

    methods: {
        backword() {
            return this.message.split('').reverse().join('')
        },

        // 接收前端传递过来的值，并赋给Vue实例属性
        changeMsg(event) {
            this.message = event.target.value;
        },

        filterGenderMethod() {
            console.log('in the method');
            return this.gender === 0 ? '男' : '女';
        },

        // 如果 实例的str属性发生了变化， 那么发送ajax请求。 
        getData(id) {
            fetch('https://api.douban.com/v2/movie/top250?start=' + id)
                .then((request) => request.json())
                .then((result) => {
                    console.log(result);
                })
        }
    },

    // 检测属性变化
    watch: {
        'str': function (newValue, oldValue) {
            this.getData(2)
        }
    },


    computed: {
        reverse() {
            return this.message.split('').reverse().join('')
        },
        filterGenderComputed() {
            console.log('in the computed');
            // return this.gender === 0 ? this.message : '女'
            return this.gender + this.message
        }
    }
})

// vm.$watch('gender', (newValue, oldValue) => {
//     vm.str = newValue === 0 ? vm.message : '女'
// })
// vm.$watch('message', (newValue, oldValue) => {
//     vm.message = newValue
// })