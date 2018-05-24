$(function () {

    $('#input').on('keyup', function (e) {
        if (e.keyCode == 13) {
            render($(this).val())
            $(this).val('')
        }
    })

    $('#container').delegate('span', 'click', function () {
        // 虽然是在 container 元素之上进行的事件代理， 但是 this 指向的是 其 子标签 span。
        $(this).parent().remove()
    })

})

function render(value) {
    $('#container ol').append('<li>' + value + ' <span style="cursor: pointer;">X</span></li>')
}