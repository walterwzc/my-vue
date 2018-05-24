const Child = {
    props: ['id'],
    data: () => {
        return {
            count: 0
        }
    },
    template: `
    <div>
        <h2>
            子组件的count：<br/>
            {{count}}
        </h2>
        <h2>
            父组件传递过来的ID：<br/>
            {{id}}
        </h2>
        <button @click="add">子组件自己的Add Button</button>
    </div>
  `,
    methods: {
        add() {
            this.count++
        }
    }
}

const vm = new Vue({
    el: '#app',
    data: {
        fatherID: 0,
        fatherCounter: 11
    },
    template: `
        <div>
            <h3 style="color: green">这里的内容是子组件的：</h3>
            <child :id='fatherCounter'></child>
            <hr>
            <h3 style="color: red">这里的内容是父组件的：</h3>
            <button @click='addFather'>父组件的 Add Button</button>
        </div>

    `,
    components: {
        Child
    },
    methods: {
        addFather() {
            this.fatherCounter++;
        }
    }
});