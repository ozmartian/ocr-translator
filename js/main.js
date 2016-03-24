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
        $('.hide:visible').fadeOut('slow');
        var data = new FormData();
        data.append("apikey", this.apiKey);
        data.append("language", "chs");
        data.append("isOverlayRequired", false),
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
                $('.hide:hidden').fadeIn('slow', function() { translate.init(ocrText); }).css('display', 'inline-block');
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
    yandexUrl: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160303T163724Z.5f03d81e233214a0.2a3088b8385dd6e0adffec8d224d405f5a1fe171&lang=zh-en&text=",
    jsonp: null,
    translation: null,
    youdao_callback: function(response) {
        if (typeof(response.translation) != "undefined" && response.translation.length > 0) {
            $('.translate1').text('');
            $.each(response.translation, function(i, val) {
                if (i > 0) { $('.translate1').append('<br/>'); }
                $('.translate1').append(val);
            });
            $('.translate1').fadeIn('slow');
            translate.jsonp.remove();
        }
    },
    youdao: function(txt) {
        if (!document.getElementById('translate_script') || typeof(translate.jsonp) === "undefined") {
            translate.jsonp = document.createElement("script");
            translate.jsonp.id = "translate_script";
            document.body.appendChild(translate.jsonp);
        }
        translate.jsonp.src = this.youdaoUrl + encodeURIComponent(txt);
    },
    yandex: function(txt) {
        $.post(this.yandexUrl +  encodeURIComponent(txt), function(res) {
            $('.translate2 > pre').text('');
            if (res.code === 200 && typeof res.text[0] !== 'undefined') {
                $('.translate2 > pre').text(res.text[0].trim()).fadeIn('slow');
            }
        });
    },
    init: function(txt) {
        this.youdao(txt);
        this.yandex(txt);
    }
};

var dkrm = new Darkroom('#target', {
    minWidth: 100,
    minHeight: 100,
    maxWidth: 600,
    maxHeight: 500,
    ratio: 4/3,
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

var showProgress = function(progress) {
    console.log(progress);  
};

var showResult = function(result) {
    console.log(result);
};