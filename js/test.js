// debounce code ::

let counter = 0;

const incremntCounter =()=> {
  console.log(`counter value:: ${counter++}`);
}

const debounce = function debounce(fun,delay) {
  let timer;

  return function () {
    let contex = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      incremntCounter.apply(contex);
    }, delay);
  };
};

const betterFunceion = debounce(incremntCounter,300)






