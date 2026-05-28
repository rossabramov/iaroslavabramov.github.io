const pages = ['home', 'athletics', 'triathlon', 'swim', 'run', 'academic'];

const navMap = {
  home: 'nav-home',
  athletics: 'nav-athletics',
  triathlon: 'nav-athletics',
  swim: 'nav-athletics',
  run: 'nav-athletics',
  academic: 'nav-academic'
};

function showPage(id) {
  // Hide all pages
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
  });

  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Show selected page
  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');

  // Update nav link active state
  const navId = navMap[id];
  const navEl = navId ? document.getElementById(navId) : null;
  if (navEl) navEl.classList.add('active');

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
