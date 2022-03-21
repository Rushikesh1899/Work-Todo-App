window.addEventListener('load',()=>{
    const form = document.querySelector("#new-todo-form");
    const input = document.querySelector("#new-todo-input");
    const list_elem = document.querySelector("#todo");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const task = input.value;

        if(!task){
            alert("Please fill out the task");
            return;
        }
        
        const task_elem= document.createElement("div");
        task_elem.classList.add("tasks");

        const task_content_elem=document.createElement("div")
        task_content_elem.classList.add("content")

        task_elem.appendChild(task_content_elem)

        const task_input_elem=document.createElement("input")
        task_input_elem.classList.add("text")
        task_input_elem.type="text"
        task_input_elem.value=task
        task_input_elem.setAttribute("readonly","readonly")

        task_content_elem.appendChild(task_input_elem)

        const task_action_elem=document.createElement("div")
        task_action_elem.classList.add("actions")

        const task_edit_elem=document.createElement("button")
        task_edit_elem.classList.add("do")
        task_edit_elem.innerHTML="Do"

        const task_delete_elem=document.createElement("button")
        task_delete_elem.classList.add("delete")
        task_delete_elem.innerHTML="X"

        task_action_elem.appendChild(task_edit_elem)
        task_action_elem.appendChild(task_delete_elem)

        task_elem.appendChild(task_action_elem)

        list_elem.appendChild(task_elem)

        input.value="";

        task_edit_elem.addEventListener('click',() =>{
            if(task_edit_elem.innerText.toLowerCase()=="do"){
                
                task_edit_elem.innerText="Doing"
                const btn= document.querySelector('.tasks');
                btn.style.backgroundColor='yellow';
    
            }
            else{
                task_edit_elem.innerText="Done"
                if(task_edit_elem.innerText.toLowerCase()=="done"){
                    const btn= document.querySelector('.tasks');
                    btn.style.backgroundColor='Lime';
                }
            }
        })
        task_delete_elem.addEventListener('click',()=>{
            if(task_edit_elem.innerText.toLocaleLowerCase()=="done"){
                list_elem.removeChild(task_elem)
            }
            else{
                alert("First you have to Done your todo's");
            }
        })
    })
})