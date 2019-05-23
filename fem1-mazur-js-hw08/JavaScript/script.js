const priceField = document.getElementById('priceField');

const topRow = (price) => {

    let div = document.getElementById("topRow");
    let span = document.createElement("span");

    price = priceField.value;

    if (div.innerText === '') {

        document.body.insertBefore(div, priceField);
        span.innerText = `Price is ${price}`;
        span.style.marginRight = (`10px`);
        div.appendChild(span);

        let button = document.createElement("button");
        button.innerText = (`X`);
        button.id = ('buttonX');
        div.appendChild(button);
    } else {
        div.innerText = '';
        topRow();
    }

    document.getElementById('buttonX').addEventListener("click", () => {
        div.innerText = '';
    });
};

const bottomSpan = (price) => {
    price = Number(priceField.value);
    let span = document.createElement('span');
    if (price < 0 || isNaN(price)) {
        span.innerText = (`Please enter correct price`);
        document.body.insertBefore(span, priceField.firstChild);
        priceField.style.border = (`2px solid red`);
    } else {
        priceField.style.border = (`2px solid black`);
    }
    priceField.addEventListener("focus", () => {
        span.remove();
        priceField.style.border = (`2px solid limegreen`)
    });
};

const newSpan = (price) => {
    price = Number(priceField.value);
    if (price > 0) {
        topRow(price);
    } else {
        bottomSpan(price);
    }
};

priceField.addEventListener("blur", newSpan);