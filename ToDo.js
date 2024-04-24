let input = document.querySelector('#input');
let button = document.querySelector('#button');
let table = document.querySelector('#table');

function dt(){
    let date = new Date();
   return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
}
input.addEventListener('click', function(){
input.value = '';

});

button.addEventListener('click',function(){
let tr = document.createElement('tr');
table.appendChild(tr);

let list = document.createElement('td');
list.textContent = input.value;
tr.appendChild(list);

let startDate = document.createElement('td');
startDate.textContent = dt();
    tr.appendChild(startDate);

    let check = document.createElement('td');
    let buton1 = document.createElement('button');
    buton1.classList.add('butList');
    buton1.classList.add('butClick');
    buton1.textContent = 'click';
    check.appendChild(buton1);
    tr.appendChild(check);
    
    let timeChek = document.createElement('td');
    tr.appendChild(timeChek);
    
    buton1.addEventListener('click', function func(){
        buton1.classList.remove('butClick');
        buton1.classList.add('butCheck');
        buton1.textContent = 'chek';
        timeChek.textContent = dt();
        buton1.removeEventListener('click', func);
    });
    
    let remove = document.createElement('td');
    let buton2 = document.createElement('button');
    buton2.classList.add('butList');
    buton2.classList.add('butDel');
    buton2.textContent = 'Del';
    buton2.addEventListener('click',function(){
        tr.remove();
    });
    remove.appendChild(buton2);

   tr.appendChild(remove);
    
});

    