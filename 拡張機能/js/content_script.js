
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //画面をブラックアウトするスクリプト
    if (request == "black") {
        // オーバーレイ要素作成
        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "black";
        overlay.style.opacity = "1"; // 不透明

        // オーバーレイ要素をbodyに追加
        document.body.appendChild(overlay);
    }
    
    //開発中のスクリプト
    if (request == "OK") {
        const body = document.querySelector('body')
        const li =document.querySelectorAll('h2');
        body.prepend(li[0].textContent);
    }

    //アイキャッチを表示するスクリプト
    if (request == "eye") {
        const metaTags = document.getElementsByTagName('meta');
        let imageUrl = '';

        for (let i = 0; i < metaTags.length; i++) {
            if (
                metaTags[i].getAttribute('property') === 'og:image' ||
                metaTags[i].getAttribute('name') === 'og:image' ||
                metaTags[i].getAttribute('name') === 'twitter:image'
            ) {
                imageUrl = metaTags[i].getAttribute('content');
                break;
            }
        }
       sendResponse(imageUrl);
    }

    return true;

  });