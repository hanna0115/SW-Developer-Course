const input = document.getElementById('add-todo')
const addBtn = document.getElementById('add-button')
const list = document.getElementById('list')

const addList = () => {
  input.focus()
  if(input.value.length === 0){
    return alert('문자를 하나라도 입력해주세요')
  }
  const li = document.createElement('li')
  li.innerHTML = `${input.value}
  <button class="list-delete">&#x2716</button>`;
  li.classList.add('list-item');
  list.appendChild(li);
  input.value = '';
}

input.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    addList()
  }
})

addBtn.addEventListener('click', () => addList())

list.addEventListener('click', (event) => {
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('checked');
  }
  if(event.target.tagName === 'BUTTON'){
    event.target.parentElement.remove();
  }
})