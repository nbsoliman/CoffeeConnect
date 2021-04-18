// const yelp = require('yelp-fusion');

const apiKey = 'oFbPtqK9V0ZXYX3KPL6d-cOWgTbbqoZbHVMF0gDvVoiiIY9sWkawhPp8yf6yV3XQsq8pvCRq3ZdYHMW7Y6IC44GqHs6kLqmfZE9CsaKlz9VnkWx51pYPwY4l0e95YHYx';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// const searchRequest = {
//     term: 'coffee',
//     location: 'college station, tx'
// };
// applicationCache.appendChild(container);
const filler = document.getElementById('Coffee-Shop-Cards');
console.log("1");
var request = new XMLHttpRequest();
request.setRequestHeader("Authorization: Bearer " + apiKey)
console.log("2");
// request.open('GET', 'https://api.yelp.com/v3/businesses/search?location=77840&term=coffee', true);
request.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
console.log("2.5");
request.onload = function () {
    console.log("3");
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400){
        data.forEach(business => { 
            const card = createElement("div");
            card.setAttribute('class', 'container')
            filler.appendChild(card);
            console.log("4");
            const post = createElement("div");
            post.setAttribute('class', 'post')
            card.appendChild(post);

            post.textContent = "test";
        })
    }
}