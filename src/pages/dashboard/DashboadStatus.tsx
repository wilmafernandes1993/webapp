import CurrencyUtils from "../../Utils/CurrencyUtils"
import DateUtils from "../../Utils/DateUtils"

interface Props {
    loggedInUser: string;
    totalExpenses: number;
}

const DashboadStatus = ({loggedInUser, totalExpenses}: Props) => {
  return (
    <div className="mt-2">
        <div className="text-center">
            <h5 className="mb-4">
                Total expenses
            </h5>
            <h3>
                <span className="badge rounded-pill app-primary-bg-color">
                    {CurrencyUtils.formatToINR(totalExpenses)}
                </span>
            </h3>
        </div>
        <div className="d-flex justify-content-between">
            <div>
                Welcome, <b className="app-primary-color">{loggedInUser}</b>
            </div>
            <div>{DateUtils.getFormattedDate(new Date())}</div>
        </div>
    </div>
  )
}

export default DashboadStatus
