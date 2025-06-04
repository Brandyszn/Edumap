
// Home page search functionality
function searchUniversities() {
  const searchTerm = document.getElementById('home-search').value;
  // Redirect to universities page with search term
  window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
}

function searchScholarships() {
  const searchTerm = document.getElementById('home-search').value;
  // Redirect to scholarships page with search term
  window.location.href = `scholarship.html?search=${encodeURIComponent(searchTerm)}`;
}

// Handle enter key in search box
document.getElementById('home-search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchUniversities(); // Default to university search
  }
});

// Auto-populate search if coming from URL parameter
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get('search');
  if (searchTerm) {
    document.getElementById('home-search').value = searchTerm;
  }
});
