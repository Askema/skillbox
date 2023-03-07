const inputs = document.querySelectorAll('.form__input');

inputs.forEach((input) => {
  input.addEventListener('invalid', () => {

    if (input.type === 'tel') {
      let div = document.createElement('div');
      div.className = 'form__invalid';
      div.textContent = 'Используйте формат: +7 (777) 777-77-77';
      input.after(div);
    } else if (input.type === 'text') {
      let div = document.createElement('div');
      div.className = 'form__invalid';
      div.textContent = 'Имя слишком короткое';
      input.after(div);
    } else if (input.type === 'email') {
      let div = document.createElement('div');
      div.className = 'form__invalid';
      div.textContent = 'Некорректный email';
      input.after(div);
    }

    setTimeout(() => document.querySelector('.form__invalid').remove(), 3000);
  });
});
