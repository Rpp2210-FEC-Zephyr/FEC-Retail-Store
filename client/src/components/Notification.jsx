const Selected = () => {
  const scrollBtn = document.querySelectorAll(".scroll");

  scrollBtn.forEach((scrol) => {
    scrol.addEventListener("click", () => {
      window.scrollBy({
        top: 8000,
        left: 0,
        behavior: "smooth",
      });
    });
  });

  const Selecet = document.querySelectorAll(".StyleChoose");
  const check = document.querySelectorAll(".selected");

  Selecet.forEach((element) => {
    element.addEventListener("click", () => {
      check.forEach((el) => {
        el.style.visibility = "hidden";
      });
    });
  });
};
const Zoom = () => {
  const img = document.getElementById("Expanded");

  let zoomedIn = false;

  img.addEventListener("click", function (e) {
    if (zoomedIn) {
      // Zoom out
      img.style.transformOrigin = ``;
      img.style.transform = "scale(1)";
      zoomedIn = false;
    } else {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(2.5)";

      zoomedIn = true;
    }
  });
};
const ImageExpander = () => {
  // JS FOR IMAGE EXPANDER
  document.querySelectorAll(".slide img").forEach((image) => {
    image.onclick = () => {
      var popupDiv = document.querySelector(".Popup");
      document.querySelector(".Popup").style.display = "block";

      const Image = document.createElement("img");
      Image.src = image.getAttribute("src");
      Image.setAttribute("id", "Expanded");
      popupDiv.appendChild(Image);

      Zoom();
    };
  });

  document.querySelector(".Popup span").onclick = () => {
    var popupDiv = document.querySelector(".Popup");
    var table = popupDiv.querySelector("table");
    if (table) {
      popupDiv.removeChild(table);
    }

    var IMG = popupDiv.querySelector("img");
    if (IMG) {
      popupDiv.removeChild(IMG);
    }

    document.querySelector(".Popup").style.display = "none";
  };
  // END  OF JS FOR IMAGE EXPANDER
};
const DetailExpander = (ProdOne, ProdTwo) => {
  // JS FOR IMAGE EXPANDER

  document.querySelector(".Popup").style.display = "block";

  // Create a table element
  var table = document.createElement("table");
  table.classList.add("myTable");
  // Create the table header row
  var headerRow = document.createElement("tr");
  var currentProductHeader = document.createElement("th");
  var comparedProductHeader = document.createElement("th");
  var currentValueHeader = document.createElement("th");
  currentProductHeader.textContent = `${ProdOne.name}`;
  comparedProductHeader.textContent = `${ProdTwo.name}`;
  headerRow.appendChild(currentProductHeader);
  headerRow.appendChild(comparedProductHeader);
  headerRow.appendChild(currentValueHeader);
  table.appendChild(headerRow);

  // Create the table body rows
  var priceRow = document.createElement("tr");
  var priceCell1 = document.createElement("td");
  var priceCell2 = document.createElement("td");
  var valueCell = document.createElement("td");
  priceCell1.textContent = `$${ProdOne.default_price}`;
  priceCell2.textContent = `$${ProdTwo.default_price}`;
  valueCell.setAttribute("rowspan", "2");

  priceRow.appendChild(priceCell1);
  priceRow.appendChild(priceCell2);
  priceRow.appendChild(valueCell);
  table.appendChild(priceRow);

  var featuresRow = document.createElement("tr");
  var featuresCell1 = document.createElement("td");
  var featuresCell2 = document.createElement("td");
  featuresCell1.textContent = `${ProdOne.features.map(
    (feat) => "ㅤㅤ" + feat.value,
  )}`;
  featuresCell2.textContent = `${ProdTwo.features.map(
    (feat) => "ㅤㅤ" + feat.value,
  )}`;
  featuresRow.appendChild(featuresCell1);
  featuresRow.appendChild(featuresCell2);
  table.appendChild(featuresRow);

  var categoryRow = document.createElement("tr");
  var categoryCell1 = document.createElement("td");
  var categoryCell2 = document.createElement("td");
  categoryCell1.textContent = `${ProdOne.category}`;
  categoryCell2.textContent = `${ProdTwo.category}`;
  categoryRow.appendChild(categoryCell1);
  categoryRow.appendChild(categoryCell2);
  table.appendChild(categoryRow);

  // Append the table to the .Popup div
  var popupDiv = document.querySelector(".Popup");
  popupDiv.appendChild(table);
  document.querySelector(".Popup span").onclick = () => {
    var popupDiv = document.querySelector(".Popup");
    var table = popupDiv.querySelector("table");
    popupDiv.removeChild(table);
    document.querySelector(".Popup").style.display = "none";
  };
  // END  OF JS FOR IMAGE EXPANDER
};
const Notify = () => {
  const notifications = document.querySelector(".notifications"),
    buttons = document.querySelectorAll(".buttons .btn");
  // Object containing details for different types of toasts
  const toastDetails = {
    timer: 5000,
    success: {
      icon: "fa-circle-check",
      text: "Successfully Added to Bag",
    },
    error: {
      icon: "fa-circle-xmark",
      text: "Error: please fill in values.",
    },
    warning: {
      icon: "fa-triangle-exclamation",
      text: "Warning: You can only have 10 items per Bag",
    },
    info: {
      icon: "fa-solid fa-star",
      text: " Your Outfits have been updated",
    },
  };

  const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
  };

  const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                          <i class="fa-solid ${icon}"></i>
                          <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
  };

  // Adding a click event listener to each button to create a toast when clicked
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => createToast(btn.id));
  });
  //////////////////////////////////////////////////////////////////////////////////////////

  const label = document.querySelectorAll(".label ");

  label.forEach((lb) => {
    lb.addEventListener("click", (e) => {
      createToast(lb.id);
    });
  });
};

const Alert = (id) => {
  const notifications = document.querySelector(".notifications");

  // Object containing details for different types of toasts
  const toastDetails = {
    timer: 5000,
    success: {
      icon: "fa-circle-check",
      text: "Successfully Added to Bag",
    },
    error: {
      icon: "fa-circle-xmark",
      text: "Error: please fill in values.",
    },
    warning: {
      icon: "fa-triangle-exclamation",
      text: "You can only have 10 Items Per Bag",
    },
    info: {
      icon: "fa-solid fa-star",
      text: "Your Outfits have been updated",
    },
  };

  const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
  };

  const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                          <i class="fa-solid ${icon}"></i>
                          <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
  };

  // Adding a click event listener to each button to create a toast when clicked
  createToast(id);
  //////////////////////////////////////////////////////////////////////////////////////////
};

module.exports.Notify = Notify;
module.exports.Alert = Alert;
module.exports.ImageExpander = ImageExpander;
module.exports.Selected = Selected;
module.exports.Zoom = Zoom;
module.exports.DetailExpander = DetailExpander;
