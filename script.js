const universityData = [
  // Local Universities
  {
    name: "University of Eswatini (UNESWA)",
    country: "Eswatini",
    programs: ["Agriculture", "Education", "Business", "Engineering", "Health Sciences"],
    tuition: "USD 850-1,400",
    website: "No website available"
  },
  {
    name: "Eswatini College of Technology",
    country: "Eswatini",
    programs: ["Engineering", "Information Technology", "Applied Sciences"],
    tuition: "USD 600-1,200",
    website: "No website available"
  },

  // Regional African Universities
  {
    name: "University of Cape Town",
    country: "South Africa",
    programs: ["Computer Science", "Engineering", "Medicine", "Law"],
    tuition: "USD 4,000-8,000",
    website: "https://www.uct.ac.za"
  },
  {
    name: "University of the Witwatersrand",
    country: "South Africa",
    programs: ["Mining Engineering", "Medicine", "Business", "Law"],
    tuition: "USD 4,500-7,500",
    website: "https://www.wits.ac.za"
  },
  {
    name: "University of Stellenbosch",
    country: "South Africa",
    programs: ["Agriculture", "Engineering", "Medicine", "Business"],
    tuition: "USD 4,200-6,800",
    website: "https://www.sun.ac.za"
  },
  {
    name: "University of Pretoria",
    country: "South Africa",
    programs: ["Law", "Engineering", "Business", "Medicine"],
    tuition: "USD 3,500-6,000",
    website: "https://www.up.ac.za"
  },
  {
    name: "University of Botswana",
    country: "Botswana",
    programs: ["Tourism", "Computer Science", "Agriculture", "Education"],
    tuition: "USD 3,000-4,500",
    website: "https://www.ub.bw"
  },
  {
    name: "University of Zambia",
    country: "Zambia",
    programs: ["Mining Engineering", "Medicine", "Agriculture"],
    tuition: "USD 1,500-3,500",
    website: "https://www.unza.zm"
  },
  {
    name: "University of Malawi",
    country: "Malawi",
    programs: ["Education", "Health Sciences", "Agriculture"],
    tuition: "USD 1,200-2,500",
    website: "https://www.unima.mw"
  },
  {
    name: "University of Nairobi",
    country: "Kenya",
    programs: ["Agriculture", "Business", "Engineering", "Medicine"],
    tuition: "USD 2,500-4,000",
    website: "https://www.uonbi.ac.ke"
  },
  {
    name: "Makerere University",
    country: "Uganda",
    programs: ["Medicine", "Engineering", "Agriculture", "Business"],
    tuition: "USD 2,000-3,500",
    website: "https://www.mak.ac.ug"
  },
  {
    name: "Addis Ababa University",
    country: "Ethiopia",
    programs: ["Public Health", "Engineering", "Humanities"],
    tuition: "USD 900-2,000",
    website: "https://www.aau.edu.et"
  },
  {
    name: "University of Ghana",
    country: "Ghana",
    programs: ["Sociology", "Political Science", "Business", "Medicine"],
    tuition: "USD 2,000-3,000",
    website: "https://www.ug.edu.gh"
  },
  {
    name: "University of Zimbabwe",
    country: "Zimbabwe",
    programs: ["Medicine", "Law", "Agriculture", "Engineering"],
    tuition: "USD 1,200-2,800",
    website: "https://www.uz.ac.zw"
  },

  // International Universities - USA
  {
    name: "Harvard University",
    country: "USA",
    programs: ["Law", "Medicine", "Business", "Liberal Arts"],
    tuition: "USD 55,000-75,000",
    website: "https://www.harvard.edu"
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    country: "USA",
    programs: ["Engineering", "Computer Science", "Physics", "Economics"],
    tuition: "USD 53,790-70,000",
    website: "https://www.mit.edu"
  },
  {
    name: "Stanford University",
    country: "USA",
    programs: ["Computer Science", "Engineering", "Business", "Medicine"],
    tuition: "USD 56,000-75,000",
    website: "https://www.stanford.edu"
  },
  {
    name: "University of California, Berkeley",
    country: "USA",
    programs: ["Engineering", "Computer Science", "Environmental Sciences"],
    tuition: "USD 40,000-60,000",
    website: "https://www.berkeley.edu"
  },
  {
    name: "Yale University",
    country: "USA",
    programs: ["Law", "Arts & Sciences", "Medicine"],
    tuition: "USD 50,000-70,000",
    website: "https://www.yale.edu"
  },

  // International Universities - UK
  {
    name: "University of Oxford",
    country: "United Kingdom",
    programs: ["Philosophy", "Physics", "Medicine", "Law"],
    tuition: "USD 45,000-65,000",
    website: "https://www.ox.ac.uk"
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    programs: ["Mathematics", "Engineering", "Medicine", "Law"],
    tuition: "USD 45,000-65,000",
    website: "https://www.cam.ac.uk"
  },
  {
    name: "Imperial College London",
    country: "United Kingdom",
    programs: ["Engineering", "Medicine", "Natural Sciences", "Business"],
    tuition: "USD 40,000-55,000",
    website: "https://www.imperial.ac.uk"
  },
  {
    name: "University College London (UCL)",
    country: "United Kingdom",
    programs: ["Architecture", "Medicine", "Science", "Humanities"],
    tuition: "USD 35,000-50,000",
    website: "https://www.ucl.ac.uk"
  },
  {
    name: "London School of Economics (LSE)",
    country: "United Kingdom",
    programs: ["Economics", "Politics", "Data Science"],
    tuition: "USD 30,000-45,000",
    website: "https://www.lse.ac.uk"
  },

  // International Universities - Canada
  {
    name: "University of Toronto",
    country: "Canada",
    programs: ["Medicine", "Engineering", "Business", "Computer Science"],
    tuition: "USD 35,000-50,000",
    website: "https://www.utoronto.ca"
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    programs: ["Forestry", "Medicine", "Business", "Engineering"],
    tuition: "USD 32,000-45,000",
    website: "https://www.ubc.ca"
  },
  {
    name: "McGill University",
    country: "Canada",
    programs: ["Medicine", "Law", "Engineering", "Arts"],
    tuition: "USD 28,000-45,000",
    website: "https://www.mcgill.ca"
  },

  // International Universities - Australia
  {
    name: "University of Melbourne",
    country: "Australia",
    programs: ["Medicine", "Law", "Engineering", "Business"],
    tuition: "USD 30,000-50,000",
    website: "https://www.unimelb.edu.au"
  },
  {
    name: "Australian National University",
    country: "Australia",
    programs: ["Political Science", "Economics", "Physics", "Computer Science"],
    tuition: "USD 28,000-45,000",
    website: "https://www.anu.edu.au"
  },
  {
    name: "University of Sydney",
    country: "Australia",
    programs: ["Medicine", "Law", "Engineering", "Arts"],
    tuition: "USD 30,000-48,000",
    website: "https://www.sydney.edu.au"
  },

  // International Universities - Germany (Affordable!)
  {
    name: "Technical University of Munich",
    country: "Germany",
    programs: ["Engineering", "Computer Science", "Natural Sciences"],
    tuition: "USD 500-3,000 (Very Affordable!)",
    website: "https://www.tum.de"
  },
  {
    name: "University of Heidelberg",
    country: "Germany",
    programs: ["Medicine", "Natural Sciences", "Law", "Philosophy"],
    tuition: "USD 500-3,000 (Very Affordable!)",
    website: "https://www.uni-heidelberg.de"
  },
  {
    name: "Ludwig Maximilian University of Munich (LMU)",
    country: "Germany",
    programs: ["Humanities", "Medicine", "Natural Sciences"],
    tuition: "USD 500-3,000",
    website: "https://www.en.uni-muenchen.de/index.html"
  },

  // International Universities - Asia
  {
    name: "University of Tokyo",
    country: "Japan",
    programs: ["Engineering", "Economics", "Medicine", "Natural Sciences"],
    tuition: "USD 5,000-8,000",
    website: "https://www.u-tokyo.ac.jp"
  },
  {
    name: "Tsinghua University",
    country: "China",
    programs: ["Engineering", "Computer Science", "Economics", "Management"],
    tuition: "USD 4,000-6,000",
    website: "https://www.tsinghua.edu.cn"
  },
  {
    name: "KAIST",
    country: "South Korea",
    programs: ["Engineering", "Computer Science", "Robotics"],
    tuition: "USD 4,000-8,000",
    website: "https://www.kaist.ac.kr"
  },
  {
    name: "Seoul National University",
    country: "South Korea",
    programs: ["Engineering", "Medicine", "Business"],
    tuition: "USD 3,000-7,000",
    website: "https://www.useoul.edu"
  },

  // International Universities - Europe
  {
    name: "ETH Zurich",
    country: "Switzerland",
    programs: ["Engineering", "Natural Sciences", "Computer Science"],
    tuition: "USD 1,500-3,000",
    website: "https://ethz.ch"
  },
  {
    name: "University of Amsterdam",
    country: "Netherlands",
    programs: ["Business", "Social Sciences", "Medicine", "Law"],
    tuition: "USD 12,000-20,000",
    website: "https://www.uva.nl"
  },
  {
    name: "Sorbonne University",
    country: "France",
    programs: ["Literature", "Medicine", "Sciences", "Engineering"],
    tuition: "USD 3,000-8,000",
    website: "https://www.sorbonne-universite.fr"
  },
  {
    name: "KU Leuven",
    country: "Belgium",
    programs: ["Engineering", "Medicine", "Humanities"],
    tuition: "USD 3,000-10,000",
    website: "https://www.kuleuven.be"
  },
  {
    name: "Trinity College Dublin",
    country: "Ireland",
    programs: ["Arts", "Engineering", "Computer Science"],
    tuition: "USD 12,000-22,000",
    website: "https://www.tcd.ie"
  },

  // International Universities - USA (Expanded)
  {
    name: "Columbia University",
    country: "USA",
    programs: ["Journalism", "Business", "Engineering", "Law"],
    tuition: "USD 50,000-70,000",
    website: "https://www.columbia.edu"
  },
  {
    name: "Princeton University",
    country: "USA",
    programs: ["Engineering", "Mathematics", "Public Policy"],
    tuition: "USD 48,000-68,000",
    website: "https://www.princeton.edu"
  },
  {
    name: "University of Chicago",
    country: "USA",
    programs: ["Economics", "Law", "Physical Sciences"],
    tuition: "USD 50,000-70,000",
    website: "https://www.uchicago.edu"
  },
  {
    name: "California Institute of Technology (Caltech)",
    country: "USA",
    programs: ["Physics", "Engineering", "Computer Science"],
    tuition: "USD 50,000-65,000",
    website: "https://www.caltech.edu"
  },
  {
    name: "University of Michigan",
    country: "USA",
    programs: ["Engineering", "Business", "Medicine"],
    tuition: "USD 30,000-50,000",
    website: "https://www.umich.edu"
  },
  {
    name: "University of Texas at Austin",
    country: "USA",
    programs: ["Engineering", "Business", "Computer Science"],
    tuition: "USD 25,000-45,000",
    website: "https://www.utexas.edu"
  },
  {
    name: "Georgia Institute of Technology",
    country: "USA",
    programs: ["Engineering", "Computer Science", "Architecture"],
    tuition: "USD 25,000-40,000",
    website: "https://www.gatech.edu"
  },
  {
    name: "Carnegie Mellon University",
    country: "USA",
    programs: ["Computer Science", "Engineering", "Design"],
    tuition: "USD 45,000-65,000",
    website: "https://www.cmu.edu"
  },

  // International Universities - UK (Expanded)
  {
    name: "King's College London",
    country: "United Kingdom",
    programs: ["Medicine", "Law", "Humanities"],
    tuition: "USD 30,000-45,000",
    website: "https://www.kcl.ac.uk"
  },
  {
    name: "University of Edinburgh",
    country: "United Kingdom",
    programs: ["Informatics", "Medicine", "Arts"],
    tuition: "USD 25,000-40,000",
    website: "https://www.ed.ac.uk"
  },
  {
    name: "University of Manchester",
    country: "United Kingdom",
    programs: ["Engineering", "Business", "Social Sciences"],
    tuition: "USD 22,000-38,000",
    website: "https://www.manchester.ac.uk"
  },
  {
    name: "University of Warwick",
    country: "United Kingdom",
    programs: ["Business", "Engineering", "Mathematics"],
    tuition: "USD 22,000-36,000",
    website: "https://warwick.ac.uk"
  },

  // International Universities - Asia (Expanded)
  {
    name: "Peking University",
    country: "China",
    programs: ["Law", "Economics", "Computer Science"],
    tuition: "USD 4,000-7,000",
    website: "https://english.pku.edu.cn"
  },
  {
    name: "Fudan University",
    country: "China",
    programs: ["Business", "Engineering", "Sciences"],
    tuition: "USD 3,500-6,000",
    website: "https://www.fudan.edu.cn/en/"
  },
  {
    name: "Hong Kong University (HKU)",
    country: "Hong Kong",
    programs: ["Law", "Medicine", "Computer Science"],
    tuition: "USD 15,000-28,000",
    website: "https://www.hku.hk"
  },
  {
    name: "Hong Kong University of Science and Technology (HKUST)",
    country: "Hong Kong",
    programs: ["Business", "Engineering", "Science"],
    tuition: "USD 14,000-26,000",
    website: "https://www.ust.hk"
  },
  {
    name: "Nanyang Technological University (NTU)",
    country: "Singapore",
    programs: ["Engineering", "Business", "Computer Science"],
    tuition: "USD 20,000-35,000",
    website: "https://www.ntu.edu.sg"
  },
  {
    name: "Indian Institute of Technology Bombay (IIT Bombay)",
    country: "India",
    programs: ["Engineering", "Computer Science", "Design"],
    tuition: "USD 2,000-6,000",
    website: "https://www.iitb.ac.in"
  },
  {
    name: "Indian Institute of Science (IISc)",
    country: "India",
    programs: ["Engineering", "Natural Sciences", "Research"],
    tuition: "USD 1,500-5,000",
    website: "https://www.iisc.ac.in"
  },
  {
    name: "National Taiwan University",
    country: "Taiwan",
    programs: ["Engineering", "Medicine", "Computer Science"],
    tuition: "USD 3,000-7,000",
    website: "https://www.ntu.edu.tw"
  }
];

