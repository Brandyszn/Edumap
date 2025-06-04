
const scholarships = [
  {
    name: "🇸🇿 UNESWA Merit Scholarships",
    country: "Eswatini",
    cssClass: "flag-sz",
    eligibleFor: "Top Eswatini SGCSE performers",
    value: "Full tuition + accommodation allowance",
    link: "https://www.uneswa.sz/"
  },
  {
    name: "(LOCAL) King Sobhuza II Scholarship",
    country: "Eswatini",
    eligibleFor: "Eswatini citizens for undergraduate studies",
    value: "Full tuition, living allowance, books",
    link: "https://gov.sz/index.php/ministries-departments/ministry-of-education-and-training"
  },
  {
    name: "(LOCAL) MTN Eswatini Foundation Scholarship",
    country: "Eswatini",
    eligibleFor: "Eswatini students in STEM fields",
    value: "Partial tuition + mentorship",
    link: "https://www.mtn.co.sz/"
  },
  {
    name: "(LOCAL) Standard Bank Eswatini Education Fund",
    country: "Eswatini",
    eligibleFor: "Banking/Finance students from Eswatini",
    value: "Full tuition + internship opportunity",
    link: "https://www.standardbank.co.sz/"
  },
  {
    name: "(REGIONAL) SADC Scholarship Scheme",
    country: "SADC Region",
    eligibleFor: "SADC citizens (including Eswatini)",
    value: "Full tuition at regional universities",
    link: "https://www.sadc.int/"
  },
  {
    name: "(REGIONAL) Mandela Rhodes Scholarship",
    country: "South Africa",
    eligibleFor: "African students (perfect for Eswatini youth!)",
    value: "Full tuition, living stipend, leadership development",
    link: "https://www.mandelarhodes.org/"
  },
  {
    name: "(REGIONAL) University of Cape Town Scholarships",
    country: "South Africa",
    eligibleFor: "International students (neighboring country advantage)",
    value: "Partial to full tuition",
    link: "https://www.uct.ac.za/apply/scholarships"
  },
  {
    name: "(REGIONAL) Wits University Scholarships",
    country: "South Africa",
    eligibleFor: "SADC students including Eswatini",
    value: "Full tuition + living allowance",
    link: "https://www.wits.ac.za/scholarships/"
  },
  {
    name: "(REGIONAL) University of Botswana Scholarships",
    country: "Botswana",
    eligibleFor: "SADC students (neighboring country)",
    value: "Reduced tuition + accommodation",
    link: "https://www.ub.bw/"
  },
  {
    name: "Commonwealth Scholarship",
    country: "UK",
    eligibleFor: "Eswatini citizens (Commonwealth country)",
    value: "Full tuition, travel, stipend",
    link: "https://cscuk.fcdo.gov.uk/scholarships/"
  },
  {
    name: "Chevening Scholarship",
    country: "UK",
    eligibleFor: "Eswatini citizens (Commonwealth)",
    value: "Full tuition, travel, stipend",
    link: "https://www.chevening.org/scholarships/"
  },
  {
    name: "Fulbright Program",
    country: "USA",
    eligibleFor: "Eswatini citizens with excellent English",
    value: "Full tuition, stipend, travel",
    link: "https://us.fulbrightonline.org/"
  },
  {
    name: "DAAD Scholarships",
    country: "Germany",
    eligibleFor: "International students (very affordable country!)",
    value: "Full tuition, travel, stipend",
    link: "https://www.daad.de/en/"
  },
  {
    name: "Erasmus+ Scholarships",
    country: "European Union",
    eligibleFor: "Students from eligible countries",
    value: "Full tuition, travel, stipend",
    link: "https://ec.europa.eu/programmes/erasmus-plus/"
  },
  {
    name: "Australian Awards Scholarships",
    country: "Australia",
    eligibleFor: "Developing country students including Eswatini",
    value: "Full tuition, living allowance, travel",
    link: "https://www.australiaawards.gov.au/"
  },
  {
    name: "Canada Graduate Scholarships",
    country: "Canada",
    eligibleFor: "International graduate students",
    value: "CAD $17,500 - $35,000",
    link: "https://www.nserc-crsng.gc.ca/"
  },
  {
    name: "Chinese Government Scholarship",
    country: "China",
    eligibleFor: "International students",
    value: "Full tuition + living stipend",
    link: "https://www.csc.edu.cn/"
  },
  {
    name: "🇯🇵 Japanese MEXT Scholarship",
    country: "Japan",
    cssClass: "flag-jp",
    eligibleFor: "International undergraduate/graduate students",
    value: "Full tuition + monthly allowance",
    link: "https://www.mext.go.jp/"
  },
  {
    name: "🇿🇦 University of Witwatersrand Scholarships",
    country: "South Africa",
    cssClass: "flag-za",
    eligibleFor: "SADC students including Eswatini",
    value: "Full tuition + living allowance",
    link: "https://www.wits.ac.za/scholarships/"
  },
  {
    name: "🇿🇦 Stellenbosch University Scholarships",
    country: "South Africa", 
    cssClass: "flag-za",
    eligibleFor: "International students with academic excellence",
    value: "Partial to full tuition coverage",
    link: "https://www.sun.ac.za/english/learning-teaching/student-affairs/scholarship"
  },
  {
    name: "🇧🇼 University of Botswana International Scholarships",
    country: "Botswana",
    cssClass: "flag-bw", 
    eligibleFor: "SADC region students",
    value: "Reduced fees + accommodation support",
    link: "https://www.ub.bw/admissions/scholarships"
  },
  {
    name: "🌍 African Development Bank Scholarships",
    country: "Pan-African",
    cssClass: "flag-regional",
    eligibleFor: "African students for development-focused studies",
    value: "Full tuition + stipend + travel",
    link: "https://www.afdb.org/en/about-us/careers/scholarship-program"
  }
];

