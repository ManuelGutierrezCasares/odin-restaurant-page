function title(){
    const titleElement = document.createElement('div');
    titleElement.classList.add('bg-light'); 
    
    const titleText = document.createElement('h1');
    titleText.innerText= 'MGC\'s Restaurant';

    titleElement.appendChild(titleText);
    
    return titleElement;
}

function qualifications(){
    const qualificationsElement = document.createElement('div');
    qualificationsElement.classList.add('bg-light');

    const qualificationsTitle = document.createElement('h2');
    qualificationsTitle.innerText = 'QUALIFICATIONS';
    
    const firstP = document.createElement('p');
    const secondP = document.createElement('p');

    firstP.innerText = 'This is the best restaurant.';
    secondP.innerText = 'For real, best in town.';

    qualificationsElement.appendChild(qualificationsTitle);
    qualificationsElement.appendChild(firstP);
    qualificationsElement.appendChild(secondP);

    return qualificationsElement;
}

function location(){
    const locationElement = document.createElement('div');
    locationElement.classList.add('bg-light');

    const locationTitle = document.createElement('h2');
    locationTitle.innerText = 'Location';

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4896522602016!2d-58.3919!3d-34.591777799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabd20c616f1%3A0x16eda820a6542a3b!2sAv.%20Callao%2C%20C1021%20CABA!5e0!3m2!1ses-419!2sar!4v1697920869908!5m2!1ses-419!2sar';
    map.width = '600';
    map.height = '450';
    map.style = 'border:0;';
    map.allowFullscreen = '';
    map.loading = 'lazy';
    map.referrerPolicy = 'no-referrer-when-downgrade';

    locationElement.appendChild(locationTitle);
    locationElement.appendChild(map);

    return locationElement
}

export default function home(){
    document.getElementById('content').appendChild(title());
    document.getElementById('content').appendChild(qualifications());
    document.getElementById('content').appendChild(location());
}