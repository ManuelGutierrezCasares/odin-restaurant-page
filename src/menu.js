function dish(title,para1,para2){
    const card = document.createElement('div');
    card.classList.add('bg-light', 'w-50', 'my-4');
    const cardTitle = document.createElement('h3');
    const cardPara1 = document.createElement('p');
    const cardPara2 = document.createElement('p');

    cardTitle.innerText = title;
    cardPara1.innerText = para1;
    cardPara2.innerText = para2;
    
    card.appendChild(cardTitle);
    card.appendChild(cardPara1);
    card.appendChild(cardPara2);

    return card;
}

export default function menu(){
    document.getElementById('content').appendChild(dish('Dish 1', 'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione quo neque quod eaque temporibus asperiores deleniti accusamus saepe, perspiciatis commodi pariatur a! Similique optio adipisci voluptatibus beatae accusamus maiores.', 'Cost: $2.00'));
    document.getElementById('content').appendChild(dish('Dish 2', 'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione quo neque quod eaque temporibus asperiores deleniti accusamus saepe, perspiciatis commodi pariatur a! Similique optio.', 'Cost: $5.00'));
    document.getElementById('content').appendChild(dish('Dish 3', 'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione quo neque quod eaque temporibus asperiores deleniti accusamus saepe, perspiciatis commodi pariatur a!', 'Cost: $10.00'));
}










/*
    add gap
<div class="bg-light w-50">
            <h3>Dish 1</h3>
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione quo neque quod eaque temporibus asperiores deleniti accusamus saepe, perspiciatis commodi pariatur a! Similique optio adipisci voluptatibus beatae accusamus maiores.</p>
            <p>Cost: $2.00</p>
        </div>
        <div class="bg-light w-50">
            <h3>Dish 2</h3>
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione quo neque quod eaque temporibus asperiores deleniti accusamus saepe, perspiciatis commodi pariatur a! Similique optio.</p>
            <p>Cost: $5.00</p>
        </div>
        <div class="bg-light w-50">
            <h3>Dish 3</h3>
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione quo neque quod eaque temporibus asperiores deleniti accusamus saepe, perspiciatis commodi pariatur a!</p>
            <p>Cost: $10.00</p>
        </div>*/