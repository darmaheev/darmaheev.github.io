const mainTheme = {
  colors: {
    TOP_BG: "#002B43",
    MAIN_PAGE_BG: "#F5F5F5",
    FONT_COLOR: "#394A58",
    HEADER_COLOR: "#394A58",
    HREF_COLOR: "#1E96C8",
    HREF_HOVER: "#157096",
    HREF_ACTIVE: "#0C5F81",
    BORDER_COLOR: "#e6e9ec",
    TABLE_HEADER_BG: "#8ca0b3",
    TABLE_BORDER_COLOR: "#ededef",
    TABLE_COLOR: "#445265",
    TD_BORDER_COLOR: "#dfe3e9",
    GREEN_COLOR: "#6cb85c",
    RED_COLOR: "#e21919",
    LTGRAY_COLOR: "#8ca0b3",
    LTBLUE_COLOR: "#1e96c8",
    BLUE_COLOR: "#1E96C8",
    DKBLUE_COLOR: "#25578c",
    ORANGE_COLOR: "#f3722c",
    ORANGE_COLOR_ACTIVE: "#D35215",
    SERVICE_TEXT: "#394A58",
    INACTIVE_LINK: "#fffefe",
    ACTIVE_LINK: "#ffffff",
    ACTIVE_WHITE_BG: "#fafafa",
    HOVER_NEWS_BG: "#f2f3f5",
    VIEWED_COLOR: "#ebf0f7",
    LIST_HOVER_BG: "rgba(230, 233, 236, .3)",
    AUTH_COLOR: "#494949",
    INPUT_BORDER: "#d8d8d8",
    INPUT_BORDER_ACTIVE: "#cccccc",
    SUBMIT_BUTTON: "#d7d7d7",
    SUBMIT_BUTTON_ACTIVE: "#c9c9c9",
    FORM_ERROR: "#D0011B",
    EDIT_PAGE_BG: "#F7F8F9",
    ATTENTION_COLOR: "#F6A92A"
  },
  mainMenu: {
    backgroundColor: "#002B43",
    color: "#fff",
    userPositionColor: "#8CA0B3"
  },
  footer: {
    backgroundColor: "#fff",
    borderColor: "#e6e9ec"
  },
  icons: {
    DOCS_IMG: require("../web/components/NewsDocs/images/page.png") /* eslint-disable-line global-require */,
    DOCS_IMG_ACTIVE: require("../web/components/NewsDocs/images/page-active.png") /* eslint-disable-line global-require */
  },
  images: {},
  sizes: {
    SM_MAX_HEIGHT: 500,
    SM_MAX_WIDTH: 750
  },
  template: {
    size: {
      lg: "1280px"
    },
    news: {
      inner: "806px"
    }
  },
  media: {
    mobile: {
      padding: {
        left: "25px",
        right: "25px"
      },
      margin: {
        left: "25px",
        right: "25px"
      },
      height: 56
    },
    padding: {
      left: "25px",
      right: "25px"
    },
    margin: {
      left: "25px",
      right: "25px"
    },
    MEDIA_BREAKPOINTS: {
      small: 321,
      medium: 849,
      large: 1281,
      xlarge: 1920
    },
    MEDIA_CONTAINER_SIZES: {
      small: 320,
      medium: 848,
      large: 1280,
      xlarge: 1920
    }
  }
};

export default mainTheme;
