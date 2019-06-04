let button = document.getElementById('start'),
	bv = document.getElementsByClassName('budget-value')[0],
	dayv = document.getElementsByClassName('daybudget-value')[0],
	levelval = document.getElementsByClassName('level-value')[0],
	exval = document.getElementsByClassName('expenses-value')[0],
	optex = document.getElementsByClassName('optionalexpenses-value')[0],
	incval = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	expbtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn2 = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');



let money, time;

button.addEventListener('click', function() {
	time = prompt('Input the DATE in format YYYY-MM-DD ', '');
	money = +prompt('What is your income?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Your income?", '');
	}

    appData.budget = money;
    appData.timeData = time;
    bv.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

    expbtn.addEventListener('click',function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        exval.textContent = sum;
    }
});

optionalExpensesBtn2.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
            let opt = optionalexpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optex.textContent += appData.optionalExpenses[i] + ' ';     
        }
});

countBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +exval.textContent) / 30).toFixed();
        dayv.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelval.textContent = 'Minimum level';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelval.textContent = 'Middle level';
        } else if (appData.moneyPerDay > 2000) {
            levelval.textContent = 'The highest level';
        } else {
            levelval.textContent = 'An error has occurred';
        }
    } else {
        dayBudgetValue.textContent = 'An error has occurred';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(',');
    incval.textContent = appData.income;
});


checkSavings.addEventListener('click',function() {
   if(appData.savings == true) {
    appData.savings = false;
   } else {
    appData.savings = true;
   }
});

sumValue.addEventListener('input', function() {
   if(appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;
       
    appData.monthIncome = sum/100/12*percent;
    appData.tearIncome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   }
});
percentValue.addEventListener('input', function() {
   if(appData.savings == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   }
});



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    monthIncome: {},
    yearIncome: {},
};

// // console.log(bv);
// // console.log(dayv);
// // console.log(levelval);
// // console.log(exval);
// // console.log(optex);
// // console.log(incval);
// // console.log(motval);
// // console.log(yearsavings);
// // console.log(expensesItem);
// // console.log(expbtn);
// // console.log(optionalExpensesBtn2);
// // console.log(countBtn);
// // console.log(optionalexpensesItem);
// // console.log(incomeItem);
// // console.log(checkSavings);
// // console.log(sumValue);
// // console.log(percentValue);
// // console.log(yearValue);
// // console.log(monthValue);
// // console.log(dayValue);

//goodJobMe:)
//I finished on 2019.06.03