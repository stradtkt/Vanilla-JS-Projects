const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const curreny_one = currencyEl_one.value;
    const curreny_two = currencyEl_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${curreny_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[curreny_two];
            rateEl.innerText = `1 ${curreny_one} = ${rate} ${curreny_two}`;
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        })
}

//  Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();