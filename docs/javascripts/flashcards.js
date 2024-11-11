document.addEventListener('DOMContentLoaded', function() {
    const flashcards = [];

    // Attempt to collect questions and answers, logging found elements for debugging
    document.querySelectorAll('.md-typeset .admonition').forEach((admonition, index) => {
        const titleElement = admonition.querySelector('.admonition-title');
        const contentElement = admonition.querySelector('.admonition-content');

        // Log the found elements for debugging
        console.log(`Admonition ${index + 1}`, {
            titleElement,
            contentElement,
            outerHTML: admonition.outerHTML // Log full HTML for inspection
        });

        if (titleElement && contentElement) {
            const question = titleElement.textContent.trim();
            const answer = contentElement.textContent.trim();
            flashcards.push({ question, answer });
        } else {
            console.warn(`Admonition ${index + 1} is missing title or content.`);
        }
    });

    if (flashcards.length === 0) {
        console.warn("No flashcards found. Please check selectors or content.");
        return;
    }

    let currentCardIndex = 0;
    const questionDiv = document.getElementById('question');
    const answerDiv = document.getElementById('answer');
    const flashcardDiv = document.getElementById('flashcard');

    function updateFlashcard() {
        const currentCard = flashcards[currentCardIndex];
        questionDiv.textContent = currentCard.question;
        answerDiv.textContent = currentCard.answer;
        answerDiv.classList.add('hidden');
    }

    updateFlashcard();

    flashcardDiv.addEventListener('click', () => {
        answerDiv.classList.toggle('hidden');
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        updateFlashcard();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        updateFlashcard();
    });
});