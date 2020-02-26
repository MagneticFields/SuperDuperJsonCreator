

const form = document.getElementById('entry');
const textInputMain = document.querySelector('#text-input');


const textInputKey = document.querySelectorAll('#key');
const textInputValue =document.querySelectorAll('#value');

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', onSubmit);

form.addEventListener('click', addItem);

let obj = {};

textInputKey[0].value = '';
textInputValue[0].value = '';

// Getting key value pairs in an object
function onSubmit(e){
    e.preventDefault();
    for(let i = 0; i < textInputKey.length; i++){
    obj[textInputKey[i].value] = textInputValue[i].value;
    }
    console.log(obj);
};

// Event Delegation adds or removes form input rows

function addItem(e){
    console.log(e.target.value);
    if(e.target.parentElement.classList.contains('add-item')) {
        addDiv();
    }
    else if(e.target.parentElement.classList.contains('remove-item')){
        if(e.target.parentElement.parentElement.nextElementSibling !== null){
           e.target.parentElement.parentElement.remove(); 
        } 
        
    }
}

// add a div containing form inputs, links and icons
function addDiv() {
    
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'text-input');
    newDiv.innerHTML = "<input type=\"text\" name=\"key\" id=\"key\"/> : <input type=\"text\" name=\"value\"id=\"value\"/>, <a class=\"add-item\" href=\"#\"><i class=\"far fa-plus-square\"></i></a> <a class=\"remove-item\" href=\"#\"><i class=\"far fa-minus-square\"></i></a>";
    form.appendChild(newDiv);

};





