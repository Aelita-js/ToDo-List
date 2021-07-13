let btn = $('.btn');
let inp = $('.task-input');
let list = $('.task-list');

btn.on('click', function() {
    if (!inp.val()) {
        alert('Введите данные')
        return
    }
    let obj = {
        task: inp.val()
    }
    setItemToStorage(obj)
    render()
    inp.val('')
});

function setItemToStorage(task) {
    if (!localStorage.getItem('tasks-data')) {
        localStorage.setItem('tasks-data', '[]')
    }
    let data = JSON.parse(localStorage.getItem('tasks-data'));

    data.push(task)
    localStorage.setItem('tasks-data', JSON.stringify(data));
    // localStorage.getItem()
};

function render() {
    if (!localStorage.getItem('tasks-data')) {
        localStorage.setItem('tasks-data', '[]')
    }
    let newData = JSON.parse(localStorage.getItem('tasks-data'));
    // console.log(newData);
    list.html('')
    newData.forEach(item => {
        list.append(`<li>${item.task}<button class="btn-delete">Delete</button></li>`)
    });
}

$('body').on('click', '.btn-delete', function() {
    // console.log($(this).parent().index());
    let data = JSON.parse(localStorage.getItem('tasks-data'));
    // console.log(data);
    let index = $(this).parent().index()
    data.splice(index, 1)
    localStorage.setItem('tasks-data', JSON.stringify(data))
    render()
        // console.log(index);
})

render()