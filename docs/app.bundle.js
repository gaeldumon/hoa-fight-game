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

/** @format */
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
                    prefix: "walk-side-armed",
                    start: 1,
                    end: 4,
                    zeroPad: 2,
                }),
                frameRate: 10,
                repeat: -1,
            });
            params.scene.anims.create({
                key: tk + "WALK_SHOOT",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "walk-side-shoot",
                    start: 1,
                    end: 4,
                    zeroPad: 2,
                }),
                repeat: -1,
            });
            params.scene.anims.create({
                key: tk + "IDLE",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "idle-front-armed",
                    start: 1,
                    end: 4,
                    zeroPad: 2,
                }),
                frameRate: 10,
                repeat: -1,
            });
            params.scene.anims.create({
                key: tk + "IDLE_SHOOT",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "idle-front-shoot",
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: -1,
            });
            params.scene.anims.create({
                key: tk + "HIT",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "hit",
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1,
            });
            params.scene.anims.create({
                key: tk + "DEAD",
                frames: params.scene.anims.generateFrameNames(tk, {
                    prefix: "dead",
                    start: 1,
                    end: 1,
                    zeroPad: 2,
                }),
                repeat: 1,
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

/** @format */
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
    var rawGrid = exports.loadFile(pFilePath);
    return rawGrid.split("\n").map(function (item) { return item.split(""); });
};
exports.COLORS = {
    customBlue: { string: "#4346f9", hex: 0x4346f9 },
    customGreen: { string: "#76ea64", hex: 0x76ea64 },
    vibrantGreen: { string: "#25f945", hex: 0x25f945 },
    customRed: { string: "#ea2d23", hex: 0xea2d23 },
    white: { string: "#ffffff", hex: 0xffffff },
};
exports.CONTROLKEYS = {
    PLAYER: {
        SET1: {
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            jump: Phaser.Input.Keyboard.KeyCodes.UP,
            shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT,
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.S,
            shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
        },
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: "Hoa Fight",
    type: Phaser.AUTO,
    scale: {
        width: 1024,
        height: 640,
    },
    input: {
        gamepad: true,
        keyboard: true,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0,
            },
            debug: false,
        },
    },
    dom: {
        createContainer: true,
    },
    parent: "game",
    scene: scenes_1.default,
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

/** @format */
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

/**
 * This class represent a Game Character, not to be confused with the "Player".
 * A Player integrates a Character. A Character is just about holding data :
 * texture keys, metadata, voices etc. Nothing to be controlled with your
 * keyboard here.
 *
 * @format
 */
Object.defineProperty(exports, "__esModule", { value: true });
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

/** @format */
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
        params.scene.add
            .dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 100, "button", Gui.mainBtnStyle, params.text)
            .addListener("click")
            .on("click", function () {
            params.scene.sound.add("clickSound").play();
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
        params.scene.add
            .dom(params.x, params.y, "button", Gui.secondaryBtnStyle, params.text)
            .addListener("click")
            .on("click", function () {
            params.scene.sound.add("clickSound").play();
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
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 24, "h3", Gui.titleStyle, params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, "h4", Gui.sectionTitleStyle, params.text);
    };
    Gui.customText = function (params) {
        params.scene.add.dom(params.x, params.y, "p", Gui.basicTextStyle, params.text);
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

/** @format */
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
        return this.healthValue === 0;
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

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Hud = /** @class */ (function () {
    function Hud(params) {
        this.textStyle = "\n\t\t\tfont-family: Grobold, Arial; \n\t\t\tmargin: 0; \n\t\t\tfont-size: 18px; \n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px\n\t\t";
        if (params.user.screenSide === "left") {
            this.avatar = params.scene.add
                .image(0, 35, params.user.characterInstance.thumbnailKey)
                .setOrigin(0, 0);
            this.text = params.scene.add
                .dom(0, 0, "h5", this.textStyle, params.user.username + " | Ratio " + params.user.ratio + "%")
                .setOrigin(0, 0);
        }
        else if (params.user.screenSide === "right") {
            this.avatar = params.scene.add
                .image(helpers_1.getGameWidth(params.scene), 35, params.user.characterInstance.thumbnailKey)
                .setOrigin(1, 0);
            this.text = params.scene.add
                .dom(helpers_1.getGameWidth(params.scene), 0, "h5", this.textStyle, params.user.username + " | Ratio " + params.user.ratio + "%")
                .setOrigin(1, 0);
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

/** @format */
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
            id: this.id,
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

/** @format */
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
            ALIVE: "ALIVE",
            HURT: "HURT",
            DEAD: "DEAD",
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
        this.jumpSound = this.scene.sound.add("jumpSound");
        this.shootSound = this.scene.sound.add("shootSound");
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
        this.jumpKey = this.scene.input.keyboard.addKey(pKeys["jump"]);
        this.rightKey = this.scene.input.keyboard.addKey(pKeys["right"]);
        this.leftKey = this.scene.input.keyboard.addKey(pKeys["left"]);
        this.shootKey = this.scene.input.keyboard.addKey(pKeys["shoot"]);
    };
    Player.prototype.initHealthBar = function (pHealthBar) {
        this.healthBar = pHealthBar;
    };
    Player.prototype.initShooting = function () {
        this.lastShoot = 0;
        this._projectiles = this.scene.add.group({
            runChildUpdate: true,
        });
    };
    Player.prototype.shoot = function () {
        if (this.scene.time.now > this.lastShoot) {
            this._projectiles.add(new Projectile_1.Projectile({
                scene: this.scene,
                // Changing bullet starting point if sprite is flipped on X axis.
                x: !this.flipX ? this.x + 20 : this.x - 20,
                y: this.y + 11,
                // Bullet direction (left/right) based on last pressed key
                // (i.e direction of the player). Default: goes right.
                direction: this.lastPressedKey === this.leftKey ? -1 : 1,
                textureKey: "projectile",
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
                },
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

/** @format */
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
        if (this.x > helpers_1.getGameWidth(this.scene) ||
            this.y > helpers_1.getGameHeight(this.scene) ||
            this.x < 0 ||
            this.y < 0) {
            return true;
        }
        return false;
    };
    Projectile.prototype.initAnimations = function () {
        this.scene.anims.create({
            key: "collisionEffect1",
            frames: this.scene.anims.generateFrameNumbers("collisionEffect1", {
                start: 0,
                end: 1,
            }),
            repeat: 1,
        });
    };
    Projectile.prototype.update = function () {
        if (this.isOut()) {
            this.destroy();
            console.log("Projectile destroyed cause out of world bounds");
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

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.map = params.scene.make.tilemap({
            key: "level" + params.id,
        });
        this.tileset = this.map.addTilesetImage("level" + params.id + "-tilesheet", "level" + params.id + "Tilesheet");
        this._mainLayer = this.map.createStaticLayer("mainLayer", this.tileset, 0, 0);
        this._mainLayer.setCollisionByProperty({
            collides: true,
        });
        this.subLayer = this.map.createStaticLayer("subLayer", this.tileset, 0, 0);
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

/** @format */
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

/** @format */
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
    key: "Boot",
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
                name: "Cimetiere",
            }),
            new Level_1.Level({
                id: 2,
                name: "Prairie",
            }),
        ];
        this.users = [
            new User_1.User({
                id: ((_b = (_a = storage_1.parsedStorage()) === null || _a === void 0 ? void 0 : _a.mainUser) === null || _b === void 0 ? void 0 : _b.id) || 0,
                username: ((_d = (_c = storage_1.parsedStorage()) === null || _c === void 0 ? void 0 : _c.mainUser) === null || _d === void 0 ? void 0 : _d.username) || "Foo1",
                ratio: ((_f = (_e = storage_1.parsedStorage()) === null || _e === void 0 ? void 0 : _e.mainUser) === null || _f === void 0 ? void 0 : _f.ratio) || 0,
                screenSide: "left",
            }),
            new User_1.User({
                id: ((_h = (_g = storage_1.parsedStorage()) === null || _g === void 0 ? void 0 : _g.secondaryUser) === null || _h === void 0 ? void 0 : _h.id) || 0,
                username: ((_k = (_j = storage_1.parsedStorage()) === null || _j === void 0 ? void 0 : _j.secondaryUser) === null || _k === void 0 ? void 0 : _k.username) || "Boo2",
                ratio: ((_m = (_l = storage_1.parsedStorage()) === null || _l === void 0 ? void 0 : _l.secondaryUser) === null || _m === void 0 ? void 0 : _m.ratio) || 0,
                screenSide: "right",
            }),
        ];
        this.characters = [
            new Character_1.Character({
                id: 1,
                details: { nickname: "Stevie" },
                stats: {},
            }),
            new Character_1.Character({
                id: 2,
                details: { nickname: "Caroline" },
                stats: {},
            }),
            new Character_1.Character({
                id: 3,
                details: { nickname: "Kristof" },
                stats: {},
            }),
            new Character_1.Character({
                id: 4,
                details: { nickname: "Kristy" },
                stats: {},
            }),
            new Character_1.Character({
                id: 5,
                details: { nickname: "Oron" },
                stats: {},
            }),
            new Character_1.Character({
                id: 6,
                details: { nickname: "Alexa" },
                stats: {},
            }),
        ];
        // Using the scene Data Manager to store data on a scene level.
        this.data.set("users", this.users);
        this.data.set("characters", this.characters);
        this.data.set("levels", this.levels);
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
        this.musicTheme = this.sound.add("menuTheme");
        this.musicTheme.play();
        this.background = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "backgroundForGUIScenes");
        this.logo = this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2.5, "mainLogo");
        Gui_1.Gui.customText({
            scene: this,
            x: this.logo.x,
            y: this.logo.y + 84,
            text: "Welcome to the fight !",
        });
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "Menu",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: "Menu",
            // Passing this scene data to the menu scene.
            sceneData: this.data.getAll(),
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

/** @format */
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
    key: "Game",
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
        this.data.set("users", menuSceneData === null || menuSceneData === void 0 ? void 0 : menuSceneData.users);
        Animations_1.Animations.createCharactersAnims({
            scene: this,
            users: this.data.get("users"),
        });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.data.values.users[0].levelInstance.create(this);
        this.tilemap = this.data.values.users[0].levelInstance.tilemap;
        this.bombs = this.add.group({
            runChildUpdate: true,
        });
        this.bombCreationEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: function () {
                _this.bombs.add(new Bomb_1.Bomb({
                    scene: _this,
                    x: Phaser.Math.Between(50, helpers_1.getGameWidth(_this) - 50),
                    y: 0,
                    textureKey: "bomb",
                }));
            },
            callbackScope: this,
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
                y: 40,
            }),
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
                y: 40,
            }),
        });
        this.hud1 = new Hud_1.Hud({
            scene: this,
            user: this.data.values.users[0],
        });
        this.hud2 = new Hud_1.Hud({
            scene: this,
            user: this.data.values.users[1],
        });
        this.setColliders();
        // This is where we have user<-->player concordance
        this.data.values.users[0].playerInstance = this.player1;
        this.data.values.users[1].playerInstance = this.player2;
        this.data.set("users", this.data.values.users);
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
            this.data.set("winner", this.winner);
            // Three seconds delay before launching the next scene
            this.newSceneTimedEvent = this.time.addEvent({
                delay: 3000,
                callback: function () {
                    _this.sound.stopAll();
                    _this.scene.start("Gameover", _this.data.getAll());
                },
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

/** @format */
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
    key: "Gameover",
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
            localStorage.setItem("hoafight", JSON.stringify(parsedUsers));
        }
    };
    GameoverScene.prototype.init = function (gameSceneData) {
        if (gameSceneData.winner) {
            this.data.set("winner", gameSceneData.winner);
            this.mainMessage = this.data.values.winner.username + " remporte la partie !";
            this.handlingStorage();
        }
        else {
            this.mainMessage = "Oups on dirait qu'il n'y ai pas de gagnant !";
        }
    };
    GameoverScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "backgroundForGUIScenes");
        Gui_1.Gui.title({ scene: this, text: "Fin De Partie" });
        Gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 200,
            text: this.mainMessage,
        });
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "REJOUER",
            stopSounds: false,
            scenePlugin: this.scene,
            newSceneKey: "Menu",
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

