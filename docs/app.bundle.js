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
    black: { string: "#000000", hex: 0x000000 }
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
            jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shoot: Phaser.Input.Keyboard.KeyCodes.E,
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
        this._details = params.details;
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
    Object.defineProperty(Character.prototype, "details", {
        get: function () {
            return this._details;
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
            .dom(helpers_1.getGameWidth(params.scene) / 2, helpers_1.getGameHeight(params.scene) - 90, "button", Gui.mainBtnStyle, params.text)
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
    Gui.mainBtnStyle = "\n\t\theight: 50px; \n\t\tfont-family: Grobold, monospace, Arial; \n\t\tcolor: #000000; \n\t\tfont-size: 25px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000\n\t";
    Gui.secondaryBtnStyle = "\n\t\twidth: 100px; \n\t\theight: 33px; \n\t\tfont-family: Grobold, monospace, Arial; \n\t\tcolor: #000000; \n\t\tfont-size: 17px; \n\t\tborder-radius: 4px;\n\t\tbackground-color: #fff; \n\t\tborder: 2px solid #000\n\t";
    Gui.titleStyle = "color: #ffffff; \n\t\tfont-size: 40px; \n\t\tfont-family: Grobold, Arial, sans-serif";
    Gui.sectionTitleStyle = "\n\t\tcolor: #ffffff; \n\t\tfont-size: 30px; \n\t\tfont-family: Grobold, Arial, sans-serif\n\t";
    Gui.basicTextStyle = "\n\t\tcolor: #ffffff; \n\t\tfont-size: 20px; \n\t\tfont-family: Grobold, Arial, sans-serif\n\t";
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
        this.bar = params.scene.add.graphics();
        this.width = 200;
        this.height = 16;
        this.healthValue = 200;
        if (params.side === "left") {
            this.x = 60;
            this.y = 40;
        }
        else if (params.side === "right") {
            this.x = (helpers_1.getGameWidth(params.scene)) - this.width - 64;
            this.y = 40;
        }
        else {
            throw new Error("Side must be 'right' or 'left'");
        }
        this.draw();
    }
    HealthBar.prototype.decrease = function (pAmount) {
        this.healthValue -= pAmount * 2;
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
        if (this.healthValue > 60) {
            this.bar.fillStyle(helpers_1.COLORS.customBlue.hex);
        }
        else {
            this.bar.fillStyle(helpers_1.COLORS.customRed.hex);
        }
        var healthWidth = Math.floor(this.healthValue);
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
                .dom(0, 0, "h5", this.textStyle, params.user.characterInstance.details.nickname + " | " +
                params.user.username +
                " | Ratio " + params.user.ratio + "%")
                .setOrigin(0, 0);
        }
        else if (params.user.screenSide === "right") {
            this.avatar = params.scene.add
                .image(helpers_1.getGameWidth(params.scene), 35, params.user.characterInstance.thumbnailKey)
                .setOrigin(1, 0);
            this.text = params.scene.add
                .dom(helpers_1.getGameWidth(params.scene), 0, "h5", this.textStyle, params.user.characterInstance.details.nickname + " | " +
                params.user.username +
                " | Ratio " + params.user.ratio + "%")
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

/***/ "./src/objects/LoadingBar.ts":
/*!***********************************!*\
  !*** ./src/objects/LoadingBar.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar = /** @class */ (function () {
    function LoadingBar(params) {
        this.scene = params.scene;
        this.bar = this.scene.add.graphics();
        this.barWidth = 400;
        this.barHeight = 30;
        this.barX = (helpers_1.getGameWidth(this.scene) / 2) - (this.barWidth / 2);
        this.barY = (helpers_1.getGameHeight(this.scene) / 2) - (this.barHeight / 2);
        this.barColor = helpers_1.COLORS.customBlue.hex;
        this.barAlpha = 0.8;
        this.box = this.scene.add.graphics();
        this.boxWidth = this.barWidth + 10;
        this.boxHeight = this.barHeight + 10;
        this.boxX = (helpers_1.getGameWidth(this.scene) / 2) - (this.boxWidth / 2);
        this.boxY = (helpers_1.getGameHeight(this.scene) / 2) - (this.boxHeight / 2);
        this.boxColor = helpers_1.COLORS.white.hex;
        this.boxAlpha = 0.3;
        this.box.fillStyle(this.boxColor, this.boxAlpha);
        this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
        this.text = this.scene.make.text({
            x: helpers_1.getGameWidth(this.scene) / 2,
            y: (helpers_1.getGameHeight(this.scene) / 2) + 40,
            text: "Loading...",
            style: {
                font: '20px monospace',
                fill: helpers_1.COLORS.white.string
            }
        });
        this.text.setOrigin(0.5, 0.5);
        this._progressText = this.scene.make.text({
            x: (helpers_1.getGameWidth(this.scene) / 2),
            y: (helpers_1.getGameHeight(this.scene) / 2),
            text: "0%",
            style: {
                font: '18px monospace',
                fill: helpers_1.COLORS.white.string
            }
        });
        this._progressText.setOrigin(0.5, 0.5);
    }
    Object.defineProperty(LoadingBar.prototype, "progressText", {
        get: function () {
            return this._progressText;
        },
        enumerable: true,
        configurable: true
    });
    LoadingBar.prototype.draw = function (pValue) {
        this.bar.clear();
        this.bar.fillStyle(this.barColor, this.barAlpha);
        this.bar.fillRect(this.barX, this.barY, this.barWidth * pValue, this.barHeight);
    };
    LoadingBar.prototype.destroy = function () {
        this.bar.destroy();
        this.box.destroy();
        this.text.destroy();
        this.progressText.destroy();
    };
    return LoadingBar;
}());
exports.LoadingBar = LoadingBar;


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
var LoadingBar_1 = __webpack_require__(/*! ../objects/LoadingBar */ "./src/objects/LoadingBar.ts");
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
                username: ((_d = (_c = storage_1.parsedStorage()) === null || _c === void 0 ? void 0 : _c.mainUser) === null || _d === void 0 ? void 0 : _d.username) || "PoolGhoul",
                ratio: ((_f = (_e = storage_1.parsedStorage()) === null || _e === void 0 ? void 0 : _e.mainUser) === null || _f === void 0 ? void 0 : _f.ratio) || 0,
                screenSide: "left",
            }),
            new User_1.User({
                id: ((_h = (_g = storage_1.parsedStorage()) === null || _g === void 0 ? void 0 : _g.secondaryUser) === null || _h === void 0 ? void 0 : _h.id) || 0,
                username: ((_k = (_j = storage_1.parsedStorage()) === null || _j === void 0 ? void 0 : _j.secondaryUser) === null || _k === void 0 ? void 0 : _k.username) || "JollyClever",
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
        var _this = this;
        this.load.pack("preload", "assets/pack.json", "preload");
        // Preload all characters atlases : a json file that acts as
        // as a "map"/"link" to a png spritesheet.
        // Used for drawing PLayer texture and set animations.
        for (var n = 1; n <= 6; n++) {
            this.load.atlas("character" + n, "assets/images/characters/character" + n + "/character" + n + "-spritesheet.png", "assets/images/characters/character" + n + "/character" + n + "-atlas.json");
        }
        this.loadingBar = new LoadingBar_1.LoadingBar({ scene: this });
        this.load.on("progress", function (value) {
            _this.loadingBar.draw(value);
            _this.loadingBar.progressText.setText((Math.floor(value * 100)) + "%");
        });
        this.load.on("complete", function () {
            _this.loadingBar.destroy();
        });
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
        this.physics.add.collider(this.player1.projectiles, this.tilemap.mainLayer, function () {
            _this.player1.projectiles.getFirstAlive().destroy();
        });
        this.physics.add.collider(this.player2.projectiles, this.tilemap.mainLayer, function () {
            _this.player2.projectiles.getFirstAlive().destroy();
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
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET2,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
                side: "left"
            }),
        });
        this.player2 = new Player_1.Player({
            scene: this,
            x: 900,
            y: 300,
            textureKey: this.data.values.users[1].characterInstance.textureKey,
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET1,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
                side: "right"
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
            this.mainMessage = this.data.values.winner.username + " WON !";
            this.handlingStorage();
        }
        else {
            this.mainMessage = "IT'S A DRAW !";
        }
    };
    GameoverScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "backgroundForGUIScenes");
        Gui_1.Gui.title({ scene: this, text: "END OF GAME" });
        Gui_1.Gui.customText({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: helpers_1.getGameHeight(this) / 2,
            text: this.mainMessage,
        });
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "PLAY AGAIN",
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
        Gui_1.Gui.sectionTitle({ scene: this, x: 200, y: 130, text: "TERRAIN" });
        Gui_1.Gui.sectionTitle({ scene: this, x: 750, y: 130, text: "CHARACTERS" });
    };
    MenuScene.prototype.printTexts = function () {
        var player1Keys = "\n\t\t\tRight  : D\n\t\t\tLeft   : Q\n\t\t\tShoot  : E\n\t\t\tJump   : SPACE\n\t\t";
        var player2Keys = "\n\t\t\tRight  : \u2192\n\t\t\tLeft   : \u2190\n\t\t\tShoot  : SHIFT\n\t\t\tJump   : \u2191\n\t\t";
        Gui_1.Gui.customText({ scene: this, x: 650, y: 210, text: "PLAYER 1" });
        Gui_1.Gui.customText({ scene: this, x: 850, y: 210, text: "PLAYER 2" });
        Gui_1.Gui.customText({ scene: this, x: 650, y: 420, text: player1Keys });
        Gui_1.Gui.customText({ scene: this, x: 850, y: 420, text: player2Keys });
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
            text: "NEXT",
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
            text: "NEXT",
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
            text: "NEXT",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvQm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9DaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTG9hZGluZ0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9UaWxlbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9Cb290U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9HYW1lU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9HYW1lb3ZlclNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWVudVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQztBQUVXLGNBQU0sR0FBRztJQUNsQixVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDaEQsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBQ2pELFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtJQUNsRCxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUU7SUFDbEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFO0lBQzNDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtDQUMzQyxDQUFDO0FBRVcsbUJBQVcsR0FBRztJQUN2QixNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDRixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDM0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3pDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2QyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7U0FDOUM7UUFFRCxJQUFJLEVBQUU7WUFDRixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsSUFBSSxFQUFFLE1B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QUFTLEVBQUUscUJBQVMsRUFBRSxxQkFBUyxFQUFFLDZCQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNQaEU7Ozs7OztHQU1HOztBQUVILFNBQWdCLGFBQWE7SUFDekIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2xDLElBQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixPQUFPLE1BQU0sQ0FBQztLQUNqQjtTQUFNO1FBQ0gsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUM7QUFSRCxzQ0FRQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDaGFyYWN0ZXJzQW5pbXMocGFyYW1zKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHBhcmFtcy51c2Vycykge1xyXG4gICAgICAgICAgICBsZXQgdGsgPSB1c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9V0FMS2AsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwid2Fsay1zaWRlLWFybWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31XQUxLX1NIT09UYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJ3YWxrLXNpZGUtc2hvb3RcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SURMRWAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiaWRsZS1mcm9udC1hcm1lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogNCxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SURMRV9TSE9PVGAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiaWRsZS1mcm9udC1zaG9vdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMSxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31ISVRgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImhpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMSxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IDEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfURFQURgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImRlYWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkIGEgZmlsZSBpbiBhamF4IGFuZCByZXR1cm4gaXRzIHJlc3BvbnNlIHRleHQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGggUGF0aCB0byB0aGUgZGVzaXJlZCBmaWxlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZEZpbGUgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IHJhd0ZpbGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGxldCByZXN1bHQ6IHN0cmluZztcclxuXHJcbiAgICByYXdGaWxlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbXBvc3NpYmxlIHRvIGxvYWQgZmlsZS5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHJhd0ZpbGUuc3RhdHVzID09PSAyMDAgfHwgcmF3RmlsZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJhd0ZpbGUucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9wZW4oXCJHRVRcIiwgcEZpbGVQYXRoLCBmYWxzZSk7XHJcbiAgICByYXdGaWxlLnNlbmQobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgMmQtYXJyYXkgb2Ygc3RyaW5ncyBmcm9tIGEgd2hvbGUgdGV4dCBmaWxlIGdpdmVuIGFzIGlucHV0LlxyXG4gKiBXb3JrcyBiZXN0IGlmIHRoZSBpbnB1dCB0ZXh0IGlzIG9ubHkgY29tcG9zZWQgb2Ygc2luZ2xlIGNoYXJzIGFuZCAnXFxuJy5cclxuICogRWFjaCBmaW5hbCBhcnJheSBlbGVtZW50IHdvdWxkIGJlIG9uZSBjaGFyYWN0ZXIgb2YgdGhlIHRleHQgaW5wdXQuXHJcbiAqIEBwYXJhbSBwRmlsZVBhdGhcclxuICovXHJcbmV4cG9ydCBjb25zdCBsb2FkU3RyaW5ncyA9IChwRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ1tdW10gPT4ge1xyXG4gICAgbGV0IHJhd0dyaWQgPSBsb2FkRmlsZShwRmlsZVBhdGgpO1xyXG4gICAgcmV0dXJuIHJhd0dyaWQuc3BsaXQoXCJcXG5cIikubWFwKChpdGVtKSA9PiBpdGVtLnNwbGl0KFwiXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBjdXN0b21CbHVlOiB7IHN0cmluZzogXCIjNDM0NmY5XCIsIGhleDogMHg0MzQ2ZjkgfSxcclxuICAgIGN1c3RvbUdyZWVuOiB7IHN0cmluZzogXCIjNzZlYTY0XCIsIGhleDogMHg3NmVhNjQgfSxcclxuICAgIHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6IFwiIzI1Zjk0NVwiLCBoZXg6IDB4MjVmOTQ1IH0sXHJcbiAgICBjdXN0b21SZWQ6IHsgc3RyaW5nOiBcIiNlYTJkMjNcIiwgaGV4OiAweGVhMmQyMyB9LFxyXG5cdHdoaXRlOiB7IHN0cmluZzogXCIjZmZmZmZmXCIsIGhleDogMHhmZmZmZmYgfSxcclxuXHRibGFjazogeyBzdHJpbmc6IFwiIzAwMDAwMFwiLCBoZXg6IDB4MDAwMDAwIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT05UUk9MS0VZUyA9IHtcclxuICAgIFBMQVlFUjoge1xyXG4gICAgICAgIFNFVDE6IHtcclxuICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TSElGVCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBTRVQyOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlEsXHJcbiAgICAgICAgICAgIGp1bXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSxcclxuICAgICAgICAgICAgc2hvb3Q6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5FLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59O1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuaW1wb3J0IFNjZW5lcyBmcm9tIFwiLi9zY2VuZXNcIjtcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogXCJIb2EgRmlnaHRcIixcclxuXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiAxMDI0LFxyXG4gICAgICAgIGhlaWdodDogNjQwLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIGdhbWVwYWQ6IHRydWUsXHJcbiAgICAgICAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImFyY2FkZVwiLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBncmF2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZG9tOiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxyXG5cclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9tYiBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy54IDwgMCB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuICAgICAgICB0aGlzLnNldEdyYXZpdHlZKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJvbWIgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIEdhbWUgQ2hhcmFjdGVyLCBub3QgdG8gYmUgY29uZnVzZWQgd2l0aCB0aGUgXCJQbGF5ZXJcIi5cclxuICogQSBQbGF5ZXIgaW50ZWdyYXRlcyBhIENoYXJhY3Rlci4gQSBDaGFyYWN0ZXIgaXMganVzdCBhYm91dCBob2xkaW5nIGRhdGEgOlxyXG4gKiB0ZXh0dXJlIGtleXMsIG1ldGFkYXRhLCB2b2ljZXMgZXRjLiBOb3RoaW5nIHRvIGJlIGNvbnRyb2xsZWQgd2l0aCB5b3VyXHJcbiAqIGtleWJvYXJkIGhlcmUuXHJcbiAqXHJcbiAqIEBmb3JtYXRcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAgIC8vIFZlcnkgaW1wb3J0YW50IGZpZWxkLCB0aWdodGx5IGxpbmtlZCB0byB0aGUga2V5cyB5b3UgcHJvdmlkZSBpbiBwYWNrLmpzb25cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RldGFpbHM6IG9iamVjdDtcclxuICAgIHByaXZhdGUgc3RhdHM6IG9iamVjdDtcclxuICAgIC8vIEZpZWxkcyBidWlsdCB1cG9uIHRoZSBJZCBwcm92aWRlZCBhdCBpbnN0YW5jaWF0aW9uLlxyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZUtleTogc3RyaW5nO1xyXG4gICAgLy8gQ2hhcmFjdGVyJ3MgYXZhdGFyXHJcbiAgICBwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3NvdW5kS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0ZXh0dXJlS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aHVtYm5haWxLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc291bmRLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRLZXk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXQgZGV0YWlscygpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RldGFpbHM7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBpZDogbnVtYmVyOyBkZXRhaWxzPzoge25pY2tuYW1lOiBzdHJpbmd9OyBzdGF0cz86IG9iamVjdCB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl9kZXRhaWxzID0gcGFyYW1zLmRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHBhcmFtcy5zdGF0cztcclxuICAgICAgICB0aGlzLl90ZXh0dXJlS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1gO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9QXZhdGFyYDtcclxuICAgICAgICB0aGlzLl9zb3VuZEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9U291bmRgO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBmb3IgR1VJIGVsZW1lbnRzIHN1Y2ggYXMgYWN0aW9ucyBidXR0b25zIGFuZCB0aXRsZXMuXHJcbiAqIEl0IHJlbGllcyBvbiBQaGFzZXIgZ2FtZSBvYmplY3RzIERPTSBlbGVtZW50cywgc28gdGhlc2UgR1VJIGVsZW1lbnRzIGFyZVxyXG4gKiBodG1sIGFuZCBjc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgbWFpbkJ0blN0eWxlID0gYFxyXG5cdFx0aGVpZ2h0OiA1MHB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBtb25vc3BhY2UsIEFyaWFsOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMjVweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDBcclxuXHRgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc2Vjb25kYXJ5QnRuU3R5bGUgPSBgXHJcblx0XHR3aWR0aDogMTAwcHg7IFxyXG5cdFx0aGVpZ2h0OiAzM3B4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBtb25vc3BhY2UsIEFyaWFsOyBcclxuXHRcdGNvbG9yOiAjMDAwMDAwOyBcclxuXHRcdGZvbnQtc2l6ZTogMTdweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICMwMDBcclxuXHRgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGl0bGVTdHlsZSA9IGBjb2xvcjogI2ZmZmZmZjsgXHJcblx0XHRmb250LXNpemU6IDQwcHg7IFxyXG5cdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsLCBzYW5zLXNlcmlmYDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY3Rpb25UaXRsZVN0eWxlID0gYFxyXG5cdFx0Y29sb3I6ICNmZmZmZmY7IFxyXG5cdFx0Zm9udC1zaXplOiAzMHB4OyBcclxuXHRcdGZvbnQtZmFtaWx5OiBHcm9ib2xkLCBBcmlhbCwgc2Fucy1zZXJpZlxyXG5cdGA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBiYXNpY1RleHRTdHlsZSA9IGBcclxuXHRcdGNvbG9yOiAjZmZmZmZmOyBcclxuXHRcdGZvbnQtc2l6ZTogMjBweDsgXHJcblx0XHRmb250LWZhbWlseTogR3JvYm9sZCwgQXJpYWwsIHNhbnMtc2VyaWZcclxuXHRgO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgc3R5bGl6ZWQgQnV0dG9uIERPTSBFbGVtZW50IHdpdGggYSBjbGljayBldmVudCBsaXN0ZW5lciBhdHRhY2hlZFxyXG4gICAgICogdG8gaXQuIFRoZSBldmVudCBsaXN0ZW5lciBjYWxsYmFjayBzdGFydHMgYSBuZXcgc2NlbmUgdXNpbmcgdGhlIHNjZW5lIGtleVxyXG4gICAgICogcGFzc2VkIGluIGFyZ3VtZW50cyBhbmQgc3RvcHMgYWxsIHNvdW5kcyBpZiBzdG9wU291bmRzIHNldCB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1haW5CdG4ocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgc3RvcFNvdW5kczogYm9vbGVhbjtcclxuICAgICAgICBzY2VuZVBsdWdpbjogUGhhc2VyLlNjZW5lcy5TY2VuZVBsdWdpbjtcclxuICAgICAgICBuZXdTY2VuZUtleTogc3RyaW5nO1xyXG4gICAgICAgIHNjZW5lRGF0YT86IG9iamVjdDtcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSkgLSA5MCxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBHdWkubWFpbkJ0blN0eWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuYWRkTGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuYWRkKFwiY2xpY2tTb3VuZFwiKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5zdG9wU291bmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLnNvdW5kLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmVQbHVnaW4uc3RhcnQocGFyYW1zLm5ld1NjZW5lS2V5LCBwYXJhbXMuc2NlbmVEYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdXR0b24gdGhhdCBjaGFuZ2VzIGFuIGltYWdlIChpbWcpIHRleHR1cmUgd2l0aCBhbm90aGVyICh0ZXh0dXJlcyksXHJcbiAgICAgKiBvbmUgYnkgb25lLiBMaWtlIGEgc2xpZGVzaG93LlxyXG4gICAgICogQHBhcmFtIGltZzogYSBwaGFzZXIgZ2FtZSBvYmplY3QgaW1hZ2UgdGhhdCBhY3QgYXMgYSBjb250YWluZXIgaW4gYSB3YXkuXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZXM6IHRoZSB0ZXh0dXJlcyB0byBhcHBlbmQgdG8gaW1nLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNsaWRlQnRuKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgaW1nOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICAgICAgdGV4dHVyZUtleXM6IEFycmF5PHN0cmluZz47XHJcbiAgICAgICAgY2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAuZG9tKFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICBHdWkuc2Vjb25kYXJ5QnRuU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5hZGRMaXN0ZW5lcihcImNsaWNrXCIpXHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5zb3VuZC5hZGQoXCJjbGlja1NvdW5kXCIpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgcGFyYW1zLnRleHR1cmVLZXlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW1nLnNldFRleHR1cmUocGFyYW1zLnRleHR1cmVLZXlzW2N1cnJlbnRJbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuY2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRpdGxlKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB0ZXh0OiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIDI0LFxyXG4gICAgICAgICAgICBcImgzXCIsXHJcbiAgICAgICAgICAgIEd1aS50aXRsZVN0eWxlLFxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWN0aW9uVGl0bGUocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHBhcmFtcy55LFxyXG4gICAgICAgICAgICBcImg0XCIsXHJcbiAgICAgICAgICAgIEd1aS5zZWN0aW9uVGl0bGVTdHlsZSxcclxuICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3VzdG9tVGV4dChwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgIFwicFwiLFxyXG4gICAgICAgICAgICBHdWkuYmFzaWNUZXh0U3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciB7XHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aFZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlKHBBbW91bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgLT0gcEFtb3VudCAqIDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhWYWx1ZSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuaGVhbHRoVmFsdWUpO1xyXG4gICAgICAgIC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyBzaWRlOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuYmFyID0gcGFyYW1zLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjtcclxuXHRcdHRoaXMuaGVhbHRoVmFsdWUgPSAyMDA7XHJcblx0XHRcclxuXHRcdGlmIChwYXJhbXMuc2lkZSA9PT0gXCJsZWZ0XCIpIHtcclxuXHRcdFx0dGhpcy54ID0gNjA7XHJcblx0XHRcdHRoaXMueSA9IDQwO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJhbXMuc2lkZSA9PT0gXCJyaWdodFwiKSB7XHJcblx0XHRcdHRoaXMueCA9IChnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSkgLSB0aGlzLndpZHRoIC0gNjQ7XHJcblx0XHRcdHRoaXMueSA9IDQwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2lkZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnXCIpO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIdWQge1xyXG4gICAgcHJpdmF0ZSBhdmF0YXI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLkRPTUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHRleHRTdHlsZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB1c2VyOiBVc2VyIH0pIHtcclxuICAgICAgICB0aGlzLnRleHRTdHlsZSA9IGBcclxuXHRcdFx0Zm9udC1mYW1pbHk6IEdyb2JvbGQsIEFyaWFsOyBcclxuXHRcdFx0bWFyZ2luOiAwOyBcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4OyBcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHBhZGRpbmc6IDEwcHhcclxuXHRcdGA7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmF2YXRhciA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5pbWFnZSgwLCAzNSwgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5KVxyXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaDVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTdHlsZSxcclxuXHRcdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLmRldGFpbHMubmlja25hbWUgKyBcIiB8IFwiICsgXHJcblx0XHRcdFx0XHRwYXJhbXMudXNlci51c2VybmFtZSArIFxyXG5cdFx0XHRcdFx0XCIgfCBSYXRpbyBcIiArIHBhcmFtcy51c2VyLnJhdGlvICsgXCIlXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcbiAgICAgICAgICAgICAgICAgICAgMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaDVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTdHlsZSxcclxuXHRcdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLmRldGFpbHMubmlja25hbWUgKyAgXCIgfCBcIiArIFxyXG5cdFx0XHRcdFx0cGFyYW1zLnVzZXIudXNlcm5hbWUgKyBcclxuXHRcdFx0XHRcdFwiIHwgUmF0aW8gXCIgKyBwYXJhbXMudXNlci5yYXRpbyArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuL1RpbGVtYXBcIjtcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIExldmVsIGNvbnNpc3RzIG9mIDogYSBiYWNrZ3JvdW5kICsgYSBtdXNpYyB0aGVtZSArIGEgdGlsZW1hcCArIGEgbmFtZSArXHJcbiAqIGEgdGh1bWJuYWlsLlxyXG4gKiBJdCBpbml0cyB0aGUgZGlmZmVyZW50IGtleXMgbmVlZGVkIGFuZCBjcmVhdGVzL2RyYXcgdGhlIGJhY2tncm91bmQsXHJcbiAqIHRoZSB0aWxlbWFwIChieSBpbnN0YW5jaWF0ZSBpdCkgYW5kIHBsYXkgdGhlIG11c2ljIHRoZW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExldmVsIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RpbGVtYXA6IFRpbGVtYXA7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtdXNpY0tleTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGlsZW1hcCgpOiBUaWxlbWFwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGlsZW1hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRodW1ibmFpbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kS2V5ID0gYGxldmVsJHt0aGlzLmlkfUJhY2tncm91bmRgO1xyXG4gICAgICAgIHRoaXMubXVzaWNLZXkgPSBgbGV2ZWwke3RoaXMuaWR9VGhlbWVgO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBsZXZlbCR7dGhpcy5pZH1UaHVtYm5haWxgO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShzY2VuZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl90aWxlbWFwID0gbmV3IFRpbGVtYXAoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKHRoaXMubXVzaWNLZXkpLnBsYXkoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXIge1xyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIGJhclg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhclk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhcldpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJBbHBoYTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94WTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94V2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94Q29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEFscGhhOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblx0cHJpdmF0ZSBfcHJvZ3Jlc3NUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzVGV4dDtcclxuXHR9XHJcblx0XHJcbiAgICBwdWJsaWMgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmNsZWFyKCk7XHJcblx0XHR0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcblx0XHR0aGlzLmJhci5maWxsUmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCAqIHBWYWx1ZSwgdGhpcy5iYXJIZWlnaHQpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuYm94LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMudGV4dC5kZXN0cm95KCk7XHJcblx0XHR0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG5cdFx0dGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuXHRcdHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcblx0XHR0aGlzLmJhclggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYmFyV2lkdGgvMik7XHJcblx0XHR0aGlzLmJhclkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJhckhlaWdodC8yKTtcclxuXHRcdHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tQmx1ZS5oZXg7XHJcblx0XHR0aGlzLmJhckFscGhhID0gMC44O1xyXG5cdFx0XHJcblx0XHR0aGlzLmJveCA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcblx0XHR0aGlzLmJveFdpZHRoID0gdGhpcy5iYXJXaWR0aCArIDEwO1xyXG5cdFx0dGhpcy5ib3hIZWlnaHQgPSB0aGlzLmJhckhlaWdodCArIDEwO1xyXG5cdFx0dGhpcy5ib3hYID0gKGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJveFdpZHRoLzIpO1xyXG5cdFx0dGhpcy5ib3hZID0gKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMikgLSAodGhpcy5ib3hIZWlnaHQvMik7XHJcblx0XHR0aGlzLmJveENvbG9yID0gQ09MT1JTLndoaXRlLmhleDtcclxuXHRcdHRoaXMuYm94QWxwaGEgPSAwLjM7XHJcblx0XHRcclxuXHRcdHRoaXMuYm94LmZpbGxTdHlsZSh0aGlzLmJveENvbG9yLCB0aGlzLmJveEFscGhhKTtcclxuXHRcdHRoaXMuYm94LmZpbGxSZWN0KHRoaXMuYm94WCwgdGhpcy5ib3hZLCB0aGlzLmJveFdpZHRoLCB0aGlzLmJveEhlaWdodCk7XHJcblxyXG5cdFx0dGhpcy50ZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG5cdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMixcclxuXHRcdFx0eTogKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMikgKyA0MCxcclxuXHRcdFx0dGV4dDogXCJMb2FkaW5nLi4uXCIsXHJcblx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0Zm9udDogJzIwcHggbW9ub3NwYWNlJyxcclxuXHRcdFx0XHRmaWxsOiBDT0xPUlMud2hpdGUuc3RyaW5nXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG5cdFx0dGhpcy5fcHJvZ3Jlc3NUZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG5cdFx0XHR4OiAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpLCBcclxuXHRcdFx0eTogKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMiksXHJcblx0XHRcdHRleHQ6IFwiMCVcIixcclxuXHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiAnMThweCBtb25vc3BhY2UnLFxyXG5cdFx0XHRcdGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9wcm9ncmVzc1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuL1Byb2plY3RpbGVcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vSGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSBfcHJvamVjdGlsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSByaWdodEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgc2hvb3RLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwcml2YXRlIGxhc3RQcmVzc2VkS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuICAgIHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBzaG9vdFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIHByaXZhdGUgbGFzdFNob290OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2eDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncmF2aXR5WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm91bmNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJ1bGxldFByb29mOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RBVEVTID0ge1xyXG4gICAgICAgIEFMSVZFOiBcIkFMSVZFXCIsXHJcbiAgICAgICAgSFVSVDogXCJIVVJUXCIsXHJcbiAgICAgICAgREVBRDogXCJERUFEXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgcHJvamVjdGlsZXMoKTogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdGlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaHVydCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRQcm9vZiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5kZWNyZWFzZSgyMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZUJ1bGxldFByb29mKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bGxldFByb29mID09PSBmYWxzZSkgdGhpcy5idWxsZXRQcm9vZiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U291bmRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJqdW1wU291bmRcIik7XHJcbiAgICAgICAgdGhpcy5zaG9vdFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJzaG9vdFNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFZpdGFscygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmJ1bGxldFByb29mID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHlZID0gMTAwMDtcclxuICAgICAgICB0aGlzLmp1bXBWZWxvY2l0eSA9IC02MDA7XHJcbiAgICAgICAgdGhpcy52eCA9IDE1MDtcclxuICAgICAgICB0aGlzLmJvdW5jZSA9IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0R3Jhdml0eVkodGhpcy5ncmF2aXR5WSk7XHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UodGhpcy5ib3VuY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdENvbnRyb2xzKHBLZXlzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5qdW1wS2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJqdW1wXCJdKTtcclxuICAgICAgICB0aGlzLnJpZ2h0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJyaWdodFwiXSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJsZWZ0XCJdKTtcclxuICAgICAgICB0aGlzLnNob290S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJzaG9vdFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0SGVhbHRoQmFyKHBIZWFsdGhCYXI6IEhlYWx0aEJhcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTaG9vdGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxhc3RTaG9vdCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdGlsZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUudGltZS5ub3cgPiB0aGlzLmxhc3RTaG9vdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0aWxlcy5hZGQoXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvamVjdGlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgYnVsbGV0IHN0YXJ0aW5nIHBvaW50IGlmIHNwcml0ZSBpcyBmbGlwcGVkIG9uIFggYXhpcy5cclxuICAgICAgICAgICAgICAgICAgICB4OiAhdGhpcy5mbGlwWCA/IHRoaXMueCArIDIwIDogdGhpcy54IC0gMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy55ICsgMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVsbGV0IGRpcmVjdGlvbiAobGVmdC9yaWdodCkgYmFzZWQgb24gbGFzdCBwcmVzc2VkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChpLmUgZGlyZWN0aW9uIG9mIHRoZSBwbGF5ZXIpLiBEZWZhdWx0OiBnb2VzIHJpZ2h0LlxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5sZWZ0S2V5ID8gLTEgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVLZXk6IFwicHJvamVjdGlsZVwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvb3QgPSB0aGlzLnNjZW5lLnRpbWUubm93ICsgNTAwO1xyXG4gICAgICAgICAgICAvLyBQbGF5aW5nIHNvdW5kIGhlcmUgZW5zdXJlcyB1cyBpdCBpcyBwbGF5ZWQgb25seSBvbmNlIGV2ZXJ5IHNob290LlxyXG4gICAgICAgICAgICB0aGlzLnNob290U291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsaXBwaW5nIHRoZSBzcHJpdGUgb24gaXRzIFggYXhpcywgZGVwZW5kaW5nIG9uIHdoaWNoIGRpcmVjdGlvbiB5b3UgZ28uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VkIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIGxlZnQuXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5yaWdodEtleSkge1xyXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyByaWdodC5cclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0LlxyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlSnVtcGluZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5qdW1wS2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5LmJsb2NrZWQuZG93biB8fCB0aGlzLmJvZHkudG91Y2hpbmcuZG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVkodGhpcy5qdW1wVmVsb2NpdHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlSWRsaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVgLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gSWRsaW5nLVNob290aW5nLlxyXG4gICAgICAgIGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFX1NIT09UYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgd2Fsa2luZyBBTkQgd2Fsa2luZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMgYW5kIHJlbWVtYmVyaW5nIGxhc3QgcHJlc3NlZCBrZXkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlV2Fsa2luZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1XQUxLYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIFdhbGtpbmcgOiBnb2luZyByaWdodFxyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCh0aGlzLnZ4KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMucmlnaHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdhbGtpbmcgOiBnb2luZyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoLXRoaXMudngpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RQcmVzc2VkS2V5ID0gdGhpcy5sZWZ0S2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2Fsa2luZy1TaG9vdGluZ1xyXG4gICAgICAgIGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1XQUxLX1NIT09UYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICBjb250cm9sS2V5czogb2JqZWN0O1xyXG4gICAgICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpdGFscygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEhlYWx0aEJhcihwYXJhbXMuaGVhbHRoQmFyKTtcclxuICAgICAgICB0aGlzLmluaXRTaG9vdGluZygpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblxyXG4gICAgICAgIC8vIFJlc3RyYWluIHRoZSBib3VuZGluZ0JveFxyXG4gICAgICAgIHRoaXMuc2V0U2l6ZSgyMCwgNjApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkFMSVZFKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWFkKCkpIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFUy5ERUFEO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuQUxJVkUpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBkZXRhY2hlZCBmcm9tIHRoZSBvdGhlciBibG9jayBiZWNhdXNlIHlvdSBjYW4gZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgLy8gd2hpbGUganVtcGluZzogd2Fsay93YWxrLXNob290LCBpZGxlL2lkbGUtc2hvb3QuIFNvIGl0IGlzbid0XHJcbiAgICAgICAgICAgIC8vIGRlcGVuZGFudCBvZiB3aGV0aGVyIHlvdSdyZSBwcmVzc2luZyBsZWZ0IG9yIHJpZ2h0IG9yIHdoYXRldmVyLlxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUp1bXBpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdhbGtpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkhVUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SElUYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgbGVhZHMgdG8gaHVydCBhbmltIGJ1Z1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5BTElWRSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkRFQUQpIHtcclxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgcmVzZXQgc3RhdGUgdG8gQUxJVkUgY2F1c2UgaXQncyBlbmQgb2YgdGhlIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9REVBRGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIFBsYXllciBTdGF0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSB2eDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy54IDwgMCB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QW5pbWF0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJjb2xsaXNpb25FZmZlY3QxXCIsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImNvbGxpc2lvbkVmZmVjdDFcIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6IDEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy52eCA9IDcwMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnZ4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0aWxlIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG4gICAgcHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG4gICAgcHJpdmF0ZSB0aWxlc2V0OiBQaGFzZXIuVGlsZW1hcHMuVGlsZXNldDtcclxuICAgIHByaXZhdGUgX21haW5MYXllcjogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllcjtcclxuICAgIHByaXZhdGUgc3ViTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBsYXllciB0aGF0IGNvbGxpZGVzOiAnY29sbGlkZXMnIHNldCB0byB0cnVlIGluIFRpbGVkLlxyXG4gICAgICovXHJcbiAgICBnZXQgbWFpbkxheWVyKCk6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IGlkOiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gcGFyYW1zLnNjZW5lLm1ha2UudGlsZW1hcCh7XHJcbiAgICAgICAgICAgIGtleTogYGxldmVsJHtwYXJhbXMuaWR9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKFxyXG4gICAgICAgICAgICBgbGV2ZWwke3BhcmFtcy5pZH0tdGlsZXNoZWV0YCxcclxuICAgICAgICAgICAgYGxldmVsJHtwYXJhbXMuaWR9VGlsZXNoZWV0YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX21haW5MYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG4gICAgICAgICAgICBcIm1haW5MYXllclwiLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzZXQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluTGF5ZXIuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgIGNvbGxpZGVzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YkxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoXHJcbiAgICAgICAgICAgIFwic3ViTGF5ZXJcIixcclxuICAgICAgICAgICAgdGhpcy50aWxlc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL0xldmVsXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuL0d1aVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yYXRpbzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYXZhdGFyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zY3JlZW5TaWRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9jaGFyYWN0ZXJJbnN0YW5jZTogQ2hhcmFjdGVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVySW5zdGFuY2U6IFBsYXllcjtcclxuICAgIHByaXZhdGUgX2xldmVsSW5zdGFuY2U6IExldmVsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlcidzIGlkIGZyb20gREIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2VyJ3MgdXNlcm5hbWUgZnJvbSBEQi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZXIncyByYXRpbyBmcm9tIERCLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHJhdGlvKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NyZWVuU2lkZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5TaWRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcmFjdGVyIHRoZSB1c2VyIGhhcyBjaG9zZW4gaW4gdGhlIE1lbnUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2hhcmFjdGVySW5zdGFuY2UoKTogQ2hhcmFjdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcmFjdGVySW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5ZXIgY3JlYXRlZCBpbiBHYW1lIFNjZW5lIGJhc2VkIG9uIFVzZXIncyBjaGFyYWN0ZXIgY2hvaWNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllckluc3RhbmNlKCk6IFBsYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGV2ZWwgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudSwgbWFrZXMgbW9yZSBzZW5zZSB3aGVuIHBsYXlpbmcgc29sby5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsZXZlbEluc3RhbmNlKCk6IExldmVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNoYXJhY3Rlckluc3RhbmNlKHY6IENoYXJhY3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2NoYXJhY3Rlckluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHBsYXllckluc3RhbmNlKHY6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMuX3BsYXllckluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxldmVsSW5zdGFuY2UodjogTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLl9sZXZlbEluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcmF0aW86IG51bWJlcjtcclxuICAgICAgICBzY3JlZW5TaWRlOiBzdHJpbmc7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSBwYXJhbXMudXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5fcmF0aW8gPSBwYXJhbXMucmF0aW87XHJcbiAgICAgICAgdGhpcy5fc2NyZWVuU2lkZSA9IHBhcmFtcy5zY3JlZW5TaWRlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9vYmplY3RzL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuaW1wb3J0IHsgcGFyc2VkU3RvcmFnZSB9IGZyb20gXCIuLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IExvYWRpbmdCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Mb2FkaW5nQmFyXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJCb290XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbGV2ZWxzOiBBcnJheTxMZXZlbD47XHJcbiAgICBwcml2YXRlIHVzZXJzOiBBcnJheTxVc2VyPjtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuXHJcbiAgICBwcml2YXRlIGxvZ286IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgYnRuOiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBtdXNpY1RoZW1lOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cdHByaXZhdGUgbG9hZGluZ0JhcjogTG9hZGluZ0JhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxldmVscyA9IFtcclxuICAgICAgICAgICAgbmV3IExldmVsKHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDaW1ldGllcmVcIixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBMZXZlbCh7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUHJhaXJpZVwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJzID0gW1xyXG4gICAgICAgICAgICBuZXcgVXNlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogcGFyc2VkU3RvcmFnZSgpPy5tYWluVXNlcj8uaWQgfHwgMCxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwYXJzZWRTdG9yYWdlKCk/Lm1haW5Vc2VyPy51c2VybmFtZSB8fCBcIlBvb2xHaG91bFwiLFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHBhcnNlZFN0b3JhZ2UoKT8ubWFpblVzZXI/LnJhdGlvIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5TaWRlOiBcImxlZnRcIixcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICBuZXcgVXNlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogcGFyc2VkU3RvcmFnZSgpPy5zZWNvbmRhcnlVc2VyPy5pZCB8fCAwLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlcj8udXNlcm5hbWUgfHwgXCJKb2xseUNsZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IHBhcnNlZFN0b3JhZ2UoKT8uc2Vjb25kYXJ5VXNlcj8ucmF0aW8gfHwgMCxcclxuICAgICAgICAgICAgICAgIHNjcmVlblNpZGU6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW1xyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJTdGV2aWVcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiQ2Fyb2xpbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiS3Jpc3RvZlwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdHlcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiT3JvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJBbGV4YVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIFVzaW5nIHRoZSBzY2VuZSBEYXRhIE1hbmFnZXIgdG8gc3RvcmUgZGF0YSBvbiBhIHNjZW5lIGxldmVsLlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCB0aGlzLnVzZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwiY2hhcmFjdGVyc1wiLCB0aGlzLmNoYXJhY3RlcnMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJsZXZlbHNcIiwgdGhpcy5sZXZlbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkLnBhY2soXCJwcmVsb2FkXCIsIFwiYXNzZXRzL3BhY2suanNvblwiLCBcInByZWxvYWRcIik7XHJcblxyXG4gICAgICAgIC8vIFByZWxvYWQgYWxsIGNoYXJhY3RlcnMgYXRsYXNlcyA6IGEganNvbiBmaWxlIHRoYXQgYWN0cyBhc1xyXG4gICAgICAgIC8vIGFzIGEgXCJtYXBcIi9cImxpbmtcIiB0byBhIHBuZyBzcHJpdGVzaGVldC5cclxuICAgICAgICAvLyBVc2VkIGZvciBkcmF3aW5nIFBMYXllciB0ZXh0dXJlIGFuZCBzZXQgYW5pbWF0aW9ucy5cclxuICAgICAgICBmb3IgKGxldCBuID0gMTsgbiA8PSA2OyBuKyspIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkLmF0bGFzKFxyXG4gICAgICAgICAgICAgICAgYGNoYXJhY3RlciR7bn1gLFxyXG4gICAgICAgICAgICAgICAgYGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tc3ByaXRlc2hlZXQucG5nYCxcclxuICAgICAgICAgICAgICAgIGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LWF0bGFzLmpzb25gXHJcbiAgICAgICAgICAgICk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMubG9hZGluZ0JhciA9IG5ldyBMb2FkaW5nQmFyKHsgc2NlbmU6IHRoaXMgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbihcInByb2dyZXNzXCIsICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZHJhdyh2YWx1ZSk7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzc1RleHQuc2V0VGV4dCgoTWF0aC5mbG9vcih2YWx1ZSoxMDApKSArIFwiJVwiKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwiY29tcGxldGVcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLm11c2ljVGhlbWUgPSB0aGlzLnNvdW5kLmFkZChcIm1lbnVUaGVtZVwiKTtcclxuICAgICAgICB0aGlzLm11c2ljVGhlbWUucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZEZvckdVSVNjZW5lc1wiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLjUsXHJcbiAgICAgICAgICAgIFwibWFpbkxvZ29cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIEd1aS5jdXN0b21UZXh0KHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHRoaXMubG9nby54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmxvZ28ueSArIDg0LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIldlbGNvbWUgdG8gdGhlIGZpZ2h0ICFcIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIHN0b3BTb3VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoaXMgc2NlbmUgZGF0YSB0byB0aGUgbWVudSBzY2VuZS5cclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgQ09OVFJPTEtFWVMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBCb21iIH0gZnJvbSBcIi4uL29iamVjdHMvQm9tYlwiO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tIFwiLi4vb2JqZWN0cy9IdWRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gXCIuLi9vYmplY3RzL0hlYWx0aEJhclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vQW5pbWF0aW9uc1wiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyMTogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXIyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIGh1ZDE6IEh1ZDtcclxuICAgIHByaXZhdGUgaHVkMjogSHVkO1xyXG4gICAgcHJpdmF0ZSB0aWxlbWFwOiBMZXZlbFtcInRpbGVtYXBcIl07XHJcbiAgICBwcml2YXRlIGJvbWJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGJvbWJDcmVhdGlvbkV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBuZXdTY2VuZVRpbWVkRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgICBwcml2YXRlIHdpbm5lcjogVXNlcjtcclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpZGVycygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMudGlsZW1hcC5tYWluTGF5ZXIpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy5wbGF5ZXIxLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5odXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYnMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMucGxheWVyMiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIuaHVydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJvbWJzLmdldEZpcnN0QWxpdmUoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMik7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgW3RoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyXSxcclxuICAgICAgICAgICAgdGhpcy50aWxlbWFwLm1haW5MYXllclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjIucHJvamVjdGlsZXMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEucHJvamVjdGlsZXMuZ2V0Rmlyc3RBbGl2ZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0KTtcclxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcyxcclxuXHRcdFx0dGhpcy50aWxlbWFwLm1haW5MYXllcixcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcy5nZXRGaXJzdEFsaXZlKCkuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG5cdFx0XHR0aGlzLnRpbGVtYXAubWFpbkxheWVyLFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLmdldEZpcnN0QWxpdmUoKS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQobWVudVNjZW5lRGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBtZW51U2NlbmVEYXRhPy51c2Vycyk7XHJcblxyXG4gICAgICAgIEFuaW1hdGlvbnMuY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXJzOiB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIiksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ubGV2ZWxJbnN0YW5jZS5jcmVhdGUodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZW1hcCA9IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0ubGV2ZWxJbnN0YW5jZS50aWxlbWFwO1xyXG5cclxuICAgICAgICB0aGlzLmJvbWJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib21iQ3JlYXRpb25FdmVudCA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAyMDAwLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib21icy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJvbWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gNTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcImJvbWJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgICAgIHk6IDMwMCxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5LFxyXG4gICAgICAgICAgICBjb250cm9sS2V5czogQ09OVFJPTEtFWVMuUExBWUVSLlNFVDIsXHJcbiAgICAgICAgICAgIGhlYWx0aEJhcjogbmV3IEhlYWx0aEJhcih7XHJcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgIHNpZGU6IFwibGVmdFwiXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDkwMCxcclxuICAgICAgICAgICAgeTogMzAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5OiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMSxcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2lkZTogXCJyaWdodFwiXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBoYXZlIHVzZXI8LS0+cGxheWVyIGNvbmNvcmRhbmNlXHJcbiAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5wbGF5ZXJJbnN0YW5jZSA9IHRoaXMucGxheWVyMTtcclxuICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzFdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIyO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcnNcIiwgdGhpcy5kYXRhLnZhbHVlcy51c2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyMS51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllcjIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIFdpbm5lciBoYW5kbGluZy5cclxuICAgICAgICAvLyBFbnRlciB3aW5uZXIgaGFuZGxpbmcgbW9kZSBpZiBvbmUgb2YgdGhlIHBsYXllciBpcyBkZWFkLlxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgfHwgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgcGxheWVycyBpbnZpY2libGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIG5leHQgc2NlbmUgdG8gc3RhcnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2F5IHdlIGRvbid0IGhhdmUgdG8gcGF1c2UgcGh5c2ljcyBidXQgdGhlIHdpbm5lciBpcyBub3RcclxuICAgICAgICAgICAgLy8ga2lsbGVkIGJ5IHRoZSBib21icyB0aGF0IGFyZSBzdGlsbCBmYWxsaW5nLlxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEubWFrZUJ1bGxldFByb29mKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY2lkaW5nIHdoaWNoIG9uZSBpcyB0aGUgd2lubmVyICh0aGUgb25lIG5vdCBkZWFkKS5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5pc0RlYWQoKSAmJiAhdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXaW5uZXJzIGFyZSB1c2VycyBub3QgcGxheWVycy5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyMi5pc0RlYWQoKSAmJiB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE51bGxpbmcgdGhlIHdpbm5lciBpZiB0aGVyZSdzIG5vIHdpbm5lciBhdCBhbGxcclxuICAgICAgICAgICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHNob3VsZG4ndCBldmVyIGhhcHBlbiBidXQgd2hvIGtub3dzLlxyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaW4gbmV4dCBzY2VuZSBpZiB3aW5uZXIgaXMgdHJ1dGh5LCBwcmludGluZyBhbHQgdGV4dFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgbm90IChsaWtlIGlmIG51bGwpLlxyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwid2lubmVyXCIsIHRoaXMud2lubmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRocmVlIHNlY29uZHMgZGVsYXkgYmVmb3JlIGxhdW5jaGluZyB0aGUgbmV4dCBzY2VuZVxyXG4gICAgICAgICAgICB0aGlzLm5ld1NjZW5lVGltZWRFdmVudCA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcIkdhbWVvdmVyXCIsIHRoaXMuZGF0YS5nZXRBbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5pbXBvcnQgeyBwYXJzZWRTdG9yYWdlIH0gZnJvbSBcIi4uL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVvdmVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZW92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxpbmdTdG9yYWdlKCkge1xyXG4gICAgICAgIGlmIChwYXJzZWRTdG9yYWdlKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkVXNlcnMgPSBwYXJzZWRTdG9yYWdlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnZhbHVlcy53aW5uZXIuaWQgPT09IHBhcnNlZFVzZXJzLm1haW5Vc2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRVc2Vycz8ubWFpblVzZXI/Lm1hdGNocz8ucHVzaCh7IHdpbjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFVzZXJzPy5zZWNvbmRhcnlVc2VyPy5tYXRjaHM/LnB1c2goeyB3aW46IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy53aW5uZXIuaWQgPT09IHBhcnNlZFVzZXJzLnNlY29uZGFyeVVzZXIuaWRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRVc2Vycz8uc2Vjb25kYXJ5VXNlcj8ubWF0Y2hzPy5wdXNoKHsgd2luOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkVXNlcnM/Lm1haW5Vc2VyPy5tYXRjaHM/LnB1c2goeyB3aW46IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXJpYWxpemUgYW5kIHNldCBpbiBzdG9yYWdlIHRoZSBuZXdseSB1cGRhdGVkIHVzZXJzIG9iamVjdHNcclxuICAgICAgICAgICAgLy8gd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIG1hdGNocyBwdXNoZWQgZW50cmllcy5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob2FmaWdodFwiLCBKU09OLnN0cmluZ2lmeShwYXJzZWRVc2VycykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KGdhbWVTY2VuZURhdGEpIHtcclxuICAgICAgICBpZiAoZ2FtZVNjZW5lRGF0YS53aW5uZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcIndpbm5lclwiLCBnYW1lU2NlbmVEYXRhLndpbm5lcik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lc3NhZ2UgPSBgJHt0aGlzLmRhdGEudmFsdWVzLndpbm5lci51c2VybmFtZX0gV09OICFgO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsaW5nU3RvcmFnZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lc3NhZ2UgPSBcIklUJ1MgQSBEUkFXICFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJFTkQgT0YgR0FNRVwiIH0pO1xyXG5cclxuICAgICAgICBHdWkuY3VzdG9tVGV4dCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcykvMixcclxuICAgICAgICAgICAgeTogZ2V0R2FtZUhlaWdodCh0aGlzKS8yLFxyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLm1haW5NZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHdWkubWFpbkJ0bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBMQVkgQUdBSU5cIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBuZXdTY2VuZUtleTogXCJNZW51XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiTWVudVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgc2NlbmUgaXMgd2hlcmUgdGhlIHR3byBwbGF5ZXJzIGNob29zZSB0aGUgdGVycmFpbi9tYXAgdGhleSB3aWxsIHBsYXkgb24sXHJcbiAqIGFuZCB0aGUgY2hhcmFjdGVycyB0aGV5IHdpbGwgcGxheSB3aXRoLlxyXG4gKiBJdCBtYWlubHkgdXNlcyBtZXRob2RzIGZyb20gdGhlIEd1aSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsZXZlbFRodW1iOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlclRodW1iczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkltYWdlPjtcclxuXHJcbiAgICBwcml2YXRlIGRyYXdCYWNrZ3JvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFRodW1ibmFpbHMoZGF0YSk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgdGhlIHRlcnJhaW4gdGh1bWJuYWlsIG9uIHRoZSAxc3QgbGV2ZWwuXHJcbiAgICAgICAgdGhpcy5sZXZlbFRodW1iID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBkYXRhLnZhbHVlcy5sZXZlbHNbMF0udGh1bWJuYWlsS2V5XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCB0aGUgMiBjaGFyYWN0ZXJzIHRodW1ibmFpbHMgb24gdGhlIDFzdCBjaGFyYWN0ZXIuXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJUaHVtYnMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuYWRkLmltYWdlKDY1MCwgMzAwLCBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdLnRodW1ibmFpbEtleSksXHJcbiAgICAgICAgICAgIHRoaXMuYWRkLmltYWdlKDg1MCwgMzAwLCBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdLnRodW1ibmFpbEtleSksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50VGl0bGVzKCk6IHZvaWQge1xyXG4gICAgICAgIEd1aS50aXRsZSh7IHNjZW5lOiB0aGlzLCB0ZXh0OiBcIk1FTlVcIiB9KTtcclxuICAgICAgICBHdWkuc2VjdGlvblRpdGxlKHsgc2NlbmU6IHRoaXMsIHg6IDIwMCwgeTogMTMwLCB0ZXh0OiBcIlRFUlJBSU5cIiB9KTtcclxuICAgICAgICBHdWkuc2VjdGlvblRpdGxlKHsgc2NlbmU6IHRoaXMsIHg6IDc1MCwgeTogMTMwLCB0ZXh0OiBcIkNIQVJBQ1RFUlNcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50VGV4dHMoKTogdm9pZCB7XHJcblx0XHRjb25zdCBwbGF5ZXIxS2V5cyA9IGBcclxuXHRcdFx0UmlnaHQgIDogRFxyXG5cdFx0XHRMZWZ0ICAgOiBRXHJcblx0XHRcdFNob290ICA6IEVcclxuXHRcdFx0SnVtcCAgIDogU1BBQ0VcclxuXHRcdGA7XHJcblx0XHRjb25zdCBwbGF5ZXIyS2V5cyA9IGBcclxuXHRcdFx0UmlnaHQgIDog4oaSXHJcblx0XHRcdExlZnQgICA6IOKGkFxyXG5cdFx0XHRTaG9vdCAgOiBTSElGVFxyXG5cdFx0XHRKdW1wICAgOiDihpFcclxuXHRcdGA7XHJcbiAgICAgICAgR3VpLmN1c3RvbVRleHQoeyBzY2VuZTogdGhpcywgeDogNjUwLCB5OiAyMTAsIHRleHQ6IFwiUExBWUVSIDFcIiB9KTtcclxuXHRcdEd1aS5jdXN0b21UZXh0KHsgc2NlbmU6IHRoaXMsIHg6IDg1MCwgeTogMjEwLCB0ZXh0OiBcIlBMQVlFUiAyXCIgfSk7XHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA2NTAsIHk6IDQyMCwgdGV4dDogcGxheWVyMUtleXMgfSk7XHJcblx0XHRHdWkuY3VzdG9tVGV4dCh7IHNjZW5lOiB0aGlzLCB4OiA4NTAsIHk6IDQyMCwgdGV4dDogcGxheWVyMktleXMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZWQgdGhlIGNob2ljZXMgb24gdGhlIDFzdCBlbGVtZW50cyBvZiB0aGUgdGVycmFpbiBhbmQgdGhlXHJcbiAgICAvLyBjaGFyYWN0ZXJzLiBUaGlzIHdheSBpZiB0aGUgcGxheWVycyBkb2Vzbid0IGNsaWNrIG9uIGFueXRoaW5nIHRoZXkgc3RpbGxcclxuICAgIC8vIGhhdmUgdGVycmFpbiBhbmQgY2hhcmFjdGVycyBpbnN0YW5jZXMgYXR0YWNoZWQuXHJcbiAgICBwcml2YXRlIGluaXRVc2Vyc0Nob2ljZXMoZGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBkYXRhLnZhbHVlcy51c2Vycykge1xyXG4gICAgICAgICAgICB1c2VyLmxldmVsSW5zdGFuY2UgPSBkYXRhLnZhbHVlcy5sZXZlbHNbMF07XHJcbiAgICAgICAgICAgIHVzZXIuY2hhcmFjdGVySW5zdGFuY2UgPSBkYXRhLnZhbHVlcy5jaGFyYWN0ZXJzWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChib290U2NlbmVEYXRhKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgRVMyMDIwIG9wdGlvbm5hbCBjaGFpbmluZyAoaS5lIHRoZSA/KSB0byBjaGVjayBpZiB0aGUgZGF0YVxyXG4gICAgICAgIC8vIG9iamVjdCBjb21pbmcgZnJvbSB0aGUgYm9vdCBzY2VuZSBoYXMgdGhlIHJpZ2h0IHVzZXJzLCBjaGFyYWN0ZXJzIGFuZFxyXG4gICAgICAgIC8vIGxldmVscyBmaWVsZHMuXHJcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgZGF0YSBmcm9tIHRoZSBib290IHNjZW5lIHRvIHRoaXMgc2NlbmUncyBkYXRhLlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBib290U2NlbmVEYXRhPy51c2Vycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImNoYXJhY3RlcnNcIiwgYm9vdFNjZW5lRGF0YT8uY2hhcmFjdGVycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImxldmVsc1wiLCBib290U2NlbmVEYXRhPy5sZXZlbHMpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRVc2Vyc0Nob2ljZXModGhpcy5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRodW1ibmFpbHModGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLnByaW50VGl0bGVzKCk7XHJcbiAgICAgICAgdGhpcy5wcmludFRleHRzKCk7XHJcblxyXG4gICAgICAgIC8vIFNsaWRlIGJ1dHRvbiBuwrAxLiBUaGlzIGlzIHdoZXJlIFVzZXIgMSBvciAyIGNob29zZSB0aGUgbGV2ZWwuXHJcbiAgICAgICAgLy8gTW9kaWZpZXMgdGhlIGxldmVsIHRodW1ibmFpbCB0ZXh0dXJlICh3aXRoIHRleHR1cmUga2V5cykgb24gY2xpY2suXHJcbiAgICAgICAgR3VpLnNsaWRlQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDIwMCxcclxuICAgICAgICAgICAgeTogNDUwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgaW1nOiB0aGlzLmxldmVsVGh1bWIsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXlzOiB0aGlzLmRhdGEudmFsdWVzLmxldmVscy5tYXAoXHJcbiAgICAgICAgICAgICAgICAobGV2ZWwpID0+IGxldmVsLnRodW1ibmFpbEtleVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiB0aGlzLmRhdGEudmFsdWVzLmxldmVscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZXZlbC50aHVtYm5haWxLZXkgPT09IHRoaXMubGV2ZWxUaHVtYi50ZXh0dXJlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXS5sZXZlbEluc3RhbmNlID0gbGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTbGlkZSBidXR0b24gbsKwMi4gVGhpcyBpcyB3aGVyZSBVc2VyIDEgY2hvb3NlIGl0cyBjaGFyYWN0ZXIuXHJcbiAgICAgICAgLy8gTW9kaWZpZXMgdGhlIHRleHR1cmUgb2YgdGhlIGNoYXJhY3RlciB0aHVtYm5haWwgbsKwMSBvbiBjbGljay5cclxuICAgICAgICBHdWkuc2xpZGVCdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogNjUwLFxyXG4gICAgICAgICAgICB5OiAzNzAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTkVYVFwiLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzBdLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5czogdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzLm1hcCgoYykgPT4gYy50aHVtYm5haWxLZXkpLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaCBvZiB0aGlzLmRhdGEudmFsdWVzLmNoYXJhY3RlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoLnRodW1ibmFpbEtleSA9PT0gdGhpcy5jaGFyYWN0ZXJUaHVtYnNbMF0udGV4dHVyZS5rZXlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1swXS5jaGFyYWN0ZXJJbnN0YW5jZSA9IGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2xpZGUgYnV0dG9uIG7CsDMuIFRoaXMgaXMgd2hlcmUgVXNlciAyIGNob29zZSBpdHMgY2hhcmFjdGVyLlxyXG4gICAgICAgIC8vIE1vZGlmaWVzIHRoZSB0ZXh0dXJlIG9mIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlsIG7CsDIgb24gY2xpY2suXHJcbiAgICAgICAgR3VpLnNsaWRlQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDg1MCxcclxuICAgICAgICAgICAgeTogMzcwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgaW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1sxXSxcclxuICAgICAgICAgICAgdGV4dHVyZUtleXM6IHRoaXMuZGF0YS52YWx1ZXMuY2hhcmFjdGVycy5tYXAoKGMpID0+IGMudGh1bWJuYWlsS2V5KSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5kYXRhLnZhbHVlcy5jaGFyYWN0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaC50aHVtYm5haWxLZXkgPT09IHRoaXMuY2hhcmFjdGVyVGh1bWJzWzFdLnRleHR1cmUua2V5XHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0uY2hhcmFjdGVySW5zdGFuY2UgPSBjaDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgTU9ESUZJRUQgdXNlcnMgZGF0YSBmcm9tIHRoZSBib290IHNjZW5lIHRvIHRoaXMgYWN0dWFsIHNjZW5lLlxyXG4gICAgICAgIC8vIE1vZGlmaWVkLCBiZWNhdXNlIGxldmVsIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBoYXMgYmVlbiBsaW5rZWQgdG9cclxuICAgICAgICAvLyBlYWNoIHVzZXJzIHRoYW5rcyB0byB0aGUgc2xpZGUgYnV0dG9ucyBjYWxsYmFja3MgYW5kIHRoZSB0aHVtYm5haWxzLlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCB0aGlzLmRhdGEudmFsdWVzLnVzZXJzKTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJTVEFSVFwiLFxyXG4gICAgICAgICAgICBzdG9wU291bmRzOiB0cnVlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiR2FtZVwiLFxyXG4gICAgICAgICAgICAvLyBTZW5kaW5nIHRoaXMgc2NlbmUncyBkYXRhICg9IHVzZXJzKSB0byB0aGUgZ2FtZSBzY2VuZS5cclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tIFwiLi9NZW51U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tIFwiLi9HYW1lb3ZlclNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBNZW51U2NlbmUsIEdhbWVTY2VuZSwgR2FtZW92ZXJTY2VuZV07XHJcbiIsIi8qKlxyXG4gKiBQYXJzZSB0aGUgaG9hZmlnaHQgc2VyaWFsaXplZCBob2FmaWdodCBvYmplY3QgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICogSWYgdGhlcmUncyBubyBob2FmaWdodCBvYmplY3QgcHJlc2VudCBpdCByZXR1cm5zIG51bGwgYW5kIGZha2UgdXNlcnMgcHJvZmlsZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBmb3JtYXRcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VkU3RvcmFnZSgpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvYWZpZ2h0XCIpKSB7XHJcbiAgICAgICAgY29uc3QgaGYgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhvYWZpZ2h0XCIpO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoaGYpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=