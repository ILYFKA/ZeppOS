try {
  (() => {
    const init_view = () => {
      const bgWidget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'BG.png',
        x: 0,
        y: 0,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      const bigTextWidget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'code_wizard.png',
        x: 7,
        y: 162,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      const dayWeekWidget = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
        x: 57,
        y: 262.3,
        week_en: Array.from(Array(7), (v, k) => `dayweek/${k}.png`),
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      const bluetoothWidget = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
        x: 91.3,
        y: 10,
        // w,h are optional settings. Use image width and height by default.
        type: hmUI.system_status.DISCONNECT, // Data types, refer to the table above.
        src: 'bluetooth.png'
      })
      const batteryWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        font_array: Array.from(Array(10), (v, k) => `activities_font/${k}.png`),
        x: 107,
        y: 314,
        type: hmUI.data_type.BATTERY,
        show_level: hmUI.show_level.ONLY_NORMAL
      });

      const dateWidget = hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_en_array: Array.from(Array(10), (v, k) => `activities_font/${k}.png`),
        month_startX: 112,
        month_startY: 211.5,
        month_zero: 1,
        day_en_array: Array.from(Array(10), (v, k) => `activities_font/${k}.png`),
        day_startX: 70,
        day_startY: 211.5,
        day_unit_en: 'activities_font/dot.png',
        day_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL

      });

      const timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_array: Array.from(Array(10), (v, k) => `font_clock/${k}.png`),
        hour_startX: 23,
        hour_startY: 124.5,
        hour_zero: 1,
        hour_unit_en: 'font_clock/10.png',
        hour_unit_sc:'font_clock/10.png',
        hour_unit_tc: 'font_clock/10.png',

        minute_follow:1,
        minute_array: Array.from(Array(10), (v, k) => `font_clock/${k}.png`),
        minute_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      });

      const stepsWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        font_array: Array.from(Array(10), (v, k) => `activities_font/${k}.png`),
        x: 81.5,
        y: 367.5,
        h_space: -3,
        type: hmUI.data_type.STEP,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
    }

    __$$hmAppManager$$__.currentApp.current.module = DeviceRuntimeCore.WatchFace({
      onInit() {},
      build () { init_view() },
      onDestory () {}
    })
  })()
} catch (error) {
  console.log(error)
}
