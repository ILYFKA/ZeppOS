import { ScreenBoard } from "../lib/mmk/ScreenBoard";
import { ScreenBoardSetup } from "../lib/mmk/ScreenBoardSetup";

Page({
  onInit() {
    const board = new ScreenBoard();
    board.title = "ScreenBaord Demo";
    board.confirmButtonText = "Settings";
    board.onConfirm = (t) => {
      console.log(t);
      board.visible = false;
      new ScreenBoardSetup().start();
    }
  }
});