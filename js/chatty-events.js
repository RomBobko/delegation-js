// _.THROTTLE -evenet від браузерва сипляться а тротл тормоизт виклик функції
//  тротл спрацбовує раз в якийсь період - наприклад 300мс
//  LODASH - бібліотека
// вик - scroll mousemouve - resizewindow

// DEBOUNCE - відкладений пошук
// спрацьовує коли зупиняється потік подій
// використовується наприклад при пошуку користувача input

// fuse.js - бібліотека для пошуку з помилками



const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Nose.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next,js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "MySQL" },
  { label: "MangoDB" },
  { label: "Angular" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 200));

const listItemsMarkup = createListItemsMarkup(tech);

populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join(" ");
}

function onFilterChange(event) {
  const filter = event.target.value.toLowerCase();

  const filteredItems = tech.filter((t) =>
    t.label.toLowerCase().includes(filter)
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
//   console.log(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
