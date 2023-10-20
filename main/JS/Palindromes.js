document.getElementById('checkButton').addEventListener('click', function(event) {
    // Prevent the default behavior of the button (form submission)
    event.preventDefault();

    // Get the input value, remove leading and trailing spaces, and convert to lowercase
    const word = document.getElementById('wordInput').value.trim().toLowerCase();

    // Initialize a variable to track if the word is a palindrome
    let isPalindrome = true;

    // Loop through the characters to check for palindrome
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            // If characters don't match, it's not a palindrome
            isPalindrome = false;
            break;
        }
    }

    // If it's a palindrome, update local storage
    if (isPalindrome) {
        const previousPalindromes = JSON.parse(localStorage.getItem('palindromes')) || [];
        localStorage.setItem("palindromes", JSON.stringify([...previousPalindromes, word]));
    }

    // Clear the input field for the next input
    document.getElementById('wordInput').value = '';
    // Final step: show if it is a palindrome or not.
    if (isPalindrome) {
        alert(`"${word}" is a palindrome!`);
    } else {
        alert(`"${word}" is not a palindrome.`);
    }
});


