// console.log("hello world");
// function python_takequiz() {
//     alert("Welcome To Python Quiz")

// }
// let number = 0;
// let score = 0;

// const next = document.getElementById("next");
// const options = document.getElementById("options");
// const h2 = document.getElementById("h2");
// const previous = document.getElementById("previous");
// const complete=document.getElementById("complete");
// const result=document.getElementById("result");
// options.addEventListener("change", function () {
//     next.disabled = false;
// })

// next.addEventListener("click", function () {
//     number++;
//     let selected = document.querySelector('input[name="answer"]:checked');

//     if (number === 1) {
//         if (selected.value === ".py") {
//             score++;
//         }
//         console.log(score);
//         h2.textContent = "2. Which Data Type is immutable ?";
//         options.innerHTML = `

//         <li><input type="radio" name="answer" value="int">int</li>
//         <li><input type="radio" name="answer" value="string">string</li>
//         <li><input type="radio" name="answer" value="list">list</li>
//         <li><input type="radio" name="answer" value="dict">dict</li>
    
        
//         `

//         previous.hidden = false;
//     next.disabled = true;






//     }
//     if (number === 2) {
//         if (selected.value === "string") {
//             score++;
//         }
//         console.log(score);


//         h2.textContent = "3. Is Tuple Mutable or Immutable ?";
//         options.innerHTML = `

//          <li><input type="radio" name="answer" value="mutable">mutable</li>
//         <li><input type="radio" name="answer" value="immutable">immutable</li>
//         `
//         next.disabled = true;



//     }

//     if (number === 3) {
//         if (selected.value === "immutable") {
//             score++;
//         }
//         console.log(score);


//         h2.textContent = "4. Which keyword is used to define a function in Python?";
//         options.innerHTML = `

//         <li><input type="radio" name="answer" value="function">function</li>
// <li><input type="radio" name="answer" value="def">def</li>
// <li><input type="radio" name="answer" value="fun">fun</li>
// <li><input type="radio" name="answer" value="define">define</li>
//         `
//         next.disabled = true;
//     }
    
//     if (number === 4) {
//         if (selected.value === "def") {
//             score++;
//         }
//         console.log(score);


//         h2.textContent = "5. What is the output of 10 // 3?";
//         options.innerHTML = `

//         <li><input type="radio" name="answer" value="3">3</li>
// <li><input type="radio" name="answer" value="3.33">3.33</li>
// <li><input type="radio" name="answer" value="4">4</li>
// <li><input type="radio" name="answer" value="1">1</li>
//         `
//         next.disabled = true;
//     }


//     if (number === 5) {
//         if (selected.value === "3") {
//             score++;
//         }
//         console.log(score);


//         h2.textContent = "6. Which keyword is used to create a class in Python?";
//         options.innerHTML = `

//         <li><input type="radio" name="answer" value="object">object</li>
// <li><input type="radio" name="answer" value="class">class</li>
// <li><input type="radio" name="answer" value="def">def</li>
// <li><input type="radio" name="answer" value="create">create</li>
//         `
//         next.disabled = true;
//     }


//      if (number === 6) {
//     if (selected.value === "class") {
//         score++;
//     }
//     console.log(score);

//     h2.textContent = "7. Which operator is used for exponentiation in Python?";
//     options.innerHTML = `

//     <li><input type="radio" name="answer" value="+">+</li>
//     <li><input type="radio" name="answer" value="*">*</li>
//     <li><input type="radio" name="answer" value="**">**</li>
//     <li><input type="radio" name="answer" value="//">//</li>

//     `;
//     next.disabled = true;
// }

// if (number === 7) {
//     if (selected.value === "**") {
//         score++;
//     }
//     console.log(score);

//     h2.textContent = "8. What is the output of x = 5; x += 2; print(x)?";
//     options.innerHTML = `

//     <li><input type="radio" name="answer" value="5">5</li>
//     <li><input type="radio" name="answer" value="7">7</li>
//     <li><input type="radio" name="answer" value="2">2</li>
//     <li><input type="radio" name="answer" value="10">10</li>

