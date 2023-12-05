// const todoList=[{
//     name: 'wash dishes',
//     date:'02-12-2023'
// },{
//     name: 'run',
//     date:'02-12-2023'
// }];
const todoList =[]



function renderHTML(){
    let contentHTMLs="";
    for(let i = 0;i<todoList.length;i++){
        const html = `
        <div class='one-work'>
            <div>${todoList[i].name}</div>
            <div>${todoList[i].date}</div>
            <button onClick="deleteWork(${i})" class="btn-delete bg-red">Delete</button>
        </div>
        `;
        contentHTMLs += html;
    }
    console.log(contentHTMLs);
    const listTodo = document.querySelector('.list-to-do');
    listTodo.innerHTML = contentHTMLs;

}
function deleteWork(i){
    todoList.splice(i,1);
    renderHTML()
}

function addToDoList(){
    const inputValue = document.querySelector('.input_work');
    const inputDate = document.querySelector('.input_date');
    const name = inputValue.value;
    const date = inputDate.value;
    todoList.push({name,date});
    renderHTML();
    inputValue.value = '';
    inputDate.value='';
   
}