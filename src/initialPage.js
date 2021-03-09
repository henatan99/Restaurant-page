const initialPage = () => {
  const initialDiv = document.createElement('div');
  initialDiv.classList.add('initial-div');
  initialDiv.setAttribute('id', 'initial-div');
  initialDiv.innerHTML = '<h1 class="headline">Real Ethiopian Cultural Food</h1>'
    + '<p class="more-info">You will enjoy the most exciting and tasty local foods in the city</P>';
  return initialDiv;
};

export { initialPage as default };