



const Status = (item) =>{
  const Star = JSON.parse(localStorage.getItem('favorites'));
  const data = Star.flat(Infinity).filter((i) => i !=null)
  const find = data.filter((obj) => obj.style_id == item.style_id)
  if(find.length == 1){
    const label = document.querySelectorAll(".label");

  label.forEach(checkbox => {
    const svg = checkbox.querySelector('svg');
    svg.style.fill = '#fbff00';
  });
  }else{
    const label = document.querySelectorAll(".label ");

    label.forEach(checkbox => {
      const svg = checkbox.querySelector('svg');
      svg.style.fill = '';
    });

  }
}
const Toggle = (item) =>{
  const Star = JSON.parse(localStorage.getItem('favorites'));
  const data = Star.flat(Infinity).filter((i) => i !=null)
  const find = data.filter((obj) => obj.style_id == item.style_id)

  if(find.length == 1){
    const label = document.querySelectorAll(".label");

  label.forEach(checkbox => {
    const svg = checkbox.querySelector('svg');
    svg.style.fill = '#fbff00';
  });
  }else{

    const newArr = data.filter((obj) => obj.style_id != item.style_id)
    localStorage.setItem('favorites', JSON.stringify(newArr))
    const label = document.querySelectorAll(".label ");

    label.forEach(checkbox => {
      const svg = checkbox.querySelector('svg');
      svg.style.fill = '';
    });

  }

}




module.exports.Toggle = Toggle
module.exports.Status = Status