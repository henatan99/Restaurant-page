const menuItem = (menuImg, menuName) => {
  const menuItemDiv = document.createElement('div');
  menuItemDiv.classList.add('menu-item');

  const Img = `${'<div class="img-div"><img src="../src/'}${menuImg}" class="menu-img"></div>`;
  const Name = `<p class="menu-name">${menuName}</p>`;
  menuItemDiv.innerHTML = Img + Name;
  return menuItemDiv;
};

const menuPage = () => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');
  menuDiv.setAttribute('id', 'menu-div');

  const menuImgs = ['food1.jpeg', 'food2.jpeg', 'food3.jpeg', 'food4.jpeg'];
  const menuNames = ['fresh salads', 'party platters', 'sea food', 'vegan desserts'];

  for (let i = 0; i < menuImgs.length; i += 1) {
    menuDiv.appendChild(menuItem(menuImgs[i], menuNames[i]));
  }

  return menuDiv;
};

export { menuPage as default };