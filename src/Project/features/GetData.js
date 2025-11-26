import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlbooks = "https://back-end-v1.vercel.app/api/books/";
//--------------------Functions------------------------------
export const FetchAllBooks = createAsyncThunk(
  "getallbooksFunctions",
  async () => {
    const response = await axios
      .get(urlbooks)
      .then((responses) => responses.data);
    return response;
  }
);
//--------------------Functions------------------------------
export const GetbooksFunction = createSlice({
  name: "GetAllBooks",
  initialState: {
    AllBooks: ["hello dz"],
    OneBook: {},
    SerchReasulte: [],
    SameBooks: [],
    TheLast5Books: [],
    IsDone: false,
  },
  reducers: {
    getall: (state, actions) => {
      console.log("the get book  done");
    },
  },
  extraReducers(bulders) {
    bulders.addCase(FetchAllBooks.fulfilled, (state, action) => {
      console.log(state.AllBooks);
      state.AllBooks = action.payload;
    });
  },
});

export const { getall } = GetbooksFunction.actions;

export default GetbooksFunction.reducer;
