
// 触发事件的组件
const Child = {
    data: () => {
        return {
            count: 0
        }
    },

    // count 为 子组件自身 属性
    // @click 定义 HTML元素 事件 
    template: `
        <div>
            <hr>
            <span>触发事件的子元素</span><br>
            触发事件的子元素的count：   {{count}}<br>
            <button @click="add">按钮</button><br>
            <hr>
        </div>
    `,
    methods: {
        add() {
            this.count++
            // 触发一个 自定义的 do-add 的事件向父组件。
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
            <hr>
            <span>被触发事件的子元素</span><br>
            {{id}}<br>
            <button @click="add">按钮</button><br>
            <hr>
        </div>
    `,
    methods: {
        add() {
            this.count++
            this.$emit('do-add', this.id)
        }
    }
}

const vm = new Vue({
    el: '#app',

    // @do-add  就是在元素 之上 绑定了一个事件， 类似于 $('child').on('do-add', function() {});
    template: `
        <div>
            <div>这里是父元素</div>
            <div>父元素的counter：  {{counter}}</div>
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
            this.counter++
            this.passId = id
        }
    }
})