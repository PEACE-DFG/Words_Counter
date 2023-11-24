function countWords() {
  const inputText = document.getElementById('inputText').value;
  const wordCountResult = document.getElementById('wordCountResult');

  // Remove leading and trailing whitespaces
  const trimmedString = inputText.trim();

  // If the string is empty, show an error message
  if (!trimmedString) {
    wordCountResult.textContent = 'Please enter some text.';
    return;
  }

  // Split the string into an array of words using space as the delimiter
  const words = trimmedString.split(/\s+/);

  // Display the word count
  wordCountResult.textContent = `Word count: ${words.length}`;
}
