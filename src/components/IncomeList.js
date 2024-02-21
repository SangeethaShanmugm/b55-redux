import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addIncome } from "../redux/incomeSlice"

function IncomeList() {
    const incomes = useSelector(state => state.incomes.income)
    const dispatch = useDispatch()
    const handleAddIncome = () => {
        const newIncome = {
            id: Date.now()
        }
        dispatch(addIncome(newIncome))
    }

    return (
        <div>IncomeList
            <button onClick={handleAddIncome}>Add Income</button>
        </div>
    )
}

export default IncomeList