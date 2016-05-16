! function() {
    "use strict";
    var t = document.createElement("div");
    t.id = "darkroom-icons", t.style.height = 0, t.style.width = 0, t.style.position = "absolute", t.style.visibility = "hidden", t.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="invert" viewBox="0 0 512 512"><path d="M260.604 432.04V103.7c-34.1 34.42-68.867 68.207-102.523 103.05-38.148 42.793-44.836 110.516-13.33 158.91 24.282 39.61 68.993 66.617 115.854 66.38zm128.573-264.583c53.295 51.613 68.963 137.26 36.5 204.152-31.007 68.573-107.67 112.59-182.582 104.216C164.982 469.57 95.912 407.136 81.975 330c-12.868-61.71 10.74-127.92 57.303-169.79 40.442-40.44 80.884-80.883 121.326-121.325l128.573 128.572z"/></symbol><symbol id="less-brightness" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-2.672v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688L23.296 12z"/></symbol><symbol id="more-brightness" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8.016c2.203 0 3.984 1.78 3.984 3.984s-1.78 3.984-3.984 3.984S8.016 14.204 8.016 12 9.796 8.016 12 8.016zM12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-9.328L23.296 12l-3.28 3.328v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 512 512"><path d="M496 256L256 16v144H0v192h256v144z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="upload" viewBox="0 0 1024 1024"><path d="M0 0h24v24H0z" fill="none"/><path d="M214 768h596v86H214v-86zm170-86V426H214l298-298 298 298H640v256H384z"/></symbol></svg><!-- endinject -->', document.body.appendChild(t)
}(),
function() {
    "use strict";

    function t(t, i, e) {
        return this.constructor(t, i, e)
    }
    window.Darkroom = t, t.plugins = [], t.prototype = {
        containerElement: null,
        canvas: null,
        image: null,
        sourceCanvas: null,
        sourceImage: null,
        onchange: function() {},
        originalImageElement: null,
        transformations: [],
        defaults: {
            minWidth: null,
            minHeight: null,
            maxWidth: null,
            maxHeight: null,
            ratio: null,
            backgroundColor: "#fff",
            plugins: {},
            initialize: function() {}
        },
        plugins: {},
        options: {},
        constructor: function(i, e, o) {
            if (this.options = t.Utils.extend(e, this.defaults), "string" == typeof i && (i = document.querySelector(i)), null !== i) {
                var n = new Image;
                n.onload = function() {
                    this._initializeDOM(i), this._initializeImage(), this._initializePlugins(t.plugins), this.refresh(function() {
                        this.options.initialize.bind(this).call()
                    }.bind(this))
                }.bind(this), n.src = i.src
            }
        },
        selfDestroy: function() {
            var t = this.containerElement,
                i = new Image;
            i.onload = function() {
                t.parentNode.replaceChild(i, t)
            }, i.src = this.sourceImage.toDataURL()
        },
        addEventListener: function(t, i) {
            var e = this.canvas.getElement();
            e.addEventListener ? e.addEventListener(t, i) : e.attachEvent && e.attachEvent("on" + t, i)
        },
        dispatchEvent: function(t) {
            var i = document.createEvent("Event");
            i.initEvent(t, !0, !0), this.canvas.getElement().dispatchEvent(i)
        },
        refresh: function(t) {
            var i = new Image;
            i.onload = function() {
                this._replaceCurrentImage(new fabric.Image(i)), t && t()
            }.bind(this), i.src = this.sourceImage.toDataURL()
        },
        _replaceCurrentImage: function(i) {
            this.image && this.image.remove(), this.image = i, this.image.selectable = !1;
            var e = t.Utils.computeImageViewPort(this.image),
                o = e.width,
                n = e.height;
            if (null !== this.options.ratio) {
                var s = +this.options.ratio,
                    a = o / n;
                a > s ? n = o / s : s > a && (o = n * s)
            }
            var r = 1,
                h = 1,
                c = 1,
                l = 1;
            null !== this.options.maxWidth && this.options.maxWidth < o && (c = this.options.maxWidth / o), null !== this.options.maxHeight && this.options.maxHeight < n && (l = this.options.maxHeight / n), r = Math.min(c, l), c = 1, l = 1, null !== this.options.minWidth && this.options.minWidth > o && (c = this.options.minWidth / o), null !== this.options.minHeight && this.options.minHeight > n && (l = this.options.minHeight / n), h = Math.max(c, l);
            var d = h * r;
            o *= d, n *= d, this.image.setScaleX(1 * d), this.image.setScaleY(1 * d), this.canvas.add(this.image), this.canvas.setWidth(o), this.canvas.setHeight(n), this.canvas.centerObject(this.image), this.image.setCoords()
        },
        applyTransformation: function(t) {
            this.transformations.push(t), t.applyTransformation(this.sourceCanvas, this.sourceImage, this._postTransformation.bind(this))
        },
        _postTransformation: function(t) {
            t && (this.sourceImage = t), this.refresh(function() {
                this.dispatchEvent("core:transformation")
            }.bind(this))
        },
        reinitializeImage: function() {
            this.sourceImage.remove(), this._initializeImage(), this._popTransformation(this.transformations.slice())
        },
        _popTransformation: function(t) {
            if (0 === t.length) return this.dispatchEvent("core:reinitialized"), void this.refresh();
            var i = t.shift(),
                e = function(i) {
                    i && (this.sourceImage = i), this._popTransformation(t)
                };
            i.applyTransformation(this.sourceCanvas, this.sourceImage, e.bind(this))
        },
        _initializeDOM: function(i) {
            var e = document.createElement("div");
            e.className = "darkroom-container";
            var o = document.createElement("div");
            o.className = "darkroom-toolbar", e.appendChild(o);
            var n = document.createElement("div");
            n.className = "darkroom-image-container";
            var s = document.createElement("canvas");
            n.appendChild(s), e.appendChild(n);
            var a = document.createElement("div");
            a.className = "darkroom-source-container", a.style.display = "none";
            var r = document.createElement("canvas");
            a.appendChild(r), e.appendChild(a), i.parentNode.replaceChild(e, i), i.style.display = "none", e.appendChild(i), this.containerElement = e, this.originalImageElement = i, this.toolbar = new t.UI.Toolbar(o), this.canvas = new fabric.Canvas(s, {
                selection: !1,
                backgroundColor: this.options.backgroundColor
            }), this.sourceCanvas = new fabric.Canvas(r, {
                selection: !1,
                backgroundColor: this.options.backgroundColor
            })
        },
        _initializeImage: function() {
            this.sourceImage = new fabric.Image(this.originalImageElement, {
                selectable: !1,
                evented: !1,
                lockMovementX: !0,
                lockMovementY: !0,
                lockRotation: !0,
                lockScalingX: !0,
                lockScalingY: !0,
                lockUniScaling: !0,
                hasControls: !1,
                hasBorders: !1
            }), this.sourceCanvas.add(this.sourceImage);
            var i = t.Utils.computeImageViewPort(this.sourceImage),
                e = i.width,
                o = i.height;
            this.sourceCanvas.setWidth(e), this.sourceCanvas.setHeight(o), this.sourceCanvas.centerObject(this.sourceImage), this.sourceImage.setCoords()
        },
        _initializePlugins: function(t) {
            for (var i in t) {
                var e = t[i],
                    o = this.options.plugins[i];
                o !== !1 && t.hasOwnProperty(i) && (this.plugins[i] = new e(this, o))
            }
        }
    }
}(),
function() {
    "use strict";

    function t(t, i) {
        this.darkroom = t, this.options = Darkroom.Utils.extend(i, this.defaults), this.initialize()
    }
    Darkroom.Plugin = t, t.prototype = {
        defaults: {},
        initialize: function() {}
    }, t.extend = function(t) {
        var i, e = this;
        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
            return e.apply(this, arguments)
        }, Darkroom.Utils.extend(i, e);
        var o = function() {
            this.constructor = i
        };
        return o.prototype = e.prototype, i.prototype = new o, t && Darkroom.Utils.extend(i.prototype, t), i.__super__ = e.prototype, i
    }
}(),
function() {
    "use strict";

    function t(t) {
        this.options = t
    }
    Darkroom.Transformation = t, t.prototype = {
        applyTransformation: function(t) {}
    }, t.extend = function(t) {
        var i, e = this;
        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
            return e.apply(this, arguments)
        }, Darkroom.Utils.extend(i, e);
        var o = function() {
            this.constructor = i
        };
        return o.prototype = e.prototype, i.prototype = new o, t && Darkroom.Utils.extend(i.prototype, t), i.__super__ = e.prototype, i
    }
}(),
function() {
    "use strict";

    function t(t) {
        this.element = t
    }

    function i(t) {
        this.element = t
    }

    function e(t) {
        this.element = t
    }
    Darkroom.UI = {
        Toolbar: t,
        ButtonGroup: i,
        Button: e
    }, t.prototype = {
        createButtonGroup: function(t) {
            var e = document.createElement("div");
            return e.className = "darkroom-button-group", this.element.appendChild(e), new i(e)
        }
    }, i.prototype = {
        createButton: function(t) {
            var i = {
                image: "help",
                tooltip: "",
                type: "default",
                group: "default",
                hide: !1,
                disabled: !1
            };
            t = Darkroom.Utils.extend(t, i);
            var o = document.createElement("button");
            o.type = "button", t.tooltip.length > 0 && (o.title = t.tooltip, o.dataset.toggle = "tooltip", o.dataset.placement = "bottom"), o.className = "darkroom-button darkroom-button-" + t.type, o.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + t.image + '" /></svg>', this.element.appendChild(o);
            var n = new e(o);
            return n.hide(t.hide), n.disable(t.disabled), n
        }
    }, e.prototype = {
        addEventListener: function(t, i) {
            this.element.addEventListener ? this.element.addEventListener(t, i) : this.element.attachEvent && this.element.attachEvent("on" + t, i)
        },
        removeEventListener: function(t, i) {
            this.element.removeEventListener && this.element.removeEventListener(t, i)
        },
        active: function(t) {
            t ? this.element.classList.add("darkroom-button-active") : this.element.classList.remove("darkroom-button-active")
        },
        hide: function(t) {
            t ? this.element.classList.add("darkroom-button-hidden") : this.element.classList.remove("darkroom-button-hidden")
        },
        disable: function(t) {
            this.element.disabled = t ? !0 : !1
        }
    }
}(),
function() {
    "use strict";

    function t(t, i) {
        var e;
        if (void 0 === t) return i;
        for (e in i) i.hasOwnProperty(e) && t.hasOwnProperty(e) === !1 && (t[e] = i[e]);
        return t
    }

    function i(t) {
        return {
            height: Math.abs(t.getWidth() * Math.sin(t.getAngle() * Math.PI / 180)) + Math.abs(t.getHeight() * Math.cos(t.getAngle() * Math.PI / 180)),
            width: Math.abs(t.getHeight() * Math.sin(t.getAngle() * Math.PI / 180)) + Math.abs(t.getWidth() * Math.cos(t.getAngle() * Math.PI / 180))
        }
    }
    Darkroom.Utils = {
        extend: t,
        computeImageViewPort: i
    }
}(),
function() {
    "use strict";
    Darkroom.plugins.upload = Darkroom.Plugin.extend({
        initialize: function() {
            var t = this.darkroom.toolbar.createButtonGroup(),
                i = t.createButton({
                    image: "upload",
                    tooltip: "Upload"
                });
            if (i.addEventListener("click", this.upload.bind(this)), !document.getElementById("darkroomFile")) {
                var e = document.createElement("input");
                e.type = "file", e.name = "darkroomFile", e.id = "darkroomFile", e.style.opacity = 0, e.style.position = "absolute", e.style.left = "-6000px", e.style["float"] = "left", e.addEventListener("change", this.loadImage, !1), document.body.appendChild(e)
            }
        },
        loadImage: function(t) {
            var i = new FileReader;
            i.onload = function(t) {
                var i = new Image;
                i.onload = function() {
                    dkrm.containerElement.parentNode.innerHTML = '<img id="target" src="" />', document.getElementById("target").src = this.src, imgEditor.init("#target")
                }, i.src = t.target.result, dkrm.image.filters = [], dkrm.onchange()
            }, i.readAsDataURL(t.target.files[0])
        },
        upload: function() {
            var t = document.getElementById("darkroomFile");
            if (t) {
                var i;
                document.createEvent && (i = document.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null)), i ? t.dispatchEvent(i) : t.click && t.click()
            }
        }
    })
}(),
function(t, i, e, o) {
    "use strict";
    e.plugins.history = e.Plugin.extend({
        undoTransformations: [],
        initialize: function() {
            this._initButtons(), this.darkroom.addEventListener("core:transformation", this._onTranformationApplied.bind(this))
        },
        undo: function() {
            if (0 !== this.darkroom.transformations.length) {
                var t = this.darkroom.transformations.pop();
                this.undoTransformations.unshift(t), this.darkroom.reinitializeImage(), this._updateButtons()
            }
        },
        redo: function() {
            if (0 !== this.undoTransformations.length) {
                var t = this.undoTransformations.shift();
                this.darkroom.transformations.push(t), this.darkroom.reinitializeImage(), this._updateButtons()
            }
        },
        _initButtons: function() {
            var t = this.darkroom.toolbar.createButtonGroup();
            return this.backButton = t.createButton({
                image: "undo",
                tooltip: "Undo",
                disabled: !0
            }), this.forwardButton = t.createButton({
                image: "redo",
                tooltip: "Redo",
                disabled: !0
            }), this.backButton.addEventListener("click", this.undo.bind(this)), this.forwardButton.addEventListener("click", this.redo.bind(this)), this
        },
        _updateButtons: function() {
            this.backButton.disable(0 === this.darkroom.transformations.length), this.forwardButton.disable(0 === this.undoTransformations.length)
        },
        _onTranformationApplied: function() {
            this.undoTransformations = [], this._updateButtons()
        }
    })
}(window, document, Darkroom, fabric),
function() {
    "use strict";
    var t = Darkroom.Transformation.extend({
        brightness: 0,
        applyTransformation: function(t, i, e) {
            console.log(this.options.diff), this.brightness += this.options.diff;
            var o = new fabric.Image.filters.Brightness({
                brightness: this.brightness
            });
            i.filters.push(o), i.applyFilters(t.renderAll.bind(t)), e()
        }
    });
    Darkroom.plugins.brightness = Darkroom.Plugin.extend({
        initialize: function() {
            var t = this.darkroom.toolbar.createButtonGroup(),
                i = t.createButton({
                    image: "less-brightness",
                    tooltip: "Darken"
                }),
                e = t.createButton({
                    image: "more-brightness",
                    tooltip: "Brighten"
                });
            i.addEventListener("click", this.lessBrightness.bind(this)), e.addEventListener("click", this.moreBrightness.bind(this))
        },
        lessBrightness: function() {
            this.brightness(-10)
        },
        moreBrightness: function() {
            this.brightness(10)
        },
        brightness: function(i) {
            this.darkroom.applyTransformation(new t({
                diff: i
            }))
        }
    })
}(),
function() {
    "use strict";
    Darkroom.plugins.invert = Darkroom.Plugin.extend({
        initialize: function() {
            var t = this.darkroom.toolbar.createButtonGroup();
            this.invertButton = t.createButton({
                image: "invert",
                tooltip: "Invert"
            }), this.invertButton.addEventListener("click", function(t) {
                dkrm.image.filters.push(new fabric.Image.filters.Invert), dkrm.image.applyFilters(dkrm.canvas.renderAll.bind(dkrm.canvas))
            })
        }
    })
}(),
function() {
    "use strict";
    var t = Darkroom.Transformation.extend({
        applyTransformation: function(t, i, e) {
            var o = (i.getAngle() + this.options.angle) % 360;
            i.rotate(o);
            var n, s;
            s = Math.abs(i.getWidth() * Math.sin(o * Math.PI / 180)) + Math.abs(i.getHeight() * Math.cos(o * Math.PI / 180)), n = Math.abs(i.getHeight() * Math.sin(o * Math.PI / 180)) + Math.abs(i.getWidth() * Math.cos(o * Math.PI / 180)), t.setWidth(n), t.setHeight(s), t.centerObject(i), i.setCoords(), t.renderAll(), e()
        }
    });
    Darkroom.plugins.rotate = Darkroom.Plugin.extend({
        initialize: function() {
            var t = this.darkroom.toolbar.createButtonGroup(),
                i = t.createButton({
                    image: "rotate-left",
                    tooltip: "Rotate Left"
                }),
                e = t.createButton({
                    image: "rotate-right",
                    tooltip: "Rotate Right"
                });
            i.addEventListener("click", this.rotateLeft.bind(this)), e.addEventListener("click", this.rotateRight.bind(this))
        },
        rotateLeft: function() {
            this.rotate(-90)
        },
        rotateRight: function() {
            this.rotate(90)
        },
        rotate: function(i) {
            this.darkroom.applyTransformation(new t({
                angle: i
            }))
        }
    })
}(),
function() {
    "use strict";
    var t = Darkroom.Transformation.extend({
            applyTransformation: function(t, i, e) {
                var o = new Image;
                o.onload = function() {
                    if (!(1 > s || 1 > n)) {
                        var o = new fabric.Image(this, {
                                selectable: !1,
                                evented: !1,
                                lockMovementX: !0,
                                lockMovementY: !0,
                                lockRotation: !0,
                                lockScalingX: !0,
                                lockScalingY: !0,
                                lockUniScaling: !0,
                                hasControls: !1,
                                hasBorders: !1
                            }),
                            n = this.width,
                            s = this.height;
                        t.setWidth(n), t.setHeight(s), i.remove(), t.add(o), e(o)
                    }
                };
                var n = Darkroom.Utils.computeImageViewPort(i),
                    s = n.width,
                    a = n.height,
                    r = this.options.left * s,
                    h = this.options.top * a,
                    c = Math.min(this.options.width * s, s - r),
                    l = Math.min(this.options.height * a, a - h);
                o.src = t.toDataURL({
                    left: r,
                    top: h,
                    width: c,
                    height: l
                })
            }
        }),
        i = fabric.util.createClass(fabric.Rect, {
            _render: function(t) {
                this.callSuper("_render", t);
                var i = (t.canvas, 7),
                    e = this.flipX ? -1 : 1,
                    o = this.flipY ? -1 : 1,
                    n = e / this.scaleX,
                    s = o / this.scaleY;
                t.scale(n, s), t.fillStyle = "rgba(0, 0, 0, 0.5)", this._renderOverlay(t), void 0 !== t.setLineDash ? t.setLineDash([i, i]) : void 0 !== t.mozDash && (t.mozDash = [i, i]), t.strokeStyle = "rgba(0, 0, 0, 0.2)", this._renderBorders(t), this._renderGrid(t), t.lineDashOffset = i, t.strokeStyle = "rgba(255, 255, 255, 0.4)", this._renderBorders(t), this._renderGrid(t), t.scale(1 / n, 1 / s)
            },
            _renderOverlay: function(t) {
                var i = t.canvas,
                    e = Math.ceil(-this.getWidth() / 2 - this.getLeft()),
                    o = Math.ceil(-this.getWidth() / 2),
                    n = Math.ceil(this.getWidth() / 2),
                    s = Math.ceil(this.getWidth() / 2 + (i.width - this.getWidth() - this.getLeft())),
                    a = Math.ceil(-this.getHeight() / 2 - this.getTop()),
                    r = Math.ceil(-this.getHeight() / 2),
                    h = Math.ceil(this.getHeight() / 2),
                    c = Math.ceil(this.getHeight() / 2 + (i.height - this.getHeight() - this.getTop()));
                t.beginPath(), t.moveTo(e - 1, a - 1), t.lineTo(s + 1, a - 1), t.lineTo(s + 1, c + 1), t.lineTo(e - 1, c - 1), t.lineTo(e - 1, a - 1), t.closePath(), t.moveTo(o, r), t.lineTo(o, h), t.lineTo(n, h), t.lineTo(n, r), t.lineTo(o, r), t.closePath(), t.fill()
            },
            _renderBorders: function(t) {
                t.beginPath(), t.moveTo(-this.getWidth() / 2, -this.getHeight() / 2), t.lineTo(this.getWidth() / 2, -this.getHeight() / 2), t.lineTo(this.getWidth() / 2, this.getHeight() / 2), t.lineTo(-this.getWidth() / 2, this.getHeight() / 2), t.lineTo(-this.getWidth() / 2, -this.getHeight() / 2), t.stroke()
            },
            _renderGrid: function(t) {
                t.beginPath(), t.moveTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), -this.getHeight() / 2), t.lineTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), this.getHeight() / 2), t.stroke(), t.beginPath(), t.moveTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), -this.getHeight() / 2), t.lineTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), this.getHeight() / 2), t.stroke(), t.beginPath(), t.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), t.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight()), t.stroke(), t.beginPath(), t.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), t.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight()), t.stroke()
            }
        });
    Darkroom.plugins.crop = Darkroom.Plugin.extend({
        startX: null,
        startY: null,
        isKeyCroping: !1,
        isKeyLeft: !1,
        isKeyUp: !1,
        defaults: {
            minHeight: 1,
            minWidth: 1,
            ratio: null,
            quickCropKey: !1
        },
        initialize: function() {
            var t = this.darkroom.toolbar.createButtonGroup();
            this.cropButton = t.createButton({
                image: "crop",
                tooltip: "Crop"
            }), this.okButton = t.createButton({
                image: "done",
                tooltip: "Confirm",
                type: "success",
                hide: !0
            }), this.cancelButton = t.createButton({
                image: "close",
                tooltip: "Abort",
                type: "danger",
                hide: !0
            }), this.cropButton.addEventListener("click", this.toggleCrop.bind(this)), this.okButton.addEventListener("click", this.cropCurrentZone.bind(this)), this.cancelButton.addEventListener("click", this.releaseFocus.bind(this)), this.darkroom.canvas.on("mouse:down", this.onMouseDown.bind(this)), this.darkroom.canvas.on("mouse:move", this.onMouseMove.bind(this)), this.darkroom.canvas.on("mouse:up", this.onMouseUp.bind(this)), this.darkroom.canvas.on("object:moving", this.onObjectMoving.bind(this)), this.darkroom.canvas.on("object:scaling", this.onObjectScaling.bind(this)), fabric.util.addListener(fabric.document, "keydown", this.onKeyDown.bind(this)), fabric.util.addListener(fabric.document, "keyup", this.onKeyUp.bind(this)), this.darkroom.addEventListener("core:transformation", this.releaseFocus.bind(this))
        },
        onObjectMoving: function(t) {
            if (this.hasFocus()) {
                var i = t.target;
                if (i === this.cropZone) {
                    var e = this.darkroom.canvas,
                        o = i.getLeft(),
                        n = i.getTop(),
                        s = i.getWidth(),
                        a = i.getHeight(),
                        r = e.getWidth() - s,
                        h = e.getHeight() - a;
                    0 > o && i.set("left", 0), 0 > n && i.set("top", 0), o > r && i.set("left", r), n > h && i.set("top", h), this.darkroom.dispatchEvent("crop:update")
                }
            }
        },
        onObjectScaling: function(t) {
            if (this.hasFocus()) {
                var i = !1,
                    e = t.target;
                if (e === this.cropZone) {
                    var o = this.darkroom.canvas,
                        n = o.getPointer(t.e),
                        s = (n.x, n.y, e.getLeft()),
                        a = e.getTop(),
                        r = e.getLeft() + e.getWidth(),
                        h = e.getTop() + e.getHeight();
                    if (null !== this.options.ratio && (0 > s || r > o.getWidth() || 0 > a || h > o.getHeight()) && (i = !0), 0 > s || r > o.getWidth() || i) {
                        var c = this.lastScaleX || 1;
                        e.setScaleX(c)
                    }
                    if (0 > s && e.setLeft(0), 0 > a || h > o.getHeight() || i) {
                        var l = this.lastScaleY || 1;
                        e.setScaleY(l)
                    }
                    0 > a && e.setTop(0), e.getWidth() < this.options.minWidth && e.scaleToWidth(this.options.minWidth), e.getHeight() < this.options.minHeight && e.scaleToHeight(this.options.minHeight), this.lastScaleX = e.getScaleX(), this.lastScaleY = e.getScaleY(), this.darkroom.dispatchEvent("crop:update")
                }
            }
        },
        onMouseDown: function(t) {
            if (this.hasFocus()) {
                var i = this.darkroom.canvas;
                i.calcOffset();
                var e = i.getPointer(t.e),
                    o = e.x,
                    n = e.y,
                    s = new fabric.Point(o, n),
                    a = i.getActiveObject();
                a === this.cropZone || this.cropZone.containsPoint(s) || (i.discardActiveObject(), this.cropZone.setWidth(0), this.cropZone.setHeight(0), this.cropZone.setScaleX(1), this.cropZone.setScaleY(1), this.startX = o, this.startY = n)
            }
        },
        onMouseMove: function(t) {
            if (this.isKeyCroping) return this.onMouseMoveKeyCrop(t);
            if (null !== this.startX && null !== this.startY) {
                var i = this.darkroom.canvas,
                    e = i.getPointer(t.e),
                    o = e.x,
                    n = e.y;
                this._renderCropZone(this.startX, this.startY, o, n)
            }
        },
        onMouseMoveKeyCrop: function(t) {
            var i = this.darkroom.canvas,
                e = this.cropZone,
                o = i.getPointer(t.e),
                n = o.x,
                s = o.y;
            e.left && e.top || (e.setTop(s), e.setLeft(n)), this.isKeyLeft = n < e.left + e.width / 2, this.isKeyUp = s < e.top + e.height / 2, this._renderCropZone(Math.min(e.left, n), Math.min(e.top, s), Math.max(e.left + e.width, n), Math.max(e.top + e.height, s))
        },
        onMouseUp: function(t) {
            if (null !== this.startX && null !== this.startY) {
                var i = this.darkroom.canvas;
                this.cropZone.setCoords(), i.setActiveObject(this.cropZone), i.calcOffset(), this.startX = null, this.startY = null
            }
        },
        onKeyDown: function(t) {
            !1 === this.options.quickCropKey || t.keyCode !== this.options.quickCropKey || this.isKeyCroping || (this.isKeyCroping = !0, this.darkroom.canvas.discardActiveObject(), this.cropZone.setWidth(0), this.cropZone.setHeight(0), this.cropZone.setScaleX(1), this.cropZone.setScaleY(1), this.cropZone.setTop(0), this.cropZone.setLeft(0))
        },
        onKeyUp: function(t) {
            !1 !== this.options.quickCropKey && t.keyCode === this.options.quickCropKey && this.isKeyCroping && (this.isKeyCroping = !1, this.startX = 1, this.startY = 1, this.onMouseUp())
        },
        selectZone: function(t, i, e, o, n) {
            this.hasFocus() || this.requireFocus(), n ? this.cropZone.set({
                left: t,
                top: i,
                width: e,
                height: o
            }) : this._renderCropZone(t, i, t + e, i + o);
            var s = this.darkroom.canvas;
            s.bringToFront(this.cropZone), this.cropZone.setCoords(), s.setActiveObject(this.cropZone), s.calcOffset(), this.darkroom.dispatchEvent("crop:update")
        },
        toggleCrop: function() {
            this.hasFocus() ? this.releaseFocus() : this.requireFocus()
        },
        cropCurrentZone: function() {
            if (this.hasFocus() && !(this.cropZone.width < 1 && this.cropZone.height < 1)) {
                var i = this.darkroom.image,
                    e = this.cropZone.getTop() - i.getTop(),
                    o = this.cropZone.getLeft() - i.getLeft(),
                    n = this.cropZone.getWidth(),
                    s = this.cropZone.getHeight();
                0 > e && (s += e, e = 0), 0 > o && (n += o, o = 0), this.darkroom.applyTransformation(new t({
                    top: e / i.getHeight(),
                    left: o / i.getWidth(),
                    width: n / i.getWidth(),
                    height: s / i.getHeight()
                }))
            }
        },
        hasFocus: function() {
            return void 0 !== this.cropZone
        },
        requireFocus: function() {
            this.cropZone = new i({
                fill: "transparent",
                hasBorders: !1,
                originX: "left",
                originY: "top",
                cornerColor: "#444",
                cornerSize: 8,
                transparentCorners: !1,
                lockRotation: !0,
                hasRotatingPoint: !1
            }), null !== this.options.ratio && this.cropZone.set("lockUniScaling", !0), this.darkroom.canvas.add(this.cropZone), this.darkroom.canvas.defaultCursor = "crosshair", this.cropButton.active(!0), this.okButton.hide(!1), this.cancelButton.hide(!1)
        },
        releaseFocus: function() {
            void 0 !== this.cropZone && (this.cropZone.remove(), this.cropZone = void 0, this.cropButton.active(!1), this.okButton.hide(!0), this.cancelButton.hide(!0), this.darkroom.canvas.defaultCursor = "default", this.darkroom.dispatchEvent("crop:update"))
        },
        _renderCropZone: function(t, i, e, o) {
            var n = this.darkroom.canvas,
                s = e > t,
                a = !s,
                r = o > i,
                h = !r,
                c = Math.min(+this.options.minWidth, n.getWidth()),
                l = Math.min(+this.options.minHeight, n.getHeight()),
                d = Math.min(t, e),
                u = Math.max(t, e),
                g = Math.min(i, o),
                m = Math.max(i, o);
            d = Math.max(0, d), u = Math.min(n.getWidth(), u), g = Math.max(0, g), m = Math.min(n.getHeight(), m), c > u - d && (s ? u = d + c : d = u - c), l > m - g && (r ? m = g + l : g = m - l), 0 > d && (u += Math.abs(d), d = 0), u > n.getWidth() && (d -= u - n.getWidth(), u = n.getWidth()), 0 > g && (m += Math.abs(g), g = 0), m > n.getHeight() && (g -= m - n.getHeight(), m = n.getHeight());
            var p = u - d,
                f = m - g,
                v = p / f;
            if (this.options.ratio && +this.options.ratio !== v) {
                var b = +this.options.ratio;
                if (this.isKeyCroping && (a = this.isKeyLeft, h = this.isKeyUp), b > v) {
                    var k = f * b;
                    a && (d -= k - p), p = k
                } else if (v > b) {
                    var y = f / (b * f / p);
                    h && (g -= y - f), f = y
                }
                if (0 > d && (d = 0), 0 > g && (g = 0), d + p > n.getWidth()) {
                    var k = n.getWidth() - d;
                    f = k * f / p, p = k, h && (g = i - f)
                }
                if (g + f > n.getHeight()) {
                    var y = n.getHeight() - g;
                    p = p * y / f, f = y, a && (d = t - p)
                }
            }
            this.cropZone.left = d, this.cropZone.top = g, this.cropZone.width = p, this.cropZone.height = f, this.darkroom.canvas.bringToFront(this.cropZone), this.darkroom.dispatchEvent("crop:update")
        }
    })
}(),
function() {
    "use strict";
    Darkroom.plugins.save = Darkroom.Plugin.extend({
        defaults: {
            callback: function() {
                this.darkroom.selfDestroy()
            }
        },
        initialize: function() {
            var t = this.darkroom.toolbar.createButtonGroup();
            this.destroyButton = t.createButton({
                image: "save",
                tooltip: "Submit",
                type: "submit"
            }), this.destroyButton.addEventListener("click", this.options.callback.bind(this))
        }
    })
}();