const container = document.getElementById("scholarship-list");
const searchInput = document.getElementById("search");
const countryFilter = document.getElementById("country-filter");
const valueFilter = document.getElementById("value-filter");
const sortSelect = document.getElementById("sort-select");

// Favorites functionality
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function displayscholarship(list) {
  container.innerHTML = "";
  list.forEach(function(s, index) {
    const card = document.createElement("div");
    card.className = "card";
    const titleClass = s.cssClass ? s.cssClass : '';
    const isFavorited = favorites.includes(s.name);
    
    card.innerHTML = `
      <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" onclick="toggleFavorite('${s.name}')" title="Add to favorites">
        ${isFavorited ? '★' : '☆'}
      </button>
      <h3 class="emoji-fallback ${titleClass}">${s.name}</h3>
      <p><strong>Country:</strong> ${s.country}</p>
      <p><strong>Eligibility:</strong> ${s.eligibleFor}</p>
      <p><strong>Value:</strong> ${s.value}</p>
      <a href="${s.link}" target="_blank">Apply Now</a>
    `;
    container.appendChild(card);
  });
  
  updateStats(list);
}

function toggleFavorite(scholarshipName) {
  if (favorites.includes(scholarshipName)) {
    favorites = favorites.filter(name => name !== scholarshipName);
  } else {
    favorites.push(scholarshipName);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  applyFilters(); // Refresh display
}

function updateStats(list) {
  const totalCount = list.length;
  const localCount = list.filter(s => s.name.includes("LOCAL") || s.name.includes("REGIONAL") || s.country === "Eswatini").length;
  const internationalCount = totalCount - localCount;
  
  document.getElementById('total-scholarships').textContent = totalCount;
  document.getElementById('local-count').textContent = localCount;
  document.getElementById('international-count').textContent = internationalCount;
}

function applyFilters() {
  let filtered = [...scholarships];
  
  // Search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(function(s) {
      return s.name.toLowerCase().includes(searchTerm) ||
             s.country.toLowerCase().includes(searchTerm) ||
             s.eligibleFor.toLowerCase().includes(searchTerm);
    });
  }
  
  // Country/Region filter
  const countryFilterValue = countryFilter.value;
  if (countryFilterValue) {
    if (countryFilterValue === 'local') {
      filtered = filtered.filter(s => s.name.includes("LOCAL") || s.country === "Eswatini");
    } else if (countryFilterValue === 'regional') {
      filtered = filtered.filter(s => s.name.includes("REGIONAL") || 
        s.country === "South Africa" || s.country === "Botswana" || s.country === "SADC Region");
    } else if (countryFilterValue === 'international') {
      filtered = filtered.filter(s => !s.name.includes("LOCAL") && !s.name.includes("REGIONAL") && 
        s.country !== "Eswatini" && s.country !== "South Africa" && s.country !== "Botswana");
    }
  }
  
  // Value filter
  const valueFilterValue = valueFilter.value;
  if (valueFilterValue) {
    if (valueFilterValue === 'full') {
      filtered = filtered.filter(s => s.value.toLowerCase().includes('full'));
    } else if (valueFilterValue === 'partial') {
      filtered = filtered.filter(s => s.value.toLowerCase().includes('partial'));
    }
  }
  
  // Sorting
  const sortValue = sortSelect.value;
  if (sortValue === 'alphabetical') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === 'local-first') {
    filtered.sort((a, b) => {
      const aIsLocal = a.name.includes("LOCAL") || a.country === "Eswatini";
      const bIsLocal = b.name.includes("LOCAL") || b.country === "Eswatini";
      if (aIsLocal && !bIsLocal) return -1;
      if (!aIsLocal && bIsLocal) return 1;
      return 0;
    });
  }
  
  displayscholarship(filtered);
}

// Handle URL search parameter
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get('search');
  if (searchTerm) {
    searchInput.value = searchTerm;
    applyFilters();
  }
});

// Event listeners
searchInput.addEventListener("input", applyFilters);
countryFilter.addEventListener("change", applyFilters);
valueFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

// Initial display
applyFilters();
