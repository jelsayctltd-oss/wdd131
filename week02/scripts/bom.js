const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('#list');

// Listen for the Add Chapter button click
button.addEventListener('click', function () {

    // Check that the input is not empty
    if (input.value.trim() !== '') {

        // Create a list item
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Add the chapter to the list item
        li.textContent = input.value.trim();

        // Add the delete symbol
        deleteButton.textContent = '❌';

        // Add delete button styling
        deleteButton.classList.add('delete');

        // Listen for delete button clicks
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Add delete button to list item
        li.append(deleteButton);

        // Add list item to the webpage
        list.append(li);

        // Clear the input box
        input.value = '';

        // Return cursor to input box
        input.focus();
    } else {
        input.focus();
    }
});