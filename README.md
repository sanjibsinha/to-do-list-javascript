# to-do-list-javascript
### Overview
- We'll use HTML, CSS, and JavaScript.
- The app will have basic functionality like adding tasks, marking them as done, and deleting tasks.
- We'll explain important JavaScript concepts like variables, functions, event handling, and DOM manipulation.

### Step 1: Setting up the basic structure
First, create the necessary files:
- `index.html` (the structure of your app)
- `style.css` (for basic styling)
- `app.js` (the JavaScript code)

#### 1.1 HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="todo-container">
        <h1>My To-Do List</h1>
        <input type="text" id="todo-input" placeholder="Add a new task" />
        <button id="add-btn">Add Task</button>
        <ul id="todo-list"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

### Explanation of HTML:
- **`<input>`**: This is where users will type their task.
- **`<button>`**: The button that will add a new task to the list.
- **`<ul>`**: This unordered list will hold all the tasks dynamically.

---

#### 1.2 CSS (style.css)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.todo-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h1 {
    text-align: center;
    font-size: 24px;
}

#todo-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    margin-bottom: 5px;
    border-radius: 4px;
}

li.done {
    text-decoration: line-through;
    background-color: #d3f8e2;
}
```

### Explanation of CSS:
- Basic styling to make the to-do list look nice and centered on the screen.
- We use `.done` to mark tasks that are completed (with a line-through effect).

---

#### 1.3 JavaScript (app.js)

```javascript
// 1. Get elements from the DOM
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Event listener for the add button
addButton.addEventListener('click', function() {
    // Get the task from the input field
    const taskText = inputField.value.trim();

    // 3. Check if the input is not empty
    if (taskText !== "") {
        // 4. Create a new task item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // 5. Add a delete button to the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        li.appendChild(deleteButton);

        // 6. Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // 7. Add event listener to toggle task completion
        li.addEventListener('click', function() {
            li.classList.toggle('done');
        });

        // 8. Add the new task to the list
        todoList.appendChild(li);

        // 9. Clear the input field
        inputField.value = '';
    }
});

// Optional: Allow pressing 'Enter' to add a task
inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addButton.click();
    }
});
```

### Explanation of JavaScript:

1. **Getting Elements from the DOM**:
   ```javascript
   const inputField = document.getElementById('todo-input');
   const addButton = document.getElementById('add-btn');
   const todoList = document.getElementById('todo-list');
   ```
   - **`document.getElementById()`**: This is how we access HTML elements by their `id`. We use these elements to interact with the DOM (Document Object Model).

2. **Event Listener for Button Click**:
   ```javascript
   addButton.addEventListener('click', function() {
       const taskText = inputField.value.trim();
       if (taskText !== "") {
           const li = document.createElement('li');
           li.textContent = taskText;
           // ... other code
       }
   });
   ```
   - **`addEventListener()`**: Adds an event listener to the button, which listens for a `click` event. When clicked, the function is triggered.
   - **`inputField.value`**: This retrieves the value entered in the input field.
   - **`trim()`**: Removes any leading or trailing whitespace from the string.

3. **Creating and Adding Tasks**:
   ```javascript
   const li = document.createElement('li');
   li.textContent = taskText;
   ```
   - **`document.createElement()`**: This method creates a new HTML element (in this case, an `li` for the task).

4. **Adding a Delete Button**:
   ```javascript
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.classList.add('delete-btn');
   li.appendChild(deleteButton);
   ```
   - We create a delete button dynamically and add it to the task using **`appendChild()`**.

5. **Delete Button Event**:
   ```javascript
   deleteButton.addEventListener('click', function() {
       li.remove();
   });
   ```
   - **`remove()`**: Removes the task from the list when the delete button is clicked.

6. **Marking Task as Done**:
   ```javascript
   li.addEventListener('click', function() {
       li.classList.toggle('done');
   });
   ```
   - **`classList.toggle()`**: This adds or removes the `done` class, which styles the task as completed when clicked.

7. **Clearing the Input**:
   ```javascript
   inputField.value = '';
   ```
   - Clears the input field after the task is added.

8. **Allowing 'Enter' Key to Add Task**:
   ```javascript
   inputField.addEventListener('keypress', function(e) {
       if (e.key === 'Enter') {
           addButton.click();
       }
   });
   ```
   - Listens for a key press and triggers the `click` event for the "Add Task" button when the Enter key is pressed.

---

### Final Project Recap:

In this app, we used the following JavaScript syntaxes and concepts:
1. **DOM Manipulation**: `document.getElementById()`, `createElement()`, `appendChild()`, `remove()`, and `classList.toggle()`.
2. **Variables**: Using `const` to define constants (e.g., elements, task text).
3. **Event Listeners**: Using `addEventListener()` to attach events to elements (click, keypress).
4. **Conditional Statements**: Using `if` to check if the input is not empty before adding a task.
5. **Functions**: Using anonymous functions (inline functions) to define behavior in event listeners.

### Running the App:
1. Open the `index.html` file in your browser to see the to-do list in action.
2. You can also set up a simple local server using `Live Server` extension in VS Code or use a server like Python's `http.server` for testing.

---
