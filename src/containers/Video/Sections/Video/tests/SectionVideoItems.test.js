import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import SectionVideoItems from "../SectionVideoItems";
import { testData } from "../../../../../utility/testData";
import AppTheme from "../../../../../AppTheme";

const mockStore = configureStore([]);
const currentData = testData.videos.slice(0, 12);

describe("Section Video Items", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      videos: {
        genres: [],

        data: [],
        filteredData: [],
        currentData: [...currentData],

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
          <SectionVideoItems />
        </AppTheme>
      </Provider>
    );

    screen.debug();

    expect(screen.getAllByRole("img")).toHaveLength(currentData.length);
  });
});
