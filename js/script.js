document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const screen = document.getElementById('screen');
  const title = document.getElementById('title');
  const message = document.getElementById('message');
  const heartsContainer = document.getElementById('hearts');
  const body = document.body;

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
        heart.style.fontSize = '48px'; // ~в 3 раза больше
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
    // Меняем фон
    body.style.background = "url('/assets/bg-yes.jpg') no-repeat center center fixed";
    body.style.backgroundSize = "cover";

    // Большие сердечки
    createHearts(20, true);

    // Обновляем текст
    title.textContent = 'Ура! 💖';
    message.textContent = 'Я так и знал! С Днём святого Валентина!';

    // Показываем уведомление
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Кнопка "Закрыть" в уведомлении
    document.getElementById('closeNotification').onclick = () => {
      notification.style.display = 'none';
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

  // Инициализация
  createHearts(20, false);
});