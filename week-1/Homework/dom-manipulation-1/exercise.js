
/*Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6*/
    console.log(document.querySelectorAll("p"))
let pArray = Array.from(document.querySelectorAll("p"));
pArray.forEach((i) => {
    console.log(i)
        //    todoList.appendChild(generateTodoDOM(todo))
    })


   /* 2. the first div element node
    --> should log the ".site-header" node*/
    /*let divArray = Array.from(document.querySelectorAll("div"));
    const first = divList [0];
console.log(first);  HECHO CON LIZY Y LUIS*/ 

let divArray = Array.from(document.querySelectorAll("div"));
console.log(divArray[0])



    /*3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/
    console.log(document.querySelector("#jumbotron-text"));


   /* 4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3 */
    let prim_cont = document.querySelector(".primary-content");
// let p_in_prim = prim_cont.querySelectorAll("p");
// console.log(p_in_prim);

console.log(document.querySelector(".primary-content").querySelectorAll("p"));




    

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

