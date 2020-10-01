/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Animations.ts":
/*!***************************!*\
  !*** ./src/Animations.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Animations = /** @class */ (function () {
    function Animations() {
    }
    Animations.createCharactersAnims = function (params) {
        for (var _i = 0, _a = params.users; _i < _a.length; _i++) {
            var user = _a[_i];
            var tk = user.characterInstance.textureKey;
            params.scene.anims.create({
                key: tk + "WALK",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: 'walk-side-armed',
                    start: 1,
                    end: 4,
                    zeroPad: 2
                }),
                frameRate: 10,
                repeat: -1
            });
            params.scene.anims.create({
                key: tk + "WALK_SHOOT",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: 'walk-side-shoot',
                    start: 1,
                    end: 4,
                    zeroPad: 2
                }),
                repeat: -1
            });
            params.scene.anims.create({
                key: tk + "IDLE",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: 'idle-front-armed',
                    start: 1,
                    end: 4,
                    zeroPad: 2
                }),
                frameRate: 10,
                repeat: -1
            });
            params.scene.anims.create({
                key: tk + "IDLE_SHOOT",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: 'idle-front-shoot',
                    start: 1,
                    end: 1,
                    zeroPad: 2
                }),
                repeat: -1
            });
            params.scene.anims.create({
                key: tk + "HIT",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: 'hit',
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1
            });
            params.scene.anims.create({
                key: tk + "DEAD",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: 'dead',
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1
            });
        }
    };
    return Animations;
}());
exports.Animations = Animations;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/**
 * Return the width of the current scene.
 * Which is generally equal to the width of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
/**
 * Return the height of the current scene.
 * Which is generally equal to the height of the "screen"/canvas but not always.
 * @param scene
 */
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
/**
 * Load a file in ajax and return its response text.
 * @param pFilePath Path to the desired file
 */
exports.loadFile = function (pFilePath) {
    var rawFile = new XMLHttpRequest();
    var result;
    rawFile.onerror = function () {
        console.log("Impossible to load file.");
    };
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                result = rawFile.responseText;
            }
        }
    };
    rawFile.open("GET", pFilePath, false);
    rawFile.send(null);
    return result;
};
/**
 * Returns a 2d-array of strings from a whole text file given as input.
 * Works best if the input text is only composed of single chars and '\n'.
 * Each final array element would be one character of the text input.
 * @param pFilePath
 */
exports.loadStrings = function (pFilePath) {
    var rawGrid = _this.loadFile(pFilePath);
    return rawGrid.split('\n').map(function (item) { return item.split(''); });
};
exports.COLORS = {
    customBlue: { string: '#4346f9', hex: 0x4346f9 },
    customGreen: { string: '#76ea64', hex: 0x76ea64 },
    vibrantGreen: { string: '#25f945', hex: 0x25f945 },
    customRed: { string: '#ea2d23', hex: 0xea2d23 },
    white: { string: '#ffffff', hex: 0xffffff }
};
exports.CONTROLKEYS = {
    PLAYER: {
        SET1: {
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            jump: Phaser.Input.Keyboard.KeyCodes.UP,
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.S,
            shoot: Phaser.Input.Keyboard.KeyCodes.SPACE
        }
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Hoa Fight',
    type: Phaser.AUTO,
    scale: {
        width: 1024,
        height: 640
    },
    input: {
        gamepad: true,
        keyboard: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false,
        },
    },
    dom: {
        createContainer: true
    },
    parent: 'game',
    scene: scenes_1.default
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/objects/Bomb.ts":
/*!*****************************!*\
  !*** ./src/objects/Bomb.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        _this.setBounce(1);
        _this.setVelocity(Phaser.Math.Between(-200, 200), 20);
        _this.setGravityY(1000);
        return _this;
    }
    Bomb.prototype.isOut = function () {
        if (this.x > helpers_1.getGameWidth(this.scene) ||
            this.y > helpers_1.getGameHeight(this.scene) ||
            this.x < 0 ||
            this.y < 0) {
            return true;
        }
        return false;
    };
    Bomb.prototype.update = function () {
        if (this.isOut()) {
            this.destroy();
            console.log("Bomb destroyed cause out of world bounds");
        }
    };
    return Bomb;
}(Phaser.Physics.Arcade.Image));
exports.Bomb = Bomb;


/***/ }),

/***/ "./src/objects/Character.ts":
/*!**********************************!*\
  !*** ./src/objects/Character.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class represent a Game Character, not to be confused with the "Player".
 * A Player integrates a Character. A Character is just about holding data :
 * texture keys, metadata, voices etc. Nothing to be controlled with your
 * keyboard here.
 */
var Character = /** @class */ (function () {
    function Character(params) {
        this.id = params.id;
        this.details = params.details;
        this.stats = params.stats;
        this._textureKey = "character" + this.id;
        this._thumbnailKey = "character" + this.id + "Avatar";
        this._soundKey = "character" + this.id + "Sound";
    }
    Object.defineProperty(Character.prototype, "textureKey", {
        get: function () {
            return this._textureKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "thumbnailKey", {
        get: function () {
            return this._thumbnailKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "soundKey", {
        get: function () {
            return this._soundKey;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
exports.Character = Character;


/***/ }),

/***/ "./src/objects/Gui.ts":
/*!****************************!*\
  !*** ./src/objects/Gui.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/**
 * This class is used for GUI elements such as actions buttons and titles.
 * It relies on Phaser game objects DOM elements, so these GUI elements are
 * html and css.
 */
var Gui = /** @class */ (function () {
    function Gui() {
    }
    /**
     * Create a stylized Button DOM Element with a click event listener attached
     * to it. The event listener callback starts a new scene using the scene key
     * passed in arguments and stops all sounds if stopSounds set to true.
     */
    Gui.mainBtn = function (params) {
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 100, 'button', Gui.mainBtnStyle, params.text).addListener('click').on('click', function () {
            params.scene.sound.add('clickSound').play();
            if (params.stopSounds) {
                params.scene.sound.stopAll();
            }
            params.scenePlugin.start(params.newSceneKey, params.sceneData);
        });
    };
    /**
     * Button that changes an image (img) texture with another (textures),
     * one by one. Like a slideshow.
     * @param img: a phaser game object image that act as a container in a way.
     * @param textures: the textures to append to img.
     */
    Gui.slideBtn = function (params) {
        var currentIndex = 0;
        params.scene.add.dom(params.x, params.y, 'button', Gui.secondaryBtnStyle, params.text).addListener('click').on('click', function () {
            params.scene.sound.add('clickSound').play();
            if (currentIndex < params.textureKeys.length - 1) {
                currentIndex++;
            }
            else {
                currentIndex = 0;
            }
            params.img.setTexture(params.textureKeys[currentIndex]);
            if (params.callback !== undefined) {
                params.callback();
            }
        });
    };
    Gui.title = function (params) {
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 24, 'h3', Gui.titleStyle, params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, 'h4', Gui.sectionTitleStyle, params.text);
    };
    Gui.customText = function (params) {
        params.scene.add.dom(params.x, params.y, 'p', Gui.basicTextStyle, params.text);
    };
    Gui.mainBtnStyle = "\n\t\twidth: 150px; \n\t\theight: 49px; \n\t\tfont-family: Grobold,Arial; \n\t\tcolor: #000000; \n\t\tfont-size: 25px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000\n\t";
    Gui.secondaryBtnStyle = "\n\t\twidth: 100px; \n\t\theight: 33px; \n\t\tfont-family: Grobold, Arial, sans-serif; \n\t\tcolor: #000000; \n\t\tfont-size: 17px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000\n\t";
    Gui.titleStyle = "color: #ffffff; \n\t\tfont-size: 40px; \n\t\tfont-family: Grobold, Arial, sans-serif";
    Gui.sectionTitleStyle = "\n\t\tcolor: #ffffff; \n\t\tfont-size: 30px; \n\t\tfont-family: Grobold, Arial, sans-serif\n\t";
    Gui.basicTextStyle = "\n\t\tcolor: #ffffff; \n\t\tfont-size: 20px; \n\t\ttext-align: center; \n\t\tfont-family: Grobold, Arial, sans-serif\n\t";
    return Gui;
}());
exports.Gui = Gui;


/***/ }),

/***/ "./src/objects/HealthBar.ts":
/*!**********************************!*\
  !*** ./src/objects/HealthBar.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var HealthBar = /** @class */ (function () {
    function HealthBar(params) {
        // Equivalent to this.bar = params.scene.add.graphics()
        this.bar = new Phaser.GameObjects.Graphics(params.scene);
        this.x = params.x;
        this.y = params.y;
        this.width = 100;
        this.height = 12;
        this.healthValue = 100;
        this.percentage = 100 / 100;
        this.draw();
        params.scene.add.existing(this.bar);
    }
    HealthBar.prototype.decrease = function (pAmount) {
        this.healthValue -= pAmount;
        if (this.healthValue < 0) {
            this.healthValue = 0;
        }
        this.draw();
        return (this.healthValue === 0);
    };
    HealthBar.prototype.draw = function () {
        this.bar.clear();
        // Background
        this.bar.fillStyle(helpers_1.COLORS.white.hex);
        this.bar.fillRect(this.x, this.y, this.width, this.height);
        if (this.healthValue > 30) {
            this.bar.fillStyle(helpers_1.COLORS.customBlue.hex);
        }
        else {
            this.bar.fillStyle(helpers_1.COLORS.customRed.hex);
        }
        var healthWidth = Math.floor(this.percentage * this.healthValue);
        // The actual health jauge you see decreasing
        this.bar.fillRect(this.x, this.y, healthWidth, this.height);
    };
    return HealthBar;
}());
exports.HealthBar = HealthBar;


/***/ }),

/***/ "./src/objects/Hud.ts":
/*!****************************!*\
  !*** ./src/objects/Hud.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Hud = /** @class */ (function () {
    function Hud(params) {
        this.textStyle = "\n\t\t\tfont-family: Grobold, Arial; \n\t\t\tmargin: 0; \n\t\t\tfont-size: 18px; \n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px\n\t\t";
        if (params.user.screenSide === 'left') {
            this.avatar = params.scene.add.image(0, 35, params.user.characterInstance.thumbnailKey).setOrigin(0, 0);
            this.text = params.scene.add.dom(0, 0, 'h5', this.textStyle, params.user.username + " | Ratio " + params.user.ratio + "%").setOrigin(0, 0);
        }
        else if (params.user.screenSide === 'right') {
            this.avatar = params.scene.add.image(helpers_1.getGameWidth(params.scene), 35, params.user.characterInstance.thumbnailKey).setOrigin(1, 0);
            this.text = params.scene.add.dom(helpers_1.getGameWidth(params.scene), 0, 'h5', this.textStyle, params.user.username + " | Ratio " + params.user.ratio + "%").setOrigin(1, 0);
        }
    }
    return Hud;
}());
exports.Hud = Hud;


/***/ }),

/***/ "./src/objects/Level.ts":
/*!******************************!*\
  !*** ./src/objects/Level.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tilemap_1 = __webpack_require__(/*! ./Tilemap */ "./src/objects/Tilemap.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
/**
 * A Level consists of : a background + a music theme + a tilemap + a name +
 * a thumbnail.
 * It inits the different keys needed and creates/draw the background,
 * the tilemap (by instanciate it) and play the music theme.
 */
var Level = /** @class */ (function () {
    function Level(params) {
        this.id = params.id;
        this._name = params.name;
        this.backgroundKey = "level" + this.id + "Background";
        this.musicKey = "level" + this.id + "Theme";
        this._thumbnailKey = "level" + this.id + "Thumbnail";
    }
    Object.defineProperty(Level.prototype, "tilemap", {
        get: function () {
            return this._tilemap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "thumbnailKey", {
        get: function () {
            return this._thumbnailKey;
        },
        enumerable: true,
        configurable: true
    });
    Level.prototype.create = function (scene) {
        this.scene = scene;
        this.scene.add.image(helpers_1.getGameWidth(this.scene) / 2, helpers_1.getGameHeight(this.scene) / 2, this.backgroundKey);
        this._tilemap = new Tilemap_1.Tilemap({
            scene: this.scene,
            id: this.id
        });
        this.scene.sound.add(this.musicKey).play();
    };
    return Level;
}());
exports.Level = Level;


/***/ }),

