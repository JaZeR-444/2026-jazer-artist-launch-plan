/**
 * JaZeR Premium UI System (Enhanced Edition)
 * Includes: Vibe Orb Cursor, Magnetic Buttons, Seamless Page Transitions
 * Enhanced: Smooth Scrolling, Toast Notifications, Keyboard Shortcuts, Theme Toggle
 */

// Initialize GSAP Physics
const initPremiumUI = () => {
    console.log('✨ Initializing JaZeR Premium Flow (Enhanced)...');

    const cursor = document.querySelector('.cursor');
    const transitionOverlay = document.querySelector('.transition-overlay');

    // ============================================
    // 1. Vibe Orb Cursor
    // ============================================
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth physics loop (approx 60fps)
        gsap.ticker.add(() => {
            const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
            cursorX += (mouseX - cursorX) * dt;
            cursorY += (mouseY - cursorY) * dt;
            gsap.set(cursor, { x: cursorX, y: cursorY });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseout', (e) => {
            if (!e.relatedTarget && !e.toElement) {
                gsap.to(cursor, { opacity: 0, duration: 0.3 });
            }
        });
        document.addEventListener('mouseover', () => {
            gsap.to(cursor, { opacity: 1, duration: 0.3 });
        });

        // Click interaction
        document.addEventListener('mousedown', () => gsap.to(cursor, { scale: 0.8, duration: 0.1 }));
        document.addEventListener('mouseup', () => gsap.to(cursor, { scale: 1, duration: 0.1 }));
    }

    // ============================================
    // 2. Magnetic Buttons
    // ============================================
    const magnets = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-link, .module-card, button, a.premium-card');
    
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', (e) => {
            const rect = magnet.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Strength of magnet (0.3 = 30% movement)
            const strength = 0.3;
            
            gsap.to(magnet, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: 'power2.out'
            });

            // Scale cursor while computing magnet
            if (cursor) gsap.to(cursor, { scale: 3, duration: 0.3 });
        });

        magnet.addEventListener('mouseleave', () => {
            gsap.to(magnet, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)'
            });
            if (cursor) gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });

    // ============================================
    // 3. Seamless Transitions (Leave/Enter)
    // ============================================
    
    // A. Enter Animation (Fade Out Overlay)
    if (transitionOverlay) {
        gsap.to(transitionOverlay, { opacity: 0, duration: 0.8, ease: 'power2.inOut', onComplete: () => {
            transitionOverlay.style.display = 'none';
        }});
    }

    // B. Leave Animation (Intercept Links)
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only intercept internal links
            if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) {
                e.preventDefault();
                
                if (transitionOverlay) {
                    transitionOverlay.style.display = 'block';
                    gsap.to(transitionOverlay, { 
                        opacity: 1, 
                        duration: 0.6, 
                        ease: 'power2.inOut',
                        onComplete: () => {
                            window.location.href = href;
                        }
                    });
                } else {
                    window.location.href = href;
                }
            }
        });
    });

    // ============================================
    // 4. 3D Card Tilt Effect
    // ============================================
    document.querySelectorAll('.premium-card, .glass, .card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(card, {
                rotateY: x * 0.03,
                rotateX: -y * 0.03,
                duration: 0.4,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        });
    });

    // ============================================
    // 5. Active State Persistence
    // ============================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-cyan-400', 'font-bold');
            // If it's a module card we don't highlight it generally, just nav
        }
    });



    // ============================================
    // 6. Counter Animation (Stats)
    // ============================================
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const suffix = stat.getAttribute('data-suffix') || '';
        const prefix = ''; 
        
        if (target) {
            ScrollTrigger.create({
                trigger: stat,
                start: 'top 95%', // Trigger earlier (was 85%)
                once: true,
                onEnter: () => {
                    gsap.to(stat, {
                        innerHTML: target,
                        duration: 2.5,
                        ease: 'power2.out',
                        snap: { innerHTML: 1 },
                        onUpdate: function() {
                            stat.innerHTML = prefix + Math.ceil(this.targets()[0].innerHTML) + suffix;
                        }
                    });
                }
            });
        }
    });

    // ============================================
    // 7. Toast Notification System
    // ============================================
    window.showToast = (message, duration = 3000) => {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    };

    // ============================================
    // 8. Scroll Progress Indicator
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #06d6a0, #a3ff12, #c77dff);
        z-index: 10001;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
        box-shadow: 0 0 10px rgba(6, 214, 160, 0.5);
    `;
    document.body.appendChild(progressBar);

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        progressBar.style.transform = `scaleX(${scrollPercent})`;
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // ============================================
    // 9. Keyboard Shortcuts
    // ============================================
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for command palette (if exists)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const commandPalette = document.getElementById('commandPalette');
            if (commandPalette) {
                commandPalette.classList.toggle('active');
                const input = commandPalette.querySelector('input');
                if (input) input.focus();
            }
        }
        
        // Escape key to close modals/palettes
        if (e.key === 'Escape') {
            document.querySelectorAll('.command-palette, .modal, #mobile-menu').forEach(el => {
                el.classList.remove('active', 'show');
                el.classList.add('hidden');
            });
        }
        
        // Arrow keys for navigation (on module pages)
        if (e.key === 'ArrowRight' && !e.target.matches('input, textarea')) {
            const nextBtn = document.querySelector('[data-nav="next"]');
            if (nextBtn) nextBtn.click();
        }
        if (e.key === 'ArrowLeft' && !e.target.matches('input, textarea')) {
            const prevBtn = document.querySelector('[data-nav="prev"]');
            if (prevBtn) prevBtn.click();
        }
    });

    // ============================================
    // 10. Smooth Scroll Navigation Enhancement
    // ============================================
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });

    // ============================================
    // 11. Enhanced Nav on Scroll
    // ============================================
    let lastScroll = 0;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (nav) {
            if (currentScroll > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Auto-hide on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // ============================================
    // 12. Back to Top Button
    // ============================================
    const backToTop = document.createElement('button');
    backToTop.className = 'fab';
    backToTop.innerHTML = '↑';
    backToTop.title = 'Back to top';
    backToTop.setAttribute('aria-label', 'Scroll to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #06d6a0, #a3ff12);
        color: #0f172a;
        border: none;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 100;
        box-shadow: 0 8px 32px rgba(6, 214, 160, 0.4);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(100px)';
        }
    }, { passive: true });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============================================
    // 13. Copy to Clipboard Helper
    // ============================================
    window.copyToClipboard = async (text, successMessage = 'Copied to clipboard!') => {
        try {
            await navigator.clipboard.writeText(text);
            showToast(successMessage);
        } catch (err) {
            console.error('Failed to copy:', err);
            showToast('Failed to copy', 2000);
        }
    };

    // ============================================
    // 14. Enhanced Module Cards Click-to-Expand
    // ============================================
    document.querySelectorAll('.module-card').forEach(card => {
        const isAlreadyLinked = card.querySelector('a[href^="module-"]');
        if (!isAlreadyLinked) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                // Extract module number or navigate
                const moduleNum = this.querySelector('.badge')?.textContent.match(/\d+/)?.[0];
                if (moduleNum) {
                    window.location.href = `module-${moduleNum.padStart(2, '0')}.html`;
                }
            });
        }
    });

    // ============================================
    // 15. Lazy Load Images (if not using native)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // 16. Performance Monitoring
    // ============================================
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 100) {
                    console.warn('⚠️ Slow interaction detected:', entry.name, entry.duration);
                }
            }
        });
        
        try {
            perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
        } catch (e) {
            // Silently fail for browsers that don't support all entry types
        }
    }

    // ============================================
    // 17. Accessibility - Skip to Content Link
    // ============================================
    if (!document.querySelector('.skip-to-content')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-content';
        skipLink.textContent = 'Skip to main content';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Ensure main content has ID
        const mainContent = document.querySelector('main, section');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }

    // ============================================
    // 18. Auto-save Form Data (for dashboard inputs)
    // ============================================
    document.querySelectorAll('input[contenteditable], [contenteditable="true"]').forEach(input => {
        const saveKey = `jazer_autosave_${input.id || input.className}`;
        
        // Load saved value
        const savedValue = localStorage.getItem(saveKey);
        if (savedValue && !input.textContent) {
            input.textContent = savedValue;
        }
        
        // Auto-save on change
        input.addEventListener('blur', () => {
            localStorage.setItem(saveKey, input.textContent);
        });
    });

    console.log('✨ Premium Flow Loaded (Enhanced): ', currentPath);
    console.log('💡 Shortcuts: Ctrl+K (Command Palette) | Esc (Close) | ←→ (Navigate)');
};

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPremiumUI);
} else {
    initPremiumUI();
}
