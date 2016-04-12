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
    adjustTextarea: function(el, minHeight) {
        if (!minHeight) { minHeight = 24; }
        var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
        var diff = outerHeight - el.clientHeight;
        el.style.height = 0;
        el.style.height = Math.max(minHeight, el.scrollHeight + diff) + 'px';
    },
    recognize: function(image) {
        $('#result').text('');
        $('.hidden').removeClass('in');
        var data = new FormData();
        data.append("apikey", this.apiKey);
        data.append("language", "chs");
        data.append("isOverlayRequired", true);
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
                $('#result, .reset')
                    .addClass('in')
                    .css('display', 'inline-block');
                OCR.adjustTextarea(document.getElementById('result'));
                //imgEditor.progress('translating text');
                NProgress.set(0.6);
                translate.init(ocrText);
            } else {
                alert("An error occurred. Check the console log for more details.");
                console.log(res);
            }
        });
    }
};

var translate = {
    youdaoUrl: "https://fanyi.youdao.com/openapi.do?keyfrom=friskfly&key=1410212834&type=data&doctype=jsonp&version=1.1&callback=translate.youdao_callback&q=",
    yandexUrl: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160303T163724Z.5f03d81e233214a0.2a3088b8385dd6e0adffec8d224d405f5a1fe171&lang=zh-en&callback=translate.yandex_callback&text=",
    youdao: { jsonp: null, done: false },
    yandex: { jsonp: null, done: false },
    translation: null,
    youdao_callback: function(response) {
        translate.youdao.done = true;
        if (translate.youdao.done && translate.yandex.done) { NProgress.done(); }
        if (typeof (response.translation) != "undefined" && response.translation.length > 0) {
            $('.youdao').text();
            $.each(response.translation, function(i, val) {
                if (i > 0) { $('.youdao').append('<br/>'); }
                $('.youdao').append(val);
            });
            $('.youdao')
                .addClass('in')
                .css('display', 'inline-block');
            translate.youdao.jsonp.remove();
            return true;
        }
        console.error("unexpected Youdao response:");
        console.error(response);
        return false;
    },
    initYoudao: function(txt) {
        translate.youdao.done = false;
        if (!document.getElementById('youdao_script') || typeof translate.youdao.jsonp === "undefined") {
            translate.youdao.jsonp = document.createElement("script");
            translate.youdao.jsonp.id = "youdao_script";
            document.body.appendChild(translate.youdao.jsonp);
        }
        translate.youdao.jsonp.src = this.youdaoUrl + encodeURIComponent(txt);
    },
    yandex_callback: function(response) {
        translate.yandex.done = true;
        if (translate.youdao.done && translate.yandex.done) { NProgress.done(); }
        if (response.code == 200 && response.text.length > 0) {
            $('.yandex').text(response.text[0].trim());
            $('.yandex')
                .addClass('in')
                .css('display', 'inline-block');
            translate.yandex.jsonp.remove();
            return true;
        }
        console.error("unexpected Yandex response:");
        console.error(response);
        return false;
    },
    initYandex: function(txt) {
        translate.yandex.done = false;
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
        $('.reset > button').on('click',function(e) { window.location.reload(); });
    }
};

var dkrm;
var imgEditor = {
    enableTools: function() {
        $('.darkroom-button-group button').slice(3).removeAttr('disabled');
    },
    disableTools: function() {
        $('.darkroom-button-group button').slice(3).attr('disabled', 'disabled');
    },
    init: function(el) {
        dkrm = new Darkroom(el, {
            minWidth: 200,
            minHeight: 200,
            backgroundColor: 'transparent',
            plugins: {
                save: {
                    callback: function() {
                        NProgress.start(0.2);
                        this.darkroom.selfDestroy();
                        var newImage = dkrm.canvas.toDataURL();
                        OCR.recognize(newImage);
                    }
                }
            }
        });
    }
};

imgEditor.init('#target');

dkrm.onchange = function() { if ($('img.ocr-placeholder').length != 0) { imgEditor.enableTools(); } };
window.onload = function() { imgEditor.disableTools(); }