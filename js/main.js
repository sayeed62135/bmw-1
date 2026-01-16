// BMW Executive Motors - Main JavaScript

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializeWebsite();
});

// BMW Models Data
const BMW_MODELS = [
    {
        id: 1,
        name: 'BMW 3 Series Sedan',
        type: 'Plug-in Hybrid',
        category: 'hybrid',
        image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/demo/1733137476XwDBI.webp',
        link: 'https://www.bmw.com.bd/models/bmw-3-series-sedan-overview/'
    },
    {
        id: 2,
        name: 'BMW i5',
        type: 'Full-Electric',
        category: 'electric',
        image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-i5/17331435906GDCI.png',
        link: 'https://www.bmw.com.bd/models/bmw-i5/'
    },
    {
        id: 3,
        name: 'BMW 7 Series Sedan',
        type: 'Petrol',
        category: 'petrol',
        image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw7-series-sedan/17331386569UqDM.webp',
        link: 'https://www.bmw.com.bd/models/bmw-7-series-sedan-highlights/'
    },
    {
        id: 4,
        name: 'BMW i7',
        type: 'Full-Electric',
        category: 'electric',
        image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-i7/1733142051A58xU.webp',
        link: 'https://www.bmw.com.bd/models/the-new-i7'
    },
    {
        id: 5,
        name: 'BMW X1',
        type: 'Petrol',
        category: 'petrol',
        image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-x1/1733141628tFgau.webp',
        link: 'https://www.bmw.com.bd/models/the-new-x1/'
    },
    {
        id: 6,
        name: 'BMW iX3',
        type: 'Full-Electric',
        category: 'electric',
        image: 'https://cms.meghna-executive.com/admin/uploads/brandproduct/bmw-ix31/1733142454kqXfn.webp',
        link: 'https://www.bmw.com.bd/models/bmw-ix3-highlights/'
    }
];

// Initialize Website Functions
function initializeWebsite() {
    initNavbar();
    initMenu();
    initFeatureSlider();
    initCarGrid();
    initContactForm();
    initAIAssistant();
    initSmoothScroll();
}

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('navLogo');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-white', 'shadow-[0_4px_30px_rgba(0,0,0,0.05)]');
            navLogo.src = 'https://meghna-executive.com/images/static/logo-v2.svg';
            
            // Change text colors
            document.querySelectorAll('#navbar .text-white').forEach(el => {
                el.classList.remove('text-white');
                el.classList.add('text-black');
            });
            document.querySelectorAll('#navbar .bg-white').forEach(el => {
                if (!el.classList.contains('border')) {
                    el.classList.remove('bg-white');
                    el.classList.add('bg-black');
                }
            });
            document.querySelectorAll('#navbar .border-white').forEach(el => {
                el.classList.remove('border-white');
                el.classList.add('border-black');
            });
        } else {
            navbar.classList.remove('navbar-scrolled', 'bg-white', 'shadow-[0_4px_30px_rgba(0,0,0,0.05)]');
            navbar.classList.add('bg-transparent');
            navLogo.src = 'https://meghna-executive.com/images/static/logo.svg';
            
            // Revert text colors
            document.querySelectorAll('#navbar .text-black').forEach(el => {
                if (!el.closest('.bg-white')) {
                    el.classList.remove('text-black');
                    el.classList.add('text-white');
                }
            });
        }
    });
}

// Menu Toggle
function initMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const menuBtnMobile = document.getElementById('menuBtnMobile');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const slideMenu = document.getElementById('slideMenu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    const openMenu = () => {
        slideMenu.classList.add('menu-open');
        slideMenu.classList.remove('-translate-x-full');
        document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
        slideMenu.classList.remove('menu-open');
        slideMenu.classList.add('-translate-x-full');
        document.body.style.overflow = '';
    };
    
    menuBtn.addEventListener('click', openMenu);
    menuBtnMobile.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Feature Slider
