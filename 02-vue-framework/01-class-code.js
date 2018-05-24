const dataSource = {
    message: 'hello',
    count: 0,
    imgSrc: 'http://d.hiphotos.baidu.com/image/pic/item/eaf81a4c510fd9f9bcb8b778292dd42a2834a470.jpg',
    imgStyle: 'width: 100px; height: 50px;',
    imgWidth: '100px',
    imgHeight: '50px',
    trans: {
        border: 'solid 5px #f00',
        transform: 'rotate(45deg)'
    },
    divClass: 'divClass',
    fontSize: 'fontSize',
    fontColor: 'fontColor',
    fontSize2: true,

    comments: [{
            comment: 'greet'
        },
        {
            comment: 'wonderful'
        },
        {
            comment: 'amazing'
        }
    ],

    greeting: [
        'hello',
        'hi',
        '你好'
    ],

    courses: {
        name: 'javascript',
        price: 23,
        pubdate: '2018-09-10'
    },

    title: '<b>hello</b>',

    isShow: false,

    inputValue: 'b'
}

const vm = new Vue({
    data: dataSource,
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },

    methods: {
        showTitle(event, num) {
            console.log(num);
            console.log(event);
            this.isShow = !this.isShow
        },
        
        showTitle2() {
            console.log(0);
        }
    }
})

vm.$mount('#app')

vm.$watch('count', (newValue, oldValue) => {
    console.log(vm.count * 2);
})