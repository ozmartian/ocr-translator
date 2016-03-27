var OCR = {
    apiKey: "9235904c3b88957",
    apiUrl: "https://api.ocr.space/parse/image",
    timeout: 60000,
    dataURI2Blob: function(dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        } else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    },
    recognize: function(image) {
        $('#result').text('');
        $('.hide:visible').fadeOut(2000);
        var data = new FormData();
        data.append("apikey", this.apiKey);
        data.append("language", "chs");
        data.append("isOverlayRequired", true),
            data.append("file", this.dataURI2Blob(image), "image.png");
        $.ajax({
            url: this.apiUrl,
            type: 'POST',
            data: data,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            timeout: OCR.timeout
        }).done(function(res) {
            if (res.OCRExitCode === 1 && !res.IsErroredOnProcessing
                && typeof res.ParsedResults[0].ParsedText != 'undefined') {
                var ocrText = res.ParsedResults[0].ParsedText.trim();
                $('#result').text(ocrText);
                $('.hide:hidden').fadeIn(2000, function() { translate.init(ocrText); }).css('display', 'inline-block');
                adjustTextarea(document.querySelector('#result'), 24);
            } else {
                alert("An error occurred. Check the console log for more details.");
                console.log(res);
            }
        });
    }
};

var adjustTextarea = function(el, minHeight) {
    var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
    var diff = outerHeight - el.clientHeight;
    el.style.height = 0;
    el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
};

var translate = {
    youdaoUrl: "https://fanyi.youdao.com/openapi.do?keyfrom=friskfly&key=1410212834&type=data&doctype=jsonp&version=1.1&callback=translate.youdao_callback&q=",
    yandexUrl: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160303T163724Z.5f03d81e233214a0.2a3088b8385dd6e0adffec8d224d405f5a1fe171&lang=zh-en&callback=translate.yandex_callback&text=",
    youdao: { jsonp: null },
    yandex: { jsonp: null },
    translation: null,
    youdao_callback: function(response) {
        if (typeof (response.translation) != "undefined" && response.translation.length > 0) {
            $('.youdao').text();
            $.each(response.translation, function(i, val) {
                if (i > 0) { $('.youdao').append('<br/>'); }
                $('.youdao').append(val);
            });
            $('.youdao').fadeIn(2000);
            translate.youdao.jsonp.remove();
            return true;
        }
        console.error("unexpected Youdao response:");
        console.error(response);
        return false;
    },
    initYoudao: function(txt) {
        if (!document.getElementById('youdao_script') || typeof translate.youdao.jsonp === "undefined") {
            translate.youdao.jsonp = document.createElement("script");
            translate.youdao.jsonp.id = "youdao_script";
            document.body.appendChild(translate.youdao.jsonp);
        }
        translate.youdao.jsonp.src = this.youdaoUrl + encodeURIComponent(txt);
    },
    yandex_callback: function(response) {
        if (response.code == 200 && response.text.length > 0) {
            $('.yandex').text(response.text[0].trim());
            $('.yandex').fadeIn(2000);
            translate.yandex.jsonp.remove();
            return true;
        }
        console.error("unexpected Yandex response:");
        console.error(response);
        return false;
    },
    initYandex: function(txt) {
        if (!document.getElementById('yandex_script') || typeof translate.yandex.jsonp === "undefined") {
            translate.yandex.jsonp = document.createElement("script");
            translate.yandex.jsonp.id = "yandex_script";
            document.body.appendChild(translate.yandex.jsonp);
        }
        translate.yandex.jsonp.src = this.yandexUrl + encodeURIComponent(txt);
    },
    init: function(txt) {
        this.initYoudao(txt);
        this.initYandex(txt);
    }
};

var dkrm = new Darkroom('#target', {
    minWidth: 100,
    minHeight: 100,
    maxWidth: 600,
    maxHeight: 500,
    ratio: 4 / 3,
    backgroundColor: '#FFF',
    plugins: {
        crop: { quickCropKey: 67 },
        save: {
            callback: function() {
                this.darkroom.selfDestroy();
                var newImage = dkrm.canvas.toDataURL();
                OCR.recognize(newImage);
            }
        }
    },
    initialize: function() {
        var cropPlugin = this.plugins['crop'];
        // cropPlugin.selectZone(170, 25, 300, 300);
        cropPlugin.requireFocus();
    }
});

/*
var imageutil = {
    render: function(src) {
        var image = new Image();
        image.onload = function() {
            var ctx = dkrm.canvas.getContext("2d");
            ctx.clearRect(0, 0, dkrm.canvas.width, dkrm.canvas.height);
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
        };
        image.src = src;
    },
    loadImage: function(src) {
        var reader = new FileReader();
        reader.onload = function(e) { this.render(e.target.result); }
        reader.readAsDataURL(src);
    },
    init: function() {
        var target = $('.drop-target');
        target.on('dragover', function(e) { e.preventDefault(); });
        target.on('drop', function(e) {
            e.preventDefault();
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            console.log(e.dataTransfer.getData());
            this.loadImage(e.dataTransfer.files[0]);
        });
    }
};
*/