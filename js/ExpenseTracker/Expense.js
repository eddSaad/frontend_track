export class Expense{
    static id = 1;
    #id;
    #title; 
    #amount;
    #category;
    #date;
    constructor(title, amount, category, date){
        this.#id = Expense.id++;
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }

    get id(){
        return this.#id;
    }

    get title(){
        return this.#title;
    }
    get amount(){
        return this.#amount;
    }
    get category(){
        return this.#category;
    }
    get date(){
        return this.#date;
    }
    get formattedamount(){
        return `$${this.#amount.toFixed(2)}`;
    }


    set title(title){
        if(typeof title !== "string" || title.trim() === ""){
            throw new Error("Title must be a non-empty string");
        }
        this.#title = title;
    }

    set amount(amount){
        if(typeof amount !== "number" || amount <= 0){
            throw new Error("Amount must be a positive number");
        }
        this.#amount = amount;
    }
    
    set category(category){
        if(typeof category !== "string" || category.trim() === ""){
            throw new Error("Category must be a non-empty string");
        }
        this.#category = category;
    }
    set date(date){
        if(!(date instanceof Date) || isNaN(date.getTime())){
            throw new Error("Date must be a valid date object");
        }
        this.#date = date;
    }
}