/***/ "./src/objects/Player.ts":
/*!*******************************!*\
  !*** ./src/objects/Player.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/objects/Projectile.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.STATES = {
            ALIVE: 'ALIVE',
            HURT: 'HURT',
            DEAD: 'DEAD'
        };
        _this.scene.add.existing(_this);
        _this.initPhysics();
        _this.applyPhysics();
        _this.initSounds();
        _this.initVitals();
        _this.initHealthBar(params.healthBar);
        _this.initShooting();
        _this.initControls(params.controlKeys);
        // Restrain the boundingBox
        _this.setSize(20, 60);
        _this.setState(_this.STATES.ALIVE);
        return _this;
    }
    Object.defineProperty(Player.prototype, "projectiles", {
        get: function () {
            return this._projectiles;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.isDead = function () {
        return this.health <= 0;
    };
    Player.prototype.hurt = function () {
        if (this.bulletProof === false) {
            if (this.health > 0) {
                this.health -= 20;
                this.healthBar.decrease(20);
                this.setState(this.STATES.HURT);
            }
        }
    };
    Player.prototype.makeBulletProof = function () {
        if (this.bulletProof === false)
            this.bulletProof = true;
    };
    Player.prototype.initSounds = function () {
        this.jumpSound = this.scene.sound.add('jumpSound');
        this.shootSound = this.scene.sound.add('shootSound');
    };
    Player.prototype.initVitals = function () {
        this.health = 100;
        this.bulletProof = false;
    };
    Player.prototype.initPhysics = function () {
        this.gravityY = 1000;
        this.jumpVelocity = -600;
        this.vx = 150;
        this.bounce = 0.5;
    };
    Player.prototype.applyPhysics = function () {
        this.scene.physics.world.enable(this);
        this.setGravityY(this.gravityY);
        this.setBounce(this.bounce);
        this.setCollideWorldBounds(true);
    };
    Player.prototype.initControls = function (pKeys) {
        this.jumpKey = this.scene.input.keyboard.addKey(pKeys['jump']);
        this.rightKey = this.scene.input.keyboard.addKey(pKeys['right']);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys['left']);
        this.shootKey = this.scene.input.keyboard.addKey(pKeys['shoot']);
    };
    Player.prototype.initHealthBar = function (pHealthBar) {
        this.healthBar = pHealthBar;
    };
    Player.prototype.initShooting = function () {
        this.lastShoot = 0;
        this._projectiles = this.scene.add.group({
            runChildUpdate: true
        });
    };
    Player.prototype.shoot = function () {
        if (this.scene.time.now > this.lastShoot) {
            this._projectiles.add(new Projectile_1.Projectile({
                scene: this.scene,
                // Changing bullet starting point if sprite is flipped on X axis.
                x: (!this.flipX) ? this.x + 20 : this.x - 20,
                y: this.y + 11,
                // Bullet direction (left/right) based on last pressed key
                // (i.e direction of the player). Default: goes right.
                direction: (this.lastPressedKey === this.leftKey) ? -1 : 1,
                textureKey: 'projectile'
            }));
            this.lastShoot = this.scene.time.now + 500;
            // Playing sound here ensures us it is played only once every shoot.
            this.shootSound.play();
        }
    };
    /**
     * Flipping the sprite on its X axis, depending on which direction you go.
     */
    Player.prototype.handleSpriteFlipping = function () {
        if (this.lastPressedKey === this.leftKey) {
            // Changed sprite orientation: facing left.
            this.flipX = true;
        }
        else if (this.lastPressedKey === this.rightKey) {
            // Original sprite orientation: facing right.
            this.flipX = false;
        }
        else {
            // Original sprite orientation: facing right.
            this.flipX = false;
        }
    };
    Player.prototype.handleJumping = function () {
        if (this.jumpKey.isDown) {
            if (this.body.blocked.down || this.body.touching.down) {
                this.setVelocityY(this.jumpVelocity);
                this.jumpSound.play();
            }
        }
    };
    /**
     * Handle idling (doing nothing) AND idling-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots.
     */
    Player.prototype.handleIdling = function () {
        this.setVelocityX(0);
        this.anims.play(this.texture.key + "IDLE", true);
        // Idling-Shooting.
        if (this.shootKey.isDown) {
            this.anims.play(this.texture.key + "IDLE_SHOOT", true);
            this.shoot();
        }
    };
    /**
     * Handle walking AND walking-shooting.
     * This includes animation playing, checking key press, setting velocity,
     * create shoots and remembering last pressed key.
     */
    Player.prototype.handleWalking = function () {
        this.anims.play(this.texture.key + "WALK", true);
        // Walking : going right
        if (this.rightKey.isDown) {
            this.setVelocityX(this.vx);
            this.lastPressedKey = this.rightKey;
        }
        // Walking : going left
        if (this.leftKey.isDown) {
            this.setVelocityX(-this.vx);
            this.lastPressedKey = this.leftKey;
        }
        // Walking-Shooting
        if (this.shootKey.isDown) {
            this.anims.play(this.texture.key + "WALK_SHOOT", true);
            this.shoot();
        }
    };
    Player.prototype.update = function () {
        var _this = this;
        if (this.isDead())
            this.state = this.STATES.DEAD;
        if (this.state === this.STATES.ALIVE) {
            // This is detached from the other block because you can do anything
            // while jumping: walk/walk-shoot, idle/idle-shoot. So it isn't 
            // dependant of whether you're pressing left or right or whatever.
            this.handleJumping();
            if (this.rightKey.isDown || this.leftKey.isDown) {
                this.handleWalking();
            }
            else {
                this.handleIdling();
            }
            this.handleSpriteFlipping();
        }
        else if (this.state === this.STATES.HURT) {
            this.anims.play(this.texture.key + "HIT", true);
            this.setVelocityX(0);
            // This leads to hurt anim bug 
            this.scene.time.addEvent({
                delay: 1000,
                loop: false,
                callback: function () {
                    _this.setState(_this.STATES.ALIVE);
                }
            });
        }
        else if (this.state === this.STATES.DEAD) {
            // We don't reset state to ALIVE cause it's end of the game
            this.anims.play(this.texture.key + "DEAD", true);
            this.setVelocityX(0);
        }
        else {
            throw new Error("Unknown Player State");
        }
    };
    return Player;
}(Phaser.Physics.Arcade.Sprite));
exports.Player = Player;


/***/ }),

/***/ "./src/objects/Projectile.ts":
/*!***********************************!*\
  !*** ./src/objects/Projectile.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        _this.vx = 700;
        _this.direction = params.direction;
        _this.initAnimations();
        _this.setVelocityX(_this.direction * _this.vx);
        return _this;
    }
    Projectile.prototype.isOut = function () {
        if (this.x > helpers_1.getGameWidth(this.scene) || this.y > helpers_1.getGameHeight(this.scene) || this.x < 0 || this.y < 0) {
            return true;
        }
        return false;
    };
    Projectile.prototype.initAnimations = function () {
        this.scene.anims.create({
            key: 'collisionEffect1',
            frames: this.scene.anims.generateFrameNumbers('collisionEffect1', {
                start: 0,
                end: 1
            }),
            repeat: 1
        });
    };
    Projectile.prototype.update = function () {
        if (this.isOut()) {
            this.destroy();
            console.log('Projectile destroyed cause out of world bounds');
        }
    };
    return Projectile;
}(Phaser.Physics.Arcade.Sprite));
exports.Projectile = Projectile;


/***/ }),

/***/ "./src/objects/Tilemap.ts":
/*!********************************!*\
  !*** ./src/objects/Tilemap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.map = params.scene.make.tilemap({
            key: "level" + params.id
        });
        this.tileset = this.map.addTilesetImage("level" + params.id + "-tilesheet", "level" + params.id + "Tilesheet");
        this._mainLayer = this.map.createStaticLayer('mainLayer', this.tileset, 0, 0);
        this._mainLayer.setCollisionByProperty({
            collides: true
        });
        this.subLayer = this.map.createStaticLayer('subLayer', this.tileset, 0, 0);
    }
    Object.defineProperty(Tilemap.prototype, "mainLayer", {
        /**
         * Getter for the layer that collides: 'collides' set to true in Tiled.
         */
        get: function () {
            return this._mainLayer;
        },
        enumerable: true,
        configurable: true
    });
    return Tilemap;
}());
exports.Tilemap = Tilemap;


/***/ }),

/***/ "./src/objects/User.ts":
/*!*****************************!*\
  !*** ./src/objects/User.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(params) {
        this._id = params.id;
        this._username = params.username;
        this._ratio = params.ratio;
        this._screenSide = params.screenSide;
    }
    Object.defineProperty(User.prototype, "id", {
        /**
         * User's id from DB.
         */
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        /**
         * User's username from DB.
         */
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ratio", {
        /**
         * User's ratio from DB.
         */
        get: function () {
            return this._ratio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "screenSide", {
        get: function () {
            return this._screenSide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "characterInstance", {
        /**
         * Character the user has chosen in the Menu.
         */
        get: function () {
            return this._characterInstance;
        },
        set: function (v) {
            this._characterInstance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "playerInstance", {
        /**
         * Player created in Game Scene based on User's character choice.
         */
        get: function () {
            return this._playerInstance;
        },
        set: function (v) {
            this._playerInstance = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "levelInstance", {
        /**
         * Level the user has chosen in the Menu, makes more sense when playing solo.
         */
        get: function () {
            return this._levelInstance;
        },
        set: function (v) {
            this._levelInstance = v;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/scenes/BootScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/BootScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Level_1 = __webpack_require__(/*! ../objects/Level */ "./src/objects/Level.ts");
var User_1 = __webpack_require__(/*! ../objects/User */ "./src/objects/User.ts");
var Character_1 = __webpack_require__(/*! ../objects/Character */ "./src/objects/Character.ts");
var Gui_1 = __webpack_require__(/*! ../objects/Gui */ "./src/objects/Gui.ts");
var storage_1 = __webpack_require__(/*! ../storage */ "./src/storage.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot'
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.init = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.levels = [
            new Level_1.Level({
                id: 1,
                name: "Cimetiere"
            }),
            new Level_1.Level({
                id: 2,
                name: "Prairie"
            })
        ];
        this.users = [
            new User_1.User({
                id: ((_b = (_a = storage_1.parsedStorage()) === null || _a === void 0 ? void 0 : _a.mainUser) === null || _b === void 0 ? void 0 : _b.id) || 0,
                username: ((_d = (_c = storage_1.parsedStorage()) === null || _c === void 0 ? void 0 : _c.mainUser) === null || _d === void 0 ? void 0 : _d.username) || 'Foo1',
                ratio: ((_f = (_e = storage_1.parsedStorage()) === null || _e === void 0 ? void 0 : _e.mainUser) === null || _f === void 0 ? void 0 : _f.ratio) || 0,
                screenSide: 'left'
            }),
            new User_1.User({
                id: ((_h = (_g = storage_1.parsedStorage()) === null || _g === void 0 ? void 0 : _g.secondaryUser) === null || _h === void 0 ? void 0 : _h.id) || 0,
                username: ((_k = (_j = storage_1.parsedStorage()) === null || _j === void 0 ? void 0 : _j.secondaryUser) === null || _k === void 0 ? void 0 : _k.username) || 'Boo2',
                ratio: ((_m = (_l = storage_1.parsedStorage()) === null || _l === void 0 ? void 0 : _l.secondaryUser) === null || _m === void 0 ? void 0 : _m.ratio) || 0,
                screenSide: 'right'
            })
        ];
        this.characters = [
            new Character_1.Character({
                id: 1,
                details: { nickname: "Stevie" },
                stats: {}
            }),
            new Character_1.Character({
                id: 2,
                details: { nickname: "Caroline" },
                stats: {}
            }),
            new Character_1.Character({
                id: 3,
                details: { nickname: "Kristof" },
                stats: {}
            }),
            new Character_1.Character({
                id: 4,
                details: { nickname: "Kristy" },
                stats: {}
            }),
            new Character_1.Character({
                id: 5,
                details: { nickname: "Oron" },
                stats: {}
            }),
            new Character_1.Character({
                id: 6,
                details: { nickname: "Alexa" },
                stats: {}
            })
        ];
        // Using the scene Data Manager to store data on a scene level.
        this.data.set('users', this.users);
        this.data.set('characters', this.characters);
        this.data.set('levels', this.levels);
    };
    BootScene.prototype.preload = function () {
        this.load.pack("preload", "assets/pack.json", "preload");
        // Preload all characters atlases : a json file that acts as
        // as a "map"/"link" to a png spritesheet.
        // Used for drawing PLayer texture and set animations.
        for (var n = 1; n <= 6; n++) {
            this.load.atlas("character" + n, "assets/images/characters/character" + n + "/character" + n + "-spritesheet.png", "assets/images/characters/character" + n + "/character" + n + "-atlas.json");
        }
    };
    BootScene.prototype.create = function () {
        this.musicTheme = this.sound.add('menuTheme');
        this.musicTheme.play();
        this.background = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, 'mainLogo');
        Gui_1.Gui.customText({
            scene: this,
            x: this.logo.x,
            y: this.logo.y + 84,
            text: "Welcome to the fight !"
        });
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "Menu",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: 'Menu',
            // Passing this scene data to the menu scene.
            sceneData: this.data.getAll()
        });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Bomb_1 = __webpack_require__(/*! ../objects/Bomb */ "./src/objects/Bomb.ts");
var Hud_1 = __webpack_require__(/*! ../objects/Hud */ "./src/objects/Hud.ts");
var Player_1 = __webpack_require__(/*! ../objects/Player */ "./src/objects/Player.ts");
var HealthBar_1 = __webpack_require__(/*! ../objects/HealthBar */ "./src/objects/HealthBar.ts");
var Animations_1 = __webpack_require__(/*! ../Animations */ "./src/Animations.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game'
};
/**
 * The Game Scene is where all the actions takes place.
 * Actors such as Player, Bombs and Bomb are instanciated.
 * Static elements such as HUDs and HealthBars (via Player) are instanciated.
 * Level is created (not instanciated), which basically means that Tilemap is
 * drawn. Colliders between actors are handled. Player animations are created.
 * It sets a Scene Winner when one of the users PLAYER INSTANCES is dead and
 * then start the new scene (Gameover Scene).
 * It takes the data object from the Menu Scene (composed of an array of users),
 * available here in the init() et create() callbacks.
 */
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.setColliders = function () {
        var _this = this;
        this.physics.add.collider(this.bombs, this.tilemap.mainLayer);
        this.physics.add.collider(this.bombs, this.player1, function () {
            _this.player1.hurt();
            _this.bombs.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.bombs, this.player2, function () {
            _this.player2.hurt();
            _this.bombs.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.player1, this.player2);
        this.physics.add.collider([this.player1, this.player2], this.tilemap.mainLayer);
        this.physics.add.collider(this.player1, this.player2.projectiles, function () {
            _this.player1.hurt();
            _this.player2.projectiles.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.player2, this.player1.projectiles, function () {
            _this.player2.hurt();
            _this.player1.projectiles.getFirstAlive().destroy();
        });
    };
    GameScene.prototype.init = function (menuSceneData) {
        this.data.set('users', menuSceneData === null || menuSceneData === void 0 ? void 0 : menuSceneData.users);
        Animations_1.Animations.createCharactersAnims({
            scene: this,
            users: this.data.get('users')
        });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.data.values.users[0].levelInstance.create(this);
        this.tilemap = this.data.values.users[0].levelInstance.tilemap;
        this.bombs = this.add.group({
            runChildUpdate: true
        });
        this.bombCreationEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: function () {
                _this.bombs.add(new Bomb_1.Bomb({
                    scene: _this,
                    x: Phaser.Math.Between(50, helpers_1.getGameWidth(_this) - 50),
                    y: 0,
                    textureKey: 'bomb'
                }));
            },
            callbackScope: this
        });
        this.player1 = new Player_1.Player({
            scene: this,
            x: 300,
            y: 300,
            textureKey: this.data.values.users[0].characterInstance.textureKey,
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET1,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
                x: 60,
                y: 40
            })
        });
        this.player2 = new Player_1.Player({
            scene: this,
            x: 900,
            y: 300,
            textureKey: this.data.values.users[1].characterInstance.textureKey,
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET2,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
                x: helpers_1.getGameWidth(this) - 162,
                y: 40
            })
        });
        this.hud1 = new Hud_1.Hud({
            scene: this,
            user: this.data.values.users[0]
        });
        this.hud2 = new Hud_1.Hud({
            scene: this,
            user: this.data.values.users[1]
        });
        this.setColliders();
        // This is where we have user<-->player concordance
        this.data.values.users[0].playerInstance = this.player1;
        this.data.values.users[1].playerInstance = this.player2;
        this.data.set('users', this.data.values.users);
    };
    GameScene.prototype.update = function () {
        var _this = this;
        this.player1.update();
        this.player2.update();
        // Winner handling.
        // Enter winner handling mode if one of the player is dead.
        if (this.player1.isDead() || this.player2.isDead()) {
            // Make players invicible while waiting for the next scene to start.
            // This way we don't have to pause physics but the winner is not
            // killed by the bombs that are still falling.
            this.player1.makeBulletProof();
            this.player2.makeBulletProof();
            // Deciding which one is the winner (the one not dead).
            if (this.player1.isDead() && !this.player2.isDead()) {
                // Winners are users not players.
                this.winner = this.data.values.users[1];
            }
            else if (!this.player1.isDead() && this.player2.isDead()) {
                this.winner = this.data.values.users[0];
            }
            else if (this.player2.isDead() && this.player2.isDead()) {
                // Nulling the winner if there's no winner at all
                // Typically this shouldn't ever happen but who knows.
                // Check in next scene if winner is truthy, printing alt text
                // if not (like if null).
                this.winner = null;
            }
            this.data.set('winner', this.winner);
            // Three seconds delay before launching the next scene
            this.newSceneTimedEvent = this.time.addEvent({
                delay: 3000,
                callback: function () {
                    _this.sound.stopAll();
                    _this.scene.start('Gameover', _this.data.getAll());
                }
            });
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/GameoverScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/GameoverScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Gui_1 = __webpack_require__(/*! ../objects/Gui */ "./src/objects/Gui.ts");
var storage_1 = __webpack_require__(/*! ../storage */ "./src/storage.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Gameover'
};
var GameoverScene = /** @class */ (function (_super) {
    __extends(GameoverScene, _super);
    function GameoverScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameoverScene.prototype.handlingStorage = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (storage_1.parsedStorage()) {
            var parsedUsers = storage_1.parsedStorage();
            if (this.data.values.winner.id === parsedUsers.mainUser.id) {
                (_b = (_a = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.mainUser) === null || _a === void 0 ? void 0 : _a.matchs) === null || _b === void 0 ? void 0 : _b.push({ win: true });
                (_d = (_c = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.secondaryUser) === null || _c === void 0 ? void 0 : _c.matchs) === null || _d === void 0 ? void 0 : _d.push({ win: false });
            }
            else if (this.data.values.winner.id === parsedUsers.secondaryUser.id) {
                (_f = (_e = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.secondaryUser) === null || _e === void 0 ? void 0 : _e.matchs) === null || _f === void 0 ? void 0 : _f.push({ win: true });
                (_h = (_g = parsedUsers === null || parsedUsers === void 0 ? void 0 : parsedUsers.mainUser) === null || _g === void 0 ? void 0 : _g.matchs) === null || _h === void 0 ? void 0 : _h.push({ win: false });
            }
            // Serialize and set in storage the newly updated users objects
            // with their corresponding matchs pushed entries.
            localStorage.setItem('hoafight', JSON.stringify(parsedUsers));
        }
    };
    GameoverScene.prototype.init = function (gameSceneData) {
        if (gameSceneData.winner) {
            this.data.set('winner', gameSceneData.winner);
            this.mainMessage = this.data.values.winner.username + " remporte la partie !";
            this.handlingStorage();
        }
        else {
            this.mainMessage = "Oups on dirait qu'il n'y ai pas de gagnant !";
        }
    };
    GameoverScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
        Gui_1.Gui.title({ scene: this, text: "Fin De Partie" });
        Gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 200,
            text: this.mainMessage
        });
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "REJOUER",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: 'Menu'
        });
    };
    return GameoverScene;
}(Phaser.Scene));
exports.GameoverScene = GameoverScene;


