const data = JSON.parse(newBloc);
  const container = document.querySelector('div.container');
  data.forEach(element => {
  const divEl = document.createElement('div');
  const name = document.createElement('h1');
  const powers = document.createElement('p');
  
  name.textContent = element.name;
  powers.textContent = element.powers;
  divEl.appendChild(name);
  divEl.appendChild(powers);
  divEl.classList.add(element.class);
  container.appendChild(divEl);
  });