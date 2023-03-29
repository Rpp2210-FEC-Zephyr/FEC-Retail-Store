const Status = (item) => {
  const Star = JSON.parse(localStorage.getItem("favorites"));

  const data = Star ? Star.flat(Infinity).filter((i) => i != null) : [];
  const find = data.filter((obj) => obj.id == item.id);

  if (find.length == 1) {
    const label = document.querySelectorAll(".label");

    label.forEach((checkbox) => {
      const svg = checkbox.querySelector("svg");
      svg.style.fill = "#fbff00";
    });
  } else {
    const label = document.querySelectorAll(".label ");

    label.forEach((checkbox) => {
      const svg = checkbox.querySelector("svg");
      svg.style.fill = "";
    });
  }
};
const Toggle = (item) => {
  const Star = JSON.parse(localStorage.getItem("favorites"));
  const data = Star ? Star.flat(Infinity).filter((i) => i != null) : [];
  const find = data.filter((obj) => obj.id == item.id);
  console.log("The find", find);
  if (find.length == 1) {
    const label = document.querySelectorAll(".label");

    label.forEach((checkbox) => {
      const svg = checkbox.querySelector("svg");
      svg.style.fill = "#fbff00";
    });

    return data;
  } else {
    const newArr = data.filter((obj) => obj.id != item.id);
    localStorage.setItem("favorites", JSON.stringify(newArr));
    const label = document.querySelectorAll(".label ");

    label.forEach((checkbox) => {
      const svg = checkbox.querySelector("svg");
      svg.style.fill = "";
    });

    return newArr;
  }
};

const showOutfit = () => {
  const Star = JSON.parse(localStorage.getItem("favorites"));
  const data = Star ? Star.flat(Infinity).filter((i) => i != null) : [];

  return data;
};

module.exports.Toggle = Toggle;
module.exports.Status = Status;
module.exports.showOutfit = showOutfit;
