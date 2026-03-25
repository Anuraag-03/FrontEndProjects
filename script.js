const search = document.getElementById('search');
const links = document.querySelectorAll('.project-link[href]');
const countEl = document.getElementById('visible-count');
const noResults = document.querySelector('.no-results');

search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    let visible = 0;

    links.forEach(link => {
        const name = link.textContent.trim().toLowerCase();
        const match = name.includes(q);
        link.classList.toggle('hidden', !match);
        if (match) visible++;
    });

    countEl.textContent = visible;
    noResults.classList.toggle('visible', visible === 0);
});
