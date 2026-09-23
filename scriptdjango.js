console.log("hello world");

function django_takequiz() {
    alert("Welcome To Django Quiz");
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

        if (selected.value === "models.py") {
            score++;
        }

        console.log(score);

        h2.textContent = "2. Which file is mainly used to define URL patterns in Django?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="settings.py">settings.py</li>
            <li><input type="radio" name="answer" value="admin.py">admin.py</li>
        `;

        previous.hidden = false;
        next.disabled = true;
    }


    // Question 2
    if (number === 2) {

        if (selected.value === "urls.py") {
            score++;
        }

        console.log(score);

        h2.textContent = "3. Which Django function is commonly used to return an HTML template from a view?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="redirect()">redirect()</li>
            <li><input type="radio" name="answer" value="render()">render()</li>
            <li><input type="radio" name="answer" value="template()">template()</li>
            <li><input type="radio" name="answer" value="response()">response()</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 3) {

        if (selected.value === "render()") {
            score++;
        }

        console.log(score);

        h2.textContent = "4. Which command creates migration files based on model changes?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py migration">python manage.py migration</li>
            <li><input type="radio" name="answer" value="python manage.py models">python manage.py models</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 4) {

        if (selected.value === "python manage.py makemigrations") {
            score++;
        }

        console.log(score);

        h2.textContent = "5. Which command applies migrations to the database?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py database">python manage.py database</li>
            <li><input type="radio" name="answer" value="python manage.py update">python manage.py update</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 5) {

        if (selected.value === "python manage.py migrate") {
            score++;
        }

        console.log(score);

        h2.textContent = "6. Which Django component is used to interact with the database using Python objects?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="Django Template">Django Template</li>
            <li><input type="radio" name="answer" value="Django ORM">Django ORM</li>
            <li><input type="radio" name="answer" value="Django URL">Django URL</li>
            <li><input type="radio" name="answer" value="Django Middleware">Django Middleware</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 6) {

        if (selected.value === "Django ORM") {
            score++;
        }

        console.log(score);

        h2.textContent = "7. Which field is commonly used to create a one-to-many relationship between Django models?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="OneToOneField">OneToOneField</li>
            <li><input type="radio" name="answer" value="ManyToManyField">ManyToManyField</li>
            <li><input type="radio" name="answer" value="ForeignKey">ForeignKey</li>
            <li><input type="radio" name="answer" value="RelationshipField">RelationshipField</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 7) {

        if (selected.value === "ForeignKey") {
            score++;
        }

        console.log(score);

        h2.textContent = "8. Which file is used to configure Django project settings?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="settings.py">settings.py</li>
            <li><input type="radio" name="answer" value="config.py">config.py</li>
            <li><input type="radio" name="answer" value="manage.py">manage.py</li>
            <li><input type="radio" name="answer" value="setup.py">setup.py</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 8) {

        if (selected.value === "settings.py") {
            score++;
        }

        console.log(score);

        h2.textContent = "9. Which decorator can be used to restrict a Django view to logged-in users?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="@login_required">@login_required</li>
            <li><input type="radio" name="answer" value="@authenticated">@authenticated</li>
            <li><input type="radio" name="answer" value="@login">@login</li>
            <li><input type="radio" name="answer" value="@user_required">@user_required</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 9) {

        if (selected.value === "@login_required") {
            score++;
        }

        console.log(score);

        h2.textContent = "10. Which Django feature is used to protect forms from Cross-Site Request Forgery attacks?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="CSRF Token">CSRF Token</li>
            <li><input type="radio" name="answer" value="Session Token">Session Token</li>
            <li><input type="radio" name="answer" value="JWT Token">JWT Token</li>
            <li><input type="radio" name="answer" value="Security Key">Security Key</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }


    // Question 10 - Submit
    if (number === 10) {

        if (selected.value === "CSRF Token") {
            score++;
        }

        console.log(score);

        h2.textContent = "Congratulations!!!You Completed the Django Quiz 🎉";

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

        h2.textContent = "Which file is used to define Django models?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="models.py">models.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="forms.py">forms.py</li>
        `;

        previous.hidden = true;
        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 2
    if (number === 1) {

        h2.textContent = "2. Which file is mainly used to define URL patterns in Django?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="views.py">views.py</li>
            <li><input type="radio" name="answer" value="urls.py">urls.py</li>
            <li><input type="radio" name="answer" value="settings.py">settings.py</li>
            <li><input type="radio" name="answer" value="admin.py">admin.py</li>
        `;

        next.disabled = true;
    }


    // Question 3
    if (number === 2) {

        h2.textContent = "3. Which Django function is commonly used to return an HTML template from a view?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="redirect()">redirect()</li>
            <li><input type="radio" name="answer" value="render()">render()</li>
            <li><input type="radio" name="answer" value="template()">template()</li>
            <li><input type="radio" name="answer" value="response()">response()</li>
        `;

        next.disabled = true;
    }


    // Question 4
    if (number === 3) {

        h2.textContent = "4. Which command creates migration files based on model changes?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py migration">python manage.py migration</li>
            <li><input type="radio" name="answer" value="python manage.py models">python manage.py models</li>
        `;

        next.disabled = true;
    }


    // Question 5
    if (number === 4) {

        h2.textContent = "5. Which command applies migrations to the database?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="python manage.py migrate">python manage.py migrate</li>
            <li><input type="radio" name="answer" value="python manage.py makemigrations">python manage.py makemigrations</li>
            <li><input type="radio" name="answer" value="python manage.py database">python manage.py database</li>
            <li><input type="radio" name="answer" value="python manage.py update">python manage.py update</li>
        `;

        next.disabled = true;
    }


    // Question 6
    if (number === 5) {

        h2.textContent = "6. Which Django component is used to interact with the database using Python objects?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="Django Template">Django Template</li>
            <li><input type="radio" name="answer" value="Django ORM">Django ORM</li>
            <li><input type="radio" name="answer" value="Django URL">Django URL</li>
            <li><input type="radio" name="answer" value="Django Middleware">Django Middleware</li>
        `;

        next.disabled = true;
    }


    // Question 7
    if (number === 6) {

        h2.textContent = "7. Which field is commonly used to create a one-to-many relationship between Django models?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="OneToOneField">OneToOneField</li>
            <li><input type="radio" name="answer" value="ManyToManyField">ManyToManyField</li>
            <li><input type="radio" name="answer" value="ForeignKey">ForeignKey</li>
            <li><input type="radio" name="answer" value="RelationshipField">RelationshipField</li>
        `;

        next.disabled = true;
    }


    // Question 8
    if (number === 7) {

        h2.textContent = "8. Which file is used to configure Django project settings?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="settings.py">settings.py</li>
            <li><input type="radio" name="answer" value="config.py">config.py</li>
            <li><input type="radio" name="answer" value="manage.py">manage.py</li>
            <li><input type="radio" name="answer" value="setup.py">setup.py</li>
        `;

        next.disabled = true;
    }


    // Question 9
    if (number === 8) {

        h2.textContent = "9. Which decorator can be used to restrict a Django view to logged-in users?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="@login_required">@login_required</li>
            <li><input type="radio" name="answer" value="@authenticated">@authenticated</li>
            <li><input type="radio" name="answer" value="@login">@login</li>
            <li><input type="radio" name="answer" value="@user_required">@user_required</li>
        `;

        next.textContent = "Next";
        next.disabled = true;
    }


    // Question 10
    if (number === 9) {

        h2.textContent = "10. Which Django feature is used to protect forms from Cross-Site Request Forgery attacks?";

        options.innerHTML = `
            <li><input type="radio" name="answer" value="CSRF Token">CSRF Token</li>
            <li><input type="radio" name="answer" value="Session Token">Session Token</li>
            <li><input type="radio" name="answer" value="JWT Token">JWT Token</li>
            <li><input type="radio" name="answer" value="Security Key">Security Key</li>
        `;

        next.textContent = "Submit";
        next.disabled = true;
    }

});