const list = (listArray) => {
    let li='';
    let itemClass = (i) => `${listArray[i].toLowerCase()}`;
    for(let i=0; i<listArray.length; i++) {
        li += '<li class="nav-list-item ' + itemClass(i) + '">' + listArray[i] + '</li>';
    }
    return li;
}

const navBar = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav-elem');
    nav.innerHTML = '<ul class="nav-list">' + list(['Home', 'Menu', 'Contact']) + '</ul>';
    return nav;
}

export { navBar }