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
        if (this.x > helpers_1.getGameWidth(this.scene) || this.y > helpers_1.getGameHeight(this.scene) || this.x < 0 || this.y < 0) {
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
    Gui.mainBtnStyle = "\n\t\theight: 50px;\n\t\tfont-size: 25px; \n\t\tborder-radius: 4px;\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "; \n\t\tcolor: " + helpers_1.COLORS.black.string + "; \n\t\tbackground-color: " + helpers_1.COLORS.white.string + "; \n\t\tborder: 2px solid " + helpers_1.COLORS.black.string + ";\n\t";
    Gui.secondaryBtnStyle = "\n\t\theight: 33px; \n\t\tfont-size: 17px; \n\t\tborder-radius: 4px;\n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "; \n\t\tcolor: " + helpers_1.COLORS.black.string + "; \n\t\tbackground-color: " + helpers_1.COLORS.white.string + "; \n\t\tborder: 2px solid " + helpers_1.COLORS.black.string + ";\n\t";
    Gui.titleStyle = "\n\t\tfont-size: 40px; \n\t\tmargin: 0;\n\t\tcolor: " + helpers_1.COLORS.white.string + "; \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n        text-shadow: \n            -1px -1px 0 " + helpers_1.COLORS.black.string + ", \n            1px -1px 0 " + helpers_1.COLORS.black.string + ", \n            -1px 1px 0 " + helpers_1.COLORS.black.string + ", \n            1px 1px 0 " + helpers_1.COLORS.black.string + ";\n    ";
    Gui.sectionTitleStyle = "\n\t\tfont-size: 30px;\n\t\tmargin: 0;\n\t\tcolor: " + helpers_1.COLORS.white.string + "; \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n        text-shadow: \n            -1px -1px 0 " + helpers_1.COLORS.black.string + ", \n            1px -1px 0 " + helpers_1.COLORS.black.string + ", \n            -1px 1px 0 " + helpers_1.COLORS.black.string + ", \n            1px 1px 0 " + helpers_1.COLORS.black.string + ";\n\t";
    Gui.basicTextStyle = "\n\t\tfont-size: 20px; \n\t\tmargin: 0;\n\t\tcolor: " + helpers_1.COLORS.white.string + "; \n\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + ";\n        text-shadow: \n            -1px -1px 0 " + helpers_1.COLORS.black.string + ", \n            1px -1px 0 " + helpers_1.COLORS.black.string + ", \n            -1px 1px 0 " + helpers_1.COLORS.black.string + ", \n            1px 1px 0 " + helpers_1.COLORS.black.string + ";\n\t";
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
        this.textStyle = "\n\t\t\tfont-family: " + helpers_1.DEFAULT_FONT_FAMILIES + "; \n\t\t\tmargin: 0; \n\t\t\tfont-size: 18px; \n\t\t\tcolor: " + helpers_1.COLORS.white.string + ";\n\t\t\tpadding: 10px;\n            text-shadow: \n                -1px -1px 0 " + helpers_1.COLORS.black.string + ", \n                1px -1px 0 " + helpers_1.COLORS.black.string + ", \n                -1px 1px 0 " + helpers_1.COLORS.black.string + ", \n                1px 1px 0 " + helpers_1.COLORS.black.string + ";\n\t\t";
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
        var NUMBER_OF_CHARACTERS = this.characters.length;
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
                    if (ch.thumbnailKey === _this.characterThumbs[params.id].texture.key) {
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
        // object coming from the boot scene has users, characters and levels fields.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvQm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9DaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTG9hZGluZ0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9UaWxlbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1RyYW1wb2xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9NZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNB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VCxxQkFBUztJQUNULHFCQUFTO0lBQ1QsNkJBQWE7Q0FDaEIsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDaGFyYWN0ZXJzQW5pbXMocGFyYW1zKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB1c2VyIG9mIHBhcmFtcy51c2Vycykge1xyXG4gICAgICAgICAgICBsZXQgdGsgPSB1c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9V0FMS2AsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwid2Fsay1zaWRlLWFybWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31XQUxLX1NIT09UYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJ3YWxrLXNpZGUtc2hvb3RcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SURMRWAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiaWRsZS1mcm9udC1hcm1lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogNCxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SURMRV9TSE9PVGAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiaWRsZS1mcm9udC1zaG9vdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMSxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31ISVRgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImhpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogMSxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICByZXBlYXQ6IDEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfURFQURgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImRlYWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSB3aWR0aCBvZiB0aGUgXCJzY3JlZW5cIi9jYW52YXMgYnV0IG5vdCBhbHdheXMuXHJcbiAqIEBwYXJhbSBzY2VuZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgY3VycmVudCBzY2VuZS5cclxuICogV2hpY2ggaXMgZ2VuZXJhbGx5IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcclxuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDT0xPUlMgPSB7XHJcbiAgICBjdXN0b21CbHVlOiB7IHN0cmluZzogXCIjNDM0NmY5XCIsIGhleDogMHg0MzQ2ZjkgfSxcclxuICAgIGN1c3RvbUdyZWVuOiB7IHN0cmluZzogXCIjNzZlYTY0XCIsIGhleDogMHg3NmVhNjQgfSxcclxuICAgIHZpYnJhbnRHcmVlbjogeyBzdHJpbmc6IFwiIzI1Zjk0NVwiLCBoZXg6IDB4MjVmOTQ1IH0sXHJcbiAgICBjdXN0b21SZWQ6IHsgc3RyaW5nOiBcIiNlYTJkMjNcIiwgaGV4OiAweGVhMmQyMyB9LFxyXG4gICAgd2hpdGU6IHsgc3RyaW5nOiBcIiNmZmZmZmZcIiwgaGV4OiAweGZmZmZmZiB9LFxyXG4gICAgYmxhY2s6IHsgc3RyaW5nOiBcIiMwMDAwMDBcIiwgaGV4OiAweDAwMDAwMCB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTEtFWVMgPSB7XHJcbiAgICBQTEFZRVI6IHtcclxuICAgICAgICBTRVQxOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUklHSFQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZULFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcbiAgICAgICAgICAgIHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0hJRlQsXHJcbiAgICAgICAgICAgIGRpc3BsYXlTdHJpbmc6IGBcclxuXHRcdFx0XHRSaWdodCAgOiBEXHJcblx0XHRcdFx0TGVmdCAgIDogUVxyXG5cdFx0XHRcdFNob290ICA6IFNcclxuXHRcdFx0XHRKdW1wICAgOiBTUEFDRVxyXG5cdFx0XHRgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgU0VUMjoge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UsXHJcbiAgICAgICAgICAgIHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUyxcclxuICAgICAgICAgICAgZGlzcGxheVN0cmluZzogYFxyXG5cdFx0XHRcdFJpZ2h0ICA6IOKGklxyXG5cdFx0XHRcdExlZnQgICA6IOKGkFxyXG5cdFx0XHRcdFNob290ICA6IFNISUZUXHJcblx0XHRcdFx0SnVtcCAgIDog4oaRXHJcblx0XHRcdGBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgPSBcIkdyb2JvbGQsIG1vbm9zcGFjZSwgQXJpYWxcIjtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiSG9hIEZpZ2h0XCIsXHJcblxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICBoZWlnaHQ6IDY0MCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgICBnYW1lcGFkOiB0cnVlLFxyXG4gICAgICAgIGtleWJvYXJkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJhcmNhZGVcIixcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZ3Jhdml0eToge1xyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGRvbToge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgcGFyZW50OiBcImdhbWVcIixcclxuXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvbWIgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2Uge1xyXG4gICAgcHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8IHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgdGhpcy54IDwgMCB8fCB0aGlzLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0Qm91bmNlKDEpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHkoUGhhc2VyLk1hdGguQmV0d2VlbigtMjAwLCAyMDApLCAyMCk7XHJcbiAgICAgICAgdGhpcy5zZXRHcmF2aXR5WSgxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJCb21iIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnQgYSBHYW1lIENoYXJhY3Rlciwgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggdGhlIFwiUGxheWVyXCIuXHJcbiAqIEEgUGxheWVyIGludGVncmF0ZXMgYSBDaGFyYWN0ZXIuIEEgQ2hhcmFjdGVyIGlzIGp1c3QgYWJvdXQgaG9sZGluZyBkYXRhIDpcclxuICogdGV4dHVyZSBrZXlzLCBtZXRhZGF0YSwgdm9pY2VzIGV0Yy4gTm90aGluZyB0byBiZSBjb250cm9sbGVkIHdpdGggeW91clxyXG4gKiBrZXlib2FyZCBoZXJlLlxyXG4gKlxyXG4gKiBAZm9ybWF0XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgICAvLyBWZXJ5IGltcG9ydGFudCBmaWVsZCwgdGlnaHRseSBsaW5rZWQgdG8gdGhlIGtleXMgeW91IHByb3ZpZGUgaW4gcGFjay5qc29uXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kZXRhaWxzOiBvYmplY3Q7XHJcbiAgICBwcml2YXRlIHN0YXRzOiBvYmplY3Q7XHJcbiAgICAvLyBGaWVsZHMgYnVpbHQgdXBvbiB0aGUgSWQgcHJvdmlkZWQgYXQgaW5zdGFuY2lhdGlvbi5cclxuICAgIHByaXZhdGUgX3RleHR1cmVLZXk6IHN0cmluZztcclxuICAgIC8vIENoYXJhY3RlcidzIGF2YXRhclxyXG4gICAgcHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zb3VuZEtleTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgdGV4dHVyZUtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbEtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNvdW5kS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGV0YWlscygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXRhaWxzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBpZDogbnVtYmVyOyBkZXRhaWxzPzogeyBuaWNrbmFtZTogc3RyaW5nIH07IHN0YXRzPzogb2JqZWN0IH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuX2RldGFpbHMgPSBwYXJhbXMuZGV0YWlscztcclxuICAgICAgICB0aGlzLnN0YXRzID0gcGFyYW1zLnN0YXRzO1xyXG4gICAgICAgIHRoaXMuX3RleHR1cmVLZXkgPSBgY2hhcmFjdGVyJHt0aGlzLmlkfWA7XHJcbiAgICAgICAgdGhpcy5fdGh1bWJuYWlsS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1BdmF0YXJgO1xyXG4gICAgICAgIHRoaXMuX3NvdW5kS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1Tb3VuZGA7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCwgQ09MT1JTLCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCBmb3IgR1VJIGVsZW1lbnRzIHN1Y2ggYXMgYWN0aW9ucyBidXR0b25zIGFuZCB0aXRsZXMuXHJcbiAqIEl0IHJlbGllcyBvbiBQaGFzZXIgZ2FtZSBvYmplY3RzIERPTSBlbGVtZW50cywgc28gdGhlc2UgR1VJIGVsZW1lbnRzIGFyZVxyXG4gKiBodG1sIGFuZCBjc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3VpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgbWFpbkJ0blN0eWxlID0gYFxyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNXB4OyBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU307IFxyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLmJsYWNrLnN0cmluZ307IFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfTsgXHJcblx0XHRib3JkZXI6IDJweCBzb2xpZCAke0NPTE9SUy5ibGFjay5zdHJpbmd9O1xyXG5cdGA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBzZWNvbmRhcnlCdG5TdHlsZSA9IGBcclxuXHRcdGhlaWdodDogMzNweDsgXHJcblx0XHRmb250LXNpemU6IDE3cHg7IFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfTsgXHJcblx0XHRjb2xvcjogJHtDT0xPUlMuYmxhY2suc3RyaW5nfTsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9OyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICR7Q09MT1JTLmJsYWNrLnN0cmluZ307XHJcblx0YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRpdGxlU3R5bGUgPSBgXHJcblx0XHRmb250LXNpemU6IDQwcHg7IFxyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307IFxyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogXHJcbiAgICAgICAgICAgIC0xcHggLTFweCAwICR7Q09MT1JTLmJsYWNrLnN0cmluZ30sIFxyXG4gICAgICAgICAgICAxcHggLTFweCAwICR7Q09MT1JTLmJsYWNrLnN0cmluZ30sIFxyXG4gICAgICAgICAgICAtMXB4IDFweCAwICR7Q09MT1JTLmJsYWNrLnN0cmluZ30sIFxyXG4gICAgICAgICAgICAxcHggMXB4IDAgJHtDT0xPUlMuYmxhY2suc3RyaW5nfTtcclxuICAgIGA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBzZWN0aW9uVGl0bGVTdHlsZSA9IGBcclxuXHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9OyBcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU307XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAtMXB4IC0xcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgMXB4IC0xcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgLTFweCAxcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgMXB4IDFweCAwICR7Q09MT1JTLmJsYWNrLnN0cmluZ307XHJcblx0YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGJhc2ljVGV4dFN0eWxlID0gYFxyXG5cdFx0Zm9udC1zaXplOiAyMHB4OyBcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9OyBcclxuXHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU307XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IFxyXG4gICAgICAgICAgICAtMXB4IC0xcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgMXB4IC0xcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgLTFweCAxcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgMXB4IDFweCAwICR7Q09MT1JTLmJsYWNrLnN0cmluZ307XHJcblx0YDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHN0eWxpemVkIEJ1dHRvbiBET00gRWxlbWVudCB3aXRoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWRcclxuICAgICAqIHRvIGl0LiBUaGUgZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2sgc3RhcnRzIGEgbmV3IHNjZW5lIHVzaW5nIHRoZSBzY2VuZSBrZXlcclxuICAgICAqIHBhc3NlZCBpbiBhcmd1bWVudHMgYW5kIHN0b3BzIGFsbCBzb3VuZHMgaWYgc3RvcFNvdW5kcyBzZXQgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtYWluQnRuKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHN0b3BTb3VuZHM6IGJvb2xlYW47XHJcbiAgICAgICAgc2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47XHJcbiAgICAgICAgbmV3U2NlbmVLZXk6IHN0cmluZztcclxuICAgICAgICBzY2VuZURhdGE/OiBvYmplY3Q7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAuZG9tKFxyXG4gICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgZ2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpIC0gOTAsXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLm1haW5CdG5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZExpc3RlbmVyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLnNvdW5kLmFkZChcImNsaWNrU291bmRcIikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KHBhcmFtcy5uZXdTY2VuZUtleSwgcGFyYW1zLnNjZW5lRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG4gICAgICogb25lIGJ5IG9uZS4gTGlrZSBhIHNsaWRlc2hvdy5cclxuICAgICAqIEBwYXJhbSBpbWc6IGEgcGhhc2VyIGdhbWUgb2JqZWN0IGltYWdlIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGluIGEgd2F5LlxyXG4gICAgICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzbGlkZUJ0bihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGltZzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgICAgIHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrPzogRnVuY3Rpb247XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLnNlY29uZGFyeUJ0blN0eWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuYWRkTGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuYWRkKFwiY2xpY2tTb3VuZFwiKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHBhcmFtcy50ZXh0dXJlS2V5cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmltZy5zZXRUZXh0dXJlKHBhcmFtcy50ZXh0dXJlS2V5c1tjdXJyZW50SW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgdGV4dDogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICA2NCxcclxuICAgICAgICAgICAgXCJoM1wiLFxyXG4gICAgICAgICAgICBHdWkudGl0bGVTdHlsZSxcclxuICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VjdGlvblRpdGxlKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgXCJoNFwiLFxyXG4gICAgICAgICAgICBHdWkuc2VjdGlvblRpdGxlU3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNpbXBsZVBhcmFncmFwaChwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgIFwicFwiLFxyXG4gICAgICAgICAgICBHdWkuYmFzaWNUZXh0U3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciB7XHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aFZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlKHBBbW91bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgLT0gcEFtb3VudCAqIDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhWYWx1ZSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuaGVhbHRoVmFsdWUpO1xyXG4gICAgICAgIC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyBzaWRlOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuYmFyID0gcGFyYW1zLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMjAwO1xyXG5cclxuICAgICAgICBpZiAocGFyYW1zLnNpZGUgPT09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDYwO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSA0MDtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5zaWRlID09PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gKGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpKSAtIHRoaXMud2lkdGggLSA2NDtcclxuICAgICAgICAgICAgdGhpcy55ID0gNDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2lkZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTLCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh1ZCB7XHJcbiAgICBwcml2YXRlIGF2YXRhcjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuRE9NRWxlbWVudDtcclxuICAgIHByaXZhdGUgdGV4dFN0eWxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHVzZXI6IFVzZXIgfSkge1xyXG4gICAgICAgIHRoaXMudGV4dFN0eWxlID0gYFxyXG5cdFx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9OyBcclxuXHRcdFx0bWFyZ2luOiAwOyBcclxuXHRcdFx0Zm9udC1zaXplOiAxOHB4OyBcclxuXHRcdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307XHJcblx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiBcclxuICAgICAgICAgICAgICAgIC0xcHggLTFweCAwICR7Q09MT1JTLmJsYWNrLnN0cmluZ30sIFxyXG4gICAgICAgICAgICAgICAgMXB4IC0xcHggMCAke0NPTE9SUy5ibGFjay5zdHJpbmd9LCBcclxuICAgICAgICAgICAgICAgIC0xcHggMXB4IDAgJHtDT0xPUlMuYmxhY2suc3RyaW5nfSwgXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDAgJHtDT0xPUlMuYmxhY2suc3RyaW5nfTtcclxuXHRcdGA7XHJcblxyXG4gICAgICAgIGlmIChwYXJhbXMudXNlci5zY3JlZW5TaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmF2YXRhciA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5pbWFnZSgwLCAzNSwgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGh1bWJuYWlsS2V5KVxyXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaDVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS5kZXRhaWxzLm5pY2tuYW1lICsgXCIgfCBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXIudXNlcm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIHwgUmF0aW8gXCIgKyBwYXJhbXMudXNlci5yYXRpbyArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnVzZXIuc2NyZWVuU2lkZSA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLFxyXG4gICAgICAgICAgICAgICAgICAgIDM1LFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy51c2VyLmNoYXJhY3Rlckluc3RhbmNlLnRodW1ibmFpbEtleVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigxLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5kb20oXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBcImg1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0U3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UuZGV0YWlscy5uaWNrbmFtZSArIFwiIHwgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy51c2VyLnVzZXJuYW1lICtcclxuICAgICAgICAgICAgICAgICAgICBcIiB8IFJhdGlvIFwiICsgcGFyYW1zLnVzZXIucmF0aW8gKyBcIiVcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigxLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IFRpbGVtYXAgfSBmcm9tIFwiLi9UaWxlbWFwXCI7XHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG4vKipcclxuICogQSBMZXZlbCBjb25zaXN0cyBvZiA6IGEgYmFja2dyb3VuZCArIGEgbXVzaWMgdGhlbWUgKyBhIHRpbGVtYXAgKyBhIG5hbWUgK1xyXG4gKiBhIHRodW1ibmFpbC5cclxuICogSXQgaW5pdHMgdGhlIGRpZmZlcmVudCBrZXlzIG5lZWRlZCBhbmQgY3JlYXRlcy9kcmF3IHRoZSBiYWNrZ3JvdW5kLFxyXG4gKiB0aGUgdGlsZW1hcCAoYnkgaW5zdGFuY2lhdGUgaXQpIGFuZCBwbGF5IHRoZSBtdXNpYyB0aGVtZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMZXZlbCB7XHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90aWxlbWFwOiBUaWxlbWFwO1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdGh1bWJuYWlsS2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGJhY2tncm91bmRLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgbXVzaWNLZXk6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRpbGVtYXAoKTogVGlsZW1hcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aHVtYm5haWxLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHBhcmFtcy5uYW1lO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEtleSA9IGBsZXZlbCR7dGhpcy5pZH1CYWNrZ3JvdW5kYDtcclxuICAgICAgICB0aGlzLm11c2ljS2V5ID0gYGxldmVsJHt0aGlzLmlkfVRoZW1lYDtcclxuICAgICAgICB0aGlzLl90aHVtYm5haWxLZXkgPSBgbGV2ZWwke3RoaXMuaWR9VGh1bWJuYWlsYDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoc2NlbmUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kS2V5XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGlsZW1hcCA9IG5ldyBUaWxlbWFwKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZCh0aGlzLm11c2ljS2V5KS5wbGF5KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IENPTE9SUywgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBiYXJYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhclk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFySGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBib3g6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveFdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hBbHBoYTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgcHJvZ3Jlc3NUZXh0KCk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KHBWYWx1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFN0eWxlKHRoaXMuYmFyQ29sb3IsIHRoaXMuYmFyQWxwaGEpO1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoICogcFZhbHVlLCB0aGlzLmJhckhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuYm94LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRleHQuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUZXh0LmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZSB9KSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYXIgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuYmFyV2lkdGggPSA0MDA7XHJcbiAgICAgICAgdGhpcy5iYXJIZWlnaHQgPSAzMDtcclxuICAgICAgICB0aGlzLmJhclggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMikgLSAodGhpcy5iYXJXaWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMuYmFyWSA9IChnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMikgLSAodGhpcy5iYXJIZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmJhckNvbG9yID0gQ09MT1JTLmN1c3RvbUJsdWUuaGV4O1xyXG4gICAgICAgIHRoaXMuYmFyQWxwaGEgPSAwLjg7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmJveFdpZHRoID0gdGhpcy5iYXJXaWR0aCArIDEwO1xyXG4gICAgICAgIHRoaXMuYm94SGVpZ2h0ID0gdGhpcy5iYXJIZWlnaHQgKyAxMDtcclxuICAgICAgICB0aGlzLmJveFggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMikgLSAodGhpcy5ib3hXaWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMuYm94WSA9IChnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMikgLSAodGhpcy5ib3hIZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLmJveENvbG9yID0gQ09MT1JTLndoaXRlLmhleDtcclxuICAgICAgICB0aGlzLmJveEFscGhhID0gMC4zO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5maWxsU3R5bGUodGhpcy5ib3hDb2xvciwgdGhpcy5ib3hBbHBoYSk7XHJcbiAgICAgICAgdGhpcy5ib3guZmlsbFJlY3QodGhpcy5ib3hYLCB0aGlzLmJveFksIHRoaXMuYm94V2lkdGgsIHRoaXMuYm94SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICB5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIpICsgNDAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTG9hZGluZy4uLlwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udDogJzIwcHggbW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgICAgIGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc1RleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IChnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyKSxcclxuICAgICAgICAgICAgeTogKGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyKSxcclxuICAgICAgICAgICAgdGV4dDogXCIwJVwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udDogJzE4cHggbW9ub3NwYWNlJyxcclxuICAgICAgICAgICAgICAgIGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSBcIi4vUHJvamVjdGlsZVwiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9IZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBwcml2YXRlIF9wcm9qZWN0aWxlczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2h0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBsZWZ0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBqdW1wS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBzaG9vdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGFzdFByZXNzZWRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBwcml2YXRlIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblxyXG4gICAgcHJpdmF0ZSBsYXN0U2hvb3Q6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHZ4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGdyYXZpdHlZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3VuY2U6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYnVsbGV0UHJvb2Y6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFURVMgPSB7XHJcbiAgICAgICAgTk9STUFMOiBcIk5PUk1BTFwiLFxyXG4gICAgICAgIEhVUlQ6IFwiSFVSVFwiLFxyXG4gICAgICAgIERFQUQ6IFwiREVBRFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHByb2plY3RpbGVzKCk6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGh1cnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0UHJvb2YgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDIwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZGVjcmVhc2UoMjApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSB0aGlzLlNUQVRFUy5IVVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZUJ1bGxldFByb29mKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmJ1bGxldFByb29mID09PSBmYWxzZSkgdGhpcy5idWxsZXRQcm9vZiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U291bmRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuanVtcFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJqdW1wU291bmRcIik7XHJcbiAgICAgICAgdGhpcy5zaG9vdFNvdW5kID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJzaG9vdFNvdW5kXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFZpdGFscygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmJ1bGxldFByb29mID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHlZID0gMTAwMDtcclxuICAgICAgICB0aGlzLmp1bXBWZWxvY2l0eSA9IC02MDA7XHJcbiAgICAgICAgdGhpcy52eCA9IDE1MDtcclxuICAgICAgICB0aGlzLmJvdW5jZSA9IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5UGh5c2ljcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V0R3Jhdml0eVkodGhpcy5ncmF2aXR5WSk7XHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UodGhpcy5ib3VuY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdENvbnRyb2xzKHBLZXlzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5qdW1wS2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJqdW1wXCJdKTtcclxuICAgICAgICB0aGlzLnJpZ2h0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJyaWdodFwiXSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJsZWZ0XCJdKTtcclxuICAgICAgICB0aGlzLnNob290S2V5ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkocEtleXNbXCJzaG9vdFwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0SGVhbHRoQmFyKHBIZWFsdGhCYXI6IEhlYWx0aEJhcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gcEhlYWx0aEJhcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTaG9vdGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxhc3RTaG9vdCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdGlsZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUudGltZS5ub3cgPiB0aGlzLmxhc3RTaG9vdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9qZWN0aWxlcy5hZGQoXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvamVjdGlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgYnVsbGV0IHN0YXJ0aW5nIHBvaW50IGlmIHNwcml0ZSBpcyBmbGlwcGVkIG9uIFggYXhpcy5cclxuICAgICAgICAgICAgICAgICAgICB4OiAhdGhpcy5mbGlwWCA/IHRoaXMueCArIDIwIDogdGhpcy54IC0gMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy55ICsgMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVsbGV0IGRpcmVjdGlvbiAobGVmdC9yaWdodCkgYmFzZWQgb24gbGFzdCBwcmVzc2VkIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChpLmUgZGlyZWN0aW9uIG9mIHRoZSBwbGF5ZXIpLiBEZWZhdWx0OiBnb2VzIHJpZ2h0LlxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5sZWZ0S2V5ID8gLTEgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVLZXk6IFwicHJvamVjdGlsZVwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2hvb3QgPSB0aGlzLnNjZW5lLnRpbWUubm93ICsgNTAwO1xyXG4gICAgICAgICAgICAvLyBQbGF5aW5nIHNvdW5kIGhlcmUgZW5zdXJlcyB1cyBpdCBpcyBwbGF5ZWQgb25seSBvbmNlIGV2ZXJ5IHNob290LlxyXG4gICAgICAgICAgICB0aGlzLnNob290U291bmQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsaXBwaW5nIHRoZSBzcHJpdGUgb24gaXRzIFggYXhpcywgZGVwZW5kaW5nIG9uIHdoaWNoIGRpcmVjdGlvbiB5b3UgZ28uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSkge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2VkIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIGxlZnQuXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0UHJlc3NlZEtleSA9PT0gdGhpcy5yaWdodEtleSkge1xyXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyByaWdodC5cclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIHNwcml0ZSBvcmllbnRhdGlvbjogZmFjaW5nIHJpZ2h0LlxyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlSnVtcGluZygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5qdW1wS2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5LmJsb2NrZWQuZG93biB8fCB0aGlzLmJvZHkudG91Y2hpbmcuZG93bikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVkodGhpcy5qdW1wVmVsb2NpdHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIGlkbGluZyAoZG9pbmcgbm90aGluZykgQU5EIGlkbGluZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlSWRsaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUlETEVgLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gSWRsaW5nLVNob290aW5nLlxyXG4gICAgICAgIGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFX1NIT09UYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgd2Fsa2luZyBBTkQgd2Fsa2luZy1zaG9vdGluZy5cclxuICAgICAqIFRoaXMgaW5jbHVkZXMgYW5pbWF0aW9uIHBsYXlpbmcsIGNoZWNraW5nIGtleSBwcmVzcywgc2V0dGluZyB2ZWxvY2l0eSxcclxuICAgICAqIGNyZWF0ZSBzaG9vdHMgYW5kIHJlbWVtYmVyaW5nIGxhc3QgcHJlc3NlZCBrZXkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlV2Fsa2luZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1XQUxLYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIFdhbGtpbmcgOiBnb2luZyByaWdodFxyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCh0aGlzLnZ4KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMucmlnaHRLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdhbGtpbmcgOiBnb2luZyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoLXRoaXMudngpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RQcmVzc2VkS2V5ID0gdGhpcy5sZWZ0S2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2Fsa2luZy1TaG9vdGluZ1xyXG4gICAgICAgIGlmICh0aGlzLnNob290S2V5LmlzRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1XQUxLX1NIT09UYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7XHJcbiAgICAgICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRleHR1cmVLZXk6IHN0cmluZztcclxuICAgICAgICBjb250cm9sS2V5czogb2JqZWN0O1xyXG4gICAgICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmFwcGx5UGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFZpdGFscygpO1xyXG4gICAgICAgIHRoaXMuaW5pdEhlYWx0aEJhcihwYXJhbXMuaGVhbHRoQmFyKTtcclxuICAgICAgICB0aGlzLmluaXRTaG9vdGluZygpO1xyXG4gICAgICAgIHRoaXMuaW5pdENvbnRyb2xzKHBhcmFtcy5jb250cm9sS2V5cyk7XHJcblxyXG4gICAgICAgIC8vIFJlc3RyYWluIHRoZSBib3VuZGluZ0JveFxyXG4gICAgICAgIHRoaXMuc2V0U2l6ZSgyMCwgNjApO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLk5PUk1BTCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLlNUQVRFUy5ERUFEO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLk5PUk1BTCkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGRldGFjaGVkIGZyb20gdGhlIG90aGVyIGJsb2NrIGJlY2F1c2UgeW91IGNhbiBkbyBhbnl0aGluZ1xyXG4gICAgICAgICAgICAvLyB3aGlsZSBqdW1waW5nOiB3YWxrL3dhbGstc2hvb3QsIGlkbGUvaWRsZS1zaG9vdC4gU28gaXQgaXNuJ3RcclxuICAgICAgICAgICAgLy8gZGVwZW5kYW50IG9mIHdoZXRoZXIgeW91J3JlIHByZXNzaW5nIGxlZnQgb3IgcmlnaHQgb3Igd2hhdGV2ZXIuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSnVtcGluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucmlnaHRLZXkuaXNEb3duIHx8IHRoaXMubGVmdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV2Fsa2luZygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVJZGxpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTcHJpdGVGbGlwcGluZygpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IHRoaXMuU1RBVEVTLkhVUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SElUYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoZSBvbmx5IHRoaW5nIHRoYXQgbWFrZSB0aGUgcGxheWVyIHJldHVybiB0byBub3JtYWwgaXMgdGltZVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5OT1JNQUwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5ERUFEKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IHJlc2V0IHN0YXRlIHRvIE5PUk1BTCBjYXVzZSBpdCdzIGVuZCBvZiB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ERUFEYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gUGxheWVyIFN0YXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBwcml2YXRlIHZ4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgaXNPdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnggPiBnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy55ID4gZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnggPCAwIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA8IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRBbmltYXRpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcImNvbGxpc2lvbkVmZmVjdDFcIixcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFwiY29sbGlzaW9uRWZmZWN0MVwiLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgICAgICAgIGVuZDogMSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHJlcGVhdDogMSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnZ4ID0gNzAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0QW5pbWF0aW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCh0aGlzLmRpcmVjdGlvbiAqIHRoaXMudngpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3RpbGUgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgVHJhbXBvbGluZSB9IGZyb20gXCIuL1RyYW1wb2xpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwIHtcclxuICAgIHByaXZhdGUgbWFwOiBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcDtcclxuICAgIHByaXZhdGUgdGlsZXNldDogUGhhc2VyLlRpbGVtYXBzLlRpbGVzZXQ7XHJcbiAgICBwcml2YXRlIF9tYWluTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcbiAgICBwcml2YXRlIHN1YkxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG4gICAgcHJpdmF0ZSBfdHJhbXBvbGluZTogVHJhbXBvbGluZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgdGhlIGxheWVyIHRoYXQgY29sbGlkZXM6ICdjb2xsaWRlcycgc2V0IHRvIHRydWUgaW4gVGlsZWQuXHJcbiAgICAgKi9cclxuICAgIGdldCBtYWluTGF5ZXIoKTogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5MYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJhbXBvbGluZSgpOiBUcmFtcG9saW5lIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbXBvbGluZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgaWQ6IG51bWJlciB9KSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFwID0gcGFyYW1zLnNjZW5lLm1ha2UudGlsZW1hcCh7XHJcbiAgICAgICAgICAgIGtleTogYGxldmVsJHtwYXJhbXMuaWR9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKFxyXG4gICAgICAgICAgICBgbGV2ZWwke3BhcmFtcy5pZH0tdGlsZXNoZWV0YCxcclxuICAgICAgICAgICAgYGxldmVsJHtwYXJhbXMuaWR9VGlsZXNoZWV0YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX21haW5MYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG4gICAgICAgICAgICBcIm1haW5MYXllclwiLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzZXQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluTGF5ZXIuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgIGNvbGxpZGVzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YkxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoXHJcbiAgICAgICAgICAgIFwic3ViTGF5ZXJcIixcclxuICAgICAgICAgICAgdGhpcy50aWxlc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdHJhbXBvbGluZSA9IG5ldyBUcmFtcG9saW5lKHtcclxuICAgICAgICAgICAgc2NlbmU6IHBhcmFtcy5zY2VuZSxcclxuICAgICAgICAgICAgeDogNDAwLFxyXG4gICAgICAgICAgICB5OiBnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSkgLSB0aGlzLnRpbGVzZXQudGlsZUhlaWdodCAqIDIuNVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbXBvbGluZSBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIFwidHJhbXBvbGluZVwiKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vTGV2ZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF91c2VybmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcmF0aW86IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3NjcmVlblNpZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2NoYXJhY3Rlckluc3RhbmNlOiBDaGFyYWN0ZXI7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXJJbnN0YW5jZTogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBfbGV2ZWxJbnN0YW5jZTogTGV2ZWw7XHJcbiAgICBwdWJsaWMgZ2FtZXM6IEFycmF5PG9iamVjdD47XHJcblxyXG4gICAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmF0aW8oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzY3JlZW5TaWRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlblNpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFyYWN0ZXIgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjaGFyYWN0ZXJJbnN0YW5jZSgpOiBDaGFyYWN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsYXllciBjcmVhdGVkIGluIEdhbWUgU2NlbmUgYmFzZWQgb24gVXNlcidzIGNoYXJhY3RlciBjaG9pY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcGxheWVySW5zdGFuY2UoKTogUGxheWVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVySW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMZXZlbCB0aGUgdXNlciBoYXMgY2hvc2VuIGluIHRoZSBNZW51LCBtYWtlcyBtb3JlIHNlbnNlIHdoZW4gcGxheWluZyBzb2xvLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxldmVsSW5zdGFuY2UoKTogTGV2ZWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbEluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY2hhcmFjdGVySW5zdGFuY2UodjogQ2hhcmFjdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY2hhcmFjdGVySW5zdGFuY2UgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcGxheWVySW5zdGFuY2UodjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5fcGxheWVySW5zdGFuY2UgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbGV2ZWxJbnN0YW5jZSh2OiBMZXZlbCkge1xyXG4gICAgICAgIHRoaXMuX2xldmVsSW5zdGFuY2UgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcmF0aW8odjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcmF0aW8gPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICByYXRpbzogbnVtYmVyO1xyXG4gICAgICAgIHNjcmVlblNpZGU6IHN0cmluZztcclxuICAgICAgICBnYW1lczogQXJyYXk8b2JqZWN0PjtcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHBhcmFtcy51c2VybmFtZTtcclxuICAgICAgICB0aGlzLl9yYXRpbyA9IHBhcmFtcy5yYXRpbztcclxuICAgICAgICB0aGlzLl9zY3JlZW5TaWRlID0gcGFyYW1zLnNjcmVlblNpZGU7XHJcbiAgICAgICAgdGhpcy5nYW1lcyA9IHBhcmFtcy5nYW1lcztcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuLi9vYmplY3RzL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBHdWkgfSBmcm9tIFwiLi4vb2JqZWN0cy9HdWlcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0JhciB9IGZyb20gXCIuLi9vYmplY3RzL0xvYWRpbmdCYXJcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkJvb3RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsZXZlbHM6IEFycmF5PExldmVsPjtcclxuICAgIHByaXZhdGUgdXNlcnM6IEFycmF5PFVzZXI+O1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJzOiBBcnJheTxDaGFyYWN0ZXI+O1xyXG5cclxuICAgIHByaXZhdGUgbG9nbzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBidG46IFBoYXNlci5HYW1lT2JqZWN0cy5ET01FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIG11c2ljVGhlbWU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBwcml2YXRlIGxvYWRpbmdCYXI6IExvYWRpbmdCYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBMZXZlbCh7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2ltZXRpZXJlXCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgTGV2ZWwoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByYWlyaWVcIixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VycyA9IFtcclxuICAgICAgICAgICAgbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJQb29sR2hvdWxcIixcclxuICAgICAgICAgICAgICAgIHJhdGlvOiAwLFxyXG4gICAgICAgICAgICAgICAgZ2FtZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuU2lkZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICAgICAgbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJKb2xseUNsZXZlclwiLFxyXG4gICAgICAgICAgICAgICAgcmF0aW86IDAsXHJcbiAgICAgICAgICAgICAgICBnYW1lczogW10sXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5TaWRlOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiU3RldmllXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIkNhcm9saW5lXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIktyaXN0b2ZcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiS3Jpc3R5XCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIk9yb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHsgbmlja25hbWU6IFwiQWxleGFcIiB9LFxyXG4gICAgICAgICAgICAgICAgc3RhdHM6IHt9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyBVc2luZyB0aGUgc2NlbmUgRGF0YSBNYW5hZ2VyIHRvIHN0b3JlIGRhdGEgb24gYSBzY2VuZSBsZXZlbC5cclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcnNcIiwgdGhpcy51c2Vycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImNoYXJhY3RlcnNcIiwgdGhpcy5jaGFyYWN0ZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwibGV2ZWxzXCIsIHRoaXMubGV2ZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5wYWNrKFwicHJlbG9hZFwiLCBcImFzc2V0cy9wYWNrLmpzb25cIiwgXCJwcmVsb2FkXCIpO1xyXG5cclxuICAgICAgICAvLyBQcmVsb2FkIGFsbCBjaGFyYWN0ZXJzIGF0bGFzZXMgOiBhIGpzb24gZmlsZSB0aGF0IGFjdHMgYXNcclxuICAgICAgICAvLyBhcyBhIFwibWFwXCIvXCJsaW5rXCIgdG8gYSBwbmcgc3ByaXRlc2hlZXQuXHJcbiAgICAgICAgLy8gVXNlZCBmb3IgZHJhd2luZyBQTGF5ZXIgdGV4dHVyZSBhbmQgc2V0IGFuaW1hdGlvbnMuXHJcbiAgICAgICAgY29uc3QgTlVNQkVSX09GX0NIQVJBQ1RFUlMgPSB0aGlzLmNoYXJhY3RlcnMubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IG4gPSAxOyBuIDw9IE5VTUJFUl9PRl9DSEFSQUNURVJTOyBuKyspIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkLmF0bGFzKFxyXG4gICAgICAgICAgICAgICAgYGNoYXJhY3RlciR7bn1gLFxyXG4gICAgICAgICAgICAgICAgYGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tc3ByaXRlc2hlZXQucG5nYCxcclxuICAgICAgICAgICAgICAgIGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LWF0bGFzLmpzb25gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdCYXIgPSBuZXcgTG9hZGluZ0Jhcih7IHNjZW5lOiB0aGlzIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQub24oXCJwcm9ncmVzc1wiLCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLmRyYXcodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3NUZXh0LnNldFRleHQoKE1hdGguZmxvb3IodmFsdWUgKiAxMDApKSArIFwiJVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwiY29tcGxldGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCYXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lID0gdGhpcy5zb3VuZC5hZGQoXCJtZW51VGhlbWVcIik7XHJcbiAgICAgICAgdGhpcy5tdXNpY1RoZW1lLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRGb3JHVUlTY2VuZXNcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nbyA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMi41LFxyXG4gICAgICAgICAgICBcIm1haW5Mb2dvXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHRoaXMubG9nby54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmxvZ28ueSArIDkwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIldlbGNvbWUgdG8gdGhlIGZpZ2h0ICFcIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIHN0b3BTb3VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoaXMgc2NlbmUgZGF0YSB0byB0aGUgbWVudSBzY2VuZS5cclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgQ09OVFJPTEtFWVMsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBCb21iIH0gZnJvbSBcIi4uL29iamVjdHMvQm9tYlwiO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tIFwiLi4vb2JqZWN0cy9IdWRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gXCIuLi9vYmplY3RzL0hlYWx0aEJhclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vQW5pbWF0aW9uc1wiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyMTogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXIyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIGh1ZDE6IEh1ZDtcclxuICAgIHByaXZhdGUgaHVkMjogSHVkO1xyXG4gICAgcHJpdmF0ZSB0aWxlbWFwOiBMZXZlbFtcInRpbGVtYXBcIl07XHJcbiAgICBwcml2YXRlIGJvbWJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGJvbWJDcmVhdGlvbkV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBuZXdTY2VuZVRpbWVkRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgICBwcml2YXRlIHdpbm5lcjogVXNlcjtcclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpZGVycygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMudGlsZW1hcC5tYWluTGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMucGxheWVyMSwgKGJvbWIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmh1cnQoKTtcclxuICAgICAgICAgICAgYm9tYi5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy5wbGF5ZXIyLCAoYm9tYikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIuaHVydCgpO1xyXG4gICAgICAgICAgICBib21iLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMik7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIFt0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMl0sXHJcbiAgICAgICAgICAgIHRoaXMudGlsZW1hcC5tYWluTGF5ZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSxcclxuICAgICAgICAgICAgKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcyxcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLFxyXG4gICAgICAgICAgICAocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RpbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLnByb2plY3RpbGVzLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyLFxyXG4gICAgICAgICAgICAocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgIHRoaXMudGlsZW1hcC5tYWluTGF5ZXIsXHJcbiAgICAgICAgICAgIChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQobWVudVNjZW5lRGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBtZW51U2NlbmVEYXRhPy51c2Vycyk7XHJcblxyXG4gICAgICAgIEFuaW1hdGlvbnMuY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXJzOiB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmxldmVsSW5zdGFuY2UuY3JlYXRlKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMF0ubGV2ZWxJbnN0YW5jZS50aWxlbWFwO1xyXG5cclxuICAgICAgICB0aGlzLmJvbWJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib21iQ3JlYXRpb25FdmVudCA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib21icy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJvbWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gNTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcImJvbWJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgICAgIHk6IDMwMCxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMixcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2lkZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDkwMCxcclxuICAgICAgICAgICAgeTogMzAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5OiB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV0uY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleSxcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQxLFxyXG4gICAgICAgICAgICBoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBzaWRlOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBoYXZlIHVzZXI8LS0+cGxheWVyIGNvbmNvcmRhbmNlXHJcbiAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVsxXS5wbGF5ZXJJbnN0YW5jZSA9IHRoaXMucGxheWVyMjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyMS51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllcjIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIFdpbm5lciBoYW5kbGluZy5cclxuICAgICAgICAvLyBFbnRlciB3aW5uZXIgaGFuZGxpbmcgbW9kZSBpZiBvbmUgb2YgdGhlIHBsYXllciBpcyBkZWFkLlxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgfHwgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgcGxheWVycyBpbnZpY2libGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIG5leHQgc2NlbmUgdG8gc3RhcnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2F5IHdlIGRvbid0IGhhdmUgdG8gcGF1c2UgcGh5c2ljcyBidXQgdGhlIHdpbm5lciBpcyBub3RcclxuICAgICAgICAgICAgLy8ga2lsbGVkIGJ5IHRoZSBib21icyB0aGF0IGFyZSBzdGlsbCBmYWxsaW5nLlxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEubWFrZUJ1bGxldFByb29mKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY2lkaW5nIHdoaWNoIG9uZSBpcyB0aGUgd2lubmVyICh0aGUgb25lIG5vdCBkZWFkKS5cclxuICAgICAgICAgICAgLy8gV2lubmVycyBhcmUgdXNlcnMgbm90IHBsYXllcnMuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgIXRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllcjIuaXNEZWFkKCkgJiYgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOdWxsaW5nIHRoZSB3aW5uZXIgaWYgdGhlcmUncyBubyB3aW5uZXIgYXQgYWxsXHJcbiAgICAgICAgICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyBzaG91bGRuJ3QgZXZlciBoYXBwZW4gYnV0IHdobyBrbm93cy5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGluIG5leHQgc2NlbmUgaWYgd2lubmVyIGlzIHRydXRoeSwgcHJpbnRpbmcgYWx0IHRleHRcclxuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCAobGlrZSBpZiBudWxsKS5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcIndpbm5lclwiLCB0aGlzLndpbm5lcik7XHJcblxyXG4gICAgICAgICAgICAvLyBUaHJlZSBzZWNvbmRzIGRlbGF5IGJlZm9yZSBsYXVuY2hpbmcgdGhlIG5leHQgc2NlbmVcclxuICAgICAgICAgICAgdGhpcy5uZXdTY2VuZVRpbWVkRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmQuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJHYW1lb3ZlclwiLCB0aGlzLmRhdGEuZ2V0QWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4uL1N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVvdmVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZW92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzcGxheVJlcG9ydCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdXNlcm5hbWVYID0gKGdldEdhbWVXaWR0aCh0aGlzKSAvIDIpIC0gMjAwO1xyXG4gICAgICAgIGxldCB1c2VybmFtZVkgPSAyODA7XHJcbiAgICAgICAgbGV0IGJhZGdlWCA9IDEwMDtcclxuICAgICAgICBjb25zdCBiYWRnZVNwYWNpbmcgPSA0MDtcclxuICAgICAgICBjb25zdCBiYWRnZUxpbWl0ID0gZ2V0R2FtZVdpZHRoKHRoaXMpIC0gODA7XHJcbiAgICAgICAgY29uc3QgaW50ZXJsaW5lID0gNTY7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0QmFkZ2VYKCkge1xyXG4gICAgICAgICAgICBiYWRnZVggPSAxMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIikuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICAgICAgR3VpLnNpbXBsZVBhcmFncmFwaCh7XHJcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgIHg6IHVzZXJuYW1lWCxcclxuICAgICAgICAgICAgICAgIHk6IHVzZXJuYW1lWSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHVzZXIudXNlcm5hbWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1c2VyLmdhbWVzLmZvckVhY2goZ2FtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFkZ2VYIDwgYmFkZ2VMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZVggKyBiYWRnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGdhbWUud2luID09PSB0cnVlKSA/IFwic3RhclwiIDogXCJ0b21ic3RvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VYICs9IGJhZGdlU3BhY2luZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1c2VybmFtZVkgKz0gaW50ZXJsaW5lO1xyXG4gICAgICAgICAgICByZXNldEJhZGdlWCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UmF0aW9zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKS5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd29uR2FtZXMgPSB1c2VyLmdhbWVzLmZpbHRlcihnYW1lID0+IGdhbWUud2luID09PSB0cnVlKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbEdhbWVzID0gdXNlci5nYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHVzZXIucmF0aW8gPSBNYXRoLmZsb29yKCh3b25HYW1lcyAvIHRvdGFsR2FtZXMpICogMTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ0dhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5nZXQoXCJ3aW5uZXJcIikuaWQgPT09IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMF0uZ2FtZXMucHVzaCh7IHdpbjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmdhbWVzLnB1c2goeyB3aW46IGZhbHNlIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmdldChcIndpbm5lclwiKS5pZCA9PT0gdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5nYW1lcy5wdXNoKHsgd2luOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmdhbWVzLnB1c2goeyB3aW46IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZ2FtZVNjZW5lRGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBnYW1lU2NlbmVEYXRhLnVzZXJzKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVTY2VuZURhdGEud2lubmVyKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwid2lubmVyXCIsIGdhbWVTY2VuZURhdGEud2lubmVyKTtcclxuICAgICAgICAgICAgdGhpcy5tYWluTWVzc2FnZSA9IGAke3RoaXMuZGF0YS5nZXQoXCJ3aW5uZXJcIikudXNlcm5hbWV9IFdPTiBUSElTIEdBTUUgIWA7XHJcbiAgICAgICAgICAgIHRoaXMubG9nR2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFJhdGlvcygpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5NZXNzYWdlID0gXCJJVCdTIEEgRFJBVyAhXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRGb3JHVUlTY2VuZXNcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIEd1aS50aXRsZSh7IHNjZW5lOiB0aGlzLCB0ZXh0OiBcIkVORCBPRiBHQU1FXCIgfSk7XHJcblxyXG4gICAgICAgIEd1aS5zaW1wbGVQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLm1haW5NZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXlSZXBvcnQoKTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJQTEFZIEFHQUlOXCIsXHJcbiAgICAgICAgICAgIHN0b3BTb3VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiTWVudVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTlRST0xLRVlTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgR3VpIH0gZnJvbSBcIi4uL29iamVjdHMvR3VpXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJNZW51XCIsXHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBzY2VuZSBpcyB3aGVyZSB0aGUgdHdvIHBsYXllcnMgY2hvb3NlIHRoZSB0ZXJyYWluL21hcCB0aGV5IHdpbGwgcGxheSBvbixcclxuICogYW5kIHRoZSBjaGFyYWN0ZXJzIHRoZXkgd2lsbCBwbGF5IHdpdGguXHJcbiAqIEl0IG1haW5seSB1c2VzIG1ldGhvZHMgZnJvbSB0aGUgR3VpIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIGxldmVsVGh1bWI6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyVGh1bWJzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U+O1xyXG5cclxuICAgIHByaXZhdGUgZHJhd0JhY2tncm91bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdldEdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdldEdhbWVIZWlnaHQodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmRGb3JHVUlTY2VuZXNcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZWQgdGhlIGNob2ljZXMgb24gdGhlIDFzdCBlbGVtZW50cyBvZiB0aGUgdGVycmFpbiBhbmQgdGhlXHJcbiAgICAvLyBjaGFyYWN0ZXJzLiBUaGlzIHdheSBpZiB0aGUgcGxheWVycyBkb2Vzbid0IGNsaWNrIG9uIGFueXRoaW5nIHRoZXkgc3RpbGxcclxuICAgIC8vIGhhdmUgdGVycmFpbiBhbmQgY2hhcmFjdGVycyBpbnN0YW5jZXMgYXR0YWNoZWQuXHJcbiAgICBwcml2YXRlIGluaXRVc2Vyc0Nob2ljZXMocFVzZXJzLCBwTGV2ZWxzLCBwQ2hhcmFjdGVycyk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBwVXNlcnMpIHtcclxuICAgICAgICAgICAgdXNlci5sZXZlbEluc3RhbmNlID0gcExldmVsc1swXTtcclxuICAgICAgICAgICAgdXNlci5jaGFyYWN0ZXJJbnN0YW5jZSA9IHBDaGFyYWN0ZXJzWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ha2VUZXJyYWluU2VjdGlvbihwYXJhbXM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHZvaWQge1xyXG4gICAgICAgIEd1aS5zaW1wbGVQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHk6IHBhcmFtcy55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRFUlJBSU5cIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCB0aGUgdGVycmFpbiB0aHVtYm5haWwgb24gdGhlIDFzdCBsZXZlbC5cclxuICAgICAgICB0aGlzLmxldmVsVGh1bWIgPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHBhcmFtcy55ICsgMTM4LFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpWzBdLnRodW1ibmFpbEtleVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIEd1aS5zbGlkZUJ0bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiBwYXJhbXMueCxcclxuICAgICAgICAgICAgeTogcGFyYW1zLnkgKyAxNDMgKyAxMzYsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTkVYVFwiLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMubGV2ZWxUaHVtYixcclxuICAgICAgICAgICAgdGV4dHVyZUtleXM6IHRoaXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgLmdldChcImxldmVsc1wiKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobGV2ZWwpID0+IGxldmVsLnRodW1ibmFpbEtleSksXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxldmVsIG9mIHRoaXMuZGF0YS5nZXQoXCJsZXZlbHNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwudGh1bWJuYWlsS2V5ID09PSB0aGlzLmxldmVsVGh1bWIudGV4dHVyZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlQ2hhcmFjdGVyU2VjdGlvbihwYXJhbXM6IHtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgY29udHJvbEtleXM6IHN0cmluZztcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgfSk6IHZvaWQge1xyXG5cclxuICAgICAgICBHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSxcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLnRpdGxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNoYXJhY3RlciB0aHVtYm5haWwgdG8gdGhlIDFzdCBvbmVcclxuICAgICAgICB0aGlzLmNoYXJhY3RlclRodW1icy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnkgKyA3MCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpWzBdLnRodW1ibmFpbEtleVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgR3VpLnNsaWRlQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSArIDcwICsgNjAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTkVYVFwiLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMuY2hhcmFjdGVyVGh1bWJzW3BhcmFtcy5pZF0sXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXlzOiB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5tYXAoKGMpID0+IGMudGh1bWJuYWlsS2V5KSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5kYXRhLmdldChcImNoYXJhY3RlcnNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2gudGh1bWJuYWlsS2V5ID09PSB0aGlzLmNoYXJhY3RlclRodW1ic1twYXJhbXMuaWRdLnRleHR1cmUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVtwYXJhbXMuaWRdLmNoYXJhY3Rlckluc3RhbmNlID0gY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSArIDcwICsgNjAgKyA3MixcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLmNvbnRyb2xLZXlzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGJvb3RTY2VuZURhdGEpIHtcclxuICAgICAgICAvLyBVc2luZyBFUzIwMjAgb3B0aW9ubmFsIGNoYWluaW5nIChpLmUgdGhlID8pIHRvIGNoZWNrIGlmIHRoZSBkYXRhXHJcbiAgICAgICAgLy8gb2JqZWN0IGNvbWluZyBmcm9tIHRoZSBib290IHNjZW5lIGhhcyB1c2VycywgY2hhcmFjdGVycyBhbmQgbGV2ZWxzIGZpZWxkcy5cclxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBkYXRhIGZyb20gdGhlIGJvb3Qgc2NlbmUgdG8gdGhpcyBzY2VuZSdzIGRhdGEuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIGJvb3RTY2VuZURhdGE/LnVzZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwiY2hhcmFjdGVyc1wiLCBib290U2NlbmVEYXRhPy5jaGFyYWN0ZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwibGV2ZWxzXCIsIGJvb3RTY2VuZURhdGE/LmxldmVscyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFVzZXJzQ2hvaWNlcyhcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpLFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyVGh1bWJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIEd1aS50aXRsZSh7IHNjZW5lOiB0aGlzLCB0ZXh0OiBcIk1FTlVcIiB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VUZXJyYWluU2VjdGlvbih7XHJcbiAgICAgICAgICAgIHg6IDIwMCxcclxuICAgICAgICAgICAgeTogMTkyXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZUNoYXJhY3RlclNlY3Rpb24oe1xyXG4gICAgICAgICAgICB4OiA3MDAsXHJcbiAgICAgICAgICAgIHk6IDE5MixcclxuICAgICAgICAgICAgdGl0bGU6IFwiUExBWUVSIDFcIixcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQxLmRpc3BsYXlTdHJpbmcsXHJcbiAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VDaGFyYWN0ZXJTZWN0aW9uKHtcclxuICAgICAgICAgICAgeDogOTAwLFxyXG4gICAgICAgICAgICB5OiAxOTIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlBMQVlFUiAyXCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMi5kaXNwbGF5U3RyaW5nLFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBNT0RJRklFRCB1c2VycyBkYXRhIGZyb20gdGhlIGJvb3Qgc2NlbmUgdG8gdGhpcyBhY3R1YWwgc2NlbmUuXHJcbiAgICAgICAgLy8gTW9kaWZpZWQsIGJlY2F1c2UgbGV2ZWwgYW5kIGNoYXJhY3RlcnMgaW5zdGFuY2VzIGhhcyBiZWVuIGxpbmtlZCB0b1xyXG4gICAgICAgIC8vIGVhY2ggdXNlcnMgdGhhbmtzIHRvIHRoZSBzbGlkZSBidXR0b25zIGNhbGxiYWNrcyBhbmQgdGhlIHRodW1ibmFpbHMuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKSk7XHJcblxyXG4gICAgICAgIEd1aS5tYWluQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiU1RBUlRcIixcclxuICAgICAgICAgICAgc3RvcFNvdW5kczogdHJ1ZSxcclxuICAgICAgICAgICAgc2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIG5ld1NjZW5lS2V5OiBcIkdhbWVcIixcclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tIFwiLi9NZW51U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tIFwiLi9HYW1lb3ZlclNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBCb290U2NlbmUsXHJcbiAgICBNZW51U2NlbmUsXHJcbiAgICBHYW1lU2NlbmUsXHJcbiAgICBHYW1lb3ZlclNjZW5lXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=