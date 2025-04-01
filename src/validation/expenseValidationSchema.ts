import * as Yup from "yup";

const expenseValidationSchema = Yup.object( {
    name: Yup.string().required("Expense name is required")
    .min(3, 'Expense name must be atleast 3 characters long'),
    amount: Yup.number()
    .required('Expense amont is required')
    .positive('Expens amount must be grater than 0'),
    date: Yup.date().required('Expense date is required'),
    category: Yup.string().required('Expense category is required')
}); 

export default expenseValidationSchema;