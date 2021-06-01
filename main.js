let counter = 0;
getData = () => {
  console.log("fetching data", counter++);
};

const debounce = function (fun, del) {
  let timer;

  return function () {
    let context = this;
    clearTimeout(timer);

    timer = setTimeout(() => {
      getData.apply(context);
    }, del);
  };
};

const betterFunction = debounce(getData, 300);
