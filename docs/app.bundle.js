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
            displayString: "\n\t\t\t\tRight  : D\n\t\t\t\tLeft   : Q\n\t\t\t\tShoot  : S\n\t\t\t\tJump   : SPACE\n\t\t\t"
        },
        SET2: {
            right: Phaser.Input.Keyboard.KeyCodes.D,
            left: Phaser.Input.Keyboard.KeyCodes.Q,
            jump: Phaser.Input.Keyboard.KeyCodes.SPACE,
            shoot: Phaser.Input.Keyboard.KeyCodes.S,
            displayString: "\n\t\t\t\tRight  : \u2192\n\t\t\t\tLeft   : \u2190\n\t\t\t\tShoot  : SHIFT\n\t\t\t\tJump   : \u2191\n\t\t\t"
        },
    },
};
exports.DEFAULT_FONT_FAMILIES = "Grobold, monospace, Arial";


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
        params.scene.add.dom(helpers_1.getGameWidth(params.scene) / 2, 64, "h3", Gui.titleStyle, params.text);
    };
    Gui.sectionTitle = function (params) {
        params.scene.add.dom(params.x, params.y, "h4", Gui.sectionTitleStyle, params.text);
    };
    Gui.simpleParagraph = function (params) {
        params.scene.add.dom(params.x, params.y, "p", Gui.basicTextStyle, params.text);
    };
    Gui.mainBtnStyle = "\n\t\theight: 50px; \n\t\tfont-size: 25px; \n\t\tborder-radius: 4px;\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "; \n\t\tcolor: " + helpers_1.COLORS.black.string + "; \n\t\tbackground-color: " + helpers_1.COLORS.white.string + "; \n\t\tborder: 2px solid " + helpers_1.COLORS.black.string + "\n\t";
    Gui.secondaryBtnStyle = "\n\t\twidth: 100px; \n\t\theight: 33px; \n\t\tfont-size: 17px; \n\t\tborder-radius: 4px;\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "; \n\t\tcolor: " + helpers_1.COLORS.black.string + "; \n\t\tbackground-color: " + helpers_1.COLORS.white.string + "; \n\t\tborder: 2px solid " + helpers_1.COLORS.black.string + "\n\t";
    Gui.titleStyle = "\n\t\tfont-size: 40px; \n\t\tmargin: 0;\n\t\tcolor: " + helpers_1.COLORS.white.string + "; \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES;
    Gui.sectionTitleStyle = "\n\t\tfont-size: 30px;\n\t\tmargin: 0;\n\t\tcolor: " + helpers_1.COLORS.white.string + "; \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "\n\t";
    Gui.basicTextStyle = "\n\t\tfont-size: 20px; \n\t\tmargin: 0;\n\t\tcolor: " + helpers_1.COLORS.white.string + "; \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "\n\t";
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
        this.textStyle = "\n\t\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "; \n\t\t\tmargin: 0; \n\t\t\tfont-size: 18px; \n\t\t\tcolor: " + helpers_1.COLORS.white.string + ";\n\t\t\tpadding: 10px\n\t\t";
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
            NORMAL: "NORMAL",
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
        _this.setState(_this.STATES.NORMAL);
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
                if (this.state !== this.STATES.HURT) {
                    this.setState(this.STATES.HURT);
                }
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
        if (this.isDead()) {
            this.state = this.STATES.DEAD;
        }
        if (this.state === this.STATES.NORMAL) {
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
            // The only thing that make the player return to normal is time
            this.scene.time.addEvent({
                delay: 1000,
                loop: false,
                callback: function () {
                    _this.setState(_this.STATES.NORMAL);
                },
            });
        }
        else if (this.state === this.STATES.DEAD) {
            // We don't reset state to NORMAL cause it's end of the game
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
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Trampoline_1 = __webpack_require__(/*! ./Trampoline */ "./src/objects/Trampoline.ts");
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
        this._trampoline = new Trampoline_1.Trampoline({
            scene: params.scene,
            x: 400,
            y: helpers_1.getGameHeight(params.scene) - this.tileset.tileHeight * 2.5
        });
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
    Object.defineProperty(Tilemap.prototype, "trampoline", {
        get: function () {
            return this._trampoline;
        },
        enumerable: true,
        configurable: true
    });
    return Tilemap;
}());
exports.Tilemap = Tilemap;


/***/ }),

