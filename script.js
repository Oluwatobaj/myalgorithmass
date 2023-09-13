function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Define a function to check if a character is a vowel
    function isVowel(char) {
      return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
    }
  
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      // Increment sentence length
      sentenceLength++;
  
      // Check if the character is a letter (not a space or punctuation)
      if (/[a-zA-Z]/.test(char)) {
        // If the previous character was a space or the beginning of the sentence, increment word count
        if (i === 0 || sentence[i - 1] === ' ') {
          wordCount++;
        }
  
        // Check if the character is a vowel and increment vowel count
        if (isVowel(char)) {
          vowelCount++;
        }
      }
    }
  
    // Output the results
    console.log(`Length of the sentence: ${sentenceLength} characters`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
  }
  
  // Example usage:
  const inputSentence = "This is a sample sentence.";
  analyzeSentence(inputSentence);

  