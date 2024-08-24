let form = document.getElementById('addForm'),
    listItems = document.getElementById('items'),
    filter = document.getElementById('filter');

form.addEventListener('submit', addNewItems);
listItems.addEventListener('click', removeItems);
filter.addEventListener('keyup', filterItems);


function addNewItems(e){
    e.preventDefault();
    

    let newItem = document.getElementById('item');

    if(newItem.value.trim() != ''){
        let newli = document.createElement('li');
        newli.className = 'list-group-item';
        newli.appendChild(document.createTextNode(newItem.value));

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete';
        deleteBtn.style.float = 'right';
        deleteBtn.appendChild(document.createTextNode('X'));

        newli.appendChild(deleteBtn);

        listItems.appendChild(newli);
        newItem.value = '';
        saveData();
    }else{
        alert('Please Input Something');
    }
    

}
function removeItems(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        if(confirm('Are you sure you want to delete?')){
            listItems.removeChild(li);
            saveData();
        }
    }
}
function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = listItems.getElementsByTagName('li');
    Array.from(items).forEach(item => {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}

function saveData(){
    localStorage.setItem("data", listItems.innerHTML);
}
function showTask(){
    listItems.innerHTML = localStorage.getItem("data");
}
showTask();





// console.dir(document)
// console.log(document.URL)
// console.log(document.title)
// document.title = "Page Title";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[18].textContent = 'Hello 1';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// var btn = document.getElementById('button');
// btn.addEventListener('click', clickButton);

// function clickButton(e){
    // console.log(e);
    // console.log(e.target);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// var box = document.getElementById('box');
// var output = document.getElementById('output');

// var itemInput = document.querySelector('input[type=text]');
// var form  = document.querySelector('form');

// var select = document.querySelector('select');

// btn.addEventListener('click', runEvent);
// btn.addEventListener('dblclick', runEvent);

// btn.addEventListener('mousedown', runEvent);
// btn.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent)

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)
// itemInput.addEventListener('copy', runEvent)

// itemInput.addEventListener('input', runEvent)
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent)

// function runEvent(e){
//     e.preventDefault()
//     console.log('EVENT TYPE: '+e.type);
    // console.log(e.target.value);
    // document.body.style.display = 'none';
    // output.innerHTML = "<h3>"+e.target.value+"</h3>";
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
    // box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
    // document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
// }