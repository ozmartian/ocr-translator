(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="invert"><path d="M0 0h24v24H0z" fill="none"/><path d="M384 648.232v-504c-52.345 52.834-105.71 104.697-157.372 158.183-58.558 65.686-68.825 169.64-20.465 243.922C243.437 607.14 312.07 648.595 384 648.232zM581.358 242.1c81.808 79.225 105.858 210.69 56.028 313.37-47.596 105.262-165.272 172.825-280.263 159.972-119.902-9.6-225.924-105.44-247.32-223.84-19.75-94.726 16.487-196.36 87.96-260.626L384 44.74 581.358 242.1z"/></symbol><symbol id="less-brightness" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-2.672v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688L23.296 12z"/></symbol><symbol id="more-brightness" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8.016c2.203 0 3.984 1.78 3.984 3.984s-1.78 3.984-3.984 3.984S8.016 14.204 8.016 12 9.796 8.016 12 8.016zM12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-9.328L23.296 12l-3.28 3.328v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 512 512"><path d="M496 256L256 16v144H0v192h256v144z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="upload" viewBox="0 0 1024 1024"><path d="M0 0h24v24H0z" fill="none"/><path d="M214 768h596v86H214v-86zm170-86V426H214l298-298 298 298H640v256H384z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function() {
'use strict';

window.Darkroom = Darkroom;

// Core object of DarkroomJS.
// Basically it's a single object, instanciable via an element
// (it could be a CSS selector or a DOM element), some custom options,
// and a list of plugin objects (or none to use default ones).
function Darkroom(element, options, plugins) {
  return this.constructor(element, options, plugins);
}

// Create an empty list of plugin objects, which will be filled by
// other plugin scripts. This is the default plugin list if none is
// specified in Darkroom'ss constructor.
Darkroom.plugins = [];

Darkroom.prototype = {
  // Reference to the main container element
  containerElement: null,

  // Reference to the Fabric canvas object
  canvas: null,

  // Reference to the Fabric image object
  image: null,

  // Reference to the Fabric source canvas object
  sourceCanvas: null,

  // Reference to the Fabric source image object
  sourceImage: null,
  
  // Fired when a new image is uploaded / change event for canvas element
  onchange: function() { },

  // Track of the original image element
  originalImageElement: null,

  // Stack of transformations to apply to the image source
  transformations: [],

  // Default options
  defaults: {
    // Canvas properties (dimension, ratio, color)
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    ratio: null,
    backgroundColor: '#fff',

    // Plugins options
    plugins: {},

    // Post-initialisation callback
    initialize: function() { /* noop */ }
  },

  // List of the instancied plugins
  plugins: {},

  // This options are a merge between `defaults` and the options passed
  // through the constructor
  options: {},

  constructor: function(element, options, plugins) {
    this.options = Darkroom.Utils.extend(options, this.defaults);

    if (typeof element === 'string')
      element = document.querySelector(element);
    if (null === element)
      return;

    var image = new Image();
    image.onload = function() {
      // Initialize the DOM/Fabric elements
      this._initializeDOM(element);
      this._initializeImage();

      // Then initialize the plugins
      this._initializePlugins(Darkroom.plugins);

      // Public method to adjust image according to the canvas
      this.refresh(function() {
        // Execute a custom callback after initialization
        this.options.initialize.bind(this).call();
      }.bind(this));

    }.bind(this)

    //image.crossOrigin = 'anonymous';
    image.src = element.src;
  },

  selfDestroy: function() {
    var container = this.containerElement;
    var image = new Image();
    image.onload = function() {
      container.parentNode.replaceChild(image, container);
    }

    image.src = this.sourceImage.toDataURL();
  },

  // Add ability to attach event listener on the core object.
  // It uses the canvas element to process events.
  addEventListener: function(eventName, callback) {
    var el = this.canvas.getElement();
    if (el.addEventListener){
      el.addEventListener(eventName, callback);
    } else if (el.attachEvent) {
      el.attachEvent('on' + eventName, callback);
    }
  },

  dispatchEvent: function(eventName) {
    // Use the old way of creating event to be IE compatible
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var event = document.createEvent('Event');
    event.initEvent(eventName, true, true);

    this.canvas.getElement().dispatchEvent(event);
  },

  // Adjust image & canvas dimension according to min/max width/height
  // and ratio specified in the options.
  // This method should be called after each image transformation.
  refresh: function(next) {
    var clone = new Image();
    clone.onload = function() {
      this._replaceCurrentImage(new fabric.Image(clone));

      if (next) next();
    }.bind(this);
    clone.src = this.sourceImage.toDataURL();
  },

  _replaceCurrentImage: function(newImage) {
    if (this.image) {
      this.image.remove();
    }

    this.image = newImage;
    this.image.selectable = false;

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.image);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    if (null !== this.options.ratio) {
      var canvasRatio = +this.options.ratio;
      var currentRatio = canvasWidth / canvasHeight;

      if (currentRatio > canvasRatio) {
        canvasHeight = canvasWidth / canvasRatio;
      } else if (currentRatio < canvasRatio) {
        canvasWidth = canvasHeight * canvasRatio;
      }
    }

    // Then scale the image to fit into dimension limits
    var scaleMin = 1;
    var scaleMax = 1;
    var scaleX = 1;
    var scaleY = 1;

    if (null !== this.options.maxWidth && this.options.maxWidth < canvasWidth) {
      scaleX =  this.options.maxWidth / canvasWidth;
    }
    if (null !== this.options.maxHeight && this.options.maxHeight < canvasHeight) {
      scaleY =  this.options.maxHeight / canvasHeight;
    }
    scaleMin = Math.min(scaleX, scaleY);

    scaleX = 1;
    scaleY = 1;
    if (null !== this.options.minWidth && this.options.minWidth > canvasWidth) {
      scaleX =  this.options.minWidth / canvasWidth;
    }
    if (null !== this.options.minHeight && this.options.minHeight > canvasHeight) {
      scaleY =  this.options.minHeight / canvasHeight;
    }
    scaleMax = Math.max(scaleX, scaleY);

    var scale = scaleMax * scaleMin; // one should be equals to 1

    canvasWidth *= scale;
    canvasHeight *= scale;

    // Finally place the image in the center of the canvas
    this.image.setScaleX(1 * scale);
    this.image.setScaleY(1 * scale);
    this.canvas.add(this.image);
    this.canvas.setWidth(canvasWidth);
    this.canvas.setHeight(canvasHeight);
    this.canvas.centerObject(this.image);
    this.image.setCoords();
  },

  // Apply the transformation on the current image and save it in the
  // transformations stack (in order to reconstitute the previous states
  // of the image).
  applyTransformation: function(transformation) {
    this.transformations.push(transformation);

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      this._postTransformation.bind(this)
    );
  },

  _postTransformation: function(newImage) {
    if (newImage)
      this.sourceImage = newImage;

    this.refresh(function() {
      this.dispatchEvent('core:transformation');
    }.bind(this));
  },

  // Initialize image from original element plus re-apply every
  // transformations.
  reinitializeImage: function() {
    this.sourceImage.remove();
    this._initializeImage();
    this._popTransformation(this.transformations.slice())
  },

  _popTransformation: function(transformations) {
    if (0 === transformations.length) {
      this.dispatchEvent('core:reinitialized');
      this.refresh();
      return;
    }

    var transformation = transformations.shift();

    var next = function(newImage) {
      if (newImage) this.sourceImage = newImage;
      this._popTransformation(transformations)
    };

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      next.bind(this)
    );
  },

  // Create the DOM elements and instanciate the Fabric canvas.
  // The image element is replaced by a new `div` element.
  // However the original image is re-injected in order to keep a trace of it.
  _initializeDOM: function(imageElement) {
    // Container
    var mainContainerElement = document.createElement('div');
    mainContainerElement.className = 'darkroom-container';

    // Toolbar
    var toolbarElement = document.createElement('div');
    toolbarElement.className = 'darkroom-toolbar';
    mainContainerElement.appendChild(toolbarElement);

    // Viewport canvas
    var canvasContainerElement = document.createElement('div');
    canvasContainerElement.className = 'darkroom-image-container';
    var canvasElement = document.createElement('canvas');
    canvasContainerElement.appendChild(canvasElement);
    mainContainerElement.appendChild(canvasContainerElement);

    // Source canvas
    var sourceCanvasContainerElement = document.createElement('div');
    sourceCanvasContainerElement.className = 'darkroom-source-container';
    sourceCanvasContainerElement.style.display = 'none';
    var sourceCanvasElement = document.createElement('canvas');
    sourceCanvasContainerElement.appendChild(sourceCanvasElement);
    mainContainerElement.appendChild(sourceCanvasContainerElement);

    // Original image
    imageElement.parentNode.replaceChild(mainContainerElement, imageElement);
    imageElement.style.display = 'none';
    mainContainerElement.appendChild(imageElement);

    // Instanciate object from elements
    this.containerElement = mainContainerElement;
    this.originalImageElement = imageElement;

    this.toolbar = new Darkroom.UI.Toolbar(toolbarElement);

    this.canvas = new fabric.Canvas(canvasElement, {
      selection: false,
      backgroundColor: this.options.backgroundColor
    });

    this.sourceCanvas = new fabric.Canvas(sourceCanvasElement, {
      selection: false,
      backgroundColor: this.options.backgroundColor
    });
  },

  // Instanciate the Fabric image object.
  // The image is created as a static element with no control,
  // then it is add in the Fabric canvas object.
  _initializeImage: function() {
    this.sourceImage = new fabric.Image(this.originalImageElement, {
      // Some options to make the image static
      selectable: false,
      evented: false,
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
      lockUniScaling: true,
      hasControls: false,
      hasBorders: false,
    });

    this.sourceCanvas.add(this.sourceImage);

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.sourceImage);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    this.sourceCanvas.setWidth(canvasWidth);
    this.sourceCanvas.setHeight(canvasHeight);
    this.sourceCanvas.centerObject(this.sourceImage);
    this.sourceImage.setCoords();
  },

  // Initialize every plugins.
  // Note that plugins are instanciated in the same order than they
  // are declared in the parameter object.
  _initializePlugins: function(plugins) {
    for (var name in plugins) {
      var plugin = plugins[name];
      var options = this.options.plugins[name];

      // Setting false into the plugin options will disable the plugin
      if (options === false)
        continue;

      // Avoid any issues with _proto_
      if (!plugins.hasOwnProperty(name))
        continue;

      this.plugins[name] = new plugin(this, options);
    }
  },
}

})();
;(function() {
'use strict';

Darkroom.Plugin = Plugin;

// Define a plugin object. This is the (abstract) parent class which
// has to be extended for each plugin.
function Plugin(darkroom, options) {
  this.darkroom = darkroom;
  this.options = Darkroom.Utils.extend(options, this.defaults);
  this.initialize();
}

Plugin.prototype = {
  defaults: {},
  initialize: function() { }
}

// Inspired by Backbone.js extend capability.
Plugin.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.Transformation = Transformation;

function Transformation(options) {
  this.options = options;
}

Transformation.prototype = {
  applyTransformation: function(image) { /* no-op */  }
}

// Inspired by Backbone.js extend capability.
Transformation.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.UI = {
  Toolbar: Toolbar,
  ButtonGroup: ButtonGroup,
  Button: Button,
};

// Toolbar object.
function Toolbar(element) {
  this.element = element;
}

Toolbar.prototype = {
  createButtonGroup: function(options) {
    var buttonGroup = document.createElement('div');
    buttonGroup.className = 'darkroom-button-group';
    this.element.appendChild(buttonGroup);

    return new ButtonGroup(buttonGroup);
  }
};

// ButtonGroup object.
function ButtonGroup(element) {
  this.element = element;
}

ButtonGroup.prototype = {
  createButton: function(options) {
    var defaults = {
      image: 'help',
      tooltip: '',
      type: 'default',
      group: 'default',
      hide: false,
      disabled: false
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.title = options.tooltip;
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
    buttonElement.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + options.image + '" /></svg>';
    this.element.appendChild(buttonElement);

    var button = new Button(buttonElement);
    button.hide(options.hide);
    button.disable(options.disabled);

    return button;
  }
}

// Button object.
function Button(element) {
  this.element = element;
}

Button.prototype = {
  addEventListener: function(eventName, listener) {
    if (this.element.addEventListener){
      this.element.addEventListener(eventName, listener);
    } else if (this.element.attachEvent) {
      this.element.attachEvent('on' + eventName, listener);
    }
  },
  removeEventListener: function(eventName, listener) {
    if (this.element.removeEventListener){
      this.element.removeEventListener(eventName, listener);
    }
  },
  active: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-active');
    else
      this.element.classList.remove('darkroom-button-active');
  },
  hide: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-hidden');
    else
      this.element.classList.remove('darkroom-button-hidden');
  },
  disable: function(value) {
    this.element.disabled = (value) ? true : false;
  }
};

})();
;(function() {
'use strict';

Darkroom.Utils = {
  extend: extend,
  computeImageViewPort: computeImageViewPort,
};


// Utility method to easily extend objects.
function extend(b, a) {
  var prop;
  if (b === undefined) {
    return a;
  }
  for (prop in a) {
    if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
      b[prop] = a[prop];
    }
  }
  return b;
}

function computeImageViewPort(image) {
  return {
    height: Math.abs(image.getWidth() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getHeight() * (Math.cos(image.getAngle() * Math.PI/180))),
    width: Math.abs(image.getHeight() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getWidth() * (Math.cos(image.getAngle() * Math.PI/180))),
  }
}

})();
;(function() {
    'use strict';

    Darkroom.plugins['upload'] = Darkroom.Plugin.extend({
        
        initialize: function InitDarkroomUploadPlugin() {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();

            var uploadButton = buttonGroup.createButton({
                image: 'upload',
                tooltip: 'Upload'
            });

            uploadButton.addEventListener('click', this.upload.bind(this));

            if (!document.getElementById('darkroomFile')) {
                var field = document.createElement('input');
                field.type = 'file';
                field.name = 'darkroomFile';
                field.id = 'darkroomFile';
                field.style.opacity = 0;
                field.style.position = 'absolute';
                field.style.left = '-6000px';
                field.style.float = 'left';
                field.addEventListener('change', this.loadImage, false);
                document.body.appendChild(field);
            }
        },
        
        loadImage: function(e) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = new Image();
                img.onload = function() {
                    dkrm.containerElement.parentNode.innerHTML = '<img id="target" src="" />';
                    document.getElementById('target').src = this.src;
                    imgEditor.init('#target');
                };
                img.src = event.target.result;
                dkrm.onchange();
            };
            reader.readAsDataURL(e.target.files[0]);
        },

        upload: function upload() {
            var el = document.getElementById('darkroomFile');
            if (el) {
                var evt;
                if (document.createEvent) {
                    evt = document.createEvent('MouseEvents');
                    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                }
                (evt) ? el.dispatchEvent(evt) : (el.click && el.click());
            }
        }

    });

})();
;;(function(window, document, Darkroom, fabric) {
  'use strict';

  Darkroom.plugins['history'] = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize: function InitDarkroomHistoryPlugin() {
      this._initButtons();

      this.darkroom.addEventListener('core:transformation', this._onTranformationApplied.bind(this));
    },

    undo: function() {
      if (this.darkroom.transformations.length === 0) {
        return;
      }

      var lastTransformation = this.darkroom.transformations.pop();
      this.undoTransformations.unshift(lastTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    redo: function() {
      if (this.undoTransformations.length === 0) {
        return;
      }

      var cancelTransformation = this.undoTransformations.shift();
      this.darkroom.transformations.push(cancelTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    _initButtons: function() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.backButton = buttonGroup.createButton({
        image: 'undo',
        tooltip: 'Undo',
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: 'redo',
        tooltip: 'Redo',
        disabled: true
      });

      this.backButton.addEventListener('click', this.undo.bind(this));
      this.forwardButton.addEventListener('click', this.redo.bind(this));

      return this;
    },

    _updateButtons: function() {
      this.backButton.disable((this.darkroom.transformations.length === 0))
      this.forwardButton.disable((this.undoTransformations.length === 0))
    },

    _onTranformationApplied: function() {
      this.undoTransformations = [];
      this._updateButtons();
    }
  });
})(window, document, Darkroom, fabric);
;(function () {
  'use strict';

  var Brightness = Darkroom.Transformation.extend({
    brightness: 0,
    applyTransformation: function (canvas, image, next) {
      console.log(this.options.diff);
      this.brightness += this.options.diff;
      var filter = new fabric.Image.filters.Brightness({
        brightness: this.brightness
      });
      image.filters.push(filter);
      image.applyFilters(canvas.renderAll.bind(canvas));
      //canvas.renderAll();
      /*var angle = (image.getAngle() + this.options.angle) % 360;
       image.rotate(angle);

       var width, height;
       height = Math.abs(image.getWidth()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getHeight()*(Math.cos(angle*Math.PI/180)));
       width = Math.abs(image.getHeight()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getWidth()*(Math.cos(angle*Math.PI/180)));

       canvas.setWidth(width);
       canvas.setHeight(height);

       canvas.centerObject(image);
       image.setCoords();
       canvas.renderAll();*/

      next();
    }
  });

  Darkroom.plugins['brightness'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBrightnessPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var lessButton = buttonGroup.createButton({
        image: 'less-brightness',
        tooltip: 'Darken'
      });

      var moreButton = buttonGroup.createButton({
        image: 'more-brightness',
        tooltip: 'Brighten'
      });

      lessButton.addEventListener('click', this.lessBrightness.bind(this));
      moreButton.addEventListener('click', this.moreBrightness.bind(this));
    },

    lessBrightness: function lessBrightness() {
      this.brightness(-10);
    },

    moreBrightness: function moreBrightness() {
      this.brightness(10);
    },

    brightness: function brightness(value) {
      this.darkroom.applyTransformation(
        new Brightness({diff: value})
      );
    }

  });

})();
;(function() {
'use strict';

var Rotation = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    var angle = (image.getAngle() + this.options.angle) % 360;
    image.rotate(angle);

    var width, height;
    height = Math.abs(image.getWidth()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getHeight()*(Math.cos(angle*Math.PI/180)));
    width = Math.abs(image.getHeight()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getWidth()*(Math.cos(angle*Math.PI/180)));

    canvas.setWidth(width);
    canvas.setHeight(height);

    canvas.centerObject(image);
    image.setCoords();
    canvas.renderAll();

    next();
  }
});

