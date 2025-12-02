
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        mawBlue: '#1e40af',
                        mawRed: '#dc2626',
                        mawDark: '#0f172a',
                    }
                }
            }
        }
 // Initialize Lucide Icons
        lucide.createIcons();

        // ----------------------------------------------------
        // NAVIGATION LOGIC (Simulating Multi-Page)
        // ----------------------------------------------------
        function navigateTo(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId + '-page');
            if (selectedPage) {
                selectedPage.classList.add('active');
                window.scrollTo(0, 0); // Scroll to top
            }

            // Mobile menu close after click
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.remove('open');
            
            // Re-trigger animations for the new page
            triggerScrollAnimations();
        }

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // ----------------------------------------------------
        // FORM HANDLING
        // ----------------------------------------------------
        function submitForm(e) {
            e.preventDefault();
            
            // Show loading state (simulated)
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader" class="animate-spin w-4 h-4"></i> ပေးပို့နေပါသည်...';
            lucide.createIcons();

            setTimeout(() => {
                alert('ကျေးဇူးတင်ပါသည်။ သင့်စာကို လက်ခံရရှိပါသည်။ မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။');
                e.target.reset();
                btn.innerHTML = originalText;
                lucide.createIcons();
            }, 1500);
        }

        // ----------------------------------------------------
        // SCROLL ANIMATIONS
        // ----------------------------------------------------
        function triggerScrollAnimations() {
            const elements = document.querySelectorAll('.fade-up');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
        }

        // Run animations on load
        document.addEventListener('DOMContentLoaded', () => {
            triggerScrollAnimations();
        });