<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Web App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>My Web App</h1>
    <button onclick="toggleDark()">🌙</button>
</header>

<div class="container">

    <!-- 1. Welcome -->
    <section class="card">
        <h2 id="welcomeText">Welcome User</h2>
        <button onclick="changeText()">Change Text</button>
    </section>

    <!-- 2. Counter -->
    <section class="card">
        <h2>Counter</h2>
        <h1 id="count">0</h1>
        <button onclick="increase()">+</button>
        <button onclick="decrease()">-</button>
    </section>

    <!-- 3. Background Color -->
    <section class="card">
        <h2>Background Color</h2>
        <button onclick="changeColor()">Change Color</button>
    </section>

    <!-- 4. Show/Hide -->
    <section class="card">
        <h2>Show / Hide Text</h2>
        <p id="toggleText">Hello User 👋</p>
        <button onclick="toggleText()">Toggle</button>
    </section>

    <!-- 5. Greeting -->
    <section class="card">
        <h2>Greeting App</h2>
        <input type="text" id="name" placeholder="Enter name">
        <button onclick="greet()">Submit</button>
        <h3 id="greetResult"></h3>
    </section>

    <!-- 6. Calculator -->
    <section class="card">
        <h2>Calculator</h2>
        <input id="num1" placeholder="Number 1">
        <input id="num2" placeholder="Number 2">
        <button onclick="add()">Add</button>
        <h3 id="result"></h3>
    </section>

</div>

<script src="script.js"></script>
</body>
</html>