function displayUniversities(universities) {
  const list = document.getElementById("university-list");
  list.innerHTML = "";

  universities.forEach(function(u) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${u.name}</h3>
      <p><strong>Country:</strong> ${u.country}</p>
      <p><strong>Programs:</strong> ${u.programs.join(", ")}</p>
      <p><strong>Tuition:</strong> ${u.tuition}</p>
      <a href="${u.website}" target="_blank">Visit Website</a>
    `;
    list.appendChild(card);
  });
  
  updateUniversityStats(universities);
}

function updateUniversityStats(list) {
  const totalCount = list.length;
  const localCount = list.filter(function(u) {
    return u.country === "Eswatini" || u.country === "South Africa" || 
           u.country === "Botswana" || u.country === "Kenya" || 
           u.country === "Uganda" || u.country === "Ghana" ||
           u.country === "Zambia" || u.country === "Malawi" ||
           u.country === "Tanzania" || u.country === "Zimbabwe" ||
           u.country === "Ethiopia" || u.country === "Nigeria" ||
           u.country === "Egypt";
  }).length;
  const internationalCount = totalCount - localCount;
  
  const totalElement = document.getElementById('total-universities');
  const localElement = document.getElementById('local-count');
  const internationalElement = document.getElementById('international-count');
  
  if (totalElement) totalElement.textContent = totalCount;
  if (localElement) localElement.textContent = localCount;
  if (internationalElement) internationalElement.textContent = internationalCount;
}

// Filter and sort functionality
function applyFilters() {
  let filtered = [...universityData];
  
  // Search filter
  const searchTerm = document.getElementById("search").value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(function(u) {
      return u.name.toLowerCase().includes(searchTerm) ||
             u.country.toLowerCase().includes(searchTerm) ||
             u.programs.some(function(program) {
               return program.toLowerCase().includes(searchTerm);
             });
    });
  }
  
  // Country/Region filter
  const countryFilter = document.getElementById("country-filter");
  if (countryFilter && countryFilter.value) {
    if (countryFilter.value === 'local') {
      filtered = filtered.filter(function(u) {
        return u.country === "Eswatini";
      });
    } else if (countryFilter.value === 'regional') {
      filtered = filtered.filter(function(u) {
        return u.country === "South Africa" || u.country === "Botswana" || 
               u.country === "Kenya" || u.country === "Uganda" || 
               u.country === "Ghana" || u.country === "Eswatini" ||
               u.country === "Zambia" || u.country === "Malawi" ||
               u.country === "Tanzania" || u.country === "Zimbabwe" ||
               u.country === "Ethiopia";
      });
    } else if (countryFilter.value === 'international') {
      filtered = filtered.filter(function(u) {
        return u.country !== "Eswatini" && u.country !== "South Africa" && 
               u.country !== "Botswana" && u.country !== "Kenya" && 
               u.country !== "Uganda" && u.country !== "Ghana";
      });
    }
  }
  
  // Tuition filter
  const tuitionFilter = document.getElementById("tuition-filter");
  if (tuitionFilter && tuitionFilter.value) {
    filtered = filtered.filter(function(u) {
      const tuitionText = u.tuition.toLowerCase();
      if (tuitionFilter.value === 'low') {
        return tuitionText.includes('500') || tuitionText.includes('850') || 
               tuitionText.includes('1,') || tuitionText.includes('2,') || 
               tuitionText.includes('3,') || tuitionText.includes('4,');
      } else if (tuitionFilter.value === 'medium') {
        return (tuitionText.includes('5,') || tuitionText.includes('6,') || 
                tuitionText.includes('7,') || tuitionText.includes('8,') || 
                tuitionText.includes('9,') || tuitionText.includes('10,') ||
                tuitionText.includes('12,') || tuitionText.includes('15,') ||
                tuitionText.includes('20,')) && !tuitionText.includes('25,') &&
                !tuitionText.includes('30,') && !tuitionText.includes('35,') &&
                !tuitionText.includes('40,') && !tuitionText.includes('45,') &&
                !tuitionText.includes('50,') && !tuitionText.includes('55,') &&
                !tuitionText.includes('60,') && !tuitionText.includes('65,') &&
                !tuitionText.includes('70,') && !tuitionText.includes('75,');
      } else if (tuitionFilter.value === 'high') {
        return tuitionText.includes('25,') || tuitionText.includes('30,') || 
               tuitionText.includes('35,') || tuitionText.includes('40,') || 
               tuitionText.includes('45,') || tuitionText.includes('50,') || 
               tuitionText.includes('55,') || tuitionText.includes('60,') || 
               tuitionText.includes('65,') || tuitionText.includes('70,') || 
               tuitionText.includes('75,');
      }
      return true;
    });
  }
  
  // Sorting
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect && sortSelect.value) {
    if (sortSelect.value === 'alphabetical') {
      filtered.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (sortSelect.value === 'cost-low') {
      filtered.sort(function(a, b) {
        const aNum = parseInt(a.tuition.replace(/[^0-9]/g, ''));
        const bNum = parseInt(b.tuition.replace(/[^0-9]/g, ''));
        return aNum - bNum;
      });
    } else if (sortSelect.value === 'local-first') {
      filtered.sort(function(a, b) {
        const aIsLocal = a.country === "Eswatini";
        const bIsLocal = b.country === "Eswatini";
        if (aIsLocal && !bIsLocal) return -1;
        if (!aIsLocal && bIsLocal) return 1;
        return 0;
      });
    }
  }
  
  displayUniversities(filtered);
}

// Handle URL search parameter
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get('search');
  if (searchTerm) {
    document.getElementById('search').value = searchTerm;
    applyFilters();
  }
});

// Event listeners
document.getElementById("search").addEventListener("input", applyFilters);

// Add event listeners for filters when they exist
document.addEventListener('DOMContentLoaded', function() {
  const countryFilter = document.getElementById("country-filter");
  const tuitionFilter = document.getElementById("tuition-filter");
  const sortSelect = document.getElementById("sort-select");
  
  if (countryFilter) countryFilter.addEventListener("change", applyFilters);
  if (tuitionFilter) tuitionFilter.addEventListener("change", applyFilters);
  if (sortSelect) sortSelect.addEventListener("change", applyFilters);
  
  // Initial display
  applyFilters();
});

// Fallback initial display
displayUniversities(universityData);
