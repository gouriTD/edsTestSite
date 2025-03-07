function decorateBanner(el) {
    const bannerContent = el.querySelectorAll(':scope > div:nth-child(odd)');
    
    bannerContent.forEach((item, index) => {
      // Add a class to the item container
      item.classList.add('banner-item');
      // Remove the empty div
      item.querySelector(':scope > div:nth-child(odd)').classList.add('banner-picture');
      // Add a class to the content
      item.querySelector(':scope > div:nth-child(even)').classList.add('banner-content');
    });
  }
  
  const bannerEls = document.querySelectorAll('.banner');
  bannerEls.forEach((el) => {
    decorateBanner(el);
  });