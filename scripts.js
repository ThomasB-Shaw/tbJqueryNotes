console.log('Hello there');
let favFoods = ['Steak','Sushi','Ramen','Salt and Vinegar Chips']
let employees = []

// event #2
$(document).ready(onReady);

function onReady() {
    console.log('Hello from JQuery');

    // Event listener // Third Event
    $('#clickMe').on('click', buttonClicked);

    //decendant selector
    $('#favoriteFoods').on('click', '.deleteBtn' , deleteFunc);
    $('#favoriteFoods').on('click', '.changeColor' , colorChange);
    $('#submitForm').on('click', submitFormFunc); //event listener


    // using a forLoop to append an Array
    // let ulFoods = $('#favoriteFoods')
//     for (let i = 0; i < favFoods.length; i++) {
//         ulFoods.append(`<li> One of my favorite foods is: ${favFoods[i]}! <button class = "deleteBtn">DELETE</button> </li>`);
//         }
// $('.deleteBtn').on('click', deleteFunc);

        //Hard coding Example
    // ulFoods.append('<li>' + favFoods[0] + '</li>');
    // ulFoods.append('<li>' + favFoods[1] + '</li>');
    // ulFoods.append('<li>' + favFoods[2] + '</li>');
    // ulFoods.append('<li>' + favFoods[3] + '</li>');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function submitFormFunc() {
    
    // let name =  $('#name').val(); // .val(); is refered to as an getter  // setter .val('something');  // .text() is similar to the past to values
    // let title = $('#title').val();

    let employee = {
        name: $('#name').val(),
        title: $('#title').val()
    }
    employees.push(employee);
    console.log('Submited:', employee);

    $('#name').val('');
    $('#title').val('');
}

// Grab input values and push it to an 


function deleteFunc(){
    console.log('delete')
    $(this).parent().remove();
}
//^^ 
//this = the specific delete btn that was clicked
//.parent() = the <li>
// .remove() removes that element

function colorChange() {
    console.log('Hello colorChange');
    $(this).parent().toggleClass('aquamarineColor');
} // End of colorChange, changes text color of LI items
// Does this by creating a class to link to an existing CSS classsheet


// event #1
onReady();



function buttonClicked() {
    let ulFoods = $('#favoriteFoods')
    for (let i = 0; i < favFoods.length; i++) {
        ulFoods.append(`<li> One of my favorite foods is: ${favFoods[i]}! 
        <button class = "deleteBtn">DELETE</button>
        <button class = "changeColor">Change Color</button>  
        </li>`);
        }
} // End of buttonClicked Function, caused list items to appear on the DOM, along iwth a delete button

function helloThere() {
    console.log('Hello There!')
}

function callBack() {
    console.log('General Kenobi!');
}



helloThere();
callBack();