/***/ }),

/***/ "./src/scenes/MenuScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Gui_1 = __webpack_require__(/*! ../objects/Gui */ "./src/objects/Gui.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Menu'
};
/**
 * This scene is where the two players choose the terrain/map they will play on,
 * and the characters they will play with.
 * It mainly uses methods from the Gui class.
 */
var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MenuScene.prototype.drawBackground = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, 'backgroundForGUIScenes');
    };
    MenuScene.prototype.initThumbnails = function (data) {
        // Init the terrain thumbnail on the 1st level.
        this.levelThumb = this.add.image(200, 300, data.values.levels[0].thumbnailKey);
        // Init the 2 characters thumbnails on the 1st character.
        this.characterThumbs = [
            this.add.image(650, 300, data.values.characters[0].thumbnailKey),
            this.add.image(850, 300, data.values.characters[0].thumbnailKey)
        ];
    };
    MenuScene.prototype.printTitles = function () {
        Gui_1.Gui.title({ scene: this, text: "MENU" });
        Gui_1.Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "Terrain" });
        Gui_1.Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "Personnages" });
    };
    MenuScene.prototype.printTexts = function () {
        Gui_1.Gui.customText({ scene: this, x: 650, y: 210, text: "Joueur 1" });
        Gui_1.Gui.customText({ scene: this, x: 850, y: 210, text: "Joueur 2" });
    };
    // Initialized the choices on the 1st elements of the terrain and the
    // characters. This way if the players doesn't click on anything they still
    // have terrain and characters instances attached.
    MenuScene.prototype.initUsersChoices = function (data) {
        for (var _i = 0, _a = data.values.users; _i < _a.length; _i++) {
            var user = _a[_i];
            user.levelInstance = data.values.levels[0];
            user.characterInstance = data.values.characters[0];
        }
    };
    MenuScene.prototype.init = function (bootSceneData) {
        // Using ES2020 optionnal chaining (i.e the ?) to check if the data 
        // object coming from the boot scene has the right users, characters and 
        // levels fields.
        // Setting the data from the boot scene to this scene's data.
        this.data.set('users', bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.users);
        this.data.set('characters', bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.characters);
        this.data.set('levels', bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.levels);
        this.initUsersChoices(this.data);
    };
    MenuScene.prototype.create = function () {
        var _this = this;
        this.drawBackground();
        this.initThumbnails(this.data);
        this.printTitles();
        this.printTexts();
        // Slide button n°1. This is where User 1 or 2 choose the level. 
        // Modifies the level thumbnail texture (with texture keys) on click.
        Gui_1.Gui.slideBtn({
            scene: this,
            x: 200,
            y: 450,
            text: "Suivant",
            img: this.levelThumb,
            textureKeys: this.data.values.levels.map(function (level) { return level.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.values.levels; _i < _a.length; _i++) {
                    var level = _a[_i];
                    if (level.thumbnailKey === _this.levelThumb.texture.key) {
                        _this.data.values.users[0].levelInstance = level;
                        _this.data.values.users[1].levelInstance = level;
                    }
                }
            }
        });
        // Slide button n°2. This is where User 1 choose its character. 
        // Modifies the texture of the character thumbnail n°1 on click.
        Gui_1.Gui.slideBtn({
            scene: this,
            x: 650,
            y: 370,
            text: "Suivant",
            img: this.characterThumbs[0],
            textureKeys: this.data.values.characters.map(function (c) { return c.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.values.characters; _i < _a.length; _i++) {
                    var ch = _a[_i];
                    if (ch.thumbnailKey === _this.characterThumbs[0].texture.key) {
                        _this.data.values.users[0].characterInstance = ch;
                    }
                }
            }
        });
        // Slide button n°3. This is where User 2 choose its character. 
        // Modifies the texture of the character thumbnail n°2 on click.
        Gui_1.Gui.slideBtn({
            scene: this,
            x: 850,
            y: 370,
            text: "Suivant",
            img: this.characterThumbs[1],
            textureKeys: this.data.values.characters.map(function (c) { return c.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.values.characters; _i < _a.length; _i++) {
                    var ch = _a[_i];
                    if (ch.thumbnailKey === _this.characterThumbs[1].texture.key) {
                        _this.data.values.users[1].characterInstance = ch;
                    }
                }
            }
        });
        // Set the MODIFIED users data from the boot scene to this actual scene.
        // Modified, because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set('users', this.data.values.users);
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: 'Game',
            // Sending this scene's data (= users) to the game scene.
            sceneData: this.data.getAll()
        });
    };
    return MenuScene;
}(Phaser.Scene));
exports.MenuScene = MenuScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BootScene_1 = __webpack_require__(/*! ./BootScene */ "./src/scenes/BootScene.ts");
var MenuScene_1 = __webpack_require__(/*! ./MenuScene */ "./src/scenes/MenuScene.ts");
var GameScene_1 = __webpack_require__(/*! ./GameScene */ "./src/scenes/GameScene.ts");
var GameoverScene_1 = __webpack_require__(/*! ./GameoverScene */ "./src/scenes/GameoverScene.ts");
exports.default = [
    BootScene_1.BootScene,
    MenuScene_1.MenuScene,
    GameScene_1.GameScene,
    GameoverScene_1.GameoverScene
];


/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Parse the hoafight serialized hoafight object from the local storage.
 * If there's no hoafight object present it returns null and fake users profiles
 * will be created instead.
 */
