import { fetchPlaceholders } from "../../scripts/aem.js"
async function decorateBanner(el) {
    const { clickHere } = await fetchPlaceholders('en');
    const bannerContent = el.querySelectorAll(':scope > div:nth-child(odd)');
    
    bannerContent.forEach((item, index) => {
      // Add a class to the item container
      item.classList.add('banner-item');
      // Remove the empty div
      item.querySelector(':scope > div:nth-child(odd)').classList.add('banner-picture');
      // Add a class to the content
      item.querySelector(':scope > div:nth-child(even)').classList.add('banner-content');

      // Add a dummy button with click me value
      const bContent = document.querySelector('.banner-content');
      const buttonEl = document.createElement('a');
      buttonEl.setAttribute('href','/safari-details');
      buttonEl.innerHTML = `<button>${clickHere}</button>`;
      bContent.append(buttonEl);
    });
  }
  
  const bannerEls = document.querySelectorAll('.banner');
  bannerEls.forEach((el) => {
    decorateBanner(el);
  });