/** @format */
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
    key: "Menu",
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
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "backgroundForGUIScenes");
    };
    MenuScene.prototype.initThumbnails = function (data) {
        // Init the terrain thumbnail on the 1st level.
        this.levelThumb = this.add.image(200, 300, data.values.levels[0].thumbnailKey);
        // Init the 2 characters thumbnails on the 1st character.
        this.characterThumbs = [
            this.add.image(650, 300, data.values.characters[0].thumbnailKey),
            this.add.image(850, 300, data.values.characters[0].thumbnailKey),
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
        this.data.set("users", bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.users);
        this.data.set("characters", bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.characters);
        this.data.set("levels", bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.levels);
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
            },
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
            },
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
            },
        });
        // Set the MODIFIED users data from the boot scene to this actual scene.
        // Modified, because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set("users", this.data.values.users);
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: "Game",
            // Sending this scene's data (= users) to the game scene.
            sceneData: this.data.getAll(),
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

/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var BootScene_1 = __webpack_require__(/*! ./BootScene */ "./src/scenes/BootScene.ts");
var MenuScene_1 = __webpack_require__(/*! ./MenuScene */ "./src/scenes/MenuScene.ts");
var GameScene_1 = __webpack_require__(/*! ./GameScene */ "./src/scenes/GameScene.ts");
var GameoverScene_1 = __webpack_require__(/*! ./GameoverScene */ "./src/scenes/GameoverScene.ts");
exports.default = [BootScene_1.BootScene, MenuScene_1.MenuScene, GameScene_1.GameScene, GameoverScene_1.GameoverScene];


/***/ }),

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Parse the hoafight serialized hoafight object from the local storage.
 * If there's no hoafight object present it returns null and fake users profiles
 * will be created instead.
 *
 * @format
 */
