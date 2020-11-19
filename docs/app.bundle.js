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
            debug: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvQm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9DaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvR3VpLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL0hlYWx0aEJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9IdWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvTG9hZGluZ0Jhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9UaWxlbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL1RyYW1wb2xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvVXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9NZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXhLOEIsTUFBTSxDQUFDLEtBQUssR0F3SzFDO0FBeEtZLDhCQUFTOzs7Ozs7Ozs7Ozs7OztBQ2hCdEIsY0FBYzs7QUFFZCxzRkFBd0M7QUFDeEMsc0ZBQXdDO0FBQ3hDLHNGQUF3QztBQUN4QyxrR0FBZ0Q7QUFFaEQsa0JBQWU7SUFDZCxxQkFBUztJQUNULHFCQUFTO0lBQ1QscUJBQVM7SUFDVCw2QkFBYTtDQUNiLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25zIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHBhcmFtcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXNlciBvZiBwYXJhbXMudXNlcnMpIHtcclxuICAgICAgICAgICAgbGV0IHRrID0gdXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5O1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfVdBTEtgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIndhbGstc2lkZS1hcm1lZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogNCxcclxuICAgICAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9V0FMS19TSE9PVGAsXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHBhcmFtcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwid2Fsay1zaWRlLXNob290XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfUlETEVgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtYXJtZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGFyYW1zLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGAke3RrfUlETEVfU0hPT1RgLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBwYXJhbXMuc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtc2hvb3RcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwYXJhbXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogYCR7dGt9SElUYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJoaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBgJHt0a31ERUFEYCxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogcGFyYW1zLnNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeDogXCJkZWFkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgd2lkdGggb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgd2lkdGggb2YgdGhlIFwic2NyZWVuXCIvY2FudmFzIGJ1dCBub3QgYWx3YXlzLlxyXG4gKiBAcGFyYW0gc2NlbmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAqIFdoaWNoIGlzIGdlbmVyYWxseSBlcXVhbCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBcInNjcmVlblwiL2NhbnZhcyBidXQgbm90IGFsd2F5cy5cclxuICogQHBhcmFtIHNjZW5lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9hZCBhIGZpbGUgaW4gYWpheCBhbmQgcmV0dXJuIGl0cyByZXNwb25zZSB0ZXh0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoIFBhdGggdG8gdGhlIGRlc2lyZWQgZmlsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvYWRGaWxlID0gKHBGaWxlUGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIGxldCByYXdGaWxlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICBsZXQgcmVzdWx0OiBzdHJpbmc7XHJcblxyXG4gICAgcmF3RmlsZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3NzaWJsZSB0byBsb2FkIGZpbGUuXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICByYXdGaWxlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmF3RmlsZS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGaWxlLnN0YXR1cyA9PT0gMjAwIHx8IHJhd0ZpbGUuc3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByYXdGaWxlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmF3RmlsZS5vcGVuKFwiR0VUXCIsIHBGaWxlUGF0aCwgZmFsc2UpO1xyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIDJkLWFycmF5IG9mIHN0cmluZ3MgZnJvbSBhIHdob2xlIHRleHQgZmlsZSBnaXZlbiBhcyBpbnB1dC5cclxuICogV29ya3MgYmVzdCBpZiB0aGUgaW5wdXQgdGV4dCBpcyBvbmx5IGNvbXBvc2VkIG9mIHNpbmdsZSBjaGFycyBhbmQgJ1xcbicuXHJcbiAqIEVhY2ggZmluYWwgYXJyYXkgZWxlbWVudCB3b3VsZCBiZSBvbmUgY2hhcmFjdGVyIG9mIHRoZSB0ZXh0IGlucHV0LlxyXG4gKiBAcGFyYW0gcEZpbGVQYXRoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9hZFN0cmluZ3MgPSAocEZpbGVQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXVtdID0+IHtcclxuICAgIGxldCByYXdHcmlkID0gbG9hZEZpbGUocEZpbGVQYXRoKTtcclxuICAgIHJldHVybiByYXdHcmlkLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5zcGxpdChcIlwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgY3VzdG9tQmx1ZTogeyBzdHJpbmc6IFwiIzQzNDZmOVwiLCBoZXg6IDB4NDM0NmY5IH0sXHJcbiAgICBjdXN0b21HcmVlbjogeyBzdHJpbmc6IFwiIzc2ZWE2NFwiLCBoZXg6IDB4NzZlYTY0IH0sXHJcbiAgICB2aWJyYW50R3JlZW46IHsgc3RyaW5nOiBcIiMyNWY5NDVcIiwgaGV4OiAweDI1Zjk0NSB9LFxyXG4gICAgY3VzdG9tUmVkOiB7IHN0cmluZzogXCIjZWEyZDIzXCIsIGhleDogMHhlYTJkMjMgfSxcclxuXHR3aGl0ZTogeyBzdHJpbmc6IFwiI2ZmZmZmZlwiLCBoZXg6IDB4ZmZmZmZmIH0sXHJcblx0YmxhY2s6IHsgc3RyaW5nOiBcIiMwMDAwMDBcIiwgaGV4OiAweDAwMDAwMCB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTEtFWVMgPSB7XHJcbiAgICBQTEFZRVI6IHtcclxuICAgICAgICBTRVQxOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUklHSFQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZULFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU0hJRlQsXHJcblx0XHRcdGRpc3BsYXlTdHJpbmc6IGBcclxuXHRcdFx0XHRSaWdodCAgOiBEXHJcblx0XHRcdFx0TGVmdCAgIDogUVxyXG5cdFx0XHRcdFNob290ICA6IFNcclxuXHRcdFx0XHRKdW1wICAgOiBTUEFDRVxyXG5cdFx0XHRgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgU0VUMjoge1xyXG4gICAgICAgICAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkQsXHJcbiAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG4gICAgICAgICAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UsXHJcblx0XHRcdHNob290OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUyxcclxuXHRcdFx0ZGlzcGxheVN0cmluZzogYFxyXG5cdFx0XHRcdFJpZ2h0ICA6IOKGklxyXG5cdFx0XHRcdExlZnQgICA6IOKGkFxyXG5cdFx0XHRcdFNob290ICA6IFNISUZUXHJcblx0XHRcdFx0SnVtcCAgIDog4oaRXHJcblx0XHRcdGBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgPSBcIkdyb2JvbGQsIG1vbm9zcGFjZSwgQXJpYWxcIjtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCAqIGFzIFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XHJcbmltcG9ydCBTY2VuZXMgZnJvbSBcIi4vc2NlbmVzXCI7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6IFwiSG9hIEZpZ2h0XCIsXHJcblxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICBoZWlnaHQ6IDY0MCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgICBnYW1lcGFkOiB0cnVlLFxyXG4gICAgICAgIGtleWJvYXJkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJhcmNhZGVcIixcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZ3Jhdml0eToge1xyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZG9tOiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJlbnQ6IFwiZ2FtZVwiLFxyXG5cclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9tYiBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5JbWFnZSB7XHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy54IDwgMCB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuICAgICAgICB0aGlzLnNldEdyYXZpdHlZKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJvbWIgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIEdhbWUgQ2hhcmFjdGVyLCBub3QgdG8gYmUgY29uZnVzZWQgd2l0aCB0aGUgXCJQbGF5ZXJcIi5cclxuICogQSBQbGF5ZXIgaW50ZWdyYXRlcyBhIENoYXJhY3Rlci4gQSBDaGFyYWN0ZXIgaXMganVzdCBhYm91dCBob2xkaW5nIGRhdGEgOlxyXG4gKiB0ZXh0dXJlIGtleXMsIG1ldGFkYXRhLCB2b2ljZXMgZXRjLiBOb3RoaW5nIHRvIGJlIGNvbnRyb2xsZWQgd2l0aCB5b3VyXHJcbiAqIGtleWJvYXJkIGhlcmUuXHJcbiAqXHJcbiAqIEBmb3JtYXRcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAgIC8vIFZlcnkgaW1wb3J0YW50IGZpZWxkLCB0aWdodGx5IGxpbmtlZCB0byB0aGUga2V5cyB5b3UgcHJvdmlkZSBpbiBwYWNrLmpzb25cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RldGFpbHM6IG9iamVjdDtcclxuICAgIHByaXZhdGUgc3RhdHM6IG9iamVjdDtcclxuICAgIC8vIEZpZWxkcyBidWlsdCB1cG9uIHRoZSBJZCBwcm92aWRlZCBhdCBpbnN0YW5jaWF0aW9uLlxyXG4gICAgcHJpdmF0ZSBfdGV4dHVyZUtleTogc3RyaW5nO1xyXG4gICAgLy8gQ2hhcmFjdGVyJ3MgYXZhdGFyXHJcbiAgICBwcml2YXRlIF90aHVtYm5haWxLZXk6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3NvdW5kS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0ZXh0dXJlS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aHVtYm5haWxLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGh1bWJuYWlsS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc291bmRLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291bmRLZXk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBnZXQgZGV0YWlscygpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RldGFpbHM7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBpZDogbnVtYmVyOyBkZXRhaWxzPzoge25pY2tuYW1lOiBzdHJpbmd9OyBzdGF0cz86IG9iamVjdCB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl9kZXRhaWxzID0gcGFyYW1zLmRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHBhcmFtcy5zdGF0cztcclxuICAgICAgICB0aGlzLl90ZXh0dXJlS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1gO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9QXZhdGFyYDtcclxuICAgICAgICB0aGlzLl9zb3VuZEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9U291bmRgO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgZm9yIEdVSSBlbGVtZW50cyBzdWNoIGFzIGFjdGlvbnMgYnV0dG9ucyBhbmQgdGl0bGVzLlxyXG4gKiBJdCByZWxpZXMgb24gUGhhc2VyIGdhbWUgb2JqZWN0cyBET00gZWxlbWVudHMsIHNvIHRoZXNlIEdVSSBlbGVtZW50cyBhcmVcclxuICogaHRtbCBhbmQgY3NzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEd1aSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG1haW5CdG5TdHlsZSA9IGBcclxuXHRcdGhlaWdodDogNTBweDsgXHJcblx0XHRmb250LXNpemU6IDI1cHg7IFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfTsgXHJcblx0XHRjb2xvcjogJHtDT0xPUlMuYmxhY2suc3RyaW5nfTsgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy53aGl0ZS5zdHJpbmd9OyBcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICR7Q09MT1JTLmJsYWNrLnN0cmluZ31cclxuXHRgO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgc2Vjb25kYXJ5QnRuU3R5bGUgPSBgXHJcblx0XHR3aWR0aDogMTAwcHg7IFxyXG5cdFx0aGVpZ2h0OiAzM3B4OyBcclxuXHRcdGZvbnQtc2l6ZTogMTdweDsgXHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9OyBcclxuXHRcdGNvbG9yOiAke0NPTE9SUy5ibGFjay5zdHJpbmd9OyBcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307IFxyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgJHtDT0xPUlMuYmxhY2suc3RyaW5nfVxyXG5cdGA7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGl0bGVTdHlsZSA9IGBcclxuXHRcdGZvbnQtc2l6ZTogNDBweDsgXHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfTsgXHJcblx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9YDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHNlY3Rpb25UaXRsZVN0eWxlID0gYFxyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6ICR7Q09MT1JTLndoaXRlLnN0cmluZ307IFxyXG5cdFx0Zm9udC1mYW1pbHk6ICR7REVGQVVMVF9GT05UX0ZBTUlMSUVTfVxyXG5cdGA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBiYXNpY1RleHRTdHlsZSA9IGBcclxuXHRcdGZvbnQtc2l6ZTogMjBweDsgXHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRjb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfTsgXHJcblx0XHRmb250LWZhbWlseTogJHtERUZBVUxUX0ZPTlRfRkFNSUxJRVN9XHJcblx0YDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIHN0eWxpemVkIEJ1dHRvbiBET00gRWxlbWVudCB3aXRoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgYXR0YWNoZWRcclxuICAgICAqIHRvIGl0LiBUaGUgZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2sgc3RhcnRzIGEgbmV3IHNjZW5lIHVzaW5nIHRoZSBzY2VuZSBrZXlcclxuICAgICAqIHBhc3NlZCBpbiBhcmd1bWVudHMgYW5kIHN0b3BzIGFsbCBzb3VuZHMgaWYgc3RvcFNvdW5kcyBzZXQgdG8gdHJ1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBtYWluQnRuKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHN0b3BTb3VuZHM6IGJvb2xlYW47XHJcbiAgICAgICAgc2NlbmVQbHVnaW46IFBoYXNlci5TY2VuZXMuU2NlbmVQbHVnaW47XHJcbiAgICAgICAgbmV3U2NlbmVLZXk6IHN0cmluZztcclxuICAgICAgICBzY2VuZURhdGE/OiBvYmplY3Q7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAuZG9tKFxyXG4gICAgICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgZ2V0R2FtZUhlaWdodChwYXJhbXMuc2NlbmUpIC0gOTAsXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLm1haW5CdG5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZExpc3RlbmVyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lLnNvdW5kLmFkZChcImNsaWNrU291bmRcIikucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuc3RvcFNvdW5kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zY2VuZS5zb3VuZC5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnNjZW5lUGx1Z2luLnN0YXJ0KHBhcmFtcy5uZXdTY2VuZUtleSwgcGFyYW1zLnNjZW5lRGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnV0dG9uIHRoYXQgY2hhbmdlcyBhbiBpbWFnZSAoaW1nKSB0ZXh0dXJlIHdpdGggYW5vdGhlciAodGV4dHVyZXMpLFxyXG4gICAgICogb25lIGJ5IG9uZS4gTGlrZSBhIHNsaWRlc2hvdy5cclxuICAgICAqIEBwYXJhbSBpbWc6IGEgcGhhc2VyIGdhbWUgb2JqZWN0IGltYWdlIHRoYXQgYWN0IGFzIGEgY29udGFpbmVyIGluIGEgd2F5LlxyXG4gICAgICogQHBhcmFtIHRleHR1cmVzOiB0aGUgdGV4dHVyZXMgdG8gYXBwZW5kIHRvIGltZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzbGlkZUJ0bihwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGltZzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgICAgIHRleHR1cmVLZXlzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrPzogRnVuY3Rpb247XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgR3VpLnNlY29uZGFyeUJ0blN0eWxlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuYWRkTGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuc2NlbmUuc291bmQuYWRkKFwiY2xpY2tTb3VuZFwiKS5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHBhcmFtcy50ZXh0dXJlS2V5cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmltZy5zZXRUZXh0dXJlKHBhcmFtcy50ZXh0dXJlS2V5c1tjdXJyZW50SW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aXRsZShwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgdGV4dDogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgICAgICBwYXJhbXMuc2NlbmUuYWRkLmRvbShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHBhcmFtcy5zY2VuZSkgLyAyLFxyXG4gICAgICAgICAgICA2NCxcclxuICAgICAgICAgICAgXCJoM1wiLFxyXG4gICAgICAgICAgICBHdWkudGl0bGVTdHlsZSxcclxuICAgICAgICAgICAgcGFyYW1zLnRleHRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VjdGlvblRpdGxlKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICB9KTogdm9pZCB7XHJcbiAgICAgICAgcGFyYW1zLnNjZW5lLmFkZC5kb20oXHJcbiAgICAgICAgICAgIHBhcmFtcy54LFxyXG4gICAgICAgICAgICBwYXJhbXMueSxcclxuICAgICAgICAgICAgXCJoNFwiLFxyXG4gICAgICAgICAgICBHdWkuc2VjdGlvblRpdGxlU3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNpbXBsZVBhcmFncmFwaChwYXJhbXM6IHtcclxuICAgICAgICBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHBhcmFtcy5zY2VuZS5hZGQuZG9tKFxyXG4gICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgcGFyYW1zLnksXHJcbiAgICAgICAgICAgIFwicFwiLFxyXG4gICAgICAgICAgICBHdWkuYmFzaWNUZXh0U3R5bGUsXHJcbiAgICAgICAgICAgIHBhcmFtcy50ZXh0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBnZXRHYW1lV2lkdGggfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciB7XHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlYWx0aFZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGRlY3JlYXNlKHBBbW91bnQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuaGVhbHRoVmFsdWUgLT0gcEFtb3VudCAqIDI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aFZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aFZhbHVlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhWYWx1ZSA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gQmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMud2hpdGUuaGV4KTtcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA+IDYwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tQmx1ZS5oZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyLmZpbGxTdHlsZShDT0xPUlMuY3VzdG9tUmVkLmhleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhbHRoV2lkdGggPSBNYXRoLmZsb29yKHRoaXMuaGVhbHRoVmFsdWUpO1xyXG4gICAgICAgIC8vIFRoZSBhY3R1YWwgaGVhbHRoIGphdWdlIHlvdSBzZWUgZGVjcmVhc2luZ1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCBoZWFsdGhXaWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lOyBzaWRlOiBzdHJpbmcgfSkge1xyXG4gICAgICAgIHRoaXMuYmFyID0gcGFyYW1zLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxNjtcclxuXHRcdHRoaXMuaGVhbHRoVmFsdWUgPSAyMDA7XHJcblx0XHRcclxuXHRcdGlmIChwYXJhbXMuc2lkZSA9PT0gXCJsZWZ0XCIpIHtcclxuXHRcdFx0dGhpcy54ID0gNjA7XHJcblx0XHRcdHRoaXMueSA9IDQwO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJhbXMuc2lkZSA9PT0gXCJyaWdodFwiKSB7XHJcblx0XHRcdHRoaXMueCA9IChnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSkgLSB0aGlzLndpZHRoIC0gNjQ7XHJcblx0XHRcdHRoaXMueSA9IDQwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2lkZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnXCIpO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQ09MT1JTLCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHVkIHtcclxuICAgIHByaXZhdGUgYXZhdGFyOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5ET01FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0ZXh0U3R5bGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgdXNlcjogVXNlciB9KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0U3R5bGUgPSBgXHJcblx0XHRcdGZvbnQtZmFtaWx5OiAke0RFRkFVTFRfRk9OVF9GQU1JTElFU307IFxyXG5cdFx0XHRtYXJnaW46IDA7IFxyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7IFxyXG5cdFx0XHRjb2xvcjogJHtDT0xPUlMud2hpdGUuc3RyaW5nfTtcclxuXHRcdFx0cGFkZGluZzogMTBweFxyXG5cdFx0YDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmltYWdlKDAsIDM1LCBwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXkpXHJcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0ID0gcGFyYW1zLnNjZW5lLmFkZFxyXG4gICAgICAgICAgICAgICAgLmRvbShcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdFx0cGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UuZGV0YWlscy5uaWNrbmFtZSArIFwiIHwgXCIgKyBcclxuXHRcdFx0XHRcdHBhcmFtcy51c2VyLnVzZXJuYW1lICsgXHJcblx0XHRcdFx0XHRcIiB8IFJhdGlvIFwiICsgcGFyYW1zLnVzZXIucmF0aW8gKyBcIiVcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy51c2VyLnNjcmVlblNpZGUgPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGlzLmF2YXRhciA9IHBhcmFtcy5zY2VuZS5hZGRcclxuICAgICAgICAgICAgICAgIC5pbWFnZShcclxuICAgICAgICAgICAgICAgICAgICBnZXRHYW1lV2lkdGgocGFyYW1zLnNjZW5lKSxcclxuICAgICAgICAgICAgICAgICAgICAzNSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMudXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBwYXJhbXMuc2NlbmUuYWRkXHJcbiAgICAgICAgICAgICAgICAuZG9tKFxyXG4gICAgICAgICAgICAgICAgICAgIGdldEdhbWVXaWR0aChwYXJhbXMuc2NlbmUpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLFxyXG5cdFx0XHRcdFx0cGFyYW1zLnVzZXIuY2hhcmFjdGVySW5zdGFuY2UuZGV0YWlscy5uaWNrbmFtZSArICBcIiB8IFwiICsgXHJcblx0XHRcdFx0XHRwYXJhbXMudXNlci51c2VybmFtZSArIFxyXG5cdFx0XHRcdFx0XCIgfCBSYXRpbyBcIiArIHBhcmFtcy51c2VyLnJhdGlvICsgXCIlXCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4vVGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgTGV2ZWwgY29uc2lzdHMgb2YgOiBhIGJhY2tncm91bmQgKyBhIG11c2ljIHRoZW1lICsgYSB0aWxlbWFwICsgYSBuYW1lICtcclxuICogYSB0aHVtYm5haWwuXHJcbiAqIEl0IGluaXRzIHRoZSBkaWZmZXJlbnQga2V5cyBuZWVkZWQgYW5kIGNyZWF0ZXMvZHJhdyB0aGUgYmFja2dyb3VuZCxcclxuICogdGhlIHRpbGVtYXAgKGJ5IGluc3RhbmNpYXRlIGl0KSBhbmQgcGxheSB0aGUgbXVzaWMgdGhlbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGV2ZWwge1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdGlsZW1hcDogVGlsZW1hcDtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3RodW1ibmFpbEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kS2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG11c2ljS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0aWxlbWFwKCk6IFRpbGVtYXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbEtleTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBwYXJhbXMubmFtZTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRLZXkgPSBgbGV2ZWwke3RoaXMuaWR9QmFja2dyb3VuZGA7XHJcbiAgICAgICAgdGhpcy5tdXNpY0tleSA9IGBsZXZlbCR7dGhpcy5pZH1UaGVtZWA7XHJcbiAgICAgICAgdGhpcy5fdGh1bWJuYWlsS2V5ID0gYGxldmVsJHt0aGlzLmlkfVRodW1ibmFpbGA7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHNjZW5lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEtleVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpbGVtYXAgPSBuZXcgVGlsZW1hcCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQodGhpcy5tdXNpY0tleSkucGxheSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyBDT0xPUlMsIGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0JhciB7XHJcblx0cHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cclxuXHRwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cdHByaXZhdGUgYmFyWDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmFyWTogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmFyV2lkdGg6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckhlaWdodDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYmFyQ29sb3I6IG51bWJlcjtcclxuXHRwcml2YXRlIGJhckFscGhhOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgYm94OiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcblx0cHJpdmF0ZSBib3hYOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBib3hZOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBib3hXaWR0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94SGVpZ2h0OiBudW1iZXI7XHJcblx0cHJpdmF0ZSBib3hDb2xvcjogbnVtYmVyO1xyXG5cdHByaXZhdGUgYm94QWxwaGE6IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHRwcml2YXRlIF9wcm9ncmVzc1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuXHRwdWJsaWMgZ2V0IHByb2dyZXNzVGV4dCgpOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dCB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUZXh0O1xyXG5cdH1cclxuXHRcclxuICAgIHB1YmxpYyBkcmF3KHBWYWx1ZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5iYXIuY2xlYXIoKTtcclxuXHRcdHRoaXMuYmFyLmZpbGxTdHlsZSh0aGlzLmJhckNvbG9yLCB0aGlzLmJhckFscGhhKTtcclxuXHRcdHRoaXMuYmFyLmZpbGxSZWN0KHRoaXMuYmFyWCwgdGhpcy5iYXJZLCB0aGlzLmJhcldpZHRoICogcFZhbHVlLCB0aGlzLmJhckhlaWdodCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5iYXIuZGVzdHJveSgpO1xyXG5cdFx0dGhpcy5ib3guZGVzdHJveSgpO1xyXG5cdFx0dGhpcy50ZXh0LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMucHJvZ3Jlc3NUZXh0LmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmUgfSkge1xyXG5cdFx0dGhpcy5zY2VuZSA9IHBhcmFtcy5zY2VuZTtcclxuXHJcblx0XHR0aGlzLmJhciA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcblx0XHR0aGlzLmJhcldpZHRoID0gNDAwO1xyXG5cdFx0dGhpcy5iYXJIZWlnaHQgPSAzMDtcclxuXHRcdHRoaXMuYmFyWCA9IChnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMikgLSAodGhpcy5iYXJXaWR0aC8yKTtcclxuXHRcdHRoaXMuYmFyWSA9IChnZXRHYW1lSGVpZ2h0KHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYmFySGVpZ2h0LzIpO1xyXG5cdFx0dGhpcy5iYXJDb2xvciA9IENPTE9SUy5jdXN0b21CbHVlLmhleDtcclxuXHRcdHRoaXMuYmFyQWxwaGEgPSAwLjg7XHJcblx0XHRcclxuXHRcdHRoaXMuYm94ID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuXHRcdHRoaXMuYm94V2lkdGggPSB0aGlzLmJhcldpZHRoICsgMTA7XHJcblx0XHR0aGlzLmJveEhlaWdodCA9IHRoaXMuYmFySGVpZ2h0ICsgMTA7XHJcblx0XHR0aGlzLmJveFggPSAoZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpLzIpIC0gKHRoaXMuYm94V2lkdGgvMik7XHJcblx0XHR0aGlzLmJveFkgPSAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSAtICh0aGlzLmJveEhlaWdodC8yKTtcclxuXHRcdHRoaXMuYm94Q29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG5cdFx0dGhpcy5ib3hBbHBoYSA9IDAuMztcclxuXHRcdFxyXG5cdFx0dGhpcy5ib3guZmlsbFN0eWxlKHRoaXMuYm94Q29sb3IsIHRoaXMuYm94QWxwaGEpO1xyXG5cdFx0dGhpcy5ib3guZmlsbFJlY3QodGhpcy5ib3hYLCB0aGlzLmJveFksIHRoaXMuYm94V2lkdGgsIHRoaXMuYm94SGVpZ2h0KTtcclxuXHJcblx0XHR0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IGdldEdhbWVXaWR0aCh0aGlzLnNjZW5lKS8yLFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSArIDQwLFxyXG5cdFx0XHR0ZXh0OiBcIkxvYWRpbmcuLi5cIixcclxuXHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRmb250OiAnMjBweCBtb25vc3BhY2UnLFxyXG5cdFx0XHRcdGZpbGw6IENPTE9SUy53aGl0ZS5zdHJpbmdcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblx0XHR0aGlzLl9wcm9ncmVzc1RleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcblx0XHRcdHg6IChnZXRHYW1lV2lkdGgodGhpcy5zY2VuZSkvMiksIFxyXG5cdFx0XHR5OiAoZ2V0R2FtZUhlaWdodCh0aGlzLnNjZW5lKS8yKSxcclxuXHRcdFx0dGV4dDogXCIwJVwiLFxyXG5cdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdGZvbnQ6ICcxOHB4IG1vbm9zcGFjZScsXHJcblx0XHRcdFx0ZmlsbDogQ09MT1JTLndoaXRlLnN0cmluZ1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSBcIi4vUHJvamVjdGlsZVwiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9IZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBwcml2YXRlIF9wcm9qZWN0aWxlczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2h0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBsZWZ0S2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBqdW1wS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHJpdmF0ZSBzaG9vdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGFzdFByZXNzZWRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBwcml2YXRlIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcblxyXG4gICAgcHJpdmF0ZSBsYXN0U2hvb3Q6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHZ4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGdyYXZpdHlZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3VuY2U6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYnVsbGV0UHJvb2Y6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFURVMgPSB7XHJcbiAgICAgICAgTk9STUFMOiBcIk5PUk1BTFwiLFxyXG4gICAgICAgIEhVUlQ6IFwiSFVSVFwiLFxyXG4gICAgICAgIERFQUQ6IFwiREVBRFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHByb2plY3RpbGVzKCk6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGh1cnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0UHJvb2YgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDIwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZGVjcmVhc2UoMjApO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5zdGF0ZSAhPT0gdGhpcy5TVEFURVMuSFVSVCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5IVVJUKTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VCdWxsZXRQcm9vZigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRQcm9vZiA9PT0gZmFsc2UpIHRoaXMuYnVsbGV0UHJvb2YgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFNvdW5kcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmp1bXBTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKFwianVtcFNvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKFwic2hvb3RTb3VuZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRWaXRhbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQcm9vZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ncmF2aXR5WSA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5qdW1wVmVsb2NpdHkgPSAtNjAwO1xyXG4gICAgICAgIHRoaXMudnggPSAxNTA7XHJcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseVBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEdyYXZpdHlZKHRoaXMuZ3Jhdml0eVkpO1xyXG4gICAgICAgIHRoaXMuc2V0Qm91bmNlKHRoaXMuYm91bmNlKTtcclxuICAgICAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRDb250cm9scyhwS2V5cyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuanVtcEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wianVtcFwiXSk7XHJcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wicmlnaHRcIl0pO1xyXG4gICAgICAgIHRoaXMubGVmdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wibGVmdFwiXSk7XHJcbiAgICAgICAgdGhpcy5zaG9vdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wic2hvb3RcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEhlYWx0aEJhcihwSGVhbHRoQmFyOiBIZWFsdGhCYXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHBIZWFsdGhCYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U2hvb3RpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvb3QgPSAwO1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RpbGVzID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob290KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnRpbWUubm93ID4gdGhpcy5sYXN0U2hvb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvamVjdGlsZXMuYWRkKFxyXG4gICAgICAgICAgICAgICAgbmV3IFByb2plY3RpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIGJ1bGxldCBzdGFydGluZyBwb2ludCBpZiBzcHJpdGUgaXMgZmxpcHBlZCBvbiBYIGF4aXMuXHJcbiAgICAgICAgICAgICAgICAgICAgeDogIXRoaXMuZmxpcFggPyB0aGlzLnggKyAyMCA6IHRoaXMueCAtIDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMueSArIDExLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1bGxldCBkaXJlY3Rpb24gKGxlZnQvcmlnaHQpIGJhc2VkIG9uIGxhc3QgcHJlc3NlZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICAvLyAoaS5lIGRpcmVjdGlvbiBvZiB0aGUgcGxheWVyKS4gRGVmYXVsdDogZ29lcyByaWdodC5cclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSA/IC0xIDogMSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcInByb2plY3RpbGVcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob290ID0gdGhpcy5zY2VuZS50aW1lLm5vdyArIDUwMDtcclxuICAgICAgICAgICAgLy8gUGxheWluZyBzb3VuZCBoZXJlIGVuc3VyZXMgdXMgaXQgaXMgcGxheWVkIG9ubHkgb25jZSBldmVyeSBzaG9vdC5cclxuICAgICAgICAgICAgdGhpcy5zaG9vdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGlwcGluZyB0aGUgc3ByaXRlIG9uIGl0cyBYIGF4aXMsIGRlcGVuZGluZyBvbiB3aGljaCBkaXJlY3Rpb24geW91IGdvLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVNwcml0ZUZsaXBwaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLmxlZnRLZXkpIHtcclxuICAgICAgICAgICAgLy8gQ2hhbmdlZCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyBsZWZ0LlxyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMucmlnaHRLZXkpIHtcclxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgc3ByaXRlIG9yaWVudGF0aW9uOiBmYWNpbmcgcmlnaHQuXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyByaWdodC5cclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUp1bXBpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuanVtcEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9keS5ibG9ja2VkLmRvd24gfHwgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKHRoaXMuanVtcFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBpZGxpbmcgKGRvaW5nIG5vdGhpbmcpIEFORCBpZGxpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUlkbGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIElkbGluZy1TaG9vdGluZy5cclxuICAgICAgICBpZiAodGhpcy5zaG9vdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SURMRV9TSE9PVGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHdhbGtpbmcgQU5EIHdhbGtpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVdhbGtpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9V0FMS2AsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBXYWxraW5nIDogZ29pbmcgcmlnaHRcclxuICAgICAgICBpZiAodGhpcy5yaWdodEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgodGhpcy52eCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFByZXNzZWRLZXkgPSB0aGlzLnJpZ2h0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXYWxraW5nIDogZ29pbmcgbGVmdFxyXG4gICAgICAgIGlmICh0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKC10aGlzLnZ4KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMubGVmdEtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdhbGtpbmctU2hvb3RpbmdcclxuICAgICAgICBpZiAodGhpcy5zaG9vdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9V0FMS19TSE9PVGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgY29udHJvbEtleXM6IG9iamVjdDtcclxuICAgICAgICBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuICAgIH0pIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseVBoeXNpY3MoKTtcclxuICAgICAgICB0aGlzLmluaXRTb3VuZHMoKTtcclxuICAgICAgICB0aGlzLmluaXRWaXRhbHMoKTtcclxuICAgICAgICB0aGlzLmluaXRIZWFsdGhCYXIocGFyYW1zLmhlYWx0aEJhcik7XHJcbiAgICAgICAgdGhpcy5pbml0U2hvb3RpbmcoKTtcclxuICAgICAgICB0aGlzLmluaXRDb250cm9scyhwYXJhbXMuY29udHJvbEtleXMpO1xyXG5cclxuICAgICAgICAvLyBSZXN0cmFpbiB0aGUgYm91bmRpbmdCb3hcclxuICAgICAgICB0aGlzLnNldFNpemUoMjAsIDYwKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLk5PUk1BTCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuaXNEZWFkKCkpIHtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMuU1RBVEVTLkRFQUQ7XHJcblx0XHR9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5OT1JNQUwpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBkZXRhY2hlZCBmcm9tIHRoZSBvdGhlciBibG9jayBiZWNhdXNlIHlvdSBjYW4gZG8gYW55dGhpbmdcclxuICAgICAgICAgICAgLy8gd2hpbGUganVtcGluZzogd2Fsay93YWxrLXNob290LCBpZGxlL2lkbGUtc2hvb3QuIFNvIGl0IGlzbid0XHJcbiAgICAgICAgICAgIC8vIGRlcGVuZGFudCBvZiB3aGV0aGVyIHlvdSdyZSBwcmVzc2luZyBsZWZ0IG9yIHJpZ2h0IG9yIHdoYXRldmVyLlxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUp1bXBpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdhbGtpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdHRoaXMuaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTtcclxuXHRcdFx0XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5IVVJUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUhJVGAsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgoMCk7XHJcblxyXG5cdFx0XHQvLyBUaGUgb25seSB0aGluZyB0aGF0IG1ha2UgdGhlIHBsYXllciByZXR1cm4gdG8gbm9ybWFsIGlzIHRpbWVcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5TVEFURVMuTk9STUFMKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gdGhpcy5TVEFURVMuREVBRCkge1xyXG4gICAgICAgICAgICAvLyBXZSBkb24ndCByZXNldCBzdGF0ZSB0byBOT1JNQUwgY2F1c2UgaXQncyBlbmQgb2YgdGhlIGdhbWVcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9REVBRGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIFBsYXllciBTdGF0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSB2eDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGlzT3V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy54ID4gZ2V0R2FtZVdpZHRoKHRoaXMuc2NlbmUpIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA+IGdldEdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy54IDwgMCB8fFxyXG4gICAgICAgICAgICB0aGlzLnkgPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QW5pbWF0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJjb2xsaXNpb25FZmZlY3QxXCIsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5zY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImNvbGxpc2lvbkVmZmVjdDFcIiwge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6IDEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy52eCA9IDcwMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb247XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgodGhpcy5kaXJlY3Rpb24gKiB0aGlzLnZ4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0aWxlIGRlc3Ryb3llZCBjYXVzZSBvdXQgb2Ygd29ybGQgYm91bmRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZUhlaWdodCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFRyYW1wb2xpbmUgfSBmcm9tIFwiLi9UcmFtcG9saW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcCB7XHJcbiAgICBwcml2YXRlIG1hcDogUGhhc2VyLlRpbGVtYXBzLlRpbGVtYXA7XHJcbiAgICBwcml2YXRlIHRpbGVzZXQ6IFBoYXNlci5UaWxlbWFwcy5UaWxlc2V0O1xyXG4gICAgcHJpdmF0ZSBfbWFpbkxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG5cdHByaXZhdGUgc3ViTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcblx0cHJpdmF0ZSBfdHJhbXBvbGluZTogVHJhbXBvbGluZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgdGhlIGxheWVyIHRoYXQgY29sbGlkZXM6ICdjb2xsaWRlcycgc2V0IHRvIHRydWUgaW4gVGlsZWQuXHJcbiAgICAgKi9cclxuICAgIGdldCBtYWluTGF5ZXIoKTogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5MYXllcjtcclxuXHR9XHJcblxyXG5cdGdldCB0cmFtcG9saW5lKCk6IFRyYW1wb2xpbmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFtcG9saW5lO1xyXG5cdH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgaWQ6IG51bWJlciB9KSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFwID0gcGFyYW1zLnNjZW5lLm1ha2UudGlsZW1hcCh7XHJcbiAgICAgICAgICAgIGtleTogYGxldmVsJHtwYXJhbXMuaWR9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKFxyXG4gICAgICAgICAgICBgbGV2ZWwke3BhcmFtcy5pZH0tdGlsZXNoZWV0YCxcclxuICAgICAgICAgICAgYGxldmVsJHtwYXJhbXMuaWR9VGlsZXNoZWV0YFxyXG5cdFx0KTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMuX21haW5MYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKFxyXG4gICAgICAgICAgICBcIm1haW5MYXllclwiLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzZXQsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluTGF5ZXIuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7XHJcbiAgICAgICAgICAgIGNvbGxpZGVzOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YkxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoXHJcbiAgICAgICAgICAgIFwic3ViTGF5ZXJcIixcclxuICAgICAgICAgICAgdGhpcy50aWxlc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuX3RyYW1wb2xpbmUgPSBuZXcgVHJhbXBvbGluZSh7XHJcblx0XHRcdHNjZW5lOiBwYXJhbXMuc2NlbmUsIFxyXG5cdFx0XHR4OiA0MDAsIFxyXG5cdFx0XHR5OiBnZXRHYW1lSGVpZ2h0KHBhcmFtcy5zY2VuZSkgLSB0aGlzLnRpbGVzZXQudGlsZUhlaWdodCAqIDIuNVxyXG5cdFx0fSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFtcG9saW5lIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuXHRcdHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBcInRyYW1wb2xpbmVcIik7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL0NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL0xldmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3JhdGlvOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBfc2NyZWVuU2lkZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfY2hhcmFjdGVySW5zdGFuY2U6IENoYXJhY3RlcjtcclxuICAgIHByaXZhdGUgX3BsYXllckluc3RhbmNlOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIF9sZXZlbEluc3RhbmNlOiBMZXZlbDtcclxuXHRwdWJsaWMgZ2FtZXM6IEFycmF5PG9iamVjdD47XHJcblxyXG4gICAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmF0aW8oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzY3JlZW5TaWRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlblNpZGU7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcmFjdGVyIHRoZSB1c2VyIGhhcyBjaG9zZW4gaW4gdGhlIE1lbnUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgY2hhcmFjdGVySW5zdGFuY2UoKTogQ2hhcmFjdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcmFjdGVySW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGF5ZXIgY3JlYXRlZCBpbiBHYW1lIFNjZW5lIGJhc2VkIG9uIFVzZXIncyBjaGFyYWN0ZXIgY2hvaWNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllckluc3RhbmNlKCk6IFBsYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGV2ZWwgdGhlIHVzZXIgaGFzIGNob3NlbiBpbiB0aGUgTWVudSwgbWFrZXMgbW9yZSBzZW5zZSB3aGVuIHBsYXlpbmcgc29sby5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBsZXZlbEluc3RhbmNlKCk6IExldmVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGV2ZWxJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGNoYXJhY3Rlckluc3RhbmNlKHY6IENoYXJhY3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2NoYXJhY3Rlckluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHBsYXllckluc3RhbmNlKHY6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMuX3BsYXllckluc3RhbmNlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxldmVsSW5zdGFuY2UodjogTGV2ZWwpIHtcclxuICAgICAgICB0aGlzLl9sZXZlbEluc3RhbmNlID0gdjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQgcmF0aW8odjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9yYXRpbyA9IHY7XHJcblx0fVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICByYXRpbzogbnVtYmVyO1xyXG5cdFx0c2NyZWVuU2lkZTogc3RyaW5nO1xyXG5cdFx0Z2FtZXM6IEFycmF5PG9iamVjdD47XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBwYXJhbXMuaWQ7XHJcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSBwYXJhbXMudXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5fcmF0aW8gPSBwYXJhbXMucmF0aW87XHJcblx0XHR0aGlzLl9zY3JlZW5TaWRlID0gcGFyYW1zLnNjcmVlblNpZGU7XHJcblx0XHR0aGlzLmdhbWVzID0gcGFyYW1zLmdhbWVzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL29iamVjdHMvTGV2ZWxcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9vYmplY3RzL1VzZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL29iamVjdHMvQ2hhcmFjdGVyXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nQmFyIH0gZnJvbSBcIi4uL29iamVjdHMvTG9hZGluZ0JhclwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiQm9vdFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIGxldmVsczogQXJyYXk8TGV2ZWw+O1xyXG4gICAgcHJpdmF0ZSB1c2VyczogQXJyYXk8VXNlcj47XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcnM6IEFycmF5PENoYXJhY3Rlcj47XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dvOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIGJ0bjogUGhhc2VyLkdhbWVPYmplY3RzLkRPTUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGJhY2tncm91bmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcclxuICAgIHByaXZhdGUgbXVzaWNUaGVtZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHRwcml2YXRlIGxvYWRpbmdCYXI6IExvYWRpbmdCYXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBMZXZlbCh7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2ltZXRpZXJlXCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgTGV2ZWwoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByYWlyaWVcIixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VycyA9IFtcclxuICAgICAgICAgICAgbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJQb29sR2hvdWxcIixcclxuXHRcdFx0XHRyYXRpbzogMCxcclxuXHRcdFx0XHRnYW1lczogW10sXHJcbiAgICAgICAgICAgICAgICBzY3JlZW5TaWRlOiBcImxlZnRcIixcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgICAgICBuZXcgVXNlcih7XHJcbiAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcIkpvbGx5Q2xldmVyXCIsXHJcblx0XHRcdFx0cmF0aW86IDAsXHJcblx0XHRcdFx0Z2FtZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2NyZWVuU2lkZTogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuXHRcdF07XHJcblx0XHRcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIlN0ZXZpZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJDYXJvbGluZVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJLcmlzdG9mXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIktyaXN0eVwiIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge30sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHtcclxuICAgICAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogeyBuaWNrbmFtZTogXCJPcm9uXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIkFsZXhhXCIgfSxcclxuICAgICAgICAgICAgICAgIHN0YXRzOiB7fSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gVXNpbmcgdGhlIHNjZW5lIERhdGEgTWFuYWdlciB0byBzdG9yZSBkYXRhIG9uIGEgc2NlbmUgbGV2ZWwuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIHRoaXMudXNlcnMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJjaGFyYWN0ZXJzXCIsIHRoaXMuY2hhcmFjdGVycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImxldmVsc1wiLCB0aGlzLmxldmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQucGFjayhcInByZWxvYWRcIiwgXCJhc3NldHMvcGFjay5qc29uXCIsIFwicHJlbG9hZFwiKTtcclxuXHJcbiAgICAgICAgLy8gUHJlbG9hZCBhbGwgY2hhcmFjdGVycyBhdGxhc2VzIDogYSBqc29uIGZpbGUgdGhhdCBhY3RzIGFzXHJcbiAgICAgICAgLy8gYXMgYSBcIm1hcFwiL1wibGlua1wiIHRvIGEgcG5nIHNwcml0ZXNoZWV0LlxyXG5cdFx0Ly8gVXNlZCBmb3IgZHJhd2luZyBQTGF5ZXIgdGV4dHVyZSBhbmQgc2V0IGFuaW1hdGlvbnMuXHJcblx0XHRjb25zdCBOVU1CRVJfT0ZfQ0hBUkFDVEVSUyA9IDY7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPD0gTlVNQkVSX09GX0NIQVJBQ1RFUlM7IG4rKykge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQuYXRsYXMoXHJcbiAgICAgICAgICAgICAgICBgY2hhcmFjdGVyJHtufWAsXHJcbiAgICAgICAgICAgICAgICBgYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlciR7bn0vY2hhcmFjdGVyJHtufS1zcHJpdGVzaGVldC5wbmdgLFxyXG4gICAgICAgICAgICAgICAgYGFzc2V0cy9pbWFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXIke259L2NoYXJhY3RlciR7bn0tYXRsYXMuanNvbmBcclxuICAgICAgICAgICAgKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5sb2FkaW5nQmFyID0gbmV3IExvYWRpbmdCYXIoeyBzY2VuZTogdGhpcyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLm9uKFwicHJvZ3Jlc3NcIiwgKHZhbHVlKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kcmF3KHZhbHVlKTtcclxuXHRcdFx0dGhpcy5sb2FkaW5nQmFyLnByb2dyZXNzVGV4dC5zZXRUZXh0KChNYXRoLmZsb29yKHZhbHVlKjEwMCkpICsgXCIlXCIpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLmxvYWQub24oXCJjb21wbGV0ZVwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZGluZ0Jhci5kZXN0cm95KCk7XHJcblx0XHR9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZSA9IHRoaXMuc291bmQuYWRkKFwibWVudVRoZW1lXCIpO1xyXG4gICAgICAgIHRoaXMubXVzaWNUaGVtZS5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ28gPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2V0R2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2V0R2FtZUhlaWdodCh0aGlzKSAvIDIuNSxcclxuICAgICAgICAgICAgXCJtYWluTG9nb1wiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgR3VpLnNpbXBsZVBhcmFncmFwaCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiB0aGlzLmxvZ28ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5sb2dvLnkgKyA5MCxcclxuICAgICAgICAgICAgdGV4dDogXCJXZWxjb21lIHRvIHRoZSBmaWdodCAhXCIsXHJcblx0XHR9KTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJNZW51XCIsXHJcbiAgICAgICAgICAgIHN0b3BTb3VuZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiTWVudVwiLFxyXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoaXMgc2NlbmUgZGF0YSB0byB0aGUgbWVudSBzY2VuZS5cclxuICAgICAgICAgICAgc2NlbmVEYXRhOiB0aGlzLmRhdGEuZ2V0QWxsKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGdldEdhbWVXaWR0aCwgQ09OVFJPTEtFWVMsIGdldEdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBCb21iIH0gZnJvbSBcIi4uL29iamVjdHMvQm9tYlwiO1xyXG5pbXBvcnQgeyBIdWQgfSBmcm9tIFwiLi4vb2JqZWN0cy9IdWRcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL29iamVjdHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gXCIuLi9vYmplY3RzL0hlYWx0aEJhclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9vYmplY3RzL0xldmVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9Vc2VyXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vQW5pbWF0aW9uc1wiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyMTogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXIyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIGh1ZDE6IEh1ZDtcclxuICAgIHByaXZhdGUgaHVkMjogSHVkO1xyXG4gICAgcHJpdmF0ZSB0aWxlbWFwOiBMZXZlbFtcInRpbGVtYXBcIl07XHJcbiAgICBwcml2YXRlIGJvbWJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGJvbWJDcmVhdGlvbkV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBuZXdTY2VuZVRpbWVkRXZlbnQ6IFBoYXNlci5UaW1lLlRpbWVyRXZlbnQ7XHJcbiAgICBwcml2YXRlIHdpbm5lcjogVXNlcjtcclxuXHJcbiAgICBwcml2YXRlIHNldENvbGxpZGVycygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMudGlsZW1hcC5tYWluTGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9tYnMsIHRoaXMucGxheWVyMSwgKGJvbWIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmh1cnQoKTtcclxuICAgICAgICAgICAgYm9tYi5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy5wbGF5ZXIyLCAoYm9tYikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIuaHVydCgpO1xyXG4gICAgICAgICAgICBib21iLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMik7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcblx0XHRcdFt0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMl0sXHJcbiAgICAgICAgICAgIHRoaXMudGlsZW1hcC5tYWluTGF5ZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMSxcclxuICAgICAgICAgICAgKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcyxcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLFxyXG4gICAgICAgICAgICAocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLmh1cnQoKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RpbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLnByb2plY3RpbGVzLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyLFxyXG4gICAgICAgICAgICAocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjIucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgIHRoaXMudGlsZW1hcC5tYWluTGF5ZXIsXHJcbiAgICAgICAgICAgIChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQobWVudVNjZW5lRGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBtZW51U2NlbmVEYXRhPy51c2Vycyk7XHJcblxyXG4gICAgICAgIEFuaW1hdGlvbnMuY3JlYXRlQ2hhcmFjdGVyc0FuaW1zKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXJzOiB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmxldmVsSW5zdGFuY2UuY3JlYXRlKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVtYXAgPSB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMF0ubGV2ZWxJbnN0YW5jZS50aWxlbWFwO1xyXG5cclxuICAgICAgICB0aGlzLmJvbWJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib21iQ3JlYXRpb25FdmVudCA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib21icy5hZGQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEJvbWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogUGhhc2VyLk1hdGguQmV0d2Vlbig1MCwgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gNTApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcImJvbWJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgICAgIHk6IDMwMCxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmNoYXJhY3Rlckluc3RhbmNlLnRleHR1cmVLZXksXHJcbiAgICAgICAgICAgIGNvbnRyb2xLZXlzOiBDT05UUk9MS0VZUy5QTEFZRVIuU0VUMixcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2lkZTogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IDkwMCxcclxuICAgICAgICAgICAgeTogMzAwLFxyXG4gICAgICAgICAgICB0ZXh0dXJlS2V5OiB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV0uY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleSxcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQxLFxyXG4gICAgICAgICAgICBoZWFsdGhCYXI6IG5ldyBIZWFsdGhCYXIoe1xyXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBzaWRlOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh1ZDEgPSBuZXcgSHVkKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMuZGF0YS52YWx1ZXMudXNlcnNbMF0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHVkMiA9IG5ldyBIdWQoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdXNlcjogdGhpcy5kYXRhLnZhbHVlcy51c2Vyc1sxXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRDb2xsaWRlcnMoKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBoYXZlIHVzZXI8LS0+cGxheWVyIGNvbmNvcmRhbmNlXHJcbiAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVsxXS5wbGF5ZXJJbnN0YW5jZSA9IHRoaXMucGxheWVyMjtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXJzXCIsIHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyMS51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllcjIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIFdpbm5lciBoYW5kbGluZy5cclxuICAgICAgICAvLyBFbnRlciB3aW5uZXIgaGFuZGxpbmcgbW9kZSBpZiBvbmUgb2YgdGhlIHBsYXllciBpcyBkZWFkLlxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgfHwgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgcGxheWVycyBpbnZpY2libGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIG5leHQgc2NlbmUgdG8gc3RhcnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2F5IHdlIGRvbid0IGhhdmUgdG8gcGF1c2UgcGh5c2ljcyBidXQgdGhlIHdpbm5lciBpcyBub3RcclxuICAgICAgICAgICAgLy8ga2lsbGVkIGJ5IHRoZSBib21icyB0aGF0IGFyZSBzdGlsbCBmYWxsaW5nLlxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEubWFrZUJ1bGxldFByb29mKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY2lkaW5nIHdoaWNoIG9uZSBpcyB0aGUgd2lubmVyICh0aGUgb25lIG5vdCBkZWFkKS5cclxuXHRcdFx0Ly8gV2lubmVycyBhcmUgdXNlcnMgbm90IHBsYXllcnMuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgIXRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLndpbm5lciA9IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVsxXTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuXHRcdFx0XHR0aGlzLndpbm5lciA9IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXTtcclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllcjIuaXNEZWFkKCkgJiYgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOdWxsaW5nIHRoZSB3aW5uZXIgaWYgdGhlcmUncyBubyB3aW5uZXIgYXQgYWxsXHJcbiAgICAgICAgICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyBzaG91bGRuJ3QgZXZlciBoYXBwZW4gYnV0IHdobyBrbm93cy5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGluIG5leHQgc2NlbmUgaWYgd2lubmVyIGlzIHRydXRoeSwgcHJpbnRpbmcgYWx0IHRleHRcclxuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCAobGlrZSBpZiBudWxsKS5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldChcIndpbm5lclwiLCB0aGlzLndpbm5lcik7XHJcblxyXG4gICAgICAgICAgICAvLyBUaHJlZSBzZWNvbmRzIGRlbGF5IGJlZm9yZSBsYXVuY2hpbmcgdGhlIG5leHQgc2NlbmVcclxuICAgICAgICAgICAgdGhpcy5uZXdTY2VuZVRpbWVkRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmQuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJHYW1lb3ZlclwiLCB0aGlzLmRhdGEuZ2V0QWxsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQsIENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4uL1N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIkdhbWVvdmVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZW92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIG1haW5NZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIGRpc3BsYXlSZXBvcnQoKTp2b2lkIHtcclxuXHRcdGxldCB1c2VybmFtZVggPSAoZ2V0R2FtZVdpZHRoKHRoaXMpLzIpIC0gMjAwO1xyXG5cdFx0bGV0IHVzZXJuYW1lWSA9IDI4MDtcclxuXHRcdGxldCBiYWRnZVggPSAxMDA7XHJcblx0XHRjb25zdCBiYWRnZVNwYWNpbmcgPSA0MDtcclxuXHRcdGNvbnN0IGJhZGdlTGltaXQgPSAgZ2V0R2FtZVdpZHRoKHRoaXMpIC0gODA7XHJcblx0XHRjb25zdCBpbnRlcmxpbmUgPSA1NjtcclxuXHJcblx0XHRmdW5jdGlvbiByZXNldEJhZGdlWCgpIHtcclxuXHRcdFx0YmFkZ2VYID0gMTAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKS5mb3JFYWNoKHVzZXIgPT4ge1xyXG5cdFx0XHRHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuXHRcdFx0XHRzY2VuZTogdGhpcyxcclxuXHRcdFx0XHR4OiB1c2VybmFtZVgsXHJcblx0XHRcdFx0eTogdXNlcm5hbWVZLFxyXG5cdFx0XHRcdHRleHQ6IHVzZXIudXNlcm5hbWVcclxuXHRcdFx0fSk7XHJcblx0XHJcblx0XHRcdHVzZXIuZ2FtZXMuZm9yRWFjaChnYW1lID0+IHtcclxuXHRcdFx0XHRpZiAoYmFkZ2VYIDwgYmFkZ2VMaW1pdCl7XHJcblx0XHRcdFx0XHR0aGlzLmFkZC5pbWFnZShcclxuXHRcdFx0XHRcdFx0dXNlcm5hbWVYICsgYmFkZ2VYLFxyXG5cdFx0XHRcdFx0XHR1c2VybmFtZVksXHJcblx0XHRcdFx0XHRcdChnYW1lLndpbiA9PT0gdHJ1ZSkgPyBcInN0YXJcIiA6IFwidG9tYnN0b25lXCJcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRiYWRnZVggKz0gYmFkZ2VTcGFjaW5nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR1c2VybmFtZVkgKz0gaW50ZXJsaW5lO1xyXG5cdFx0XHRyZXNldEJhZGdlWCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNldFJhdGlvcygpOnZvaWQge1xyXG5cdFx0dGhpcy5kYXRhLmdldChcInVzZXJzXCIpLmZvckVhY2godXNlciA9PiB7XHJcblx0XHRcdGxldCB3b25HYW1lcyA9IHVzZXIuZ2FtZXMuZmlsdGVyKGdhbWUgPT4gZ2FtZS53aW4gPT09IHRydWUpLmxlbmd0aDtcclxuXHRcdFx0bGV0IHRvdGFsR2FtZXMgPSB1c2VyLmdhbWVzLmxlbmd0aDtcclxuXHRcdFx0dXNlci5yYXRpbyA9IE1hdGguZmxvb3IoKHdvbkdhbWVzIC8gdG90YWxHYW1lcykgKiAxMDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvZ0dhbWUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5kYXRhLmdldChcIndpbm5lclwiKS5pZCA9PT0gdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmlkKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVswXS5nYW1lcy5wdXNoKHsgd2luOiB0cnVlIH0pO1xyXG5cdFx0XHR0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMV0uZ2FtZXMucHVzaCh7IHdpbjogZmFsc2UgfSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YS5nZXQoXCJ3aW5uZXJcIikuaWQgPT09IHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVsxXS5pZCkge1xyXG5cdFx0XHR0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbMF0uZ2FtZXMucHVzaCh7IHdpbjogZmFsc2UgfSk7XHJcblx0XHRcdHRoaXMuZGF0YS5nZXQoXCJ1c2Vyc1wiKVsxXS5nYW1lcy5wdXNoKHsgd2luOiB0cnVlIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICBpbml0KGdhbWVTY2VuZURhdGEpIHtcclxuXHRcdHRoaXMuZGF0YS5zZXQoXCJ1c2Vyc1wiLCBnYW1lU2NlbmVEYXRhLnVzZXJzKTtcclxuXHJcbiAgICAgICAgaWYgKGdhbWVTY2VuZURhdGEud2lubmVyKSB7XHJcblxyXG5cdFx0XHR0aGlzLmRhdGEuc2V0KFwid2lubmVyXCIsIGdhbWVTY2VuZURhdGEud2lubmVyKTtcclxuXHRcdFx0dGhpcy5tYWluTWVzc2FnZSA9IGAke3RoaXMuZGF0YS5nZXQoXCJ3aW5uZXJcIikudXNlcm5hbWV9IFdPTiBUSElTIEdBTUUgIWA7XHJcblx0XHRcdHRoaXMubG9nR2FtZSgpO1xyXG5cdFx0XHR0aGlzLnNldFJhdGlvcygpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbk1lc3NhZ2UgPSBcIklUJ1MgQSBEUkFXICFcIjtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBHdWkudGl0bGUoeyBzY2VuZTogdGhpcywgdGV4dDogXCJFTkQgT0YgR0FNRVwiIH0pO1xyXG5cclxuICAgICAgICBHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IGdldEdhbWVXaWR0aCh0aGlzKS8yLFxyXG4gICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubWFpbk1lc3NhZ2UsXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5kaXNwbGF5UmVwb3J0KCk7XHJcblxyXG4gICAgICAgIEd1aS5tYWluQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUExBWSBBR0FJTlwiLFxyXG4gICAgICAgICAgICBzdG9wU291bmRzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NlbmVQbHVnaW46IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgICAgIG5ld1NjZW5lS2V5OiBcIk1lbnVcIixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0LCBDT05UUk9MS0VZUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEd1aSB9IGZyb20gXCIuLi9vYmplY3RzL0d1aVwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiTWVudVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgc2NlbmUgaXMgd2hlcmUgdGhlIHR3byBwbGF5ZXJzIGNob29zZSB0aGUgdGVycmFpbi9tYXAgdGhleSB3aWxsIHBsYXkgb24sXHJcbiAqIGFuZCB0aGUgY2hhcmFjdGVycyB0aGV5IHdpbGwgcGxheSB3aXRoLlxyXG4gKiBJdCBtYWlubHkgdXNlcyBtZXRob2RzIGZyb20gdGhlIEd1aSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBsZXZlbFRodW1iOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlclRodW1iczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkltYWdlPjtcclxuXHJcbiAgICBwcml2YXRlIGRyYXdCYWNrZ3JvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICBnZXRHYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICBnZXRHYW1lSGVpZ2h0KHRoaXMpIC8gMixcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kRm9yR1VJU2NlbmVzXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemVkIHRoZSBjaG9pY2VzIG9uIHRoZSAxc3QgZWxlbWVudHMgb2YgdGhlIHRlcnJhaW4gYW5kIHRoZVxyXG4gICAgLy8gY2hhcmFjdGVycy4gVGhpcyB3YXkgaWYgdGhlIHBsYXllcnMgZG9lc24ndCBjbGljayBvbiBhbnl0aGluZyB0aGV5IHN0aWxsXHJcbiAgICAvLyBoYXZlIHRlcnJhaW4gYW5kIGNoYXJhY3RlcnMgaW5zdGFuY2VzIGF0dGFjaGVkLlxyXG4gICAgcHJpdmF0ZSBpbml0VXNlcnNDaG9pY2VzKHBVc2VycywgcExldmVscywgcENoYXJhY3RlcnMpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHVzZXIgb2YgcFVzZXJzKSB7XHJcbiAgICAgICAgICAgIHVzZXIubGV2ZWxJbnN0YW5jZSA9IHBMZXZlbHNbMF07XHJcbiAgICAgICAgICAgIHVzZXIuY2hhcmFjdGVySW5zdGFuY2UgPSBwQ2hhcmFjdGVyc1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlVGVycmFpblNlY3Rpb24ocGFyYW1zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB2b2lkIHtcclxuXHRcdEd1aS5zaW1wbGVQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHk6IHBhcmFtcy55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRFUlJBSU5cIixcclxuXHRcdH0pO1xyXG5cdFx0XHJcbiAgICAgICAgLy8gSW5pdCB0aGUgdGVycmFpbiB0aHVtYm5haWwgb24gdGhlIDFzdCBsZXZlbC5cclxuICAgICAgICB0aGlzLmxldmVsVGh1bWIgPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHBhcmFtcy55ICsgMTM4LFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpWzBdLnRodW1ibmFpbEtleVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIEd1aS5zbGlkZUJ0bih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiBwYXJhbXMueCxcclxuICAgICAgICAgICAgeTogcGFyYW1zLnkgKyAxNDMgKyAxMzYsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTkVYVFwiLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMubGV2ZWxUaHVtYixcclxuICAgICAgICAgICAgdGV4dHVyZUtleXM6IHRoaXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgLmdldChcImxldmVsc1wiKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobGV2ZWwpID0+IGxldmVsLnRodW1ibmFpbEtleSksXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxldmVsIG9mIHRoaXMuZGF0YS5nZXQoXCJsZXZlbHNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGV2ZWwudGh1bWJuYWlsS2V5ID09PSB0aGlzLmxldmVsVGh1bWIudGV4dHVyZS5rZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzBdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpWzFdLmxldmVsSW5zdGFuY2UgPSBsZXZlbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlQ2hhcmFjdGVyU2VjdGlvbihwYXJhbXM6IHtcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgY29udHJvbEtleXM6IHN0cmluZztcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIEd1aS5zaW1wbGVQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogcGFyYW1zLngsXHJcbiAgICAgICAgICAgIHk6IHBhcmFtcy55LFxyXG4gICAgICAgICAgICB0ZXh0OiBwYXJhbXMudGl0bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSW5pdCBjaGFyYWN0ZXIgdGh1bWJuYWlsIHRvIHRoZSAxc3Qgb25lXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJUaHVtYnMucHVzaChcclxuICAgICAgICAgICAgdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMueCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy55ICsgNzAsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKVswXS50aHVtYm5haWxLZXlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR3VpLnNsaWRlQnRuKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSArIDcwICsgNjAsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiTkVYVFwiLFxyXG4gICAgICAgICAgICBpbWc6IHRoaXMuY2hhcmFjdGVyVGh1bWJzW3BhcmFtcy5pZF0sXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXlzOiB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5tYXAoKGMpID0+IGMudGh1bWJuYWlsS2V5KSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2ggb2YgdGhpcy5kYXRhLmdldChcImNoYXJhY3RlcnNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoLnRodW1ibmFpbEtleSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJUaHVtYnNbcGFyYW1zLmlkXS50ZXh0dXJlLmtleVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIilbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS5jaGFyYWN0ZXJJbnN0YW5jZSA9IGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBHdWkuc2ltcGxlUGFyYWdyYXBoKHtcclxuICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgIHg6IHBhcmFtcy54LFxyXG4gICAgICAgICAgICB5OiBwYXJhbXMueSArIDcwICsgNjAgKyA3MixcclxuICAgICAgICAgICAgdGV4dDogcGFyYW1zLmNvbnRyb2xLZXlzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGJvb3RTY2VuZURhdGEpIHtcclxuICAgICAgICAvLyBVc2luZyBFUzIwMjAgb3B0aW9ubmFsIGNoYWluaW5nIChpLmUgdGhlID8pIHRvIGNoZWNrIGlmIHRoZSBkYXRhXHJcbiAgICAgICAgLy8gb2JqZWN0IGNvbWluZyBmcm9tIHRoZSBib290IHNjZW5lIGhhcyB1c2VycywgY2hhcmFjdGVycyBhbmRcclxuICAgICAgICAvLyBsZXZlbHMgZmllbGRzLlxyXG4gICAgICAgIC8vIFNldHRpbmcgdGhlIGRhdGEgZnJvbSB0aGUgYm9vdCBzY2VuZSB0byB0aGlzIHNjZW5lJ3MgZGF0YS5cclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcnNcIiwgYm9vdFNjZW5lRGF0YT8udXNlcnMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJjaGFyYWN0ZXJzXCIsIGJvb3RTY2VuZURhdGE/LmNoYXJhY3RlcnMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJsZXZlbHNcIiwgYm9vdFNjZW5lRGF0YT8ubGV2ZWxzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0VXNlcnNDaG9pY2VzKFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcnNcIiksXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJsZXZlbHNcIiksXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpXHJcblx0XHQpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmNoYXJhY3RlclRodW1icyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuXHRcdEd1aS50aXRsZSh7IHNjZW5lOiB0aGlzLCB0ZXh0OiBcIk1FTlVcIiB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2VUZXJyYWluU2VjdGlvbih7IFxyXG5cdFx0XHR4OiAyMDAsIFxyXG5cdFx0XHR5OiAxOTIgXHJcblx0XHR9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlQ2hhcmFjdGVyU2VjdGlvbih7XHJcbiAgICAgICAgICAgIHg6IDcwMCxcclxuICAgICAgICAgICAgeTogMTkyLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJQTEFZRVIgMVwiLFxyXG4gICAgICAgICAgICBjb250cm9sS2V5czogQ09OVFJPTEtFWVMuUExBWUVSLlNFVDEuZGlzcGxheVN0cmluZyxcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZUNoYXJhY3RlclNlY3Rpb24oe1xyXG4gICAgICAgICAgICB4OiA5MDAsXHJcbiAgICAgICAgICAgIHk6IDE5MixcclxuICAgICAgICAgICAgdGl0bGU6IFwiUExBWUVSIDJcIixcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xLRVlTLlBMQVlFUi5TRVQyLmRpc3BsYXlTdHJpbmcsXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIE1PRElGSUVEIHVzZXJzIGRhdGEgZnJvbSB0aGUgYm9vdCBzY2VuZSB0byB0aGlzIGFjdHVhbCBzY2VuZS5cclxuICAgICAgICAvLyBNb2RpZmllZCwgYmVjYXVzZSBsZXZlbCBhbmQgY2hhcmFjdGVycyBpbnN0YW5jZXMgaGFzIGJlZW4gbGlua2VkIHRvXHJcbiAgICAgICAgLy8gZWFjaCB1c2VycyB0aGFua3MgdG8gdGhlIHNsaWRlIGJ1dHRvbnMgY2FsbGJhY2tzIGFuZCB0aGUgdGh1bWJuYWlscy5cclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcnNcIiwgdGhpcy5kYXRhLmdldChcInVzZXJzXCIpKTtcclxuXHJcbiAgICAgICAgR3VpLm1haW5CdG4oe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgdGV4dDogXCJTVEFSVFwiLFxyXG4gICAgICAgICAgICBzdG9wU291bmRzOiB0cnVlLFxyXG4gICAgICAgICAgICBzY2VuZVBsdWdpbjogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgbmV3U2NlbmVLZXk6IFwiR2FtZVwiLFxyXG4gICAgICAgICAgICBzY2VuZURhdGE6IHRoaXMuZGF0YS5nZXRBbGwoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSBcIi4vQm9vdFNjZW5lXCI7XHJcbmltcG9ydCB7IE1lbnVTY2VuZSB9IGZyb20gXCIuL01lbnVTY2VuZVwiO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tIFwiLi9HYW1lU2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZW92ZXJTY2VuZSB9IGZyb20gXCIuL0dhbWVvdmVyU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHRCb290U2NlbmUsIFxyXG5cdE1lbnVTY2VuZSwgXHJcblx0R2FtZVNjZW5lLCBcclxuXHRHYW1lb3ZlclNjZW5lXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=