Darkroom.plugins['rotate'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomRotatePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var leftButton = buttonGroup.createButton({
      image: 'rotate-left',
      tooltip: 'Rotate Left'
    });

    var rightButton = buttonGroup.createButton({
      image: 'rotate-right',
      tooltip: 'Rotate Right'
    });

    leftButton.addEventListener('click', this.rotateLeft.bind(this));
    rightButton.addEventListener('click', this.rotateRight.bind(this));
  },

  rotateLeft: function rotateLeft() {
    this.rotate(-90);
  },

  rotateRight: function rotateRight() {
    this.rotate(90);
  },

  rotate: function rotate(angle) {
    this.darkroom.applyTransformation(
      new Rotation({angle: angle})
    );
  }

});

})();
;(function() {
'use strict';

var Crop = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    // Snapshot the image delimited by the crop zone
    var snapshot = new Image();
    snapshot.onload = function() {
      // Validate image
      if (height < 1 || width < 1)
        return;

      var imgInstance = new fabric.Image(this, {
        // options to make the image static
        selectable: false,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });

      var width = this.width;
      var height = this.height;

      // Update canvas size
      canvas.setWidth(width);
      canvas.setHeight(height);

      // Add image
      image.remove();
      canvas.add(imgInstance);

      next(imgInstance);
    };

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var imageWidth = viewport.width;
    var imageHeight = viewport.height;

    var left = this.options.left * imageWidth;
    var top = this.options.top * imageHeight;
    var width = Math.min(this.options.width * imageWidth, imageWidth - left);
    var height = Math.min(this.options.height * imageHeight, imageHeight - top);

    snapshot.src = canvas.toDataURL({
      left: left,
      top: top,
      width: width,
      height: height,
    });
  }
});

