import { Expense } from "./Expense.js";

export class Tracker{
    #expenses;
    constructor(){
        this.#expenses = [];
    }

    get expenses(){
        return this.#expenses;
    }

    addExpense(title, amount, category, date){
        try{
            const expense = new Expense(title, amount, category, date);
            this.expenses.push(expense);
        }catch(error){
            console.error(error);
        }
    }

    removeExpense(id){
        const index = this.expenses.findIndex(expense => expense.id === id);
        try{
            if(index == -1){
                throw new Error("index unfound");
            }else{
                this.expenses.splice(index, 1);
            }
        }catch(error){
            console.error(error);
        }
    }

    edit(id, newTitle, newAmount, newCategory, newDate){
        const expense = this.expenses.find(expense => expense.id === id);
        try{
            if(!expense){
                throw new Error("Expense not found");
            }else{
                expense.title = newTitle;
                expense.amount = newAmount;
                expense.category = newCategory;
                expense.date = newDate;
            }
        }catch(error){
            console.error(error);
        }
    }
        

    
}