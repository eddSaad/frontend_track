import { Tracker } from './Tracker.js';

const title = document.getElementById("title");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");
const addBtn = document.getElementById("add");

const tracker = new Tracker();

addBtn.addEventListener("click", () => {
    try{
        const amountValue = Number(amount.value)
        const dateValue = new Date(date.value);
        tracker.addExpense(title.value, amountValue, category.value, dateValue);
        addExpenseToTable(tracker);
        
    }catch(error){
        console.error(error);
    }
    
})

document.querySelector("#table-body").addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
        tracker.removeExpense(Number(deleteBtn.dataset.id));
        addExpenseToTable(tracker);
        return;
    }

    const editBtn = e.target.closest(".edit-btn");
    if (editBtn) {
        const id = Number(editBtn.dataset.id);
        tracker.edit(id, title.value, Number(amount.value), category.value, new Date(date.value));
        addExpenseToTable(tracker);
        return;
    }
});

function addExpenseToTable(tracker){
    const tbody = document.querySelector("#table-body");
    tbody.innerHTML = "";

    tracker.expenses.forEach(expense => {
        const row = tbody.insertRow();
        row.classList.add("expense-row");
        const idCell = row.insertCell();
        const titleCell = row.insertCell();
        const amountCell = row.insertCell();
        const categoryCell = row.insertCell();
        const dateCell = row.insertCell();

        
        idCell.textContent = expense.id;
        titleCell.textContent = expense.title;
        amountCell.textContent = expense.formattedamount;
        categoryCell.textContent = expense.category;
        dateCell.textContent = expense.date.toLocaleDateString();


        addButtonToRow("Delete", row, expense.id, "delete-btn");
        addButtonToRow("Edit", row, expense.id, "edit-btn");
    }) 
}

function addButtonToRow(name, row, id, className){
    const cell = row.insertCell();
    const button = document.createElement("button");
    button.textContent = name;
    button.type = "button";
    button.dataset.id = id;
    button.classList.add(className);
    cell.appendChild(button);
}

function removeExpenseById(tracker, id){
    
}