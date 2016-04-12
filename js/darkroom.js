(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="less-brightness" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-2.672v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688L23.296 12z"/></symbol><symbol id="less_brightness" viewBox="0 0 24 24"><path d="M12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-2.672v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688L23.296 12z"/></symbol><symbol id="more-brightness" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8.016c2.203 0 3.984 1.78 3.984 3.984s-1.78 3.984-3.984 3.984S8.016 14.204 8.016 12 9.796 8.016 12 8.016zM12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-9.328L23.296 12l-3.28 3.328v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688z"/></symbol><symbol id="more_brightness" viewBox="0 0 24 24"><path d="M12 8.016c2.203 0 3.984 1.78 3.984 3.984s-1.78 3.984-3.984 3.984S8.016 14.204 8.016 12 9.796 8.016 12 8.016zM12 18c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zm8.016-9.328L23.296 12l-3.28 3.328v4.688h-4.688L12 23.296l-3.328-3.28H3.984v-4.688L.704 12l3.28-3.328V3.984h4.688L12 .704l3.328 3.28h4.688v4.688z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="upload" viewBox="0 0 1024 1024"><path d="M0 0h24v24H0z" fill="none"/><path d="M214 768h596v86H214v-86zm170-86V426H214l298-298 298 298H640v256H384z"/></symbol></svg><!-- endinject -->';
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

    initialize: function InitDarkroomRotatePlugin() {
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
                tooltip: 'Save'
            });

            this.destroyButton.addEventListener('click', this.options.callback.bind(this));
        }
    });

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20udXBsb2FkLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLmJyaWdodG5lc3MuanMiLCJkYXJrcm9vbS5yb3RhdGUuanMiLCJkYXJrcm9vbS5jcm9wLmpzIiwiZGFya3Jvb20uc2F2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDeHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbmplY3QgU1ZHIGljb25zIGludG8gdGhlIERPTVxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuaWQgPSAnZGFya3Jvb20taWNvbnMnO1xuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuRGFya3Jvb20gPSBEYXJrcm9vbTtcblxuLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cbi8vIEJhc2ljYWxseSBpdCdzIGEgc2luZ2xlIG9iamVjdCwgaW5zdGFuY2lhYmxlIHZpYSBhbiBlbGVtZW50XG4vLyAoaXQgY291bGQgYmUgYSBDU1Mgc2VsZWN0b3Igb3IgYSBET00gZWxlbWVudCksIHNvbWUgY3VzdG9tIG9wdGlvbnMsXG4vLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxuZnVuY3Rpb24gRGFya3Jvb20oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKTtcbn1cblxuLy8gQ3JlYXRlIGFuIGVtcHR5IGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMsIHdoaWNoIHdpbGwgYmUgZmlsbGVkIGJ5XG4vLyBvdGhlciBwbHVnaW4gc2NyaXB0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCBwbHVnaW4gbGlzdCBpZiBub25lIGlzXG4vLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXG5EYXJrcm9vbS5wbHVnaW5zID0gW107XG5cbkRhcmtyb29tLnByb3RvdHlwZSA9IHtcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdFxuICBjYW52YXM6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0XG4gIGltYWdlOiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XG4gIHNvdXJjZUNhbnZhczogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgaW1hZ2Ugb2JqZWN0XG4gIHNvdXJjZUltYWdlOiBudWxsLFxuICBcbiAgLy8gRmlyZWQgd2hlbiBhIG5ldyBpbWFnZSBpcyB1cGxvYWRlZCAvIGNoYW5nZSBldmVudCBmb3IgY2FudmFzIGVsZW1lbnRcbiAgb25jaGFuZ2U6IGZ1bmN0aW9uKCkgeyB9LFxuXG4gIC8vIFRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gIG9yaWdpbmFsSW1hZ2VFbGVtZW50OiBudWxsLFxuXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXG4gIHRyYW5zZm9ybWF0aW9uczogW10sXG5cbiAgLy8gRGVmYXVsdCBvcHRpb25zXG4gIGRlZmF1bHRzOiB7XG4gICAgLy8gQ2FudmFzIHByb3BlcnRpZXMgKGRpbWVuc2lvbiwgcmF0aW8sIGNvbG9yKVxuICAgIG1pbldpZHRoOiBudWxsLFxuICAgIG1pbkhlaWdodDogbnVsbCxcbiAgICBtYXhXaWR0aDogbnVsbCxcbiAgICBtYXhIZWlnaHQ6IG51bGwsXG4gICAgcmF0aW86IG51bGwsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG5cbiAgICAvLyBQbHVnaW5zIG9wdGlvbnNcbiAgICBwbHVnaW5zOiB7fSxcblxuICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgLyogbm9vcCAqLyB9XG4gIH0sXG5cbiAgLy8gTGlzdCBvZiB0aGUgaW5zdGFuY2llZCBwbHVnaW5zXG4gIHBsdWdpbnM6IHt9LFxuXG4gIC8vIFRoaXMgb3B0aW9ucyBhcmUgYSBtZXJnZSBiZXR3ZWVuIGBkZWZhdWx0c2AgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxuICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxuICBvcHRpb25zOiB7fSxcblxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xuICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcblxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NL0ZhYnJpYyBlbGVtZW50c1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZURPTShlbGVtZW50KTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xuXG4gICAgICAvLyBUaGVuIGluaXRpYWxpemUgdGhlIHBsdWdpbnNcbiAgICAgIHRoaXMuX2luaXRpYWxpemVQbHVnaW5zKERhcmtyb29tLnBsdWdpbnMpO1xuXG4gICAgICAvLyBQdWJsaWMgbWV0aG9kIHRvIGFkanVzdCBpbWFnZSBhY2NvcmRpbmcgdG8gdGhlIGNhbnZhc1xuICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBFeGVjdXRlIGEgY3VzdG9tIGNhbGxiYWNrIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMub3B0aW9ucy5pbml0aWFsaXplLmJpbmQodGhpcykuY2FsbCgpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIH0uYmluZCh0aGlzKVxuXG4gICAgLy9pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xuICB9LFxuXG4gIHNlbGZEZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbGVtZW50O1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGltYWdlLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gIH0sXG5cbiAgLy8gQWRkIGFiaWxpdHkgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBjb3JlIG9iamVjdC5cbiAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZWwgPSB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCk7XG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIC8vIFVzZSB0aGUgb2xkIHdheSBvZiBjcmVhdGluZyBldmVudCB0byBiZSBJRSBjb21wYXRpYmxlXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHNcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblxuICAgIHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSxcblxuICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxuICAvLyBhbmQgcmF0aW8gc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLlxuICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXG4gIHJlZnJlc2g6IGZ1bmN0aW9uKG5leHQpIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3JlcGxhY2VDdXJyZW50SW1hZ2UobmV3IGZhYnJpYy5JbWFnZShjbG9uZSkpO1xuXG4gICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICBjbG9uZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xuICB9LFxuXG4gIF9yZXBsYWNlQ3VycmVudEltYWdlOiBmdW5jdGlvbihuZXdJbWFnZSkge1xuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcbiAgICB0aGlzLmltYWdlLnNlbGVjdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuaW1hZ2UpO1xuICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB2YXIgY2FudmFzUmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xuXG4gICAgICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvIDwgY2FudmFzUmF0aW8pIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXG4gICAgdmFyIHNjYWxlTWluID0gMTtcbiAgICB2YXIgc2NhbGVNYXggPSAxO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhXaWR0aCAmJiB0aGlzLm9wdGlvbnMubWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5tYXhXaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICBzY2FsZVggPSAxO1xuICAgIHNjYWxlWSA9IDE7XG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5XaWR0aCAmJiB0aGlzLm9wdGlvbnMubWluV2lkdGggPiBjYW52YXNXaWR0aCkge1xuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbkhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICB2YXIgc2NhbGUgPSBzY2FsZU1heCAqIHNjYWxlTWluOyAvLyBvbmUgc2hvdWxkIGJlIGVxdWFscyB0byAxXG5cbiAgICBjYW52YXNXaWR0aCAqPSBzY2FsZTtcbiAgICBjYW52YXNIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICB0aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xuICAgIHRoaXMuaW1hZ2Uuc2V0U2NhbGVZKDEgKiBzY2FsZSk7XG4gICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xuICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XG4gICAgdGhpcy5pbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXG4gIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcbiAgLy8gb2YgdGhlIGltYWdlKS5cbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICk7XG4gIH0sXG5cbiAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICBpZiAobmV3SW1hZ2UpXG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XG5cbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxuICByZWluaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcbiAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxuICB9LFxuXG4gIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb25zKSB7XG4gICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcblxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgIH07XG5cbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cbiAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uKGltYWdlRWxlbWVudCkge1xuICAgIC8vIENvbnRhaW5lclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xuXG4gICAgLy8gVG9vbGJhclxuICAgIHZhciB0b29sYmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAvLyBWaWV3cG9ydCBjYW52YXNcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgLy8gU291cmNlIGNhbnZhc1xuICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoc291cmNlQ2FudmFzRWxlbWVudCwge1xuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEluc3RhbmNpYXRlIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0LlxuICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcbiAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICBfaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XG4gICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xuXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXG4gIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XG4gIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBwbHVnaW5zKSB7XG4gICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXG4gICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB0aGlzLnBsdWdpbnNbbmFtZV0gPSBuZXcgcGx1Z2luKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSxcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uUGx1Z2luID0gUGx1Z2luO1xuXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxuLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XG4gIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgdGhpcy5pbml0aWFsaXplKCk7XG59XG5cblBsdWdpbi5wcm90b3R5cGUgPSB7XG4gIGRlZmF1bHRzOiB7fSxcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5QbHVnaW4uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5UcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlVJID0ge1xuICBUb29sYmFyOiBUb29sYmFyLFxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbjogQnV0dG9uLFxufTtcblxuLy8gVG9vbGJhciBvYmplY3QuXG5mdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuVG9vbGJhci5wcm90b3R5cGUgPSB7XG4gIGNyZWF0ZUJ1dHRvbkdyb3VwOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xuICB9XG59O1xuXG4vLyBCdXR0b25Hcm91cCBvYmplY3QuXG5mdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlQnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgaW1hZ2U6ICdoZWxwJyxcbiAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xuXG4gICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b25FbGVtZW50LnRpdGxlID0gb3B0aW9ucy50b29sdGlwO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcbiAgICBidXR0b25FbGVtZW50LmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGFya3Jvb20taWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiMnICsgb3B0aW9ucy5pbWFnZSArICdcIiAvPjwvc3ZnPic7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgdmFyIGJ1dHRvbiA9IG5ldyBCdXR0b24oYnV0dG9uRWxlbWVudCk7XG4gICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcbiAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuLy8gQnV0dG9uIG9iamVjdC5cbmZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgYWN0aXZlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1hY3RpdmUnKTtcbiAgfSxcbiAgaGlkZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24taGlkZGVuJyk7XG4gIH0sXG4gIGRpc2FibGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxufTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVXRpbHMgPSB7XG4gIGV4dGVuZDogZXh0ZW5kLFxuICBjb21wdXRlSW1hZ2VWaWV3UG9ydDogY29tcHV0ZUltYWdlVmlld1BvcnQsXG59O1xuXG5cbi8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cbmZ1bmN0aW9uIGV4dGVuZChiLCBhKSB7XG4gIHZhciBwcm9wO1xuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgZm9yIChwcm9wIGluIGEpIHtcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBiLmhhc093blByb3BlcnR5KHByb3ApID09PSBmYWxzZSkge1xuICAgICAgYltwcm9wXSA9IGFbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSksXG4gICAgd2lkdGg6IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxuICB9XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgRGFya3Jvb20ucGx1Z2luc1sndXBsb2FkJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbVVwbG9hZFBsdWdpbigpIHtcbiAgICAgICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICAgICAgICB2YXIgdXBsb2FkQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgICAgICAgICBpbWFnZTogJ3VwbG9hZCcsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJ1VwbG9hZCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwbG9hZC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya3Jvb21GaWxlJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPSAnZmlsZSc7XG4gICAgICAgICAgICAgICAgZmllbGQubmFtZSA9ICdkYXJrcm9vbUZpbGUnO1xuICAgICAgICAgICAgICAgIGZpZWxkLmlkID0gJ2Rhcmtyb29tRmlsZSc7XG4gICAgICAgICAgICAgICAgZmllbGQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgZmllbGQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmxlZnQgPSAnLTYwMDBweCc7XG4gICAgICAgICAgICAgICAgZmllbGQuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5sb2FkSW1hZ2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGxvYWRJbWFnZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBka3JtLmNvbnRhaW5lckVsZW1lbnQucGFyZW50Tm9kZS5pbm5lckhUTUwgPSAnPGltZyBpZD1cInRhcmdldFwiIHNyYz1cIlwiIC8+JztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICAgICAgICAgICAgICBpbWdFZGl0b3IuaW5pdCgnI3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgZGtybS5vbmNoYW5nZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGxvYWQ6IGZ1bmN0aW9uIHVwbG9hZCgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrcm9vbUZpbGUnKTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICAgICAgICAgICAgICBldnQuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKGV2dCkgPyBlbC5kaXNwYXRjaEV2ZW50KGV2dCkgOiAoZWwuY2xpY2sgJiYgZWwuY2xpY2soKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KSgpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgdG9vbHRpcDogJ1VuZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAncmVkbycsXG4gICAgICAgIHRvb2x0aXA6ICdSZWRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlQnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmJhY2tCdXR0b24uZGlzYWJsZSgodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5kaXNhYmxlKCh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcbiAgICB9LFxuXG4gICAgX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zID0gW107XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfVxuICB9KTtcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBCcmlnaHRuZXNzID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgICBicmlnaHRuZXNzOiAwLFxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uIChjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMuZGlmZik7XG4gICAgICB0aGlzLmJyaWdodG5lc3MgKz0gdGhpcy5vcHRpb25zLmRpZmY7XG4gICAgICB2YXIgZmlsdGVyID0gbmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLkJyaWdodG5lc3Moe1xuICAgICAgICBicmlnaHRuZXNzOiB0aGlzLmJyaWdodG5lc3NcbiAgICAgIH0pO1xuICAgICAgaW1hZ2UuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICBpbWFnZS5hcHBseUZpbHRlcnMoY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcykpO1xuICAgICAgLy9jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAvKnZhciBhbmdsZSA9IChpbWFnZS5nZXRBbmdsZSgpICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAlIDM2MDtcbiAgICAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xuXG4gICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICAgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xuICAgICAgIHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xuXG4gICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcbiAgICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcbiAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcbiAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7Ki9cblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgRGFya3Jvb20ucGx1Z2luc1snYnJpZ2h0bmVzcyddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdmFyIGxlc3NCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ2xlc3MtYnJpZ2h0bmVzcycsXG4gICAgICAgIHRvb2x0aXA6ICdEYXJrZW4nXG4gICAgICB9KTtcblxuICAgICAgdmFyIG1vcmVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ21vcmUtYnJpZ2h0bmVzcycsXG4gICAgICAgIHRvb2x0aXA6ICdCcmlnaHRlbidcbiAgICAgIH0pO1xuXG4gICAgICBsZXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sZXNzQnJpZ2h0bmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgIG1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vcmVCcmlnaHRuZXNzLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBsZXNzQnJpZ2h0bmVzczogZnVuY3Rpb24gbGVzc0JyaWdodG5lc3MoKSB7XG4gICAgICB0aGlzLmJyaWdodG5lc3MoLTEwKTtcbiAgICB9LFxuXG4gICAgbW9yZUJyaWdodG5lc3M6IGZ1bmN0aW9uIG1vcmVCcmlnaHRuZXNzKCkge1xuICAgICAgdGhpcy5icmlnaHRuZXNzKDEwKTtcbiAgICB9LFxuXG4gICAgYnJpZ2h0bmVzczogZnVuY3Rpb24gYnJpZ2h0bmVzcyh2YWx1ZSkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgICBuZXcgQnJpZ2h0bmVzcyh7ZGlmZjogdmFsdWV9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcblxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgbmV4dCgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0JyxcbiAgICAgIHRvb2x0aXA6ICdSb3RhdGUgTGVmdCdcbiAgICB9KTtcblxuICAgIHZhciByaWdodEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3JvdGF0ZS1yaWdodCcsXG4gICAgICB0b29sdGlwOiAnUm90YXRlIFJpZ2h0J1xuICAgIH0pO1xuXG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlTGVmdC5iaW5kKHRoaXMpKTtcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcm90YXRlTGVmdDogZnVuY3Rpb24gcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICB9LFxuXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gIH0sXG5cbiAgcm90YXRlOiBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICBuZXcgUm90YXRpb24oe2FuZ2xlOiBhbmdsZX0pXG4gICAgKTtcbiAgfVxuXG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIENyb3AgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgIGltYWdlLnJlbW92ZSgpO1xuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgIH07XG5cbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcbiAgICB2YXIgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XG5cbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICB0b3A6IHRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIH0pO1xuICB9XG59KTtcblxudmFyIENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcbiAgX3JlbmRlcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xuXG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gICAgdmFyIGRhc2hXaWR0aCA9IDc7XG5cbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcbiAgICB2YXIgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xuICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XG4gICAgdmFyIHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XG5cbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xuXG4gICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xuICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XG5cbiAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcbiAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgIC8vIFJlc2V0IHNjYWxlXG4gICAgY3R4LnNjYWxlKDEvc2NhbGVYLCAxL3NjYWxlWSk7XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuXG4gICAgLy9cbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xuICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAvL1xuXG4gICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xuICAgIHZhciB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XG5cbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XG4gICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgdmFyIHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgLy8gRHJhdyBvdXRlciByZWN0YW5nbGUuXG4gICAgLy8gTnVtYmVycyBhcmUgKy8tMSBzbyB0aGF0IG92ZXJsYXkgZWRnZXMgZG9uJ3QgZ2V0IGJsdXJyeS5cbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTMgKyAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAvLyBEcmF3IGlubmVyIHJlY3RhbmdsZS5cbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0sXG5cbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgcmlnaHRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIHJpZ2h0XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcblxuICBfcmVuZGVyR3JpZDogZnVuY3Rpb24oY3R4KSB7XG4gICAgLy8gVmVydGljYWwgbGluZXNcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gIC8vIEluaXQgcG9pbnRcbiAgc3RhcnRYOiBudWxsLFxuICBzdGFydFk6IG51bGwsXG5cbiAgLy8gS2V5Y3JvcFxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxuICBpc0tleUxlZnQ6IGZhbHNlLFxuICBpc0tleVVwOiBmYWxzZSxcblxuICBkZWZhdWx0czoge1xuICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxuICAgIG1pbkhlaWdodDogMSxcbiAgICBtaW5XaWR0aDogMSxcbiAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xuICAgIHJhdGlvOiBudWxsLFxuICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxuICAgIHF1aWNrQ3JvcEtleTogZmFsc2VcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Dcm9wUGx1Z2luKCkge1xuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnY3JvcCcsXG4gICAgICB0b29sdGlwOiAnQ3JvcCdcbiAgICB9KTtcbiAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnZG9uZScsXG4gICAgICB0b29sdGlwOiAnQ29uZmlybSBDcm9wJyxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2Nsb3NlJyxcbiAgICAgIHRvb2x0aXA6ICdBYm9ydCBDcm9wJyxcbiAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgaGlkZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gQnV0dG9ucyBjbGlja1xuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcm9wQ3VycmVudFpvbmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcblxuICAgIC8vIENhbnZhcyBldmVudHNcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OnNjYWxpbmcnLCB0aGlzLm9uT2JqZWN0U2NhbGluZy5iaW5kKHRoaXMpKTtcblxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xuICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCksIHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgIHZhciB3ID0gY3VycmVudE9iamVjdC5nZXRXaWR0aCgpLCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcbiAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcbiAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XG5cbiAgICBpZiAoeCA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIDApO1xuICAgIGlmICh5IDwgMClcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcbiAgICBpZiAoeCA+IG1heFgpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xuICAgIGlmICh5ID4gbWF4WSlcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCBtYXhZKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcbiAgb25PYmplY3RTY2FsaW5nOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XG4gICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIHZhciBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XG4gICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgIHZhciBtYXhYID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCkgKyBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XG4gICAgdmFyIG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcblxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgdmFyIGxhc3RTY2FsZVggPSB0aGlzLmxhc3RTY2FsZVggfHwgMTtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xuICAgIH1cbiAgICBpZiAobWluWCA8IDApIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcbiAgICB9XG5cbiAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgdmFyIGxhc3RTY2FsZVkgPSB0aGlzLmxhc3RTY2FsZVkgfHwgMTtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xuICAgIH1cbiAgICBpZiAobWluWSA8IDApIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XG4gICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBJbml0IGNyb3Agem9uZVxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgIC8vIHJlY2FsY3VsYXRlIG9mZnNldCwgaW4gY2FzZSBjYW52YXMgd2FzIG1hbmlwdWxhdGVkIHNpbmNlIGxhc3QgYGNhbGNPZmZzZXRgXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuICAgIHZhciBwb2ludCA9IG5ldyBmYWJyaWMuUG9pbnQoeCwgeSk7XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxuICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5jcm9wWm9uZSB8fCB0aGlzLmNyb3Bab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuXG4gICAgdGhpcy5zdGFydFggPSB4O1xuICAgIHRoaXMuc3RhcnRZID0geTtcbiAgfSxcblxuICAvLyBFeHRlbmQgY3JvcCB6b25lXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFF1aWNrIGNyb3AgZmVhdHVyZVxuICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybiB0aGlzLm9uTW91c2VNb3ZlS2V5Q3JvcChldmVudCk7XG5cbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XG4gIH0sXG5cbiAgb25Nb3VzZU1vdmVLZXlDcm9wOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgem9uZSA9IHRoaXMuY3JvcFpvbmU7XG5cbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuXG4gICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XG4gICAgICB6b25lLnNldFRvcCh5KTtcbiAgICAgIHpvbmUuc2V0TGVmdCh4KTtcbiAgICB9XG5cbiAgICB0aGlzLmlzS2V5TGVmdCA9ICB4IDwgem9uZS5sZWZ0ICsgem9uZS53aWR0aCAvIDIgO1xuICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMiA7XG5cbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZShcbiAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXG4gICAgICBNYXRoLm1pbih6b25lLnRvcCwgeSksXG4gICAgICBNYXRoLm1heCh6b25lLmxlZnQrem9uZS53aWR0aCwgeCksXG4gICAgICBNYXRoLm1heCh6b25lLnRvcCt6b25lLmhlaWdodCwgeSlcbiAgICApO1xuICB9LFxuXG4gIC8vIEZpbmlzaCBjcm9wIHpvbmVcbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gIH0sXG5cbiAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IHRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gQWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZSA7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRMZWZ0KDApO1xuICB9LFxuXG4gIG9uS2V5VXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgIXRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gVW5hY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IDE7XG4gICAgdGhpcy5zdGFydFkgPSAxO1xuICAgIHRoaXMub25Nb3VzZVVwKCk7XG4gIH0sXG5cbiAgc2VsZWN0Wm9uZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG5cbiAgICBpZiAoIWZvcmNlRGltZW5zaW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh4LCB5LCB4K3dpZHRoLCB5K2hlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KHtcbiAgICAgICAgJ2xlZnQnOiB4LFxuICAgICAgICAndG9wJzogeSxcbiAgICAgICAgJ3dpZHRoJzogd2lkdGgsXG4gICAgICAgICdoZWlnaHQnOiBoZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9LFxuXG4gIHRvZ2dsZUNyb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICB9LFxuXG4gIGNyb3BDdXJyZW50Wm9uZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICBpZiAodGhpcy5jcm9wWm9uZS53aWR0aCA8IDEgJiYgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPCAxKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcblxuICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcbiAgICB2YXIgdG9wID0gdGhpcy5jcm9wWm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xuICAgIHZhciBsZWZ0ID0gdGhpcy5jcm9wWm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jcm9wWm9uZS5nZXRXaWR0aCgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNyb3Bab25lLmdldEhlaWdodCgpO1xuXG4gICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxuICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICBoZWlnaHQgKz0gdG9wO1xuICAgICAgdG9wID0gMDtcbiAgICB9XG5cbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIHdpZHRoICs9IGxlZnQ7XG4gICAgICBsZWZ0ID0gMDtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgIH0pKTtcbiAgfSxcblxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIC8vc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgY29ybmVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICB9LFxuXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgIHZhciBpc1VwID0gIWlzRG93bjtcblxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG5cbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XG4gICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcblxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcbiAgICAgIGlmIChpc1JpZ2h0KVxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xuICAgICAgZWxzZVxuICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xuICAgIH1cbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcbiAgICAgIGlmIChpc0Rvd24pXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xuICAgICAgZWxzZVxuICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICBpZiAobGVmdFggPCAwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcbiAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICBsZWZ0WCA9IDBcbiAgICB9XG4gICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xuICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICB0b3BZID0gMFxuICAgIH1cbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcbiAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xuICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcblxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgaXNMZWZ0ID0gdGhpcy5pc0tleUxlZnQ7XG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgICAgaWYgKGlzTGVmdCkge1xuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICAgIC8vVE9ET1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xuICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xuICAgIHRoaXMuY3JvcFpvbmUubGVmdCA9IGxlZnRYO1xuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH1cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIERhcmtyb29tLnBsdWdpbnNbJ3NhdmUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgICAgIGRlZmF1bHRzOiB7IGNhbGxiYWNrOiBmdW5jdGlvbigpIHsgdGhpcy5kYXJrcm9vbS5zZWxmRGVzdHJveSgpOyB9IH0sXG5cbiAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcbiAgICAgICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICAgICAgICAgIGltYWdlOiAnc2F2ZScsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJ1NhdmUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5kZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcHRpb25zLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
