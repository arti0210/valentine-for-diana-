document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const mainScreen = document.getElementById('mainScreen');
  const yesScreen = document.getElementById('yesScreen');
  const heartsContainer = document.getElementById('hearts');
  const body = document.body;

  // 🌟 Создаём сердечки (обычные)
  function createHearts(count, isBig = false) {
    heartsContainer.innerHTML = ''; // очищаем
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'absolute';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = '-50px';
      heart.style.opacity = Math.random() * 0.7 + 0.3;
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
      heart.style.animationTimingFunction = 'linear';
      heart.style.animationIterationCount = 'infinite';

      if (isBig) {
        heart.style.fontSize = '48px'; // 3× от 16px (стандартного)
        heart.classList.add('big-heart');
        heart.style.animationName = 'fall-big';
      } else {
        heart.style.fontSize = Math.random() * 24 + 16 + 'px';
        heart.style.animationName = 'fall';
      }

      heartsContainer.appendChild(heart);
    }
  }

  // 🔁 Анимация падения (обычная)
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // ✅ Кнопка "ДА"
  yesBtn.addEventListener('click', () => {
    // 1. Меняем фон
    body.style.background = "url('/assets/bg-yes.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";

    // 2. Увеличиваем сердечки в 3 раза
    createHearts(20, true); // big hearts

    // 3. Показываем новый экран
    mainScreen.style.display = 'none';
    yesScreen.style.display = 'block';

    // 4. Уведомление (опционально — как на вашем скриншоте)
    alert('Ура! Я так и знал! 💖\nС Днём святого Валентина!');
  });

  // 🎯 Кнопка "Закрыть" (после Да)
  document.getElementById('closeBtn').addEventListener('click', () => {
    yesScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    // Возвращаем обычные сердечки
    createHearts(20, false);
    // Возвращаем старый фон (если нужно)
    body.style.background = "url('/assets/bg.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";
  });

  // 🐭 Кнопка "НЕТ" — убегает (оставляем как было)
  noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  // 🚀 Инициализируем обычные сердечки
  createHearts(20, false);
});