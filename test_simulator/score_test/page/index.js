/**
 * Build with ZMake tool
 */

(() => {
let one=0;
let two=0;
const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
let __$$app$$__ = __$$hmAppManager$$__.currentApp;
let __$$module$$__ = __$$app$$__.current;
__$$module$$__.module = DeviceRuntimeCore.Page({
  onInit() {
    const right = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 96,
      y: 0,
      normal_color:0x117547,
      press_color:0x0f683f,
      text:String(two),
      text_size:60,
      color:0x000000,
      w: 96,
      h: 490,
      click_func: () => {
        two=two+1
        if (two >=25) {
          if (two-one>1) {
            hmUI.showToast({
              text: 'Победа площадки справа'
            })
            vibrate.stop();
            vibrate.scene = 23;
            vibrate.start();
            one=0;
            two=0;
          }
        }
        right.setProperty(hmUI.prop.TEXT,String(two));
        left.setProperty(hmUI.prop.TEXT,String(one));
      }
    });
    const left = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 0,
      normal_color:0xce3734,
      press_color:0xac2d2b,
      text:String(one),
      color:0x000000,
      text_size:60,
      w: 96,
      h: 490,
      click_func: () => {
        one=one+1
        if (one >=25) {
          if (one-two>1) {
            hmUI.showToast({
              text: 'Победа площадки слева'
            })
            vibrate.stop();
            vibrate.scene = 23;
            vibrate.start();
            one=0;
            two=0;
          }
        }
        right.setProperty(hmUI.prop.TEXT,String(two));
        left.setProperty(hmUI.prop.TEXT,String(one));
      }
    });
    const reset_button = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 66,
      y: 450,
      normal_color:0xe2e2e2,
      press_color:0xffffff,
      text:'Reset',
      color:0x000000,
      w: 60,
      h: 40,
      click_func: () => {
        one=0
        two=0
        vibrate.stop();
        vibrate.scene = 23;
        vibrate.start();
        right.setProperty(hmUI.prop.TEXT,String(two));
        left.setProperty(hmUI.prop.TEXT,String(one));
      }});
      const strokeRect1 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 28,
        y: 400,
        w:40,
        h: 20,
        radius: 5,
        line_width: 3,
        color: 0xfc6950
      });
      strokeRect1.addEventListener(hmUI.event.CLICK_UP, (info) => {
        if (one-1>-1) {
        one=one-1
        right.setProperty(hmUI.prop.TEXT,String(two));
        left.setProperty(hmUI.prop.TEXT,String(one));
  }})
      const strokeRect2 = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
        x: 123,
        y: 400,
        w:40,
        h: 20,
        radius: 5,
        line_width: 3,
        color: 0xfc6950
      });
      strokeRect2.addEventListener(hmUI.event.CLICK_UP, (info) => {
        if (two-1>-1){
        two=two-1
        right.setProperty(hmUI.prop.TEXT,String(two));
        left.setProperty(hmUI.prop.TEXT,String(one));
  }});
    },
  });
})();