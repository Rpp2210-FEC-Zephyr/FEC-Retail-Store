



const Status = (item) =>{
  const Star = JSON.parse(localStorage.getItem('favorites'));
  console.log('FAVOR STATUS STAR', Star)
  const data = Star ? Star.flat(Infinity).filter((i) => i !=null) : []
  const find = data.filter((obj) => obj.id == item.id)
  console.log('FAVOR STATUS FIND', find)
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
  const data = Star ? Star.flat(Infinity).filter((i) => i !=null) : []
  const find = data.filter((obj) => obj.id == item.id)
  console.log('FAVOR TOGGLE FIND', find)
  if(find.length == 1){
    const label = document.querySelectorAll(".label");

  label.forEach(checkbox => {
    const svg = checkbox.querySelector('svg');
    svg.style.fill = '#fbff00';
  });
      console.log('RETURN DATA', data)
    return data
  }else{

    const newArr = data.filter((obj) => obj.id != item.id)
    localStorage.setItem('favorites', JSON.stringify(newArr))
    const label = document.querySelectorAll(".label ");

    label.forEach(checkbox => {
      const svg = checkbox.querySelector('svg');
      svg.style.fill = '';
    });
    console.log('RETURN NEW ARRAY', newArr)
    return newArr

  }


}

const showOutfit =() =>{
  const Star = JSON.parse(localStorage.getItem('favorites'));
  const data = Star ? Star.flat(Infinity).filter((i) => i !=null) : []

  return data
}


module.exports.Toggle = Toggle
module.exports.Status = Status
module.exports.showOutfit = showOutfit