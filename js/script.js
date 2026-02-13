document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  const yesBtn = document.getElementById('yesBtn');

  // Анимация сердечек (как раньше)
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 24 + 16 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-50px';
    heart.style.opacity = Math.random() * 0.7 + 0.3;
    heart.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    heartsContainer.appendChild(heart);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Кнопка "ДА"
  yesBtn?.addEventListener('click', () => {
    alert('Ура! Я так и знал! 💖\nС Днём святого Валентина!');
  });

  // Кнопка "НЕТ" — убегает от курсора
  noBtn?.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
});
