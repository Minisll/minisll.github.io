# Ads Helper
광고를 삽입할 위치에다가 HTML script tag와 원하는 속성을 넣는다.

> 호스팅이 중단되거나 스크립트를 업데이트하면서 정상적으로 작동하지 않는 문제가 생길 수 있으니 스크립트를 다운로드받아서 사용하시기 바랍니다.
> <br>일부 기능만 테스트했기 때문에 정상적으로 작동하지 않는 기능이 다소 존재할 수 있습니다. 정상적으로 작동하는지 테스트한 후 적용하시기 바랍니다.

## 광고 플랫폼별 무작위 광고
data-ad-platfrom 속성에 쉼표로 구분해서 넣는다.
<br />
예로 들어 애드센스 75%, 쿠팡 다이나믹 배너를 25% 확률로 나오게 할 경우 다음과 같이 속성을 넣는다.
```text
data-ad-platform="adsense,adsense,adsense,coupang-dynamic-banner"
```

# 기본 HTML script:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="text/javascript"></script>
<script async src="https://ads-partners.coupang.com/g.js" type="text/javascript"></script>
<script src="./assets/js/ads-helper.js" type="text/javascript"
        data-ad-platform="..."
        data-...="...">
</script>
<script src="https://t1.daumcdn.net/kas/static/ba.min.js" type="text/javascript"></script>
```

# 광고별 HTML script tag 속성
## AdSense
https://support.google.com/adsense/answer/9183549

```text
data-ad-platform="adsense"
data-adsense-ad-client=""
data-adsense-ad-slot=""
```

### Display 
```text
data-adsense-emstyle-display="block"
data-adsense-ad-format="auto|rectangle|vertical|horizontal"
data-adsense-full-width-responsive="true"
```

### Display ads (Fixed size)
```text
data-adsense-emstyle-display="inline-block"
data-adsense-emstyle-width="300px"
data-adsense-emstyle-height="300px"
```

### In-feed ads
```text
data-adsense-emstyle-display="block"
data-adsense-ad-format="fluid"
data-adsense-ad-layout-key=""
```

### In-article ads
```text
data-adsense-emstyle-display="block"
data-adsense-emstyle-text-align="center"
data-adsense-ad-layout="in-article"
data-adsense-ad-format="fluid"
```

### Matched content
```text
data-adsense-emstyle-display="block"
data-adsense-matched-content-ui-type="image_sidebyside|image_card_sidebyside|image_stacked|image_card_stacked|text|text_card"
data-adsense-matched-content-rows-num="2,2"
data-adsense-matched-content-columns-num="2,4"
data-adsense-ad-format="autorelaxed"
```

## Coupang
### Dynamic Banner
```text
data-ad-platform="coupang-dynamic-banner"
data-coupang-dynamic-banner-id=""
data-coupang-dynamic-banner-tracking-code=""
data-coupang-dynamic-banner-template=""
data-coupang-dynamic-banner-width="300px|100%"
data-coupang-dynamic-banner-height="300px|100%"
```

## AdFit
```text
data-ad-platform="adfit"
data-adfit-emstyle-display="none"
data-adfit-ad-unit=""
data-adfit-ad-width="300"
data-adfit-ad-height="300"
```
