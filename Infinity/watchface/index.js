try {
  (() => {
    const init_view = () => {
      const timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_align: hmUI.align.LEFT,
        hour_array: Array.from(Array(10), (v, k) => `time/${k}.png`),
        hour_space: 4,
        hour_startX: 40,
        hour_startY: 40,
        hour_zero: 1,

        minute_align: hmUI.align.LEFT,
        minute_array: Array.from(Array(10), (v, k) => `time/${k}.png`),
        minute_space: 4,
        minute_startX: 40,
        minute_startY: 309,
        minute_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      
      const dateWidget = hmUI.createWidget(hmUI.widget.IMG_DATE, {
        month_align: hmUI.align.LEFT,
        month_en_array: Array.from(Array(10), (v, k) => `date/${k}.png`),
        month_space: 1,
        month_startX: 106,
        month_startY: 420,
        month_zero: 1,

        day_align: hmUI.align.LEFT,
        day_en_array: Array.from(Array(10), (v, k) => `date/${k}.png`),
        day_startX: 48,
        day_startY: 420,
        day_unit_en: 'date/dot.png',
        day_space: 1,
        day_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      });

      const infinityWidget_null = hmUI.createWidget(hmUI.widget.IMG, {
			  show_level: hmUI.show_level.ONLY_NORMAL,
        x: 6.5,
        src: 'infinity.png',
        y: 170
      });

      const infinityWidget_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
        image_array: Array.from(Array(11), (v, k) => `levels/${k}.png`),
        image_length: 11,
        type: hmUI.data_type.STEP,
			  show_level: hmUI.show_level.ONLY_NORMAL,
        x: 6.5,
        y: 170
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
