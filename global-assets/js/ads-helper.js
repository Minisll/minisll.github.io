/**
 * Ads Helper
 * 
 * 
 * Readme: ../docs/ads-helper.md
 * 
 * 
 * MIT License
 * 
 * Copyright (c) 2021 Rudi2e
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * 
**/

function AdElementSize() {
    SIZETYPE = CS.getAttribute("ad-size-type");

    if (SIZETYPE == "custom") {
        WIDTH = CS.getAttribute("ad-width-size"),
        HEIGHT = CS.getAttribute("ad-height-size");
    } else if (SIZETYPE == "width") {
        WIDTH = CS.getAttribute("ad-width-size"),
        HEIGHT = CSP.clientHeight;
    } else if (SIZETYPE == "height") {
        WIDTH = CSP.clientWidth,
        HEIGHT = CS.getAttribute("ad-height-size");
    } else {
        WIDTH = 200, HEIGHT = 200;
    }
}

function LoadAdSense() {
    AdElementSize();

    var styleDisplay = CS.getAttribute("adsense-style-display"),
        styleTextAlign = CS.getAttribute("adsense-style-text-align"),
        adClient = CS.getAttribute("adsense-data-ad-client"),
        adSlot = CS.getAttribute("adsense-data-ad-slot"),
        adFormat = CS.getAttribute("adsense-data-ad-format"),
        adLayout = CS.getAttribute("adsense-data-ad-layout"),
        adLayoutKey = CS.getAttribute("adsense-data-ad-layout-key"),
        fullWidthResponsive = CS.getAttribute("adsense-data-full-width-responsive"),
        matchedContentUiType = CS.getAttribute("adsense-data-matched-content-ui-type"),
        matchedContentRowsNum = CS.getAttribute("adsense-data-matched-content-rows-num"),
        matchedContentColumnsNum = CS.getAttribute("adsense-data-matched-content-columns-num"),
        e = document.createElement("ins");

    e.className = "adsbygoogle";
    e.setAttribute("data-ad-client", adClient);
    e.setAttribute("data-ad-slot", adSlot);

    if (WIDTH) {
        e.style.width = WIDTH;
    } if (HEIGHT) {
        e.style.height = HEIGHT;
    } if (styleDisplay) {
        e.style.display = styleDisplay;
    } if (styleTextAlign) {
        e.style.textAlign = styleTextAlign;
    } if (adFormat) {
        e.setAttribute("data-ad-format", adFormat);
    } if (adLayout) {
        e.setAttribute("data-ad-layout", adLayout);
    } if (adLayoutKey) {
        e.setAttribute("data-ad-layout-key", adLayoutKey);
    } if (fullWidthResponsive) {
        e.setAttribute("data-full-width-responsive", fullWidthResponsive);
    } if (matchedContentUiType) {
        e.setAttribute("data-matched-content-ui-type", matchedContentUiType);
    } if (matchedContentRowsNum) {
        e.setAttribute("data-matched-content-rows-num", matchedContentRowsNum);
    } if (matchedContentColumnsNum) {
        e.setAttribute("data-matched-content-columns-num", matchedContentColumnsNum);
    }

    CSP.appendChild(e);
    (adsbygoogle = window.adsbygoogle || []).push({});
}

function LoadCoupangDynamicBanner() {
    AdElementSize();
    var dynamicBannerId = CS.getAttribute("coupang-dynamic-banner-id"),
        dynamicBannerTemplate = CS.getAttribute("coupang-dynamic-banner-template"),
        trackingCode = CS.getAttribute("coupang-tracking-code"),
        obj = new Object();

    obj.id = dynamicBannerId;

    if (dynamicBannerTemplate) {
        obj.template = dynamicBannerTemplate;
    } if (trackingCode) {
        obj.trackingCode = trackingCode;
    } if (WIDTH) {
        obj.width = WIDTH;
    } if (HEIGHT) {
        obj.height = HEIGHT;
    }

    new PartnersCoupang.G(obj);

    var e = document.querySelector('iframe[id^="' + dynamicBannerId + '"][name^="' + dynamicBannerId + '"][src*="id=' + dynamicBannerId + '"][src^="https://ads-partners.coupang.com/"]').parentNode;
    CSP.appendChild(e);
}

function LoadAdFit() {
    AdElementSize();
    var styleDisplay = CS.getAttribute("adfit-style-display"),
        adUnit = CS.getAttribute("adfit-data-ad-unit"),
        e = document.createElement("ins");

    e.className = "kakao_ad_area";

    if (styleDisplay) {
        e.style.display = styleDisplay;
    } if (adUnit) {
        e.setAttribute("data-ad-unit", adUnit);
    } if (WIDTH) {
        e.setAttribute("data-ad-width", WIDTH);
    } if (HEIGHT) {
        e.setAttribute("data-ad-height", HEIGHT);
    }

    CSP.appendChild(e);
}


var WIDTH, HEIGHT, SIZETYPE,
    CS = document.currentScript,
    CSP = CS.parentNode,
    PLATFORM = CS.getAttribute("ad-platform"),
    ARRAY = PLATFORM.replace(/ /g, "").split(","),
    RNG = Math.floor(Math.random() * ARRAY.length);


if (ARRAY[RNG] == "adsense") {
    LoadAdSense();
} else if (ARRAY[RNG] == "coupang-dynamic-banner") {
    LoadCoupangDynamicBanner();
} else if (ARRAY[RNG] == "adfit") {
    LoadAdFit();
} else {
    console.log("Unknown ad platform: " + ARRAY[RNG]);
}