var CropZone = fabric.util.createClass(fabric.Rect, {
  _render: function(ctx) {
    this.callSuper('_render', ctx);

    var canvas = ctx.canvas;
    var dashWidth = 7;

    // Set original scale
    var flipX = this.flipX ? -1 : 1;
    var flipY = this.flipY ? -1 : 1;
    var scaleX = flipX / this.scaleX;
    var scaleY = flipY / this.scaleY;

    ctx.scale(scaleX, scaleY);

    // Overlay rendering
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this._renderOverlay(ctx);

    // Set dashed borders
    if (ctx.setLineDash !== undefined)
      ctx.setLineDash([dashWidth, dashWidth]);
    else if (ctx.mozDash !== undefined)
      ctx.mozDash = [dashWidth, dashWidth];

    // First lines rendering with black
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Re render lines in white
    ctx.lineDashOffset = dashWidth;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Reset scale
    ctx.scale(1/scaleX, 1/scaleY);
  },

  _renderOverlay: function(ctx) {
    var canvas = ctx.canvas;

    //
    //    x0    x1        x2      x3
    // y0 +------------------------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y1 +------+---------+-------+
    //    |\\\\\\|         |\\\\\\\|
    //    |\\\\\\|    0    |\\\\\\\|
    //    |\\\\\\|         |\\\\\\\|
    // y2 +------+---------+-------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y3 +------------------------+
    //

    var x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
    var x1 = Math.ceil(-this.getWidth() / 2);
    var x2 = Math.ceil(this.getWidth() / 2);
    var x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));

    var y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
    var y1 = Math.ceil(-this.getHeight() / 2);
    var y2 = Math.ceil(this.getHeight() / 2);
    var y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

    ctx.beginPath();
    
    // Draw outer rectangle.
    // Numbers are +/-1 so that overlay edges don't get blurry.
    ctx.moveTo(x0 - 1, y0 - 1);
    ctx.lineTo(x3 + 1, y0 - 1);
    ctx.lineTo(x3 + 1, y3 + 1);
    ctx.lineTo(x0 - 1, y3 - 1);
    ctx.lineTo(x0 - 1, y0 - 1);
    ctx.closePath();

    // Draw inner rectangle.
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x1, y1);

    ctx.closePath();
    ctx.fill();
  },

  _renderBorders: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2); // upper right
    ctx.lineTo(this.getWidth()/2, this.getHeight()/2); // down right
    ctx.lineTo(-this.getWidth()/2, this.getHeight()/2); // down left
    ctx.lineTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.stroke();
  },

  _renderGrid: function(ctx) {
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 1/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 1/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 2/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 2/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    // Horizontal lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.stroke();
  }
});

