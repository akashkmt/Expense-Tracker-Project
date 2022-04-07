var totalExpense;
if (localStorage.getItem('userData') == null) {
    totalExpense = [];
}
else {
    totalExpense = JSON.parse(localStorage.getItem('userData'));
    totalExpense.forEach(function (details) {
        var card = document.createElement('div');
        card.setAttribute('class', 'card');

        var month = document.createElement('p');
        month.setAttribute('class', 'cardM');
        month.innerText = details.month;

        var income = document.createElement('p');
        income.setAttribute('class', 'cardI');
        income.innerText = "Your income is Rs " + details.income + "/-";

        var expense = document.createElement('p');
        expense.setAttribute('class', 'cardE');
        expense.innerText = "Your expense is Rs " + details.expense + "/-";

        var savings = document.createElement('p');
        savings.setAttribute('class', 'cardS');
        savings.innerText = "Your Savings is Rs " + details.savings + "/-";

        card.append(month, income, expense, savings);

        document.querySelector('#container').append(card);
    });
}

document.querySelector('#myForm').addEventListener('submit', calculate);

function calculate() {
    event.preventDefault();
    var card = {
        month: document.querySelector('#month').value,
        income: document.querySelector('#income').value,
        expense: document.querySelector('#expense').value,
        savings: (+(document.querySelector('#income').value)) - (+(document.querySelector('#expense').value))
    }
    totalExpense.push(card);
    localStorage.setItem('userData', JSON.stringify(totalExpense));
    document.querySelector('#container').innerHTML = '';

    totalExpense.forEach(function (details) {
        var card = document.createElement('div');
        card.setAttribute('class', 'card');

        var month = document.createElement('p');
        month.setAttribute('class', 'cardM');
        month.innerText = details.month;

        var income = document.createElement('p');
        income.setAttribute('class', 'cardI');
        income.innerText = "Your income is Rs " + details.income + "/-";

        var expense = document.createElement('p');
        expense.setAttribute('class', 'cardE');
        expense.innerText = "Your expense is Rs " + details.expense + "/-";

        var savings = document.createElement('p');
        savings.setAttribute('class', 'cardS');
        savings.innerText = "Your Savings is Rs " + details.savings + "/-";

        card.append(month, income, expense, savings);

        document.querySelector('#container').append(card);
    });
    document.querySelector('#month').value = '';
    document.querySelector('#income').value = '';
    document.querySelector('#expense').value = '';
}