function initFeatureSlider() {
    const container = document.getElementById('featureContainer');
    const dots = document.querySelectorAll('.feature-dot');
    const progress = document.getElementById('featureProgress');
    const totalFeatures = 4;
    let activeIndex = 0;
    
    // Wheel scroll
    container.addEventListener('wheel', (e) => {
        const delta = e.deltaY || e.deltaX;
        const isScrollingDown = delta > 0;
        const isScrollingUp = delta < 0;
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const atStart = scrollLeft <= 5;
        const atEnd = scrollLeft >= maxScroll - 5;
        
        if ((isScrollingDown && !atEnd) || (isScrollingUp && !atStart)) {
            e.preventDefault();
            container.scrollLeft += delta;
        }
    }, { passive: false });
    
    // Update active state on scroll
    container.addEventListener('scroll', () => {
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.scrollWidth / totalFeatures;
        const currentIdx = Math.round(scrollLeft / itemWidth);
        
        if (currentIdx !== activeIndex) {
            activeIndex = currentIdx;
            updateFeatureDots(currentIdx);
            updateProgress(currentIdx);
        }
    });
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            scrollToFeature(index);
        });
    });
    
    function scrollToFeature(index) {
        const itemWidth = container.scrollWidth / totalFeatures;
        container.scrollTo({
            left: itemWidth * index,
            behavior: 'smooth'
        });
    }
    
    function updateFeatureDots(index) {
        dots.forEach((dot, i) => {
            const line = dot.querySelector('div');
            const span = dot.querySelector('span');
            
            if (i === index) {
                line.classList.remove('w-4', 'bg-white/10');
                line.classList.add('w-8', 'bg-white');
                if (!span) {
                    const newSpan = document.createElement('span');
                    newSpan.className = 'text-[10px] font-bold text-white tracking-widest';
                    newSpan.textContent = '0' + (i + 1);
                    dot.appendChild(newSpan);
                }
            } else {
                line.classList.remove('w-8', 'bg-white');
                line.classList.add('w-4', 'bg-white/10');
                if (span) span.remove();
            }
        });
    }
    
    function updateProgress(index) {
        const percentage = ((index + 1) / totalFeatures) * 100;
        progress.style.width = percentage + '%';
    }
}

// Car Grid with Filtering
function initCarGrid() {
    const carGrid = document.getElementById('carGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Render all cars initially
    renderCars('all');
    
    // Filter button click handlers
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('bg-black', 'text-white', 'filter-active');
            });
            btn.classList.add('bg-black', 'text-white', 'filter-active');
            
            // Filter and render cars
            renderCars(filter);
        });
    });
    
    function renderCars(filter) {
        const filteredCars = filter === 'all' 
            ? BMW_MODELS 
            : BMW_MODELS.filter(car => car.category === filter);
        
        carGrid.innerHTML = filteredCars.map(car => `
            <a href="${car.link}" target="_blank" class="group block car-card">
                <div class="aspect-[16/10] overflow-hidden bg-white flex items-center justify-center p-8 mb-8 transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <img src="${car.image}" alt="${car.name}" class="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110">
                </div>
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <span class="text-black/40 text-[9px] font-bold tracking-[0.3em] uppercase">${car.type}</span>
                        <div class="w-10 h-[1px] bg-black/10 group-hover:bg-black/40 transition-colors"></div>
                    </div>
                    <h4 class="text-black text-2xl font-bold tracking-tight group-hover:text-blue-900 transition-colors">
                        ${car.name}
                    </h4>
                    <div class="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                        <span>Explore Now</span>
                        <span class="w-12 h-[1px] bg-black"></span>
                    </div>
                </div>
            </a>
        `).join('');
    }
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you! Our concierge will contact you shortly.');
        
        // Reset form
        form.reset();
    });
}

