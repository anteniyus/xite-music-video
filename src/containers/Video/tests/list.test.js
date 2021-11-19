import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import VideoList from "../List";
import AppTheme from "../../../AppTheme";

const initialState = {
  genres: [],

  data: [],
  filteredData: [],
  currentData: [],

  page: 1,

  isLoading: false,
  error: null,
};

const mockStore = configureStore([]);

describe("Section Pagination", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ videos: initialState });

    store.dispatch = jest.fn();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <VideoList />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Years")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to next page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to previous page")).toBeInTheDocument();
  });

  test("Checks the retry button", async () => {
    store = mockStore({ videos: { ...initialState, error: "some error" } });
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <AppTheme>
          <VideoList />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Retry")).toBeInTheDocument();

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Years")).toBeInTheDocument();

    expect(screen.queryByLabelText("Go to next page")).toBeNull();
    expect(screen.queryByLabelText("Go to previous page")).toBeNull();
  });
});
