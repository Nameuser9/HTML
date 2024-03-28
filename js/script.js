const data = JSON.parse(newBloc);
  const container = document.querySelector('div.container');
  data.forEach(element => {
  const divEl = document.createElement('div');
  const img = document.createElement('img');
  const title3 = document.createElement('h1');
  const description = document.createElement('p');
  const price = document.createElement('p');
  const divE2 = document.createElement('div');
  const button = document.createElement('a');
  title3.textContent = element.title3;
  description.textContent = element.description;
  price.textContent = element.price
  img.src = element.img;
  button.href ='index.html'
  divE2.classList.add("imgContainer");
  divEl.appendChild(title3);
  divEl.appendChild(description);
  divEl.appendChild(img);
  divE2.appendChild(img);
  button.appendChild(img);
  divE2.appendChild(button);
  divEl.classList.add(element.class);
  divEl.appendChild(divE2)
  container.appendChild(divEl);
  
  });