// AI Assistant
function initAIAssistant() {
    const launcher = document.getElementById('aiLauncher');
    const aiWindow = document.getElementById('aiWindow');
    const aiInput = document.getElementById('aiInput');
    const aiSend = document.getElementById('aiSend');
    const aiMessages = document.getElementById('aiMessages');
    let isOpen = false;
    
    // Toggle AI window
    launcher.addEventListener('click', () => {
        isOpen = !isOpen;
        
        if (isOpen) {
            aiWindow.classList.remove('hidden');
            aiWindow.classList.add('flex');
            launcher.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            launcher.classList.add('bg-white', 'text-black');
            launcher.classList.remove('bg-[#191D1C]', 'text-white');
        } else {
            aiWindow.classList.add('hidden');
            aiWindow.classList.remove('flex');
            launcher.innerHTML = '<div class="relative"><i data-lucide="message-square" class="w-6 h-6"></i><span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-600 border-2 border-[#191D1C] rounded-full animate-pulse"></span></div>';
            launcher.classList.remove('bg-white', 'text-black');
            launcher.classList.add('bg-[#191D1C]', 'text-white');
        }
        
        lucide.createIcons();
    });
    
    // Send message
    const sendMessage = () => {
        const message = aiInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        aiInput.value = '';
        
        // Show typing indicator
        showTyping();
        
        // Simulate AI response
        setTimeout(() => {
            hideTyping();
            const response = getAIResponse(message);
            addMessage(response, 'bot');
        }, 1500);
    };
    
    aiSend.addEventListener('click', sendMessage);
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    function addMessage(text, role) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'} chat-message-enter`;
        
        messageDiv.innerHTML = `
            <div class="max-w-[85%] p-5 text-sm leading-relaxed shadow-sm ${
                role === 'user' 
                ? 'bg-[#191D1C] text-white' 
                : 'bg-white text-black border border-black/5'
            }">
                ${text}
            </div>
        `;
        
        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'flex justify-start';
        typingDiv.innerHTML = `
            <div class="bg-white p-5 border border-black/5 flex gap-2 typing-indicator">
                <span class="w-1.5 h-1.5 bg-black/20 rounded-full"></span>
                <span class="w-1.5 h-1.5 bg-black/20 rounded-full"></span>
                <span class="w-1.5 h-1.5 bg-black/20 rounded-full"></span>
            </div>
        `;
        aiMessages.appendChild(typingDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    function hideTyping() {
        const typingDiv = document.getElementById('typing-indicator');
        if (typingDiv) typingDiv.remove();
    }
    
    function getAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return 'Our BMW models are competitively priced. For detailed pricing information, please contact our concierge at 16765 or visit our showroom at Meghna Tower.';
        } else if (lowerMessage.includes('test drive') || lowerMessage.includes('booking')) {
            return 'I would be delighted to arrange a test drive for you. Please provide your preferred date and contact number, or call our concierge directly at 16765.';
        } else if (lowerMessage.includes('electric') || lowerMessage.includes('i5') || lowerMessage.includes('i7')) {
            return 'Our electric BMW i series represents the future of luxury mobility. The i5 and i7 offer exceptional range and performance. Would you like to schedule a consultation?';
        } else if (lowerMessage.includes('service') || lowerMessage.includes('maintenance')) {
            return 'Executive Motors Ltd provides comprehensive after-sales service at our state-of-the-art facility. Our certified technicians ensure your BMW receives the finest care.';
        } else if (lowerMessage.includes('location') || lowerMessage.includes('showroom') || lowerMessage.includes('address')) {
            return 'Our Retail.Next showroom is located at 187-188 B, Forum Meghna Tower, Bir Uttam Mir Shawkat Sarak, Tejgaon-Gulshan Link Road, Dhaka, Bangladesh.';
        } else {
            return 'Thank you for your inquiry. For specific information about our BMW models and services, please contact our concierge at 16765 or visit bmw.com.bd. How else may I assist you?';
        }
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy Load Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-image');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
// lazyLoadImages();

// Performance: Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'https://meghna-executive.com/images/static/logo.svg',
        'https://meghna-executive.com/images/static/logo-v2.svg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

preloadCriticalResources();
