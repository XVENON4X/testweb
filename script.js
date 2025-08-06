// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

// Simple Bio Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Fun fact easter egg
    const funFact = document.querySelector('.bio-fun-fact p');
    if (funFact) {
        let clickCount = 0;
        funFact.addEventListener('click', function() {
            clickCount++;
            const facts = [
                "💡 <em>Fun fact:</em> Mój kod kompiluje się za pierwszym razem w 73% przypadków",
                "🎮 <em>Fun fact:</em> Gram w CS2 i zawsze gram support (ale tylko czasami)",
                "☕ <em>Fun fact:</em> Wypijam około 4 kawy dziennie (to mało jak na programistę)",
                "🐛 <em>Fun fact:</em> Większość moich bugów znajduję pod prysznicem",
                "🎯 <em>Fun fact:</em> Mój ulubiony język to ten, w którym akurat nie piszę",
                "🌮 <em>Fun fact:</em> Kocham tacos bardziej niż pizza (kontrowersyjne!)"
            ];
            
            this.innerHTML = facts[clickCount % facts.length];
            
            // Add a little animation
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Interest tags hover effect with random colors
    const interestTags = document.querySelectorAll('.interest-tag');
    const colors = ['#6366f1', '#8b5cf6', '#f97316', '#10b981', '#ef4444', '#f59e0b'];
    
    interestTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
            this.style.borderColor = randomColor;
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.borderColor = '';
        });
    });
    
    // Bio links click feedback
    const bioLinks = document.querySelectorAll('.bio-link');
    bioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // For mailto links, show a nice message
            if (this.href.startsWith('mailto:')) {
                e.preventDefault();
                showNotification('📧 Otwieranie klienta email...', 'info');
                setTimeout(() => {
                    window.location.href = this.href;
                }, 500);
            }
        });
    });
    
    // Avatar click easter egg
    const avatar = document.querySelector('.avatar-circle');
    if (avatar) {
        let avatarClickCount = 0;
        const emojis = ['🧑‍💻', '😎', '🤓', '😴', '🤔', '😄', '🥳'];
        
        avatar.addEventListener('click', function() {
            avatarClickCount++;
            const avatarEmoji = this.querySelector('.avatar-emoji');
            avatarEmoji.textContent = emojis[avatarClickCount % emojis.length];
            
            // Spin animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
        });
    }
    
    // Konami code easter egg (up, up, down, down, left, right, left, right, b, a)
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showNotification('🎉 Konami Code activated! You found the secret!', 'success');
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });
    
    // Smooth scroll for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '12px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    // Set background color based on type
    const colors = {
        info: '#6366f1',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    25% { filter: hue-rotate(90deg); }
    50% { filter: hue-rotate(180deg); }
    75% { filter: hue-rotate(270deg); }
    100% { filter: hue-rotate(360deg); }
}
`;
document.head.appendChild(style);    // Animated counter for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
            const suffix = target.replace(/[\d,+]/g, '');
            
            if (numericTarget) {
                let current = 0;
                const increment = numericTarget / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericTarget) {
                        current = numericTarget;
                        clearInterval(timer);
                    }
                    
                    // Format number with commas
                    const formattedNumber = Math.floor(current).toLocaleString();
                    counter.textContent = formattedNumber + suffix;
                }, 20);
            }
        });
    }

    // Intersection Observer for counter animation
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-8px)';
        });
    });

    // Skill tags interaction
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const technology = this.textContent;
            showNotification(`Interesujesz się ${technology}? Napisz do mnie!`, 'success');
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '16px 24px',
            backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1',
            color: 'white',
            borderRadius: '8px',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(15, 15, 35, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(15, 15, 35, 0.95)';
        }
    });

    // Tech stack hover effects
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px) scale(1)';
        });
    });

    // Easter egg for backend developers
    let konamiCode = [];
    const devSequence = [74, 65, 86, 65]; // JAVA keycode sequence
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        
        if (konamiCode.length > devSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === devSequence.length && 
            konamiCode.every((key, index) => key === devSequence[index])) {
            showNotification('🎉 JAVA developer spotted! Coffee time? ☕', 'success');
            konamiCode = [];
        }
    });

    // Console welcome message
    console.log(`
    ╔══════════════════════════════════════════════╗
    ║              Maksymilian                     ║
    ║          Backend Developer                   ║
    ║                                              ║
    ║  ☕ Java    🐹 Golang    🐍 Python          ║
    ║                                              ║
    ║  💼 Available for interesting projects!      ║
    ╚══════════════════════════════════════════════╝
    `);
    
    console.log('🚀 Portfolio initialized successfully!');
    console.log('💡 Tip: Type "JAVA" for a surprise!');
    console.log('📧 Contact: makss@example.com');
});

// Admin panel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Title animation
    animateTitle();
    
    // Request counter
    initRequestCounter();
    
    // Admin panel elements
    const adminPanel = document.getElementById('admin-panel');
    const adminToggle = document.getElementById('admin-toggle');
    const funFactInput = document.getElementById('fun-fact-input');
    const funFactContent = document.getElementById('fun-fact-content');
    const saveBtn = document.getElementById('save-changes');
    const cancelBtn = document.getElementById('cancel-changes');
    
    let isAdminMode = false;
    let keySequence = [];
    const adminSequence = ['a', 'd', 'm', 'i', 'n']; // Sekwencja klawiszy do aktywacji trybu admin
    
    // Load saved fun fact from localStorage
    loadSavedContent();
    
    // Key sequence detection for admin mode
    document.addEventListener('keydown', function(e) {
        keySequence.push(e.key.toLowerCase());
        
        // Keep only last 5 keys
        if (keySequence.length > adminSequence.length) {
            keySequence.shift();
        }
        
        // Check if admin sequence was entered
        if (keySequence.join('') === adminSequence.join('')) {
            toggleAdminMode();
            keySequence = []; // Reset sequence
        }
    });
    
    // Admin toggle button click
    adminToggle.addEventListener('click', function() {
        openAdminPanel();
    });
    
    // Save changes
    saveBtn.addEventListener('click', function() {
        const newContent = funFactInput.value.trim();
        if (newContent) {
            funFactContent.textContent = newContent;
            localStorage.setItem('funFactContent', newContent);
            closeAdminPanel();
        }
    });
    
    // Cancel changes
    cancelBtn.addEventListener('click', function() {
        closeAdminPanel();
    });
    
    // Close admin panel on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !adminPanel.classList.contains('hidden')) {
            closeAdminPanel();
        }
    });
    
    // Close admin panel on backdrop click
    adminPanel.addEventListener('click', function(e) {
        if (e.target === adminPanel) {
            closeAdminPanel();
        }
    });
    
    function toggleAdminMode() {
        isAdminMode = !isAdminMode;
        if (isAdminMode) {
            document.body.classList.add('admin-mode');
            adminToggle.classList.remove('hidden');
            console.log('🔧 Tryb administratora aktywowany');
        } else {
            document.body.classList.remove('admin-mode');
            adminToggle.classList.add('hidden');
            console.log('👤 Tryb administratora dezaktywowany');
        }
    }
    
    function openAdminPanel() {
        funFactInput.value = funFactContent.textContent;
        adminPanel.classList.remove('hidden');
        funFactInput.focus();
    }
    
    function closeAdminPanel() {
        adminPanel.classList.add('hidden');
        funFactInput.value = '';
    }
    
    function loadSavedContent() {
        const savedFunFact = localStorage.getItem('funFactContent');
        if (savedFunFact) {
            funFactContent.textContent = savedFunFact;
        }
    }
    
    function animateTitle() {
        const targetTitle = 'hdmain kurwo';
        let currentTitle = '';
        let index = 0;
        
        const titleInterval = setInterval(() => {
            if (index < targetTitle.length) {
                currentTitle += targetTitle[index];
                document.title = currentTitle;
                index++;
            } else {
                clearInterval(titleInterval);
            }
        }, 300); // 300ms delay between each letter
    }
    
    function initRequestCounter() {
        const requestCounter = document.getElementById('request-counter');
        let totalRequests = parseInt(localStorage.getItem('totalRequests') || '0');
        let todayRequests = parseInt(localStorage.getItem('todayRequests') || '0');
        let lastVisitDate = localStorage.getItem('lastVisitDate');
        const today = new Date().toDateString();
        
        // Reset daily counter if it's a new day
        if (lastVisitDate !== today) {
            todayRequests = 0;
            localStorage.setItem('lastVisitDate', today);
        }
        
        // Increment counters for this page visit
        totalRequests += 1;
        todayRequests += 1;
        
        // Save to localStorage
        localStorage.setItem('totalRequests', totalRequests.toString());
        localStorage.setItem('todayRequests', todayRequests.toString());
        
        // Update display
        function updateRequestDisplay() {
            requestCounter.textContent = `total requests: ${totalRequests} | today: ${todayRequests}`;
        }
        
        // Initial display
        updateRequestDisplay();
        
        // Track visibility changes (tab switching)
        let isVisible = !document.hidden;
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && !isVisible) {
                // Page became visible again - count as new request
                totalRequests += 1;
                todayRequests += 1;
                localStorage.setItem('totalRequests', totalRequests.toString());
                localStorage.setItem('todayRequests', todayRequests.toString());
                updateRequestDisplay();
                isVisible = true;
            } else if (document.hidden) {
                isVisible = false;
            }
        });
        
        // Track focus events (returning to tab)
        let lastFocusTime = Date.now();
        window.addEventListener('focus', function() {
            const now = Date.now();
            // Only count if user was away for more than 30 seconds
            if (now - lastFocusTime > 30000) {
                totalRequests += 1;
                todayRequests += 1;
                localStorage.setItem('totalRequests', totalRequests.toString());
                localStorage.setItem('todayRequests', todayRequests.toString());
                updateRequestDisplay();
            }
            lastFocusTime = now;
        });
        
        window.addEventListener('blur', function() {
            lastFocusTime = Date.now();
        });
    }
});
