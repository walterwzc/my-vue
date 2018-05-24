// 全局定义组件
Vue.component('comment-component', {
    props: ['text', 'msg'],
    template: `
        <div>
            <button @click="showMessage(msg)"> {{text}} </button>
        </div>`,
    methods: {
        showMessage(msg) {
            console.log(msg);
        }
    }
})

const dataSource = {
    message: 'message from father dataSource',
    lists: [{
            name: 'jiazhi',
            age: 18
        },
        {
            name: 'zhichao',
            age: 17
        }
    ]
}

const dataSourceChild = {
    message: 'message from child component dataSource',
    lists: [{
            name: 'jiazhi',
            age: 18
        },
        {
            name: 'zhichao',
            age: 17
        },
        {
            name: 'xinyu',
            age: 16
        }
    ],
    lists2: [
        'a', 'b', 'c'
    ]
}

// 局部定义组件
const listComponent = {
    // data: () => {
    //   return dataSourceChild
    // },
    props: {

        // 如果要对组件的属性进行检查，可以采用如下的方式，
        // 否则 可以写成：  ['lists', 'title']
        'lists': {
            type: Array,
            default: () => {
                return ['a']
            }
        },
        'title': {
            type: String,
            default: 'xxx',
            required: true,
            validator: (value) => {
                return value.length > 10
            }
        }
    },

    template: `
        <div>
            <b style="color: #76EAEA;">{{title}}</b>
            <div style="background: red"><slot></slot></div>
            <div style="background: yellow"><slot name="slot1"></slot></div>
            <div style="background: gray"><slot name="slot2"></slot></div>
        </div>
    `
}


const vm = new Vue({
    el: '#app',
    data: dataSource,
    components: {
        listComponent
    }
})

const vm2 = new Vue({
    el: '#app2',
    data: dataSourceChild,
    components: {
        listComponent
    }
})