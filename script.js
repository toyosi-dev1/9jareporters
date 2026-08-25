// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => siteNav.classList.toggle('open'));
}

// ticker content — duplicated once for a seamless loop
const tickerItems = [
  'Merchandiser · FMCG Distribution Co. · Lagos',
  'Regional Sales Manager · FMCG Group Nigeria · Lagos',
  'Sales Representative · Consumer Goods Ltd. · Lagos',
  'Supply Chain Assistant · National Logistics Co. · Port Harcourt',
  'Remote Content Marketing Specialist · Digital Media Studio · Remote',
  'Supply Chain Manager · National Logistics Co. · Abuja',
];
const ticker = document.getElementById('ticker');
if (ticker) {
  const build = () => tickerItems.map(t => {
    const [role, ...rest] = t.split(' · ');
    return `<span><b>${role}</b> · ${rest.join(' · ')}</span>`;
  }).join('');
  ticker.innerHTML = build() + build(); // duplicate for the CSS loop
}

// category pill filtering
const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.job-card');
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const filter = pill.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// simple search — scrolls to jobs and filters by text match
const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
    if (!q) return;
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
    pills.forEach(p => p.classList.remove('active'));
  });
}
