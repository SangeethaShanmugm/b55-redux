import { combineReducers } from "@reduxjs/toolkit";
import expenditureReducer from "./expSlice"
import incomeReducer from "./incomeSlice"

const rootReducer = combineReducers({
    myExpenditure: expenditureReducer,
    incomes: incomeReducer
})

export default rootReducer