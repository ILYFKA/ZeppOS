import {
  DEFAULT_COLOR,
  DEFAULT_COLOR_TRANSPARENT,
} from "../utils/config/constants";
import { DEVICE_WIDTH } from "../utils/config/device";

const logger = DeviceRuntimeCore.HmLogger.getLogger("fetch_api");
const { messageBuilder } = getApp()._options.globalData;

Page({
  state: {},
  build() {
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: (DEVICE_WIDTH - px(400)) / 2,
      y: px(260),
      w: px(400),
      h: px(100),
      text_size: px(36),
      radius: px(12),
      normal_color: DEFAULT_COLOR,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "Fetch Data",
      click_func: (button_widget) => {
        logger.log("click button");
        this.fetchData();
      },
    });
  },
  fetchData() {
    messageBuilder
      .request({
        method: "GET_DATA",
      })
      .then((data) => {
        logger.log("receive data");
        const { result = {} } = data;
        const text = JSON.stringify(result);
      });
  },
});
