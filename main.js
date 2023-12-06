// const todoList=[{
//     name: 'wash dishes',
//     date:'02-12-2023'
// },{
//     name: 'run',
//     date:'02-12-2023'
// }];
const todoList = []



function renderHTML() {
    let contentHTMLs = "";
    todoList.forEach(function (todoObject, index) {
        const html = `
        <div class='one-work'>
            <div>${todoObject.name}</div>
            <div>${todoObject.date}</div>
            <button class="btn-delete bg-red js-btn-delete">Delete</button>
        </div>
        `;
        contentHTMLs += html;
    })
    console.log(contentHTMLs);
    const listTodo = document.querySelector('.list-to-do');
    listTodo.innerHTML = contentHTMLs;
    document.querySelectorAll('.js-btn-delete').forEach((deleteObject, index) => {
        console.log(deleteObject)
        deleteObject.addEventListener('click', () => {
            deleteWork(index);
        })
    })
}
function deleteWork(i) {
    todoList.splice(i, 1);
    renderHTML()
}
document.querySelector('.js-btn-add').addEventListener('click', () => {
    addToDoList()
})



function addToDoList() {
    const inputValue = document.querySelector('.input_work');
    const inputDate = document.querySelector('.input_date');
    const name = inputValue.value;
    const temp = inputDate.value;
    // console.log(name)
    if (!name || !temp) {
        alert("vui long nhap thong tin day du")
        return
    }
    const dateConvert = temp.split("-")
    const date = `${dateConvert[2]}-${dateConvert[1]}-${dateConvert[0]}`
    todoList.push({ name, date });
    renderHTML();
    inputValue.value = '';
    inputDate.value = '';

}
