document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const screen = document.getElementById('screen');
  const heartsContainer = document.getElementById('hearts');
  const body = document.body;
  const notification = document.getElementById('notification');

  // Создание сердечек
  function createHearts(count, isBig = false) {
    heartsContainer.innerHTML = '';
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
        heart.style.fontSize = '48px';
        heart.style.animationName = 'fall-big';
      } else {
        heart.style.fontSize = Math.random() * 24 + 16 + 'px';
        heart.style.animationName = 'fall';
      }

      heartsContainer.appendChild(heart);
    }
  }

  // Анимации
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
    @keyframes fall-big {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Кнопка "ДА"
  yesBtn.addEventListener('click', () => {
    // 1. Меняем фон
    body.style.background = "url('/assets/bg-yes.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";

    // 2. Большие сердечки
    createHearts(20, true);

    // 3. Скрываем основной экран
    screen.style.display = 'none';

    // 4. Показываем чёрное уведомление
    notification.style.display = 'block';

    // 5. Кнопка "Закрыть" — скрывает уведомление, но НЕ возвращает экран
    document.getElementById('closeNotification').onclick = () => {
      notification.style.display = 'none';
      // Опционально: можно оставить фон и сердечки — они уже установлены
    };
  });

  // Кнопка "НЕТ" — убегает
  noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  // Инициализация: обычные сердечки
  createHearts(20, false);
});