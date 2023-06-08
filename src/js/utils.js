export const twoCharacters = (value) => {
  let valueString = value.toString();
  const valueArray = valueString.split("");

  if (valueArray.length < 2) valueString = `0${valueString}`;
  return valueString;
};

export const scrollTo = (event) => {
  event.preventDefault()

  const scrollTargetId = event.currentTarget.dataset.target
  const scrollTarget = document.getElementById(scrollTargetId)

  if ( scrollTarget ) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: scrollTarget.offsetTop - 80
    })
  }

}