Object.defineProperty(exports, "__esModule", { value: true });
function parsedStorage() {
    if (localStorage.getItem("hoafight")) {
        var hf = localStorage.getItem("hoafight");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvQm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9DaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVGlsZW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9Vc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvQm9vdFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvR2FtZVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvR2FtZW92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL01lbnVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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aEIsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLHlEQUF5RDtZQUN6RCxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQWxKOEIsTUFBTSxDQUFDLEtBQUssR0FrSjFDO0FBbEpZLDhCQUFTOzs7Ozs7Ozs7Ozs7OztBQ2hCdEIsY0FBYzs7QUFFZCxzRkFBd0M7QUFDeEMsc0ZBQXdDO0FBQ3hDLHNGQUF3QztBQUN4QyxrR0FBZ0Q7QUFFaEQsa0JBQWUsQ0FBQyxxQkFBUyxFQUFFLHFCQUFTLEVBQUUscUJBQVMsRUFBRSw2QkFBYSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDUGhFOzs7Ozs7R0FNRzs7QUFFSCxTQUFnQixhQUFhO0lBQ3pCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNsQyxJQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsT0FBTyxNQUFNLENBQUM7S0FDakI7U0FBTTtRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBUkQsc0NBUUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25zIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHBhcmFtcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBwYXJhbXMudXNlcnMpIHtcclxuICAgICAgICAgICAgbGV0IHRrID0gdXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5O1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfVdBTEtgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIndhbGstc2lkZS1hcm1lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogNCxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9V0FMS19TSE9PVGAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwid2Fsay1zaWRlLXNob290XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfUlETEVgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtYXJtZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfUlETEVfU0hPT1RgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtc2hvb3RcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SElUYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJoaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31ERUFEYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJkZWFkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgd2lkdGggb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgd2lkdGggb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgcmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuICAgIGxldCByYXdHcmlkID0gbG9hZEZpbGUocEZpbGVQYXRoKTtcclxuICAgIHJldHVybiByYXdHcmlkLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5zcGxpdChcIlwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgY3VzdG9tQmx1ZTogeyBzdHJpbmc6IFwiIzQzNDZmOVwiLCBoZXg6IDB4NDM0NmY5IH0sXHJcbiAgICBjdXN0b21HcmVlbjogeyBzdHJpbmc6IFwiIzc2ZWE2NFwiLCBoZXg6IDB4NzZlYTY0IH0sXHJcbiAgICB2aWJyYW50R3JlZW46IHsgc3RyaW5nOiBcIiMyNWY5NDVcIiwgaGV4OiAweDI1Zjk0NSB9LFxyXG4gICAgY3VzdG9tUmVkOiB7IHN0cmluZzogXCIjZWEyZDIzXCIsIGhleDogMHhlYTJkMjMgfSxcclxuICAgIHdoaXRlOiB7IHN0cmluZzogXCIjZmZmZmZmXCIsIGhleDogMHhmZmZmZmYgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuICAgIFBMQVlFUjoge1xyXG4gICAgICAgIFNFVDE6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBTRVQyOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxyXG4gICAgICAgICAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuaW1wb3J0IFNjZW5lcyBmcm9tIFwiLi9zY2VuZXNcIjtcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogXCJIb2EgRmlnaHRcIixcclxuXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgIGhlaWdodDogNjQwLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIGdhbWVwYWQ6IHRydWUsXHJcbiAgICAgICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImFyY2FkZVwiLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBncmF2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZG9tOiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxyXG5cclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9tYiBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy54IDwgMCB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuICAgICAgICB0aGlzLnNldEdyYXZpdHlZKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJvbWIgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIEdhbWUgQ2hhcmFjdGVyLCBub3QgdG8gYmUgY29uZnVzZWQgd2l0aCB0aGUgXCJQbGF5ZXJcIi5cclxuICogQSBQbGF5ZXIgaW50ZWdyYXRlcyBhIENoYXJhY3Rlci4gQSBDaGFyYWN0ZXIgaXMganVzdCBhYm91dCBob2xkaW5nIGRhdGEgOlxyXG4gKiB0ZXh0dXJlIGtleXMsIG1ldGFkYXRhLCB2b2ljZXMgZXRjLiBOb3RoaW5nIHRvIGJlIGNvbnRyb2xsZWQgd2l0aCB5b3VyXHJcbiAqIGtleWJvYXJkIGhlcmUuXHJcbiAqXHJcbiAqIEBmb3JtYXRcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAgIC8vIFZlcnkgaW1wb3J0YW50IGZpZWxkLCB0aWdodGx5IGxpbmtlZCB0byB0aGUga2V5cyB5b3UgcHJvdmlkZSBpbiBwYWNrLmpzb25cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGV0YWlsczogb2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0czogb2JqZWN0O1xyXG4gICAgLy8gRmllbGRzIGJ1aWx0IHVwb24gdGhlIElkIHByb3ZpZGVkIGF0IGluc3RhbmNpYXRpb24uXHJcbiAgICBwcml2YXRlIF90ZXh0dXJlS2V5OiBzdHJpbmc7XHJcbiAgICAvLyBDaGFyYWN0ZXIncyBhdmF0YXJcclxuICAgIHByaXZhdGUgX3RodW1ibmFpbEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc291bmRLZXk6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRleHR1cmVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZUtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRodW1ibmFpbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzb3VuZEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZEtleTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgaWQ6IG51bWJlcjsgZGV0YWlscz86IG9iamVjdDsgc3RhdHM/OiBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gcGFyYW1zLmRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHBhcmFtcy5zdGF0cztcclxuICAgICAgICB0aGlzLl90ZXh0dXJlS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1gO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9QXZhdGFyYDtcclxuICAgICAgICB0aGlzLl9zb3VuZEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9U291bmRgO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBmb3IgR1VJIGVsZW1lbnRzIHN1Y2ggYXMgYWN0aW9ucyBidXR0b25zIGFuZCB0aXRsZXMuXHJcbiAqIEl0IHJlbGllcyBvbiBQaGFzZXIgZ2FtZSBvYmplY3RzIERPTSBlbGVtZW50cywgc28gdGhlc2UgR1VJIGVsZW1lbnRzIGFyZVxyXG4gKiBodG1sIGFuZCBjc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgbWFpbkJ0blN0eWxlID0gYFxyXG5cdFx0d2lkdGg6IDE1MHB4OyBcclxuXHRcdGhlaWdodDogNDlweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCxBcmlhbDsgXHJcblx0XHRjb2xvcjogIzAwMDAwMDsgXHJcblx0XHRmb250LXNpemU6IDI1cHg7IFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjMDAwXHJcblx0YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gYFxyXG5cdFx0d2lkdGg6IDEwMHB4OyBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG5cdFx0Y29sb3I6ICMwMDAwMDA7IFxyXG5cdFx0Zm9udC1zaXplOiAxN3B4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7IFxyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgIzAwMFxyXG5cdGA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0aXRsZVN0eWxlID0gYGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdGZvbnQtc2l6ZTogNDBweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc2VjdGlvblRpdGxlU3R5bGUgPSBgXHJcblx0XHRjb2xvcjogI2ZmZmZmZjsgXHJcblx0XHRmb250LXNpemU6IDMwcHg7IFxyXG5cdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmXHJcblx0YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJhc2ljVGV4dFN0eWxlID0gYFxyXG5cdFx0Y29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0Zm9udC1zaXplOiAyMHB4OyBcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZcclxuXHRgO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgc3R5bGl6ZWQgQnV0dG9uIERPTSBFbGVtZW50IHdpdGggYSBjbGljayBldmVudCBsaXN0ZW5lciBhdHRhY2hlZFxyXG4gICAgICogdG8gaXQuIFRoZSBldmVudCBsaXN0ZW5lciBjYWxsYmFjayBzdGFydHMgYSBuZXcgc2NlbmUgdXNpbmcgdGhlIHNjZW5lIGtleVxyXG4gICAgICogcGFzc2VkIGluIGFyZ3VtZW50cyBhbmQgc3RvcHMgYWxsIHNvdW5kcyBpZiBzdG9wU291bmRzIHNldCB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1haW5CdG4ocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgc3RvcFNvdW5kczogYm9vbGVhbjtcclxuICAgICAgICBzY2VuZVBsdWdpbjogUGhhc2VyLlNjZW5lcy5TY2VuZVBsdWdpbjtcclxuICAgICAgICBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgICAgIHNjZW5lRGF0YT86IG9iamVjdDtcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSkgLSAxMDAsXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLm1haW5CdG5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZExpc3RlbmVyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLnNvdW5kLmFkZChcImNsaWNrU291bmRcIikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KHBhcmFtcy5uZXdTY2VuZUtleSwgcGFyYW1zLnNjZW5lRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG4gICAgICogb25lIGJ5IG9uZS4gTGlrZSBhIHNsaWRlc2hvdy5cclxuICAgICAqIEBwYXJhbSBpbWc6IGEgcGhhc2VyIGdhbWUgb2JqZWN0IGltYWdlIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGluIGEgd2F5LlxyXG4gICAgICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzbGlkZUJ0bihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGltZzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgICAgIHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrPzogRnVuY3Rpb247XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLnNlY29uZGFyeUJ0blN0eWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuYWRkTGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuYWRkKFwiY2xpY2tTb3VuZFwiKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHBhcmFtcy50ZXh0dXJlS2V5cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmltZy5zZXRUZXh0dXJlKHBhcmFtcy50ZXh0dXJlS2V5c1tjdXJyZW50SW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgdGV4dDogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICAyNCxcclxuICAgICAgICAgICAgXCJoM1wiLFxyXG4gICAgICAgICAgICBHdWkudGl0bGVTdHlsZSxcclxuICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VjdGlvblRpdGxlKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgXCJoNFwiLFxyXG4gICAgICAgICAgICBHdWkuc2VjdGlvblRpdGxlU3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGN1c3RvbVRleHQocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHBhcmFtcy55LFxyXG4gICAgICAgICAgICBcInBcIixcclxuICAgICAgICAgICAgR3VpLmJhc2ljVGV4dFN0eWxlLFxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIHtcclxuICAgIHByaXZhdGUgYmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVhbHRoVmFsdWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcGVyY2VudGFnZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBkZWNyZWFzZShwQW1vdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlIC09IHBBbW91bnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhWYWx1ZSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMucGVyY2VudGFnZSAqIHRoaXMuaGVhbHRoVmFsdWUpO1xyXG4gICAgICAgIC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgLy8gRXF1aXZhbGVudCB0byB0aGlzLmJhciA9IHBhcmFtcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKVxyXG4gICAgICAgIHRoaXMuYmFyID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcyhwYXJhbXMuc2NlbmUpO1xyXG4gICAgICAgIHRoaXMueCA9IHBhcmFtcy54O1xyXG4gICAgICAgIHRoaXMueSA9IHBhcmFtcy55O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMjtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMTAwO1xyXG4gICAgICAgIHRoaXMucGVyY2VudGFnZSA9IDEwMCAvIDEwMDtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcblxyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcy5iYXIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh1ZCB7XHJcbiAgICBwcml2YXRlIGF2YXRhcjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuICAgIHByaXZhdGUgdGV4dFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHVzZXI6IFVzZXIgfSkge1xyXG4gICAgICAgIHRoaXMudGV4dFN0eWxlID0gYFxyXG5cdFx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWw7IFxyXG5cdFx0XHRtYXJnaW46IDA7IFxyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7IFxyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0cGFkZGluZzogMTBweFxyXG5cdFx0YDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmltYWdlKDAsIDM1LCBwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXkpXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGAke3BhcmFtcy51c2VyLnVzZXJuYW1lfSB8IFJhdGlvICR7cGFyYW1zLnVzZXIucmF0aW99JWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcbiAgICAgICAgICAgICAgICAgICAgMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaDVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICBgJHtwYXJhbXMudXNlci51c2VybmFtZX0gfCBSYXRpbyAke3BhcmFtcy51c2VyLnJhdGlvfSVgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuL1RpbGVtYXBcIjtcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIExldmVsIGNvbnNpc3RzIG9mIDogYSBiYWNrZ3JvdW5kICsgYSBtdXNpYyB0aGVtZSArIGEgdGlsZW1hcCArIGEgbmFtZSArXHJcbiAqIGEgdGh1bWJuYWlsLlxyXG4gKiBJdCBpbml0cyB0aGUgZGlmZmVyZW50IGtleXMgbmVlZGVkIGFuZCBjcmVhdGVzL2RyYXcgdGhlIGJhY2tncm91bmQsXHJcbiAqIHRoZSB0aWxlbWFwIChieSBpbnN0YW5jaWF0ZSBpdCkgYW5kIHBsYXkgdGhlIG11c2ljIHRoZW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExldmVsIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RpbGVtYXA6IFRpbGVtYXA7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtdXNpY0tleTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGlsZW1hcCgpOiBUaWxlbWFwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGlsZW1hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRodW1ibmFpbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kS2V5ID0gYGxldmVsJHt0aGlzLmlkfUJhY2tncm91bmRgO1xyXG4gICAgICAgIHRoaXMubXVzaWNLZXkgPSBgbGV2ZWwke3RoaXMuaWR9VGhlbWVgO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBsZXZlbCR7dGhpcy5pZH1UaHVtYm5haWxgO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShzY2VuZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl90aWxlbWFwID0gbmV3IFRpbGVtYXAoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKHRoaXMubXVzaWNLZXkpLnBsYXkoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuL1Byb2plY3RpbGVcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vSGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSBfcHJvamVjdGlsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSByaWdodEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgc2hvb3RLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwcml2YXRlIGxhc3RQcmVzc2VkS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuICAgIHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBzaG9vdFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIHByaXZhdGUgbGFzdFNob290OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2eDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncmF2aXR5WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm91bmNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJ1bGxldFByb29mOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RBVEVTID0ge1xyXG4gICAgICAgIEFMSVZFOiBcIkFMSVZFXCIsXHJcbiAgICAgICAgSFVSVDogXCJIVVJUXCIsXHJcbiAgICAgICAgREVBRDogXCJERUFEXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgcHJvamVjdGlsZXMoKTogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdGlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaHVydCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRQcm9vZiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5kZWNyZWFzZSgyMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZUJ1bGxldFByb29mKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bGxldFByb29mID09PSBmYWxzZSkgdGhpcy5idWxsZXRQcm9vZiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U291bmRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJqdW1wU291bmRcIik7XHJcbiAgICAgICAgdGhpcy5zaG9vdFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJzaG9vdFNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFZpdGFscygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmJ1bGxldFByb29mID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHlZID0gMTAwMDtcclxuICAgICAgICB0aGlzLmp1bXBWZWxvY2l0eSA9IC02MDA7XHJcbiAgICAgICAgdGhpcy52eCA9IDE1MDtcclxuICAgICAgICB0aGlzLmJvdW5jZSA9IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0R3Jhdml0eVkodGhpcy5ncmF2aXR5WSk7XHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UodGhpcy5ib3VuY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdENvbnRyb2xzKHBLZXlzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5qdW1wS2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJqdW1wXCJdKTtcclxuICAgICAgICB0aGlzLnJpZ2h0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJyaWdodFwiXSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJsZWZ0XCJdKTtcclxuICAgICAgICB0aGlzLnNob290S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJzaG9vdFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0SGVhbHRoQmFyKHBIZWFsdGhCYXI6IEhlYWx0aEJhcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTaG9vdGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxhc3RTaG9vdCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdGlsZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUudGltZS5ub3cgPiB0aGlzLmxhc3RTaG9vdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0aWxlcy5hZGQoXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvamVjdGlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgYnVsbGV0IHN0YXJ0aW5nIHBvaW50IGlmIHNwcml0ZSBpcyBmbGlwcGVkIG9uIFggYXhpcy5cclxuICAgICAgICAgICAgICAgICAgICB4OiAhdGhpcy5mbGlwWCA/IHRoaXMueCArIDIwIDogdGhpcy54IC0gMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy55ICsgMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVsbGV0IGRpcmVjdGlvbiAobGVmdC9yaWdodCkgYmFzZWQgb24gbGFzdCBwcmVzc2VkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChpLmUgZGlyZWN0aW9uIG9mIHRoZSBwbGF5ZXIpLiBEZWZhdWx0OiBnb2VzIHJpZ2h0LlxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5sZWZ0S2V5ID8gLTEgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVLZXk6IFwicHJvamVjdGlsZVwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvb3QgPSB0aGlzLnNjZW5lLnRpbWUubm93ICsgNTAwO1xyXG4gICAgICAgICAgICAvLyBQbGF5aW5nIHNvdW5kIGhlcmUgZW5zdXJlcyB1cyBpdCBpcyBwbGF5ZWQgb25seSBvbmNlIGV2ZXJ5IHNob290LlxyXG4gICAgICAgICAgICB0aGlzLnNob290U291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsaXBwaW5nIHRoZSBzcHJpdGUgb24gaXRzIFggYXhpcywgZGVwZW5kaW5nIG9uIHdoaWNoIGRpcmVjdGlvbiB5b3UgZ28uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VkIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIGxlZnQuXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5yaWdodEtleSkge1xyXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyByaWdodC5cclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0LlxyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlSnVtcGluZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5qdW1wS2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5LmJsb2NrZWQuZG93biB8fCB0aGlzLmJvZHkudG91Y2hpbmcuZG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVkodGhpcy5qdW1wVmVsb2NpdHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlSWRsaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVgLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gSWRsaW5nLVNob290aW5nLlxyXG4gICAgICAgIGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFX1NIT09UYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgd2Fsa2luZyBBTkQgd2Fsa2luZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMgYW5kIHJlbWVtYmVyaW5nIGxhc3QgcHJlc3NlZCBrZXkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlV2Fsa2luZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1XQUxLYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIFdhbGtpbmcgOiBnb2luZyByaWdodFxyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCh0aGlzLnZ4KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMucmlnaHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdhbGtpbmcgOiBnb2luZyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoLXRoaXMudngpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RQcmVzc2VkS2V5ID0gdGhpcy5sZWZ0S2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2Fsa2luZy1TaG9vdGluZ1xyXG4gICAgICAgIGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1XQUxLX1NIT09UYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICBjb250cm9sS2V5czogb2JqZWN0O1xyXG4gICAgICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpdGFscygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEhlYWx0aEJhcihwYXJhbXMuaGVhbHRoQmFyKTtcclxuICAgICAgICB0aGlzLmluaXRTaG9vdGluZygpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblxyXG4gICAgICAgIC8vIFJlc3RyYWluIHRoZSBib3VuZGluZ0JveFxyXG4gICAgICAgIHRoaXMuc2V0U2l6ZSgyMCwgNjApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkFMSVZFKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFUy5ERUFEO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuQUxJVkUpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBkZXRhY2hlZCBmcm9tIHRoZSBvdGhlciBibG9jayBiZWNhdXNlIHlvdSBjYW4gZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgLy8gd2hpbGUganVtcGluZzogd2Fsay93YWxrLXNob290LCBpZGxlL2lkbGUtc2hvb3QuIFNvIGl0IGlzbid0XHJcbiAgICAgICAgICAgIC8vIGRlcGVuZGFudCBvZiB3aGV0aGVyIHlvdSdyZSBwcmVzc2luZyBsZWZ0IG9yIHJpZ2h0IG9yIHdoYXRldmVyLlxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUp1bXBpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdhbGtpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkhVUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SElUYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgbGVhZHMgdG8gaHVydCBhbmltIGJ1Z1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5BTElWRSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkRFQUQpIHtcclxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgcmVzZXQgc3RhdGUgdG8gQUxJVkUgY2F1c2UgaXQncyBlbmQgb2YgdGhlIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9REVBRGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIFBsYXllciBTdGF0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSB2eDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy54IDwgMCB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QW5pbWF0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJjb2xsaXNpb25FZmZlY3QxXCIsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImNvbGxpc2lvbkVmZmVjdDFcIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6IDEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy52eCA9IDcwMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnZ4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0aWxlIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG4gICAgcHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG4gICAgcHJpdmF0ZSB0aWxlc2V0OiBQaGFzZXIuVGlsZW1hcHMuVGlsZXNldDtcclxuICAgIHByaXZhdGUgX21haW5MYXllcjogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllcjtcclxuICAgIHByaXZhdGUgc3ViTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBsYXllciB0aGF0IGNvbGxpZGVzOiAnY29sbGlkZXMnIHNldCB0byB0cnVlIGluIFRpbGVkLlxyXG4gICAgICovXHJcbiAgICBnZXQgbWFpbkxheWVyKCk6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IGlkOiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gcGFyYW1zLnNjZW5lLm1ha2UudGlsZW1hcCh7XHJcbiAgICAgICAgICAgIGtleTogYGxldmVsJHtwYXJhbXMuaWR9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKFxyXG4gICAgICAgICAgICBgbGV2ZWwke3BhcmFtcy5pZH0tdGlsZXNoZWV0YCxcclxuICAgICAgICAgICAgYGxldmVsJHtwYXJhbXMuaWR9VGlsZXNoZWV0YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX21haW5MYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG4gICAgICAgICAgICBcIm1haW5MYXllclwiLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzZXQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluTGF5ZXIuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgIGNvbGxpZGVzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YkxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoXHJcbiAgICAgICAgICAgIFwic3ViTGF5ZXJcIixcclxuICAgICAgICAgICAgdGhpcy50aWxlc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL0xldmVsXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuL0d1aVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yYXRpbzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYXZhdGFyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zY3JlZW5TaWRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9jaGFyYWN0ZXJJbnN0YW5jZTogQ2hhcmFjdGVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVySW5zdGFuY2U6IFBsYXllcjtcclxuICAgIHByaXZhdGUgX2xldmVsSW5zdGFuY2U6IExldmVsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlcidzIGlkIGZyb20gREIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VyJ3MgdXNlcm5hbWUgZnJvbSBEQi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZXIncyByYXRpbyBmcm9tIERCLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHJhdGlvKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NyZWVuU2lkZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5TaWRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcmFjdGVyIHRoZSB1c2VyIGhhcyBjaG9zZW4gaW4gdGhlIE1lbnUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2hhcmFjdGVySW5zdGFuY2UoKTogQ2hhcmFjdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcmFjdGVySW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5ZXIgY3JlYXRlZCBpbiBHYW1lIFNjZW5lIGJhc2VkIG9uIFVzZXIncyBjaGFyYWN0ZXIgY2hvaWNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllckluc3RhbmNlKCk6IFBsYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGV2ZWwgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudSwgbWFrZXMgbW9yZSBzZW5zZSB3aGVuIHBsYXlpbmcgc29sby5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsZXZlbEluc3RhbmNlKCk6IExldmVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNoYXJhY3Rlckluc3RhbmNlKHY6IENoYXJhY3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2NoYXJhY3Rlckluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHBsYXllckluc3RhbmNlKHY6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMuX3BsYXllckluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxldmVsSW5zdGFuY2UodjogTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLl9sZXZlbEluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcmF0aW86IG51bWJlcjtcclxuICAgICAgICBzY3JlZW5TaWRlOiBzdHJpbmc7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSBwYXJhbXMudXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5fcmF0aW8gPSBwYXJhbXMucmF0aW87XHJcbiAgICAgICAgdGhpcy5fc2NyZWVuU2lkZSA9IHBhcmFtcy5zY3JlZW5TaWRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9vYmplY3RzL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gXCIuLi9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJCb290XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbGV2ZWxzOiBBcnJheTxMZXZlbD47XHJcbiAgICBwcml2YXRlIHVzZXJzOiBBcnJheTxVc2VyPjtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuXHJcbiAgICBwcml2YXRlIGxvZ286IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgYnRuOiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBtdXNpY1RoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxzID0gW1xyXG4gICAgICAgICAgICBuZXcgTGV2ZWwoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNpbWV0aWVyZVwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IExldmVsKHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQcmFpcmllXCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMudXNlcnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgICAgIGlkOiBwYXJzZWRTdG9yYWdlKCk/Lm1haW5Vc2VyPy5pZCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHBhcnNlZFN0b3JhZ2UoKT8ubWFpblVzZXI/LnVzZXJuYW1lIHx8IFwiRm9vMVwiLFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHBhcnNlZFN0b3JhZ2UoKT8ubWFpblVzZXI/LnJhdGlvIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5TaWRlOiBcImxlZnRcIixcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICBuZXcgVXNlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogcGFyc2VkU3RvcmFnZSgpPy5zZWNvbmRhcnlVc2VyPy5pZCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlcj8udXNlcm5hbWUgfHwgXCJCb28yXCIsXHJcbiAgICAgICAgICAgICAgICByYXRpbzogcGFyc2VkU3RvcmFnZSgpPy5zZWNvbmRhcnlVc2VyPy5yYXRpbyB8fCAwLFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuU2lkZTogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIlN0ZXZpZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJDYXJvbGluZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdG9mXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIktyaXN0eVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJPcm9uXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIkFsZXhhXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gVXNpbmcgdGhlIHNjZW5lIERhdGEgTWFuYWdlciB0byBzdG9yZSBkYXRhIG9uIGEgc2NlbmUgbGV2ZWwuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIHRoaXMudXNlcnMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJjaGFyYWN0ZXJzXCIsIHRoaXMuY2hhcmFjdGVycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImxldmVsc1wiLCB0aGlzLmxldmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQucGFjayhcInByZWxvYWRcIiwgXCJhc3NldHMvcGFjay5qc29uXCIsIFwicHJlbG9hZFwiKTtcclxuXHJcbiAgICAgICAgLy8gUHJlbG9hZCBhbGwgY2hhcmFjdGVycyBhdGxhc2VzIDogYSBqc29uIGZpbGUgdGhhdCBhY3RzIGFzXHJcbiAgICAgICAgLy8gYXMgYSBcIm1hcFwiL1wibGlua1wiIHRvIGEgcG5nIHNwcml0ZXNoZWV0LlxyXG4gICAgICAgIC8vIFVzZWQgZm9yIGRyYXdpbmcgUExheWVyIHRleHR1cmUgYW5kIHNldCBhbmltYXRpb25zLlxyXG4gICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDw9IDY7IG4rKykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQuYXRsYXMoXHJcbiAgICAgICAgICAgICAgICBgY2hhcmFjdGVyJHtufWAsXHJcbiAgICAgICAgICAgICAgICBgYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlciR7bn0vY2hhcmFjdGVyJHtufS1zcHJpdGVzaGVldC5wbmdgLFxyXG4gICAgICAgICAgICAgICAgYGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tYXRsYXMuanNvbmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKFwibWVudVRoZW1lXCIpO1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ28gPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIuNSxcclxuICAgICAgICAgICAgXCJtYWluTG9nb1wiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgR3VpLmN1c3RvbVRleHQoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogdGhpcy5sb2dvLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMubG9nby55ICsgODQsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiV2VsY29tZSB0byB0aGUgZmlnaHQgIVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHdWkubWFpbkJ0bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk1lbnVcIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBuZXdTY2VuZUtleTogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhpcyBzY2VuZSBkYXRhIHRvIHRoZSBtZW51IHNjZW5lLlxyXG4gICAgICAgICAgICBzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBDT05UUk9MS0VZUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEJvbWIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Cb21iXCI7XHJcbmltcG9ydCB7IEh1ZCB9IGZyb20gXCIuLi9vYmplY3RzL0h1ZFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4uL29iamVjdHMvSGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL29iamVjdHMvTGV2ZWxcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9vYmplY3RzL1VzZXJcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9ucyB9IGZyb20gXCIuLi9BbmltYXRpb25zXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJHYW1lXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIEdhbWUgU2NlbmUgaXMgd2hlcmUgYWxsIHRoZSBhY3Rpb25zIHRha2VzIHBsYWNlLlxyXG4gKiBBY3RvcnMgc3VjaCBhcyBQbGF5ZXIsIEJvbWJzIGFuZCBCb21iIGFyZSBpbnN0YW5jaWF0ZWQuXHJcbiAqIFN0YXRpYyBlbGVtZW50cyBzdWNoIGFzIEhVRHMgYW5kIEhlYWx0aEJhcnMgKHZpYSBQbGF5ZXIpIGFyZSBpbnN0YW5jaWF0ZWQuXHJcbiAqIExldmVsIGlzIGNyZWF0ZWQgKG5vdCBpbnN0YW5jaWF0ZWQpLCB3aGljaCBiYXNpY2FsbHkgbWVhbnMgdGhhdCBUaWxlbWFwIGlzXHJcbiAqIGRyYXduLiBDb2xsaWRlcnMgYmV0d2VlbiBhY3RvcnMgYXJlIGhhbmRsZWQuIFBsYXllciBhbmltYXRpb25zIGFyZSBjcmVhdGVkLlxyXG4gKiBJdCBzZXRzIGEgU2NlbmUgV2lubmVyIHdoZW4gb25lIG9mIHRoZSB1c2VycyBQTEFZRVIgSU5TVEFOQ0VTIGlzIGRlYWQgYW5kXHJcbiAqIHRoZW4gc3RhcnQgdGhlIG5ldyBzY2VuZSAoR2FtZW92ZXIgU2NlbmUpLlxyXG4gKiBJdCB0YWtlcyB0aGUgZGF0YSBvYmplY3QgZnJvbSB0aGUgTWVudSBTY2VuZSAoY29tcG9zZWQgb2YgYW4gYXJyYXkgb2YgdXNlcnMpLFxyXG4gKiBhdmFpbGFibGUgaGVyZSBpbiB0aGUgaW5pdCgpIGV0IGNyZWF0ZSgpIGNhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXIxOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHBsYXllcjI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgaHVkMTogSHVkO1xyXG4gICAgcHJpdmF0ZSBodWQyOiBIdWQ7XHJcbiAgICBwcml2YXRlIHRpbGVtYXA6IExldmVsW1widGlsZW1hcFwiXTtcclxuICAgIHByaXZhdGUgYm9tYnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgYm9tYkNyZWF0aW9uRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgICBwcml2YXRlIG5ld1NjZW5lVGltZWRFdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuICAgIHByaXZhdGUgd2lubmVyOiBVc2VyO1xyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlkZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy50aWxlbWFwLm1haW5MYXllcik7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJvbWJzLCB0aGlzLnBsYXllcjEsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmh1cnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ib21icy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy5wbGF5ZXIyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5odXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYnMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICBbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEsXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5wcm9qZWN0aWxlcyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIsXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChtZW51U2NlbmVEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIG1lbnVTY2VuZURhdGE/LnVzZXJzKTtcclxuXHJcbiAgICAgICAgQW5pbWF0aW9ucy5jcmVhdGVDaGFyYWN0ZXJzQW5pbXMoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdXNlcnM6IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlLmNyZWF0ZSh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5sZXZlbEluc3RhbmNlLnRpbGVtYXA7XHJcblxyXG4gICAgICAgIHRoaXMuYm9tYnMgPSB0aGlzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJvbWJDcmVhdGlvbkV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDIwMDAsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvbWJzLmFkZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQm9tYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBQaGFzZXIuTWF0aC5CZXR3ZWVuKDUwLCBnZXRHYW1lV2lkdGgodGhpcykgLSA1MCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVLZXk6IFwiYm9tYlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDMwMCxcclxuICAgICAgICAgICAgeTogMzAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMSxcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgeDogNjAsXHJcbiAgICAgICAgICAgICAgICB5OiA0MCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogOTAwLFxyXG4gICAgICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0uY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleSxcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQyLFxyXG4gICAgICAgICAgICBoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcykgLSAxNjIsXHJcbiAgICAgICAgICAgICAgICB5OiA0MCxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHVkMSA9IG5ldyBIdWQoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odWQyID0gbmV3IEh1ZCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldENvbGxpZGVycygpO1xyXG5cclxuICAgICAgICAvLyBUaGlzIGlzIHdoZXJlIHdlIGhhdmUgdXNlcjwtLT5wbGF5ZXIgY29uY29yZGFuY2VcclxuICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgIHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0ucGxheWVySW5zdGFuY2UgPSB0aGlzLnBsYXllcjI7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCB0aGlzLmRhdGEudmFsdWVzLnVzZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyMi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gV2lubmVyIGhhbmRsaW5nLlxyXG4gICAgICAgIC8vIEVudGVyIHdpbm5lciBoYW5kbGluZyBtb2RlIGlmIG9uZSBvZiB0aGUgcGxheWVyIGlzIGRlYWQuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5pc0RlYWQoKSB8fCB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgLy8gTWFrZSBwbGF5ZXJzIGludmljaWJsZSB3aGlsZSB3YWl0aW5nIGZvciB0aGUgbmV4dCBzY2VuZSB0byBzdGFydC5cclxuICAgICAgICAgICAgLy8gVGhpcyB3YXkgd2UgZG9uJ3QgaGF2ZSB0byBwYXVzZSBwaHlzaWNzIGJ1dCB0aGUgd2lubmVyIGlzIG5vdFxyXG4gICAgICAgICAgICAvLyBraWxsZWQgYnkgdGhlIGJvbWJzIHRoYXQgYXJlIHN0aWxsIGZhbGxpbmcuXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5tYWtlQnVsbGV0UHJvb2YoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLm1ha2VCdWxsZXRQcm9vZigpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVjaWRpbmcgd2hpY2ggb25lIGlzIHRoZSB3aW5uZXIgKHRoZSBvbmUgbm90IGRlYWQpLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmICF0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIFdpbm5lcnMgYXJlIHVzZXJzIG5vdCBwbGF5ZXJzLlxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lciA9IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIyLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTnVsbGluZyB0aGUgd2lubmVyIGlmIHRoZXJlJ3Mgbm8gd2lubmVyIGF0IGFsbFxyXG4gICAgICAgICAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgc2hvdWxkbid0IGV2ZXIgaGFwcGVuIGJ1dCB3aG8ga25vd3MuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpbiBuZXh0IHNjZW5lIGlmIHdpbm5lciBpcyB0cnV0aHksIHByaW50aW5nIGFsdCB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBub3QgKGxpa2UgaWYgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ3aW5uZXJcIiwgdGhpcy53aW5uZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhyZWUgc2Vjb25kcyBkZWxheSBiZWZvcmUgbGF1bmNoaW5nIHRoZSBuZXh0IHNjZW5lXHJcbiAgICAgICAgICAgIHRoaXMubmV3U2NlbmVUaW1lZEV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwiR2FtZW92ZXJcIiwgdGhpcy5kYXRhLmdldEFsbCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSBcIi4uL29iamVjdHMvR3VpXCI7XHJcbmltcG9ydCB7IHBhcnNlZFN0b3JhZ2UgfSBmcm9tIFwiLi4vc3RvcmFnZVwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZW92ZXJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lb3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbWFpbk1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGluZ1N0b3JhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHBhcnNlZFN0b3JhZ2UoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVc2VycyA9IHBhcnNlZFN0b3JhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudmFsdWVzLndpbm5lci5pZCA9PT0gcGFyc2VkVXNlcnMubWFpblVzZXIuaWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFVzZXJzPy5tYWluVXNlcj8ubWF0Y2hzPy5wdXNoKHsgd2luOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkVXNlcnM/LnNlY29uZGFyeVVzZXI/Lm1hdGNocz8ucHVzaCh7IHdpbjogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLndpbm5lci5pZCA9PT0gcGFyc2VkVXNlcnMuc2Vjb25kYXJ5VXNlci5pZFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFVzZXJzPy5zZWNvbmRhcnlVc2VyPy5tYXRjaHM/LnB1c2goeyB3aW46IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRVc2Vycz8ubWFpblVzZXI/Lm1hdGNocz8ucHVzaCh7IHdpbjogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBhbmQgc2V0IGluIHN0b3JhZ2UgdGhlIG5ld2x5IHVwZGF0ZWQgdXNlcnMgb2JqZWN0c1xyXG4gICAgICAgICAgICAvLyB3aXRoIHRoZWlyIGNvcnJlc3BvbmRpbmcgbWF0Y2hzIHB1c2hlZCBlbnRyaWVzLlxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhvYWZpZ2h0XCIsIEpTT04uc3RyaW5naWZ5KHBhcnNlZFVzZXJzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZ2FtZVNjZW5lRGF0YSkge1xyXG4gICAgICAgIGlmIChnYW1lU2NlbmVEYXRhLndpbm5lcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwid2lubmVyXCIsIGdhbWVTY2VuZURhdGEud2lubmVyKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVzc2FnZSA9IGAke3RoaXMuZGF0YS52YWx1ZXMud2lubmVyLnVzZXJuYW1lfSByZW1wb3J0ZSBsYSBwYXJ0aWUgIWA7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxpbmdTdG9yYWdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVzc2FnZSA9IFwiT3VwcyBvbiBkaXJhaXQgcXUnaWwgbid5IGFpIHBhcyBkZSBnYWduYW50ICFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJGaW4gRGUgUGFydGllXCIgfSk7XHJcblxyXG4gICAgICAgIEd1aS5jdXN0b21UZXh0KHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IDIwMCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5tYWluTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJSRUpPVUVSXCIsXHJcbiAgICAgICAgICAgIHN0b3BTb3VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiTWVudVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIk1lbnVcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHNjZW5lIGlzIHdoZXJlIHRoZSB0d28gcGxheWVycyBjaG9vc2UgdGhlIHRlcnJhaW4vbWFwIHRoZXkgd2lsbCBwbGF5IG9uLFxyXG4gKiBhbmQgdGhlIGNoYXJhY3RlcnMgdGhleSB3aWxsIHBsYXkgd2l0aC5cclxuICogSXQgbWFpbmx5IHVzZXMgbWV0aG9kcyBmcm9tIHRoZSBHdWkgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbGV2ZWxUaHVtYjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJUaHVtYnM6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZT47XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3QmFja2dyb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZEZvckdVSVNjZW5lc1wiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRUaHVtYm5haWxzKGRhdGEpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHRoZSB0ZXJyYWluIHRodW1ibmFpbCBvbiB0aGUgMXN0IGxldmVsLlxyXG4gICAgICAgIHRoaXMubGV2ZWxUaHVtYiA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgZGF0YS52YWx1ZXMubGV2ZWxzWzBdLnRodW1ibmFpbEtleVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgdGhlIDIgY2hhcmFjdGVycyB0aHVtYm5haWxzIG9uIHRoZSAxc3QgY2hhcmFjdGVyLlxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyVGh1bWJzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmFkZC5pbWFnZSg2NTAsIDMwMCwgZGF0YS52YWx1ZXMuY2hhcmFjdGVyc1swXS50aHVtYm5haWxLZXkpLFxyXG4gICAgICAgICAgICB0aGlzLmFkZC5pbWFnZSg4NTAsIDMwMCwgZGF0YS52YWx1ZXMuY2hhcmFjdGVyc1swXS50aHVtYm5haWxLZXkpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludFRpdGxlcygpOiB2b2lkIHtcclxuICAgICAgICBHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJNRU5VXCIgfSk7XHJcbiAgICAgICAgR3VpLnNlY3Rpb25UaXRsZSh7IHNjZW5lOiB0aGlzLCB4OiAyMDAsIHk6IDEzMCwgdGV4dDogXCJUZXJyYWluXCIgfSk7XHJcbiAgICAgICAgR3VpLnNlY3Rpb25UaXRsZSh7IHNjZW5lOiB0aGlzLCB4OiA3NTAsIHk6IDEzMCwgdGV4dDogXCJQZXJzb25uYWdlc1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRUZXh0cygpOiB2b2lkIHtcclxuICAgICAgICBHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA2NTAsIHk6IDIxMCwgdGV4dDogXCJKb3VldXIgMVwiIH0pO1xyXG4gICAgICAgIEd1aS5jdXN0b21UZXh0KHsgc2NlbmU6IHRoaXMsIHg6IDg1MCwgeTogMjEwLCB0ZXh0OiBcIkpvdWV1ciAyXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZWQgdGhlIGNob2ljZXMgb24gdGhlIDFzdCBlbGVtZW50cyBvZiB0aGUgdGVycmFpbiBhbmQgdGhlXHJcbiAgICAvLyBjaGFyYWN0ZXJzLiBUaGlzIHdheSBpZiB0aGUgcGxheWVycyBkb2Vzbid0IGNsaWNrIG9uIGFueXRoaW5nIHRoZXkgc3RpbGxcclxuICAgIC8vIGhhdmUgdGVycmFpbiBhbmQgY2hhcmFjdGVycyBpbnN0YW5jZXMgYXR0YWNoZWQuXHJcbiAgICBwcml2YXRlIGluaXRVc2Vyc0Nob2ljZXMoZGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBkYXRhLnZhbHVlcy51c2Vycykge1xyXG4gICAgICAgICAgICB1c2VyLmxldmVsSW5zdGFuY2UgPSBkYXRhLnZhbHVlcy5sZXZlbHNbMF07XHJcbiAgICAgICAgICAgIHVzZXIuY2hhcmFjdGVySW5zdGFuY2UgPSBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChib290U2NlbmVEYXRhKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgRVMyMDIwIG9wdGlvbm5hbCBjaGFpbmluZyAoaS5lIHRoZSA/KSB0byBjaGVjayBpZiB0aGUgZGF0YVxyXG4gICAgICAgIC8vIG9iamVjdCBjb21pbmcgZnJvbSB0aGUgYm9vdCBzY2VuZSBoYXMgdGhlIHJpZ2h0IHVzZXJzLCBjaGFyYWN0ZXJzIGFuZFxyXG4gICAgICAgIC8vIGxldmVscyBmaWVsZHMuXHJcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgZGF0YSBmcm9tIHRoZSBib290IHNjZW5lIHRvIHRoaXMgc2NlbmUncyBkYXRhLlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBib290U2NlbmVEYXRhPy51c2Vycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImNoYXJhY3RlcnNcIiwgYm9vdFNjZW5lRGF0YT8uY2hhcmFjdGVycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImxldmVsc1wiLCBib290U2NlbmVEYXRhPy5sZXZlbHMpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRVc2Vyc0Nob2ljZXModGhpcy5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRodW1ibmFpbHModGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLnByaW50VGl0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5wcmludFRleHRzKCk7XHJcblxyXG4gICAgICAgIC8vIFNsaWRlIGJ1dHRvbiBuwrAxLiBUaGlzIGlzIHdoZXJlIFVzZXIgMSBvciAyIGNob29zZSB0aGUgbGV2ZWwuXHJcbiAgICAgICAgLy8gTW9kaWZpZXMgdGhlIGxldmVsIHRodW1ibmFpbCB0ZXh0dXJlICh3aXRoIHRleHR1cmUga2V5cykgb24gY2xpY2suXHJcbiAgICAgICAgR3VpLnNsaWRlQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDIwMCxcclxuICAgICAgICAgICAgeTogNDUwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlN1aXZhbnRcIixcclxuICAgICAgICAgICAgaW1nOiB0aGlzLmxldmVsVGh1bWIsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmxldmVscy5tYXAoXHJcbiAgICAgICAgICAgICAgICAobGV2ZWwpID0+IGxldmVsLnRodW1ibmFpbEtleVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiB0aGlzLmRhdGEudmFsdWVzLmxldmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbC50aHVtYm5haWxLZXkgPT09IHRoaXMubGV2ZWxUaHVtYi50ZXh0dXJlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXS5sZXZlbEluc3RhbmNlID0gbGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTbGlkZSBidXR0b24gbsKwMi4gVGhpcyBpcyB3aGVyZSBVc2VyIDEgY2hvb3NlIGl0cyBjaGFyYWN0ZXIuXHJcbiAgICAgICAgLy8gTW9kaWZpZXMgdGhlIHRleHR1cmUgb2YgdGhlIGNoYXJhY3RlciB0aHVtYm5haWwgbsKwMSBvbiBjbGljay5cclxuICAgICAgICBHdWkuc2xpZGVCdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogNjUwLFxyXG4gICAgICAgICAgICB5OiAzNzAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU3VpdmFudFwiLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzBdLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5czogdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzLm1hcCgoYykgPT4gYy50aHVtYm5haWxLZXkpLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoLnRodW1ibmFpbEtleSA9PT0gdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMF0udGV4dHVyZS5rZXlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5jaGFyYWN0ZXJJbnN0YW5jZSA9IGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2xpZGUgYnV0dG9uIG7CsDMuIFRoaXMgaXMgd2hlcmUgVXNlciAyIGNob29zZSBpdHMgY2hhcmFjdGVyLlxyXG4gICAgICAgIC8vIE1vZGlmaWVzIHRoZSB0ZXh0dXJlIG9mIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlsIG7CsDIgb24gY2xpY2suXHJcbiAgICAgICAgR3VpLnNsaWRlQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDg1MCxcclxuICAgICAgICAgICAgeTogMzcwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlN1aXZhbnRcIixcclxuICAgICAgICAgICAgaW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1sxXSxcclxuICAgICAgICAgICAgdGV4dHVyZUtleXM6IHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycy5tYXAoKGMpID0+IGMudGh1bWJuYWlsS2V5KSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaC50aHVtYm5haWxLZXkgPT09IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzFdLnRleHR1cmUua2V5XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0uY2hhcmFjdGVySW5zdGFuY2UgPSBjaDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgTU9ESUZJRUQgdXNlcnMgZGF0YSBmcm9tIHRoZSBib290IHNjZW5lIHRvIHRoaXMgYWN0dWFsIHNjZW5lLlxyXG4gICAgICAgIC8vIE1vZGlmaWVkLCBiZWNhdXNlIGxldmVsIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBoYXMgYmVlbiBsaW5rZWQgdG9cclxuICAgICAgICAvLyBlYWNoIHVzZXJzIHRoYW5rcyB0byB0aGUgc2xpZGUgYnV0dG9ucyBjYWxsYmFja3MgYW5kIHRoZSB0aHVtYm5haWxzLlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCB0aGlzLmRhdGEudmFsdWVzLnVzZXJzKTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJTVEFSVFwiLFxyXG4gICAgICAgICAgICBzdG9wU291bmRzOiB0cnVlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiR2FtZVwiLFxyXG4gICAgICAgICAgICAvLyBTZW5kaW5nIHRoaXMgc2NlbmUncyBkYXRhICg9IHVzZXJzKSB0byB0aGUgZ2FtZSBzY2VuZS5cclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tIFwiLi9NZW51U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tIFwiLi9HYW1lb3ZlclNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBNZW51U2NlbmUsIEdhbWVTY2VuZSwgR2FtZW92ZXJTY2VuZV07XHJcbiIsIi8qKlxyXG4gKiBQYXJzZSB0aGUgaG9hZmlnaHQgc2VyaWFsaXplZCBob2FmaWdodCBvYmplY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICogSWYgdGhlcmUncyBubyBob2FmaWdodCBvYmplY3QgcHJlc2VudCBpdCByZXR1cm5zIG51bGwgYW5kIGZha2UgdXNlcnMgcHJvZmlsZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBmb3JtYXRcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VkU3RvcmFnZSgpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvYWZpZ2h0XCIpKSB7XHJcbiAgICAgICAgY29uc3QgaGYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvYWZpZ2h0XCIpO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoaGYpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=