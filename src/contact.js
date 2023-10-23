function contacts(name,role,tel){
    const card = document.createElement('div');
    card.classList.add('bg-light', 'w-25', 'my-4');
    const cardName = document.createElement('h3');
    const cardRole = document.createElement('p');
    const cardTel = document.createElement('p');

    cardName.innerText = 'Name: '+ name;
    cardRole.innerText = 'Role: '+ role;
    cardTel.innerText = 'Tel: ' + tel;
    
    card.appendChild(cardName);
    card.appendChild(cardRole);
    card.appendChild(cardTel);

    return card;
}

export default function contact(){
    const title = document.createElement('h2');
    title.innerText = 'Contact Us'
    document.getElementById('content').appendChild(title);
    document.getElementById('content').appendChild(contacts('Pedro', 'CEO', '+54 12345678'));
    document.getElementById('content').appendChild(contacts('Cacho', 'Manager', '+54 66665666'));
    document.getElementById('content').appendChild(contacts('Julian', 'Employee', '+54 45678988'));
}