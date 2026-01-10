/**
 * JaZeR Premium UI System (Tier 1: The Flow)
 * Includes: Vibe Orb Cursor, Magnetic Buttons, Seamless Page Transitions
 */

// Initialize GSAP Physics
const initPremiumUI = () => {
    console.log('✨ Initializing JaZeR Premium Flow...');

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

    console.log('✨ Premium Flow Loaded: ', currentPath);
};

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPremiumUI);
} else {
    initPremiumUI();
}
