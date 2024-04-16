const buttonAdd = document.getElementById('addBtn');
const inpValue = document.getElementById('inpValue');
const listJS = document.getElementById('listJS');

buttonAdd.addEventListener('click',(e)=>{
    if (inpValue.value == "") {
        alert('Inputa deyer verin ')
    }else{
        listJS.innerHTML+=`
        <div class="card">
            <input type="checkbox"data-action="check" name="" id="" />
            <p>${inpValue.value}</p>
            <button data-action="delete" class="btn_card"><i class="fa-regular fa-trash-can"></i></button>
        </div>
        `
        inpValue.value = ''
    }
})


listJS.addEventListener('click',(e) =>{
    if(e.target.dataset.action === "delete"){
        e.target.parentElement.style.display = "none"
    }
})

listJS.addEventListener('click', (e) =>{
    if(e.target.dataset.action === "check"){
        e.target.nextElementSibling.classList.toggle('pActiv')
    }
})