try {
  (() => {
    const init_view = () => {

      const bgWidget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'images/bg.png',
        x: 0,
        y: 0,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const bg_aod_Widget = hmUI.createWidget(hmUI.widget.IMG, {
        src: 'images/bg_aod.png',
        x: 0,
        y: 0,
        show_level: hmUI.show_level.ONLY_AOD
      })

      const timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_align: hmUI.align.LEFT,
        hour_array: Array.from(Array(10), (v, k) => `images/time/${k}.png`),
        hour_space: 4,
        hour_startX: 33,
        hour_startY: 25,
        hour_zero: 1,

        minute_align: hmUI.align.LEFT,
        minute_array: Array.from(Array(10), (v, k) => `images/time/${k}.png`),
        minute_space: 4,
        minute_startX: 33,
        minute_startY: 82,
        minute_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const time_aod_Widget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_align: hmUI.align.CENTER_H,
        hour_array: Array.from(Array(10), (v, k) => `images/time_AOD/${k}.png`),
        hour_space: 4,
        hour_startX: 7,
        hour_startY: 79,
        hour_zero: 1,

        minute_align: hmUI.align.CENTER_H,
        minute_array: Array.from(Array(10), (v, k) => `images/time_AOD/${k}.png`),
        minute_space: 4,
        minute_startX: 7,
        minute_startY: 159,
        minute_zero: 1,
        show_level: hmUI.show_level.ONLY_AOD
      })

      const dateWidget = hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_align: hmUI.align.LEFT,
        month_en_array: Array.from(Array(10), (v, k) => `images/date/${k}.png`),
        month_space: 1,
        month_startX: 108,
        month_startY: 420,
        month_zero: 1,

        day_align: hmUI.align.LEFT,
        day_en_array: Array.from(Array(10), (v, k) => `images/date/${k}.png`),
        day_startX: 23,
        day_startY: 420,
        day_unit_en: 'images/date/colon.png',
        day_space: 1,
        day_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const weekdayWidget = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
        week_en: Array.from(Array(7), (v, k) => `images/weekday/${k}.png`),
        x: 67,
        y: 387,
        show_level: hmUI.show_level.ONLY_NORMAL
      })

      const weekday_aod_Widget = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
        week_en: Array.from(Array(7), (v, k) => `images/weekday_AOD/${k}.png`),
        x: 67,
        y: 387,
        show_level: hmUI.show_level.ONLY_AOD
      })

      const weatherWidget = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 80,
        y: 350,
        h_space: 1,
        align_h: hmUI.align.RIGHT,
        unit_en: 'images/weather/degree.png',
        negative_image: 'images/weather/minus.png',
        font_array: Array.from(Array(10), (v, k) => `images/weather/${k}.png`),
        type: hmUI.data_type.WEATHER_CURRENT,
        show_level: hmUI.show_level.ONLY_NORMAL
      })
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
