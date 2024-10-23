// Web Storage: Save last visit
window.onload = function() {
    let lastVisit = localStorage.getItem('lastVisit');
    
    // If there's a record of last visit, display it
    if (lastVisit) {
        document.getElementById('lastVisit').innerText = `You last visited on ${lastVisit}`;
    } else {
        document.getElementById('lastVisit').innerText = "This is your first visit!";
    }

    // Store the current visit time
    const now = new Date();
    localStorage.setItem('lastVisit', now.toLocaleString());
};

// Asynchronous Programming: Fetch a new quote from an API
document.getElementById('changeQuote').addEventListener('click', async function() {
    const quoteElement = document.getElementById('quote');
    const newQuote = await fetchRandomQuote();
    quoteElement.innerText = newQuote;
});

// Function to fetch random quotes asynchronously (asynchronous programming)
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        return "Stay motivated and keep pushing forward!";
    }
}

// DOM Manipulation: Clear localStorage and update the dynamic content
document.getElementById('clearStorage').addEventListener('click', function() {
    localStorage.clear();
    document.getElementById('lastVisit').innerText = "Storage cleared! No visit history.";
});
