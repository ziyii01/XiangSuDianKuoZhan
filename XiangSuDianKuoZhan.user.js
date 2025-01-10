// ==UserScript==
// @name         像素点扩展
// @namespace    https://github.com/ziyii01/XiangSuDianKuoZhan
// @updateURL    https://raw.githubusercontent.com/ziyii01/XiangSuDianKuoZhan/main/main.js
// @downloadURL  https://raw.githubusercontent.com/ziyii01/XiangSuDianKuoZhan/main/main.js
// @license      GNU AFFERO GENERAL PUBLIC LICENSE
// @version      v0.0.9
// @description  try to take over the world!
// @author       ziyii
// @match        https://xn--o1qx19eeqi.cn/*
// @grant        none
// @connect      raw.githubusercontent.com
// @connect      github.com
// @connect      cn.bing.com
// @connect      www.bing.com
// @connect      translate.google.cn
// @connect      translate.google.com
// @connect      localhost
// @connect      *
// @icon         https://xn--o1qx19eeqi.cn/favicon.ico
// ==/UserScript==

(function () {
  const _猫球 = `@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@iiiuzzzzzzzzzu!!!@@@@@@@@
@@@@@@@iiuaauaziiii!!a;*~u!!@@@@@@
@@@@@@iuauia^ +ziiia^ *z-*au!@@@@@
@@@@@@izaia^          -zunnv!@@@@@
@@@@@@iza~   zu   vi   *uoov!@@@@@
@@@@@iizao             ;!!uv!@@@@@
@@@iiiunaa^           +v!izvi!!@@@
iii1unonznvao.     -;v!iuavvna!!@@
i1anooonzaazuavvvvvvnnnnzvooonai!@
iznnonzzaazuuuuuuuuuuavvoooooon1!@
iiazvvzazzuuuuuuuuuuuavvoooovzzi!@
@@iiiuauzzauuuuuuuuuuazuzvnova!!@@
@@@@@@iiiiuvvvvvvvvvvvvaua!!!!@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`;
  console.log(_猫球);
  console.log("脚本 by.ziyii");
  const _url = "https://xn--o1qx19eeqi.cn/";
  // 快捷关联
  const _masterList = {
    莫得银心: [
      { url: "6403EA", name: "蓝哑铃" },
      { url: "918D8D", name: "灰哑铃" },
    ],
    XuYangJerry: [
      { url: "CCE5FF", name: "A0蓝" },
      { url: "FFCDCC", name: "A0红" },
    ],
  };
  // 背景图
  const _imageList = {
    CCE5FF: "https://www.helloimg.com/i/2025/01/10/6780d6358ae16.gif",
    FFCDCC: "https://www.helloimg.com/i/2025/01/10/6780d6358ae16.gif",
  };
  let _flag = 0;
  // 设置关联像素点
  if (_masterList[主人] != undefined) {
    const a = document.querySelector("#屋顶");
    a.appendChild(document.createElement("br"));
    for (let i = 0; i < _masterList[主人].length; i++) {
      if (_masterList[主人][i].url == 颜色) {
        continue;
      } else {
        const _a = document.createElement("a");
        _a.setAttribute("href", `${_url}${_masterList[主人][i].url}`);
        _a.setAttribute("style", `color:#${_masterList[主人][i].url};`);
        _a.textContent = `${_masterList[主人][i].name}    `;
        a.appendChild(_a);
      }
    }
  }
  // 下拉刷新
  window.addEventListener("scroll", function () {
    if (
      document.getElementById("实时").getBoundingClientRect().bottom < 0 &&
      _flag == 0
    ) {
      刷新();
      _flag = 1;
    } else if (
      document.getElementById("实时").getBoundingClientRect().bottom > 0 &&
      _flag == 1
    ) {
      _flag = 0;
    }
  });
  //等待加载完毕
  window.addEventListener("load", function () {
    //简介自动打开
    try {
      document.getElementById("代码k3").style = "display:none;";
      document.getElementById("代码ka3").style = "";
    } catch (e) {
      console.log(e);
    }
    //参加活动自动打开
    try {
      document.getElementById("代码sj").style = "display:none;";
      document.getElementById("代码sja").style = "";
      console.log("xxx");
    } catch (e) {
      console.log(e);
    }
    //背景图自动更换
    try {
      if (_imageList[颜色] != undefined) {
        document.getElementById(
          "房子"
        ).style = `background-size: 400px 400px; background-image: url('${_imageList[颜色]}');`;
      }
    } catch (e) {
      console.log(e);
    }
  });
})();
