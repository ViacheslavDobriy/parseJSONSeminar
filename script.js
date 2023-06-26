const productsInfo = JSON.parse(dataInfo);

const contentEl = document.querySelector('.content');

productsInfo.forEach(element => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    contentEl.appendChild(productEl);

    const imgEl = document.createElement('img');
    imgEl.src = element.image;
    imgEl.alt = "alt from js";
    imgEl.classList.add('product__image');
    productEl.appendChild(imgEl);

    const productContentBox = document.createElement('div');
    productContentBox.classList.add('product__content');
    productEl.appendChild(productContentBox);

    const titleBox = document.createElement('div');
    titleBox.classList.add('product__title');
    productContentBox.appendChild(titleBox);

    const titleEl = document.createElement('h3');
    titleEl.textContent = element.brand + ' ' + element.product;
    titleBox.appendChild(titleEl);

    const productPriceLine = document.createElement('p');
    productPriceLine.textContent = 'Price: ';
    productPriceLine.classList.add('product__price');
    productContentBox.appendChild(productPriceLine);

    const priceEl = document.createElement('span');
    priceEl.textContent = element.currency + element.price;
    priceEl.classList.add('priceJS');
    productPriceLine.appendChild(priceEl);

    const colorLine = document.createElement('p');
    colorLine.textContent = 'Color: ';
    colorLine.classList.add('product__color');
    productContentBox.appendChild(colorLine);

    const colorEl = document.createElement('span');
    colorEl.textContent = element.color;
    colorEl.classList.add('colorJS');
    colorLine.appendChild(colorEl);

    const sizeLine = document.createElement('p');
    sizeLine.textContent = 'Size: ';
    sizeLine.classList.add('product__size');
    productContentBox.appendChild(sizeLine);

    const sizeEl = document.createElement('span');
    sizeEl.textContent = element.size;
    sizeEl.classList.add('sizeJS');
    sizeLine.appendChild(sizeEl);

    const quantityBox = document.createElement('div');
    quantityBox.classList.add('product__quantity');
    productContentBox.appendChild(quantityBox);

    const quantityLine = document.createElement('p');
    quantityLine.textContent = 'Quantity: ';
    quantityLine.classList.add('product__quantity-text');
    quantityBox.appendChild(quantityLine);

    const quantityEl = document.createElement('input');
    quantityEl.value = element.quantity;
    quantityEl.type = 'number';
    quantityEl.classList.add('product__input');
    quantityLine.appendChild(quantityEl);
});