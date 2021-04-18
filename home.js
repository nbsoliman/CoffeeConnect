const apiKey = 'P4RumPUMH5HyPwPG2EYyyMAMh1bzwnVv';

const app = document.getElementById('Coffee-Shop-Cards');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.tomtom.com/search/2/categorySearch/coffee.json?lat=30.670509&lon=-96.370506&key=P4RumPUMH5HyPwPG2EYyyMAMh1bzwnVv', true);
request.setRequestHeader("Authorization", apiKey);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(request.response);
  // var data = JSON.stringify(this.response);
  // data = JSON.parse(data);

  if (request.status >= 200 && request.status < 400) {
    data.places.forEach(places => {
      const post = document.createElement('div');
      post.setAttribute('class', 'post');

      const h2 = document.createElement('h2');
      h2.textContent = places.name;
      const span = document.createElement('span');
      span.textContent = places.location.coordinates;

      // const p = document.createElement('p');
      // var text = document.createTextNode("Gender: " + person.gender);
      // p.appendChild(text);
      // movie.description = movie.description.substring(0, 300);
      // p.textContent = `${movie.description}...`;

      container.appendChild(post);
      post.appendChild(h2);
      post.appendChild(span);
    });

    console.log(data);

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();