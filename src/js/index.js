/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2019/06/14
 * @link https://
 */

// EaselJS系の読み込み
import { Shape, Stage } from '@createjs/easeljs';
// TweenJS系の読み込み
import { Tween } from '@createjs/tweenjs';

// import CONSTANT from './helper/CONSTANT';
// import { getIndexValueOfGivenPercentage } from './helper/util';
import '../scss/index.scss';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    this.stage = new Stage('canvas');

    this.shape = new Shape();
    this.shape.graphics.beginFill('DarkRed'); // 赤色で描画するように設定
    this.shape.graphics.drawCircle(0, 0, 100); // 半径 100px の円を描画
    this.shape.x = 200; // X 座標 200px の位置に配置
    this.shape.y = 200; // Y 座標 200px の位置に配置
    this.stage.addChild(this.shape); // 表示リストに追加

    // Stageの描画を更新します
    this.stage.update();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
