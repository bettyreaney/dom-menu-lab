//Task 3.0

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Task 1.0

const mainEl = document.querySelector('main');

// Task 1.1

mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2

mainEl.innerHTML = '<h1>SEIR Rocks!';

// Task 1.3

mainEl.setAttribute('class', 'flex-ctr');

// Task 2.0

const topMenuEl = document.querySelector('#top-menu');

// Task 2.1

topMenuEl.style.height = '100%';

// Task 2.2

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3

topMenuEl.setAttribute('class', 'flex-around');

// Task 3.1

menuLinks.forEach(link => {
    let temp = document.createElement('a');
    temp.setAttribute('href', link.href)
    temp.textContent = link.text;
    topMenuEl.appendChild(temp)
})