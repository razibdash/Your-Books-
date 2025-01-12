import { createSlice } from "@reduxjs/toolkit"

const initialBooks=[
    {
        id:1,
        title:"love BD",
        author:"rajib"
    },
    {
        id:2,
        title:"BD World",
        author:"avro"
    }
]

export const booksSlice=createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        editBooks:(state,action)=>{

        },
        addbooks:(state,action)=>{

        }
    }
})

export const{showBooks}=booksSlice.actions;
export default booksSlice.reducer;