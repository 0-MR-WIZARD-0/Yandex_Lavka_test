const items = document.querySelectorAll('.item');

const cart = document.getElementById('cart');

const checkoutButton = document.getElementById('checkoutButton');

let itemCount = 0;

items.forEach(item => {
    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
    });
});

cart.addEventListener('dragover', (event) => {
    event.preventDefault();
});

cart.addEventListener('drop', (event) => {
    event.preventDefault();

    const itemId = event.dataTransfer.getData('text');

    const item = document.getElementById(itemId);

    if (item) {

        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');

        item.replaceWith(placeholder);

        cart.appendChild(item);
        item.style.position = 'absolute';
        if (Math.random() > 0.5) {
            item.style.marginTop = '8%';
            item.style.marginLeft = `${itemCount * 10}px`;
        } else {
            item.style.marginTop = '5%';
            item.style.marginRight = `${itemCount * 10}px`;
        }
        item.style.zIndex = "-1";
        itemCount++;

        if (itemCount >= 3) {
            checkoutButton.style.display = 'block';
            checkoutButton.classList.add('blinking');
        }
    } else {
        console.error(`Element with id "${itemId}" not found.`);
    }
});

checkoutButton.addEventListener('click', () => {
    window.location.href = 'https://lavka.yandex.ru';
});