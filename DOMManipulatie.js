const animalsBtn = document.querySelectorAll(".big-five-button");
const removeFirstAnimalBtn = document.getElementById(
  "remove-first-item-button"
);
const removeAllAnimalsbtn = document.getElementById("remove-all-button");

const animalSpotted = (e) => {
  const newLi = document.createElement("li");
  const spottedAnimal = e.target.innerHTML;
  const animalsList = document.getElementById("spotted-animals-list");

  newLi.appendChild(document.createTextNode(spottedAnimal));
  animalsList.appendChild(newLi);
};

animalsBtn.forEach((button) => button.addEventListener("click", animalSpotted));

const removeFirstAnimal = () => {
  const firstItem = document.getElementById("spotted-animals-list").firstChild;
  firstItem.remove();
};
removeFirstAnimalBtn.addEventListener("click", removeFirstAnimal);

const removeAllAnimals = () => {
  const spottedAnimalsList = document.getElementById("spotted-animals-list");
  spottedAnimalsList.innerHTML = "";
};
removeAllAnimalsbtn.addEventListener("click", removeAllAnimals);
