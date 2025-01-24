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
