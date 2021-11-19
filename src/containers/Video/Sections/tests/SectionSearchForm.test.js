import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import AppTheme from "../../../../AppTheme";
import SectionSearchForm from "../SectionSearchForm";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../utility/ConsoleTestUtitlity";

const mockStore = configureStore([]);

describe("Section Search Form", () => {
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
  });

  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <SectionSearchForm />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Years")).toBeInTheDocument();
  });

  test("Checks the search value", () => {
    const rendered = render(
      <Provider store={store}>
        <AppTheme>
          <SectionSearchForm />
        </AppTheme>
      </Provider>
    );

    const input = rendered.getByLabelText("Search");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  test("Checks the dispatch", async () => {
    const query = "test";

    const rendered = render(
      <Provider store={store}>
        <AppTheme>
          <SectionSearchForm />
        </AppTheme>
      </Provider>
    );

    const input = rendered.getByLabelText("Search");

    fireEvent.change(input, { target: { value: query } });

    expect(store.dispatch).toHaveBeenCalledTimes(query.length);
  });
});
