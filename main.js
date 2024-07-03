// ==UserScript==
// @name         像素点扩展
// @namespace    https://github.com/ziyii01/XiangSuDianKuoZhan
// @updateURL    https://raw.githubusercontent.com/ziyii01/XiangSuDianKuoZhan/main/main.js
// @downloadURL  https://raw.githubusercontent.com/ziyii01/XiangSuDianKuoZhan/main/main.js
// @license      GNU AFFERO GENERAL PUBLIC LICENSE
// @version      v0.0.6
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
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`
    console.log(_猫球);
    console.log("脚本 by.ziyii");
    const _url = "https://xn--o1qx19eeqi.cn/";
    // 快捷关联
    const _masterList = {
        "ziyii": [{ "url": "CCFF66", "name": "错·洛" }, { "url": "66CCFF", "name": "理想" }, { "url": "66CCFC", "name": "鸽子" }],
        "莫得银心": [{ "url": "6403EA", "name": "蓝哑铃" }, { "url": "918D8D", "name": "灰哑铃" }],
        "XuYangJerry": [{ "url": "CCE5FF", "name": "A0蓝" }, { "url": "FFCDCC", "name": "A0红" }]
    };
    if (_masterList[主人] != undefined) {
        const a = document.querySelector("#屋顶");
        a.appendChild(document.createElement("br"));
        // a.appendChild(document.createElement("span"));
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
    };
    // 下拉刷新
    window.addEventListener("scroll", function () {
        const n = document.documentElement.scrollTop;
        if (n >= 1450) {
            刷新();
        } else {
        }
        'use strict';
    });
    //等待加载完毕
    window.addEventListener("load", function () {
        //简介自动打开
        try {
            document.getElementById('代码k3').style = 'display:none;';
            document.getElementById('代码ka3').style = '';
        }
        catch (e) {
            console.log(e);
        }
        try {
            //参加活动自动打开
            document.getElementById('代码sj').style = 'display:none;';
            document.getElementById('代码sja').style = '';
            console.log("xxx");
        }
        catch (e) {
            console.log(e);
        }
    });
})();