import { createSlice } from "@reduxjs/toolkit";
import { Response } from "../helpers/types";

const initialState = {
  responses: new Array<Response>(),
}

const responseSlice = createSlice({
  name: "userResponses",
  initialState,
  reducers: {
    addResponse: (state, action) => {
      const existingResponses = state.responses.filter(response => response.question != action.payload.question);
      return {
        ...state,
        responses: [...existingResponses, {...action.payload}],
      }      
    },
    clearResponses: (state) => {
     return {
      ...state,
      responses: [],
     }
    }
  },
});

export const { addResponse, clearResponses } = responseSlice.actions;

export default responseSlice.reducer;
