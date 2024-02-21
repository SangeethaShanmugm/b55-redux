import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    income: []
}

const incomeSlice = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        //actions
        addIncome: (state, action) => {
            let newData = state.income.push(action.payload)
            console.log(newData)

        },
        deleteIncome: (state, action) => {
            state.income = state.income.filter((item) => {
                console.log(item.id)
                return item.id !== action.payload
            })
            console.log("payload id", action.payload)
        }
    }
})

export const { addIncome, deleteIncome } = incomeSlice.actions;

export default incomeSlice.reducer