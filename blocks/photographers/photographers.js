import { loadCSS } from '../../scripts/aem.js';

// Load the CSS for photographers block
loadCSS('/blocks/photographers/photographers.css');

async function fetchPhotographers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export default async function decorate(block) {
  const photographersList = await fetchPhotographers();

  const container = document.createElement('div');
  container.className = 'photographers-container';

  photographersList.forEach((photographer) => {
    const photographerCard = document.createElement('div');
    photographerCard.className = 'photographer-card';

    const name = document.createElement('h2');
    name.textContent = photographer.name;
    name.className = 'photographer-name';

    const email = document.createElement('p');
    email.textContent = photographer.email;
    email.className = 'photographer-email';

    const website = document.createElement('a');
    website.href = `http://${photographer.website}`;
    website.textContent = photographer.website;
    website.target = '_blank';
    website.rel = 'noopener noreferrer';
    website.className = 'photographer-website';

    photographerCard.append(name, email, website);
    container.append(photographerCard);
  });

  block.append(container);
}
