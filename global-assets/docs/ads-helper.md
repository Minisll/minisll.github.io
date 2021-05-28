# Ads Helper
광고를 삽입할 위치에다가 HTML script tag와 원하는 속성을 넣는다.

> 호스팅이 중단되거나 스크립트를 업데이트하면서 정상적으로 작동하지 않는 문제가 생길 수 있으니 스크립트를 다운로드받아서 사용하시기 바랍니다.
> 일부 기능만 테스트했기 때문에 정상적으로 작동하지 않는 기능이 다소 존재할 수 있습니다. 정상적으로 작동하는지 테스트한 후 적용하시기 바랍니다.
> 해당 스크립트에는 MIT License가 적용되어 있습니다.

## 광고 플랫폼별 무작위 광고
ad-platfrom 속성에 쉼표로 구분해서 넣는다.
<br />
예로 들어 애드센스 75%, 쿠팡 다이나믹 배너를 25% 확률로 나오게 할 경우 다음과 같이 속성을 넣는다.
```text
ad-platform="adsense,adsense,adsense,coupang-dynamic-banner"
```

# 기본 HTML script:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="text/javascript"></script>
<script src="https://ads-partners.coupang.com/g.js" type="text/javascript"></script>
<script src="./assets/js/ads.js"
        crossorigin="anonymous" type="text/javascript">
</script>
<script async src="https://t1.daumcdn.net/kas/static/ba.min.js" type="text/javascript"></script>
```

# 광고별 HTML script tag 속성
## AdSense
https://support.google.com/adsense/answer/9183549

```text
ad-platform="adsense"
adsense-data-ad-client=""
adsense-data-ad-slot=""
```

### Display 
```text
adsense-style-display="block"
adsense-data-ad-format="auto|rectangle|vertical|horizontal"
adsense-data-full-width-responsive="true"
```

### Display ads (Fixed size)
```text
adsense-style-display="inline-block"
ad-size-type="custom"
ad-width-size="300px"
ad-height-size="300px"
```

### In-feed ads
```text
adsense-style-display="block"
adsense-data-ad-format="fluid"
adsense-data-ad-layout-key=""
```

### In-article ads
```text
adsense-style-display="block"
adsense-style-text-align="center"
adsense-data-ad-layout="in-article"
adsense-data-ad-format="fluid"
```

### Matched content
```text
adsense-style-display="block"
adsense-data-matched-content-ui-type="image_sidebyside|image_card_sidebyside|image_stacked|image_card_stacked|text|text_card"
adsense-data-matched-content-rows-num="2,2"
adsense-data-matched-content-columns-num="2,4"
adsense-data-ad-format="autorelaxed"
```

## Coupang
### Dynamic Banner
```text
ad-platform="coupang-dynamic-banner"
coupang-dynamic-banner-id=""
ad-size-type="custom|width|height"
ad-width-size="300px|80%"
ad-height-size="300px|80%"
coupang-tracking-code=""
coupang-dynamic-banner-template=""
```

## AdFit
```text
ad-platform="adfit"
adfit-data-ad-unit=""
adfit-style-display="none"
ad-size-type="custom|width|height"
ad-width-size="300px"
ad-height-size="300px"
```

# License
MIT License

Copyright (c) 2021 Rudi2e

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
