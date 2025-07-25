// dashboard.js - Learning courses Page Interactivity
// Author: QnA Hub
// All dynamic logic for search, filter, pagination, animations, and dark mode

// Course data with department tags
const courses = [
  {
    id: 1,
    title: "ENG 1011 : English - I",
    image: "https://i.postimg.cc/xjtV1H4p/eng-1011.webp",
    department: "Another",
    link: "/html/hub/coming.html"
  },
  {
    id: 2,
    title: "BDS 1201 : History of the Emergence of Bangladesh",
    image: "https://i.postimg.cc/d1nqWc1J/image.png",
    department: "Another",
    link: "/html/hub/coming.html"
  },
  {
    id: 3,
    title: "CSE 1110 : Introduction to Computer Systems",
    image: "https://i.postimg.cc/yYGqFKBF/cse-1110.webp",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 4,
    title: "CSE 2213 : Discrete Mathematics",
    image: "https://i.postimg.cc/MpfC5LKg/cse-2213.webp",
    department: "CSE",
    link: "/html/hub/dm.html"
  },
  {
    id: 5,
    title: "ENG 1013 : English - II",
    image: "https://i.postimg.cc/VNBHHPyZ/eng-1013.png",
    department: "Another",
    link: "/html/hub/coming.html"
  },
  {
    id: 6,
    title: "CSE 1111 : Structured Programming Language",
    image: "https://i.postimg.cc/Jhw92Qs0/cse-1111.webp",
    department: "CSE",
    link: "/html/hub/spl.html"
  },
  {
    id: 7,
    title: "CSE 1112 : Structured Programming Language Laboratory",
    image: "https://i.postimg.cc/5twZdFz3/cse-1112.webp",
    department: "CSE",
    link: "/html/hub/splLab.html"
  },
  {
    id: 8,
    title: "MATH 1151 : Fundamental Calculus",
    image: "https://i.postimg.cc/k4qLnXFd/math-1151.webp",
    department: "MATH",
    link: "/html/hub/fCalculus.html"
  },
  {
    id: 9,
    title: "MATH 2183 : Calculus and Linear Algebra",
    image: "https://i.postimg.cc/g2r684gw/image.png",
    department: "MATH",
    link: "/html/hub/cla.html"
  },
  {
    id: 10,
    title: "CSE 1325 : Digital Logic Design",
    image: "https://i.postimg.cc/J0dFc3w1/cse-1325.webp",
    department: "CSE",
    link: "/html/hub/dld.html"
  },
  {
    id: 11,
    title: "CSE 1326 : Digital Logic Design Laboratory",
    image: "https://i.postimg.cc/QN6v3DFR/cse-1326.webp",
    department: "CSE",
    link: "/html/hub/dldLab.html"
  },
  {
    id: 12,
    title: "CSE 1115 : Object Oriented Programming",
    image: "https://i.postimg.cc/VLdpshM5/cse-1115.webp",
    department: "CSE",
    link: "/html/hub/oop.html"
  },
  {
    id: 13,
    title: "CSE 1116 : Object Oriented Programming Laboratory",
    image: "https://i.postimg.cc/DwGNLbxT/cse-1116.jpg",
    department: "CSE",
    link: "/html/hub/oopLab.html"
  },
  {
    id: 14,
    title: "MATH 2201 : Coordinate Geometry and Vector Analysis",
    image: "https://i.postimg.cc/sXTHsPgp/math-2201.png",
    department: "MATH",
    link: "/html/hub/vector.html"
  },
  {
    id: 15,
    title: "PHY 2105 : Physics",
    image: "https://i.postimg.cc/HnKS7p5n/phy2105.png",
    department: "Another",
    link: "/html/hub/coming.html"
  },
  {
    id: 16,
    title: "PHY 2106 : Physics Laboratory",
    image: "https://i.postimg.cc/j2Cg5WDB/phy-2106.png",
    department: "Another",
    link: "/html/hub/coming.html"
  },
  {
    id: 17,
    title: "CSE 2118 : Advanced Object Oriented Programming laboratory",
    image: "https://i.postimg.cc/3w7tGfyX/cse-2118.png",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 18,
    title: "EEE 2113 : Electrical Circuits",
    image: "https://i.postimg.cc/02h9Xf8K/image.png",
    department: "EEE",
    link: "/html/hub/ec.html"
  },
  {
    id: 19,
    title: "MATH 2205 : Probability and Statistics",
    image: "https://i.postimg.cc/7ZfyJ621/math-2205.png",
    department: "MATH",
    link: "/html/hub/stat.html"
  },
  {
    id: 20,
    title: "SOC 2101 : Society, Environment and Engineering Ethics",
    image: "https://i.postimg.cc/fRYHJQbW/soc-2101.png",
    department: "Another",
    link: "/html/hub/soc.html"
  },
  {
    id: 21,
    title: "CSE 2215 : Data Structure and Algorithms – I",
    image: "https://i.postimg.cc/rFhkpWKF/cse-2215.png",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 22,
    title: "CSE 2216 : Data Structure and Algorithms – I Laboratory",
    image: "https://i.postimg.cc/Nf3JsjBP/cse-2216.png",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 23,
    title: "CSE 2233 : Theory of Computation",
    image: "https://i.postimg.cc/yd8nQJyW/cse-2233.png",
    department: "CSE",
    link: "/html/hub/toc.html"
  },
  {
    id: 24,
    title: "CSE 3313 : Computer Architecture",
    image: "https://i.postimg.cc/5NCgRWL5/cse-3313.png",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 25,
    title: "CSE 2217 : Data Structure and Algorithms – II",
    image: "https://i.postimg.cc/7hC94pck/cse-2217.png",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 26,
    title: "CSE 2218 : Data Structure and Algorithms – II Laboratory",
    image: "https://i.postimg.cc/gc54s2Xk/cse-2218.png",
    department: "CSE",
    link: "/html/hub/coming.html"
  },
  {
    id: 27,
    title: "EEE 2123 : Electronics",
    image: "https://i.postimg.cc/C5WNxcTf/eee-2123.png",
    department: "EEE",
    link: "/html/hub/coming.html"
  },
  {
    id: 28,
    title: "EEE 2124 : Electronics Laboratory",
    image: "https://i.postimg.cc/rw2j6ZNB/eee-2124.png",
    department: "EEE",
    link: "/html/hub/coming.html"
  },
];