function parsedStorage() {
    if (localStorage.getItem('hoafight')) {
        var hf = localStorage.getItem('hoafight');
        var parsed = JSON.parse(hf);
        return parsed;
    }
    else {
        return null;
    }
}
exports.parsedStorage = parsedStorage;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvQm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9DaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9Vc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvQm9vdFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvR2FtZVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvR2FtZW92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL01lbnVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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Z0oxQztBQWhKWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7O0FDZHRCLHNGQUF3QztBQUN4QyxzRkFBd0M7QUFDeEMsc0ZBQXdDO0FBQ3hDLGtHQUFnRDtBQUVoRCxrQkFBZTtJQUNkLHFCQUFTO0lBQ1QscUJBQVM7SUFDVCxxQkFBUztJQUNULDZCQUFhO0NBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVkY7Ozs7R0FJRztBQUNILFNBQWdCLGFBQWE7SUFDNUIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3JDLElBQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixPQUFPLE1BQU0sQ0FBQztLQUNkO1NBQU07UUFDTixPQUFPLElBQUksQ0FBQztLQUNaO0FBQ0YsQ0FBQztBQVJELHNDQVFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBjbGFzcyBBbmltYXRpb25zIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyBjcmVhdGVDaGFyYWN0ZXJzQW5pbXMocGFyYW1zKSB7XHJcblxyXG5cdFx0Zm9yIChjb25zdCB1c2VyIG9mIHBhcmFtcy51c2Vycykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRrID0gdXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5O1xyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31XQUxLYCxcclxuXHRcdFx0XHRmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuXHRcdFx0XHRcdHByZWZpeDogJ3dhbGstc2lkZS1hcm1lZCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogNCxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmcmFtZVJhdGU6IDEwLFxyXG5cdFx0XHRcdHJlcGVhdDogLTFcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfVdBTEtfU0hPT1RgLFxyXG5cdFx0XHRcdGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnd2Fsay1zaWRlLXNob290JyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAxLFxyXG5cdFx0XHRcdFx0ZW5kOiA0LFxyXG5cdFx0XHRcdFx0emVyb1BhZDogMlxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdHJlcGVhdDogLTFcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfUlETEVgLFxyXG5cdFx0XHRcdGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnaWRsZS1mcm9udC1hcm1lZCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogNCxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRmcmFtZVJhdGU6IDEwLFxyXG5cdFx0XHRcdHJlcGVhdDogLTFcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfUlETEVfU0hPT1RgLFxyXG5cdFx0XHRcdGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnaWRsZS1mcm9udC1zaG9vdCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogMSxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDJcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IC0xXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcblx0XHRcdFx0a2V5OiBgJHt0a31ISVRgLFxyXG5cdFx0XHRcdGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnaGl0JyxcclxuXHRcdFx0XHRcdHN0YXJ0OiAxLFxyXG5cdFx0XHRcdFx0ZW5kOiAxLFxyXG5cdFx0XHRcdFx0emVyb1BhZDogMixcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRyZXBlYXQ6IDFcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuXHRcdFx0XHRrZXk6IGAke3RrfURFQURgLFxyXG5cdFx0XHRcdGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG5cdFx0XHRcdFx0cHJlZml4OiAnZGVhZCcsXHJcblx0XHRcdFx0XHRzdGFydDogMSxcclxuXHRcdFx0XHRcdGVuZDogMSxcclxuXHRcdFx0XHRcdHplcm9QYWQ6IDIsXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0cmVwZWF0OiAxXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gKiBXaGljaCBpcyBnZW5lcmFsbHkgZXF1YWwgdG8gdGhlIHdpZHRoIG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuXHRyZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuXHRyZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuXHRsZXQgcmF3RmlsZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcblx0cmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkltcG9zc2libGUgdG8gbG9hZCBmaWxlLlwiKTtcclxuXHR9XHJcblxyXG5cdHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcblx0XHRcdGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gcmF3RmlsZS5yZXNwb25zZVRleHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJhd0ZpbGUub3BlbihcIkdFVFwiLCBwRmlsZVBhdGgsIGZhbHNlKTtcclxuXHRyYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuXHRsZXQgcmF3R3JpZCA9IHRoaXMubG9hZEZpbGUocEZpbGVQYXRoKTtcclxuXHRyZXR1cm4gcmF3R3JpZC5zcGxpdCgnXFxuJykubWFwKGl0ZW0gPT4gaXRlbS5zcGxpdCgnJykpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG5cdGN1c3RvbUJsdWU6IFx0eyBzdHJpbmc6ICcjNDM0NmY5JywgaGV4OiAweDQzNDZmOSB9LFxyXG5cdGN1c3RvbUdyZWVuOiBcdHsgc3RyaW5nOiAnIzc2ZWE2NCcsIGhleDogMHg3NmVhNjQgfSxcclxuXHR2aWJyYW50R3JlZW46IFx0eyBzdHJpbmc6ICcjMjVmOTQ1JywgaGV4OiAweDI1Zjk0NSB9LFxyXG5cdGN1c3RvbVJlZDogXHRcdHsgc3RyaW5nOiAnI2VhMmQyMycsIGhleDogMHhlYTJkMjMgfSxcclxuXHR3aGl0ZTogXHRcdFx0eyBzdHJpbmc6ICcjZmZmZmZmJywgaGV4OiAweGZmZmZmZiB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuXHRQTEFZRVI6IHtcclxuXHRcdFNFVDE6IHtcclxuXHRcdFx0cmlnaHQ6IFx0UGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG5cdFx0XHRsZWZ0OiBcdFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZULFxyXG5cdFx0XHRqdW1wOiBcdFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuXHRcdFx0c2hvb3Q6IFx0UGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZUXHJcblx0XHR9LFxyXG5cclxuXHRcdFNFVDI6IHtcclxuXHRcdFx0cmlnaHQ6IFx0UGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQsXHJcblx0XHRcdGxlZnQ6IFx0UGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcblx0XHRcdGp1bXA6IFx0UGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXHJcblx0XHRcdHNob290OiBcdFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJztcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcblxyXG5cdHRpdGxlOiAnSG9hIEZpZ2h0JyxcclxuXHJcblx0dHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG5cdHNjYWxlOiB7XHJcblx0XHR3aWR0aDogMTAyNCxcclxuXHRcdGhlaWdodDogNjQwXHJcblx0fSxcclxuXHJcblx0aW5wdXQ6IHtcclxuXHRcdGdhbWVwYWQ6IHRydWUsXHJcblx0XHRrZXlib2FyZDogdHJ1ZVxyXG5cdH0sXHJcblx0XHJcblx0cGh5c2ljczoge1xyXG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXHJcblx0XHRhcmNhZGU6IHtcclxuXHRcdFx0Z3Jhdml0eToge1xyXG5cdFx0XHRcdHk6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVidWc6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cclxuXHRkb206IHtcclxuXHRcdGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdHBhcmVudDogJ2dhbWUnLFxyXG5cdFxyXG5cdHNjZW5lOiBTY2VuZXNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvbWIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2Uge1xyXG5cclxuXHRwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR0aGlzLnggPiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgfHwgXHJcblx0XHRcdHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgXHJcblx0XHRcdHRoaXMueCA8IDAgfHwgXHJcblx0XHRcdHRoaXMueSA8IDBcclxuXHRcdCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblx0XHRcclxuXHRcdHRoaXMuc2V0Qm91bmNlKDEpO1xyXG5cdFx0dGhpcy5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuXHRcdHRoaXMuc2V0R3Jhdml0eVkoMTAwMCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5pc091dCgpKSB7XHJcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkJvbWIgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50IGEgR2FtZSBDaGFyYWN0ZXIsIG5vdCB0byBiZSBjb25mdXNlZCB3aXRoIHRoZSBcIlBsYXllclwiLlxyXG4gKiBBIFBsYXllciBpbnRlZ3JhdGVzIGEgQ2hhcmFjdGVyLiBBIENoYXJhY3RlciBpcyBqdXN0IGFib3V0IGhvbGRpbmcgZGF0YSA6XHJcbiAqIHRleHR1cmUga2V5cywgbWV0YWRhdGEsIHZvaWNlcyBldGMuIE5vdGhpbmcgdG8gYmUgY29udHJvbGxlZCB3aXRoIHlvdXJcclxuICoga2V5Ym9hcmQgaGVyZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xyXG5cclxuXHQvLyBWZXJ5IGltcG9ydGFudCBmaWVsZCwgdGlnaHRseSBsaW5rZWQgdG8gdGhlIGtleXMgeW91IHByb3ZpZGUgaW4gcGFjay5qc29uXHJcblx0cHJpdmF0ZSByZWFkb25seSBpZDogbnVtYmVyO1xyXG5cdHByaXZhdGUgZGV0YWlsczogb2JqZWN0O1xyXG5cdHByaXZhdGUgc3RhdHM6IG9iamVjdDtcclxuXHQvLyBGaWVsZHMgYnVpbHQgdXBvbiB0aGUgSWQgcHJvdmlkZWQgYXQgaW5zdGFuY2lhdGlvbi5cclxuXHRwcml2YXRlIF90ZXh0dXJlS2V5OiBzdHJpbmc7XHJcblx0Ly8gQ2hhcmFjdGVyJ3MgYXZhdGFyXHJcblx0cHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBfc291bmRLZXk6IHN0cmluZztcclxuXHJcblx0cHVibGljIGdldCB0ZXh0dXJlS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGV4dHVyZUtleTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzb3VuZEtleSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3NvdW5kS2V5O1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRpZDogbnVtYmVyO1xyXG5cdFx0ZGV0YWlscz86IG9iamVjdDtcclxuXHRcdHN0YXRzPzogb2JqZWN0O1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG5cdFx0dGhpcy5kZXRhaWxzID0gcGFyYW1zLmRldGFpbHM7XHJcblx0XHR0aGlzLnN0YXRzID0gcGFyYW1zLnN0YXRzO1xyXG5cdFx0dGhpcy5fdGV4dHVyZUtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9YDtcclxuXHRcdHRoaXMuX3RodW1ibmFpbEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9QXZhdGFyYDtcclxuXHRcdHRoaXMuX3NvdW5kS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1Tb3VuZGA7XHJcblx0fVxyXG5cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBmb3IgR1VJIGVsZW1lbnRzIHN1Y2ggYXMgYWN0aW9ucyBidXR0b25zIGFuZCB0aXRsZXMuXHJcbiAqIEl0IHJlbGllcyBvbiBQaGFzZXIgZ2FtZSBvYmplY3RzIERPTSBlbGVtZW50cywgc28gdGhlc2UgR1VJIGVsZW1lbnRzIGFyZVxyXG4gKiBodG1sIGFuZCBjc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuXHJcblx0cHVibGljIHN0YXRpYyByZWFkb25seSBtYWluQnRuU3R5bGUgPSBgXHJcblx0XHR3aWR0aDogMTUwcHg7IFxyXG5cdFx0aGVpZ2h0OiA0OXB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLEFyaWFsOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMjVweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDBcclxuXHRgO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gYFxyXG5cdFx0d2lkdGg6IDEwMHB4OyBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG5cdFx0Y29sb3I6ICMwMDAwMDA7IFxyXG5cdFx0Zm9udC1zaXplOiAxN3B4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzAwMFxyXG5cdGA7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGl0bGVTdHlsZSA9IFxyXG5cdFx0YGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdGZvbnQtc2l6ZTogNDBweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgXHJcblx0O1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY3Rpb25UaXRsZVN0eWxlID0gYFxyXG5cdFx0Y29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0Zm9udC1zaXplOiAzMHB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG5cdGA7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmFzaWNUZXh0U3R5bGUgPSBgXHJcblx0XHRjb2xvcjogI2ZmZmZmZjsgXHJcblx0XHRmb250LXNpemU6IDIwcHg7IFxyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyOyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG5cdGA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHN0eWxpemVkIEJ1dHRvbiBET00gRWxlbWVudCB3aXRoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWRcclxuXHQgKiB0byBpdC4gVGhlIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrIHN0YXJ0cyBhIG5ldyBzY2VuZSB1c2luZyB0aGUgc2NlbmUga2V5XHJcblx0ICogcGFzc2VkIGluIGFyZ3VtZW50cyBhbmQgc3RvcHMgYWxsIHNvdW5kcyBpZiBzdG9wU291bmRzIHNldCB0byB0cnVlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgbWFpbkJ0bihwYXJhbXM6IHtcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0dGV4dDogc3RyaW5nOyBcclxuXHRcdHN0b3BTb3VuZHM6IGJvb2xlYW47IFxyXG5cdFx0c2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47IFxyXG5cdFx0bmV3U2NlbmVLZXk6IHN0cmluZztcclxuXHRcdHNjZW5lRGF0YT86IG9iamVjdDtcclxuXHR9KTogdm9pZCB7XHJcblxyXG5cdFx0cGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcblx0XHRcdGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKSAtIDEwMCxcclxuXHRcdFx0J2J1dHRvbicsXHJcblx0XHRcdEd1aS5tYWluQnRuU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblxyXG5cdFx0KS5hZGRMaXN0ZW5lcignY2xpY2snKS5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRwYXJhbXMuc2NlbmUuc291bmQuYWRkKCdjbGlja1NvdW5kJykucGxheSgpO1xyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5zdG9wU291bmRzKSB7XHJcblx0XHRcdFx0cGFyYW1zLnNjZW5lLnNvdW5kLnN0b3BBbGwoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KHBhcmFtcy5uZXdTY2VuZUtleSwgcGFyYW1zLnNjZW5lRGF0YSk7XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBCdXR0b24gdGhhdCBjaGFuZ2VzIGFuIGltYWdlIChpbWcpIHRleHR1cmUgd2l0aCBhbm90aGVyICh0ZXh0dXJlcyksXHJcblx0ICogb25lIGJ5IG9uZS4gTGlrZSBhIHNsaWRlc2hvdy5cclxuXHQgKiBAcGFyYW0gaW1nOiBhIHBoYXNlciBnYW1lIG9iamVjdCBpbWFnZSB0aGF0IGFjdCBhcyBhIGNvbnRhaW5lciBpbiBhIHdheS5cclxuXHQgKiBAcGFyYW0gdGV4dHVyZXM6IHRoZSB0ZXh0dXJlcyB0byBhcHBlbmQgdG8gaW1nLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgc2xpZGVCdG4ocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHRcdHg6IG51bWJlcjtcclxuXHRcdHk6IG51bWJlcjtcclxuXHRcdHRleHQ6IHN0cmluZztcclxuXHRcdGltZzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdFx0dGV4dHVyZUtleXM6IEFycmF5PHN0cmluZz47XHJcblx0XHRjYWxsYmFjaz86IEZ1bmN0aW9uO1xyXG5cdH0pOiB2b2lkIHtcclxuXHJcblx0XHRsZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcblx0XHRwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuXHJcblx0XHRcdHBhcmFtcy54LFxyXG5cdFx0XHRwYXJhbXMueSxcclxuXHRcdFx0J2J1dHRvbicsXHJcblx0XHRcdEd1aS5zZWNvbmRhcnlCdG5TdHlsZSxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHJcblx0XHQpLmFkZExpc3RlbmVyKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0cGFyYW1zLnNjZW5lLnNvdW5kLmFkZCgnY2xpY2tTb3VuZCcpLnBsYXkoKTtcclxuXHJcblx0XHRcdGlmIChjdXJyZW50SW5kZXggPCBwYXJhbXMudGV4dHVyZUtleXMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRJbmRleCsrO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHBhcmFtcy5pbWcuc2V0VGV4dHVyZShwYXJhbXMudGV4dHVyZUtleXNbY3VycmVudEluZGV4XSk7XHJcblxyXG5cdFx0XHRpZiAocGFyYW1zLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJhbXMuY2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgXHJcblx0XHRzY2VuZTogUGhhc2VyLlNjZW5lOyBcclxuXHRcdHRleHQ6IHN0cmluZyA7XHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKS8yLFxyXG5cdFx0XHQyNCxcclxuXHRcdFx0J2gzJyxcclxuXHRcdFx0R3VpLnRpdGxlU3R5bGUsXHJcblx0XHRcdHBhcmFtcy50ZXh0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBzZWN0aW9uVGl0bGUocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdoNCcsXHJcblx0XHRcdEd1aS5zZWN0aW9uVGl0bGVTdHlsZSxcclxuXHRcdFx0cGFyYW1zLnRleHRcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGN1c3RvbVRleHQocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHQ6IHN0cmluZzsgXHJcblx0fSk6IHZvaWQge1xyXG5cclxuXHRcdHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRwYXJhbXMueCxcclxuXHRcdFx0cGFyYW1zLnksXHJcblx0XHRcdCdwJyxcclxuXHRcdFx0R3VpLmJhc2ljVGV4dFN0eWxlLFxyXG5cdFx0XHRwYXJhbXMudGV4dFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIHtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGhlYWx0aFZhbHVlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHBlcmNlbnRhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgZGVjcmVhc2UocEFtb3VudDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSAtPSBwQW1vdW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmhlYWx0aFZhbHVlID09PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMucGVyY2VudGFnZSAqIHRoaXMuaGVhbHRoVmFsdWUpO1xyXG5cdFx0Ly8gVGhlIGFjdHVhbCBoZWFsdGggamF1Z2UgeW91IHNlZSBkZWNyZWFzaW5nXHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIGhlYWx0aFdpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB9KSB7XHJcbiAgICAgICAgLy8gRXF1aXZhbGVudCB0byB0aGlzLmJhciA9IHBhcmFtcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKVxyXG4gICAgICAgIHRoaXMuYmFyID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcyhwYXJhbXMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMueCA9IHBhcmFtcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBhcmFtcy55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMjtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMTAwO1xyXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IDEwMC8xMDA7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMuYmFyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIdWQge1xyXG5cclxuXHRwcml2YXRlIGF2YXRhcjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLkRPTUVsZW1lbnQ7XHJcblx0cHJpdmF0ZSB0ZXh0U3R5bGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR1c2VyOiBVc2VyO1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLnRleHRTdHlsZSA9IGBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsOyBcclxuXHRcdFx0bWFyZ2luOiAwOyBcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4OyBcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHhcclxuXHRcdGA7XHJcblxyXG5cdFx0aWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09ICdsZWZ0Jykge1xyXG5cclxuXHRcdFx0dGhpcy5hdmF0YXIgPSBwYXJhbXMuc2NlbmUuYWRkLmltYWdlKFxyXG5cdFx0XHRcdDAsIFxyXG5cdFx0XHRcdDM1LCBcclxuXHRcdFx0XHRwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXlcclxuXHRcdFx0KS5zZXRPcmlnaW4oMCwwKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG5cdFx0XHRcdDAsXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQnaDUnLFxyXG5cdFx0XHRcdHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhdGlvICR7cGFyYW1zLnVzZXIucmF0aW99JWBcclxuXHRcdFx0KS5zZXRPcmlnaW4oMCwwKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09ICdyaWdodCcpIHtcclxuXHJcblx0XHRcdHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZC5pbWFnZShcclxuXHRcdFx0XHRnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSwgXHJcblx0XHRcdFx0MzUsIFxyXG5cdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRodW1ibmFpbEtleVxyXG5cdFx0XHQpLnNldE9yaWdpbigxLDApO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcblx0XHRcdFx0Z2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcblx0XHRcdFx0MCxcclxuXHRcdFx0XHQnaDUnLFxyXG5cdFx0XHRcdHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhdGlvICR7cGFyYW1zLnVzZXIucmF0aW99JWBcclxuXHRcdFx0KS5zZXRPcmlnaW4oMSwwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gJy4vVGlsZW1hcCc7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBIExldmVsIGNvbnNpc3RzIG9mIDogYSBiYWNrZ3JvdW5kICsgYSBtdXNpYyB0aGVtZSArIGEgdGlsZW1hcCArIGEgbmFtZSArXHJcbiAqIGEgdGh1bWJuYWlsLlxyXG4gKiBJdCBpbml0cyB0aGUgZGlmZmVyZW50IGtleXMgbmVlZGVkIGFuZCBjcmVhdGVzL2RyYXcgdGhlIGJhY2tncm91bmQsXHJcbiAqIHRoZSB0aWxlbWFwIChieSBpbnN0YW5jaWF0ZSBpdCkgYW5kIHBsYXkgdGhlIG11c2ljIHRoZW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExldmVsIHtcclxuXHJcblx0cHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuXHRwcml2YXRlIF90aWxlbWFwOiBUaWxlbWFwO1xyXG5cdHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHRwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuXHRwcml2YXRlIGJhY2tncm91bmRLZXk6IHN0cmluZztcclxuXHRwcml2YXRlIG11c2ljS2V5OiBzdHJpbmc7XHJcblxyXG5cdHB1YmxpYyBnZXQgdGlsZW1hcCgpOiBUaWxlbWFwIHtcclxuXHRcdHJldHVybiB0aGlzLl90aWxlbWFwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbmFtZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7XHJcblx0XHRpZDogbnVtYmVyO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdH0pIHtcclxuXHJcblx0XHR0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG5cdFx0dGhpcy5fbmFtZSA9IHBhcmFtcy5uYW1lO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kS2V5ID0gYGxldmVsJHt0aGlzLmlkfUJhY2tncm91bmRgO1xyXG5cdFx0dGhpcy5tdXNpY0tleSA9IGBsZXZlbCR7dGhpcy5pZH1UaGVtZWA7XHJcblx0XHR0aGlzLl90aHVtYm5haWxLZXkgPSBgbGV2ZWwke3RoaXMuaWR9VGh1bWJuYWlsYDtcclxuXHJcblx0fVxyXG5cclxuXHRjcmVhdGUoc2NlbmUpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY2VuZS5hZGQuaW1hZ2UoXHJcblx0XHRcdGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yLFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpLzIsXHJcblx0XHRcdHRoaXMuYmFja2dyb3VuZEtleVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLl90aWxlbWFwID0gbmV3IFRpbGVtYXAoe1xyXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcclxuXHRcdFx0aWQ6IHRoaXMuaWRcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuc291bmQuYWRkKHRoaXMubXVzaWNLZXkpLnBsYXkoKTtcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4vUHJvamVjdGlsZSc7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gJy4vSGVhbHRoQmFyJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9DaGFyYWN0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuXHRwcml2YXRlIF9wcm9qZWN0aWxlczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cdHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG5cdHByaXZhdGUgcmlnaHRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblx0cHJpdmF0ZSBsZWZ0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHRwcml2YXRlIHNob290S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cdHByaXZhdGUgbGFzdFByZXNzZWRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblxyXG5cdHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cdHByaXZhdGUgc2hvb3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcblx0cHJpdmF0ZSBsYXN0U2hvb3Q6IG51bWJlcjtcclxuXHRwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgdng6IG51bWJlcjtcclxuXHRwcml2YXRlIGdyYXZpdHlZOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJvdW5jZTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYnVsbGV0UHJvb2Y6IGJvb2xlYW47XHJcblxyXG5cdHByaXZhdGUgcmVhZG9ubHkgU1RBVEVTID0ge1xyXG5cdFx0QUxJVkU6ICdBTElWRScsXHJcblx0XHRIVVJUOiAnSFVSVCcsXHJcblx0XHRERUFEOiAnREVBRCdcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQgcHJvamVjdGlsZXMoKTogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwIHtcclxuXHRcdHJldHVybiB0aGlzLl9wcm9qZWN0aWxlcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5oZWFsdGggPD0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBodXJ0KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuYnVsbGV0UHJvb2YgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlmICh0aGlzLmhlYWx0aCA+IDApIHtcclxuXHRcclxuXHRcdFx0XHR0aGlzLmhlYWx0aCAtPSAyMDtcclxuXHRcdFx0XHR0aGlzLmhlYWx0aEJhci5kZWNyZWFzZSgyMCk7XHJcblx0XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuXHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG1ha2VCdWxsZXRQcm9vZigpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmJ1bGxldFByb29mID09PSBmYWxzZSkgdGhpcy5idWxsZXRQcm9vZiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRTb3VuZHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmp1bXBTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdqdW1wU291bmQnKTtcclxuXHRcdHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKCdzaG9vdFNvdW5kJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRWaXRhbHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhlYWx0aCA9IDEwMDtcclxuXHRcdHRoaXMuYnVsbGV0UHJvb2YgPSBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0cHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuXHRcdHRoaXMuZ3Jhdml0eVkgPSAxMDAwO1xyXG5cdFx0dGhpcy5qdW1wVmVsb2NpdHkgPSAtNjAwO1xyXG5cdFx0dGhpcy52eCA9IDE1MDtcclxuXHRcdHRoaXMuYm91bmNlID0gMC41O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhcHBseVBoeXNpY3MoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRHcmF2aXR5WSh0aGlzLmdyYXZpdHlZKTtcclxuXHRcdHRoaXMuc2V0Qm91bmNlKHRoaXMuYm91bmNlKTtcclxuXHRcdHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0Q29udHJvbHMocEtleXMpOiB2b2lkIHtcclxuXHRcdHRoaXMuanVtcEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydqdW1wJ10pO1xyXG5cdFx0dGhpcy5yaWdodEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydyaWdodCddKTtcclxuXHRcdHRoaXMubGVmdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydsZWZ0J10pO1xyXG5cdFx0dGhpcy5zaG9vdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzWydzaG9vdCddKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEhlYWx0aEJhcihwSGVhbHRoQmFyOiBIZWFsdGhCYXIpOiB2b2lkIHtcclxuXHRcdHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFNob290aW5nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sYXN0U2hvb3QgPSAwO1xyXG5cdFx0dGhpcy5fcHJvamVjdGlsZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcblx0XHRcdHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zY2VuZS50aW1lLm5vdyA+IHRoaXMubGFzdFNob290KSB7XHJcblx0XHRcdHRoaXMuX3Byb2plY3RpbGVzLmFkZChcclxuXHRcdFx0XHRuZXcgUHJvamVjdGlsZSh7XHJcblx0XHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcclxuXHRcdFx0XHRcdC8vIENoYW5naW5nIGJ1bGxldCBzdGFydGluZyBwb2ludCBpZiBzcHJpdGUgaXMgZmxpcHBlZCBvbiBYIGF4aXMuXHJcblx0XHRcdFx0XHR4OiAoIXRoaXMuZmxpcFgpID8gdGhpcy54ICsgMjAgOiB0aGlzLnggLSAyMCxcclxuXHRcdFx0XHRcdHk6IHRoaXMueSArIDExLFxyXG5cdFx0XHRcdFx0Ly8gQnVsbGV0IGRpcmVjdGlvbiAobGVmdC9yaWdodCkgYmFzZWQgb24gbGFzdCBwcmVzc2VkIGtleVxyXG5cdFx0XHRcdFx0Ly8gKGkuZSBkaXJlY3Rpb24gb2YgdGhlIHBsYXllcikuIERlZmF1bHQ6IGdvZXMgcmlnaHQuXHJcblx0XHRcdFx0XHRkaXJlY3Rpb246ICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLmxlZnRLZXkpID8gLTEgOiAxLFxyXG5cdFx0XHRcdFx0dGV4dHVyZUtleTogJ3Byb2plY3RpbGUnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5sYXN0U2hvb3QgPSB0aGlzLnNjZW5lLnRpbWUubm93ICsgNTAwO1xyXG5cdFx0XHQvLyBQbGF5aW5nIHNvdW5kIGhlcmUgZW5zdXJlcyB1cyBpdCBpcyBwbGF5ZWQgb25seSBvbmNlIGV2ZXJ5IHNob290LlxyXG5cdFx0XHR0aGlzLnNob290U291bmQucGxheSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRmxpcHBpbmcgdGhlIHNwcml0ZSBvbiBpdHMgWCBheGlzLCBkZXBlbmRpbmcgb24gd2hpY2ggZGlyZWN0aW9uIHlvdSBnby5cclxuXHQgKi9cclxuXHRwcml2YXRlIGhhbmRsZVNwcml0ZUZsaXBwaW5nKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkge1xyXG5cdFx0XHQvLyBDaGFuZ2VkIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIGxlZnQuXHJcblx0XHRcdHRoaXMuZmxpcFggPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLnJpZ2h0S2V5KSB7XHJcblx0XHRcdC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0LlxyXG5cdFx0XHR0aGlzLmZsaXBYID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBPcmlnaW5hbCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyByaWdodC5cclxuXHRcdFx0dGhpcy5mbGlwWCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGVKdW1waW5nKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuanVtcEtleS5pc0Rvd24pIHtcclxuXHRcdFx0aWYgKHRoaXMuYm9keS5ibG9ja2VkLmRvd24gfHwgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcclxuXHRcdFx0XHR0aGlzLnNldFZlbG9jaXR5WSh0aGlzLmp1bXBWZWxvY2l0eSk7XHJcblx0XHRcdFx0dGhpcy5qdW1wU291bmQucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9IFxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuXHQgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcblx0ICogY3JlYXRlIHNob290cy5cclxuXHQgKi9cclxuXHRwcml2YXRlIGhhbmRsZUlkbGluZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cdFx0dGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SURMRWAsIHRydWUpO1xyXG5cclxuXHRcdC8vIElkbGluZy1TaG9vdGluZy5cclxuXHRcdGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFX1NIT09UYCwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuc2hvb3QoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhhbmRsZSB3YWxraW5nIEFORCB3YWxraW5nLXNob290aW5nLlxyXG5cdCAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuXHQgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgaGFuZGxlV2Fsa2luZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtgLCB0cnVlKTtcclxuXHJcblx0XHQvLyBXYWxraW5nIDogZ29pbmcgcmlnaHRcclxuXHRcdGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCh0aGlzLnZ4KTtcclxuXHRcdFx0dGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMucmlnaHRLZXk7XHRcclxuXHRcdH1cclxuXHRcdC8vIFdhbGtpbmcgOiBnb2luZyBsZWZ0XHJcblx0XHRpZiAodGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG5cdFx0XHR0aGlzLnNldFZlbG9jaXR5WCgtdGhpcy52eCk7XHJcblx0XHRcdHRoaXMubGFzdFByZXNzZWRLZXkgPSB0aGlzLmxlZnRLZXk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gV2Fsa2luZy1TaG9vdGluZ1xyXG5cdFx0aWYgKHRoaXMuc2hvb3RLZXkuaXNEb3duKSB7XHJcblx0XHRcdHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtfU0hPT1RgLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5zaG9vdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zOiB7IFxyXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZTsgXHJcblx0XHR4OiBudW1iZXI7IFxyXG5cdFx0eTogbnVtYmVyOyBcclxuXHRcdHRleHR1cmVLZXk6IHN0cmluZztcclxuXHRcdGNvbnRyb2xLZXlzOiBvYmplY3Q7XHJcblx0XHRoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuXHR9KSB7XHJcblxyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHRcdHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuXHRcdHRoaXMuYXBwbHlQaHlzaWNzKCk7XHJcblx0XHR0aGlzLmluaXRTb3VuZHMoKTtcclxuXHRcdHRoaXMuaW5pdFZpdGFscygpO1xyXG5cdFx0dGhpcy5pbml0SGVhbHRoQmFyKHBhcmFtcy5oZWFsdGhCYXIpO1xyXG5cdFx0dGhpcy5pbml0U2hvb3RpbmcoKTtcclxuXHRcdHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblxyXG5cdFx0Ly8gUmVzdHJhaW4gdGhlIGJvdW5kaW5nQm94XHJcblx0XHR0aGlzLnNldFNpemUoMjAsIDYwKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkFMSVZFKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcblx0XHRpZiAodGhpcy5pc0RlYWQoKSkgdGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVTLkRFQUQ7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkFMSVZFKSB7XHJcblx0XHRcdC8vIFRoaXMgaXMgZGV0YWNoZWQgZnJvbSB0aGUgb3RoZXIgYmxvY2sgYmVjYXVzZSB5b3UgY2FuIGRvIGFueXRoaW5nXHJcblx0XHRcdC8vIHdoaWxlIGp1bXBpbmc6IHdhbGsvd2Fsay1zaG9vdCwgaWRsZS9pZGxlLXNob290LiBTbyBpdCBpc24ndCBcclxuXHRcdFx0Ly8gZGVwZW5kYW50IG9mIHdoZXRoZXIgeW91J3JlIHByZXNzaW5nIGxlZnQgb3IgcmlnaHQgb3Igd2hhdGV2ZXIuXHJcblx0XHRcdHRoaXMuaGFuZGxlSnVtcGluZygpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMucmlnaHRLZXkuaXNEb3duIHx8IHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZVdhbGtpbmcoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmhhbmRsZUlkbGluZygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmhhbmRsZVNwcml0ZUZsaXBwaW5nKCk7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5IVVJUKSB7XHJcblxyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ISVRgLCB0cnVlKTtcclxuXHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cclxuXHRcdFx0Ly8gVGhpcyBsZWFkcyB0byBodXJ0IGFuaW0gYnVnIFxyXG5cdFx0XHR0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG5cdFx0XHRcdGRlbGF5OiAxMDAwLFxyXG5cdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkFMSVZFKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuREVBRCkge1xyXG5cdFx0XHQvLyBXZSBkb24ndCByZXNldCBzdGF0ZSB0byBBTElWRSBjYXVzZSBpdCdzIGVuZCBvZiB0aGUgZ2FtZVxyXG5cdFx0XHR0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ERUFEYCwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gUGxheWVyIFN0YXRlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHRwcml2YXRlIHZ4OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnggPiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgfHwgdGhpcy55ID4gZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSB8fCB0aGlzLnggPCAwIHx8IHRoaXMueSA8IDApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXRBbmltYXRpb25zKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG5cdFx0XHRrZXk6ICdjb2xsaXNpb25FZmZlY3QxJyxcclxuXHRcdFx0ZnJhbWVzOiB0aGlzLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdjb2xsaXNpb25FZmZlY3QxJywge1xyXG5cdFx0XHRcdHN0YXJ0OiAwLFxyXG5cdFx0XHRcdGVuZDogMVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0cmVwZWF0OiAxXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG5cdFx0c3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG5cdFx0dGhpcy52eCA9IDcwMDtcclxuXHRcdHRoaXMuZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcclxuXHRcdFxyXG5cdFx0dGhpcy5pbml0QW5pbWF0aW9ucygpO1xyXG5cclxuXHRcdHRoaXMuc2V0VmVsb2NpdHlYKHRoaXMuZGlyZWN0aW9uICogdGhpcy52eCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5pc091dCgpKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1Byb2plY3RpbGUgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHMnKTtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG5cclxuXHJcblx0cHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG5cdHByaXZhdGUgdGlsZXNldDogUGhhc2VyLlRpbGVtYXBzLlRpbGVzZXQ7XHJcblx0cHJpdmF0ZSBfbWFpbkxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG5cdHByaXZhdGUgc3ViTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXR0ZXIgZm9yIHRoZSBsYXllciB0aGF0IGNvbGxpZGVzOiAnY29sbGlkZXMnIHNldCB0byB0cnVlIGluIFRpbGVkLlxyXG5cdCAqL1xyXG5cdGdldCBtYWluTGF5ZXIoKTogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbWFpbkxheWVyO1xyXG5cdH1cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtczogeyBcclxuXHRcdHNjZW5lOiBQaGFzZXIuU2NlbmU7IFxyXG5cdFx0aWQ6IG51bWJlcjsgXHJcblx0fSkge1xyXG5cclxuXHRcdHRoaXMubWFwID0gcGFyYW1zLnNjZW5lLm1ha2UudGlsZW1hcCh7IFxyXG5cdFx0XHRrZXk6IGBsZXZlbCR7cGFyYW1zLmlkfWBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMudGlsZXNldCA9IHRoaXMubWFwLmFkZFRpbGVzZXRJbWFnZShcclxuXHRcdFx0YGxldmVsJHtwYXJhbXMuaWR9LXRpbGVzaGVldGAsIFxyXG5cdFx0XHRgbGV2ZWwke3BhcmFtcy5pZH1UaWxlc2hlZXRgXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX21haW5MYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG5cdFx0XHQnbWFpbkxheWVyJywgXHJcblx0XHRcdHRoaXMudGlsZXNldCwgMCwgMFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLl9tYWluTGF5ZXIuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7IFxyXG5cdFx0XHRjb2xsaWRlczogdHJ1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zdWJMYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG5cdFx0XHQnc3ViTGF5ZXInLFxyXG5cdFx0XHR0aGlzLnRpbGVzZXQsIDAsIDBcclxuXHRcdCk7XHRcclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL0xldmVsXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuL0d1aVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuXHJcblxyXG5cdHByaXZhdGUgX2lkOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfdXNlcm5hbWU6IHN0cmluZztcclxuXHRwcml2YXRlIF9yYXRpbzogbnVtYmVyO1xyXG5cdHByaXZhdGUgX2F2YXRhcjogc3RyaW5nO1xyXG5cdHByaXZhdGUgX3NjcmVlblNpZGU6IHN0cmluZztcclxuXHRwcml2YXRlIF9jaGFyYWN0ZXJJbnN0YW5jZTogQ2hhcmFjdGVyO1xyXG5cdHByaXZhdGUgX3BsYXllckluc3RhbmNlOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBfbGV2ZWxJbnN0YW5jZTogTGV2ZWw7XHJcblxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFVzZXIncyBpZCBmcm9tIERCLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9pZDtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogVXNlcidzIHVzZXJuYW1lIGZyb20gREIuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVXNlcidzIHJhdGlvIGZyb20gREIuXHJcblx0ICovXHJcblx0cHVibGljIGdldCByYXRpbygpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3JhdGlvO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCBzY3JlZW5TaWRlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc2NyZWVuU2lkZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoYXJhY3RlciB0aGUgdXNlciBoYXMgY2hvc2VuIGluIHRoZSBNZW51LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgY2hhcmFjdGVySW5zdGFuY2UoKTogQ2hhcmFjdGVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBsYXllciBjcmVhdGVkIGluIEdhbWUgU2NlbmUgYmFzZWQgb24gVXNlcidzIGNoYXJhY3RlciBjaG9pY2UuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBwbGF5ZXJJbnN0YW5jZSgpOiBQbGF5ZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BsYXllckluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTGV2ZWwgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudSwgbWFrZXMgbW9yZSBzZW5zZSB3aGVuIHBsYXlpbmcgc29sby5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGxldmVsSW5zdGFuY2UoKTogTGV2ZWwge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2xldmVsSW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IGNoYXJhY3Rlckluc3RhbmNlKHY6IENoYXJhY3Rlcikge1xyXG5cdFx0dGhpcy5fY2hhcmFjdGVySW5zdGFuY2UgPSB2O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldCBwbGF5ZXJJbnN0YW5jZSh2OiBQbGF5ZXIpIHtcclxuXHRcdHRoaXMuX3BsYXllckluc3RhbmNlID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgbGV2ZWxJbnN0YW5jZSh2OiBMZXZlbCkge1xyXG5cdFx0dGhpcy5fbGV2ZWxJbnN0YW5jZSA9IHY7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM6IHsgXHJcblx0XHRpZDogbnVtYmVyOyBcclxuXHRcdHVzZXJuYW1lOiBzdHJpbmc7IFxyXG5cdFx0cmF0aW86IG51bWJlcjtcclxuXHRcdHNjcmVlblNpZGU6IHN0cmluZztcclxuXHR9KSB7XHJcblxyXG5cdFx0dGhpcy5faWQgPSBwYXJhbXMuaWQ7XHJcblx0XHR0aGlzLl91c2VybmFtZSA9IHBhcmFtcy51c2VybmFtZTtcclxuXHRcdHRoaXMuX3JhdGlvID0gcGFyYW1zLnJhdGlvO1xyXG5cdFx0dGhpcy5fc2NyZWVuU2lkZSA9IHBhcmFtcy5zY3JlZW5TaWRlO1xyXG5cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSAnLi4vb2JqZWN0cy9MZXZlbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9vYmplY3RzL1VzZXInO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuLi9vYmplY3RzL0NoYXJhY3Rlcic7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gJy4uL29iamVjdHMvR3VpJztcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2UnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdCb290J1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG5cdHByaXZhdGUgbGV2ZWxzOiBBcnJheTxMZXZlbD5cclxuXHRwcml2YXRlIHVzZXJzOiBBcnJheTxVc2VyPjtcclxuXHRwcml2YXRlIGNoYXJhY3RlcnM6IEFycmF5PENoYXJhY3Rlcj47XHJcblxyXG5cdHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG5cdHByaXZhdGUgYnRuOiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuXHRwcml2YXRlIGJhY2tncm91bmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5sZXZlbHMgPSBbXHJcblx0XHRcdG5ldyBMZXZlbCh7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0bmFtZTogXCJDaW1ldGllcmVcIlxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IExldmVsKHtcclxuXHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRuYW1lOiBcIlByYWlyaWVcIlxyXG5cdFx0XHR9KVxyXG5cdFx0XTtcclxuXHRcdFxyXG5cdFx0dGhpcy51c2VycyA9IFtcclxuXHRcdFx0bmV3IFVzZXIoe1xyXG5cdFx0XHRcdGlkOiBwYXJzZWRTdG9yYWdlKCk/Lm1haW5Vc2VyPy5pZCB8fCAwLFxyXG5cdFx0XHRcdHVzZXJuYW1lOiBwYXJzZWRTdG9yYWdlKCk/Lm1haW5Vc2VyPy51c2VybmFtZSB8fCAnRm9vMScsXHJcblx0XHRcdFx0cmF0aW86IHBhcnNlZFN0b3JhZ2UoKT8ubWFpblVzZXI/LnJhdGlvIHx8IDAsXHJcblx0XHRcdFx0c2NyZWVuU2lkZTogJ2xlZnQnXHJcblx0XHRcdH0pLFxyXG5cclxuXHRcdFx0bmV3IFVzZXIoe1xyXG5cdFx0XHRcdGlkOiBwYXJzZWRTdG9yYWdlKCk/LnNlY29uZGFyeVVzZXI/LmlkIHx8IDAsXHJcblx0XHRcdFx0dXNlcm5hbWU6IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlcj8udXNlcm5hbWUgfHwgJ0JvbzInLFxyXG5cdFx0XHRcdHJhdGlvOiBwYXJzZWRTdG9yYWdlKCk/LnNlY29uZGFyeVVzZXI/LnJhdGlvIHx8IDAsXHJcblx0XHRcdFx0c2NyZWVuU2lkZTogJ3JpZ2h0J1xyXG5cdFx0XHR9KVxyXG5cdFx0XTtcclxuXHJcblx0XHR0aGlzLmNoYXJhY3RlcnMgPSBbXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiU3RldmllXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiQ2Fyb2xpbmVcIiB9LFxyXG5cdFx0XHRcdHN0YXRzOiB7fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bmV3IENoYXJhY3Rlcih7XHJcblx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0ZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdG9mXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiS3Jpc3R5XCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSksXHJcblx0XHRcdG5ldyBDaGFyYWN0ZXIoe1xyXG5cdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdGRldGFpbHM6IHsgbmlja25hbWU6IFwiT3JvblwiIH0sXHJcblx0XHRcdFx0c3RhdHM6IHt9XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRuZXcgQ2hhcmFjdGVyKHtcclxuXHRcdFx0XHRpZDogNixcclxuXHRcdFx0XHRkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIkFsZXhhXCIgfSxcclxuXHRcdFx0XHRzdGF0czoge31cclxuXHRcdFx0fSlcclxuXHRcdF07XHJcblxyXG5cdFx0Ly8gVXNpbmcgdGhlIHNjZW5lIERhdGEgTWFuYWdlciB0byBzdG9yZSBkYXRhIG9uIGEgc2NlbmUgbGV2ZWwuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMudXNlcnMpO1xyXG5cdFx0dGhpcy5kYXRhLnNldCgnY2hhcmFjdGVycycsIHRoaXMuY2hhcmFjdGVycyk7XHJcblx0XHR0aGlzLmRhdGEuc2V0KCdsZXZlbHMnLCB0aGlzLmxldmVscyk7XHJcblx0fVxyXG5cclxuXHRwcmVsb2FkKCkge1xyXG5cdFx0dGhpcy5sb2FkLnBhY2soXHJcblx0XHRcdFwicHJlbG9hZFwiLFxyXG5cdFx0XHRcImFzc2V0cy9wYWNrLmpzb25cIixcclxuXHRcdFx0XCJwcmVsb2FkXCJcclxuXHRcdCk7XHJcblx0XHRcclxuXHRcdC8vIFByZWxvYWQgYWxsIGNoYXJhY3RlcnMgYXRsYXNlcyA6IGEganNvbiBmaWxlIHRoYXQgYWN0cyBhc1xyXG5cdFx0Ly8gYXMgYSBcIm1hcFwiL1wibGlua1wiIHRvIGEgcG5nIHNwcml0ZXNoZWV0LlxyXG5cdFx0Ly8gVXNlZCBmb3IgZHJhd2luZyBQTGF5ZXIgdGV4dHVyZSBhbmQgc2V0IGFuaW1hdGlvbnMuXHJcblx0XHRmb3IgKGxldCBuID0gMTsgbiA8PSA2OyBuKyspIHtcclxuXHRcdFx0dGhpcy5sb2FkLmF0bGFzKFxyXG5cdFx0XHRcdGBjaGFyYWN0ZXIke259YCxcclxuXHRcdFx0XHRgYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlciR7bn0vY2hhcmFjdGVyJHtufS1zcHJpdGVzaGVldC5wbmdgLFxyXG5cdFx0XHRcdGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LWF0bGFzLmpzb25gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLm11c2ljVGhlbWUgPSB0aGlzLnNvdW5kLmFkZCgnbWVudVRoZW1lJyk7XHJcblx0XHR0aGlzLm11c2ljVGhlbWUucGxheSgpO1xyXG5cclxuXHRcdHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYWRkLmltYWdlKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgodGhpcykvMiwgXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcykvMixcclxuXHRcdFx0J2JhY2tncm91bmRGb3JHVUlTY2VuZXMnXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMubG9nbyA9IHRoaXMuYWRkLmltYWdlKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgodGhpcykvMiwgXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcykvMi41LFxyXG5cdFx0XHQnbWFpbkxvZ28nXHJcblx0XHQpO1xyXG5cclxuXHRcdEd1aS5jdXN0b21UZXh0KHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IHRoaXMubG9nby54LFxyXG5cdFx0XHR5OiB0aGlzLmxvZ28ueSArIDg0LFxyXG5cdFx0XHR0ZXh0OiBcIldlbGNvbWUgdG8gdGhlIGZpZ2h0ICFcIlxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdEd1aS5tYWluQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0dGV4dDogXCJNZW51XCIsXHJcblx0XHRcdHN0b3BTb3VuZHM6IGZhbHNlLFxyXG5cdFx0XHRzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuXHRcdFx0bmV3U2NlbmVLZXk6ICdNZW51JyxcclxuXHRcdFx0Ly8gUGFzc2luZyB0aGlzIHNjZW5lIGRhdGEgdG8gdGhlIG1lbnUgc2NlbmUuXHJcblx0XHRcdHNjZW5lRGF0YTogdGhpcy5kYXRhLmdldEFsbCgpXHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIENPTlRST0xLRVlTIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IEJvbWIgfSBmcm9tICcuLi9vYmplY3RzL0JvbWInO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tICcuLi9vYmplY3RzL0h1ZCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL29iamVjdHMvUGxheWVyJztcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSAnLi4vb2JqZWN0cy9IZWFsdGhCYXInO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gJy4uL29iamVjdHMvTGV2ZWwnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vb2JqZWN0cy9Vc2VyJztcclxuaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gJy4uL0FuaW1hdGlvbnMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdHYW1lJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLiBcclxuICogU3RhdGljIGVsZW1lbnRzIHN1Y2ggYXMgSFVEcyBhbmQgSGVhbHRoQmFycyAodmlhIFBsYXllcikgYXJlIGluc3RhbmNpYXRlZC5cclxuICogTGV2ZWwgaXMgY3JlYXRlZCAobm90IGluc3RhbmNpYXRlZCksIHdoaWNoIGJhc2ljYWxseSBtZWFucyB0aGF0IFRpbGVtYXAgaXNcclxuICogZHJhd24uIENvbGxpZGVycyBiZXR3ZWVuIGFjdG9ycyBhcmUgaGFuZGxlZC4gUGxheWVyIGFuaW1hdGlvbnMgYXJlIGNyZWF0ZWQuXHJcbiAqIEl0IHNldHMgYSBTY2VuZSBXaW5uZXIgd2hlbiBvbmUgb2YgdGhlIHVzZXJzIFBMQVlFUiBJTlNUQU5DRVMgaXMgZGVhZCBhbmRcclxuICogdGhlbiBzdGFydCB0aGUgbmV3IHNjZW5lIChHYW1lb3ZlciBTY2VuZSkuXHJcbiAqIEl0IHRha2VzIHRoZSBkYXRhIG9iamVjdCBmcm9tIHRoZSBNZW51IFNjZW5lIChjb21wb3NlZCBvZiBhbiBhcnJheSBvZiB1c2VycyksXHJcbiAqIGF2YWlsYWJsZSBoZXJlIGluIHRoZSBpbml0KCkgZXQgY3JlYXRlKCkgY2FsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblx0XHJcblx0cHJpdmF0ZSBwbGF5ZXIxOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBwbGF5ZXIyOiBQbGF5ZXI7XHJcblx0cHJpdmF0ZSBodWQxOiBIdWQ7XHJcblx0cHJpdmF0ZSBodWQyOiBIdWQ7XHJcblx0cHJpdmF0ZSB0aWxlbWFwOiBMZXZlbFtcInRpbGVtYXBcIl07XHJcblx0cHJpdmF0ZSBib21iczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cdHByaXZhdGUgYm9tYkNyZWF0aW9uRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcblx0cHJpdmF0ZSBuZXdTY2VuZVRpbWVkRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcblx0cHJpdmF0ZSB3aW5uZXI6IFVzZXI7XHJcblxyXG5cdHByaXZhdGUgc2V0Q29sbGlkZXJzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5ib21icyxcclxuXHRcdFx0dGhpcy50aWxlbWFwLm1haW5MYXllclxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMuYm9tYnMsXHJcblx0XHRcdHRoaXMucGxheWVyMSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5odXJ0KCk7XHJcblx0XHRcdFx0dGhpcy5ib21icy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5ib21icyxcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuXHRcdFx0XHR0aGlzLmJvbWJzLmdldEZpcnN0QWxpdmUoKS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHR0aGlzLnBsYXllcjEsXHJcblx0XHRcdHRoaXMucGxheWVyMlxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdFt0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMl0sIFxyXG5cdFx0XHR0aGlzLnRpbGVtYXAubWFpbkxheWVyXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLFxyXG5cdFx0XHR0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuaHVydCgpO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLFxyXG5cdFx0XHR0aGlzLnBsYXllcjEucHJvamVjdGlsZXMsXHJcblx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIuaHVydCgpO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRpbml0KG1lbnVTY2VuZURhdGEpIHtcclxuXHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgbWVudVNjZW5lRGF0YT8udXNlcnMpO1xyXG5cclxuXHRcdEFuaW1hdGlvbnMuY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR1c2VyczogdGhpcy5kYXRhLmdldCgndXNlcnMnKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmxldmVsSW5zdGFuY2UuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMudGlsZW1hcCA9IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ubGV2ZWxJbnN0YW5jZS50aWxlbWFwO1xyXG5cclxuXHRcdHRoaXMuYm9tYnMgPSB0aGlzLmFkZC5ncm91cCh7XHJcblx0XHRcdHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5ib21iQ3JlYXRpb25FdmVudCA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcblx0XHRcdGRlbGF5OiAyMDAwLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYm9tYnMuYWRkKFxyXG5cdFx0XHRcdFx0bmV3IEJvbWIoe1xyXG5cdFx0XHRcdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdFx0XHRcdHg6IFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIGdldEdhbWVXaWR0aCh0aGlzKSAtIDUwKSxcclxuXHRcdFx0XHRcdFx0eTogMCxcclxuXHRcdFx0XHRcdFx0dGV4dHVyZUtleTogJ2JvbWInXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNhbGxiYWNrU2NvcGU6IHRoaXNcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0eDogMzAwLFxyXG5cdFx0XHR5OiAzMDAsXHJcblx0XHRcdHRleHR1cmVLZXk6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0uY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleSxcclxuXHRcdFx0Y29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQxLFxyXG5cdFx0XHRoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG5cdFx0XHRcdHNjZW5lOiB0aGlzLFxyXG5cdFx0XHRcdHg6IDYwLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHg6IDkwMCxcclxuXHRcdFx0eTogMzAwLFxyXG5cdFx0XHR0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcblx0XHRcdGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMixcclxuXHRcdFx0aGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuXHRcdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcyktMTYyLFxyXG5cdFx0XHRcdHk6IDQwXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG5cdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0dXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcblx0XHQvLyBUaGlzIGlzIHdoZXJlIHdlIGhhdmUgdXNlcjwtLT5wbGF5ZXIgY29uY29yZGFuY2VcclxuXHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ucGxheWVySW5zdGFuY2UgPSB0aGlzLnBsYXllcjE7XHJcblx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIyO1xyXG5cclxuXHRcdHRoaXMuZGF0YS5zZXQoJ3VzZXJzJywgdGhpcy5kYXRhLnZhbHVlcy51c2Vycyk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5wbGF5ZXIxLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5wbGF5ZXIyLnVwZGF0ZSgpO1xyXG5cclxuXHRcdC8vIFdpbm5lciBoYW5kbGluZy5cclxuXHRcdC8vIEVudGVyIHdpbm5lciBoYW5kbGluZyBtb2RlIGlmIG9uZSBvZiB0aGUgcGxheWVyIGlzIGRlYWQuXHJcblx0XHRpZiAodGhpcy5wbGF5ZXIxLmlzRGVhZCgpIHx8IHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuXHRcdFx0Ly8gTWFrZSBwbGF5ZXJzIGludmljaWJsZSB3aGlsZSB3YWl0aW5nIGZvciB0aGUgbmV4dCBzY2VuZSB0byBzdGFydC5cclxuXHRcdFx0Ly8gVGhpcyB3YXkgd2UgZG9uJ3QgaGF2ZSB0byBwYXVzZSBwaHlzaWNzIGJ1dCB0aGUgd2lubmVyIGlzIG5vdFxyXG5cdFx0XHQvLyBraWxsZWQgYnkgdGhlIGJvbWJzIHRoYXQgYXJlIHN0aWxsIGZhbGxpbmcuXHJcblx0XHRcdHRoaXMucGxheWVyMS5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLm1ha2VCdWxsZXRQcm9vZigpO1xyXG5cclxuXHRcdFx0Ly8gRGVjaWRpbmcgd2hpY2ggb25lIGlzIHRoZSB3aW5uZXIgKHRoZSBvbmUgbm90IGRlYWQpLlxyXG5cdFx0XHRpZiAodGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmICF0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHRcdFx0XHQvLyBXaW5uZXJzIGFyZSB1c2VycyBub3QgcGxheWVycy5cclxuXHRcdFx0XHR0aGlzLndpbm5lciA9IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV07XHJcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMucGxheWVyMS5pc0RlYWQoKSAmJiB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHRcdFx0XHR0aGlzLndpbm5lciA9IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF07XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIyLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cdFx0XHRcdC8vIE51bGxpbmcgdGhlIHdpbm5lciBpZiB0aGVyZSdzIG5vIHdpbm5lciBhdCBhbGxcclxuXHRcdFx0XHQvLyBUeXBpY2FsbHkgdGhpcyBzaG91bGRuJ3QgZXZlciBoYXBwZW4gYnV0IHdobyBrbm93cy5cclxuXHRcdFx0XHQvLyBDaGVjayBpbiBuZXh0IHNjZW5lIGlmIHdpbm5lciBpcyB0cnV0aHksIHByaW50aW5nIGFsdCB0ZXh0XHJcblx0XHRcdFx0Ly8gaWYgbm90IChsaWtlIGlmIG51bGwpLlxyXG5cdFx0XHRcdHRoaXMud2lubmVyID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5kYXRhLnNldCgnd2lubmVyJywgdGhpcy53aW5uZXIpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gVGhyZWUgc2Vjb25kcyBkZWxheSBiZWZvcmUgbGF1bmNoaW5nIHRoZSBuZXh0IHNjZW5lXHJcblx0XHRcdHRoaXMubmV3U2NlbmVUaW1lZEV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuXHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zb3VuZC5zdG9wQWxsKCk7XHJcblx0XHRcdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lb3ZlcicsIHRoaXMuZGF0YS5nZXRBbGwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSAnLi4vb2JqZWN0cy9HdWknO1xyXG5pbXBvcnQgeyBwYXJzZWRTdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZSc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuXHRhY3RpdmU6IGZhbHNlLFxyXG5cdHZpc2libGU6IGZhbHNlLFxyXG5cdGtleTogJ0dhbWVvdmVyJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVvdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHRwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYW5kbGluZ1N0b3JhZ2UoKSB7XHJcblxyXG5cdFx0aWYgKHBhcnNlZFN0b3JhZ2UoKSkge1xyXG5cdFx0XHRjb25zdCBwYXJzZWRVc2VycyA9IHBhcnNlZFN0b3JhZ2UoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmRhdGEudmFsdWVzLndpbm5lci5pZCA9PT0gcGFyc2VkVXNlcnMubWFpblVzZXIuaWQpIHtcclxuXHJcblx0XHRcdFx0cGFyc2VkVXNlcnM/Lm1haW5Vc2VyPy5tYXRjaHM/LnB1c2goeyB3aW46IHRydWUgfSk7XHJcblx0XHRcdFx0cGFyc2VkVXNlcnM/LnNlY29uZGFyeVVzZXI/Lm1hdGNocz8ucHVzaCh7IHdpbjogZmFsc2UgfSk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS52YWx1ZXMud2lubmVyLmlkID09PSBwYXJzZWRVc2Vycy5zZWNvbmRhcnlVc2VyLmlkKSB7XHJcblxyXG5cdFx0XHRcdHBhcnNlZFVzZXJzPy5zZWNvbmRhcnlVc2VyPy5tYXRjaHM/LnB1c2goeyB3aW46IHRydWUgfSk7XHJcblx0XHRcdFx0cGFyc2VkVXNlcnM/Lm1haW5Vc2VyPy5tYXRjaHM/LnB1c2goeyB3aW46IGZhbHNlIH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gU2VyaWFsaXplIGFuZCBzZXQgaW4gc3RvcmFnZSB0aGUgbmV3bHkgdXBkYXRlZCB1c2VycyBvYmplY3RzXHJcblx0XHRcdC8vIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBtYXRjaHMgcHVzaGVkIGVudHJpZXMuXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob2FmaWdodCcsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFVzZXJzKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdChnYW1lU2NlbmVEYXRhKSB7XHJcblxyXG5cdFx0aWYgKGdhbWVTY2VuZURhdGEud2lubmVyKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5zZXQoJ3dpbm5lcicsIGdhbWVTY2VuZURhdGEud2lubmVyKTtcclxuXHRcdFx0dGhpcy5tYWluTWVzc2FnZSA9IGAke3RoaXMuZGF0YS52YWx1ZXMud2lubmVyLnVzZXJuYW1lfSByZW1wb3J0ZSBsYSBwYXJ0aWUgIWA7XHJcblx0XHRcdHRoaXMuaGFuZGxpbmdTdG9yYWdlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm1haW5NZXNzYWdlID0gXCJPdXBzIG9uIGRpcmFpdCBxdSdpbCBuJ3kgYWkgcGFzIGRlIGdhZ25hbnQgIVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdGNyZWF0ZSgpIHtcclxuXHJcblx0XHR0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0Z2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHRnZXRHYW1lSGVpZ2h0KHRoaXMpLzIsIFxyXG5cdFx0XHQnYmFja2dyb3VuZEZvckdVSVNjZW5lcydcclxuXHRcdCk7XHJcblxyXG5cdFx0R3VpLnRpdGxlKHsgc2NlbmU6IHRoaXMsIHRleHQ6IFwiRmluIERlIFBhcnRpZVwiIH0pO1xyXG5cclxuXHRcdEd1aS5jdXN0b21UZXh0KHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogZ2V0R2FtZVdpZHRoKHRoaXMpLzIsIFxyXG5cdFx0XHR5OiAyMDAsXHJcblx0XHRcdHRleHQ6IHRoaXMubWFpbk1lc3NhZ2VcclxuXHRcdH0pO1xyXG5cclxuXHRcdEd1aS5tYWluQnRuKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHRleHQ6IFwiUkVKT1VFUlwiLFxyXG5cdFx0XHRzdG9wU291bmRzOiBmYWxzZSxcclxuXHRcdFx0c2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiAnTWVudSdcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSAnLi4vb2JqZWN0cy9HdWknO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcblx0YWN0aXZlOiBmYWxzZSxcclxuXHR2aXNpYmxlOiBmYWxzZSxcclxuXHRrZXk6ICdNZW51J1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgc2NlbmUgaXMgd2hlcmUgdGhlIHR3byBwbGF5ZXJzIGNob29zZSB0aGUgdGVycmFpbi9tYXAgdGhleSB3aWxsIHBsYXkgb24sXHJcbiAqIGFuZCB0aGUgY2hhcmFjdGVycyB0aGV5IHdpbGwgcGxheSB3aXRoLlxyXG4gKiBJdCBtYWlubHkgdXNlcyBtZXRob2RzIGZyb20gdGhlIEd1aSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuXHRwcml2YXRlIGxldmVsVGh1bWI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuXHRwcml2YXRlIGNoYXJhY3RlclRodW1iczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkltYWdlPjtcclxuXHJcblx0cHJpdmF0ZSBkcmF3QmFja2dyb3VuZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYWRkLmltYWdlKFxyXG5cdFx0XHRnZXRHYW1lV2lkdGgodGhpcykvMiwgXHJcblx0XHRcdGdldEdhbWVIZWlnaHQodGhpcykvMixcclxuXHRcdFx0J2JhY2tncm91bmRGb3JHVUlTY2VuZXMnXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0VGh1bWJuYWlscyhkYXRhKTogdm9pZCB7XHJcblx0XHQvLyBJbml0IHRoZSB0ZXJyYWluIHRodW1ibmFpbCBvbiB0aGUgMXN0IGxldmVsLlxyXG5cdFx0dGhpcy5sZXZlbFRodW1iID0gdGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdDIwMCwgXHJcblx0XHRcdDMwMCwgXHJcblx0XHRcdGRhdGEudmFsdWVzLmxldmVsc1swXS50aHVtYm5haWxLZXlcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gSW5pdCB0aGUgMiBjaGFyYWN0ZXJzIHRodW1ibmFpbHMgb24gdGhlIDFzdCBjaGFyYWN0ZXIuXHJcblx0XHR0aGlzLmNoYXJhY3RlclRodW1icyA9IFtcclxuXHRcdFx0dGhpcy5hZGQuaW1hZ2UoNjUwLCAzMDAsIGRhdGEudmFsdWVzLmNoYXJhY3RlcnNbMF0udGh1bWJuYWlsS2V5KSxcclxuXHRcdFx0dGhpcy5hZGQuaW1hZ2UoODUwLCAzMDAsIGRhdGEudmFsdWVzLmNoYXJhY3RlcnNbMF0udGh1bWJuYWlsS2V5KVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJpbnRUaXRsZXMoKTogdm9pZCB7XHJcblx0XHRHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJNRU5VXCIgfSk7XHJcblx0XHRHdWkuc2VjdGlvblRpdGxlKHsgc2NlbmU6IHRoaXMsIHg6IDIwMCwgeTogMTMwLCB0ZXh0OiBcIlRlcnJhaW5cIiB9KTtcclxuXHRcdEd1aS5zZWN0aW9uVGl0bGUoeyBzY2VuZTogdGhpcywgeDogNzUwLCB5OiAxMzAsIHRleHQ6IFwiUGVyc29ubmFnZXNcIiB9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcHJpbnRUZXh0cygpOiB2b2lkIHtcclxuXHRcdEd1aS5jdXN0b21UZXh0KHsgc2NlbmU6IHRoaXMsIHg6IDY1MCwgeTogMjEwLCB0ZXh0OiBcIkpvdWV1ciAxXCIgfSk7XHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA4NTAsIHk6IDIxMCwgdGV4dDogXCJKb3VldXIgMlwiIH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZWQgdGhlIGNob2ljZXMgb24gdGhlIDFzdCBlbGVtZW50cyBvZiB0aGUgdGVycmFpbiBhbmQgdGhlXHJcblx0Ly8gY2hhcmFjdGVycy4gVGhpcyB3YXkgaWYgdGhlIHBsYXllcnMgZG9lc24ndCBjbGljayBvbiBhbnl0aGluZyB0aGV5IHN0aWxsXHJcblx0Ly8gaGF2ZSB0ZXJyYWluIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBhdHRhY2hlZC5cclxuXHRwcml2YXRlIGluaXRVc2Vyc0Nob2ljZXMoZGF0YSk6IHZvaWQge1xyXG5cdFx0Zm9yIChjb25zdCB1c2VyIG9mIGRhdGEudmFsdWVzLnVzZXJzKSB7XHJcblx0XHRcdHVzZXIubGV2ZWxJbnN0YW5jZSA9IGRhdGEudmFsdWVzLmxldmVsc1swXTtcclxuXHRcdFx0dXNlci5jaGFyYWN0ZXJJbnN0YW5jZSA9IGRhdGEudmFsdWVzLmNoYXJhY3RlcnNbMF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcdFx0XHJcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRpbml0KGJvb3RTY2VuZURhdGEpIHtcclxuXHRcdC8vIFVzaW5nIEVTMjAyMCBvcHRpb25uYWwgY2hhaW5pbmcgKGkuZSB0aGUgPykgdG8gY2hlY2sgaWYgdGhlIGRhdGEgXHJcblx0XHQvLyBvYmplY3QgY29taW5nIGZyb20gdGhlIGJvb3Qgc2NlbmUgaGFzIHRoZSByaWdodCB1c2VycywgY2hhcmFjdGVycyBhbmQgXHJcblx0XHQvLyBsZXZlbHMgZmllbGRzLlxyXG5cdFx0Ly8gU2V0dGluZyB0aGUgZGF0YSBmcm9tIHRoZSBib290IHNjZW5lIHRvIHRoaXMgc2NlbmUncyBkYXRhLlxyXG5cdFx0dGhpcy5kYXRhLnNldCgndXNlcnMnLGJvb3RTY2VuZURhdGE/LnVzZXJzKTtcclxuXHRcdHRoaXMuZGF0YS5zZXQoJ2NoYXJhY3RlcnMnLCBib290U2NlbmVEYXRhPy5jaGFyYWN0ZXJzKTtcclxuXHRcdHRoaXMuZGF0YS5zZXQoJ2xldmVscycsIGJvb3RTY2VuZURhdGE/LmxldmVscyk7XHJcblxyXG5cdFx0dGhpcy5pbml0VXNlcnNDaG9pY2VzKHRoaXMuZGF0YSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGUoKSB7XHJcblxyXG5cdFx0dGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG5cdFx0dGhpcy5pbml0VGh1bWJuYWlscyh0aGlzLmRhdGEpO1xyXG5cdFx0dGhpcy5wcmludFRpdGxlcygpO1xyXG5cdFx0dGhpcy5wcmludFRleHRzKCk7XHJcblxyXG5cdFx0Ly8gU2xpZGUgYnV0dG9uIG7CsDEuIFRoaXMgaXMgd2hlcmUgVXNlciAxIG9yIDIgY2hvb3NlIHRoZSBsZXZlbC4gXHJcblx0XHQvLyBNb2RpZmllcyB0aGUgbGV2ZWwgdGh1bWJuYWlsIHRleHR1cmUgKHdpdGggdGV4dHVyZSBrZXlzKSBvbiBjbGljay5cclxuXHRcdEd1aS5zbGlkZUJ0bih7IFxyXG5cdFx0XHRzY2VuZTogdGhpcywgXHJcblx0XHRcdHg6IDIwMCxcclxuXHRcdFx0eTogNDUwLFxyXG5cdFx0XHR0ZXh0OiBcIlN1aXZhbnRcIixcclxuXHRcdFx0aW1nOiB0aGlzLmxldmVsVGh1bWIsXHJcblx0XHRcdHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmxldmVscy5tYXAobGV2ZWwgPT4gbGV2ZWwudGh1bWJuYWlsS2V5KSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHRmb3IgKGNvbnN0IGxldmVsIG9mIHRoaXMuZGF0YS52YWx1ZXMubGV2ZWxzKSB7XHJcblx0XHRcdFx0XHRpZiAobGV2ZWwudGh1bWJuYWlsS2V5ID09PSB0aGlzLmxldmVsVGh1bWIudGV4dHVyZS5rZXkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlID0gbGV2ZWw7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0ubGV2ZWxJbnN0YW5jZSA9IGxldmVsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gU2xpZGUgYnV0dG9uIG7CsDIuIFRoaXMgaXMgd2hlcmUgVXNlciAxIGNob29zZSBpdHMgY2hhcmFjdGVyLiBcclxuXHRcdC8vIE1vZGlmaWVzIHRoZSB0ZXh0dXJlIG9mIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlsIG7CsDEgb24gY2xpY2suXHJcblx0XHRHdWkuc2xpZGVCdG4oeyBcclxuXHRcdFx0c2NlbmU6IHRoaXMsIFxyXG5cdFx0XHR4OiA2NTAsIFxyXG5cdFx0XHR5OiAzNzAsIFxyXG5cdFx0XHR0ZXh0OiBcIlN1aXZhbnRcIixcclxuXHRcdFx0aW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1swXSxcclxuXHRcdFx0dGV4dHVyZUtleXM6IHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycy5tYXAoYyA9PiBjLnRodW1ibmFpbEtleSksXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBjaCBvZiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMpIHtcclxuXHRcdFx0XHRcdGlmIChjaC50aHVtYm5haWxLZXkgPT09IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzBdLnRleHR1cmUua2V5KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0uY2hhcmFjdGVySW5zdGFuY2UgPSBjaDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFNsaWRlIGJ1dHRvbiBuwrAzLiBUaGlzIGlzIHdoZXJlIFVzZXIgMiBjaG9vc2UgaXRzIGNoYXJhY3Rlci4gXHJcblx0XHQvLyBNb2RpZmllcyB0aGUgdGV4dHVyZSBvZiB0aGUgY2hhcmFjdGVyIHRodW1ibmFpbCBuwrAyIG9uIGNsaWNrLlxyXG5cdFx0R3VpLnNsaWRlQnRuKHsgXHJcblx0XHRcdHNjZW5lOiB0aGlzLCBcclxuXHRcdFx0eDogODUwLCBcclxuXHRcdFx0eTogMzcwLCBcclxuXHRcdFx0dGV4dDogXCJTdWl2YW50XCIsXHJcblx0XHRcdGltZzogdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMV0sXHJcblx0XHRcdHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMubWFwKGMgPT4gYy50aHVtYm5haWxLZXkpLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdGZvciAoY29uc3QgY2ggb2YgdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzKSB7XHJcblx0XHRcdFx0XHRpZiAoY2gudGh1bWJuYWlsS2V5ID09PSB0aGlzLmNoYXJhY3RlclRodW1ic1sxXS50ZXh0dXJlLmtleSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlID0gY2g7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBTZXQgdGhlIE1PRElGSUVEIHVzZXJzIGRhdGEgZnJvbSB0aGUgYm9vdCBzY2VuZSB0byB0aGlzIGFjdHVhbCBzY2VuZS5cclxuXHRcdC8vIE1vZGlmaWVkLCBiZWNhdXNlIGxldmVsIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBoYXMgYmVlbiBsaW5rZWQgdG9cclxuXHRcdC8vIGVhY2ggdXNlcnMgdGhhbmtzIHRvIHRoZSBzbGlkZSBidXR0b25zIGNhbGxiYWNrcyBhbmQgdGhlIHRodW1ibmFpbHMuXHJcblx0XHR0aGlzLmRhdGEuc2V0KCd1c2VycycsIHRoaXMuZGF0YS52YWx1ZXMudXNlcnMpO1xyXG5cclxuXHRcdEd1aS5tYWluQnRuKHtcclxuXHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdHRleHQ6IFwiU1RBUlRcIixcclxuXHRcdFx0c3RvcFNvdW5kczogdHJ1ZSxcclxuXHRcdFx0c2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcblx0XHRcdG5ld1NjZW5lS2V5OiAnR2FtZScsXHJcblx0XHRcdC8vIFNlbmRpbmcgdGhpcyBzY2VuZSdzIGRhdGEgKD0gdXNlcnMpIHRvIHRoZSBnYW1lIHNjZW5lLlxyXG5cdFx0XHRzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKVxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL0Jvb3RTY2VuZSc7XHJcbmltcG9ydCB7IE1lbnVTY2VuZSB9IGZyb20gJy4vTWVudVNjZW5lJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9HYW1lU2NlbmUnO1xyXG5pbXBvcnQgeyBHYW1lb3ZlclNjZW5lIH0gZnJvbSAnLi9HYW1lb3ZlclNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHRCb290U2NlbmUsXHJcblx0TWVudVNjZW5lLFxyXG5cdEdhbWVTY2VuZSxcclxuXHRHYW1lb3ZlclNjZW5lXHJcbl07IiwiLyoqXHJcbiAqIFBhcnNlIHRoZSBob2FmaWdodCBzZXJpYWxpemVkIGhvYWZpZ2h0IG9iamVjdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gKiBJZiB0aGVyZSdzIG5vIGhvYWZpZ2h0IG9iamVjdCBwcmVzZW50IGl0IHJldHVybnMgbnVsbCBhbmQgZmFrZSB1c2VycyBwcm9maWxlc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgaW5zdGVhZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZWRTdG9yYWdlKCkge1xyXG5cdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9hZmlnaHQnKSkge1xyXG5cdFx0Y29uc3QgaGYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9hZmlnaHQnKTtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoaGYpO1xyXG5cdFx0cmV0dXJuIHBhcnNlZDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==