import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import orderService from "./orderService";

export const createOrder = createAsyncThunk(
  "order/create-order",
  async (order, thunkAPI) => {
    try {
      return await orderService.createOrder(order);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updatePaymentStatus = createAsyncThunk(
  "order/update-order",
  async (order, thunkAPI) => {
    try {
      return await orderService.updatePaymentStatus(order);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetOrderState = createAction("order/reset-order-state");

const initialState = {
  orders: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdOrder = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updatePaymentStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePaymentStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedOrder = action.payload;
      })
      .addCase(updatePaymentStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetOrderState, (state) => {
        return initialState;
      });
  },
});

export default orderSlice.reducer;