Darkroom.plugins['crop'] = Darkroom.Plugin.extend({
  // Init point
  startX: null,
  startY: null,

  // Keycrop
  isKeyCroping: false,
  isKeyLeft: false,
  isKeyUp: false,

  defaults: {
    // min crop dimension
    minHeight: 1,
    minWidth: 1,
    // ensure crop ratio
    ratio: null,
    // quick crop feature (set a key code to enable it)
    quickCropKey: false
  },

  initialize: function InitDarkroomCropPlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.cropButton = buttonGroup.createButton({
      image: 'crop',
      tooltip: 'Crop'
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      tooltip: 'Confirm Crop',
      type: 'success',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      tooltip: 'Abort Crop',
      type: 'danger',
      hide: true
    });

    // Buttons click
    this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
    this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
    this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));

    // Canvas events
    this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
    this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
    this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
    this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
    this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));

    fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(fabric.document, 'keyup', this.onKeyUp.bind(this));

    this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
  },

  // Avoid crop zone to go beyond the canvas edges
  onObjectMoving: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var x = currentObject.getLeft(), y = currentObject.getTop();
    var w = currentObject.getWidth(), h = currentObject.getHeight();
    var maxX = canvas.getWidth() - w;
    var maxY = canvas.getHeight() - h;

    if (x < 0)
      currentObject.set('left', 0);
    if (y < 0)
      currentObject.set('top', 0);
    if (x > maxX)
      currentObject.set('left', maxX);
    if (y > maxY)
      currentObject.set('top', maxY);

    this.darkroom.dispatchEvent('crop:update');
  },

  // Prevent crop zone from going beyond the canvas edges (like mouseMove)
  onObjectScaling: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var preventScaling = false;
    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    var minX = currentObject.getLeft();
    var minY = currentObject.getTop();
    var maxX = currentObject.getLeft() + currentObject.getWidth();
    var maxY = currentObject.getTop() + currentObject.getHeight();

    if (null !== this.options.ratio) {
      if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
        preventScaling = true;
      }
    }

    if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
      var lastScaleX = this.lastScaleX || 1;
      currentObject.setScaleX(lastScaleX);
    }
    if (minX < 0) {
      currentObject.setLeft(0);
    }

    if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
      var lastScaleY = this.lastScaleY || 1;
      currentObject.setScaleY(lastScaleY);
    }
    if (minY < 0) {
      currentObject.setTop(0);
    }

    if (currentObject.getWidth() < this.options.minWidth) {
      currentObject.scaleToWidth(this.options.minWidth);
    }
    if (currentObject.getHeight() < this.options.minHeight) {
      currentObject.scaleToHeight(this.options.minHeight);
    }

    this.lastScaleX = currentObject.getScaleX();
    this.lastScaleY = currentObject.getScaleY();

    this.darkroom.dispatchEvent('crop:update');
  },

  // Init crop zone
  onMouseDown: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var canvas = this.darkroom.canvas;

    // recalculate offset, in case canvas was manipulated since last `calcOffset`
    canvas.calcOffset();
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;
    var point = new fabric.Point(x, y);

    // Check if user want to scale or drag the crop zone.
    var activeObject = canvas.getActiveObject();
    if (activeObject === this.cropZone || this.cropZone.containsPoint(point)) {
      return;
    }

    canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);

    this.startX = x;
    this.startY = y;
  },

  // Extend crop zone
  onMouseMove: function(event) {
    // Quick crop feature
    if (this.isKeyCroping)
      return this.onMouseMoveKeyCrop(event);

    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    this._renderCropZone(this.startX, this.startY, x, y);
  },

  onMouseMoveKeyCrop: function(event) {
    var canvas = this.darkroom.canvas;
    var zone = this.cropZone;

    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    if (!zone.left || !zone.top) {
      zone.setTop(y);
      zone.setLeft(x);
    }

    this.isKeyLeft =  x < zone.left + zone.width / 2 ;
    this.isKeyUp = y < zone.top + zone.height / 2 ;

    this._renderCropZone(
      Math.min(zone.left, x),
      Math.min(zone.top, y),
      Math.max(zone.left+zone.width, x),
      Math.max(zone.top+zone.height, y)
    );
  },

  // Finish crop zone
  onMouseUp: function(event) {
    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.startX = null;
    this.startY = null;
  },

  onKeyDown: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || this.isKeyCroping)
      return;

    // Active quick crop flow
    this.isKeyCroping = true ;
    this.darkroom.canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);
    this.cropZone.setTop(0);
    this.cropZone.setLeft(0);
  },

  onKeyUp: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping)
      return;

    // Unactive quick crop flow
    this.isKeyCroping = false;
    this.startX = 1;
    this.startY = 1;
    this.onMouseUp();
  },

  selectZone: function(x, y, width, height, forceDimension) {
    if (!this.hasFocus())
      this.requireFocus();

    if (!forceDimension) {
      this._renderCropZone(x, y, x+width, y+height);
    } else {
      this.cropZone.set({
        'left': x,
        'top': y,
        'width': width,
        'height': height
      });
    }

    var canvas = this.darkroom.canvas;
    canvas.bringToFront(this.cropZone);
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.darkroom.dispatchEvent('crop:update');
  },

  toggleCrop: function() {
    if (!this.hasFocus())
      this.requireFocus();
    else
      this.releaseFocus();
  },

  cropCurrentZone: function() {
    if (!this.hasFocus())
      return;

    // Avoid croping empty zone
    if (this.cropZone.width < 1 && this.cropZone.height < 1)
      return;

    var image = this.darkroom.image;

    // Compute crop zone dimensions
    var top = this.cropZone.getTop() - image.getTop();
    var left = this.cropZone.getLeft() - image.getLeft();
    var width = this.cropZone.getWidth();
    var height = this.cropZone.getHeight();

    // Adjust dimensions to image only
    if (top < 0) {
      height += top;
      top = 0;
    }

    if (left < 0) {
      width += left;
      left = 0;
    }

    // Apply crop transformation.
    // Make sure to use relative dimension since the crop will be applied
    // on the source image.
    this.darkroom.applyTransformation(new Crop({
      top: top / image.getHeight(),
      left: left / image.getWidth(),
      width: width / image.getWidth(),
      height: height / image.getHeight(),
    }));
  },

  // Test wether crop zone is set
  hasFocus: function() {
    return this.cropZone !== undefined;
  },

  // Create the crop zone
  requireFocus: function() {
    this.cropZone = new CropZone({
      fill: 'transparent',
      hasBorders: false,
      originX: 'left',
      originY: 'top',
      //stroke: '#444',
      //strokeDashArray: [5, 5],
      //borderColor: '#444',
      cornerColor: '#444',
      cornerSize: 8,
      transparentCorners: false,
      lockRotation: true,
      hasRotatingPoint: false,
    });

    if (null !== this.options.ratio) {
      this.cropZone.set('lockUniScaling', true);
    }

    this.darkroom.canvas.add(this.cropZone);
    this.darkroom.canvas.defaultCursor = 'crosshair';

    this.cropButton.active(true);
    this.okButton.hide(false);
    this.cancelButton.hide(false);
  },

  // Remove the crop zone
  releaseFocus: function() {
    if (undefined === this.cropZone)
      return;

    this.cropZone.remove();
    this.cropZone = undefined;

    this.cropButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    this.darkroom.canvas.defaultCursor = 'default';

    this.darkroom.dispatchEvent('crop:update');
  },

  _renderCropZone: function(fromX, fromY, toX, toY) {
    var canvas = this.darkroom.canvas;

    var isRight = (toX > fromX);
    var isLeft = !isRight;
    var isDown = (toY > fromY);
    var isUp = !isDown;

    var minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
    var minHeight = Math.min(+this.options.minHeight, canvas.getHeight());

    // Define corner coordinates
    var leftX = Math.min(fromX, toX);
    var rightX = Math.max(fromX, toX);
    var topY = Math.min(fromY, toY);
    var bottomY = Math.max(fromY, toY);

    // Replace current point into the canvas
    leftX = Math.max(0, leftX);
    rightX = Math.min(canvas.getWidth(), rightX);
    topY = Math.max(0, topY)
    bottomY = Math.min(canvas.getHeight(), bottomY);

    // Recalibrate coordinates according to given options
    if (rightX - leftX < minWidth) {
      if (isRight)
        rightX = leftX + minWidth;
      else
        leftX = rightX - minWidth;
    }
    if (bottomY - topY < minHeight) {
      if (isDown)
        bottomY = topY + minHeight;
      else
        topY = bottomY - minHeight;
    }

    // Truncate truncate according to canvas dimensions
    if (leftX < 0) {
      // Translate to the left
      rightX += Math.abs(leftX);
      leftX = 0
    }
    if (rightX > canvas.getWidth()) {
      // Translate to the right
      leftX -= (rightX - canvas.getWidth());
      rightX = canvas.getWidth();
    }
    if (topY < 0) {
      // Translate to the bottom
      bottomY += Math.abs(topY);
      topY = 0
    }
    if (bottomY > canvas.getHeight()) {
      // Translate to the right
      topY -= (bottomY - canvas.getHeight());
      bottomY = canvas.getHeight();
    }

    var width = rightX - leftX;
    var height = bottomY - topY;
    var currentRatio = width / height;

    if (this.options.ratio && +this.options.ratio !== currentRatio) {
      var ratio = +this.options.ratio;

      if(this.isKeyCroping) {
        isLeft = this.isKeyLeft;
        isUp = this.isKeyUp;
      }

      if (currentRatio < ratio) {
        var newWidth = height * ratio;
        if (isLeft) {
          leftX -= (newWidth - width);
        }
        width = newWidth;
      } else if (currentRatio > ratio) {
        var newHeight = height / (ratio * height/width);
        if (isUp) {
          topY -= (newHeight - height);
        }
        height = newHeight;
      }

      if (leftX < 0) {
        leftX = 0;
        //TODO
      }
      if (topY < 0) {
        topY = 0;
        //TODO
      }
      if (leftX + width > canvas.getWidth()) {
        var newWidth = canvas.getWidth() - leftX;
        height = newWidth * height / width;
        width = newWidth;
        if (isUp) {
          topY = fromY - height;
        }
      }
      if (topY + height > canvas.getHeight()) {
        var newHeight = canvas.getHeight() - topY;
        width = width * newHeight / height;
        height = newHeight;
        if (isLeft) {
          leftX = fromX - width;
        }
      }
    }

    // Apply coordinates
    this.cropZone.left = leftX;
    this.cropZone.top = topY;
    this.cropZone.width = width;
    this.cropZone.height = height;

    this.darkroom.canvas.bringToFront(this.cropZone);

    this.darkroom.dispatchEvent('crop:update');
  }
});

})();
;(function() {
    'use strict';

    Darkroom.plugins['save'] = Darkroom.Plugin.extend({

        defaults: { callback: function() { this.darkroom.selfDestroy(); } },

        initialize: function InitializeDarkroomSavePlugin() {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();

            this.destroyButton = buttonGroup.createButton({
                image: 'save',
                tooltip: 'Proceed'
            });

            this.destroyButton.addEventListener('click', this.options.callback.bind(this));
        }
    });

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20udXBsb2FkLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLmJyaWdodG5lc3MuanMiLCJkYXJrcm9vbS5yb3RhdGUuanMiLCJkYXJrcm9vbS5jcm9wLmpzIiwiZGFya3Jvb20uc2F2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDeHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbmplY3QgU1ZHIGljb25zIGludG8gdGhlIERPTVxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuaWQgPSAnZGFya3Jvb20taWNvbnMnO1xuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuRGFya3Jvb20gPSBEYXJrcm9vbTtcblxuLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cbi8vIEJhc2ljYWxseSBpdCdzIGEgc2luZ2xlIG9iamVjdCwgaW5zdGFuY2lhYmxlIHZpYSBhbiBlbGVtZW50XG4vLyAoaXQgY291bGQgYmUgYSBDU1Mgc2VsZWN0b3Igb3IgYSBET00gZWxlbWVudCksIHNvbWUgY3VzdG9tIG9wdGlvbnMsXG4vLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxuZnVuY3Rpb24gRGFya3Jvb20oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKTtcbn1cblxuLy8gQ3JlYXRlIGFuIGVtcHR5IGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMsIHdoaWNoIHdpbGwgYmUgZmlsbGVkIGJ5XG4vLyBvdGhlciBwbHVnaW4gc2NyaXB0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCBwbHVnaW4gbGlzdCBpZiBub25lIGlzXG4vLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXG5EYXJrcm9vbS5wbHVnaW5zID0gW107XG5cbkRhcmtyb29tLnByb3RvdHlwZSA9IHtcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdFxuICBjYW52YXM6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0XG4gIGltYWdlOiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XG4gIHNvdXJjZUNhbnZhczogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgaW1hZ2Ugb2JqZWN0XG4gIHNvdXJjZUltYWdlOiBudWxsLFxuICBcbiAgLy8gRmlyZWQgd2hlbiBhIG5ldyBpbWFnZSBpcyB1cGxvYWRlZCAvIGNoYW5nZSBldmVudCBmb3IgY2FudmFzIGVsZW1lbnRcbiAgb25jaGFuZ2U6IGZ1bmN0aW9uKCkgeyB9LFxuXG4gIC8vIFRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gIG9yaWdpbmFsSW1hZ2VFbGVtZW50OiBudWxsLFxuXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXG4gIHRyYW5zZm9ybWF0aW9uczogW10sXG5cbiAgLy8gRGVmYXVsdCBvcHRpb25zXG4gIGRlZmF1bHRzOiB7XG4gICAgLy8gQ2FudmFzIHByb3BlcnRpZXMgKGRpbWVuc2lvbiwgcmF0aW8sIGNvbG9yKVxuICAgIG1pbldpZHRoOiBudWxsLFxuICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICBtYXhXaWR0aDogbnVsbCxcbiAgICBtYXhIZWlnaHQ6IG51bGwsXG4gICAgcmF0aW86IG51bGwsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG5cbiAgICAvLyBQbHVnaW5zIG9wdGlvbnNcbiAgICBwbHVnaW5zOiB7fSxcblxuICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgLyogbm9vcCAqLyB9XG4gIH0sXG5cbiAgLy8gTGlzdCBvZiB0aGUgaW5zdGFuY2llZCBwbHVnaW5zXG4gIHBsdWdpbnM6IHt9LFxuXG4gIC8vIFRoaXMgb3B0aW9ucyBhcmUgYSBtZXJnZSBiZXR3ZWVuIGBkZWZhdWx0c2AgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxuICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxuICBvcHRpb25zOiB7fSxcblxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcblxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NL0ZhYnJpYyBlbGVtZW50c1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZURPTShlbGVtZW50KTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuXG4gICAgICAvLyBUaGVuIGluaXRpYWxpemUgdGhlIHBsdWdpbnNcbiAgICAgIHRoaXMuX2luaXRpYWxpemVQbHVnaW5zKERhcmtyb29tLnBsdWdpbnMpO1xuXG4gICAgICAvLyBQdWJsaWMgbWV0aG9kIHRvIGFkanVzdCBpbWFnZSBhY2NvcmRpbmcgdG8gdGhlIGNhbnZhc1xuICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBFeGVjdXRlIGEgY3VzdG9tIGNhbGxiYWNrIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMub3B0aW9ucy5pbml0aWFsaXplLmJpbmQodGhpcykuY2FsbCgpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIH0uYmluZCh0aGlzKVxuXG4gICAgLy9pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xuICB9LFxuXG4gIHNlbGZEZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbGVtZW50O1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGltYWdlLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gIH0sXG5cbiAgLy8gQWRkIGFiaWxpdHkgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBjb3JlIG9iamVjdC5cbiAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZWwgPSB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCk7XG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIC8vIFVzZSB0aGUgb2xkIHdheSBvZiBjcmVhdGluZyBldmVudCB0byBiZSBJRSBjb21wYXRpYmxlXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHNcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblxuICAgIHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSxcblxuICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxuICAvLyBhbmQgcmF0aW8gc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLlxuICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXG4gIHJlZnJlc2g6IGZ1bmN0aW9uKG5leHQpIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3JlcGxhY2VDdXJyZW50SW1hZ2UobmV3IGZhYnJpYy5JbWFnZShjbG9uZSkpO1xuXG4gICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICBjbG9uZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xuICB9LFxuXG4gIF9yZXBsYWNlQ3VycmVudEltYWdlOiBmdW5jdGlvbihuZXdJbWFnZSkge1xuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcbiAgICB0aGlzLmltYWdlLnNlbGVjdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuaW1hZ2UpO1xuICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB2YXIgY2FudmFzUmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xuXG4gICAgICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvIDwgY2FudmFzUmF0aW8pIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXG4gICAgdmFyIHNjYWxlTWluID0gMTtcbiAgICB2YXIgc2NhbGVNYXggPSAxO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhXaWR0aCAmJiB0aGlzLm9wdGlvbnMubWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5tYXhXaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICBzY2FsZVggPSAxO1xuICAgIHNjYWxlWSA9IDE7XG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5XaWR0aCAmJiB0aGlzLm9wdGlvbnMubWluV2lkdGggPiBjYW52YXNXaWR0aCkge1xuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbkhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICB2YXIgc2NhbGUgPSBzY2FsZU1heCAqIHNjYWxlTWluOyAvLyBvbmUgc2hvdWxkIGJlIGVxdWFscyB0byAxXG5cbiAgICBjYW52YXNXaWR0aCAqPSBzY2FsZTtcbiAgICBjYW52YXNIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICB0aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xuICAgIHRoaXMuaW1hZ2Uuc2V0U2NhbGVZKDEgKiBzY2FsZSk7XG4gICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xuICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XG4gICAgdGhpcy5pbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXG4gIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcbiAgLy8gb2YgdGhlIGltYWdlKS5cbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICk7XG4gIH0sXG5cbiAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICBpZiAobmV3SW1hZ2UpXG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XG5cbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxuICByZWluaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcbiAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxuICB9LFxuXG4gIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb25zKSB7XG4gICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcblxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgIH07XG5cbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cbiAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uKGltYWdlRWxlbWVudCkge1xuICAgIC8vIENvbnRhaW5lclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xuXG4gICAgLy8gVG9vbGJhclxuICAgIHZhciB0b29sYmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAvLyBWaWV3cG9ydCBjYW52YXNcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgLy8gU291cmNlIGNhbnZhc1xuICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoc291cmNlQ2FudmFzRWxlbWVudCwge1xuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEluc3RhbmNpYXRlIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0LlxuICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcbiAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICBfaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XG4gICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xuXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXG4gIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XG4gIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBwbHVnaW5zKSB7XG4gICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXG4gICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB0aGlzLnBsdWdpbnNbbmFtZV0gPSBuZXcgcGx1Z2luKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSxcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uUGx1Z2luID0gUGx1Z2luO1xuXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxuLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XG4gIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgdGhpcy5pbml0aWFsaXplKCk7XG59XG5cblBsdWdpbi5wcm90b3R5cGUgPSB7XG4gIGRlZmF1bHRzOiB7fSxcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5QbHVnaW4uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5UcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlVJID0ge1xuICBUb29sYmFyOiBUb29sYmFyLFxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbjogQnV0dG9uLFxufTtcblxuLy8gVG9vbGJhciBvYmplY3QuXG5mdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuVG9vbGJhci5wcm90b3R5cGUgPSB7XG4gIGNyZWF0ZUJ1dHRvbkdyb3VwOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xuICB9XG59O1xuXG4vLyBCdXR0b25Hcm91cCBvYmplY3QuXG5mdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlQnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgaW1hZ2U6ICdoZWxwJyxcbiAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b25FbGVtZW50LnRpdGxlID0gb3B0aW9ucy50b29sdGlwO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcbiAgICBidXR0b25FbGVtZW50LmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGFya3Jvb20taWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiMnICsgb3B0aW9ucy5pbWFnZSArICdcIiAvPjwvc3ZnPic7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgdmFyIGJ1dHRvbiA9IG5ldyBCdXR0b24oYnV0dG9uRWxlbWVudCk7XG4gICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcbiAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuLy8gQnV0dG9uIG9iamVjdC5cbmZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgYWN0aXZlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1hY3RpdmUnKTtcbiAgfSxcbiAgaGlkZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24taGlkZGVuJyk7XG4gIH0sXG4gIGRpc2FibGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxufTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVXRpbHMgPSB7XG4gIGV4dGVuZDogZXh0ZW5kLFxuICBjb21wdXRlSW1hZ2VWaWV3UG9ydDogY29tcHV0ZUltYWdlVmlld1BvcnQsXG59O1xuXG5cbi8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cbmZ1bmN0aW9uIGV4dGVuZChiLCBhKSB7XG4gIHZhciBwcm9wO1xuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgZm9yIChwcm9wIGluIGEpIHtcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBiLmhhc093blByb3BlcnR5KHByb3ApID09PSBmYWxzZSkge1xuICAgICAgYltwcm9wXSA9IGFbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSksXG4gICAgd2lkdGg6IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxuICB9XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgRGFya3Jvb20ucGx1Z2luc1sndXBsb2FkJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbVVwbG9hZFBsdWdpbigpIHtcbiAgICAgICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICAgICAgICB2YXIgdXBsb2FkQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3VwbG9hZCcsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJ1VwbG9hZCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwbG9hZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya3Jvb21GaWxlJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPSAnZmlsZSc7XG4gICAgICAgICAgICAgICAgZmllbGQubmFtZSA9ICdkYXJrcm9vbUZpbGUnO1xuICAgICAgICAgICAgICAgIGZpZWxkLmlkID0gJ2Rhcmtyb29tRmlsZSc7XG4gICAgICAgICAgICAgICAgZmllbGQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgZmllbGQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmxlZnQgPSAnLTYwMDBweCc7XG4gICAgICAgICAgICAgICAgZmllbGQuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5sb2FkSW1hZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGxvYWRJbWFnZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBka3JtLmNvbnRhaW5lckVsZW1lbnQucGFyZW50Tm9kZS5pbm5lckhUTUwgPSAnPGltZyBpZD1cInRhcmdldFwiIHNyYz1cIlwiIC8+JztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWdFZGl0b3IuaW5pdCgnI3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgZGtybS5vbmNoYW5nZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGxvYWQ6IGZ1bmN0aW9uIHVwbG9hZCgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrcm9vbUZpbGUnKTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICAgICAgICAgICAgICBldnQuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKGV2dCkgPyBlbC5kaXNwYXRjaEV2ZW50KGV2dCkgOiAoZWwuY2xpY2sgJiYgZWwuY2xpY2soKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KSgpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgdG9vbHRpcDogJ1VuZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAncmVkbycsXG4gICAgICAgIHRvb2x0aXA6ICdSZWRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlQnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmJhY2tCdXR0b24uZGlzYWJsZSgodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5kaXNhYmxlKCh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICB9LFxuXG4gICAgX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zID0gW107XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfVxuICB9KTtcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBCcmlnaHRuZXNzID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBicmlnaHRuZXNzOiAwLFxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uIChjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMuZGlmZik7XG4gICAgICB0aGlzLmJyaWdodG5lc3MgKz0gdGhpcy5vcHRpb25zLmRpZmY7XG4gICAgICB2YXIgZmlsdGVyID0gbmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLkJyaWdodG5lc3Moe1xuICAgICAgICBicmlnaHRuZXNzOiB0aGlzLmJyaWdodG5lc3NcbiAgICAgIH0pO1xuICAgICAgaW1hZ2UuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICBpbWFnZS5hcHBseUZpbHRlcnMoY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcykpO1xuICAgICAgLy9jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAvKnZhciBhbmdsZSA9IChpbWFnZS5nZXRBbmdsZSgpICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAlIDM2MDtcbiAgICAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xuXG4gICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICAgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xuICAgICAgIHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xuXG4gICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcbiAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcbiAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7Ki9cblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgRGFya3Jvb20ucGx1Z2luc1snYnJpZ2h0bmVzcyddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21CcmlnaHRuZXNzUGx1Z2luKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHZhciBsZXNzQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICdsZXNzLWJyaWdodG5lc3MnLFxuICAgICAgICB0b29sdGlwOiAnRGFya2VuJ1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBtb3JlQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICdtb3JlLWJyaWdodG5lc3MnLFxuICAgICAgICB0b29sdGlwOiAnQnJpZ2h0ZW4nXG4gICAgICB9KTtcblxuICAgICAgbGVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubGVzc0JyaWdodG5lc3MuYmluZCh0aGlzKSk7XG4gICAgICBtb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3JlQnJpZ2h0bmVzcy5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgbGVzc0JyaWdodG5lc3M6IGZ1bmN0aW9uIGxlc3NCcmlnaHRuZXNzKCkge1xuICAgICAgdGhpcy5icmlnaHRuZXNzKC0xMCk7XG4gICAgfSxcblxuICAgIG1vcmVCcmlnaHRuZXNzOiBmdW5jdGlvbiBtb3JlQnJpZ2h0bmVzcygpIHtcbiAgICAgIHRoaXMuYnJpZ2h0bmVzcygxMCk7XG4gICAgfSxcblxuICAgIGJyaWdodG5lc3M6IGZ1bmN0aW9uIGJyaWdodG5lc3ModmFsdWUpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgICAgbmV3IEJyaWdodG5lc3Moe2RpZmY6IHZhbHVlfSlcbiAgICAgICk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUm90YXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgdmFyIGFuZ2xlID0gKGltYWdlLmdldEFuZ2xlKCkgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICUgMzYwO1xuICAgIGltYWdlLnJvdGF0ZShhbmdsZSk7XG5cbiAgICB2YXIgd2lkdGgsIGhlaWdodDtcbiAgICBoZWlnaHQgPSBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSooTWF0aC5jb3MoYW5nbGUqTWF0aC5QSS8xODApKSk7XG4gICAgd2lkdGggPSBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5jb3MoYW5nbGUqTWF0aC5QSS8xODApKSk7XG5cbiAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIGNhbnZhcy5jZW50ZXJPYmplY3QoaW1hZ2UpO1xuICAgIGltYWdlLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcblxuICAgIG5leHQoKTtcbiAgfVxufSk7XG5cbkRhcmtyb29tLnBsdWdpbnNbJ3JvdGF0ZSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tUm90YXRlUGx1Z2luKCkge1xuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgdmFyIGxlZnRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdyb3RhdGUtbGVmdCcsXG4gICAgICB0b29sdGlwOiAnUm90YXRlIExlZnQnXG4gICAgfSk7XG5cbiAgICB2YXIgcmlnaHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdyb3RhdGUtcmlnaHQnLFxuICAgICAgdG9vbHRpcDogJ1JvdGF0ZSBSaWdodCdcbiAgICB9KTtcblxuICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZUxlZnQuYmluZCh0aGlzKSk7XG4gICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZVJpZ2h0LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHJvdGF0ZUxlZnQ6IGZ1bmN0aW9uIHJvdGF0ZUxlZnQoKSB7XG4gICAgdGhpcy5yb3RhdGUoLTkwKTtcbiAgfSxcblxuICByb3RhdGVSaWdodDogZnVuY3Rpb24gcm90YXRlUmlnaHQoKSB7XG4gICAgdGhpcy5yb3RhdGUoOTApO1xuICB9LFxuXG4gIHJvdGF0ZTogZnVuY3Rpb24gcm90YXRlKGFuZ2xlKSB7XG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgbmV3IFJvdGF0aW9uKHthbmdsZTogYW5nbGV9KVxuICAgICk7XG4gIH1cblxufSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBDcm9wID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxuICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcbiAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcbiAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBjYW52YXMgc2l6ZVxuICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgLy8gQWRkIGltYWdlXG4gICAgICBpbWFnZS5yZW1vdmUoKTtcbiAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xuXG4gICAgICBuZXh0KGltZ0luc3RhbmNlKTtcbiAgICB9O1xuXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xuICAgIHZhciBpbWFnZVdpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xuXG4gICAgdmFyIGxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdCAqIGltYWdlV2lkdGg7XG4gICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5oZWlnaHQgKiBpbWFnZUhlaWdodCwgaW1hZ2VIZWlnaHQgLSB0b3ApO1xuXG4gICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XG4gICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgdG9wOiB0b3AsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB9KTtcbiAgfVxufSk7XG5cbnZhciBDcm9wWm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XG4gIF9yZW5kZXI6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcblxuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuICAgIHZhciBkYXNoV2lkdGggPSA3O1xuXG4gICAgLy8gU2V0IG9yaWdpbmFsIHNjYWxlXG4gICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcbiAgICB2YXIgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xuICAgIHZhciBzY2FsZVggPSBmbGlwWCAvIHRoaXMuc2NhbGVYO1xuICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xuXG4gICAgY3R4LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcblxuICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xuICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbZGFzaFdpZHRoLCBkYXNoV2lkdGhdKTtcbiAgICBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xuXG4gICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xuXG4gICAgLy8gUmUgcmVuZGVyIGxpbmVzIGluIHdoaXRlXG4gICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAvLyBSZXNldCBzY2FsZVxuICAgIGN0eC5zY2FsZSgxL3NjYWxlWCwgMS9zY2FsZVkpO1xuICB9LFxuXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcblxuICAgIC8vXG4gICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcbiAgICAvLyB5MCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyB5MSArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgLy9cblxuICAgIHZhciB4MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMiAtIHRoaXMuZ2V0TGVmdCgpKTtcbiAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgIHZhciB4MiA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyKTtcbiAgICB2YXIgeDMgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMiArIChjYW52YXMud2lkdGggLSB0aGlzLmdldFdpZHRoKCkgLSB0aGlzLmdldExlZnQoKSkpO1xuXG4gICAgdmFyIHkwID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMiAtIHRoaXMuZ2V0VG9wKCkpO1xuICAgIHZhciB5MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgdmFyIHkzID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgKGNhbnZhcy5oZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpIC0gdGhpcy5nZXRUb3AoKSkpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIFxuICAgIC8vIERyYXcgb3V0ZXIgcmVjdGFuZ2xlLlxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXG4gICAgY3R4Lm1vdmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkwIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkzIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgLy8gRHJhdyBpbm5lciByZWN0YW5nbGUuXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDEsIHkxKTtcblxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9LFxuXG4gIF9yZW5kZXJCb3JkZXJzOiBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIHJpZ2h0XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biByaWdodFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIGxlZnRcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG5cbiAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uKGN0eCkge1xuICAgIC8vIFZlcnRpY2FsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDIvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDIvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufSk7XG5cbkRhcmtyb29tLnBsdWdpbnNbJ2Nyb3AnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAvLyBJbml0IHBvaW50XG4gIHN0YXJ0WDogbnVsbCxcbiAgc3RhcnRZOiBudWxsLFxuXG4gIC8vIEtleWNyb3BcbiAgaXNLZXlDcm9waW5nOiBmYWxzZSxcbiAgaXNLZXlMZWZ0OiBmYWxzZSxcbiAgaXNLZXlVcDogZmFsc2UsXG5cbiAgZGVmYXVsdHM6IHtcbiAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cbiAgICBtaW5IZWlnaHQ6IDEsXG4gICAgbWluV2lkdGg6IDEsXG4gICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cbiAgICByYXRpbzogbnVsbCxcbiAgICAvLyBxdWljayBjcm9wIGZlYXR1cmUgKHNldCBhIGtleSBjb2RlIHRvIGVuYWJsZSBpdClcbiAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ3JvcFBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2Nyb3AnLFxuICAgICAgdG9vbHRpcDogJ0Nyb3AnXG4gICAgfSk7XG4gICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2RvbmUnLFxuICAgICAgdG9vbHRpcDogJ0NvbmZpcm0gQ3JvcCcsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBoaWRlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdjbG9zZScsXG4gICAgICB0b29sdGlwOiAnQWJvcnQgQ3JvcCcsXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcbiAgICB0aGlzLmNyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNyb3AuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JvcEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBDYW52YXMgZXZlbnRzXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XG5cbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcbiAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xuXG4gICAgaWYgKHggPCAwKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcbiAgICBpZiAoeSA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XG4gICAgaWYgKHggPiBtYXhYKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcbiAgICBpZiAoeSA+IG1heFkpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xuICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcbiAgICB9XG4gICAgaWYgKG1pblggPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XG4gICAgfVxuXG4gICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcbiAgICB9XG4gICAgaWYgKG1pblkgPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xuICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gSW5pdCBjcm9wIHpvbmVcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcbiAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cbiAgICB2YXIgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xuICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcblxuICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICB0aGlzLnN0YXJ0WSA9IHk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kIGNyb3Agem9uZVxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBRdWljayBjcm9wIGZlYXR1cmVcbiAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xuXG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHgsIHkpO1xuICB9LFxuXG4gIG9uTW91c2VNb3ZlS2V5Q3JvcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHpvbmUgPSB0aGlzLmNyb3Bab25lO1xuXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIGlmICghem9uZS5sZWZ0IHx8ICF6b25lLnRvcCkge1xuICAgICAgem9uZS5zZXRUb3AoeSk7XG4gICAgICB6b25lLnNldExlZnQoeCk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0tleUxlZnQgPSAgeCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyIDtcbiAgICB0aGlzLmlzS2V5VXAgPSB5IDwgem9uZS50b3AgKyB6b25lLmhlaWdodCAvIDIgO1xuXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXG4gICAgICBNYXRoLm1pbih6b25lLmxlZnQsIHgpLFxuICAgICAgTWF0aC5taW4oem9uZS50b3AsIHkpLFxuICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0K3pvbmUud2lkdGgsIHgpLFxuICAgICAgTWF0aC5tYXgoem9uZS50b3Arem9uZS5oZWlnaHQsIHkpXG4gICAgKTtcbiAgfSxcblxuICAvLyBGaW5pc2ggY3JvcCB6b25lXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICB9LFxuXG4gIG9uS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybjtcblxuICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWUgO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0VG9wKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0TGVmdCgwKTtcbiAgfSxcblxuICBvbktleVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybjtcblxuICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSAxO1xuICAgIHRoaXMuc3RhcnRZID0gMTtcbiAgICB0aGlzLm9uTW91c2VVcCgpO1xuICB9LFxuXG4gIHNlbGVjdFpvbmU6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZvcmNlRGltZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuXG4gICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCt3aWR0aCwgeStoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCh7XG4gICAgICAgICdsZWZ0JzogeCxcbiAgICAgICAgJ3RvcCc6IHksXG4gICAgICAgICd3aWR0aCc6IHdpZHRoLFxuICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICB0b2dnbGVDcm9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgfSxcblxuICBjcm9wQ3VycmVudFpvbmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXG4gICAgaWYgKHRoaXMuY3JvcFpvbmUud2lkdGggPCAxICYmIHRoaXMuY3JvcFpvbmUuaGVpZ2h0IDwgMSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG5cbiAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXG4gICAgdmFyIHRvcCA9IHRoaXMuY3JvcFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcbiAgICB2YXIgbGVmdCA9IHRoaXMuY3JvcFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY3JvcFpvbmUuZ2V0V2lkdGgoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jcm9wWm9uZS5nZXRIZWlnaHQoKTtcblxuICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcbiAgICBpZiAodG9wIDwgMCkge1xuICAgICAgaGVpZ2h0ICs9IHRvcDtcbiAgICAgIHRvcCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICB3aWR0aCArPSBsZWZ0O1xuICAgICAgbGVmdCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ3JvcCh7XG4gICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgICAgbGVmdDogbGVmdCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKSxcbiAgICB9KSk7XG4gIH0sXG5cbiAgLy8gVGVzdCB3ZXRoZXIgY3JvcCB6b25lIGlzIHNldFxuICBoYXNGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIGNyb3Agem9uZVxuICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgb3JpZ2luWDogJ2xlZnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAvL3N0cm9rZTogJyM0NDQnLFxuICAgICAgLy9zdHJva2VEYXNoQXJyYXk6IFs1LCA1XSxcbiAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXG4gICAgICBjb3JuZXJTaXplOiA4LFxuICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIGhhc1JvdGF0aW5nUG9pbnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoJ2xvY2tVbmlTY2FsaW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMuY3JvcFpvbmUpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcbiAgfSxcblxuICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxuICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xuICAgIHRoaXMuY3JvcFpvbmUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcblxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgX3JlbmRlckNyb3Bab25lOiBmdW5jdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgdmFyIGlzUmlnaHQgPSAodG9YID4gZnJvbVgpO1xuICAgIHZhciBpc0xlZnQgPSAhaXNSaWdodDtcbiAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcbiAgICB2YXIgaXNVcCA9ICFpc0Rvd247XG5cbiAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XG4gICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xuICAgIHZhciBsZWZ0WCA9IE1hdGgubWluKGZyb21YLCB0b1gpO1xuICAgIHZhciByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcbiAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xuICAgIHZhciBib3R0b21ZID0gTWF0aC5tYXgoZnJvbVksIHRvWSk7XG5cbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXG4gICAgbGVmdFggPSBNYXRoLm1heCgwLCBsZWZ0WCk7XG4gICAgcmlnaHRYID0gTWF0aC5taW4oY2FudmFzLmdldFdpZHRoKCksIHJpZ2h0WCk7XG4gICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpXG4gICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XG5cbiAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xuICAgIGlmIChyaWdodFggLSBsZWZ0WCA8IG1pbldpZHRoKSB7XG4gICAgICBpZiAoaXNSaWdodClcbiAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcbiAgICAgIGVsc2VcbiAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XG4gICAgICBpZiAoaXNEb3duKVxuICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcbiAgICAgIGVsc2VcbiAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXG4gICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XG4gICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xuICAgICAgbGVmdFggPSAwXG4gICAgfVxuICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgbGVmdFggLT0gKHJpZ2h0WCAtIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodG9wWSA8IDApIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXG4gICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xuICAgICAgdG9wWSA9IDBcbiAgICB9XG4gICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcbiAgICAgIHRvcFkgLT0gKGJvdHRvbVkgLSBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICB9XG5cbiAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XG4gICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcbiAgICAgIHZhciByYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG5cbiAgICAgIGlmKHRoaXMuaXNLZXlDcm9waW5nKSB7XG4gICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xuICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gaGVpZ2h0ICogcmF0aW87XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodC93aWR0aCk7XG4gICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcbiAgICAgICAgbGVmdFggPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgICB0b3BZID0gMDtcbiAgICAgICAgLy9UT0RPXG4gICAgICB9XG4gICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XG4gICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcbiAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcbiAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XG4gICAgdGhpcy5jcm9wWm9uZS53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9XG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBEYXJrcm9vbS5wbHVnaW5zWydzYXZlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgICAgICBkZWZhdWx0czogeyBjYWxsYmFjazogZnVuY3Rpb24oKSB7IHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTsgfSB9LFxuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXRpYWxpemVEYXJrcm9vbVNhdmVQbHVnaW4oKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgICAgICAgdGhpcy5kZXN0cm95QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3NhdmUnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdQcm9jZWVkJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3B0aW9ucy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