const COURSES_PER_PAGE = 8;
let currentPage = 1;
let filteredCourses = [...courses];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const coursesGrid = document.getElementById('coursesGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Configure Tailwind for class-based dark mode
  // Add this script tag in your HTML head section if not already present
  if (typeof tailwind !== 'undefined') {
    tailwind.config = {
      darkMode: 'class',
    };
  }

  // Dark mode functionality
  function initDarkMode() {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'true' || (savedTheme === null && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Dark mode toggle with improved functionality
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      // Toggle dark class
      document.documentElement.classList.toggle('dark');
      
      // Save preference
      const isDarkMode = document.documentElement.classList.contains('dark');
      localStorage.setItem('darkMode', isDarkMode.toString());
      
      // Update button icons
      const moonIcon = darkModeToggle.querySelector('.fa-moon');
      const sunIcon = darkModeToggle.querySelector('.fa-sun');
      
      if (moonIcon && sunIcon) {
        if (isDarkMode) {
          moonIcon.classList.add('hidden');
          sunIcon.classList.remove('hidden');
        } else {
          moonIcon.classList.remove('hidden');
          sunIcon.classList.add('hidden');
        }
      }
    });
  }

  // Render courses function
  function renderCourses(page = 1, append = false) {
    const start = (page - 1) * COURSES_PER_PAGE;
    const end = start + COURSES_PER_PAGE;
    const pageCourses = filteredCourses.slice(start, end);

    if (!append) coursesGrid.innerHTML = '';

    pageCourses.forEach((course, idx) => {
      const card = document.createElement('div');
      card.className = 'course-card group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp';
      card.style.animationDelay = `${idx * 0.1}s`;
      
      card.innerHTML = `
        <div class="relative overflow-hidden">
          <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 text-center">
          <span class="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            ${course.department}
          </span>
          <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100 line-clamp-2">${course.title}</h3>
          <a href="${course.link}" class="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
            <i class="fas fa-arrow-right mr-2"></i>
            Explore Course
          </a>
        </div>
      `;
      
      coursesGrid.appendChild(card);
    });

    // Update load more button visibility
    if (end >= filteredCourses.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-flex';
    }
  }

  // Filter and search functionality
  function applyFilters() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedDept = filterSelect.value;
    
    filteredCourses = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm);
      const matchesDept = !selectedDept || course.department === selectedDept;
      return matchesSearch && matchesDept;
    });
    
    currentPage = 1;
    renderCourses(currentPage);
  }

  // Event listeners
  searchInput.addEventListener('input', applyFilters);
  filterSelect.addEventListener('change', applyFilters);
  
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', applyFilters);
  }

  loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    renderCourses(currentPage, true);
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
        mobileMenu.classList.add('animate__animated', 'animate__fadeInDown');
      } else {
        mobileMenu.style.display = 'none';
      }
    });
  }

  // Initialize
  initDarkMode();
  renderCourses();
});