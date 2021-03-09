const menuItem = (menuImg, menuName) => {
    const menuItemDiv = document.createElement('div');
    const Img = '<div class="img-div">' + '<img src="./' + menuImg + '" class="menu-img">' + '</div>';
    const Name = '<p class="menu-name">' + menuName + '</p>';
    menuItemDiv.innerHTML = Img + Name;
    return menuItemDiv;
}


const menuPage = () => {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = '<h1>This is Menu Page</h1>';
    return menuDiv;
}

export { menuPage }