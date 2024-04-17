//background: rgb(255, 38, 38);
//background: linear-gradient(45deg, red, blue);

const card = document.querySelectorAll('.card');
const card2 = document.querySelectorAll('.card2');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const item5 = document.querySelector('.item5');

function randColor() {  
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function randDeg() {  
  return Math.floor(Math.random() * 361)
}

card.forEach((el, i)=> {
  el.addEventListener('click', ()=> {
    el.style.background = randColor();
  })
  
  card2[i].addEventListener('mouseover', ()=> {
    card2[i].style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()})`;
  })
  
})

item1.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});
item2.addEventListener('click', () => {
  document.body.style.backgroundColor = 'yellow';
});
item3.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});
item4.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
});
item5.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});
  // console.log(item)


// el.getAttribute('name') - Возвращает значение атрибута
// el.setAttribute('name', value) - Создает атрибута и значение для него
// el.hasAttribute('name') - Проверяет наличие атрибута
// el.removeAttribute('name') - Удаляет атрибут