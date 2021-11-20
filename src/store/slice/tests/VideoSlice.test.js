import videoReducer, {
  getVideos,
  updateCurrentDataByOffset,
  updateVideos,
} from "../VideoSlice";
import { testData } from "../../../utility/testData";
import settings from "../../../settings.json";

const initialState = {
  genres: [],

  data: [],
  filteredData: [],
  currentData: [],

  page: 1,

  isLoading: false,
  error: null,
};

describe("Video Slice", () => {
  test("Checks the initial state", () => {
    expect(videoReducer(undefined, {})).toEqual(initialState);
  });

  test("Checks the loading true when getVideos is pending", () => {
    const action = { type: getVideos.pending.type };
    const state = videoReducer(initialState, action);

    expect(state).toEqual({ ...initialState, isLoading: true });
  });

  test("Checks the loading and the images and array shift when getVideos is fulfilled", () => {
    const action = {
      type: getVideos.fulfilled.type,
      payload: testData,
    };
    const state = videoReducer(initialState, action);

    expect(state).toEqual({
      genres: testData.genres,

      data: testData.videos,
      filteredData: testData.videos,
      currentData: testData.videos.slice(0, settings.configs.ITEM_PER_PAGE),

      page: 1,

      isLoading: false,
      error: null,
    });
  });

  test("Checks the loading false and the error when getVideos is rejected", () => {
    const action = {
      type: getVideos.rejected.type,
      error: { message: "some error" },
    };
    const state = videoReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      error: "some error",
    });
  });

  test("Checks filtering", () => {
    const filledState = {
      ...initialState,
      data: testData.videos,
      filteredData: testData.videos,
      genres: testData.genres,
    };
    expect(
      videoReducer(
        filledState,
        updateVideos({ genres: [17], years: [1994], query: "Tony Bennett" })
      )
    ).toEqual({
      ...filledState,
      filteredData: [
        {
          id: 504508,
          artist: "Tony Bennett",
          title: "Fly Me to the Moon (In Other Words) (Live)",
          release_year: 1994,
          genre_id: 17,
          image_url:
            "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504508/images/app/w522_h292.jpg",
        },
      ],
      currentData: [
        {
          id: 504508,
          artist: "Tony Bennett",
          title: "Fly Me to the Moon (In Other Words) (Live)",
          release_year: 1994,
          genre_id: 17,
          image_url:
            "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504508/images/app/w522_h292.jpg",
        },
      ],
    });
  });

  test("Checks paging change", () => {
    const filledState = {
      ...initialState,
      data: testData.videos,
      filteredData: testData.videos,
      genres: testData.genres,
    };
    expect(
      videoReducer(
        filledState,
        updateCurrentDataByOffset({
          offset: Math.floor(
            testData.videos.length / settings.configs.ITEM_PER_PAGE
          ),
        })
      )
    ).toEqual({
      ...filledState,
      page:
        Math.floor(testData.videos.length / settings.configs.ITEM_PER_PAGE) + 1,
      currentData: testData.videos.slice(
        Math.floor(testData.videos.length / settings.configs.ITEM_PER_PAGE) *
          settings.configs.ITEM_PER_PAGE
      ),
    });
  });
});
