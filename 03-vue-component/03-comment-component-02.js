const CButton = {
    template: `
        <button>
            <slot></slot>
        </button>
    `
}

const CommentItem = {
    template: `
        <li>
            <div>
                <img src="http://placehold.it/50x50" alt="">
            </div>
            <div>
                <span>jiazhi</span>
                <span>今天天气不错</span>
            </div>
            <div>
                <c-button>回复</c-button>
            </div>
        </li>
    `,
    components: {
        CButton
    }
}

const FormBox = {
    template: `
        <div class="form-box">
            <textarea name="name" rows="8" cols="80"></textarea>
            <c-button>提交</c-button>
        </div>
    `,
    components: {
        CButton
    }
}

const CommentList = {
    template: `
        <div>
            <ul class="comment-list">
                <comment-item v-for="i in 10" :key="i"></comment-item>
            </ul>
        </div>
    `,
    components: {
        CommentItem
    }
}

const CommentBox = {
    template: `
        <div id="container">
            <h1>Comments</h1>
            <hr>
            <comment-list></comment-list>
            <form-box></form-box>
        </div>
    `,
    components: {
        CommentList,
        FormBox
    }
}

const vm = new Vue({
    el: '#app',
    template: '<comment-box></comment-box>',
    components: {
        CommentBox
    }
})