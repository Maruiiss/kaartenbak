const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');


const contentMapping = {
    '1': {
        image: 'img/1.jpeg',
        title: '',
        description: '',
    },
    '2': {
        image: 'img/2.jpeg',
        title: '',
        description: '',
    },
    '3': {
        image: 'img/3.jpeg',
        title: '',
        description: '',
    },
    '4': {
        image: 'img/4.jpeg',
        title: '',
        description: '',
    },
    '5': {
        image: 'img/5.jpeg',
        title: '',
        description: '',
    },
    '6': {
        image: 'img/6.jpeg',
        title: '',
        description: '',
    },
   
};


const dynamicContent = document.getElementById('dynamicContent');
if (contentMapping[index]) {
    dynamicContent.innerHTML = `<img src="${contentMapping[index].image}" alt="">
                                <h1>${contentMapping[index].title}</h1>
                                <p>${contentMapping[index].description}</p>`;
} else {
    dynamicContent.innerHTML = '<h1>Invalid Index</h1><p>Muziek niet gevonden.</p>';
}
