import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import AppTheme from "../../../../AppTheme";
import SectionPagination from "../SectionPagination";
import { testData } from "../../../../utility/testData";

const mockStore = configureStore([]);

describe("Section Pagination", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      videos: {
        genres: [],

        data: [],
        filteredData: [],
        currentData: [],

        page: 1,

        isLoading: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();
    window.scrollTo = jest.fn();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <SectionPagination />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByLabelText("Go to next page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to previous page")).toBeInTheDocument();
  });

  test("Checks the paging size", () => {
    store = mockStore({
      videos: {
        genres: [],

        data: [],
        filteredData: [...testData.videos],
        currentData: [],

        page: 1,

        isLoading: false,
        error: null,
      },
    });
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <AppTheme>
          <SectionPagination />
        </AppTheme>
      </Provider>
    );

    const count =
      testData.videos.length % 12 === 0
        ? testData.videos.length / 12
        : Math.floor(testData.videos.length / 12) + 1;

    for (let i = 1; i < count + 1; i++) {
      expect(screen.getByText(i)).toBeInTheDocument();
    }
  });

  test("Checks the paging dispatch", () => {
    store = mockStore({
      videos: {
        genres: [],

        data: [],
        filteredData: [...testData.videos],
        currentData: [],

        page: 1,

        isLoading: false,
        error: null,
      },
    });
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <AppTheme>
          <SectionPagination />
        </AppTheme>
      </Provider>
    );

    const nextBtn = screen.getByLabelText("Go to next page");
    fireEvent.click(nextBtn);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
