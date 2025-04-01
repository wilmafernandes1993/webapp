import { useFormik } from "formik"
import { Expense } from "../../model/Expense";
import * as Yup from 'yup';
import Dropdown from "../../components/Dropdown";
import { expenseCategories } from "../../Utils/AppConstants";
import { getExpenseByExpenseId, saveOrUpdateExpense } from "../../services/expense-service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const expenseValidationSchema = Yup.object({
  name: Yup.string().required('Expense name is required')
})


const NewExpense = () => {
  const {expenseId} = useParams<{expenseId: string}>();
  const navigate = useNavigate();
  const [error, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<Expense>({
    name: '',
    amount: 0,
    note: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    if(expenseId) {
      //call the service method to get the existing response
      setLoader(true);
      getExpenseByExpenseId(expenseId)
      .then(response => {
        if(response && response.data) {
          setInitialValues(response.data);
        }
      })
      .catch(error => setErrors(error.message)
    ).finally(() => setLoader(false));
    
    }
  }, [expenseId]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Expense) => {
      saveOrUpdateExpense(values)
      .then(response => {
        if(response && response.status === 201) {
          navigate('/');
        }
        else if(response && response.status === 200) {
          navigate(`/view/${expenseId}`);
        }
      })  
      .catch(error => {
        console.log(error);
        setErrors(error.message);
      });
    },

    validationSchema: expenseValidationSchema

  })
  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      
      <div className="container col-md-4 col-sm-8 col-xs-12">
      {error && <p className="text-danger fst-italic">{error}</p>}
      {isLoading && <p>Loading...</p>}
        <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.name && formik.errors.name ? ( <div className="text-danger fst-italic">{formik.errors.name}</div>): null}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input type="number" id="amount" name="amount" className="form-control" value={formik.values.amount} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.touched.amount && formik.errors.amount ? (<div className="text-danger fst-italic">{formik.errors.amount}</div>) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Note
          </label>  
          <textarea id="note" name="note" className="form-control" value={formik.values.note} onChange={formik.handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input id="date" name="date" type="date" className="form-control" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
          {formik.touched.date && formik.errors.date ? <div className="text-danger fst-italic">{formik.errors.date}</div> : null}
        </div>
        <Dropdown options={expenseCategories} id="category" name="category" label="Category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.category} touched={formik.touched.category} />
        
        <button className="btn btn-sm btn-primary btn-outline-light" type="submit">
          Save
        </button>
      </form>
    </div>
    </div>
  )
}

export default NewExpense
