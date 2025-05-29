document.addEventListener('DOMContentLoaded', function() {
  const not3 = document.querySelector('.not-3');
  const articles = Array.from(not3.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;
  let interval;

  function showArticle(idx) {
    articles.forEach((art, i) => {
      art.classList.toggle('active', i === idx);
      art.style.opacity = i === idx ? '1' : '0';
      art.style.zIndex = i === idx ? '1' : '0';
      art.style.position = 'absolute';
      art.style.left = '0';
      art.style.top = '0';
      art.style.transition = 'opacity 0.5s';
      art.style.width = '100%';
    });
    current = idx;
  }

  function showNext() {
    showArticle((current + 1) % articles.length);
  }

  function showPrev() {
    showArticle((current - 1 + articles.length) % articles.length);
  }

  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Autoplay com pausa ao passar o mouse
  function startAuto() {
    interval = setInterval(showNext, 3000);
  }
  function stopAuto() {
    clearInterval(interval);
  }
  not3.parentElement.addEventListener('mouseenter', stopAuto);
  not3.parentElement.addEventListener('mouseleave', startAuto);

  // Inicialização
  showArticle(0);
  startAuto();
});