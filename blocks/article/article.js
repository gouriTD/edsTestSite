import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const articleData = block.querySelector(':scope > div > div');
  const imageElement = articleData.querySelector('picture');
  const textElement = articleData.querySelector('[data-align="justify"]');

  const imgSrc = imageElement.querySelector('img').src;
  const imgAlt = imageElement.querySelector('img').alt;
  const optimizedPicture = createOptimizedPicture(imgSrc, imgAlt);

  const featuredText = textElement.querySelector('p strong').textContent;
  const titleText = textElement.querySelector('h2').textContent;
  const descriptionText = textElement.querySelector('p').nextElementSibling.textContent;
  const articleLink = textElement.querySelector('a').href;

  block.innerHTML = `
    <div class="article-content">
      <div class="article-image">${optimizedPicture.outerHTML}</div>
      <div class="article-text">
        <h4>${featuredText}</h4>
        <h2>${titleText}</h2>
        <p>${descriptionText}</p>
        <a class="button" href="${articleLink}">READ MORE</a>
      </div>
    </div>
  `;
}
