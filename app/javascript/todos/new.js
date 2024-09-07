'use strict';

{
  const text = document.querySelector('#text')
  const message = document.querySelector('#message')
  const save = document.querySelector('#save')
  // const clear = document.querySelector('#clear')
  
  
  // if (localStorage.getItem('string') === null) {
  //   text.value = '';
  // } else {
  //   text.value = localStorage.getItem('string');
  // };

  save.addEventListener('click', () => {
    localStorage.setItem('string', text.value);
    message.classList.remove('opacity-0', '-translate-y-2');
    message.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      message.classList.remove('opacity-100', 'translate-y-0');
      message.classList.add('opacity-0', '-translate-y-2');
    }, 2000);
  });

  // clear.addEventListener('click', () => {
  //   if (confirm('本当に削除しますか？') === true) {
  //     localStorage.removeItem('string');
  //     text.value = '';
  //   };
  // });
}

