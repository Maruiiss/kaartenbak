const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get('index');


const contentMapping = {
    '1': {
        image: 'img/1.jpeg',
        title: 'Beautiful Landscape',
        description: 'Discover the beauty of nature.',
    },
    '2': {
        image: 'img/2.jpeg',
        title: 'Urban Exploration',
        description: 'Explore the cityscape in vibrant colors.',
    },
    '3': {
        image: 'img/3.jpeg',
        title: 'Abstract Art',
        description: 'A masterpiece of abstract expressionism.',
    },
    '4': {
        image: 'img/4.jpeg',
        title: 'Sunset Serenity',
        description: 'Experience the tranquility of a sunset.',
    },
    '5': {
        image: 'img/5.jpeg',
        title: 'Adventurous Journey',
        description: 'Embark on an adventurous journey.',
    },
    '6': {
        image: 'img/6.jpeg',
        title: 'Mountain Majesty',
        description: 'Witness the majesty of towering mountains.',
    },
   
};


const dynamicContent = document.getElementById('dynamicContent');
if (contentMapping[index]) {
    dynamicContent.innerHTML = `<img src="${contentMapping[index].image}" alt="">
                                <h1>${contentMapping[index].title}</h1>
                                <p>${contentMapping[index].description}</p>`;
} else {
    dynamicContent.innerHTML = '<h1>Invalid Index</h1><p>Please go back and click a valid rectangle.</p>';
}
