const input = document.getElementById('input');
const todo = document.getElementById('todo');
const completed = document.getElementById('completed');
const button = document.getElementById('button');

input.addEventListener("keyup", e => {
    if (e.keyCode === 13) button.click();
});

button.addEventListener('click',() => {
    
    if (input.value){
        //console.log(input.value);
        
    //Create Element
    const inputValueWrapper = document.createElement('span');
    const inputValue = document.createTextNode(input.value);
    const todoItem = document.createElement('li');
    const itemButtons = document.createElement('div');
    const doneButton = document.createElement('buttun');
    const doneIcon = document.createElement('i');
    const editButton = document.createElement('buttun');
    const editIcon = document.createElement('i');
    const deleteButton = document.createElement('buttun');
    const deleteIcon = document.createElement('i');
    
    //Add classes
    inputValueWrapper.classList.add('column', 'xlarge-9', 'small-9');
    itemButtons.classList.add('buttuns','column', 'xlarge-3', 'small-3');
    todoItem.classList.add("todo-item");
    doneButton.classList.add('done');
    doneIcon.classList.add('fa', 'fa-check-square');
    editButton.classList.add('edit');
    editIcon.classList.add('fa', 'fa-edit');
    deleteButton.classList.add('delete');
    deleteIcon.classList.add('fa', 'fa-trash');

    editButton.appendChild(editIcon);
    doneButton.appendChild(doneIcon);
    deleteButton.appendChild(deleteIcon);

    itemButtons.appendChild(editButton);
    itemButtons.appendChild(doneButton);
    itemButtons.appendChild(deleteButton);

    inputValueWrapper.appendChild(inputValue);

    todoItem.appendChild(inputValueWrapper);
    todoItem.appendChild(itemButtons)

    todo.append(todoItem);

    input.value = '';

    editButton.addEventListener('click', () => {
        const item = todoItem;
        const editInput = document.createElement('input');
        const changeButtun = document.createElement('button');
        editInput.id = 'input';
        editInput.classList.add('column', 'xlarge-9', 'small-9');
        editInput.value = item.childNodes[0].textContent;

       /* changeButtun.id='button';*/
        changeButtun.classList.add('button', 'btn', 'btn-rounded',  'gradient-black');
        changeButtun.innerHTML='Ok';

        itemButtons.appendChild(changeButtun);
        item.appendChild(editInput);

        //inputValueWrapper.remove();
        //editButton.remove();
        inputValueWrapper.style.display='none';
        editButton.style.display='none';
        item.prepend(editInput);
        item.style.paddingBottom='75px';
        editInput.focus();
        
        //function to save changes 
        const saveChnges = () => {
            if (editInput.value){
                inputValueWrapper.textContent = editInput.value;
                inputValueWrapper.removeAttribute('style');
                editButton.removeAttribute('style');
                item.removeChild(editInput);
                changeButtun.remove();
            }
        }
        changeButtun.addEventListener('click',saveChnges);
        editInput.addEventListener("keyup", (e) => {
            if (e.keyCode === 13)
            saveChnges();
        });
    })

    deleteButton.addEventListener('click', () => {
        const item = todoItem;
        const parent = item.parentNode;
        console.log(item);
        parent.removeChild(item);
    });

    doneButton.addEventListener('click', () =>{
        const item = todoItem;
        const parent = document.getElementById('Completed');
        doneButton.style.color='#2ecc71';
        parent.appendChild(item);
        // doneButton.addEventListener('click', () =>{
        //     todo.appendChild(item);
        //     doneButton.removeAttribute('style');
        // })
    });  
 }
})