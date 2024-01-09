import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const periodicApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://659d36bc633f9aee7908e8c9.mockapi.io/api/v1/",
  }),
  tagTypes: ["PeriodicTable"],
  endpoints: (build) => ({
    getData: build.query<ApiResponseData[], number>({
      query: () => ({ url: `all`, method: "GET" }),
      transformResponse: (response: ApiResponseData[]) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export type ApiResponseData = {
  name: string;
  symbol: string;
  number: number;
};

interface PeriodTableState {
  data?: ApiResponseData[];
  refetch?: boolean;
  loading?: boolean;
}

const initialState: PeriodTableState = {
  data: [],
  refetch: true,
  loading: true,
};

export const rootSlice = createSlice({
  name: "periodicTable",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ApiResponseData[]>) => {
      state.data = action.payload;
    },
    setRefetch: (state, action: PayloadAction<boolean>) => {
      state.refetch = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      periodicApi.endpoints.getData.matchFulfilled,
      (state, action) => {
        console.log("fulfilled", action);
        state.data = action.payload;
      }
    );
  },
});

export const { setData, setRefetch, setLoading } = rootSlice.actions;

export const { useGetDataQuery } = periodicApi;

export const selectRootInformation = (state: RootState) => state.periodicTable;

export default rootSlice.reducer;
