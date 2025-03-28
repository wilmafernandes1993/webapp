import ExpenseList from "../../components/ExpenseList";

import useExpenses from "../../hooks/useExpenses";
import { Expense } from "../../model/Expense";
import DashboadStatus from "./DashboadStatus";

const Dashboard = () => {
  const loggedInUser: string = "wilma@example.com";

  const {expenses, error, isLoading} = useExpenses();

  const totalExpenses = expenses.reduce((acc: number, expense: Expense) => acc + expense.amount, 0);


  return (
      <div className="container">
        {isLoading  && <p>Loading..</p>}
        {error && <p>{error}</p>}
        <DashboadStatus loggedInUser={loggedInUser} totalExpenses={totalExpenses}/>
        <hr/>
        <ExpenseList expenses={expenses} />
      </div>
    
  );
};

export default Dashboard;
