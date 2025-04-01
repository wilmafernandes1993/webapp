import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

export const getExpenses = () => {
    /* apiClient.get("/expenses")
    .then((response) => console.log(response))
    .catch((error) => console.log(error)); */

    return apiClient.get<Expense[]>('/expenses');
}

export const getExpenseByExpenseId = (expenseId: String) => {
    return apiClient.get<Expense>(`/expenses/${expenseId}`);
}

export const deleteExpenseByExpenseId = (expenseId: string) => {
    return apiClient.delete<void>(`/expenses/${expenseId}`);
}

export const saveOrUpdateExpense =(expense: Expense) => {
    if(expense.expenseId !== undefined || expense.expenseId != null){
        return apiClient.put<Expense>(`/expenses/${expense.expenseId}`, expense);
    }

    return apiClient.post<Expense>(`/expenses`, expense);
}

