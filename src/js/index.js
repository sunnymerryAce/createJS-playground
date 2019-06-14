/**
 * @author Yoichiro Hirano
 * @description Develop Environment Model
 * @created 2019/06/14
 * @link https://
 */

// EaselJS系の読み込み
import {
  Shape, Stage, Text, Bitmap,
} from '@createjs/easeljs/dist/easeljs.min.js';
// TweenJS系の読み込み
import { Tween } from '@createjs/tweenjs/dist/tweenjs.min.js';

// import CONSTANT from './helper/CONSTANT';
// import { getIndexValueOfGivenPercentage } from './helper/util';
import '../scss/index.scss';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    this.stage = new Stage('canvas');
    this.stage.addChild(Index.getFilledEllipse());
    this.stage.addChild(Index.getRect());
    this.stage.addChild(Index.getStar());
    this.stage.addChild(Index.getText('TEST'));
    this.stage.addChild(
      Index.getImage('https://www.cssdesignawards.com/imgs/cssda-monogram-wotd.svg'),
    );
    this.stage.update(); // Stageの描画を更新して反映
  }

  /**
   * 塗りの楕円形を作成する
   */
  static getFilledEllipse() {
    const shape = new Shape();
    shape.graphics.beginFill('#ff0000'); // 赤色で描画するように設定
    shape.graphics.drawCircle(0, 0, 100); // 半径 100px の円を描画
    shape.x = 200; // X 座標 200px の位置に配置
    shape.y = 200; // Y 座標 200px の位置に配置
    shape.scaleX = 0.5; // 50%の幅に設定する
    shape.rotation = 45; // 45度傾ける
    shape.alpha = 0.5; // 50%の透明度に設定する
    // shape.visible = false; // 非表示にする
    return shape;
  }

  /**
   * 枠塗りの長方形を作成する
   */
  static getRect() {
    const shape = new Shape();
    shape.graphics.beginStroke('#00ff00'); // 線の色を指定
    shape.graphics.setStrokeStyle(5); // 線の幅を指定
    shape.graphics.drawRect(0, 0, 200, 100);
    shape.x = 400;
    shape.y = 100;
    return shape;
  }

  /**
   * ★を作成する
   */
  static getStar() {
    const shape = new Shape();
    shape.graphics.beginFill('#0000ff');
    shape.graphics.drawPolyStar(0, 0, 75, 5, 0.6, -90); // (x座標, y座標, 半径, 頂点数, 谷の深さ, 起点角)
    shape.x = 800;
    shape.y = 100;
    return shape;
  }

  /**
   * テキスト
   */
  static getText(string) {
    const shape = new Text(string, '24px serif', '#000000');
    return shape;
  }

  /**
   * 画像
   */
  static getImage(url) {
    const shape = new Bitmap(url);
    shape.regX = 100;
    shape.regY = 100;
    return shape;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
