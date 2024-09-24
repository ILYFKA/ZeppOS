(() => {
  const init_view = () => {
    const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
    const battery = hmSensor.createSensor(hmSensor.id.BATTERY);
    const jstime_date = hmSensor.createSensor(hmSensor.id.TIME);
    const days_week = ['пн','вт','ср','чт','пт','сб','вс'];
    function changeBrightness(delta) {
      const val = Math.min(Math.max(0, hmSetting.getBrightness() + delta), 100);
      hmSetting.setBrightness(val);
    }
    
    function click() {
      vibrate.stop();
      vibrate.scene = 23;
      vibrate.start();
    };
    
      const bg = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: 'BG.png',
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      
      const bg_edit = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 0,
        src: 'edit/BG_edit.png',
        show_level: hmUI.show_level.ONLY_EDIT
      });
      
      const text_tap_zone_edit = hmUI.createWidget(hmUI.widget.IMG, {
        x: -2,
        y: 90,
        src: 'edit/tap_zone_text.png',
        show_level: hmUI.show_level.ONLY_EDIT
      });
      
      const text_tap_zone_edit_bright = hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 150,
        src: 'edit/tap_zone_text_bright.png',
        show_level: hmUI.show_level.ONLY_EDIT
      });
      
      const text_tap_zone_edit_date = hmUI.createWidget(hmUI.widget.IMG, {
        x: -2,
        y: 240,
        src: 'edit/tap_zone_text_date.png',
        show_level: hmUI.show_level.ONLY_EDIT
      });
      
      const text_tap_zone_edit_battery = hmUI.createWidget(hmUI.widget.IMG, {
        x: -7,
        y: 330,
        src: 'edit/tap_zone_text_battery.png',
        show_level: hmUI.show_level.ONLY_EDIT
      });
      
      const dots_time = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2,
        y: 200,
        src: 'font_clock/10.png',
        show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
      });
      
      const time1 = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2-7,
        y: 80,
        src: 'font_clock/0.png',
        show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
      });
      
      const time2 = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2-7,
        y: 140,
        src: 'font_clock/1.png',
        show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
      });
      
      const time3 = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2-7,
          y: 260,
          src: 'font_clock/2.png',
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
      });
      
      const time4 = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2-7,
        y: 320,
        src: 'font_clock/3.png',
        show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
      });
      
      const edit_tap_zone_bright = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 101,
        x: 60,
        y: 180,
        w: 80,
        h: 46,
        un_select_image: 'edit/empty.png',
        select_image: 'edit/tumbler_on_select.png',
        default_type: 1,
        optional_types: [{ type: 1, preview: 'edit/tumbler_on.png' },
        {type: 0, preview: 'edit/tumbler_off.png'}],
        count: 2,
        tips_BG: 'edit/empty.png',
        tips_x: -100,
        tips_y: -100,
        tips_width: 1
      });

      const edit_tap_zone_date = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 102,
        x: 60,
        y: 270,
        w: 80,
        h: 46,
        select_image: 'edit/tumbler_on_select.png',
        un_select_image: 'edit/empty.png',
        default_type: 1,
        optional_types: [{ type: 1, preview: 'edit/tumbler_on.png' },
        {type: 0, preview: 'edit/tumbler_off.png'}],
        count: 2,
        tips_BG: 'edit/empty.png',
        tips_x: -100,
        tips_y: -100,
        tips_width: 1
      });

      const edit_tap_zone_battery = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
        edit_id: 103,
        x: 60,
        y: 360,
        w: 80,
        h: 46,
        un_select_image: 'edit/empty.png',
        select_image: 'edit/tumbler_on_select.png',
        default_type: 1,
        optional_types: [{ type: 1, preview: 'edit/tumbler_on.png' },
        {type: 0, preview: 'edit/tumbler_off.png'}],
        count: 2,
        tips_BG: 'edit/empty.png',
        tips_x: -100,
        tips_y: -100,
        tips_width: 1
      });


      let lastMinusTap = 0,minusTap = 0;
      const tap_zone_bright_minus = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2-7,
        y: 270,
        w: 158,
        h: 125,
        src: null,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      if (edit_tap_zone_bright.getProperty(hmUI.prop.CURRENT_TYPE)===1) {tap_zone_bright_minus.addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (Date.now() - lastMinusTap > 500) {
          minusTap = 1
        } else minusTap++
        if (minusTap == 2) {
          changeBrightness(-20)
          hmUI.showToast({
            text: `Яркость: ${hmSetting.getBrightness()}%`
          });
          click();
        };
        lastMinusTap = Date.now()
      });
      };
      
      let lastPlusTap_date = 0, plusTaps_date = 0;
      const tap_zone_date = hmUI.createWidget(hmUI.widget.IMG, {
        x: 25,
        y: 200+11,
        w: 70,
        h: 50,
        src: null,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      if (edit_tap_zone_date.getProperty(hmUI.prop.CURRENT_TYPE)===1) {tap_zone_date.addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (Date.now() - lastPlusTap_date > 500) {
          plusTaps_date = 1
        } else plusTaps_date++;
        if (plusTaps_date == 2) {
          const day_week = days_week[jstime_date.week-1];
          let month = '';
          let day = ''
          
          if (jstime_date.day.toString().length===1) {day = `0${jstime_date.day.toString()}`} 
          else {day = jstime_date.day.toString()}
          
          if (jstime_date.month.toString().length===1) {month = `0${jstime_date.month.toString()}`} 
          else {month = jstime_date.month.toString()}
          hmUI.showToast({
            text: `${day_week} ${day}.${month}`
            });
            click()
          };
          lastPlusTap_date = Date.now();
        });
      };

      let lastBatteryTap = 0, batteryTaps =0;
      const tap_zone_battery = hmUI.createWidget(hmUI.widget.IMG, {
        x: 95,
        y: 200+11,
        w: 70,
        h: 50,
        src: null,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      if (edit_tap_zone_battery.getProperty(hmUI.prop.CURRENT_TYPE)===1) {tap_zone_battery.addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (Date.now() - lastBatteryTap > 500) {
          batteryTaps = 1
        } else batteryTaps++
        if (batteryTaps == 2) {
          hmUI.showToast({
            text: `⚡  ${battery.current}%`
          });
          click();
        }
        
        lastBatteryTap = Date.now();
      });
      }; 

      let lastPlusTap = 0,plusTaps = 0;
      const tap_zone_bright_plus = hmUI.createWidget(hmUI.widget.IMG, {
        x: 190/2-160/2-7,
        y: 80,
        w: 158,
        h: 125,
        src: null,
        show_level: hmUI.show_level.ONLY_NORMAL
      });
      if (edit_tap_zone_bright.getProperty(hmUI.prop.CURRENT_TYPE)===1) {tap_zone_bright_plus.addEventListener(hmUI.event.CLICK_DOWN, () => {
        if (Date.now() - lastPlusTap > 500) {
          plusTaps = 1
        } else plusTaps++

        if (plusTaps == 2) {
          changeBrightness(20)
          hmUI.showToast({
            text: `Яркость: ${hmSetting.getBrightness()}%`
          });
          click();
        };
        
        lastPlusTap = Date.now()
      });
      };   
   
      const update_time = () => {
          const jstime = hmSensor.createSensor(hmSensor.id.TIME)
        const hour1 = Math.floor(jstime.hour/10);
        const hour2 = jstime.hour%10;
        const minute1 = Math.floor(jstime.minute/10);
        const minute2 = jstime.minute%10;
        time1.setProperty(hmUI.prop.MORE, {src: `font_clock/${hour1}.png`});
        time2.setProperty(hmUI.prop.MORE, {src: `font_clock/${hour2}.png`});
        time3.setProperty(hmUI.prop.MORE, {src: `font_clock/${minute1}.png`});
        time4.setProperty(hmUI.prop.MORE, {src: `font_clock/${minute2}.png`});
      };
      const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: (function () {
        update_time();
      }),
      pause_call: (function () {}),
    });
  };
  
  __$$hmAppManager$$__.currentApp.current.module = DeviceRuntimeCore.WatchFace({
    onInit() { init_view();console.log('Watchface is launch')},
    onDestory () {vibrate && vibrate.stop()}
  })
})()