const CButton = {
    template: `
        <button>reply</button>
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
                <c-button></c-button>
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
            <c-button></c-button>
        </div>
    `,
    components: {
        CButton
    }
}

const vm = new Vue({
    el: '#app',
    components: {
        FormBox,
        CommentItem
    }
})