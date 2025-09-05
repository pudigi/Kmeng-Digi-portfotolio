document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.service-details');
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });

    const faqItems = document.querySelectorAll('#faq h4');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
