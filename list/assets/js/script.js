/*
  nama : candra dwi cahyo
  email : candradwicahyo18@gmail.com
*/

function todolist() {
  
  const field = document.querySelector('.field');
  const button = document.querySelector('.button');
  button.addEventListener('click', function() {
    
    if (field.value) {
      
      // buat element HTML dengan menggunakan javascript
      const list = document.createElement('div');
      list.classList.add('list');
      
      const listContent = document.createElement('div');
      listContent.classList.add('list-content');
      
      const span = document.createElement('span');
      const textSpan = document.createTextNode(`${field.value}`);
      
      span.appendChild(textSpan);
      listContent.appendChild(span);
      
      const listIcon = document.createElement('div');
      listIcon.classList.add('list-icon');
      
      const iconCheck = document.createElement('i');
      iconCheck.className = 'fas fa-fw fa-check-square';
      
      const iconTrash = document.createElement('i');
      iconTrash.className = 'fas fa-fw fa-trash-alt';
      iconTrash.addEventListener('click', () => list.remove());
      
      listIcon.appendChild(iconCheck);
      listIcon.appendChild(iconTrash);
      
      list.appendChild(listContent);
      list.appendChild(listIcon);
      
      const listContainer = document.querySelector('.list-container');
      listContainer.appendChild(list);
      
      field.value = '';
      
    }
    
  });
  
}

todolist();