//     `;
//     next.disabled = true;
// }

// if (number === 8) {
//     if (selected.value === "7") {
//         score++;
//     }
//     console.log(score);

//     h2.textContent = "9. Which function is used to find the data type of a variable?";
//     options.innerHTML = `

//     <li><input type="radio" name="answer" value="datatype()">datatype()</li>
//     <li><input type="radio" name="answer" value="typeof()">typeof()</li>
//     <li><input type="radio" name="answer" value="type()">type()</li>
//     <li><input type="radio" name="answer" value="checktype()">checktype()</li>

//     `;
//     next.disabled = true;
// }

// if (number === 9) {
//     if (selected.value === "type()") {
//         score++;
//     }
//     console.log(score);
// next.textContent = "completed"



//     h2.textContent = "10. Which keyword is used to create a class in Python?";
//     options.innerHTML = `

//     <li><input type="radio" name="answer" value="object">object</li>
//     <li><input type="radio" name="answer" value="class">class</li>
//     <li><input type="radio" name="answer" value="def">def</li>
//     <li><input type="radio" name="answer" value="create">create</li>

//     `;

// }

// if (number===10){
//     if (selected.value === "class"){
//         score++
//     }
//     h2.textContent = "Congratulations!!!You Completed the Quiz";
//     next.hidden=true;
//     options.hidden=true;
//     previous.hidden=true;
//     result.textContent="Your Score is "+ score
    
// }



// })



console.log("hello world");

function python_takequiz() {
    alert("Welcome To Python Quiz");
}

let number = 0;
let score = 0;

const next = document.getElementById("next");
const options = document.getElementById("options");
const h2 = document.getElementById("h2");
const previous = document.getElementById("previous");
const result = document.getElementById("result");


// Enable Next when an option is selected
options.addEventListener("change", function () {
    next.disabled = false;
});


// ================= NEXT BUTTON =================

