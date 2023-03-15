
const Selected =() =>{

    const scrollBtn =document.querySelectorAll('.scroll')

    scrollBtn.forEach(scrol =>{


    scrol.addEventListener('click', () => {
      window.scrollBy({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });
    });
    })

    const Selecet = document.querySelectorAll('.StyleChoose')
    const check = document.querySelectorAll('.selected')


    Selecet.forEach(element =>{
    element.addEventListener('click', ()=> {


        check.forEach(el => {
        el.style.visibility = "hidden"
        })
  })
    })
}
const ImageExpander = () =>{
    // JS FOR IMAGE EXPANDER
    document.querySelectorAll('.slide img').forEach(image => {

        image.onclick = () =>{
            document.querySelector('.Popup').style.display = 'block'
            document.querySelector('.Popup img').src = image.getAttribute('src')
        }
    })

    document.querySelector('.Popup span').onclick = () =>{
        document.querySelector('.Popup').style.display = 'none'
    }
    // END  OF JS FOR IMAGE EXPANDER
}
const Notify = () =>{

  const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");
  // Object containing details for different types of toasts
  const toastDetails = {
      timer: 5000,
      success: {
          icon: 'fa-circle-check',
          text: 'Successfully Added to Bag',
      },
      error: {
          icon: 'fa-circle-xmark',
          text: 'Error: please fill in values.',
      },
      warning: {
          icon: 'fa-triangle-exclamation',
          text: 'Warning: You can only have 10 items per Bag',
      },
      info: {
          icon: 'fa-solid fa-star',
          text: 'Favorites have been updated',
      }
  }

  const removeToast = (toast) => {
      toast.classList.add("hide");
      if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
      setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
  }

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
  }

  // Adding a click event listener to each button to create a toast when clicked
  buttons.forEach(btn => {
      btn.addEventListener("click", () => createToast(btn.id));
  });
  //////////////////////////////////////////////////////////////////////////////////////////

  const label = document.querySelectorAll(".label ");

  label.forEach(lb => {
    lb.addEventListener("click", () => createToast(lb.id));
  });
}


const Alert = (id) =>{
  const notifications = document.querySelector(".notifications")

  // Object containing details for different types of toasts
  const toastDetails = {
      timer: 5000,
      success: {
          icon: 'fa-circle-check',
          text: 'Successfully Added to Bag',
      },
      error: {
          icon: 'fa-circle-xmark',
          text: 'Error: please fill in values.',
      },
      warning: {
          icon: 'fa-triangle-exclamation',
          text: 'You can only have 10 Items Per Bag',
      },
      info: {
          icon: 'fa-circle-info',
          text: 'Favorites have been updated',
      }
  }

  const removeToast = (toast) => {
      toast.classList.add("hide");
      if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
      setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
  }

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
  }

  // Adding a click event listener to each button to create a toast when clicked
  createToast(id)
  //////////////////////////////////////////////////////////////////////////////////////////
}

module.exports.Notify = Notify
module.exports.Alert = Alert
module.exports.ImageExpander = ImageExpander
module.exports.Selected = Selected