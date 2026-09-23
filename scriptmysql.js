console.log("hello world");

function mysql_takequiz() {
    alert("Welcome To MySQL Quiz");
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

        if (selected.value === "SELECT") {
            score++;
        }

        console.log(score);

        h2.textContent = "2. Which clause is used to filter records in a SQL query?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="ORDER BY">ORDER BY</li>
            <li><input type="radio" name="answer" value="WHERE">WHERE</li>
            <li><input type="radio" name="answer" value="GROUP BY">GROUP BY</li>
            <li><input type="radio" name="answer" value="HAVING">HAVING</li>
        `;

        previous.hidden = false;
        next.disabled = true;
    }


    // Question 2
    if (number === 2) {

        if (selected.value === "WHERE") {
            score++;
        }

        console.log(score);

        h2.textContent = "3. Which clause is used to group rows having the same values?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="ORDER BY">ORDER BY</li>
            <li><input type="radio" name="answer" value="GROUP BY">GROUP BY</li>
            <li><input type="radio" name="answer" value="WHERE">WHERE</li>
            <li><input type="radio" name="answer" value="HAVING">HAVING</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 3) {

        if (selected.value === "GROUP BY") {
            score++;
        }

        console.log(score);

        h2.textContent = "4. Which clause is used to filter grouped records?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="WHERE">WHERE</li>
            <li><input type="radio" name="answer" value="HAVING">HAVING</li>
            <li><input type="radio" name="answer" value="GROUP BY">GROUP BY</li>
            <li><input type="radio" name="answer" value="FILTER">FILTER</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 4) {

        if (selected.value === "HAVING") {
            score++;
        }

        console.log(score);

        h2.textContent = "5. Which JOIN returns only the matching records from both tables?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="LEFT JOIN">LEFT JOIN</li>
            <li><input type="radio" name="answer" value="RIGHT JOIN">RIGHT JOIN</li>
            <li><input type="radio" name="answer" value="INNER JOIN">INNER JOIN</li>
            <li><input type="radio" name="answer" value="FULL JOIN">FULL JOIN</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 5) {

        if (selected.value === "INNER JOIN") {
            score++;
        }

        console.log(score);

        h2.textContent = "6. Which function is used to count the number of rows?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="SUM()">SUM()</li>
            <li><input type="radio" name="answer" value="COUNT()">COUNT()</li>
            <li><input type="radio" name="answer" value="TOTAL()">TOTAL()</li>
            <li><input type="radio" name="answer" value="NUMBER()">NUMBER()</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 6) {

        if (selected.value === "COUNT()") {
            score++;
        }

        console.log(score);

        h2.textContent = "7. Which key uniquely identifies each record in a table?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="Foreign Key">Foreign Key</li>
            <li><input type="radio" name="answer" value="Primary Key">Primary Key</li>
            <li><input type="radio" name="answer" value="Candidate Key">Candidate Key</li>
            <li><input type="radio" name="answer" value="Composite Key">Composite Key</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 7) {

        if (selected.value === "Primary Key") {
            score++;
        }

        console.log(score);

        h2.textContent = "8. Which constraint prevents NULL values in a column?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="UNIQUE">UNIQUE</li>
            <li><input type="radio" name="answer" value="DEFAULT">DEFAULT</li>
            <li><input type="radio" name="answer" value="NOT NULL">NOT NULL</li>
            <li><input type="radio" name="answer" value="CHECK">CHECK</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 8) {

        if (selected.value === "NOT NULL") {
            score++;
        }

        console.log(score);

        h2.textContent = "9. Which keyword is used to remove duplicate rows from a SELECT result?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="UNIQUE">UNIQUE</li>
            <li><input type="radio" name="answer" value="DISTINCT">DISTINCT</li>
            <li><input type="radio" name="answer" value="REMOVE">REMOVE</li>
            <li><input type="radio" name="answer" value="FILTER">FILTER</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 9) {

        if (selected.value === "DISTINCT") {
            score++;
        }

        console.log(score);

        h2.textContent = "10. Which function returns the highest value from a column?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="MAX()">MAX()</li>
            <li><input type="radio" name="answer" value="HIGH()">HIGH()</li>
            <li><input type="radio" name="answer" value="TOP()">TOP()</li>
            <li><input type="radio" name="answer" value="UPPER()">UPPER()</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }


    // Question 10 - Submit
    if (number === 10) {

        if (selected.value === "MAX()") {
            score++;
        }

        console.log(score);

        h2.textContent = "Congratulations!!You Completed the SQL Quiz🎉";

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

        h2.textContent = "Which command is used to retrieve data from a table?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="SELECT">SELECT</li>
            <li><input type="radio" name="answer" value="GET">GET</li>
            <li><input type="radio" name="answer" value="FETCH">FETCH</li>
            <li><input type="radio" name="answer" value="RETRIEVE">RETRIEVE</li>
        `;

        previous.hidden = true;
        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 2
    if (number === 1) {

        h2.textContent = "2. Which clause is used to filter records in a SQL query?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="ORDER BY">ORDER BY</li>
            <li><input type="radio" name="answer" value="WHERE">WHERE</li>
            <li><input type="radio" name="answer" value="GROUP BY">GROUP BY</li>
            <li><input type="radio" name="answer" value="HAVING">HAVING</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 2) {

        h2.textContent = "3. Which clause is used to group rows having the same values?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="ORDER BY">ORDER BY</li>
            <li><input type="radio" name="answer" value="GROUP BY">GROUP BY</li>
            <li><input type="radio" name="answer" value="WHERE">WHERE</li>
            <li><input type="radio" name="answer" value="HAVING">HAVING</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 3) {

        h2.textContent = "4. Which clause is used to filter grouped records?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="WHERE">WHERE</li>
            <li><input type="radio" name="answer" value="HAVING">HAVING</li>
            <li><input type="radio" name="answer" value="GROUP BY">GROUP BY</li>
            <li><input type="radio" name="answer" value="FILTER">FILTER</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 4) {

        h2.textContent = "5. Which JOIN returns only the matching records from both tables?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="LEFT JOIN">LEFT JOIN</li>
            <li><input type="radio" name="answer" value="RIGHT JOIN">RIGHT JOIN</li>
            <li><input type="radio" name="answer" value="INNER JOIN">INNER JOIN</li>
            <li><input type="radio" name="answer" value="FULL JOIN">FULL JOIN</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 5) {

        h2.textContent = "6. Which function is used to count the number of rows?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="SUM()">SUM()</li>
            <li><input type="radio" name="answer" value="COUNT()">COUNT()</li>
            <li><input type="radio" name="answer" value="TOTAL()">TOTAL()</li>
            <li><input type="radio" name="answer" value="NUMBER()">NUMBER()</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 6) {

        h2.textContent = "7. Which key uniquely identifies each record in a table?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="Foreign Key">Foreign Key</li>
            <li><input type="radio" name="answer" value="Primary Key">Primary Key</li>
            <li><input type="radio" name="answer" value="Candidate Key">Candidate Key</li>
            <li><input type="radio" name="answer" value="Composite Key">Composite Key</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 7) {

        h2.textContent = "8. Which constraint prevents NULL values in a column?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="UNIQUE">UNIQUE</li>
            <li><input type="radio" name="answer" value="DEFAULT">DEFAULT</li>
            <li><input type="radio" name="answer" value="NOT NULL">NOT NULL</li>
            <li><input type="radio" name="answer" value="CHECK">CHECK</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 8) {

        h2.textContent = "9. Which keyword is used to remove duplicate rows from a SELECT result?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="UNIQUE">UNIQUE</li>
            <li><input type="radio" name="answer" value="DISTINCT">DISTINCT</li>
            <li><input type="radio" name="answer" value="REMOVE">REMOVE</li>
            <li><input type="radio" name="answer" value="FILTER">FILTER</li>
        `;

        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 10
    if (number === 9) {

        h2.textContent = "10. Which function returns the highest value from a column?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="MAX()">MAX()</li>
            <li><input type="radio" name="answer" value="HIGH()">HIGH()</li>
            <li><input type="radio" name="answer" value="TOP()">TOP()</li>
            <li><input type="radio" name="answer" value="UPPER()">UPPER()</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }

});