next.addEventListener("click", function () {

    number++;

    let selected = document.querySelector('input[name="answer"]:checked');


    // Question 1
    if (number === 1) {

        if (selected.value === ".py") {
            score++;
        }

        console.log(score);

        h2.textContent = "2. Which Data Type is immutable ?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="int">int</li>
            <li><input type="radio" name="answer" value="string">string</li>
            <li><input type="radio" name="answer" value="list">list</li>
            <li><input type="radio" name="answer" value="dict">dict</li>
        `;

        previous.hidden = false;
        next.disabled = true;
    }


    // Question 2
    if (number === 2) {

        if (selected.value === "string") {
            score++;
        }

        console.log(score);

        h2.textContent = "3. Is Tuple Mutable or Immutable ?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="mutable">mutable</li>
            <li><input type="radio" name="answer" value="immutable">immutable</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 3) {

        if (selected.value === "immutable") {
            score++;
        }

        console.log(score);

        h2.textContent = "4. Which keyword is used to define a function in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="function">function</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="fun">fun</li>
            <li><input type="radio" name="answer" value="define">define</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 4) {

        if (selected.value === "def") {
            score++;
        }

        console.log(score);

        h2.textContent = "5. What is the output of 10 // 3?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="3">3</li>
            <li><input type="radio" name="answer" value="3.33">3.33</li>
            <li><input type="radio" name="answer" value="4">4</li>
            <li><input type="radio" name="answer" value="1">1</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 5) {

        if (selected.value === "3") {
            score++;
        }

        console.log(score);

        h2.textContent = "6. Which keyword is used to create a class in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="create">create</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 6) {

        if (selected.value === "class") {
            score++;
        }

        console.log(score);

        h2.textContent = "7. Which operator is used for exponentiation in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="+">+</li>
            <li><input type="radio" name="answer" value="*">*</li>
            <li><input type="radio" name="answer" value="**">**</li>
            <li><input type="radio" name="answer" value="//">//</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 7) {

        if (selected.value === "**") {
            score++;
        }

        console.log(score);

        h2.textContent = "8. What is the output of x = 5; x += 2; print(x)?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="5">5</li>
            <li><input type="radio" name="answer" value="7">7</li>
            <li><input type="radio" name="answer" value="2">2</li>
            <li><input type="radio" name="answer" value="10">10</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 8) {

        if (selected.value === "7") {
            score++;
        }

        console.log(score);

        h2.textContent = "9. Which function is used to find the data type of a variable?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="datatype()">datatype()</li>
            <li><input type="radio" name="answer" value="typeof()">typeof()</li>
            <li><input type="radio" name="answer" value="type()">type()</li>
            <li><input type="radio" name="answer" value="checktype()">checktype()</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 9) {

        if (selected.value === "type()") {
            score++;
        }

        console.log(score);

        h2.textContent = "10. Which keyword is used to create a class in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="create">create</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }


    // Question 10 - Submit
    if (number === 10) {

        if (selected.value === "class") {
            score++;
        }

        console.log(score);

        h2.textContent = "Congratulations!!! You Completed the Quiz 🎉";

        options.hidden = true;
        next.hidden = true;
        previous.hidden = true;

        result.textContent = "Your Score is " + score + " / 10";
    }

});


// ================= PREVIOUS BUTTON =================

previous.addEventListener("click", function () {

    number--;

    // Remove the score of the question we are going back from
    if (score > 0) {
        score--;
    }

    console.log("Score:", score);
    console.log("Question:", number);


    // Question 1
    if (number === 0) {

        h2.textContent = "What is File Extension for Python File ?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value=".js">.js</li>
            <li><input type="radio" name="answer" value=".python">.python</li>
            <li><input type="radio" name="answer" value=".jsx">.jsx</li>
            <li><input type="radio" name="answer" value=".py">.py</li>
        `;

        previous.hidden = true;
        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 2
    if (number === 1) {

        h2.textContent = "2. Which Data Type is immutable ?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="int">int</li>
            <li><input type="radio" name="answer" value="string">string</li>
            <li><input type="radio" name="answer" value="list">list</li>
            <li><input type="radio" name="answer" value="dict">dict</li>
        `;

        previous.hidden = false;
        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 3
    if (number === 2) {

        h2.textContent = "3. Is Tuple Mutable or Immutable ?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="mutable">mutable</li>
            <li><input type="radio" name="answer" value="immutable">immutable</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 3) {

        h2.textContent = "4. Which keyword is used to define a function in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="function">function</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="fun">fun</li>
            <li><input type="radio" name="answer" value="define">define</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 4) {

        h2.textContent = "5. What is the output of 10 // 3?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="3">3</li>
            <li><input type="radio" name="answer" value="3.33">3.33</li>
            <li><input type="radio" name="answer" value="4">4</li>
            <li><input type="radio" name="answer" value="1">1</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 5) {

        h2.textContent = "6. Which keyword is used to create a class in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="create">create</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 6) {

        h2.textContent = "7. Which operator is used for exponentiation in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="+">+</li>
            <li><input type="radio" name="answer" value="*">*</li>
            <li><input type="radio" name="answer" value="**">**</li>
            <li><input type="radio" name="answer" value="//">//</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 7) {

        h2.textContent = "8. What is the output of x = 5; x += 2; print(x)?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="5">5</li>
            <li><input type="radio" name="answer" value="7">7</li>
            <li><input type="radio" name="answer" value="2">2</li>
            <li><input type="radio" name="answer" value="10">10</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 8) {

        h2.textContent = "9. Which function is used to find the data type of a variable?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="datatype()">datatype()</li>
            <li><input type="radio" name="answer" value="typeof()">typeof()</li>
            <li><input type="radio" name="answer" value="type()">type()</li>
            <li><input type="radio" name="answer" value="checktype()">checktype()</li>
        `;

        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 10
    if (number === 9) {

        h2.textContent = "10. Which keyword is used to create a class in Python?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="def">def</li>
            <li><input type="radio" name="answer" value="create">create</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }

});