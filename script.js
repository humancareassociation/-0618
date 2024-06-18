window.addEventListener('load', function() {
    document.getElementById('loading-screen').style.display = 'none';
});

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  function smoothScrollToCenter(element, duration) {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - (window.innerHeight / 2) + (element.offsetHeight / 2);
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    requestAnimationFrame(animation);
  }
  
  function smoothScrollToTop(element, duration) {
    const targetPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    requestAnimationFrame(animation);
  }

  document.querySelectorAll('a[href^="#news"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // 画面の真ん中にセクションが来るようにスクロール
      smoothScrollToCenter(targetElement, 1000); // 1000ミリ秒（1秒）のスクロール時間
  
      // または、画面の一番上にセクションの一番上が来るようにスクロール
      // smoothScrollToTop(targetElement, 1000); // 1000ミリ秒（1秒）のスクロール時間
    });
  });

  document.querySelectorAll('a[href^="#blog"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // 画面の真ん中にセクションが来るようにスクロール
      // smoothScrollToCenter(targetElement, 1000); // 1000ミリ秒（1秒）のスクロール時間
  
      // または、画面の一番上にセクションの一番上が来るようにスクロール
       smoothScrollToTop(targetElement, 1000); // 1000ミリ秒（1秒）のスクロール時間
    });
  });
  
  document.querySelectorAll('a[href^="#access"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // 画面の真ん中にセクションが来るようにスクロール
      // smoothScrollToCenter(targetElement, 1000); // 1000ミリ秒（1秒）のスクロール時間
  
      // または、画面の一番上にセクションの一番上が来るようにスクロール
       smoothScrollToTop(targetElement, 1000); // 1000ミリ秒（1秒）のスクロール時間
    });
  });

// すべてのセクションを選択
const sections = document.querySelectorAll('section');

// Intersection Observerのコールバック関数
const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 要素がビューポートに500px入ったとき
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      // 一度フェードインしたら、その要素を監視から外す
      observer.unobserve(entry.target);
    }
  });
}, {
  // オプションを設定
  root: null, // ビューポートをルートとする
  rootMargin: '-300px 0px 0px 0px', // ビューポートの上辺から500px内側をトリガーとする
  threshold: 0.2 // 10%の要素が見えたらトリガー
});

// 各セクションを監視対象に追加
sections.forEach(section => {
  fadeInObserver.observe(section);
});


 //ハンバーガーメニューの操作
 document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navUL = document.querySelector('nav ul');
  const body = document.body;

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navUL.style.display = navUL.style.display === 'block' ? 'none' : 'block';

    // ハンバーガーメニューが開いている場合はスクロールを禁止
    if (hamburger.classList.contains('open')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  });
});
