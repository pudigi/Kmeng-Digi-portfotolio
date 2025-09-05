document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Service item click to expand
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't toggle if a link inside the item was clicked
            if (e.target.tagName === 'A') return;

            const details = item.querySelector('.service-details');
            const isActive = item.classList.contains('active');

            // Close all other items
            serviceItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.service-details').style.display = 'none';
            });

            // Open the clicked one if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                details.style.display = 'block';
            }
        });
    });

    // FAQ item click to expand
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('h4');
        header.addEventListener('click', () => {
            const answer = item.querySelector('p');
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('p').style.display = 'none';
            });

            // Open the clicked one
            if (!isActive) {
                item.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });

    // Typing effect for hero headline
    const headline = document.getElementById('hero-headline');
    if (headline) {
        const text = headline.textContent;
        headline.innerHTML = ''; // Clear original text
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                headline.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Adjust typing speed here
            } else {
                headline.innerHTML += '<span class="typing-cursor"></span>';
            }
        }
        typeWriter();
    }

    // Reveal sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form validation
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            let isValid = true;

            if (name.value.trim() === '') {
                alert('Please enter your name.');
                isValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
                alert('Please enter a valid email address.');
                isValid = false;
            } else if (message.value.trim() === '') {
                alert('Please enter a message.');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault(); // Stop form submission
            } else {
                // For demo purposes, prevent actual submission and show a success message
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }
        });
    }
});
