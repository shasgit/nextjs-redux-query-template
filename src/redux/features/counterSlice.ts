import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HandleCounter = {
  action: string,
  reset: number
}

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    updateValue: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "ADD":
          state.value += 1;
          break;
        case "SUB":
          state.value -= 1;
          break;
        case "RESET":
          state.value = initialState.value;
          break;
      }
    }
  },
});

export const {
  setValue,
  updateValue
} = counter.actions;
export default counter.reducer;