/***/ "./src/objects/Trampoline.ts":
/*!***********************************!*\
  !*** ./src/objects/Trampoline.ts ***!
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
var Trampoline = /** @class */ (function (_super) {
    __extends(Trampoline, _super);
    function Trampoline(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, "trampoline") || this;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        return _this;
    }
    return Trampoline;
}(Phaser.Physics.Arcade.Sprite));
exports.Trampoline = Trampoline;


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
        this.games = params.games;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        set: function (v) {
            this._ratio = v;
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
                id: 1,
                username: "PoolGhoul",
                ratio: 0,
                games: [],
                screenSide: "left",
            }),
            new User_1.User({
                id: 2,
                username: "JollyClever",
                ratio: 0,
                games: [],
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
        var NUMBER_OF_CHARACTERS = 6;
        for (var n = 1; n <= NUMBER_OF_CHARACTERS; n++) {
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
        Gui_1.Gui.simpleParagraph({
            scene: this,
            x: this.logo.x,
            y: this.logo.y + 90,
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
        this.physics.add.collider(this.bombs, this.player1, function (bomb) {
            _this.player1.hurt();
            bomb.destroy();
        });
        this.physics.add.collider(this.bombs, this.player2, function (bomb) {
            _this.player2.hurt();
            bomb.destroy();
        });
        this.physics.add.collider(this.player1, this.player2);
        this.physics.add.collider([this.player1, this.player2], this.tilemap.mainLayer);
        this.physics.add.collider(this.player2.projectiles, this.player1, function (projectile) {
            _this.player1.hurt();
            projectile.destroy();
        });
        this.physics.add.collider(this.player1.projectiles, this.player2, function (projectile) {
            _this.player2.hurt();
            projectile.destroy();
        });
        this.physics.add.collider(this.player1.projectiles, this.tilemap.mainLayer, function (projectile) {
            projectile.destroy();
        });
        this.physics.add.collider(this.player2.projectiles, this.tilemap.mainLayer, function (projectile) {
            projectile.destroy();
        });
    };
    GameScene.prototype.init = function (menuSceneData) {
        this.data.set("users", menuSceneData === null || menuSceneData === void 0 ? void 0 : menuSceneData.users);
        Animations_1.Animations.createCharactersAnims({
            scene: this,
            users: this.data.get("users")
        });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.data.get("users")[0].levelInstance.create(this);
        this.tilemap = this.data.get("users")[0].levelInstance.tilemap;
        this.bombs = this.add.group({
            runChildUpdate: true,
        });
        this.bombCreationEvent = this.time.addEvent({
            delay: 5000,
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
            textureKey: this.data.get("users")[0].characterInstance.textureKey,
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET2,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
                side: "left",
            }),
        });
        this.player2 = new Player_1.Player({
            scene: this,
            x: 900,
            y: 300,
            textureKey: this.data.get("users")[1].characterInstance.textureKey,
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET1,
            healthBar: new HealthBar_1.HealthBar({
                scene: this,
                side: "right",
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
        this.data.get("users")[0].playerInstance = this.player1;
        this.data.get("users")[1].playerInstance = this.player2;
        this.data.set("users", this.data.get("users"));
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
            // Winners are users not players.
            if (this.player1.isDead() && !this.player2.isDead()) {
                this.winner = this.data.get("users")[1];
            }
            else if (!this.player1.isDead() && this.player2.isDead()) {
                this.winner = this.data.get("users")[0];
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
    GameoverScene.prototype.displayReport = function () {
        var _this = this;
        var usernameX = (helpers_1.getGameWidth(this) / 2) - 200;
        var usernameY = 280;
        var badgeX = 100;
        var badgeSpacing = 40;
        var badgeLimit = helpers_1.getGameWidth(this) - 80;
        var interline = 56;
        function resetBadgeX() {
            badgeX = 100;
        }
        this.data.get("users").forEach(function (user) {
            Gui_1.Gui.simpleParagraph({
                scene: _this,
                x: usernameX,
                y: usernameY,
                text: user.username
            });
            user.games.forEach(function (game) {
                if (badgeX < badgeLimit) {
                    _this.add.image(usernameX + badgeX, usernameY, (game.win === true) ? "star" : "tombstone");
                    badgeX += badgeSpacing;
                }
            });
            usernameY += interline;
            resetBadgeX();
        });
    };
    GameoverScene.prototype.setRatios = function () {
        this.data.get("users").forEach(function (user) {
            var wonGames = user.games.filter(function (game) { return game.win === true; }).length;
            var totalGames = user.games.length;
            user.ratio = Math.floor((wonGames / totalGames) * 100);
        });
    };
    GameoverScene.prototype.logGame = function () {
        if (this.data.get("winner").id === this.data.get("users")[0].id) {
            this.data.get("users")[0].games.push({ win: true });
            this.data.get("users")[1].games.push({ win: false });
        }
        else if (this.data.get("winner").id === this.data.get("users")[1].id) {
            this.data.get("users")[0].games.push({ win: false });
            this.data.get("users")[1].games.push({ win: true });
        }
    };
    GameoverScene.prototype.init = function (gameSceneData) {
        this.data.set("users", gameSceneData.users);
        if (gameSceneData.winner) {
            this.data.set("winner", gameSceneData.winner);
            this.mainMessage = this.data.get("winner").username + " WON THIS GAME !";
            this.logGame();
            this.setRatios();
        }
        else {
            this.mainMessage = "IT'S A DRAW !";
        }
    };
    GameoverScene.prototype.create = function () {
        this.add.image(helpers_1.getGameWidth(this) / 2, helpers_1.getGameHeight(this) / 2, "backgroundForGUIScenes");
        Gui_1.Gui.title({ scene: this, text: "END OF GAME" });
        Gui_1.Gui.simpleParagraph({
            scene: this,
            x: helpers_1.getGameWidth(this) / 2,
            y: 200,
            text: this.mainMessage,
        });
        this.displayReport();
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
    // Initialized the choices on the 1st elements of the terrain and the
    // characters. This way if the players doesn't click on anything they still
    // have terrain and characters instances attached.
    MenuScene.prototype.initUsersChoices = function (pUsers, pLevels, pCharacters) {
        for (var _i = 0, pUsers_1 = pUsers; _i < pUsers_1.length; _i++) {
            var user = pUsers_1[_i];
            user.levelInstance = pLevels[0];
            user.characterInstance = pCharacters[0];
        }
    };
    MenuScene.prototype.makeTerrainSection = function (params) {
        var _this = this;
        Gui_1.Gui.simpleParagraph({
            scene: this,
            x: params.x,
            y: params.y,
            text: "TERRAIN",
        });
        // Init the terrain thumbnail on the 1st level.
        this.levelThumb = this.add.image(params.x, params.y + 138, this.data.get("levels")[0].thumbnailKey);
        Gui_1.Gui.slideBtn({
            scene: this,
            x: params.x,
            y: params.y + 143 + 136,
            text: "NEXT",
            img: this.levelThumb,
            textureKeys: this.data
                .get("levels")
                .map(function (level) { return level.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.get("levels"); _i < _a.length; _i++) {
                    var level = _a[_i];
                    if (level.thumbnailKey === _this.levelThumb.texture.key) {
                        _this.data.get("users")[0].levelInstance = level;
                        _this.data.get("users")[1].levelInstance = level;
                    }
                }
            },
        });
    };
    MenuScene.prototype.makeCharacterSection = function (params) {
        var _this = this;
        Gui_1.Gui.simpleParagraph({
            scene: this,
            x: params.x,
            y: params.y,
            text: params.title,
        });
        // Init character thumbnail to the 1st one
        this.characterThumbs.push(this.add.image(params.x, params.y + 70, this.data.get("characters")[0].thumbnailKey));
        Gui_1.Gui.slideBtn({
            scene: this,
            x: params.x,
            y: params.y + 70 + 60,
            text: "NEXT",
            img: this.characterThumbs[params.id],
            textureKeys: this.data.get("characters").map(function (c) { return c.thumbnailKey; }),
            callback: function () {
                for (var _i = 0, _a = _this.data.get("characters"); _i < _a.length; _i++) {
                    var ch = _a[_i];
                    if (ch.thumbnailKey ===
                        _this.characterThumbs[params.id].texture.key) {
                        _this.data.get("users")[params.id].characterInstance = ch;
                    }
                }
            },
        });
        Gui_1.Gui.simpleParagraph({
            scene: this,
            x: params.x,
            y: params.y + 70 + 60 + 72,
            text: params.controlKeys,
        });
    };
    MenuScene.prototype.init = function (bootSceneData) {
        // Using ES2020 optionnal chaining (i.e the ?) to check if the data
        // object coming from the boot scene has users, characters and
        // levels fields.
        // Setting the data from the boot scene to this scene's data.
        this.data.set("users", bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.users);
        this.data.set("characters", bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.characters);
        this.data.set("levels", bootSceneData === null || bootSceneData === void 0 ? void 0 : bootSceneData.levels);
        this.initUsersChoices(this.data.get("users"), this.data.get("levels"), this.data.get("characters"));
        this.characterThumbs = [];
    };
    MenuScene.prototype.create = function () {
        Gui_1.Gui.title({ scene: this, text: "MENU" });
        this.drawBackground();
        this.makeTerrainSection({
            x: 200,
            y: 192
        });
        this.makeCharacterSection({
            x: 700,
            y: 192,
            title: "PLAYER 1",
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET1.displayString,
            id: 0,
        });
        this.makeCharacterSection({
            x: 900,
            y: 192,
            title: "PLAYER 2",
            controlKeys: helpers_1.CONTROLKEYS.PLAYER.SET2.displayString,
            id: 1,
        });
        // Set the MODIFIED users data from the boot scene to this actual scene.
        // Modified, because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set("users", this.data.get("users"));
        Gui_1.Gui.mainBtn({
            scene: this,
            text: "START",
            stopSounds: true,
            scenePlugin: this.scene,
            newSceneKey: "Game",
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
exports.default = [
    BootScene_1.BootScene,
    MenuScene_1.MenuScene,
    GameScene_1.GameScene,
    GameoverScene_1.GameoverScene
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvQm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9DaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTG9hZGluZ0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9UaWxlbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1RyYW1wb2xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9NZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXhLOEIsTUFBTSxDQUFDLEtBQUssR0F3SzFDO0FBeEtZLDhCQUFTOzs7Ozs7Ozs7Ozs7OztBQ2hCdEIsY0FBYzs7QUFFZCxzRkFBd0M7QUFDeEMsc0ZBQXdDO0FBQ3hDLHNGQUF3QztBQUN4QyxrR0FBZ0Q7QUFFaEQsa0JBQWU7SUFDZCxxQkFBUztJQUNULHFCQUFTO0lBQ1QscUJBQVM7SUFDVCw2QkFBYTtDQUNiLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25zIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHBhcmFtcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBwYXJhbXMudXNlcnMpIHtcclxuICAgICAgICAgICAgbGV0IHRrID0gdXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5O1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfVdBTEtgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIndhbGstc2lkZS1hcm1lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogNCxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9V0FMS19TSE9PVGAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwid2Fsay1zaWRlLXNob290XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfUlETEVgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtYXJtZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfUlETEVfU0hPT1RgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtc2hvb3RcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SElUYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJoaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31ERUFEYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJkZWFkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgd2lkdGggb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgd2lkdGggb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgcmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuICAgIGxldCByYXdHcmlkID0gbG9hZEZpbGUocEZpbGVQYXRoKTtcclxuICAgIHJldHVybiByYXdHcmlkLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5zcGxpdChcIlwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgY3VzdG9tQmx1ZTogeyBzdHJpbmc6IFwiIzQzNDZmOVwiLCBoZXg6IDB4NDM0NmY5IH0sXHJcbiAgICBjdXN0b21HcmVlbjogeyBzdHJpbmc6IFwiIzc2ZWE2NFwiLCBoZXg6IDB4NzZlYTY0IH0sXHJcbiAgICB2aWJyYW50R3JlZW46IHsgc3RyaW5nOiBcIiMyNWY5NDVcIiwgaGV4OiAweDI1Zjk0NSB9LFxyXG4gICAgY3VzdG9tUmVkOiB7IHN0cmluZzogXCIjZWEyZDIzXCIsIGhleDogMHhlYTJkMjMgfSxcclxuXHR3aGl0ZTogeyBzdHJpbmc6IFwiI2ZmZmZmZlwiLCBoZXg6IDB4ZmZmZmZmIH0sXHJcblx0YmxhY2s6IHsgc3RyaW5nOiBcIiMwMDAwMDBcIiwgaGV4OiAweDAwMDAwMCB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTEtFWVMgPSB7XHJcbiAgICBQTEFZRVI6IHtcclxuICAgICAgICBTRVQxOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUklHSFQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZULFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0hJRlQsXHJcblx0XHRcdGRpc3BsYXlTdHJpbmc6IGBcclxuXHRcdFx0XHRSaWdodCAgOiBEXHJcblx0XHRcdFx0TGVmdCAgIDogUVxyXG5cdFx0XHRcdFNob290ICA6IFNcclxuXHRcdFx0XHRKdW1wICAgOiBTUEFDRVxyXG5cdFx0XHRgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgU0VUMjoge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUyxcclxuXHRcdFx0ZGlzcGxheVN0cmluZzogYFxyXG5cdFx0XHRcdFJpZ2h0ICA6IOKGklxyXG5cdFx0XHRcdExlZnQgICA6IOKGkFxyXG5cdFx0XHRcdFNob290ICA6IFNISUZUXHJcblx0XHRcdFx0SnVtcCAgIDog4oaRXHJcblx0XHRcdGBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgPSBcIkdyb2JvbGQsIG1vbm9zcGFjZSwgQXJpYWxcIjtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiSG9hIEZpZ2h0XCIsXHJcblxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICBoZWlnaHQ6IDY0MCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgICBnYW1lcGFkOiB0cnVlLFxyXG4gICAgICAgIGtleWJvYXJkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJhcmNhZGVcIixcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZ3Jhdml0eToge1xyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGRvbToge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgcGFyZW50OiBcImdhbWVcIixcclxuXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvbWIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMueCA+IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueCA8IDAgfHxcclxuICAgICAgICAgICAgdGhpcy55IDwgMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Qm91bmNlKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XHJcbiAgICAgICAgdGhpcy5zZXRHcmF2aXR5WSgxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCb21iIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnQgYSBHYW1lIENoYXJhY3Rlciwgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggdGhlIFwiUGxheWVyXCIuXHJcbiAqIEEgUGxheWVyIGludGVncmF0ZXMgYSBDaGFyYWN0ZXIuIEEgQ2hhcmFjdGVyIGlzIGp1c3QgYWJvdXQgaG9sZGluZyBkYXRhIDpcclxuICogdGV4dHVyZSBrZXlzLCBtZXRhZGF0YSwgdm9pY2VzIGV0Yy4gTm90aGluZyB0byBiZSBjb250cm9sbGVkIHdpdGggeW91clxyXG4gKiBrZXlib2FyZCBoZXJlLlxyXG4gKlxyXG4gKiBAZm9ybWF0XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgICAvLyBWZXJ5IGltcG9ydGFudCBmaWVsZCwgdGlnaHRseSBsaW5rZWQgdG8gdGhlIGtleXMgeW91IHByb3ZpZGUgaW4gcGFjay5qc29uXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kZXRhaWxzOiBvYmplY3Q7XHJcbiAgICBwcml2YXRlIHN0YXRzOiBvYmplY3Q7XHJcbiAgICAvLyBGaWVsZHMgYnVpbHQgdXBvbiB0aGUgSWQgcHJvdmlkZWQgYXQgaW5zdGFuY2lhdGlvbi5cclxuICAgIHByaXZhdGUgX3RleHR1cmVLZXk6IHN0cmluZztcclxuICAgIC8vIENoYXJhY3RlcidzIGF2YXRhclxyXG4gICAgcHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zb3VuZEtleTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGV4dHVyZUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbEtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNvdW5kS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kS2V5O1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0IGRldGFpbHMoKTogYW55IHtcclxuXHRcdHJldHVybiB0aGlzLl9kZXRhaWxzO1xyXG5cdH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgaWQ6IG51bWJlcjsgZGV0YWlscz86IHtuaWNrbmFtZTogc3RyaW5nfTsgc3RhdHM/OiBvYmplY3QgfSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5fZGV0YWlscyA9IHBhcmFtcy5kZXRhaWxzO1xyXG4gICAgICAgIHRoaXMuc3RhdHMgPSBwYXJhbXMuc3RhdHM7XHJcbiAgICAgICAgdGhpcy5fdGV4dHVyZUtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9YDtcclxuICAgICAgICB0aGlzLl90aHVtYm5haWxLZXkgPSBgY2hhcmFjdGVyJHt0aGlzLmlkfUF2YXRhcmA7XHJcbiAgICAgICAgdGhpcy5fc291bmRLZXkgPSBgY2hhcmFjdGVyJHt0aGlzLmlkfVNvdW5kYDtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT0xPUlMsIERFRkFVTFRfRk9OVF9GQU1JTElFUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBpcyB1c2VkIGZvciBHVUkgZWxlbWVudHMgc3VjaCBhcyBhY3Rpb25zIGJ1dHRvbnMgYW5kIHRpdGxlcy5cclxuICogSXQgcmVsaWVzIG9uIFBoYXNlciBnYW1lIG9iamVjdHMgRE9NIGVsZW1lbnRzLCBzbyB0aGVzZSBHVUkgZWxlbWVudHMgYXJlXHJcbiAqIGh0bWwgYW5kIGNzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHdWkge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBtYWluQnRuU3R5bGUgPSBgXHJcblx0XHRoZWlnaHQ6IDUwcHg7IFxyXG5cdFx0Zm9udC1zaXplOiAyNXB4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU307IFxyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLmJsYWNrLnN0cmluZ307IFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfTsgXHJcblx0XHRib3JkZXI6IDJweCBzb2xpZCAke0NPTE9SUy5ibGFjay5zdHJpbmd9XHJcblx0YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY29uZGFyeUJ0blN0eWxlID0gYFxyXG5cdFx0d2lkdGg6IDEwMHB4OyBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LXNpemU6IDE3cHg7IFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfTsgXHJcblx0XHRjb2xvcjogJHtDT0xPUlMuYmxhY2suc3RyaW5nfTsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9OyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICR7Q09MT1JTLmJsYWNrLnN0cmluZ31cclxuXHRgO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRpdGxlU3R5bGUgPSBgXHJcblx0XHRmb250LXNpemU6IDQwcHg7IFxyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307IFxyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfWA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBzZWN0aW9uVGl0bGVTdHlsZSA9IGBcclxuXHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9OyBcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU31cclxuXHRgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYmFzaWNUZXh0U3R5bGUgPSBgXHJcblx0XHRmb250LXNpemU6IDIwcHg7IFxyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307IFxyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfVxyXG5cdGA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBzdHlsaXplZCBCdXR0b24gRE9NIEVsZW1lbnQgd2l0aCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGF0dGFjaGVkXHJcbiAgICAgKiB0byBpdC4gVGhlIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrIHN0YXJ0cyBhIG5ldyBzY2VuZSB1c2luZyB0aGUgc2NlbmUga2V5XHJcbiAgICAgKiBwYXNzZWQgaW4gYXJndW1lbnRzIGFuZCBzdG9wcyBhbGwgc291bmRzIGlmIHN0b3BTb3VuZHMgc2V0IHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbWFpbkJ0bihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBzdG9wU291bmRzOiBib29sZWFuO1xyXG4gICAgICAgIHNjZW5lUGx1Z2luOiBQaGFzZXIuU2NlbmVzLlNjZW5lUGx1Z2luO1xyXG4gICAgICAgIG5ld1NjZW5lS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgc2NlbmVEYXRhPzogb2JqZWN0O1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgIGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgICAgIGdldEdhbWVIZWlnaHQocGFyYW1zLnNjZW5lKSAtIDkwLFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgIEd1aS5tYWluQnRuU3R5bGUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5hZGRMaXN0ZW5lcihcImNsaWNrXCIpXHJcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5zb3VuZC5hZGQoXCJjbGlja1NvdW5kXCIpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnN0b3BTb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZVBsdWdpbi5zdGFydChwYXJhbXMubmV3U2NlbmVLZXksIHBhcmFtcy5zY2VuZURhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1dHRvbiB0aGF0IGNoYW5nZXMgYW4gaW1hZ2UgKGltZykgdGV4dHVyZSB3aXRoIGFub3RoZXIgKHRleHR1cmVzKSxcclxuICAgICAqIG9uZSBieSBvbmUuIExpa2UgYSBzbGlkZXNob3cuXHJcbiAgICAgKiBAcGFyYW0gaW1nOiBhIHBoYXNlciBnYW1lIG9iamVjdCBpbWFnZSB0aGF0IGFjdCBhcyBhIGNvbnRhaW5lciBpbiBhIHdheS5cclxuICAgICAqIEBwYXJhbSB0ZXh0dXJlczogdGhlIHRleHR1cmVzIHRvIGFwcGVuZCB0byBpbWcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2xpZGVCdG4ocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICBpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgICAgICB0ZXh0dXJlS2V5czogQXJyYXk8c3RyaW5nPjtcclxuICAgICAgICBjYWxsYmFjaz86IEZ1bmN0aW9uO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xyXG5cclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy55LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgIEd1aS5zZWNvbmRhcnlCdG5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZExpc3RlbmVyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLnNvdW5kLmFkZChcImNsaWNrU291bmRcIikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBwYXJhbXMudGV4dHVyZUtleXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBhcmFtcy5pbWcuc2V0VGV4dHVyZShwYXJhbXMudGV4dHVyZUtleXNbY3VycmVudEluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5jYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdGl0bGUocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHRleHQ6IHN0cmluZyB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgNjQsXHJcbiAgICAgICAgICAgIFwiaDNcIixcclxuICAgICAgICAgICAgR3VpLnRpdGxlU3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlY3Rpb25UaXRsZShwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgIFwiaDRcIixcclxuICAgICAgICAgICAgR3VpLnNlY3Rpb25UaXRsZVN0eWxlLFxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaW1wbGVQYXJhZ3JhcGgocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHBhcmFtcy55LFxyXG4gICAgICAgICAgICBcInBcIixcclxuICAgICAgICAgICAgR3VpLmJhc2ljVGV4dFN0eWxlLFxyXG4gICAgICAgICAgICBwYXJhbXMudGV4dFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIge1xyXG4gICAgcHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGhWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBkZWNyZWFzZShwQW1vdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlIC09IHBBbW91bnQgKiAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoVmFsdWUgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLndoaXRlLmhleCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPiA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbUJsdWUuaGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbVJlZC5oZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWx0aFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLmhlYWx0aFZhbHVlKTtcclxuICAgICAgICAvLyBUaGUgYWN0dWFsIGhlYWx0aCBqYXVnZSB5b3Ugc2VlIGRlY3JlYXNpbmdcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgaGVhbHRoV2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgc2lkZTogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmJhciA9IHBhcmFtcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY7XHJcblx0XHR0aGlzLmhlYWx0aFZhbHVlID0gMjAwO1xyXG5cdFx0XHJcblx0XHRpZiAocGFyYW1zLnNpZGUgPT09IFwibGVmdFwiKSB7XHJcblx0XHRcdHRoaXMueCA9IDYwO1xyXG5cdFx0XHR0aGlzLnkgPSA0MDtcclxuXHRcdH0gZWxzZSBpZiAocGFyYW1zLnNpZGUgPT09IFwicmlnaHRcIikge1xyXG5cdFx0XHR0aGlzLnggPSAoZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkpIC0gdGhpcy53aWR0aCAtIDY0O1xyXG5cdFx0XHR0aGlzLnkgPSA0MDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNpZGUgbXVzdCBiZSAncmlnaHQnIG9yICdsZWZ0J1wiKTtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTLCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh1ZCB7XHJcbiAgICBwcml2YXRlIGF2YXRhcjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuICAgIHByaXZhdGUgdGV4dFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHVzZXI6IFVzZXIgfSkge1xyXG4gICAgICAgIHRoaXMudGV4dFN0eWxlID0gYFxyXG5cdFx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9OyBcclxuXHRcdFx0bWFyZ2luOiAwOyBcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4OyBcclxuXHRcdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307XHJcblx0XHRcdHBhZGRpbmc6IDEwcHhcclxuXHRcdGA7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmF2YXRhciA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5pbWFnZSgwLCAzNSwgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5KVxyXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaDVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTdHlsZSxcclxuXHRcdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLmRldGFpbHMubmlja25hbWUgKyBcIiB8IFwiICsgXHJcblx0XHRcdFx0XHRwYXJhbXMudXNlci51c2VybmFtZSArIFxyXG5cdFx0XHRcdFx0XCIgfCBSYXRpbyBcIiArIHBhcmFtcy51c2VyLnJhdGlvICsgXCIlXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgICAgICAuaW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcbiAgICAgICAgICAgICAgICAgICAgMzUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaDVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTdHlsZSxcclxuXHRcdFx0XHRcdHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLmRldGFpbHMubmlja25hbWUgKyAgXCIgfCBcIiArIFxyXG5cdFx0XHRcdFx0cGFyYW1zLnVzZXIudXNlcm5hbWUgKyBcclxuXHRcdFx0XHRcdFwiIHwgUmF0aW8gXCIgKyBwYXJhbXMudXNlci5yYXRpbyArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgVGlsZW1hcCB9IGZyb20gXCIuL1RpbGVtYXBcIjtcclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBBIExldmVsIGNvbnNpc3RzIG9mIDogYSBiYWNrZ3JvdW5kICsgYSBtdXNpYyB0aGVtZSArIGEgdGlsZW1hcCArIGEgbmFtZSArXHJcbiAqIGEgdGh1bWJuYWlsLlxyXG4gKiBJdCBpbml0cyB0aGUgZGlmZmVyZW50IGtleXMgbmVlZGVkIGFuZCBjcmVhdGVzL2RyYXcgdGhlIGJhY2tncm91bmQsXHJcbiAqIHRoZSB0aWxlbWFwIChieSBpbnN0YW5jaWF0ZSBpdCkgYW5kIHBsYXkgdGhlIG11c2ljIHRoZW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExldmVsIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RpbGVtYXA6IFRpbGVtYXA7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtdXNpY0tleTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGlsZW1hcCgpOiBUaWxlbWFwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGlsZW1hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRodW1ibmFpbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IGlkOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gcGFyYW1zLm5hbWU7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kS2V5ID0gYGxldmVsJHt0aGlzLmlkfUJhY2tncm91bmRgO1xyXG4gICAgICAgIHRoaXMubXVzaWNLZXkgPSBgbGV2ZWwke3RoaXMuaWR9VGhlbWVgO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBsZXZlbCR7dGhpcy5pZH1UaHVtYm5haWxgO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShzY2VuZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl90aWxlbWFwID0gbmV3IFRpbGVtYXAoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKHRoaXMubXVzaWNLZXkpLnBsYXkoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdCYXIge1xyXG5cdHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcblx0cHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHRwcml2YXRlIGJhclg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhclk6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhcldpZHRoOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJIZWlnaHQ6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBiYXJBbHBoYTogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIGJveDogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94WTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94V2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94Q29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGJveEFscGhhOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblx0cHJpdmF0ZSBfcHJvZ3Jlc3NUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcblx0cHVibGljIGdldCBwcm9ncmVzc1RleHQoKTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Byb2dyZXNzVGV4dDtcclxuXHR9XHJcblx0XHJcbiAgICBwdWJsaWMgZHJhdyhwVmFsdWUpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmNsZWFyKCk7XHJcblx0XHR0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcblx0XHR0aGlzLmJhci5maWxsUmVjdCh0aGlzLmJhclgsIHRoaXMuYmFyWSwgdGhpcy5iYXJXaWR0aCAqIHBWYWx1ZSwgdGhpcy5iYXJIZWlnaHQpO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYmFyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuYm94LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMudGV4dC5kZXN0cm95KCk7XHJcblx0XHR0aGlzLnByb2dyZXNzVGV4dC5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBwYXJhbXMuc2NlbmU7XHJcblxyXG5cdFx0dGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG5cdFx0dGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuXHRcdHRoaXMuYmFySGVpZ2h0ID0gMzA7XHJcblx0XHR0aGlzLmJhclggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYmFyV2lkdGgvMik7XHJcblx0XHR0aGlzLmJhclkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJhckhlaWdodC8yKTtcclxuXHRcdHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tQmx1ZS5oZXg7XHJcblx0XHR0aGlzLmJhckFscGhhID0gMC44O1xyXG5cdFx0XHJcblx0XHR0aGlzLmJveCA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcblx0XHR0aGlzLmJveFdpZHRoID0gdGhpcy5iYXJXaWR0aCArIDEwO1xyXG5cdFx0dGhpcy5ib3hIZWlnaHQgPSB0aGlzLmJhckhlaWdodCArIDEwO1xyXG5cdFx0dGhpcy5ib3hYID0gKGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJveFdpZHRoLzIpO1xyXG5cdFx0dGhpcy5ib3hZID0gKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMikgLSAodGhpcy5ib3hIZWlnaHQvMik7XHJcblx0XHR0aGlzLmJveENvbG9yID0gQ09MT1JTLndoaXRlLmhleDtcclxuXHRcdHRoaXMuYm94QWxwaGEgPSAwLjM7XHJcblx0XHRcclxuXHRcdHRoaXMuYm94LmZpbGxTdHlsZSh0aGlzLmJveENvbG9yLCB0aGlzLmJveEFscGhhKTtcclxuXHRcdHRoaXMuYm94LmZpbGxSZWN0KHRoaXMuYm94WCwgdGhpcy5ib3hZLCB0aGlzLmJveFdpZHRoLCB0aGlzLmJveEhlaWdodCk7XHJcblxyXG5cdFx0dGhpcy50ZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG5cdFx0XHR4OiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMixcclxuXHRcdFx0eTogKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMikgKyA0MCxcclxuXHRcdFx0dGV4dDogXCJMb2FkaW5nLi4uXCIsXHJcblx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0Zm9udDogJzIwcHggbW9ub3NwYWNlJyxcclxuXHRcdFx0XHRmaWxsOiBDT0xPUlMud2hpdGUuc3RyaW5nXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0LnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG5cdFx0dGhpcy5fcHJvZ3Jlc3NUZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG5cdFx0XHR4OiAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpLCBcclxuXHRcdFx0eTogKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkvMiksXHJcblx0XHRcdHRleHQ6IFwiMCVcIixcclxuXHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiAnMThweCBtb25vc3BhY2UnLFxyXG5cdFx0XHRcdGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9wcm9ncmVzc1RleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuL1Byb2plY3RpbGVcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vSGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSBfcHJvamVjdGlsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSByaWdodEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgc2hvb3RLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwcml2YXRlIGxhc3RQcmVzc2VkS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuICAgIHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBzaG9vdFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIHByaXZhdGUgbGFzdFNob290OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2eDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBncmF2aXR5WTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYm91bmNlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJ1bGxldFByb29mOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgU1RBVEVTID0ge1xyXG4gICAgICAgIE5PUk1BTDogXCJOT1JNQUxcIixcclxuICAgICAgICBIVVJUOiBcIkhVUlRcIixcclxuICAgICAgICBERUFEOiBcIkRFQURcIixcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldCBwcm9qZWN0aWxlcygpOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0aWxlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBodXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bGxldFByb29mID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFsdGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmRlY3JlYXNlKDIwKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuc3RhdGUgIT09IHRoaXMuU1RBVEVTLkhVUlQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUodGhpcy5TVEFURVMuSFVSVCk7XHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlQnVsbGV0UHJvb2YoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0UHJvb2YgPT09IGZhbHNlKSB0aGlzLmJ1bGxldFByb29mID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTb3VuZHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5qdW1wU291bmQgPSB0aGlzLnNjZW5lLnNvdW5kLmFkZChcImp1bXBTb3VuZFwiKTtcclxuICAgICAgICB0aGlzLnNob290U291bmQgPSB0aGlzLnNjZW5lLnNvdW5kLmFkZChcInNob290U291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Vml0YWxzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0UHJvb2YgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQaHlzaWNzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eVkgPSAxMDAwO1xyXG4gICAgICAgIHRoaXMuanVtcFZlbG9jaXR5ID0gLTYwMDtcclxuICAgICAgICB0aGlzLnZ4ID0gMTUwO1xyXG4gICAgICAgIHRoaXMuYm91bmNlID0gMC41O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlQaHlzaWNzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zZXRHcmF2aXR5WSh0aGlzLmdyYXZpdHlZKTtcclxuICAgICAgICB0aGlzLnNldEJvdW5jZSh0aGlzLmJvdW5jZSk7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0Q29udHJvbHMocEtleXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmp1bXBLZXkgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShwS2V5c1tcImp1bXBcIl0pO1xyXG4gICAgICAgIHRoaXMucmlnaHRLZXkgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShwS2V5c1tcInJpZ2h0XCJdKTtcclxuICAgICAgICB0aGlzLmxlZnRLZXkgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShwS2V5c1tcImxlZnRcIl0pO1xyXG4gICAgICAgIHRoaXMuc2hvb3RLZXkgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShwS2V5c1tcInNob290XCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRIZWFsdGhCYXIocEhlYWx0aEJhcjogSGVhbHRoQmFyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBwSGVhbHRoQmFyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFNob290aW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGFzdFNob290ID0gMDtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0aWxlcyA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS50aW1lLm5vdyA+IHRoaXMubGFzdFNob290KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2plY3RpbGVzLmFkZChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9qZWN0aWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyBidWxsZXQgc3RhcnRpbmcgcG9pbnQgaWYgc3ByaXRlIGlzIGZsaXBwZWQgb24gWCBheGlzLlxyXG4gICAgICAgICAgICAgICAgICAgIHg6ICF0aGlzLmZsaXBYID8gdGhpcy54ICsgMjAgOiB0aGlzLnggLSAyMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnkgKyAxMSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBCdWxsZXQgZGlyZWN0aW9uIChsZWZ0L3JpZ2h0KSBiYXNlZCBvbiBsYXN0IHByZXNzZWQga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKGkuZSBkaXJlY3Rpb24gb2YgdGhlIHBsYXllcikuIERlZmF1bHQ6IGdvZXMgcmlnaHQuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLmxlZnRLZXkgPyAtMSA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUtleTogXCJwcm9qZWN0aWxlXCIsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTaG9vdCA9IHRoaXMuc2NlbmUudGltZS5ub3cgKyA1MDA7XHJcbiAgICAgICAgICAgIC8vIFBsYXlpbmcgc291bmQgaGVyZSBlbnN1cmVzIHVzIGl0IGlzIHBsYXllZCBvbmx5IG9uY2UgZXZlcnkgc2hvb3QuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3RTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxpcHBpbmcgdGhlIHNwcml0ZSBvbiBpdHMgWCBheGlzLCBkZXBlbmRpbmcgb24gd2hpY2ggZGlyZWN0aW9uIHlvdSBnby5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVTcHJpdGVGbGlwcGluZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5sZWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIC8vIENoYW5nZWQgc3ByaXRlIG9yaWVudGF0aW9uOiBmYWNpbmcgbGVmdC5cclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLnJpZ2h0S2V5KSB7XHJcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0LlxyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgc3ByaXRlIG9yaWVudGF0aW9uOiBmYWNpbmcgcmlnaHQuXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVKdW1waW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmp1bXBLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHkuYmxvY2tlZC5kb3duIHx8IHRoaXMuYm9keS50b3VjaGluZy5kb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WSh0aGlzLmp1bXBWZWxvY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgaWRsaW5nIChkb2luZyBub3RoaW5nKSBBTkQgaWRsaW5nLXNob290aW5nLlxyXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG4gICAgICogY3JlYXRlIHNob290cy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVJZGxpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoMCk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SURMRWAsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBJZGxpbmctU2hvb3RpbmcuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvb3RLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVfU0hPT1RgLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSB3YWxraW5nIEFORCB3YWxraW5nLXNob290aW5nLlxyXG4gICAgICogVGhpcyBpbmNsdWRlcyBhbmltYXRpb24gcGxheWluZywgY2hlY2tpbmcga2V5IHByZXNzLCBzZXR0aW5nIHZlbG9jaXR5LFxyXG4gICAgICogY3JlYXRlIHNob290cyBhbmQgcmVtZW1iZXJpbmcgbGFzdCBwcmVzc2VkIGtleS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVXYWxraW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtgLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gV2Fsa2luZyA6IGdvaW5nIHJpZ2h0XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKHRoaXMudngpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RQcmVzc2VkS2V5ID0gdGhpcy5yaWdodEtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2Fsa2luZyA6IGdvaW5nIGxlZnRcclxuICAgICAgICBpZiAodGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgtdGhpcy52eCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFByZXNzZWRLZXkgPSB0aGlzLmxlZnRLZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXYWxraW5nLVNob290aW5nXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvb3RLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fVdBTEtfU0hPT1RgLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dHVyZUtleTogc3RyaW5nO1xyXG4gICAgICAgIGNvbnRyb2xLZXlzOiBvYmplY3Q7XHJcbiAgICAgICAgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0UGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U291bmRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Vml0YWxzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SGVhbHRoQmFyKHBhcmFtcy5oZWFsdGhCYXIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNob290aW5nKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29udHJvbHMocGFyYW1zLmNvbnRyb2xLZXlzKTtcclxuXHJcbiAgICAgICAgLy8gUmVzdHJhaW4gdGhlIGJvdW5kaW5nQm94XHJcbiAgICAgICAgdGhpcy5zZXRTaXplKDIwLCA2MCk7XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5OT1JNQUwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmlzRGVhZCgpKSB7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFUy5ERUFEO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuTk9STUFMKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZGV0YWNoZWQgZnJvbSB0aGUgb3RoZXIgYmxvY2sgYmVjYXVzZSB5b3UgY2FuIGRvIGFueXRoaW5nXHJcbiAgICAgICAgICAgIC8vIHdoaWxlIGp1bXBpbmc6IHdhbGsvd2Fsay1zaG9vdCwgaWRsZS9pZGxlLXNob290LiBTbyBpdCBpc24ndFxyXG4gICAgICAgICAgICAvLyBkZXBlbmRhbnQgb2Ygd2hldGhlciB5b3UncmUgcHJlc3NpbmcgbGVmdCBvciByaWdodCBvciB3aGF0ZXZlci5cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVKdW1waW5nKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdodEtleS5pc0Rvd24gfHwgdGhpcy5sZWZ0S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXYWxraW5nKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUlkbGluZygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0XHR0aGlzLmhhbmRsZVNwcml0ZUZsaXBwaW5nKCk7XHJcblx0XHRcdFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuSFVSVCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ISVRgLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG5cclxuXHRcdFx0Ly8gVGhlIG9ubHkgdGhpbmcgdGhhdCBtYWtlIHRoZSBwbGF5ZXIgcmV0dXJuIHRvIG5vcm1hbCBpcyB0aW1lXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLk5PUk1BTCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkRFQUQpIHtcclxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgcmVzZXQgc3RhdGUgdG8gTk9STUFMIGNhdXNlIGl0J3MgZW5kIG9mIHRoZSBnYW1lXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fURFQURgLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBQbGF5ZXIgU3RhdGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICAgIHByaXZhdGUgdng6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMueCA+IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPiBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueCA8IDAgfHxcclxuICAgICAgICAgICAgdGhpcy55IDwgMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEFuaW1hdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwiY29sbGlzaW9uRWZmZWN0MVwiLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJjb2xsaXNpb25FZmZlY3QxXCIsIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAxLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudnggPSA3MDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRBbmltYXRpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKHRoaXMuZGlyZWN0aW9uICogdGhpcy52eCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdGlsZSBkZXN0cm95ZWQgY2F1c2Ugb3V0IG9mIHdvcmxkIGJvdW5kc1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBUcmFtcG9saW5lIH0gZnJvbSBcIi4vVHJhbXBvbGluZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG4gICAgcHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG4gICAgcHJpdmF0ZSB0aWxlc2V0OiBQaGFzZXIuVGlsZW1hcHMuVGlsZXNldDtcclxuICAgIHByaXZhdGUgX21haW5MYXllcjogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllcjtcclxuXHRwcml2YXRlIHN1YkxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG5cdHByaXZhdGUgX3RyYW1wb2xpbmU6IFRyYW1wb2xpbmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBsYXllciB0aGF0IGNvbGxpZGVzOiAnY29sbGlkZXMnIHNldCB0byB0cnVlIGluIFRpbGVkLlxyXG4gICAgICovXHJcbiAgICBnZXQgbWFpbkxheWVyKCk6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluTGF5ZXI7XHJcblx0fVxyXG5cclxuXHRnZXQgdHJhbXBvbGluZSgpOiBUcmFtcG9saW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbXBvbGluZTtcclxuXHR9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IGlkOiBudW1iZXIgfSkge1xyXG5cclxuICAgICAgICB0aGlzLm1hcCA9IHBhcmFtcy5zY2VuZS5tYWtlLnRpbGVtYXAoe1xyXG4gICAgICAgICAgICBrZXk6IGBsZXZlbCR7cGFyYW1zLmlkfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXNldCA9IHRoaXMubWFwLmFkZFRpbGVzZXRJbWFnZShcclxuICAgICAgICAgICAgYGxldmVsJHtwYXJhbXMuaWR9LXRpbGVzaGVldGAsXHJcbiAgICAgICAgICAgIGBsZXZlbCR7cGFyYW1zLmlkfVRpbGVzaGVldGBcclxuXHRcdCk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLl9tYWluTGF5ZXIgPSB0aGlzLm1hcC5jcmVhdGVTdGF0aWNMYXllcihcclxuICAgICAgICAgICAgXCJtYWluTGF5ZXJcIixcclxuICAgICAgICAgICAgdGhpcy50aWxlc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFpbkxheWVyLnNldENvbGxpc2lvbkJ5UHJvcGVydHkoe1xyXG4gICAgICAgICAgICBjb2xsaWRlczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJMYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG4gICAgICAgICAgICBcInN1YkxheWVyXCIsXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXNldCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLl90cmFtcG9saW5lID0gbmV3IFRyYW1wb2xpbmUoe1xyXG5cdFx0XHRzY2VuZTogcGFyYW1zLnNjZW5lLCBcclxuXHRcdFx0eDogNDAwLCBcclxuXHRcdFx0eTogZ2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpIC0gdGhpcy50aWxlc2V0LnRpbGVIZWlnaHQgKiAyLjVcclxuXHRcdH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbXBvbGluZSBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcblx0XHRzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgXCJ0cmFtcG9saW5lXCIpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi9DaGFyYWN0ZXJcIjtcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9MZXZlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3VzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yYXRpbzogbnVtYmVyO1xyXG5cdHByaXZhdGUgX3NjcmVlblNpZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2NoYXJhY3Rlckluc3RhbmNlOiBDaGFyYWN0ZXI7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJJbnN0YW5jZTogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBfbGV2ZWxJbnN0YW5jZTogTGV2ZWw7XHJcblx0cHVibGljIGdhbWVzOiBBcnJheTxvYmplY3Q+O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1c2VybmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJhdGlvKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NyZWVuU2lkZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JlZW5TaWRlO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYXJhY3RlciB0aGUgdXNlciBoYXMgY2hvc2VuIGluIHRoZSBNZW51LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGNoYXJhY3Rlckluc3RhbmNlKCk6IENoYXJhY3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJhY3Rlckluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxheWVyIGNyZWF0ZWQgaW4gR2FtZSBTY2VuZSBiYXNlZCBvbiBVc2VyJ3MgY2hhcmFjdGVyIGNob2ljZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwbGF5ZXJJbnN0YW5jZSgpOiBQbGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExldmVsIHRoZSB1c2VyIGhhcyBjaG9zZW4gaW4gdGhlIE1lbnUsIG1ha2VzIG1vcmUgc2Vuc2Ugd2hlbiBwbGF5aW5nIHNvbG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbGV2ZWxJbnN0YW5jZSgpOiBMZXZlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjaGFyYWN0ZXJJbnN0YW5jZSh2OiBDaGFyYWN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBwbGF5ZXJJbnN0YW5jZSh2OiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJJbnN0YW5jZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsZXZlbEluc3RhbmNlKHY6IExldmVsKSB7XHJcbiAgICAgICAgdGhpcy5fbGV2ZWxJbnN0YW5jZSA9IHY7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0IHJhdGlvKHY6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fcmF0aW8gPSB2O1xyXG5cdH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHtcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcmF0aW86IG51bWJlcjtcclxuXHRcdHNjcmVlblNpZGU6IHN0cmluZztcclxuXHRcdGdhbWVzOiBBcnJheTxvYmplY3Q+O1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuX2lkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuX3VzZXJuYW1lID0gcGFyYW1zLnVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMuX3JhdGlvID0gcGFyYW1zLnJhdGlvO1xyXG5cdFx0dGhpcy5fc2NyZWVuU2lkZSA9IHBhcmFtcy5zY3JlZW5TaWRlO1xyXG5cdFx0dGhpcy5nYW1lcyA9IHBhcmFtcy5nYW1lcztcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9vYmplY3RzL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0JhciB9IGZyb20gXCIuLi9vYmplY3RzL0xvYWRpbmdCYXJcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsZXZlbHM6IEFycmF5PExldmVsPjtcclxuICAgIHByaXZhdGUgdXNlcnM6IEFycmF5PFVzZXI+O1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJzOiBBcnJheTxDaGFyYWN0ZXI+O1xyXG5cclxuICAgIHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBidG46IFBoYXNlci5HYW1lT2JqZWN0cy5ET01FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblx0cHJpdmF0ZSBsb2FkaW5nQmFyOiBMb2FkaW5nQmFyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWxzID0gW1xyXG4gICAgICAgICAgICBuZXcgTGV2ZWwoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNpbWV0aWVyZVwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IExldmVsKHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQcmFpcmllXCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMudXNlcnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiUG9vbEdob3VsXCIsXHJcblx0XHRcdFx0cmF0aW86IDAsXHJcblx0XHRcdFx0Z2FtZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuU2lkZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICAgICAgbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJKb2xseUNsZXZlclwiLFxyXG5cdFx0XHRcdHJhdGlvOiAwLFxyXG5cdFx0XHRcdGdhbWVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNjcmVlblNpZGU6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgfSksXHJcblx0XHRdO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gW1xyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJTdGV2aWVcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiQ2Fyb2xpbmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiS3Jpc3RvZlwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdHlcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiT3JvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJBbGV4YVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIFVzaW5nIHRoZSBzY2VuZSBEYXRhIE1hbmFnZXIgdG8gc3RvcmUgZGF0YSBvbiBhIHNjZW5lIGxldmVsLlxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCB0aGlzLnVzZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwiY2hhcmFjdGVyc1wiLCB0aGlzLmNoYXJhY3RlcnMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJsZXZlbHNcIiwgdGhpcy5sZXZlbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkLnBhY2soXCJwcmVsb2FkXCIsIFwiYXNzZXRzL3BhY2suanNvblwiLCBcInByZWxvYWRcIik7XHJcblxyXG4gICAgICAgIC8vIFByZWxvYWQgYWxsIGNoYXJhY3RlcnMgYXRsYXNlcyA6IGEganNvbiBmaWxlIHRoYXQgYWN0cyBhc1xyXG4gICAgICAgIC8vIGFzIGEgXCJtYXBcIi9cImxpbmtcIiB0byBhIHBuZyBzcHJpdGVzaGVldC5cclxuXHRcdC8vIFVzZWQgZm9yIGRyYXdpbmcgUExheWVyIHRleHR1cmUgYW5kIHNldCBhbmltYXRpb25zLlxyXG5cdFx0Y29uc3QgTlVNQkVSX09GX0NIQVJBQ1RFUlMgPSA2O1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDw9IE5VTUJFUl9PRl9DSEFSQUNURVJTOyBuKyspIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkLmF0bGFzKFxyXG4gICAgICAgICAgICAgICAgYGNoYXJhY3RlciR7bn1gLFxyXG4gICAgICAgICAgICAgICAgYGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tc3ByaXRlc2hlZXQucG5nYCxcclxuICAgICAgICAgICAgICAgIGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LWF0bGFzLmpzb25gXHJcbiAgICAgICAgICAgICk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMubG9hZGluZ0JhciA9IG5ldyBMb2FkaW5nQmFyKHsgc2NlbmU6IHRoaXMgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbihcInByb2dyZXNzXCIsICh2YWx1ZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZHJhdyh2YWx1ZSk7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzc1RleHQuc2V0VGV4dCgoTWF0aC5mbG9vcih2YWx1ZSoxMDApKSArIFwiJVwiKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwiY29tcGxldGVcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdCYXIuZGVzdHJveSgpO1xyXG5cdFx0fSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLm11c2ljVGhlbWUgPSB0aGlzLnNvdW5kLmFkZChcIm1lbnVUaGVtZVwiKTtcclxuICAgICAgICB0aGlzLm11c2ljVGhlbWUucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZEZvckdVSVNjZW5lc1wiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLjUsXHJcbiAgICAgICAgICAgIFwibWFpbkxvZ29cIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIEd1aS5zaW1wbGVQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogdGhpcy5sb2dvLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMubG9nby55ICsgOTAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiV2VsY29tZSB0byB0aGUgZmlnaHQgIVwiLFxyXG5cdFx0fSk7XHJcblxyXG4gICAgICAgIEd1aS5tYWluQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICBzdG9wU291bmRzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIG5ld1NjZW5lS2V5OiBcIk1lbnVcIixcclxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGlzIHNjZW5lIGRhdGEgdG8gdGhlIG1lbnUgc2NlbmUuXHJcbiAgICAgICAgICAgIHNjZW5lRGF0YTogdGhpcy5kYXRhLmdldEFsbCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIENPTlRST0xLRVlTLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgQm9tYiB9IGZyb20gXCIuLi9vYmplY3RzL0JvbWJcIjtcclxuaW1wb3J0IHsgSHVkIH0gZnJvbSBcIi4uL29iamVjdHMvSHVkXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9IZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vb2JqZWN0cy9MZXZlbFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL29iamVjdHMvVXNlclwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4uL0FuaW1hdGlvbnNcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgR2FtZSBTY2VuZSBpcyB3aGVyZSBhbGwgdGhlIGFjdGlvbnMgdGFrZXMgcGxhY2UuXHJcbiAqIEFjdG9ycyBzdWNoIGFzIFBsYXllciwgQm9tYnMgYW5kIEJvbWIgYXJlIGluc3RhbmNpYXRlZC5cclxuICogU3RhdGljIGVsZW1lbnRzIHN1Y2ggYXMgSFVEcyBhbmQgSGVhbHRoQmFycyAodmlhIFBsYXllcikgYXJlIGluc3RhbmNpYXRlZC5cclxuICogTGV2ZWwgaXMgY3JlYXRlZCAobm90IGluc3RhbmNpYXRlZCksIHdoaWNoIGJhc2ljYWxseSBtZWFucyB0aGF0IFRpbGVtYXAgaXNcclxuICogZHJhd24uIENvbGxpZGVycyBiZXR3ZWVuIGFjdG9ycyBhcmUgaGFuZGxlZC4gUGxheWVyIGFuaW1hdGlvbnMgYXJlIGNyZWF0ZWQuXHJcbiAqIEl0IHNldHMgYSBTY2VuZSBXaW5uZXIgd2hlbiBvbmUgb2YgdGhlIHVzZXJzIFBMQVlFUiBJTlNUQU5DRVMgaXMgZGVhZCBhbmRcclxuICogdGhlbiBzdGFydCB0aGUgbmV3IHNjZW5lIChHYW1lb3ZlciBTY2VuZSkuXHJcbiAqIEl0IHRha2VzIHRoZSBkYXRhIG9iamVjdCBmcm9tIHRoZSBNZW51IFNjZW5lIChjb21wb3NlZCBvZiBhbiBhcnJheSBvZiB1c2VycyksXHJcbiAqIGF2YWlsYWJsZSBoZXJlIGluIHRoZSBpbml0KCkgZXQgY3JlYXRlKCkgY2FsbGJhY2tzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIHBsYXllcjE6IFBsYXllcjtcclxuICAgIHByaXZhdGUgcGxheWVyMjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBodWQxOiBIdWQ7XHJcbiAgICBwcml2YXRlIGh1ZDI6IEh1ZDtcclxuICAgIHByaXZhdGUgdGlsZW1hcDogTGV2ZWxbXCJ0aWxlbWFwXCJdO1xyXG4gICAgcHJpdmF0ZSBib21iczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBib21iQ3JlYXRpb25FdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuICAgIHByaXZhdGUgbmV3U2NlbmVUaW1lZEV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSB3aW5uZXI6IFVzZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDb2xsaWRlcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJvbWJzLCB0aGlzLnRpbGVtYXAubWFpbkxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJvbWJzLCB0aGlzLnBsYXllcjEsIChib21iKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5odXJ0KCk7XHJcbiAgICAgICAgICAgIGJvbWIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMucGxheWVyMiwgKGJvbWIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuICAgICAgICAgICAgYm9tYi5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjIpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG5cdFx0XHRbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEsXHJcbiAgICAgICAgICAgIChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEuaHVydCgpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMixcclxuICAgICAgICAgICAgKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcyxcclxuICAgICAgICAgICAgdGhpcy50aWxlbWFwLm1haW5MYXllcixcclxuICAgICAgICAgICAgKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RpbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyLFxyXG4gICAgICAgICAgICAocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG1lbnVTY2VuZURhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcnNcIiwgbWVudVNjZW5lRGF0YT8udXNlcnMpO1xyXG5cclxuICAgICAgICBBbmltYXRpb25zLmNyZWF0ZUNoYXJhY3RlcnNBbmltcyh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB1c2VyczogdGhpcy5kYXRhLmdldChcInVzZXJzXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5sZXZlbEluc3RhbmNlLmNyZWF0ZSh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmxldmVsSW5zdGFuY2UudGlsZW1hcDtcclxuXHJcbiAgICAgICAgdGhpcy5ib21icyA9IHRoaXMuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9tYkNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogNTAwMCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9tYnMuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCb21iKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIGdldEdhbWVXaWR0aCh0aGlzKSAtIDUwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUtleTogXCJib21iXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogMzAwLFxyXG4gICAgICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5LFxyXG4gICAgICAgICAgICBjb250cm9sS2V5czogQ09OVFJPTEtFWVMuUExBWUVSLlNFVDIsXHJcbiAgICAgICAgICAgIGhlYWx0aEJhcjogbmV3IEhlYWx0aEJhcih7XHJcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgIHNpZGU6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiA5MDAsXHJcbiAgICAgICAgICAgIHk6IDMwMCxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMSxcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2lkZTogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odWQxID0gbmV3IEh1ZCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLmRhdGEudmFsdWVzLnVzZXJzWzBdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh1ZDIgPSBuZXcgSHVkKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMV0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Q29sbGlkZXJzKCk7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgaXMgd2hlcmUgd2UgaGF2ZSB1c2VyPC0tPnBsYXllciBjb25jb3JkYW5jZVxyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5wbGF5ZXJJbnN0YW5jZSA9IHRoaXMucGxheWVyMTtcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV0ucGxheWVySW5zdGFuY2UgPSB0aGlzLnBsYXllcjI7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXllcjEudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBXaW5uZXIgaGFuZGxpbmcuXHJcbiAgICAgICAgLy8gRW50ZXIgd2lubmVyIGhhbmRsaW5nIG1vZGUgaWYgb25lIG9mIHRoZSBwbGF5ZXIgaXMgZGVhZC5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmlzRGVhZCgpIHx8IHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAvLyBNYWtlIHBsYXllcnMgaW52aWNpYmxlIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBuZXh0IHNjZW5lIHRvIHN0YXJ0LlxyXG4gICAgICAgICAgICAvLyBUaGlzIHdheSB3ZSBkb24ndCBoYXZlIHRvIHBhdXNlIHBoeXNpY3MgYnV0IHRoZSB3aW5uZXIgaXMgbm90XHJcbiAgICAgICAgICAgIC8vIGtpbGxlZCBieSB0aGUgYm9tYnMgdGhhdCBhcmUgc3RpbGwgZmFsbGluZy5cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm1ha2VCdWxsZXRQcm9vZigpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIubWFrZUJ1bGxldFByb29mKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWNpZGluZyB3aGljaCBvbmUgaXMgdGhlIHdpbm5lciAodGhlIG9uZSBub3QgZGVhZCkuXHJcblx0XHRcdC8vIFdpbm5lcnMgYXJlIHVzZXJzIG5vdCBwbGF5ZXJzLlxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmICF0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV07XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGxheWVyMS5pc0RlYWQoKSAmJiB0aGlzLnBsYXllcjIuaXNEZWFkKCkpIHtcclxuXHJcblx0XHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMF07XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIyLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTnVsbGluZyB0aGUgd2lubmVyIGlmIHRoZXJlJ3Mgbm8gd2lubmVyIGF0IGFsbFxyXG4gICAgICAgICAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgc2hvdWxkbid0IGV2ZXIgaGFwcGVuIGJ1dCB3aG8ga25vd3MuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpbiBuZXh0IHNjZW5lIGlmIHdpbm5lciBpcyB0cnV0aHksIHByaW50aW5nIGFsdCB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBub3QgKGxpa2UgaWYgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lciA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ3aW5uZXJcIiwgdGhpcy53aW5uZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhyZWUgc2Vjb25kcyBkZWxheSBiZWZvcmUgbGF1bmNoaW5nIHRoZSBuZXh0IHNjZW5lXHJcbiAgICAgICAgICAgIHRoaXMubmV3U2NlbmVUaW1lZEV2ZW50ID0gdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwiR2FtZW92ZXJcIiwgdGhpcy5kYXRhLmdldEFsbCgpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuLi9TdG9yYWdlXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJHYW1lb3ZlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVvdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBtYWluTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuXHR9XHJcblx0XHJcblx0cHJpdmF0ZSBkaXNwbGF5UmVwb3J0KCk6dm9pZCB7XHJcblx0XHRsZXQgdXNlcm5hbWVYID0gKGdldEdhbWVXaWR0aCh0aGlzKS8yKSAtIDIwMDtcclxuXHRcdGxldCB1c2VybmFtZVkgPSAyODA7XHJcblx0XHRsZXQgYmFkZ2VYID0gMTAwO1xyXG5cdFx0Y29uc3QgYmFkZ2VTcGFjaW5nID0gNDA7XHJcblx0XHRjb25zdCBiYWRnZUxpbWl0ID0gIGdldEdhbWVXaWR0aCh0aGlzKSAtIDgwO1xyXG5cdFx0Y29uc3QgaW50ZXJsaW5lID0gNTY7XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVzZXRCYWRnZVgoKSB7XHJcblx0XHRcdGJhZGdlWCA9IDEwMDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIikuZm9yRWFjaCh1c2VyID0+IHtcclxuXHRcdFx0R3VpLnNpbXBsZVBhcmFncmFwaCh7XHJcblx0XHRcdFx0c2NlbmU6IHRoaXMsXHJcblx0XHRcdFx0eDogdXNlcm5hbWVYLFxyXG5cdFx0XHRcdHk6IHVzZXJuYW1lWSxcclxuXHRcdFx0XHR0ZXh0OiB1c2VyLnVzZXJuYW1lXHJcblx0XHRcdH0pO1xyXG5cdFxyXG5cdFx0XHR1c2VyLmdhbWVzLmZvckVhY2goZ2FtZSA9PiB7XHJcblx0XHRcdFx0aWYgKGJhZGdlWCA8IGJhZGdlTGltaXQpe1xyXG5cdFx0XHRcdFx0dGhpcy5hZGQuaW1hZ2UoXHJcblx0XHRcdFx0XHRcdHVzZXJuYW1lWCArIGJhZGdlWCxcclxuXHRcdFx0XHRcdFx0dXNlcm5hbWVZLFxyXG5cdFx0XHRcdFx0XHQoZ2FtZS53aW4gPT09IHRydWUpID8gXCJzdGFyXCIgOiBcInRvbWJzdG9uZVwiXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0YmFkZ2VYICs9IGJhZGdlU3BhY2luZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dXNlcm5hbWVZICs9IGludGVybGluZTtcclxuXHRcdFx0cmVzZXRCYWRnZVgoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXRSYXRpb3MoKTp2b2lkIHtcclxuXHRcdHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKS5mb3JFYWNoKHVzZXIgPT4ge1xyXG5cdFx0XHRsZXQgd29uR2FtZXMgPSB1c2VyLmdhbWVzLmZpbHRlcihnYW1lID0+IGdhbWUud2luID09PSB0cnVlKS5sZW5ndGg7XHJcblx0XHRcdGxldCB0b3RhbEdhbWVzID0gdXNlci5nYW1lcy5sZW5ndGg7XHJcblx0XHRcdHVzZXIucmF0aW8gPSBNYXRoLmZsb29yKCh3b25HYW1lcyAvIHRvdGFsR2FtZXMpICogMTAwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2dHYW1lKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuZGF0YS5nZXQoXCJ3aW5uZXJcIikuaWQgPT09IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5pZCkge1xyXG5cdFx0XHR0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMF0uZ2FtZXMucHVzaCh7IHdpbjogdHJ1ZSB9KTtcclxuXHRcdFx0dGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmdhbWVzLnB1c2goeyB3aW46IGZhbHNlIH0pO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmRhdGEuZ2V0KFwid2lubmVyXCIpLmlkID09PSB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV0uaWQpIHtcclxuXHRcdFx0dGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmdhbWVzLnB1c2goeyB3aW46IGZhbHNlIH0pO1xyXG5cdFx0XHR0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV0uZ2FtZXMucHVzaCh7IHdpbjogdHJ1ZSB9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgaW5pdChnYW1lU2NlbmVEYXRhKSB7XHJcblx0XHR0aGlzLmRhdGEuc2V0KFwidXNlcnNcIiwgZ2FtZVNjZW5lRGF0YS51c2Vycyk7XHJcblxyXG4gICAgICAgIGlmIChnYW1lU2NlbmVEYXRhLndpbm5lcikge1xyXG5cclxuXHRcdFx0dGhpcy5kYXRhLnNldChcIndpbm5lclwiLCBnYW1lU2NlbmVEYXRhLndpbm5lcik7XHJcblx0XHRcdHRoaXMubWFpbk1lc3NhZ2UgPSBgJHt0aGlzLmRhdGEuZ2V0KFwid2lubmVyXCIpLnVzZXJuYW1lfSBXT04gVEhJUyBHQU1FICFgO1xyXG5cdFx0XHR0aGlzLmxvZ0dhbWUoKTtcclxuXHRcdFx0dGhpcy5zZXRSYXRpb3MoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5NZXNzYWdlID0gXCJJVCdTIEEgRFJBVyAhXCI7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZEZvckdVSVNjZW5lc1wiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgR3VpLnRpdGxlKHsgc2NlbmU6IHRoaXMsIHRleHQ6IFwiRU5EIE9GIEdBTUVcIiB9KTtcclxuXHJcbiAgICAgICAgR3VpLnNpbXBsZVBhcmFncmFwaCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcykvMixcclxuICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLm1haW5NZXNzYWdlLFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuZGlzcGxheVJlcG9ydCgpO1xyXG5cclxuICAgICAgICBHdWkubWFpbkJ0bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBMQVkgQUdBSU5cIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjZW5lUGx1Z2luOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBuZXdTY2VuZUtleTogXCJNZW51XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgQ09OVFJPTEtFWVMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIk1lbnVcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHNjZW5lIGlzIHdoZXJlIHRoZSB0d28gcGxheWVycyBjaG9vc2UgdGhlIHRlcnJhaW4vbWFwIHRoZXkgd2lsbCBwbGF5IG9uLFxyXG4gKiBhbmQgdGhlIGNoYXJhY3RlcnMgdGhleSB3aWxsIHBsYXkgd2l0aC5cclxuICogSXQgbWFpbmx5IHVzZXMgbWV0aG9kcyBmcm9tIHRoZSBHdWkgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbGV2ZWxUaHVtYjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJUaHVtYnM6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZT47XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3QmFja2dyb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZEZvckdVSVNjZW5lc1wiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbml0aWFsaXplZCB0aGUgY2hvaWNlcyBvbiB0aGUgMXN0IGVsZW1lbnRzIG9mIHRoZSB0ZXJyYWluIGFuZCB0aGVcclxuICAgIC8vIGNoYXJhY3RlcnMuIFRoaXMgd2F5IGlmIHRoZSBwbGF5ZXJzIGRvZXNuJ3QgY2xpY2sgb24gYW55dGhpbmcgdGhleSBzdGlsbFxyXG4gICAgLy8gaGF2ZSB0ZXJyYWluIGFuZCBjaGFyYWN0ZXJzIGluc3RhbmNlcyBhdHRhY2hlZC5cclxuICAgIHByaXZhdGUgaW5pdFVzZXJzQ2hvaWNlcyhwVXNlcnMsIHBMZXZlbHMsIHBDaGFyYWN0ZXJzKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHBVc2Vycykge1xyXG4gICAgICAgICAgICB1c2VyLmxldmVsSW5zdGFuY2UgPSBwTGV2ZWxzWzBdO1xyXG4gICAgICAgICAgICB1c2VyLmNoYXJhY3Rlckluc3RhbmNlID0gcENoYXJhY3RlcnNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFrZVRlcnJhaW5TZWN0aW9uKHBhcmFtczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdm9pZCB7XHJcblx0XHRHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSxcclxuICAgICAgICAgICAgdGV4dDogXCJURVJSQUlOXCIsXHJcblx0XHR9KTtcclxuXHRcdFxyXG4gICAgICAgIC8vIEluaXQgdGhlIHRlcnJhaW4gdGh1bWJuYWlsIG9uIHRoZSAxc3QgbGV2ZWwuXHJcbiAgICAgICAgdGhpcy5sZXZlbFRodW1iID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSArIDEzOCxcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcImxldmVsc1wiKVswXS50aHVtYm5haWxLZXlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBHdWkuc2xpZGVCdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHk6IHBhcmFtcy55ICsgMTQzICsgMTM2LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgaW1nOiB0aGlzLmxldmVsVGh1bWIsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXlzOiB0aGlzLmRhdGFcclxuICAgICAgICAgICAgICAgIC5nZXQoXCJsZXZlbHNcIilcclxuICAgICAgICAgICAgICAgIC5tYXAoKGxldmVsKSA9PiBsZXZlbC50aHVtYm5haWxLZXkpLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBsZXZlbCBvZiB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsLnRodW1ibmFpbEtleSA9PT0gdGhpcy5sZXZlbFRodW1iLnRleHR1cmUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5sZXZlbEluc3RhbmNlID0gbGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVsxXS5sZXZlbEluc3RhbmNlID0gbGV2ZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFrZUNoYXJhY3RlclNlY3Rpb24ocGFyYW1zOiB7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIGNvbnRyb2xLZXlzOiBzdHJpbmc7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgIH0pOiB2b2lkIHtcclxuICAgICAgICBHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSxcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEluaXQgY2hhcmFjdGVyIHRodW1ibmFpbCB0byB0aGUgMXN0IG9uZVxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyVGh1bWJzLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMueSArIDcwLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcImNoYXJhY3RlcnNcIilbMF0udGh1bWJuYWlsS2V5XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIEd1aS5zbGlkZUJ0bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiBwYXJhbXMueCxcclxuICAgICAgICAgICAgeTogcGFyYW1zLnkgKyA3MCArIDYwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgaW1nOiB0aGlzLmNoYXJhY3RlclRodW1ic1twYXJhbXMuaWRdLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5czogdGhpcy5kYXRhLmdldChcImNoYXJhY3RlcnNcIikubWFwKChjKSA9PiBjLnRodW1ibmFpbEtleSksXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoIG9mIHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaC50aHVtYm5haWxLZXkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyVGh1bWJzW3BhcmFtcy5pZF0udGV4dHVyZS5rZXlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uY2hhcmFjdGVySW5zdGFuY2UgPSBjaDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgR3VpLnNpbXBsZVBhcmFncmFwaCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiBwYXJhbXMueCxcclxuICAgICAgICAgICAgeTogcGFyYW1zLnkgKyA3MCArIDYwICsgNzIsXHJcbiAgICAgICAgICAgIHRleHQ6IHBhcmFtcy5jb250cm9sS2V5cyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChib290U2NlbmVEYXRhKSB7XHJcbiAgICAgICAgLy8gVXNpbmcgRVMyMDIwIG9wdGlvbm5hbCBjaGFpbmluZyAoaS5lIHRoZSA/KSB0byBjaGVjayBpZiB0aGUgZGF0YVxyXG4gICAgICAgIC8vIG9iamVjdCBjb21pbmcgZnJvbSB0aGUgYm9vdCBzY2VuZSBoYXMgdXNlcnMsIGNoYXJhY3RlcnMgYW5kXHJcbiAgICAgICAgLy8gbGV2ZWxzIGZpZWxkcy5cclxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBkYXRhIGZyb20gdGhlIGJvb3Qgc2NlbmUgdG8gdGhpcyBzY2VuZSdzIGRhdGEuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIGJvb3RTY2VuZURhdGE/LnVzZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwiY2hhcmFjdGVyc1wiLCBib290U2NlbmVEYXRhPy5jaGFyYWN0ZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwibGV2ZWxzXCIsIGJvb3RTY2VuZURhdGE/LmxldmVscyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFVzZXJzQ2hvaWNlcyhcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKVxyXG5cdFx0KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jaGFyYWN0ZXJUaHVtYnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcblx0XHRHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJNRU5VXCIgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlVGVycmFpblNlY3Rpb24oeyBcclxuXHRcdFx0eDogMjAwLCBcclxuXHRcdFx0eTogMTkyIFxyXG5cdFx0fSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZUNoYXJhY3RlclNlY3Rpb24oe1xyXG4gICAgICAgICAgICB4OiA3MDAsXHJcbiAgICAgICAgICAgIHk6IDE5MixcclxuICAgICAgICAgICAgdGl0bGU6IFwiUExBWUVSIDFcIixcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQxLmRpc3BsYXlTdHJpbmcsXHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VDaGFyYWN0ZXJTZWN0aW9uKHtcclxuICAgICAgICAgICAgeDogOTAwLFxyXG4gICAgICAgICAgICB5OiAxOTIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlBMQVlFUiAyXCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMi5kaXNwbGF5U3RyaW5nLFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBNT0RJRklFRCB1c2VycyBkYXRhIGZyb20gdGhlIGJvb3Qgc2NlbmUgdG8gdGhpcyBhY3R1YWwgc2NlbmUuXHJcbiAgICAgICAgLy8gTW9kaWZpZWQsIGJlY2F1c2UgbGV2ZWwgYW5kIGNoYXJhY3RlcnMgaW5zdGFuY2VzIGhhcyBiZWVuIGxpbmtlZCB0b1xyXG4gICAgICAgIC8vIGVhY2ggdXNlcnMgdGhhbmtzIHRvIHRoZSBzbGlkZSBidXR0b25zIGNhbGxiYWNrcyBhbmQgdGhlIHRodW1ibmFpbHMuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKSk7XHJcblxyXG4gICAgICAgIEd1aS5tYWluQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU1RBUlRcIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogdHJ1ZSxcclxuICAgICAgICAgICAgc2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIG5ld1NjZW5lS2V5OiBcIkdhbWVcIixcclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tIFwiLi9NZW51U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tIFwiLi9HYW1lb3ZlclNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcblx0Qm9vdFNjZW5lLCBcclxuXHRNZW51U2NlbmUsIFxyXG5cdEdhbWVTY2VuZSwgXHJcblx0R2FtZW92ZXJTY2VuZVxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9