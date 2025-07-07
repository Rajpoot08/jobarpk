// ************************* Search Section *******************************
        document.addEventListener('DOMContentLoaded', () => {
    // Search form redirection
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.querySelector('.new-hero-search-btn');

    if (searchForm && searchButton) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            console.log('Search button clicked! Redirecting...');
            // Redirect to the search results page
            window.location.href = '/search';
        });
    } else {
        console.error('Search form or button not found for event listener.');
    }
});