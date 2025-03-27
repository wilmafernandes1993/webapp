import apiClient from "../config/api-client";
import { Expense } from "../model/Expense";

export const getExpenses = () => {
    apiClient.get("/expenses")
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
    return apiClient.get<Expense[]>('/expenses');
}