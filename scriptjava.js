console.log("hello world");

function java_takequiz() {
    alert("Welcome To Java Quiz");
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

        if (selected.value === ".java") {
            score++;
        }

        console.log(score);

        h2.textContent = "2. Which keyword is used to create a class in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="struct">struct</li>
            <li><input type="radio" name="answer" value="define">define</li>
            <li><input type="radio" name="answer" value="object">object</li>
        `;

        previous.hidden = false;
        next.disabled = true;
    }


    // Question 2
    if (number === 2) {

        if (selected.value === "class") {
            score++;
        }

        console.log(score);

        h2.textContent = "3. Which method is the entry point of a Java program?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="start()">start()</li>
            <li><input type="radio" name="answer" value="main()">main()</li>
            <li><input type="radio" name="answer" value="run()">run()</li>
            <li><input type="radio" name="answer" value="execute()">execute()</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 3) {

        if (selected.value === "main()") {
            score++;
        }

        console.log(score);

        h2.textContent = "4. Which keyword is used to inherit a class in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="implements">implements</li>
            <li><input type="radio" name="answer" value="extends">extends</li>
            <li><input type="radio" name="answer" value="inherits">inherits</li>
            <li><input type="radio" name="answer" value="super">super</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 4) {

        if (selected.value === "extends") {
            score++;
        }

        console.log(score);

        h2.textContent = "5. Which data type is used to store whole numbers in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="float">float</li>
            <li><input type="radio" name="answer" value="char">char</li>
            <li><input type="radio" name="answer" value="int">int</li>
            <li><input type="radio" name="answer" value="boolean">boolean</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 5) {

        if (selected.value === "int") {
            score++;
        }

        console.log(score);

        h2.textContent = "6. Which keyword is used to create an object in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="create">create</li>
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="new">new</li>
            <li><input type="radio" name="answer" value="this">this</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 6) {

        if (selected.value === "new") {
            score++;
        }

        console.log(score);

        h2.textContent = "7. Which symbol is used to end a statement in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value=".">.</li>
            <li><input type="radio" name="answer" value=";">;</li>
            <li><input type="radio" name="answer" value=":">:</li>
            <li><input type="radio" name="answer" value=",">,</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 7) {

        if (selected.value === ";") {
            score++;
        }

        console.log(score);

        h2.textContent = "8. Which keyword is used to define a constant in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="const">const</li>
            <li><input type="radio" name="answer" value="static">static</li>
            <li><input type="radio" name="answer" value="final">final</li>
            <li><input type="radio" name="answer" value="constant">constant</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 8) {

        if (selected.value === "final") {
            score++;
        }

        console.log(score);

        h2.textContent = "9. Which method is used to print output in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="print()">print()</li>
            <li><input type="radio" name="answer" value="System.out.println()">System.out.println()</li>
            <li><input type="radio" name="answer" value="console.log()">console.log()</li>
            <li><input type="radio" name="answer" value="display()">display()</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 9) {

        if (selected.value === "System.out.println()") {
            score++;
        }

        console.log(score);

        h2.textContent = "10. Which concept allows the same method name with different parameters?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="method-overriding">Method Overriding</li>
            <li><input type="radio" name="answer" value="method-overloading">Method Overloading</li>
            <li><input type="radio" name="answer" value="inheritance">Inheritance</li>
            <li><input type="radio" name="answer" value="encapsulation">Encapsulation</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }


    // Question 10 - Submit
    if (number === 10) {

        if (selected.value === "method-overloading") {
            score++;
        }

        console.log(score);

        h2.textContent = "Congratulations!!!You Completed the Java Quiz 🎉";

        options.hidden = true;
        next.hidden = true;
        previous.hidden = true;

        result.textContent = "Your Score is " + score + " / 10";
    }

});


// ================= PREVIOUS BUTTON =================

previous.addEventListener("click", function () {

    number--;

    if (score > 0) {
        score--;
    }

    console.log("Score:", score);
    console.log("Question:", number);


    // Question 1
    if (number === 0) {

        h2.textContent = "What is the file extension for a Java file?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value=".js">.js</li>
            <li><input type="radio" name="answer" value=".java">.java</li>
            <li><input type="radio" name="answer" value=".class">.class</li>
            <li><input type="radio" name="answer" value=".jav">.jav</li>
        `;

        previous.hidden = true;
        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 2
    if (number === 1) {

        h2.textContent = "2. Which keyword is used to create a class in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="class">class</li>
            <li><input type="radio" name="answer" value="struct">struct</li>
            <li><input type="radio" name="answer" value="define">define</li>
            <li><input type="radio" name="answer" value="object">object</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 2) {

        h2.textContent = "3. Which method is the entry point of a Java program?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="start()">start()</li>
            <li><input type="radio" name="answer" value="main()">main()</li>
            <li><input type="radio" name="answer" value="run()">run()</li>
            <li><input type="radio" name="answer" value="execute()">execute()</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 3) {

        h2.textContent = "4. Which keyword is used to inherit a class in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="implements">implements</li>
            <li><input type="radio" name="answer" value="extends">extends</li>
            <li><input type="radio" name="answer" value="inherits">inherits</li>
            <li><input type="radio" name="answer" value="super">super</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 4) {

        h2.textContent = "5. Which data type is used to store whole numbers in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="float">float</li>
            <li><input type="radio" name="answer" value="char">char</li>
            <li><input type="radio" name="answer" value="int">int</li>
            <li><input type="radio" name="answer" value="boolean">boolean</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 5) {

        h2.textContent = "6. Which keyword is used to create an object in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="create">create</li>
            <li><input type="radio" name="answer" value="object">object</li>
            <li><input type="radio" name="answer" value="new">new</li>
            <li><input type="radio" name="answer" value="this">this</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 6) {

        h2.textContent = "7. Which symbol is used to end a statement in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value=".">.</li>
            <li><input type="radio" name="answer" value=";">;</li>
            <li><input type="radio" name="answer" value=":">:</li>
            <li><input type="radio" name="answer" value=",">,</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 7) {

        h2.textContent = "8. Which keyword is used to define a constant in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="const">const</li>
            <li><input type="radio" name="answer" value="static">static</li>
            <li><input type="radio" name="answer" value="final">final</li>
            <li><input type="radio" name="answer" value="constant">constant</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 8) {

        h2.textContent = "9. Which method is used to print output in Java?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="print()">print()</li>
            <li><input type="radio" name="answer" value="System.out.println()">System.out.println()</li>
            <li><input type="radio" name="answer" value="console.log()">console.log()</li>
            <li><input type="radio" name="answer" value="display()">display()</li>
        `;

        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 10
    if (number === 9) {

        h2.textContent = "10. Which concept allows the same method name with different parameters?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="method-overriding">Method Overriding</li>
            <li><input type="radio" name="answer" value="method-overloading">Method Overloading</li>
            <li><input type="radio" name="answer" value="inheritance">Inheritance</li>
            <li><input type="radio" name="answer" value="encapsulation">Encapsulation</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }

});