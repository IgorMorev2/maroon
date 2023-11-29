const isWebp = () => {
  const testWebP = (cb) => {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      cb(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP((support) => {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

const getRandomPositiveInteger = (number1, number2 = 0) => {
  const min = Math.min(Math.abs(number1), Math.abs(number2));
  const max = Math.max(Math.abs(number1), Math.abs(number2));

  return Math.floor(Math.random() * (max - min) + min)
}

export {isWebp, getRandomPositiveInteger}
