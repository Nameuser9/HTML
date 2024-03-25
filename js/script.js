const data = JSON.parse(newBloc);
  const container = document.querySelector('div.container');
  data.forEach(element => {
  const divEl = document.createElement('div');
  const name = document.createElement('h1');
  const powers = document.createElement('p');
  const img = document.createElement('img');
  name.textContent = element.name;
  powers.textContent = element.powers;
  img.src = element.img;
  divEl.appendChild(name);
  divEl.appendChild(powers);
  divEl.appendChild(img);
  divEl.classList.add(element.class);
  container.appendChild(divEl);
  });