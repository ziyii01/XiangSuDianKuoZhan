// ==UserScript==
// @name         像素点扩展
// @namespace    https://github.com/ziyii01/XiangSuDianKuoZhan
// @updateURL    https://raw.githubusercontent.com/ziyii01/XiangSuDianKuoZhan/main/main.js
// @downloadURL  https://raw.githubusercontent.com/ziyii01/XiangSuDianKuoZhan/main/main.js
// @license      GNU AFFERO GENERAL PUBLIC LICENSE
// @version      2024-07-02
// @description  try to take over the world!
// @author       ziyii
// @match        https://xn--o1qx19eeqi.cn/*
// @grant        none
// @connect         raw.githubusercontent.com
// @connect         github.com
// @connect         cn.bing.com
// @connect         www.bing.com
// @connect         translate.google.cn
// @connect         translate.google.com
// @connect         localhost
// @connect         *
// @icon         https://xn--o1qx19eeqi.cn/favicon.ico
// ==/UserScript==

(function () {
    console.log("by.ziyii");
    const _url = "https://xn--o1qx19eeqi.cn/";
    const _masterList = {
        "ziyii": [{ "url": "CCFF66", "name": "错·洛" }, { "url": "66CCFF", "name": "理想" }, { "url": "66CCFC", "name": "鸽子" }]
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
    window.addEventListener("scroll", function () {
        const n = document.documentElement.scrollTop;
        if (n >= 1450) {
            刷新();
        } else {
        }
        'use strict';
    });
    // Your code here...
})();