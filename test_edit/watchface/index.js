try {
  (() => {
    const init_view = () => {
      const timeWidget = hmUI.createWidget(hmUI.widget.IMG_TIME, {
        hour_align: hmUI.align.LEFT,
        hour_array: Array.from(Array(10), (v, k) => `font_clock/${k}.png`),
        hour_space: 4,
        hour_startX: 60,
        hour_startY: 25,
        hour_zero: 1,

        minute_align: hmUI.align.LEFT,
        minute_array: Array.from(Array(10), (v, k) => `font_clock/${k}.png`),
        minute_space: 4,
        minute_startX: 60,
        minute_startY: 82,
        minute_zero: 1,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      let timePointer = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
        hour_centerX: 60, // Center of pointer rotation corresponds to centerX.
        hour_centerY: 60, // Center of pointer rotation corresponds to centerY.
        hour_posX: 100, // The pointer's own center of rotation, corresponds to the x in position.
        hour_posY: 10, // Pointer's own center of rotation, corresponds to y in position.
        hour_path: 'clock.png', // Path of the pointer.
        hour_cover_y: 0,
        hour_cover_x: 0
        // Minute and seconds as same as above, just replace hour with minute/second.
      })
      const editable = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 101,
        x: 40,
        y: 120,
        select_image: 'edit_tip_focus.png',
        un_select_image: 'edit_tip.png',
        default_type: hmUI.edit_type.HEART,
        optional_types: [{ type: hmUI.edit_type.HEART, preview: 'heart.png' },
        {type: hmUI.edit_type.STEP, preview: 'steps.png'}],
        count: 2,
        title_en: "Activity",
        tips_BG: '',
        tips_x: -100,
				tips_y: 0,
				tips_width: 20,
				tips_margin: 1,
				show_level: hmUI.show_level.ALL
      });
      console.log(editable.getProperty(hmUI.prop.CURRENT_TYPE))
      const dayText = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
        x: 50,
        y: 200,
        type: editable.getProperty(hmUI.prop.CURRENT_TYPE),
        font_array: Array.from(Array(10), (v, k) => `font_clock/${k}.png`),
        show_level: hmUI.show_level.ONLY_NORMAL
      });

    };

    __$$hmAppManager$$__.currentApp.current.module = DeviceRuntimeCore.WatchFace({
      onInit() {},
      build () { init_view() },
      onDestory () {}
    });
  })();
} catch (error) {
  console.log(error);
}
