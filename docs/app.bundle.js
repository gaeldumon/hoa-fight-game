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
exports.Animations = void 0;
var Animations = /** @class */ (function () {
    function Animations() {
    }
    Animations.createCharacterAnim = function (scene, user) {
        var tk = user.characterInstance.textureKey;
        scene.anims.create({
            key: tk + "WALK",
            frames: scene.anims.generateFrameNames(tk, {
                prefix: "walk-side-armed",
                start: 1,
                end: 4,
                zeroPad: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });
        scene.anims.create({
            key: tk + "WALK_SHOOT",
            frames: scene.anims.generateFrameNames(tk, {
                prefix: "walk-side-shoot",
                start: 1,
                end: 4,
                zeroPad: 2,
            }),
            repeat: -1,
        });
        scene.anims.create({
            key: tk + "IDLE",
            frames: scene.anims.generateFrameNames(tk, {
                prefix: "idle-front-armed",
                start: 1,
                end: 4,
                zeroPad: 2,
            }),
            frameRate: 10,
            repeat: -1,
        });
        scene.anims.create({
            key: tk + "IDLE_SHOOT",
            frames: scene.anims.generateFrameNames(tk, {
                prefix: "idle-front-shoot",
                start: 1,
                end: 1,
                zeroPad: 2,
            }),
            repeat: -1,
        });
        scene.anims.create({
            key: tk + "HIT",
            frames: scene.anims.generateFrameNames(tk, {
                prefix: "hit",
                start: 1,
                end: 1,
                zeroPad: 2,
            }),
            repeat: 1,
        });
        scene.anims.create({
            key: tk + "DEAD",
            frames: scene.anims.generateFrameNames(tk, {
                prefix: "dead",
                start: 1,
                end: 1,
                zeroPad: 2,
            }),
            repeat: 1,
        });
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_FONT_FAMILIES = exports.CONTROL_P2 = exports.CONTROL_P1 = exports.COLORS = exports.gameHeight = exports.gameWidth = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
function gameWidth(scene) {
    return scene.game.scale.width;
}
exports.gameWidth = gameWidth;
function gameHeight(scene) {
    return scene.game.scale.height;
}
exports.gameHeight = gameHeight;
exports.COLORS = {
    customBlue: { string: "#4346f9", hex: 0x4346f9 },
    customGreen: { string: "#76ea64", hex: 0x76ea64 },
    vibrantGreen: { string: "#25f945", hex: 0x25f945 },
    customRed: { string: "#ea2d23", hex: 0xea2d23 },
    white: { string: "#ffffff", hex: 0xffffff },
    black: { string: "#000000", hex: 0x000000 }
};
exports.CONTROL_P1 = {
    right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
    left: Phaser.Input.Keyboard.KeyCodes.LEFT,
    jump: Phaser.Input.Keyboard.KeyCodes.UP,
    shoot: Phaser.Input.Keyboard.KeyCodes.SHIFT
};
exports.CONTROL_P2 = {
    right: Phaser.Input.Keyboard.KeyCodes.D,
    left: Phaser.Input.Keyboard.KeyCodes.Q,
    jump: Phaser.Input.Keyboard.KeyCodes.Z,
    shoot: Phaser.Input.Keyboard.KeyCodes.S
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: "Hoa Fight",
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
        default: "arcade",
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        },
    },
    dom: {
        createContainer: true
    },
    parent: "game",
    scene: scenes_1.default,
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/objects/bomb.ts":
/*!*****************************!*\
  !*** ./src/objects/bomb.ts ***!
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
exports.Bomb = void 0;
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
        return this.y > helpers_1.gameHeight(this.scene) || this.y < 0;
    };
    Bomb.prototype.handleReposition = function () {
        if (this.x > helpers_1.gameWidth(this.scene)) {
            this.x = 0;
        }
        else if (this.x < 0) {
            this.x = helpers_1.gameWidth(this.scene);
        }
    };
    Bomb.prototype.update = function () {
        this.handleReposition();
        if (this.isOut())
            this.destroy();
    };
    return Bomb;
}(Phaser.Physics.Arcade.Sprite));
exports.Bomb = Bomb;


/***/ }),

/***/ "./src/objects/character.ts":
/*!**********************************!*\
  !*** ./src/objects/character.ts ***!
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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "thumbnailKey", {
        get: function () {
            return this._thumbnailKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "soundKey", {
        get: function () {
            return this._soundKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "details", {
        get: function () {
            return this._details;
        },
        enumerable: false,
        configurable: true
    });
    return Character;
}());
exports.Character = Character;


/***/ }),

/***/ "./src/objects/healthBar.ts":
/*!**********************************!*\
  !*** ./src/objects/healthBar.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthBar = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var HealthBar = /** @class */ (function () {
    function HealthBar(params) {
        this.bar = params.scene.add.graphics();
        this.width = 200;
        this.height = 16;
        this.healthValue = 200;
        if (params.side === "left") {
            this.x = 74;
            this.y = 54;
        }
        else if (params.side === "right") {
            this.x = (helpers_1.gameWidth(params.scene)) - this.width - 78;
            this.y = 54;
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

/***/ "./src/objects/hud.ts":
/*!****************************!*\
  !*** ./src/objects/hud.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Hud = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Hud = /** @class */ (function () {
    function Hud(scene, user) {
        if (user.screenSide === "left") {
            scene.add.image(0, 0, user.characterInstance.thumbnailKey).setOrigin(0, 0).setScale(0.40);
            scene.make.text({
                x: 74,
                y: 15,
                text: user.characterInstance.details.nickname + " | " + user.username + " | Ratio " + user.ratio + "%",
                style: {
                    fontSize: "18px",
                    fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                    color: helpers_1.COLORS.white.string,
                },
            });
        }
        else if (user.screenSide === "right") {
            scene.add.image(helpers_1.gameWidth(scene), 0, user.characterInstance.thumbnailKey).setOrigin(1, 0).setScale(0.40);
            scene.make.text({
                x: helpers_1.gameWidth(scene) - 78,
                y: 15,
                text: user.characterInstance.details.nickname + " | " + user.username + " | Ratio " + user.ratio + "%",
                style: {
                    fontSize: "18px",
                    fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                    color: helpers_1.COLORS.white.string,
                },
            }).setOrigin(1, 0);
        }
    }
    return Hud;
}());
exports.Hud = Hud;


/***/ }),

/***/ "./src/objects/level.ts":
/*!******************************!*\
  !*** ./src/objects/level.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var tilemap_1 = __webpack_require__(/*! ./tilemap */ "./src/objects/tilemap.ts");
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "thumbnailKey", {
        get: function () {
            return this._thumbnailKey;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.create = function (scene) {
        this.scene = scene;
        this.scene.add.image(helpers_1.gameWidth(this.scene) / 2, helpers_1.gameHeight(this.scene) / 2, this.backgroundKey);
        this._tilemap = new tilemap_1.Tilemap({
            scene: this.scene,
            id: this.id,
        });
        this.scene.sound.add(this.musicKey).play();
    };
    return Level;
}());
exports.Level = Level;


/***/ }),

/***/ "./src/objects/loading.ts":
/*!********************************!*\
  !*** ./src/objects/loading.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingBar = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var LoadingBar = /** @class */ (function () {
    function LoadingBar(params) {
        this.scene = params.scene;
        this.bar = this.scene.add.graphics();
        this.barWidth = 400;
        this.barHeight = 30;
        this.barX = (helpers_1.gameWidth(this.scene) / 2) - (this.barWidth / 2);
        this.barY = (helpers_1.gameHeight(this.scene) / 2) - (this.barHeight / 2);
        this.barColor = helpers_1.COLORS.customBlue.hex;
        this.barAlpha = 0.8;
        this.box = this.scene.add.graphics();
        this.boxWidth = this.barWidth + 10;
        this.boxHeight = this.barHeight + 10;
        this.boxX = (helpers_1.gameWidth(this.scene) / 2) - (this.boxWidth / 2);
        this.boxY = (helpers_1.gameHeight(this.scene) / 2) - (this.boxHeight / 2);
        this.boxColor = helpers_1.COLORS.white.hex;
        this.boxAlpha = 0.3;
        this.box.fillStyle(this.boxColor, this.boxAlpha);
        this.box.fillRect(this.boxX, this.boxY, this.boxWidth, this.boxHeight);
        this.text = this.scene.make.text({
            x: helpers_1.gameWidth(this.scene) / 2,
            y: (helpers_1.gameHeight(this.scene) / 2) + 40,
            text: "Loading...",
            style: {
                font: '20px monospace'
            }
        });
        this.text.setOrigin(0.5, 0.5);
        this._progressText = this.scene.make.text({
            x: (helpers_1.gameWidth(this.scene) / 2),
            y: (helpers_1.gameHeight(this.scene) / 2),
            text: "0%",
            style: {
                font: '18px monospace'
            }
        });
        this._progressText.setOrigin(0.5, 0.5);
    }
    Object.defineProperty(LoadingBar.prototype, "progressText", {
        get: function () {
            return this._progressText;
        },
        enumerable: false,
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

/***/ "./src/objects/player.ts":
/*!*******************************!*\
  !*** ./src/objects/player.ts ***!
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
exports.Player = void 0;
var projectile_1 = __webpack_require__(/*! ./projectile */ "./src/objects/projectile.ts");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.STATES = {
            NORMAL: "NORMAL",
            HURT: "HURT",
            DEAD: "DEAD",
            JUMPING: "JUMPING",
        };
        _this.scene.add.existing(_this);
        _this.initPhysics();
        _this.applyPhysics();
        _this.initSounds();
        _this.initVitals();
        _this.initHealthBar(params.healthBar);
        _this.initShooting();
        _this.initControls(params.controlKeys);
        _this._collectedStuff = 0;
        // Restrain the boundingBox
        _this.setSize(20, 60);
        _this.setState(_this.STATES.NORMAL);
        return _this;
    }
    Object.defineProperty(Player.prototype, "projectiles", {
        get: function () {
            return this._projectiles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "collectedStuff", {
        get: function () {
            return this._collectedStuff;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.collectStuff = function () {
        this._collectedStuff++;
    };
    Player.prototype.isDead = function () {
        return this.health <= 0;
    };
    Player.prototype.hurt = function () {
        if (!this.bulletProof && this.health > 0) {
            this.setState(this.STATES.HURT);
            this.health -= 20;
            this.healthBar.decrease(20);
            this.hitVoice.play();
        }
    };
    Player.prototype.makeBulletProof = function () {
        if (this.bulletProof === false)
            this.bulletProof = true;
    };
    Player.prototype.initSounds = function () {
        this.jumpSound = this.scene.sound.add("jumpSound");
        this.shootSound = this.scene.sound.add("shootSound");
        this.hitVoice = this.scene.sound.add("hitVoice");
    };
    Player.prototype.initVitals = function () {
        this.health = 100;
        this.bulletProof = false;
    };
    Player.prototype.initPhysics = function () {
        this.gravityY = 1000;
        this.jumpVelocity = -600;
        this.vx = 200;
        this.bounce = 0.2;
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
            this._projectiles.add(new projectile_1.Projectile({
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
            this.handleJumping();
            this.handleSpriteFlipping();
            if (this.rightKey.isDown || this.leftKey.isDown) {
                this.handleWalking();
            }
            else {
                this.handleIdling();
            }
        }
        if (this.state === this.STATES.HURT) {
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
        if (this.state === this.STATES.DEAD) {
            // We don't reset state to NORMAL cause it's end of the game
            this.anims.play(this.texture.key + "DEAD", true);
            this.setVelocityX(0);
        }
    };
    return Player;
}(Phaser.Physics.Arcade.Sprite));
exports.Player = Player;


/***/ }),

/***/ "./src/objects/projectile.ts":
/*!***********************************!*\
  !*** ./src/objects/projectile.ts ***!
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
exports.Projectile = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.textureKey) || this;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        _this.vx = 700;
        _this.direction = params.direction;
        _this.setVelocityX(_this.direction * _this.vx);
        return _this;
    }
    Projectile.prototype.isOut = function () {
        return (this.x > helpers_1.gameWidth(this.scene) ||
            this.y > helpers_1.gameHeight(this.scene) ||
            this.x < 0 ||
            this.y < 0);
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

/***/ "./src/objects/tilemap.ts":
/*!********************************!*\
  !*** ./src/objects/tilemap.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tilemap = void 0;
var Tilemap = /** @class */ (function () {
    function Tilemap(params) {
        this.map = params.scene.make.tilemap({
            key: "level" + params.id,
        });
        this.tileset = this.map.addTilesetImage("level" + params.id + "-tilesheet", "level" + params.id + "Tilesheet");
        this._mainLayer = this.map.createLayer("mainLayer", this.tileset, 0, 0);
        this._mainLayer.setCollisionByProperty({
            collides: true,
        });
        this.subLayer = this.map.createLayer("subLayer", this.tileset, 0, 0);
    }
    Object.defineProperty(Tilemap.prototype, "mainLayer", {
        /**
         * Getter for the layer that collides: 'collides' set to true in Tiled.
         */
        get: function () {
            return this._mainLayer;
        },
        enumerable: false,
        configurable: true
    });
    return Tilemap;
}());
exports.Tilemap = Tilemap;


/***/ }),

/***/ "./src/objects/user.ts":
/*!*****************************!*\
  !*** ./src/objects/user.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(params) {
        this._id = params.id;
        this._username = params.username;
        this._ratio = params.ratio;
        this._screenSide = params.screenSide;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        set: function (v) {
            this._ratio = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "screenSide", {
        get: function () {
            return this._screenSide;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "characterInstance", {
        get: function () {
            return this._characterInstance;
        },
        set: function (v) {
            this._characterInstance = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "playerInstance", {
        get: function () {
            return this._playerInstance;
        },
        set: function (v) {
            this._playerInstance = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "levelInstance", {
        get: function () {
            return this._levelInstance;
        },
        set: function (v) {
            this._levelInstance = v;
        },
        enumerable: false,
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
exports.BootScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var level_1 = __webpack_require__(/*! ../objects/level */ "./src/objects/level.ts");
var user_1 = __webpack_require__(/*! ../objects/user */ "./src/objects/user.ts");
var character_1 = __webpack_require__(/*! ../objects/character */ "./src/objects/character.ts");
var loading_1 = __webpack_require__(/*! ../objects/loading */ "./src/objects/loading.ts");
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
        this.user1 = new user_1.User({
            id: 1,
            username: "Player 1",
            ratio: storage_1.getUserRatio("user1"),
            screenSide: "left"
        });
        this.user2 = new user_1.User({
            id: 2,
            username: "Player 2",
            ratio: storage_1.getUserRatio("user2"),
            screenSide: "right"
        });
        this.levels = [
            new level_1.Level({ id: 1, name: "Cimetiere" }),
            new level_1.Level({ id: 2, name: "Prairie" }),
        ];
        this.characters = [
            new character_1.Character({ id: 1, details: { nickname: "Stew" }, stats: {} }),
            new character_1.Character({ id: 2, details: { nickname: "Caroline" }, stats: {} }),
            new character_1.Character({ id: 3, details: { nickname: "Kristof" }, stats: {} }),
            new character_1.Character({ id: 4, details: { nickname: "Claudia" }, stats: {} }),
            new character_1.Character({ id: 5, details: { nickname: "Steven" }, stats: {} }),
            new character_1.Character({ id: 6, details: { nickname: "Zoya" }, stats: {} }),
        ];
        // Using the scene Data Manager to store data on a scene level.
        this.data.set("user1", this.user1);
        this.data.set("user2", this.user2);
        this.data.set("characters", this.characters);
        this.data.set("levels", this.levels);
    };
    BootScene.prototype.preload = function () {
        var _this = this;
        this.load.pack("preload", "assets/pack.json", "preload");
        for (var n = 1; n <= this.characters.length; n++) {
            this.load.atlas("character" + n, "assets/images/characters/character" + n + "/character" + n + "-spritesheet.png", "assets/images/characters/character" + n + "/character" + n + "-atlas.json");
        }
        this.load.bitmapFont('Grobold', 'assets/fonts/grobold/grobold.png', 'assets/fonts/grobold/grobold.fnt');
        this.loadingBar = new loading_1.LoadingBar({ scene: this });
        this.load.on("progress", function (value) {
            _this.loadingBar.draw(value);
            _this.loadingBar.progressText.setText((Math.floor(value * 100)) + "%");
        });
        this.load.on("complete", function () {
            _this.loadingBar.destroy();
        });
    };
    BootScene.prototype.create = function () {
        var _this = this;
        this.sound.add("menuTheme").play();
        this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) / 2, "backgroundMenu");
        this.add.image(helpers_1.gameWidth(this) / 2, (helpers_1.gameHeight(this) / 2) - 50, "mainLogo");
        this.add.image(helpers_1.gameWidth(this) / 2, 52, "borderTop");
        this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) - 52, "borderBottom");
        var nextSceneButton = this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) - 214, "textButtonWood")
            .setInteractive({ cursor: "pointer" })
            .on("pointerover", function () {
            nextSceneButton.setTexture("textButtonWoodSelected");
        })
            .on("pointerout", function () {
            nextSceneButton.setTexture("textButtonWood");
        })
            .on("pointerdown", function () {
            _this.sound.add("clickSound").play();
            _this.cameras.main.fadeOut();
            _this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function (cam, effect) {
                _this.scene.start("Menu", _this.data.getAll());
            });
        });
        // The text on main button
        this.make.text({
            x: helpers_1.gameWidth(this) / 2,
            y: helpers_1.gameHeight(this) - 214,
            text: "START",
            style: {
                fontSize: "32px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
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
exports.GameScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var bomb_1 = __webpack_require__(/*! ../objects/bomb */ "./src/objects/bomb.ts");
var hud_1 = __webpack_require__(/*! ../objects/hud */ "./src/objects/hud.ts");
var player_1 = __webpack_require__(/*! ../objects/player */ "./src/objects/player.ts");
var healthBar_1 = __webpack_require__(/*! ../objects/healthBar */ "./src/objects/healthBar.ts");
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
        this.physics.add.collider(this.collectables, this.tilemap.mainLayer);
        this.physics.add.overlap([this.player1, this.player2], this.collectables, function (player, star) {
            player.collectStuff();
            star.destroy();
            _this.collectSound.play();
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
        this.user1 = menuSceneData.user1;
        this.user2 = menuSceneData.user2;
        Animations_1.Animations.createCharacterAnim(this, this.user1);
        Animations_1.Animations.createCharacterAnim(this, this.user2);
        this.currentGame = {
            winner: 'none',
            time: Date.now(),
            user1Collect: 0,
            user2Collect: 0,
        };
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.user1.levelInstance.create(this);
        this.tilemap = this.user1.levelInstance.tilemap;
        this.collectSound = this.sound.add("collectSound");
        this.collectables = this.physics.add.group({
            key: 'diamondPurple',
            repeat: 11,
            bounceX: 0.4,
            bounceY: 0.4,
            allowGravity: true,
            gravityY: 300,
            setXY: {
                x: Math.floor(Math.random() * (150 - 15 + 1)) + 15,
                y: 0,
                stepX: 70
            }
        });
        this.bombs = this.add.group({ runChildUpdate: true });
        this.bombCreationEvent = this.time.addEvent({
            delay: 5000,
            loop: true,
            callback: function () {
                _this.bombs.add(new bomb_1.Bomb({
                    scene: _this,
                    x: Phaser.Math.Between(50, helpers_1.gameWidth(_this) - 50),
                    y: 0,
                    textureKey: "bomb",
                }));
            },
            callbackScope: this,
        });
        this.player1 = new player_1.Player({
            scene: this,
            x: 300,
            y: 300,
            textureKey: this.user1.characterInstance.textureKey,
            controlKeys: helpers_1.CONTROL_P1,
            healthBar: new healthBar_1.HealthBar({
                scene: this,
                side: "left",
            }),
        });
        this.player2 = new player_1.Player({
            scene: this,
            x: 900,
            y: 300,
            textureKey: this.user2.characterInstance.textureKey,
            controlKeys: helpers_1.CONTROL_P2,
            healthBar: new healthBar_1.HealthBar({
                scene: this,
                side: "right",
            }),
        });
        this.hud1 = new hud_1.Hud(this, this.user1);
        this.hud2 = new hud_1.Hud(this, this.user2);
        this.setColliders();
        // This is where we have user<-->player concordance
        this.user1.playerInstance = this.player1;
        this.user2.playerInstance = this.player2;
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
                this.winner = this.user2;
                this.currentGame.winner = "user2";
            }
            else if (!this.player1.isDead() && this.player2.isDead()) {
                this.winner = this.user1;
                this.currentGame.winner = "user1";
            }
            else if (this.player2.isDead() && this.player2.isDead()) {
                // Nulling the winner if there's no winner at all
                // Typically this shouldn't ever happen but who knows.
                // Check in next scene if winner is truthy, printing alt text
                // if not (like if null).
                this.winner = null;
                this.currentGame.winner = "none";
            }
            this.currentGame.user1Collect = this.player1.collectedStuff;
            this.currentGame.user2Collect = this.player2.collectedStuff;
            this.data.set("winner", this.winner);
            this.data.set("user1", this.user1);
            this.data.set("user2", this.user2);
            this.data.set('currentGame', this.currentGame);
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
exports.GameoverScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
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
    GameoverScene.prototype.init = function (gameSceneData) {
        this.user1 = gameSceneData.user1;
        this.user2 = gameSceneData.user2;
        this.winner = gameSceneData.winner;
        // ******************************************************
        // ****** IMPORTANT - SETTING UP STORE DATA *************
        // ******************************************************
        // T-1 games
        var games = storage_1.getLocalStorage().games;
        // Pushing the new game (not yet saved)
        games.push(gameSceneData.currentGame);
        // Saving the new game in the local storage
        storage_1.setLocalStorage(games);
        // Saving the games in the scene (T-1 ones and new one)
        this.games = games;
        // ******************************************************
        this.characterPickerUser1 = {
            window: { x: 290, y: helpers_1.gameHeight(this) / 2 - 90 },
            title: { x: 290, y: helpers_1.gameHeight(this) / 2 - 184 },
            thumbnail: { x: 290, y: helpers_1.gameHeight(this) / 2 - 36 },
            button: { x: 290, y: helpers_1.gameHeight(this) / 2 + 86 }
        };
        this.characterPickerUser2 = {
            window: { x: helpers_1.gameWidth(this) - 290, y: helpers_1.gameHeight(this) / 2 - 90 },
            title: { x: helpers_1.gameWidth(this) - 290, y: helpers_1.gameHeight(this) / 2 - 184 },
            thumbnail: { x: helpers_1.gameWidth(this) - 290, y: helpers_1.gameHeight(this) / 2 - 36 },
            button: { x: helpers_1.gameWidth(this) - 290, y: helpers_1.gameHeight(this) / 2 + 86 }
        };
        this.titleStyle = {
            fontSize: "22px",
            fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
            align: "center",
            color: helpers_1.COLORS.white.string,
        };
    };
    GameoverScene.prototype.create = function () {
        var _this = this;
        this.cameras.main.fadeIn();
        this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) / 2, "backgroundMenu");
        this.add.image(helpers_1.gameWidth(this) / 2, 52, "borderTop");
        this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) - 52, "borderBottom");
        // ******************************************************
        // ***************** FOR PLAYER/USER 1 ******************
        // ******************************************************
        this.add.image(this.characterPickerUser1.window.x, this.characterPickerUser1.window.y, "windowBlank").setScale(0.70, 0.70);
        // Character of player 1 thumbnail
        var charThumbPlayer1 = this.add.image(this.characterPickerUser1.thumbnail.x, this.characterPickerUser1.thumbnail.y, this.user1.characterInstance.thumbnailKey).setScale(0.80, 0.80);
        this.make.text({
            x: this.characterPickerUser1.title.x,
            y: this.characterPickerUser1.title.y,
            text: "PLAYER 1",
            style: this.titleStyle,
        }).setOrigin(0.5, 0.5);
        this.add.image(this.characterPickerUser1.button.x, this.characterPickerUser1.button.y, "tabWood");
        this.make.text({
            x: this.characterPickerUser1.button.x,
            y: this.characterPickerUser1.button.y,
            text: "Ratio " + storage_1.getUserRatio('user1') + "%",
            style: {
                fontSize: "22px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
        // ******************************************************
        // ***************** FOR PLAYER/USER 2 ******************
        // ******************************************************
        this.add.image(this.characterPickerUser2.window.x, this.characterPickerUser2.window.y, "windowBlank").setScale(0.70, 0.70);
        // Character of player 2 thumbnail
        var charThumbPlayer2 = this.add.image(this.characterPickerUser2.thumbnail.x, this.characterPickerUser2.thumbnail.y, this.user2.characterInstance.thumbnailKey).setScale(0.80, 0.80);
        this.make.text({
            x: this.characterPickerUser2.title.x,
            y: this.characterPickerUser2.title.y,
            text: "PLAYER 2",
            style: this.titleStyle,
        }).setOrigin(0.5, 0.5);
        this.add.image(this.characterPickerUser2.button.x, this.characterPickerUser2.button.y, "tabWood");
        this.make.text({
            x: this.characterPickerUser2.button.x,
            y: this.characterPickerUser2.button.y,
            text: "Ratio " + storage_1.getUserRatio('user2') + "%",
            style: {
                fontSize: "22px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
        // ******************************************************
        // ***************** FOR WINNER *************************
        // ******************************************************
        this.add.image(this.winner.id === this.user1.id ? this.characterPickerUser1.window.x : this.characterPickerUser2.window.x, helpers_1.gameHeight(this) / 2 - 142, "goldMedal").setScale(0.27, 0.27);
        // *******************************************************
        // ************** REGAME BUTTON **************************
        // *******************************************************
        var nextSceneButton = this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) - 120, "textButtonWood")
            .setScale(0.8, 0.8)
            .setInteractive({ cursor: "pointer" })
            .on("pointerover", function () {
            nextSceneButton.setTexture("textButtonWoodSelected");
        })
            .on("pointerout", function () {
            nextSceneButton.setTexture("textButtonWood");
        })
            .on("pointerdown", function () {
            _this.sound.add("clickSound").play();
            _this.cameras.main.fadeOut();
            _this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function (cam, effect) {
                _this.scene.start("Menu");
            });
        });
        // The text on menu scene button
        this.make.text({
            x: helpers_1.gameWidth(this) / 2,
            y: helpers_1.gameHeight(this) - 120,
            text: "MENU",
            style: {
                fontSize: "28px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
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
exports.MenuScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
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
    MenuScene.prototype.init = function (bootSceneData) {
        this.mapPicker = {
            window: { x: 180, y: helpers_1.gameHeight(this) / 2 - 90 },
            title: { x: 180, y: helpers_1.gameHeight(this) / 2 - 184 },
            thumbnail: { x: 180, y: helpers_1.gameHeight(this) / 2 - 36 },
            button: { x: 180, y: helpers_1.gameHeight(this) / 2 + 95 }
        };
        this.characterPickerUser1 = {
            window: { x: helpers_1.gameWidth(this) / 2, y: helpers_1.gameHeight(this) / 2 - 90 },
            title: { x: helpers_1.gameWidth(this) / 2, y: helpers_1.gameHeight(this) / 2 - 184 },
            thumbnail: { x: helpers_1.gameWidth(this) / 2, y: helpers_1.gameHeight(this) / 2 - 32 },
            button: { x: helpers_1.gameWidth(this) / 2, y: helpers_1.gameHeight(this) / 2 + 95 }
        };
        this.characterPickerUser2 = {
            window: { x: helpers_1.gameWidth(this) - 180, y: helpers_1.gameHeight(this) / 2 - 90 },
            title: { x: helpers_1.gameWidth(this) - 180, y: helpers_1.gameHeight(this) / 2 - 184 },
            thumbnail: { x: helpers_1.gameWidth(this) - 180, y: helpers_1.gameHeight(this) / 2 - 32 },
            button: { x: helpers_1.gameWidth(this) - 180, y: helpers_1.gameHeight(this) / 2 + 95 }
        };
        this.titleStyle = {
            fontSize: "22px",
            fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
            align: "center",
            color: helpers_1.COLORS.white.string,
        };
        // Loading boot scene data into this scene data manager
        this.data.set("user1", bootSceneData.user1);
        this.data.set("user2", bootSceneData.user2);
        this.data.set("characters", bootSceneData.characters);
        this.data.set("levels", bootSceneData.levels);
        // Setting up users defaults
        this.data.get("user1").levelInstance = this.data.get("levels").at(0);
        this.data.get("user1").characterInstance = this.data.get("characters").at(0);
        this.data.get("user2").levelInstance = this.data.get("levels").at(0);
        this.data.get("user2").characterInstance = this.data.get("characters").at(0);
        this.clickSound = this.sound.add("clickSound");
    };
    MenuScene.prototype.create = function () {
        var _this = this;
        this.cameras.main.fadeIn();
        this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) / 2, "backgroundMenu");
        //********************************************************************//
        //************************** CHOOSE MAP ******************************//
        //********************************************************************//
        // Container for the map thumbnails
        this.add.image(this.mapPicker.window.x, this.mapPicker.window.y, "windowBlank").setScale(0.70, 0.70);
        // Map thumbnail
        this.levelThumb = this.add.image(this.mapPicker.thumbnail.x, this.mapPicker.thumbnail.y, this.data.get("levels").at(0).thumbnailKey).setScale(0.70, 0.70);
        // Text indication
        this.make.text({
            x: this.mapPicker.title.x,
            y: this.mapPicker.title.y,
            text: "TERRAIN",
            style: this.titleStyle
        }).setOrigin(0.5, 0.5);
        // Next map button
        var nexMapButton = this.add.image(this.mapPicker.button.x, this.mapPicker.button.y, "tabWood").setInteractive({
            cursor: "pointer"
        }).on("pointerover", function () {
            nexMapButton.setTexture("tabWoodSelected");
        }).on("pointerout", function () {
            nexMapButton.setTexture("tabWood");
        }).on("pointerdown", function () {
            _this.clickSound.play();
            _this.data.get("levels").push(_this.data.get("levels").shift());
            _this.levelThumb.setTexture(_this.data.get("levels").at(0).thumbnailKey);
            _this.data.get("user1").levelInstance = _this.data.get("levels").at(0);
            _this.data.get("user2").levelInstance = _this.data.get("levels").at(0);
        });
        // New map button text
        this.make.text({
            x: this.mapPicker.button.x,
            y: this.mapPicker.button.y,
            text: "NEXT",
            style: {
                fontSize: "22px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
        //********************************************************************//
        //************************ CHOOSE CHARACTER 1 ************************//
        //********************************************************************//
        // Container for the character thumbnails of player 1
        this.add.image(this.characterPickerUser1.window.x, this.characterPickerUser1.window.y, "windowBlank").setScale(0.70, 0.70);
        // Character of player 1 thumbnail
        var charThumbPlayer1 = this.add.image(this.characterPickerUser1.thumbnail.x, this.characterPickerUser1.thumbnail.y, this.data.get("characters").at(0).thumbnailKey).setScale(0.80, 0.80);
        this.make.text({
            x: this.characterPickerUser1.title.x,
            y: this.characterPickerUser1.title.y,
            text: "PLAYER 1",
            style: this.titleStyle,
        }).setOrigin(0.5, 0.5);
        // Next character button for player 1
        var nextCharPlayer1 = this.add.image(this.characterPickerUser1.button.x, this.characterPickerUser1.button.y, "tabWood").setInteractive({
            cursor: "pointer"
        }).on("pointerover", function () {
            nextCharPlayer1.setTexture("tabWoodSelected");
        }).on("pointerout", function () {
            nextCharPlayer1.setTexture("tabWood");
        }).on("pointerdown", function () {
            _this.clickSound.play();
            _this.data.get("characters").push(_this.data.get("characters").shift());
            charThumbPlayer1.setTexture(_this.data.get("characters")[0].thumbnailKey);
            _this.data.get("user1").characterInstance = _this.data.get("characters")[0];
        });
        // New character button text
        this.make.text({
            x: this.characterPickerUser1.button.x,
            y: this.characterPickerUser1.button.y,
            text: "NEXT",
            style: {
                fontSize: "22px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
        //********************************************************************//
        //************************ CHOOSE CHARACTER 2 ************************//
        //********************************************************************//
        // Container for the character thumbnails of player 2
        this.add.image(this.characterPickerUser2.window.x, this.characterPickerUser2.window.y, "windowBlank").setScale(0.70, 0.70);
        // Character of player 2 thumbnail
        var charThumbPlayer2 = this.add.image(this.characterPickerUser2.thumbnail.x, this.characterPickerUser2.thumbnail.y, this.data.get("characters").at(0).thumbnailKey).setScale(0.80, 0.80);
        this.make.text({
            x: this.characterPickerUser2.title.x,
            y: this.characterPickerUser2.title.y,
            text: "PLAYER 2",
            style: this.titleStyle,
        }).setOrigin(0.5, 0.5);
        // Next character button for player 1
        var nextCharPlayer2 = this.add.image(this.characterPickerUser2.button.x, this.characterPickerUser2.button.y, "tabWood").setInteractive({
            cursor: "pointer"
        }).on("pointerover", function () {
            nextCharPlayer2.setTexture("tabWoodSelected");
        }).on("pointerout", function () {
            nextCharPlayer2.setTexture("tabWood");
        }).on("pointerdown", function () {
            _this.clickSound.play();
            _this.data.get("characters").push(_this.data.get("characters").shift());
            charThumbPlayer2.setTexture(_this.data.get("characters")[0].thumbnailKey);
            _this.data.get("user1").characterInstance = _this.data.get("characters")[0];
        });
        // New character button text
        this.make.text({
            x: this.characterPickerUser2.button.x,
            y: this.characterPickerUser2.button.y,
            text: "NEXT",
            style: {
                fontSize: "22px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
        //********************************************************************//
        //**************************** DATA **********************************//
        //********************************************************************//
        // Set the MODIFIED users data from the boot scene to this actual scene.
        // At this stage and not earlier, because level and characters instances has been linked to
        // each users thanks to the slide buttons callbacks and the thumbnails.
        this.data.set("user1", this.data.get("user1"));
        this.data.set("user2", this.data.get("user2"));
        //********************************************************************//
        //************************** START GAME ******************************//
        //********************************************************************//
        var nextSceneButton = this.add.image(helpers_1.gameWidth(this) / 2, helpers_1.gameHeight(this) - 100, "textButtonWood").setInteractive({
            cursor: "pointer"
        }).on("pointerover", function () {
            nextSceneButton.setTexture("textButtonWoodSelected");
        }).on("pointerout", function () {
            nextSceneButton.setTexture("textButtonWood");
        }).on("pointerdown", function () {
            _this.sound.add("clickSound").play();
            _this.cameras.main.fadeOut();
            _this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function (cam, effect) {
                _this.sound.stopAll();
                _this.scene.start("Game", _this.data.getAll());
            });
        });
        // The text on main button
        this.make.text({
            x: helpers_1.gameWidth(this) / 2,
            y: helpers_1.gameHeight(this) - 100,
            text: "START",
            style: {
                fontSize: "32px",
                fontFamily: helpers_1.DEFAULT_FONT_FAMILIES,
                align: "center",
                color: helpers_1.COLORS.white.string,
            },
        }).setOrigin(0.5, 0.5);
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
exports.getUserRatio = exports.setLocalStorage = exports.getLocalStorage = void 0;
function getLocalStorage() {
    var data = localStorage.getItem('hoafight');
    if (data)
        return JSON.parse(data);
    return { games: [] };
}
exports.getLocalStorage = getLocalStorage;
function setLocalStorage(games) {
    localStorage.setItem('hoafight', JSON.stringify({ games: games }));
}
exports.setLocalStorage = setLocalStorage;
function getUserRatio(user) {
    var games = getLocalStorage().games;
    var won = games.filter(function (game) { return game.winner === user; }).length;
    var all = games.length;
    var ratio = ((won / all) * 100) || 0;
    return Math.round(ratio);
}
exports.getUserRatio = getUserRatio;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvYm9tYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2h1ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9sZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9sb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9wcm9qZWN0aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3RpbGVtYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0Jvb3RTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVvdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9NZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtR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QUFLLFdBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2hFLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDekIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFORCxvQ0FNQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vb2JqZWN0cy91c2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9ucyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNoYXJhY3RlckFuaW0oc2NlbmU6IFBoYXNlci5TY2VuZSwgdXNlcjogVXNlcikge1xyXG4gICAgICAgIGxldCB0ayA9IHVzZXIuY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleTtcclxuXHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBgJHt0a31XQUxLYCxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXModGssIHtcclxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJ3YWxrLXNpZGUtYXJtZWRcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogYCR7dGt9V0FMS19TSE9PVGAsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwid2Fsay1zaWRlLXNob290XCIsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogMSxcclxuICAgICAgICAgICAgICAgIGVuZDogNCxcclxuICAgICAgICAgICAgICAgIHplcm9QYWQ6IDIsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IGAke3RrfUlETEVgLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcImlkbGUtZnJvbnQtYXJtZWRcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgZW5kOiA0LFxyXG4gICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogYCR7dGt9SURMRV9TSE9PVGAsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKHRrLCB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiaWRsZS1mcm9udC1zaG9vdFwiLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBgJHt0a31ISVRgLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcImhpdFwiLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IDEsXHJcbiAgICAgICAgICAgICAgICB6ZXJvUGFkOiAyLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgcmVwZWF0OiAxLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IGAke3RrfURFQURgLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcyh0aywge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcImRlYWRcIixcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAxLFxyXG4gICAgICAgICAgICAgICAgemVyb1BhZDogMixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHJlcGVhdDogMSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVXaWR0aChzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVIZWlnaHQoc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JTID0ge1xyXG4gICAgY3VzdG9tQmx1ZTogeyBzdHJpbmc6IFwiIzQzNDZmOVwiLCBoZXg6IDB4NDM0NmY5IH0sXHJcbiAgICBjdXN0b21HcmVlbjogeyBzdHJpbmc6IFwiIzc2ZWE2NFwiLCBoZXg6IDB4NzZlYTY0IH0sXHJcbiAgICB2aWJyYW50R3JlZW46IHsgc3RyaW5nOiBcIiMyNWY5NDVcIiwgaGV4OiAweDI1Zjk0NSB9LFxyXG4gICAgY3VzdG9tUmVkOiB7IHN0cmluZzogXCIjZWEyZDIzXCIsIGhleDogMHhlYTJkMjMgfSxcclxuICAgIHdoaXRlOiB7IHN0cmluZzogXCIjZmZmZmZmXCIsIGhleDogMHhmZmZmZmYgfSxcclxuICAgIGJsYWNrOiB7IHN0cmluZzogXCIjMDAwMDAwXCIsIGhleDogMHgwMDAwMDAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRST0xfUDEgPSB7XHJcbiAgICByaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hULFxyXG4gICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQsXHJcbiAgICBqdW1wOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVAsXHJcbiAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNISUZUXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVFJPTF9QMiA9IHtcclxuICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcclxuICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5RLFxyXG4gICAganVtcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlosXHJcbiAgICBzaG9vdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMgPSBcIkdyb2JvbGQsIG1vbm9zcGFjZSwgQXJpYWxcIjtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcclxuaW1wb3J0IFNjZW5lcyBmcm9tIFwiLi9zY2VuZXNcIjtcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogXCJIb2EgRmlnaHRcIixcclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogMTAyNCxcclxuICAgICAgICBoZWlnaHQ6IDY0MFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgICAgZ2FtZXBhZDogdHJ1ZSxcclxuICAgICAgICBrZXlib2FyZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiBcImFyY2FkZVwiLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBncmF2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZG9tOiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFyZW50OiBcImdhbWVcIixcclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuIiwiaW1wb3J0IHsgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0IH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb21iIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHRleHR1cmVLZXk6IHN0cmluZyB9KSB7XHJcbiAgICAgICAgc3VwZXIocGFyYW1zLnNjZW5lLCBwYXJhbXMueCwgcGFyYW1zLnksIHBhcmFtcy50ZXh0dXJlS2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRCb3VuY2UoMSk7XHJcbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eShQaGFzZXIuTWF0aC5CZXR3ZWVuKC0yMDAsIDIwMCksIDIwKTtcclxuICAgICAgICB0aGlzLnNldEdyYXZpdHlZKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNPdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueSA+IGdhbWVIZWlnaHQodGhpcy5zY2VuZSkgfHwgdGhpcy55IDwgMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJlcG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IGdhbWVXaWR0aCh0aGlzLnNjZW5lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSBnYW1lV2lkdGgodGhpcy5zY2VuZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcG9zaXRpb24oKTtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnQgYSBHYW1lIENoYXJhY3Rlciwgbm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggdGhlIFwiUGxheWVyXCIuXHJcbiAqIEEgUGxheWVyIGludGVncmF0ZXMgYSBDaGFyYWN0ZXIuIEEgQ2hhcmFjdGVyIGlzIGp1c3QgYWJvdXQgaG9sZGluZyBkYXRhIDpcclxuICogdGV4dHVyZSBrZXlzLCBtZXRhZGF0YSwgdm9pY2VzIGV0Yy4gTm90aGluZyB0byBiZSBjb250cm9sbGVkIHdpdGggeW91clxyXG4gKiBrZXlib2FyZCBoZXJlLlxyXG4gKlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXIge1xyXG4gICAgLy8gVmVyeSBpbXBvcnRhbnQgZmllbGQsIHRpZ2h0bHkgbGlua2VkIHRvIHRoZSBrZXlzIHlvdSBwcm92aWRlIGluIHBhY2suanNvblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGV0YWlsczogb2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBzdGF0czogb2JqZWN0O1xyXG4gICAgLy8gRmllbGRzIGJ1aWx0IHVwb24gdGhlIElkIHByb3ZpZGVkIGF0IGluc3RhbmNpYXRpb24uXHJcbiAgICBwcml2YXRlIF90ZXh0dXJlS2V5OiBzdHJpbmc7XHJcbiAgICAvLyBDaGFyYWN0ZXIncyBhdmF0YXJcclxuICAgIHByaXZhdGUgX3RodW1ibmFpbEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc291bmRLZXk6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRleHR1cmVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZUtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRodW1ibmFpbEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aHVtYm5haWxLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzb3VuZEtleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zb3VuZEtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRldGFpbHMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGV0YWlscztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgaWQ6IG51bWJlcjsgZGV0YWlscz86IHsgbmlja25hbWU6IHN0cmluZyB9OyBzdGF0cz86IG9iamVjdCB9KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl9kZXRhaWxzID0gcGFyYW1zLmRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHBhcmFtcy5zdGF0cztcclxuICAgICAgICB0aGlzLl90ZXh0dXJlS2V5ID0gYGNoYXJhY3RlciR7dGhpcy5pZH1gO1xyXG4gICAgICAgIHRoaXMuX3RodW1ibmFpbEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9QXZhdGFyYDtcclxuICAgICAgICB0aGlzLl9zb3VuZEtleSA9IGBjaGFyYWN0ZXIke3RoaXMuaWR9U291bmRgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTE9SUywgZ2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIge1xyXG4gICAgcHJpdmF0ZSBiYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGhWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBkZWNyZWFzZShwQW1vdW50OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLmhlYWx0aFZhbHVlIC09IHBBbW91bnQgKiAyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoVmFsdWUgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFyLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIEJhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLndoaXRlLmhleCk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoVmFsdWUgPiA2MCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbUJsdWUuaGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUoQ09MT1JTLmN1c3RvbVJlZC5oZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWx0aFdpZHRoID0gTWF0aC5mbG9vcih0aGlzLmhlYWx0aFZhbHVlKTtcclxuICAgICAgICAvLyBUaGUgYWN0dWFsIGhlYWx0aCBqYXVnZSB5b3Ugc2VlIGRlY3JlYXNpbmdcclxuICAgICAgICB0aGlzLmJhci5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgaGVhbHRoV2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgc2NlbmU6IFBoYXNlci5TY2VuZTsgc2lkZTogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmJhciA9IHBhcmFtcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTY7XHJcbiAgICAgICAgdGhpcy5oZWFsdGhWYWx1ZSA9IDIwMDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmFtcy5zaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnggPSA3NDtcclxuICAgICAgICAgICAgdGhpcy55ID0gNTQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuc2lkZSA9PT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IChnYW1lV2lkdGgocGFyYW1zLnNjZW5lKSkgLSB0aGlzLndpZHRoIC0gNzg7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IDU0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09MT1JTLCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsIGdhbWVXaWR0aCB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSHVkIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBpZiAodXNlci5zY3JlZW5TaWRlID09PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICBzY2VuZS5hZGQuaW1hZ2UoMCwgMCwgdXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXkpLnNldE9yaWdpbigwLCAwKS5zZXRTY2FsZSgwLjQwKTtcclxuXHJcbiAgICAgICAgICAgIHNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgICAgICB4OiA3NCxcclxuICAgICAgICAgICAgICAgIHk6IDE1LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogYCR7dXNlci5jaGFyYWN0ZXJJbnN0YW5jZS5kZXRhaWxzLm5pY2tuYW1lfSB8ICR7dXNlci51c2VybmFtZX0gfCBSYXRpbyAke3VzZXIucmF0aW99JWAsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyLnNjcmVlblNpZGUgPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICBzY2VuZS5hZGQuaW1hZ2UoZ2FtZVdpZHRoKHNjZW5lKSwgMCwgdXNlci5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXkpLnNldE9yaWdpbigxLCAwKS5zZXRTY2FsZSgwLjQwKTtcclxuXHJcbiAgICAgICAgICAgIHNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgICAgICB4OiBnYW1lV2lkdGgoc2NlbmUpIC0gNzgsXHJcbiAgICAgICAgICAgICAgICB5OiAxNSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGAke3VzZXIuY2hhcmFjdGVySW5zdGFuY2UuZGV0YWlscy5uaWNrbmFtZX0gfCAke3VzZXIudXNlcm5hbWV9IHwgUmF0aW8gJHt1c2VyLnJhdGlvfSVgLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogREVGQVVMVF9GT05UX0ZBTUlMSUVTLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMud2hpdGUuc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSkuc2V0T3JpZ2luKDEsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUaWxlbWFwIH0gZnJvbSBcIi4vdGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBnYW1lV2lkdGgsIGdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuLyoqXHJcbiAqIEEgTGV2ZWwgY29uc2lzdHMgb2YgOiBhIGJhY2tncm91bmQgKyBhIG11c2ljIHRoZW1lICsgYSB0aWxlbWFwICsgYSBuYW1lICtcclxuICogYSB0aHVtYm5haWwuXHJcbiAqIEl0IGluaXRzIHRoZSBkaWZmZXJlbnQga2V5cyBuZWVkZWQgYW5kIGNyZWF0ZXMvZHJhdyB0aGUgYmFja2dyb3VuZCxcclxuICogdGhlIHRpbGVtYXAgKGJ5IGluc3RhbmNpYXRlIGl0KSBhbmQgcGxheSB0aGUgbXVzaWMgdGhlbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGV2ZWwge1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdGlsZW1hcDogVGlsZW1hcDtcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3RodW1ibmFpbEtleTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kS2V5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIG11c2ljS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCB0aWxlbWFwKCk6IFRpbGVtYXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGh1bWJuYWlsS2V5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RodW1ibmFpbEtleTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0pIHtcclxuICAgICAgICB0aGlzLmlkID0gcGFyYW1zLmlkO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBwYXJhbXMubmFtZTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRLZXkgPSBgbGV2ZWwke3RoaXMuaWR9QmFja2dyb3VuZGA7XHJcbiAgICAgICAgdGhpcy5tdXNpY0tleSA9IGBsZXZlbCR7dGhpcy5pZH1UaGVtZWA7XHJcbiAgICAgICAgdGhpcy5fdGh1bWJuYWlsS2V5ID0gYGxldmVsJHt0aGlzLmlkfVRodW1ibmFpbGA7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHNjZW5lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMixcclxuICAgICAgICAgICAgZ2FtZUhlaWdodCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEtleVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpbGVtYXAgPSBuZXcgVGlsZW1hcCh7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQodGhpcy5tdXNpY0tleSkucGxheSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENPTE9SUywgZ2FtZUhlaWdodCwgZ2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQmFyIHtcclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcbiAgICBwcml2YXRlIGJhcjogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG4gICAgcHJpdmF0ZSBiYXJYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhclk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFyV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmFySGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckNvbG9yOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJhckFscGhhOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBib3g6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuICAgIHByaXZhdGUgYm94WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveFdpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJveEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hDb2xvcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBib3hBbHBoYTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgcHJvZ3Jlc3NUZXh0KCk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KHBWYWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmJhci5maWxsU3R5bGUodGhpcy5iYXJDb2xvciwgdGhpcy5iYXJBbHBoYSk7XHJcbiAgICAgICAgdGhpcy5iYXIuZmlsbFJlY3QodGhpcy5iYXJYLCB0aGlzLmJhclksIHRoaXMuYmFyV2lkdGggKiBwVmFsdWUsIHRoaXMuYmFySGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ib3guZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudGV4dC5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RleHQuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBzY2VuZTogUGhhc2VyLlNjZW5lIH0pIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gcGFyYW1zLnNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLmJhciA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5iYXJXaWR0aCA9IDQwMDtcclxuICAgICAgICB0aGlzLmJhckhlaWdodCA9IDMwO1xyXG4gICAgICAgIHRoaXMuYmFyWCA9IChnYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyKSAtICh0aGlzLmJhcldpZHRoIC8gMik7XHJcbiAgICAgICAgdGhpcy5iYXJZID0gKGdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyKSAtICh0aGlzLmJhckhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuYmFyQ29sb3IgPSBDT0xPUlMuY3VzdG9tQmx1ZS5oZXg7XHJcbiAgICAgICAgdGhpcy5iYXJBbHBoYSA9IDAuODtcclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuYm94V2lkdGggPSB0aGlzLmJhcldpZHRoICsgMTA7XHJcbiAgICAgICAgdGhpcy5ib3hIZWlnaHQgPSB0aGlzLmJhckhlaWdodCArIDEwO1xyXG4gICAgICAgIHRoaXMuYm94WCA9IChnYW1lV2lkdGgodGhpcy5zY2VuZSkgLyAyKSAtICh0aGlzLmJveFdpZHRoIC8gMik7XHJcbiAgICAgICAgdGhpcy5ib3hZID0gKGdhbWVIZWlnaHQodGhpcy5zY2VuZSkgLyAyKSAtICh0aGlzLmJveEhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuYm94Q29sb3IgPSBDT0xPUlMud2hpdGUuaGV4O1xyXG4gICAgICAgIHRoaXMuYm94QWxwaGEgPSAwLjM7XHJcblxyXG4gICAgICAgIHRoaXMuYm94LmZpbGxTdHlsZSh0aGlzLmJveENvbG9yLCB0aGlzLmJveEFscGhhKTtcclxuICAgICAgICB0aGlzLmJveC5maWxsUmVjdCh0aGlzLmJveFgsIHRoaXMuYm94WSwgdGhpcy5ib3hXaWR0aCwgdGhpcy5ib3hIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLnNjZW5lLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IGdhbWVXaWR0aCh0aGlzLnNjZW5lKSAvIDIsXHJcbiAgICAgICAgICAgIHk6IChnYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMikgKyA0MCxcclxuICAgICAgICAgICAgdGV4dDogXCJMb2FkaW5nLi4uXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiAnMjBweCBtb25vc3BhY2UnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRleHQuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NUZXh0ID0gdGhpcy5zY2VuZS5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiAoZ2FtZVdpZHRoKHRoaXMuc2NlbmUpIC8gMiksXHJcbiAgICAgICAgICAgIHk6IChnYW1lSGVpZ2h0KHRoaXMuc2NlbmUpIC8gMiksXHJcbiAgICAgICAgICAgIHRleHQ6IFwiMCVcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6ICcxOHB4IG1vbm9zcGFjZSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzVGV4dC5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuL3Byb2plY3RpbGVcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG4gICAgcHJpdmF0ZSBfcHJvamVjdGlsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgaGVhbHRoQmFyOiBIZWFsdGhCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSByaWdodEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgbGVmdEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUganVtcEtleTogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHByaXZhdGUgc2hvb3RLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwcml2YXRlIGxhc3RQcmVzc2VkS2V5OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuICAgIHByaXZhdGUganVtcFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBzaG9vdFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBoaXRWb2ljZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcbiAgICBwcml2YXRlIGxhc3RTaG9vdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdng6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ3Jhdml0eVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUganVtcFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGJvdW5jZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBidWxsZXRQcm9vZjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2NvbGxlY3RlZFN0dWZmOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBTVEFURVMgPSB7XHJcbiAgICAgICAgTk9STUFMOiBcIk5PUk1BTFwiLFxyXG4gICAgICAgIEhVUlQ6IFwiSFVSVFwiLFxyXG4gICAgICAgIERFQUQ6IFwiREVBRFwiLFxyXG4gICAgICAgIEpVTVBJTkc6IFwiSlVNUElOR1wiLFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHByb2plY3RpbGVzKCk6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29sbGVjdGVkU3R1ZmYoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGVkU3R1ZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbGxlY3RTdHVmZigpIHtcclxuICAgICAgICB0aGlzLl9jb2xsZWN0ZWRTdHVmZisrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGh1cnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1bGxldFByb29mICYmIHRoaXMuaGVhbHRoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLkhVUlQpO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAyMDtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuZGVjcmVhc2UoMjApO1xyXG4gICAgICAgICAgICB0aGlzLmhpdFZvaWNlLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VCdWxsZXRQcm9vZigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRQcm9vZiA9PT0gZmFsc2UpIHRoaXMuYnVsbGV0UHJvb2YgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFNvdW5kcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmp1bXBTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKFwianVtcFNvdW5kXCIpO1xyXG4gICAgICAgIHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc2NlbmUuc291bmQuYWRkKFwic2hvb3RTb3VuZFwiKTtcclxuICAgICAgICB0aGlzLmhpdFZvaWNlID0gdGhpcy5zY2VuZS5zb3VuZC5hZGQoXCJoaXRWb2ljZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRWaXRhbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQcm9vZiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ncmF2aXR5WSA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5qdW1wVmVsb2NpdHkgPSAtNjAwO1xyXG4gICAgICAgIHRoaXMudnggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseVBoeXNpY3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNldEdyYXZpdHlZKHRoaXMuZ3Jhdml0eVkpO1xyXG4gICAgICAgIHRoaXMuc2V0Qm91bmNlKHRoaXMuYm91bmNlKTtcclxuICAgICAgICB0aGlzLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRDb250cm9scyhwS2V5cyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuanVtcEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wianVtcFwiXSk7XHJcbiAgICAgICAgdGhpcy5yaWdodEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wicmlnaHRcIl0pO1xyXG4gICAgICAgIHRoaXMubGVmdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wibGVmdFwiXSk7XHJcbiAgICAgICAgdGhpcy5zaG9vdEtleSA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KHBLZXlzW1wic2hvb3RcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEhlYWx0aEJhcihwSGVhbHRoQmFyOiBIZWFsdGhCYXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHBIZWFsdGhCYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U2hvb3RpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYXN0U2hvb3QgPSAwO1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3RpbGVzID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob290KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnRpbWUubm93ID4gdGhpcy5sYXN0U2hvb3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvamVjdGlsZXMuYWRkKFxyXG4gICAgICAgICAgICAgICAgbmV3IFByb2plY3RpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIGJ1bGxldCBzdGFydGluZyBwb2ludCBpZiBzcHJpdGUgaXMgZmxpcHBlZCBvbiBYIGF4aXMuXHJcbiAgICAgICAgICAgICAgICAgICAgeDogIXRoaXMuZmxpcFggPyB0aGlzLnggKyAyMCA6IHRoaXMueCAtIDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMueSArIDExLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1bGxldCBkaXJlY3Rpb24gKGxlZnQvcmlnaHQpIGJhc2VkIG9uIGxhc3QgcHJlc3NlZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICAvLyAoaS5lIGRpcmVjdGlvbiBvZiB0aGUgcGxheWVyKS4gRGVmYXVsdDogZ29lcyByaWdodC5cclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMubGVmdEtleSA/IC0xIDogMSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlS2V5OiBcInByb2plY3RpbGVcIixcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNob290ID0gdGhpcy5zY2VuZS50aW1lLm5vdyArIDUwMDtcclxuICAgICAgICAgICAgLy8gUGxheWluZyBzb3VuZCBoZXJlIGVuc3VyZXMgdXMgaXQgaXMgcGxheWVkIG9ubHkgb25jZSBldmVyeSBzaG9vdC5cclxuICAgICAgICAgICAgdGhpcy5zaG9vdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGlwcGluZyB0aGUgc3ByaXRlIG9uIGl0cyBYIGF4aXMsIGRlcGVuZGluZyBvbiB3aGljaCBkaXJlY3Rpb24geW91IGdvLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVNwcml0ZUZsaXBwaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RQcmVzc2VkS2V5ID09PSB0aGlzLmxlZnRLZXkpIHtcclxuICAgICAgICAgICAgLy8gQ2hhbmdlZCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyBsZWZ0LlxyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFzdFByZXNzZWRLZXkgPT09IHRoaXMucmlnaHRLZXkpIHtcclxuICAgICAgICAgICAgLy8gT3JpZ2luYWwgc3ByaXRlIG9yaWVudGF0aW9uOiBmYWNpbmcgcmlnaHQuXHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBPcmlnaW5hbCBzcHJpdGUgb3JpZW50YXRpb246IGZhY2luZyByaWdodC5cclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUp1bXBpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuanVtcEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9keS5ibG9ja2VkLmRvd24gfHwgdGhpcy5ib2R5LnRvdWNoaW5nLmRvd24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlZKHRoaXMuanVtcFZlbG9jaXR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZSBpZGxpbmcgKGRvaW5nIG5vdGhpbmcpIEFORCBpZGxpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUlkbGluZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1JRExFYCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIElkbGluZy1TaG9vdGluZy5cclxuICAgICAgICBpZiAodGhpcy5zaG9vdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9SURMRV9TSE9PVGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlIHdhbGtpbmcgQU5EIHdhbGtpbmctc2hvb3RpbmcuXHJcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuaW1hdGlvbiBwbGF5aW5nLCBjaGVja2luZyBrZXkgcHJlc3MsIHNldHRpbmcgdmVsb2NpdHksXHJcbiAgICAgKiBjcmVhdGUgc2hvb3RzIGFuZCByZW1lbWJlcmluZyBsYXN0IHByZXNzZWQga2V5LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZVdhbGtpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9V0FMS2AsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyBXYWxraW5nIDogZ29pbmcgcmlnaHRcclxuICAgICAgICBpZiAodGhpcy5yaWdodEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eVgodGhpcy52eCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFByZXNzZWRLZXkgPSB0aGlzLnJpZ2h0S2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXYWxraW5nIDogZ29pbmcgbGVmdFxyXG4gICAgICAgIGlmICh0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKC10aGlzLnZ4KTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0UHJlc3NlZEtleSA9IHRoaXMubGVmdEtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdhbGtpbmctU2hvb3RpbmdcclxuICAgICAgICBpZiAodGhpcy5zaG9vdEtleS5pc0Rvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltcy5wbGF5KGAke3RoaXMudGV4dHVyZS5rZXl9V0FMS19TSE9PVGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgICAgICB0ZXh0dXJlS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgY29udHJvbEtleXM6IG9iamVjdDtcclxuICAgICAgICBoZWFsdGhCYXI6IEhlYWx0aEJhcjtcclxuICAgIH0pIHtcclxuICAgICAgICBzdXBlcihwYXJhbXMuc2NlbmUsIHBhcmFtcy54LCBwYXJhbXMueSwgcGFyYW1zLnRleHR1cmVLZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0UGh5c2ljcygpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlQaHlzaWNzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U291bmRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Vml0YWxzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SGVhbHRoQmFyKHBhcmFtcy5oZWFsdGhCYXIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNob290aW5nKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q29udHJvbHMocGFyYW1zLmNvbnRyb2xLZXlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sbGVjdGVkU3R1ZmYgPSAwO1xyXG5cclxuICAgICAgICAvLyBSZXN0cmFpbiB0aGUgYm91bmRpbmdCb3hcclxuICAgICAgICB0aGlzLnNldFNpemUoMjAsIDYwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLlNUQVRFUy5OT1JNQUwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5TVEFURVMuREVBRDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5OT1JNQUwpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVKdW1waW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3ByaXRlRmxpcHBpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0S2V5LmlzRG93biB8fCB0aGlzLmxlZnRLZXkuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdhbGtpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlSWRsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5IVVJUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbXMucGxheShgJHt0aGlzLnRleHR1cmUua2V5fUhJVGAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCgwKTtcclxuICAgICAgICAgICAgLy8gVGhlIG9ubHkgdGhpbmcgdGhhdCBtYWtlIHRoZSBwbGF5ZXIgcmV0dXJuIHRvIG5vcm1hbCBpcyB0aW1lXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuU1RBVEVTLk5PUk1BTCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0aGlzLlNUQVRFUy5ERUFEKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IHJlc2V0IHN0YXRlIHRvIE5PUk1BTCBjYXVzZSBpdCdzIGVuZCBvZiB0aGUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYCR7dGhpcy50ZXh0dXJlLmtleX1ERUFEYCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnYW1lV2lkdGgsIGdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuICAgIHByaXZhdGUgdng6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBpc091dCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnggPiBnYW1lV2lkdGgodGhpcy5zY2VuZSkgfHxcclxuICAgICAgICAgICAgdGhpcy55ID4gZ2FtZUhlaWdodCh0aGlzLnNjZW5lKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnggPCAwIHx8XHJcbiAgICAgICAgICAgIHRoaXMueSA8IDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xyXG4gICAgICAgIHN1cGVyKHBhcmFtcy5zY2VuZSwgcGFyYW1zLngsIHBhcmFtcy55LCBwYXJhbXMudGV4dHVyZUtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudnggPSA3MDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WCh0aGlzLmRpcmVjdGlvbiAqIHRoaXMudngpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc091dCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3RpbGUgZGVzdHJveWVkIGNhdXNlIG91dCBvZiB3b3JsZCBib3VuZHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdhbWVIZWlnaHQgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXAge1xyXG4gICAgcHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG4gICAgcHJpdmF0ZSB0aWxlc2V0OiBQaGFzZXIuVGlsZW1hcHMuVGlsZXNldDtcclxuICAgIHByaXZhdGUgX21haW5MYXllcjogUGhhc2VyLlRpbGVtYXBzLlRpbGVtYXBMYXllcjtcclxuICAgIHByaXZhdGUgc3ViTGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwTGF5ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBsYXllciB0aGF0IGNvbGxpZGVzOiAnY29sbGlkZXMnIHNldCB0byB0cnVlIGluIFRpbGVkLlxyXG4gICAgICovXHJcbiAgICBnZXQgbWFpbkxheWVyKCk6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwTGF5ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiB7IHNjZW5lOiBQaGFzZXIuU2NlbmU7IGlkOiBudW1iZXIgfSkge1xyXG5cclxuICAgICAgICB0aGlzLm1hcCA9IHBhcmFtcy5zY2VuZS5tYWtlLnRpbGVtYXAoe1xyXG4gICAgICAgICAgICBrZXk6IGBsZXZlbCR7cGFyYW1zLmlkfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXNldCA9IHRoaXMubWFwLmFkZFRpbGVzZXRJbWFnZShcclxuICAgICAgICAgICAgYGxldmVsJHtwYXJhbXMuaWR9LXRpbGVzaGVldGAsXHJcbiAgICAgICAgICAgIGBsZXZlbCR7cGFyYW1zLmlkfVRpbGVzaGVldGBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluTGF5ZXIgPSB0aGlzLm1hcC5jcmVhdGVMYXllcihcclxuICAgICAgICAgICAgXCJtYWluTGF5ZXJcIixcclxuICAgICAgICAgICAgdGhpcy50aWxlc2V0LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFpbkxheWVyLnNldENvbGxpc2lvbkJ5UHJvcGVydHkoe1xyXG4gICAgICAgICAgICBjb2xsaWRlczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJMYXllciA9IHRoaXMubWFwLmNyZWF0ZUxheWVyKFxyXG4gICAgICAgICAgICBcInN1YkxheWVyXCIsXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXNldCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuL2xldmVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3JhdGlvOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JlZW5TaWRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9jaGFyYWN0ZXJJbnN0YW5jZTogQ2hhcmFjdGVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVySW5zdGFuY2U6IFBsYXllcjtcclxuICAgIHByaXZhdGUgX2xldmVsSW5zdGFuY2U6IExldmVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICByYXRpbzogbnVtYmVyO1xyXG4gICAgICAgIHNjcmVlblNpZGU6IHN0cmluZztcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHBhcmFtcy5pZDtcclxuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHBhcmFtcy51c2VybmFtZTtcclxuICAgICAgICB0aGlzLl9yYXRpbyA9IHBhcmFtcy5yYXRpbztcclxuICAgICAgICB0aGlzLl9zY3JlZW5TaWRlID0gcGFyYW1zLnNjcmVlblNpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVzZXJuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmF0aW8oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBzY3JlZW5TaWRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjcmVlblNpZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjaGFyYWN0ZXJJbnN0YW5jZSgpOiBDaGFyYWN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBsYXllckluc3RhbmNlKCk6IFBsYXllciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllckluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGV2ZWxJbnN0YW5jZSgpOiBMZXZlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsSW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjaGFyYWN0ZXJJbnN0YW5jZSh2OiBDaGFyYWN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9jaGFyYWN0ZXJJbnN0YW5jZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBwbGF5ZXJJbnN0YW5jZSh2OiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLl9wbGF5ZXJJbnN0YW5jZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBsZXZlbEluc3RhbmNlKHY6IExldmVsKSB7XHJcbiAgICAgICAgdGhpcy5fbGV2ZWxJbnN0YW5jZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCByYXRpbyh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yYXRpbyA9IHY7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsIENPTE9SUyB9IGZyb20gXCIuLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL29iamVjdHMvbGV2ZWxcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9vYmplY3RzL3VzZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL29iamVjdHMvY2hhcmFjdGVyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IGdldFVzZXJSYXRpbyB9IGZyb20gXCIuLi9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJCb290XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbGV2ZWxzOiBBcnJheTxMZXZlbD47XHJcbiAgICBwcml2YXRlIHVzZXIxOiBVc2VyO1xyXG4gICAgcHJpdmF0ZSB1c2VyMjogVXNlcjtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyczogQXJyYXk8Q2hhcmFjdGVyPjtcclxuICAgIHByaXZhdGUgbG9hZGluZ0JhcjogTG9hZGluZ0JhcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVzZXIxID0gbmV3IFVzZXIoeyBcclxuICAgICAgICAgICAgaWQ6IDEsIFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJQbGF5ZXIgMVwiLCBcclxuICAgICAgICAgICAgcmF0aW86IGdldFVzZXJSYXRpbyhcInVzZXIxXCIpLCBcclxuICAgICAgICAgICAgc2NyZWVuU2lkZTogXCJsZWZ0XCIgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlcjIgPSBuZXcgVXNlcih7IFxyXG4gICAgICAgICAgICBpZDogMiwgXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcIlBsYXllciAyXCIsIFxyXG4gICAgICAgICAgICByYXRpbzogZ2V0VXNlclJhdGlvKFwidXNlcjJcIiksIFxyXG4gICAgICAgICAgICBzY3JlZW5TaWRlOiBcInJpZ2h0XCIgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWxzID0gW1xyXG4gICAgICAgICAgICBuZXcgTGV2ZWwoeyBpZDogMSwgbmFtZTogXCJDaW1ldGllcmVcIiB9KSxcclxuICAgICAgICAgICAgbmV3IExldmVsKHsgaWQ6IDIsIG5hbWU6IFwiUHJhaXJpZVwiIH0pLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IFtcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7IGlkOiAxLCBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIlN0ZXdcIiB9LCBzdGF0czoge30gfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoeyBpZDogMiwgZGV0YWlsczogeyBuaWNrbmFtZTogXCJDYXJvbGluZVwiIH0sIHN0YXRzOiB7fSB9KSxcclxuICAgICAgICAgICAgbmV3IENoYXJhY3Rlcih7IGlkOiAzLCBkZXRhaWxzOiB7IG5pY2tuYW1lOiBcIktyaXN0b2ZcIiB9LCBzdGF0czoge30gfSksXHJcbiAgICAgICAgICAgIG5ldyBDaGFyYWN0ZXIoeyBpZDogNCwgZGV0YWlsczogeyBuaWNrbmFtZTogXCJDbGF1ZGlhXCIgfSwgc3RhdHM6IHt9IH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHsgaWQ6IDUsIGRldGFpbHM6IHsgbmlja25hbWU6IFwiU3RldmVuXCIgfSwgc3RhdHM6IHt9IH0pLFxyXG4gICAgICAgICAgICBuZXcgQ2hhcmFjdGVyKHsgaWQ6IDYsIGRldGFpbHM6IHsgbmlja25hbWU6IFwiWm95YVwiIH0sIHN0YXRzOiB7fSB9KSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyBVc2luZyB0aGUgc2NlbmUgRGF0YSBNYW5hZ2VyIHRvIHN0b3JlIGRhdGEgb24gYSBzY2VuZSBsZXZlbC5cclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcjFcIiwgdGhpcy51c2VyMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcInVzZXIyXCIsIHRoaXMudXNlcjIpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJjaGFyYWN0ZXJzXCIsIHRoaXMuY2hhcmFjdGVycyk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImxldmVsc1wiLCB0aGlzLmxldmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQucGFjayhcInByZWxvYWRcIiwgXCJhc3NldHMvcGFjay5qc29uXCIsIFwicHJlbG9hZFwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPD0gdGhpcy5jaGFyYWN0ZXJzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZC5hdGxhcyhcclxuICAgICAgICAgICAgICAgIGBjaGFyYWN0ZXIke259YCxcclxuICAgICAgICAgICAgICAgIGBhc3NldHMvaW1hZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVyJHtufS9jaGFyYWN0ZXIke259LXNwcml0ZXNoZWV0LnBuZ2AsXHJcbiAgICAgICAgICAgICAgICBgYXNzZXRzL2ltYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlciR7bn0vY2hhcmFjdGVyJHtufS1hdGxhcy5qc29uYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmJpdG1hcEZvbnQoXHJcbiAgICAgICAgICAgICdHcm9ib2xkJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9mb250cy9ncm9ib2xkL2dyb2JvbGQucG5nJyxcclxuICAgICAgICAgICAgJ2Fzc2V0cy9mb250cy9ncm9ib2xkL2dyb2JvbGQuZm50J1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0JhciA9IG5ldyBMb2FkaW5nQmFyKHsgc2NlbmU6IHRoaXMgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbihcInByb2dyZXNzXCIsICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0Jhci5kcmF3KHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLnByb2dyZXNzVGV4dC5zZXRUZXh0KChNYXRoLmZsb29yKHZhbHVlICogMTAwKSkgKyBcIiVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5vbihcImNvbXBsZXRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQmFyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zb3VuZC5hZGQoXCJtZW51VGhlbWVcIikucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShnYW1lV2lkdGgodGhpcykgLyAyLCBnYW1lSGVpZ2h0KHRoaXMpIC8gMiwgXCJiYWNrZ3JvdW5kTWVudVwiKTtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShnYW1lV2lkdGgodGhpcykgLyAyLCAoZ2FtZUhlaWdodCh0aGlzKSAvIDIpIC0gNTAsIFwibWFpbkxvZ29cIik7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoZ2FtZVdpZHRoKHRoaXMpIC8gMiwgNTIsIFwiYm9yZGVyVG9wXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKGdhbWVXaWR0aCh0aGlzKSAvIDIsIGdhbWVIZWlnaHQodGhpcykgLSA1MiwgXCJib3JkZXJCb3R0b21cIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRTY2VuZUJ1dHRvbiA9IHRoaXMuYWRkLmltYWdlKGdhbWVXaWR0aCh0aGlzKSAvIDIsIGdhbWVIZWlnaHQodGhpcykgLSAyMTQsIFwidGV4dEJ1dHRvbldvb2RcIilcclxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgY3Vyc29yOiBcInBvaW50ZXJcIiB9KVxyXG4gICAgICAgICAgICAub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U2NlbmVCdXR0b24uc2V0VGV4dHVyZShcInRleHRCdXR0b25Xb29kU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbihcInBvaW50ZXJvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV4dFNjZW5lQnV0dG9uLnNldFRleHR1cmUoXCJ0ZXh0QnV0dG9uV29vZFwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5hZGQoXCJjbGlja1NvdW5kXCIpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLm9uY2UoUGhhc2VyLkNhbWVyYXMuU2NlbmUyRC5FdmVudHMuRkFERV9PVVRfQ09NUExFVEUsIChjYW0sIGVmZmVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJNZW51XCIsIHRoaXMuZGF0YS5nZXRBbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSB0ZXh0IG9uIG1haW4gYnV0dG9uXHJcbiAgICAgICAgdGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiBnYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICB5OiBnYW1lSGVpZ2h0KHRoaXMpIC0gMjE0LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlNUQVJUXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMud2hpdGUuc3RyaW5nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ09OVFJPTF9QMSwgQ09OVFJPTF9QMiwgZ2FtZUhlaWdodCwgZ2FtZVdpZHRoIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgQm9tYiB9IGZyb20gXCIuLi9vYmplY3RzL2JvbWJcIjtcclxuaW1wb3J0IHsgSHVkIH0gZnJvbSBcIi4uL29iamVjdHMvaHVkXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9vYmplY3RzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9oZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vb2JqZWN0cy9sZXZlbFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL29iamVjdHMvdXNlclwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25zIH0gZnJvbSBcIi4uL0FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL29iamVjdHMvY2hhcmFjdGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlR2FtZSB9IGZyb20gXCIuLi90eXBlcy9zdG9yZVwiO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6IFwiR2FtZVwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBHYW1lIFNjZW5lIGlzIHdoZXJlIGFsbCB0aGUgYWN0aW9ucyB0YWtlcyBwbGFjZS5cclxuICogQWN0b3JzIHN1Y2ggYXMgUGxheWVyLCBCb21icyBhbmQgQm9tYiBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBTdGF0aWMgZWxlbWVudHMgc3VjaCBhcyBIVURzIGFuZCBIZWFsdGhCYXJzICh2aWEgUGxheWVyKSBhcmUgaW5zdGFuY2lhdGVkLlxyXG4gKiBMZXZlbCBpcyBjcmVhdGVkIChub3QgaW5zdGFuY2lhdGVkKSwgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHRoYXQgVGlsZW1hcCBpc1xyXG4gKiBkcmF3bi4gQ29sbGlkZXJzIGJldHdlZW4gYWN0b3JzIGFyZSBoYW5kbGVkLiBQbGF5ZXIgYW5pbWF0aW9ucyBhcmUgY3JlYXRlZC5cclxuICogSXQgc2V0cyBhIFNjZW5lIFdpbm5lciB3aGVuIG9uZSBvZiB0aGUgdXNlcnMgUExBWUVSIElOU1RBTkNFUyBpcyBkZWFkIGFuZFxyXG4gKiB0aGVuIHN0YXJ0IHRoZSBuZXcgc2NlbmUgKEdhbWVvdmVyIFNjZW5lKS5cclxuICogSXQgdGFrZXMgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIE1lbnUgU2NlbmUgKGNvbXBvc2VkIG9mIGFuIGFycmF5IG9mIHVzZXJzKSxcclxuICogYXZhaWxhYmxlIGhlcmUgaW4gdGhlIGluaXQoKSBldCBjcmVhdGUoKSBjYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgcGxheWVyMTogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXIyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIGh1ZDE6IEh1ZDtcclxuICAgIHByaXZhdGUgaHVkMjogSHVkO1xyXG4gICAgcHJpdmF0ZSB0aWxlbWFwOiBMZXZlbFtcInRpbGVtYXBcIl07XHJcbiAgICBwcml2YXRlIGJvbWJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGNvbGxlY3RhYmxlczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBib21iQ3JlYXRpb25FdmVudDogUGhhc2VyLlRpbWUuVGltZXJFdmVudDtcclxuICAgIHByaXZhdGUgbmV3U2NlbmVUaW1lZEV2ZW50OiBQaGFzZXIuVGltZS5UaW1lckV2ZW50O1xyXG4gICAgcHJpdmF0ZSB3aW5uZXI6IFVzZXI7XHJcbiAgICBwcml2YXRlIHVzZXIxOiBVc2VyO1xyXG4gICAgcHJpdmF0ZSB1c2VyMjogVXNlcjtcclxuICAgIHByaXZhdGUgY29sbGVjdFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50R2FtZTogU3RvcmVHYW1lO1xyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sbGlkZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy50aWxlbWFwLm1haW5MYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib21icywgdGhpcy5wbGF5ZXIxLCAoYm9tYikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEuaHVydCgpO1xyXG4gICAgICAgICAgICBib21iLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJvbWJzLCB0aGlzLnBsYXllcjIsIChib21iKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5odXJ0KCk7XHJcbiAgICAgICAgICAgIGJvbWIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuY29sbGVjdGFibGVzLCB0aGlzLnRpbGVtYXAubWFpbkxheWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKFxyXG4gICAgICAgICAgICBbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdLFxyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RhYmxlcyxcclxuICAgICAgICAgICAgKHBsYXllcjogUGxheWVyLCBzdGFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY29sbGVjdFN0dWZmKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjIpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICBbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEsXHJcbiAgICAgICAgICAgIChwcm9qZWN0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEuaHVydCgpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucHJvamVjdGlsZXMsXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMixcclxuICAgICAgICAgICAgKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMi5odXJ0KCk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wcm9qZWN0aWxlcyxcclxuICAgICAgICAgICAgdGhpcy50aWxlbWFwLm1haW5MYXllcixcclxuICAgICAgICAgICAgKHByb2plY3RpbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RpbGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIyLnByb2plY3RpbGVzLFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVtYXAubWFpbkxheWVyLFxyXG4gICAgICAgICAgICAocHJvamVjdGlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG1lbnVTY2VuZURhdGE6IHsgdXNlcjE6IFVzZXI7IHVzZXIyOiBVc2VyOyBjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJbXTsgbGV2ZWxzOiBMZXZlbFtdOyB9KSB7XHJcbiAgICAgICAgdGhpcy51c2VyMSA9IG1lbnVTY2VuZURhdGEudXNlcjE7XHJcbiAgICAgICAgdGhpcy51c2VyMiA9IG1lbnVTY2VuZURhdGEudXNlcjI7XHJcblxyXG4gICAgICAgIEFuaW1hdGlvbnMuY3JlYXRlQ2hhcmFjdGVyQW5pbSh0aGlzLCB0aGlzLnVzZXIxKTtcclxuICAgICAgICBBbmltYXRpb25zLmNyZWF0ZUNoYXJhY3RlckFuaW0odGhpcywgdGhpcy51c2VyMik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudEdhbWUgPSB7XHJcbiAgICAgICAgICAgIHdpbm5lcjogJ25vbmUnLFxyXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB1c2VyMUNvbGxlY3Q6IDAsXHJcbiAgICAgICAgICAgIHVzZXIyQ29sbGVjdDogMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMudXNlcjEubGV2ZWxJbnN0YW5jZS5jcmVhdGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aWxlbWFwID0gdGhpcy51c2VyMS5sZXZlbEluc3RhbmNlLnRpbGVtYXA7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGVjdFNvdW5kID0gdGhpcy5zb3VuZC5hZGQoXCJjb2xsZWN0U291bmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGVjdGFibGVzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGtleTogJ2RpYW1vbmRQdXJwbGUnLFxyXG4gICAgICAgICAgICByZXBlYXQ6IDExLFxyXG4gICAgICAgICAgICBib3VuY2VYOiAwLjQsXHJcbiAgICAgICAgICAgIGJvdW5jZVk6IDAuNCxcclxuICAgICAgICAgICAgYWxsb3dHcmF2aXR5OiB0cnVlLFxyXG4gICAgICAgICAgICBncmF2aXR5WTogMzAwLFxyXG4gICAgICAgICAgICBzZXRYWToge1xyXG4gICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDE1MCAtIDE1ICsgMSkpICsgMTUsXHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgc3RlcFg6IDcwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib21icyA9IHRoaXMuYWRkLmdyb3VwKHsgcnVuQ2hpbGRVcGRhdGU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9tYkNyZWF0aW9uRXZlbnQgPSB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogNTAwMCxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9tYnMuYWRkKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBCb21iKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFBoYXNlci5NYXRoLkJldHdlZW4oNTAsIGdhbWVXaWR0aCh0aGlzKSAtIDUwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZUtleTogXCJib21iXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoe1xyXG4gICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgeDogMzAwLFxyXG4gICAgICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgICAgIHRleHR1cmVLZXk6IHRoaXMudXNlcjEuY2hhcmFjdGVySW5zdGFuY2UudGV4dHVyZUtleSxcclxuICAgICAgICAgICAgY29udHJvbEtleXM6IENPTlRST0xfUDEsXHJcbiAgICAgICAgICAgIGhlYWx0aEJhcjogbmV3IEhlYWx0aEJhcih7XHJcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcyxcclxuICAgICAgICAgICAgICAgIHNpZGU6IFwibGVmdFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcih7XHJcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICB4OiA5MDAsXHJcbiAgICAgICAgICAgIHk6IDMwMCxcclxuICAgICAgICAgICAgdGV4dHVyZUtleTogdGhpcy51c2VyMi5jaGFyYWN0ZXJJbnN0YW5jZS50ZXh0dXJlS2V5LFxyXG4gICAgICAgICAgICBjb250cm9sS2V5czogQ09OVFJPTF9QMixcclxuICAgICAgICAgICAgaGVhbHRoQmFyOiBuZXcgSGVhbHRoQmFyKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2lkZTogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odWQxID0gbmV3IEh1ZCh0aGlzLCB0aGlzLnVzZXIxKTtcclxuICAgICAgICB0aGlzLmh1ZDIgPSBuZXcgSHVkKHRoaXMsIHRoaXMudXNlcjIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldENvbGxpZGVycygpO1xyXG5cclxuICAgICAgICAvLyBUaGlzIGlzIHdoZXJlIHdlIGhhdmUgdXNlcjwtLT5wbGF5ZXIgY29uY29yZGFuY2VcclxuICAgICAgICB0aGlzLnVzZXIxLnBsYXllckluc3RhbmNlID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgIHRoaXMudXNlcjIucGxheWVySW5zdGFuY2UgPSB0aGlzLnBsYXllcjI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyMS51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnBsYXllcjIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIFdpbm5lciBoYW5kbGluZy5cclxuICAgICAgICAvLyBFbnRlciB3aW5uZXIgaGFuZGxpbmcgbW9kZSBpZiBvbmUgb2YgdGhlIHBsYXllciBpcyBkZWFkLlxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgfHwgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgcGxheWVycyBpbnZpY2libGUgd2hpbGUgd2FpdGluZyBmb3IgdGhlIG5leHQgc2NlbmUgdG8gc3RhcnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2F5IHdlIGRvbid0IGhhdmUgdG8gcGF1c2UgcGh5c2ljcyBidXQgdGhlIHdpbm5lciBpcyBub3RcclxuICAgICAgICAgICAgLy8ga2lsbGVkIGJ5IHRoZSBib21icyB0aGF0IGFyZSBzdGlsbCBmYWxsaW5nLlxyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEubWFrZUJ1bGxldFByb29mKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMi5tYWtlQnVsbGV0UHJvb2YoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY2lkaW5nIHdoaWNoIG9uZSBpcyB0aGUgd2lubmVyICh0aGUgb25lIG5vdCBkZWFkKS5cclxuICAgICAgICAgICAgLy8gV2lubmVycyBhcmUgdXNlcnMgbm90IHBsYXllcnMuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEuaXNEZWFkKCkgJiYgIXRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy51c2VyMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdhbWUud2lubmVyID0gXCJ1c2VyMlwiO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wbGF5ZXIxLmlzRGVhZCgpICYmIHRoaXMucGxheWVyMi5pc0RlYWQoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy51c2VyMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdhbWUud2lubmVyID0gXCJ1c2VyMVwiO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllcjIuaXNEZWFkKCkgJiYgdGhpcy5wbGF5ZXIyLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOdWxsaW5nIHRoZSB3aW5uZXIgaWYgdGhlcmUncyBubyB3aW5uZXIgYXQgYWxsXHJcbiAgICAgICAgICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyBzaG91bGRuJ3QgZXZlciBoYXBwZW4gYnV0IHdobyBrbm93cy5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGluIG5leHQgc2NlbmUgaWYgd2lubmVyIGlzIHRydXRoeSwgcHJpbnRpbmcgYWx0IHRleHRcclxuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCAobGlrZSBpZiBudWxsKS5cclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdhbWUud2lubmVyID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEdhbWUudXNlcjFDb2xsZWN0ID0gdGhpcy5wbGF5ZXIxLmNvbGxlY3RlZFN0dWZmO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRHYW1lLnVzZXIyQ29sbGVjdCA9IHRoaXMucGxheWVyMi5jb2xsZWN0ZWRTdHVmZjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ3aW5uZXJcIiwgdGhpcy53aW5uZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcjFcIiwgdGhpcy51c2VyMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2VyMlwiLCB0aGlzLnVzZXIyKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnNldCgnY3VycmVudEdhbWUnLCB0aGlzLmN1cnJlbnRHYW1lKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRocmVlIHNlY29uZHMgZGVsYXkgYmVmb3JlIGxhdW5jaGluZyB0aGUgbmV4dCBzY2VuZVxyXG4gICAgICAgICAgICB0aGlzLm5ld1NjZW5lVGltZWRFdmVudCA9IHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcIkdhbWVvdmVyXCIsIHRoaXMuZGF0YS5nZXRBbGwoKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBnYW1lV2lkdGgsIGdhbWVIZWlnaHQsIENPTE9SUywgREVGQVVMVF9GT05UX0ZBTUlMSUVTIH0gZnJvbSBcIi4uL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlLCBzZXRMb2NhbFN0b3JhZ2UsIGdldFVzZXJSYXRpbyB9IGZyb20gXCIuLi9zdG9yYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZUdhbWUgfSBmcm9tIFwiLi4vdHlwZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgTWVudVBpY2tlciB9IGZyb20gXCIuLi90eXBlcy9waWNrZXJcIjtcclxuaW1wb3J0IHsgTWVudVRpdGxlU3R5bGUgfSBmcm9tIFwiLi4vdHlwZXMvc3R5bGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy91c2VyXCI7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogXCJHYW1lb3ZlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVvdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBnYW1lczogU3RvcmVHYW1lW107XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlclBpY2tlclVzZXIxOiBNZW51UGlja2VyO1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJQaWNrZXJVc2VyMjogTWVudVBpY2tlcjtcclxuICAgIHByaXZhdGUgdGl0bGVTdHlsZTogTWVudVRpdGxlU3R5bGU7XHJcbiAgICBwcml2YXRlIHVzZXIxOiBVc2VyO1xyXG4gICAgcHJpdmF0ZSB1c2VyMjogVXNlcjtcclxuICAgIHByaXZhdGUgd2lubmVyOiBVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGdhbWVTY2VuZURhdGE6IHsgd2lubmVyOiBVc2VyOyB1c2VyMTogVXNlcjsgdXNlcjI6IFVzZXI7IGN1cnJlbnRHYW1lOiBTdG9yZUdhbWUgfSkge1xyXG4gICAgICAgIHRoaXMudXNlcjEgPSBnYW1lU2NlbmVEYXRhLnVzZXIxO1xyXG4gICAgICAgIHRoaXMudXNlcjIgPSBnYW1lU2NlbmVEYXRhLnVzZXIyO1xyXG4gICAgICAgIHRoaXMud2lubmVyID0gZ2FtZVNjZW5lRGF0YS53aW5uZXI7XHJcblxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKiBJTVBPUlRBTlQgLSBTRVRUSU5HIFVQIFNUT1JFIERBVEEgKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vIFQtMSBnYW1lc1xyXG4gICAgICAgIGNvbnN0IHsgZ2FtZXMgfSA9IGdldExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIC8vIFB1c2hpbmcgdGhlIG5ldyBnYW1lIChub3QgeWV0IHNhdmVkKVxyXG4gICAgICAgIGdhbWVzLnB1c2goZ2FtZVNjZW5lRGF0YS5jdXJyZW50R2FtZSk7XHJcbiAgICAgICAgLy8gU2F2aW5nIHRoZSBuZXcgZ2FtZSBpbiB0aGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZShnYW1lcyk7XHJcbiAgICAgICAgLy8gU2F2aW5nIHRoZSBnYW1lcyBpbiB0aGUgc2NlbmUgKFQtMSBvbmVzIGFuZCBuZXcgb25lKVxyXG4gICAgICAgIHRoaXMuZ2FtZXMgPSBnYW1lcztcclxuICAgICAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMSA9IHtcclxuICAgICAgICAgICAgd2luZG93OiB7IHg6IDI5MCwgeTogZ2FtZUhlaWdodCh0aGlzKSAvIDIgLSA5MCB9LFxyXG4gICAgICAgICAgICB0aXRsZTogeyB4OiAyOTAsIHk6IGdhbWVIZWlnaHQodGhpcykgLyAyIC0gMTg0IH0sXHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogeyB4OiAyOTAsIHk6IGdhbWVIZWlnaHQodGhpcykgLyAyIC0gMzYgfSxcclxuICAgICAgICAgICAgYnV0dG9uOiB7IHg6IDI5MCwgeTogZ2FtZUhlaWdodCh0aGlzKSAvIDIgKyA4NiB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyID0ge1xyXG4gICAgICAgICAgICB3aW5kb3c6IHsgeDogZ2FtZVdpZHRoKHRoaXMpIC0gMjkwLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiAtIDkwIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7IHg6IGdhbWVXaWR0aCh0aGlzKSAtIDI5MCwgeTogZ2FtZUhlaWdodCh0aGlzKSAvIDIgLSAxODQgfSxcclxuICAgICAgICAgICAgdGh1bWJuYWlsOiB7IHg6IGdhbWVXaWR0aCh0aGlzKSAtIDI5MCwgeTogZ2FtZUhlaWdodCh0aGlzKSAvIDIgLSAzNiB9LFxyXG4gICAgICAgICAgICBidXR0b246IHsgeDogZ2FtZVdpZHRoKHRoaXMpIC0gMjkwLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiArIDg2IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVTdHlsZSA9IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBjb2xvcjogQ09MT1JTLndoaXRlLnN0cmluZyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShnYW1lV2lkdGgodGhpcykgLyAyLCBnYW1lSGVpZ2h0KHRoaXMpIC8gMiwgXCJiYWNrZ3JvdW5kTWVudVwiKTtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShnYW1lV2lkdGgodGhpcykgLyAyLCA1MiwgXCJib3JkZXJUb3BcIik7XHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoZ2FtZVdpZHRoKHRoaXMpIC8gMiwgZ2FtZUhlaWdodCh0aGlzKSAtIDUyLCBcImJvcmRlckJvdHRvbVwiKTtcclxuXHJcbiAgICAgICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgLy8gKioqKioqKioqKioqKioqKiogRk9SIFBMQVlFUi9VU0VSIDEgKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLndpbmRvdy54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLndpbmRvdy55LFxyXG4gICAgICAgICAgICBcIndpbmRvd0JsYW5rXCJcclxuICAgICAgICApLnNldFNjYWxlKDAuNzAsIDAuNzApO1xyXG5cclxuICAgICAgICAvLyBDaGFyYWN0ZXIgb2YgcGxheWVyIDEgdGh1bWJuYWlsXHJcbiAgICAgICAgY29uc3QgY2hhclRodW1iUGxheWVyMSA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLnRodW1ibmFpbC54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLnRodW1ibmFpbC55LFxyXG4gICAgICAgICAgICB0aGlzLnVzZXIxLmNoYXJhY3Rlckluc3RhbmNlLnRodW1ibmFpbEtleVxyXG4gICAgICAgICkuc2V0U2NhbGUoMC44MCwgMC44MCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMS50aXRsZS54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLnRpdGxlLnksXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUExBWUVSIDFcIixcclxuICAgICAgICAgICAgc3R5bGU6IHRoaXMudGl0bGVTdHlsZSxcclxuICAgICAgICB9KS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMS5idXR0b24ueCxcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMS5idXR0b24ueSxcclxuICAgICAgICAgICAgXCJ0YWJXb29kXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjEuYnV0dG9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjEuYnV0dG9uLnksXHJcbiAgICAgICAgICAgIHRleHQ6IFwiUmF0aW8gXCIgKyBnZXRVc2VyUmF0aW8oJ3VzZXIxJykgKyBcIiVcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqIEZPUiBQTEFZRVIvVVNFUiAyICoqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi53aW5kb3cueCxcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi53aW5kb3cueSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dCbGFua1wiXHJcbiAgICAgICAgKS5zZXRTY2FsZSgwLjcwLCAwLjcwKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmFjdGVyIG9mIHBsYXllciAyIHRodW1ibmFpbFxyXG4gICAgICAgIGNvbnN0IGNoYXJUaHVtYlBsYXllcjIgPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi50aHVtYm5haWwueCxcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi50aHVtYm5haWwueSxcclxuICAgICAgICAgICAgdGhpcy51c2VyMi5jaGFyYWN0ZXJJbnN0YW5jZS50aHVtYm5haWxLZXlcclxuICAgICAgICApLnNldFNjYWxlKDAuODAsIDAuODApO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjIudGl0bGUueCxcclxuICAgICAgICAgICAgeTogdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi50aXRsZS55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBMQVlFUiAyXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRpdGxlU3R5bGUsXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjIuYnV0dG9uLngsXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjIuYnV0dG9uLnksXHJcbiAgICAgICAgICAgIFwidGFiV29vZFwiXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLmJ1dHRvbi54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLmJ1dHRvbi55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlJhdGlvIFwiICsgZ2V0VXNlclJhdGlvKCd1c2VyMicpICsgXCIlXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBERUZBVUxUX0ZPTlRfRkFNSUxJRVMsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMud2hpdGUuc3RyaW5nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqIEZPUiBXSU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgdGhpcy53aW5uZXIuaWQgPT09IHRoaXMudXNlcjEuaWQgPyB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLndpbmRvdy54IDogdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi53aW5kb3cueCxcclxuICAgICAgICAgICAgZ2FtZUhlaWdodCh0aGlzKSAvIDIgLSAxNDIsXHJcbiAgICAgICAgICAgIFwiZ29sZE1lZGFsXCJcclxuICAgICAgICApLnNldFNjYWxlKDAuMjcsIDAuMjcpO1xyXG5cclxuICAgICAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgLy8gKioqKioqKioqKioqKiogUkVHQU1FIEJVVFRPTiAqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dFNjZW5lQnV0dG9uID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIGdhbWVXaWR0aCh0aGlzKSAvIDIsXHJcbiAgICAgICAgICAgIGdhbWVIZWlnaHQodGhpcykgLSAxMjAsXHJcbiAgICAgICAgICAgIFwidGV4dEJ1dHRvbldvb2RcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnNldFNjYWxlKDAuOCwgMC44KVxyXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyBjdXJzb3I6IFwicG9pbnRlclwiIH0pXHJcbiAgICAgICAgICAgIC5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5leHRTY2VuZUJ1dHRvbi5zZXRUZXh0dXJlKFwidGV4dEJ1dHRvbldvb2RTZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U2NlbmVCdXR0b24uc2V0VGV4dHVyZShcInRleHRCdXR0b25Xb29kXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLmFkZChcImNsaWNrU291bmRcIikucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ub25jZShQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkV2ZW50cy5GQURFX09VVF9DT01QTEVURSwgKGNhbSwgZWZmZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcIk1lbnVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSB0ZXh0IG9uIG1lbnUgc2NlbmUgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiBnYW1lV2lkdGgodGhpcykgLyAyLFxyXG4gICAgICAgICAgICB5OiBnYW1lSGVpZ2h0KHRoaXMpIC0gMTIwLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk1FTlVcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI4cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGdhbWVXaWR0aCwgZ2FtZUhlaWdodCwgREVGQVVMVF9GT05UX0ZBTUlMSUVTLCBDT0xPUlMgfSBmcm9tIFwiLi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vb2JqZWN0cy9jaGFyYWN0ZXJcIjtcclxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vb2JqZWN0cy9sZXZlbFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL29iamVjdHMvdXNlclwiO1xyXG5pbXBvcnQgeyBNZW51UGlja2VyIH0gZnJvbSBcIi4vLi4vdHlwZXMvcGlja2VyXCI7XHJcbmltcG9ydCB7IE1lbnVUaXRsZVN0eWxlIH0gZnJvbSBcIi4vLi4vdHlwZXMvc3R5bGVcIjtcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiBcIk1lbnVcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHNjZW5lIGlzIHdoZXJlIHRoZSB0d28gcGxheWVycyBjaG9vc2UgdGhlIHRlcnJhaW4vbWFwIHRoZXkgd2lsbCBwbGF5IG9uLFxyXG4gKiBhbmQgdGhlIGNoYXJhY3RlcnMgdGhleSB3aWxsIHBsYXkgd2l0aC5cclxuICogSXQgbWFpbmx5IHVzZXMgbWV0aG9kcyBmcm9tIHRoZSBHdWkgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgbGV2ZWxUaHVtYjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xyXG4gICAgcHJpdmF0ZSBjbGlja1NvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgcHJpdmF0ZSBtYXBQaWNrZXI6IE1lbnVQaWNrZXI7XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlclBpY2tlclVzZXIxOiBNZW51UGlja2VyO1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJQaWNrZXJVc2VyMjogTWVudVBpY2tlcjtcclxuICAgIHByaXZhdGUgdGl0bGVTdHlsZTogTWVudVRpdGxlU3R5bGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoYm9vdFNjZW5lRGF0YTogeyB1c2VyMTogVXNlciwgdXNlcjI6IFVzZXIsIGNoYXJhY3RlcnM6IENoYXJhY3RlcltdLCBsZXZlbHM6IExldmVsW10gfSkge1xyXG4gICAgICAgIHRoaXMubWFwUGlja2VyID0ge1xyXG4gICAgICAgICAgICB3aW5kb3c6IHsgeDogMTgwLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiAtIDkwIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7IHg6IDE4MCwgeTogZ2FtZUhlaWdodCh0aGlzKSAvIDIgLSAxODQgfSxcclxuICAgICAgICAgICAgdGh1bWJuYWlsOiB7IHg6IDE4MCwgeTogZ2FtZUhlaWdodCh0aGlzKSAvIDIgLSAzNiB9LFxyXG4gICAgICAgICAgICBidXR0b246IHsgeDogMTgwLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiArIDk1IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjEgPSB7XHJcbiAgICAgICAgICAgIHdpbmRvdzogeyB4OiBnYW1lV2lkdGgodGhpcykgLyAyLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiAtIDkwIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7IHg6IGdhbWVXaWR0aCh0aGlzKSAvIDIsIHk6IGdhbWVIZWlnaHQodGhpcykgLyAyIC0gMTg0IH0sXHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogeyB4OiBnYW1lV2lkdGgodGhpcykgLyAyLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiAtIDMyIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbjogeyB4OiBnYW1lV2lkdGgodGhpcykgLyAyLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiArIDk1IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjIgPSB7XHJcbiAgICAgICAgICAgIHdpbmRvdzogeyB4OiBnYW1lV2lkdGgodGhpcykgLSAxODAsIHk6IGdhbWVIZWlnaHQodGhpcykgLyAyIC0gOTAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHsgeDogZ2FtZVdpZHRoKHRoaXMpIC0gMTgwLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiAtIDE4NCB9LFxyXG4gICAgICAgICAgICB0aHVtYm5haWw6IHsgeDogZ2FtZVdpZHRoKHRoaXMpIC0gMTgwLCB5OiBnYW1lSGVpZ2h0KHRoaXMpIC8gMiAtIDMyIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbjogeyB4OiBnYW1lV2lkdGgodGhpcykgLSAxODAsIHk6IGdhbWVIZWlnaHQodGhpcykgLyAyICsgOTUgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aXRsZVN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMud2hpdGUuc3RyaW5nLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTG9hZGluZyBib290IHNjZW5lIGRhdGEgaW50byB0aGlzIHNjZW5lIGRhdGEgbWFuYWdlclxyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoXCJ1c2VyMVwiLCBib290U2NlbmVEYXRhLnVzZXIxKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcjJcIiwgYm9vdFNjZW5lRGF0YS51c2VyMik7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNldChcImNoYXJhY3RlcnNcIiwgYm9vdFNjZW5lRGF0YS5jaGFyYWN0ZXJzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwibGV2ZWxzXCIsIGJvb3RTY2VuZURhdGEubGV2ZWxzKTtcclxuXHJcbiAgICAgICAgLy8gU2V0dGluZyB1cCB1c2VycyBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2VyMVwiKS5sZXZlbEluc3RhbmNlID0gdGhpcy5kYXRhLmdldChcImxldmVsc1wiKS5hdCgwKTtcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcjFcIikuY2hhcmFjdGVySW5zdGFuY2UgPSB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5hdCgwKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLmdldChcInVzZXIyXCIpLmxldmVsSW5zdGFuY2UgPSB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpLmF0KDApO1xyXG4gICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2VyMlwiKS5jaGFyYWN0ZXJJbnN0YW5jZSA9IHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpLmF0KDApO1xyXG5cclxuICAgICAgICB0aGlzLmNsaWNrU291bmQgPSB0aGlzLnNvdW5kLmFkZChcImNsaWNrU291bmRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC5pbWFnZShnYW1lV2lkdGgodGhpcykgLyAyLCBnYW1lSGVpZ2h0KHRoaXMpIC8gMiwgXCJiYWNrZ3JvdW5kTWVudVwiKTtcclxuXHJcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXHJcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKiBDSE9PU0UgTUFQICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXHJcbiAgICAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8vXHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5lciBmb3IgdGhlIG1hcCB0aHVtYm5haWxzXHJcbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMubWFwUGlja2VyLndpbmRvdy54LFxyXG4gICAgICAgICAgICB0aGlzLm1hcFBpY2tlci53aW5kb3cueSxcclxuICAgICAgICAgICAgXCJ3aW5kb3dCbGFua1wiXHJcbiAgICAgICAgKS5zZXRTY2FsZSgwLjcwLCAwLjcwKTtcclxuXHJcbiAgICAgICAgLy8gTWFwIHRodW1ibmFpbFxyXG4gICAgICAgIHRoaXMubGV2ZWxUaHVtYiA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLm1hcFBpY2tlci50aHVtYm5haWwueCxcclxuICAgICAgICAgICAgdGhpcy5tYXBQaWNrZXIudGh1bWJuYWlsLnksXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJsZXZlbHNcIikuYXQoMCkudGh1bWJuYWlsS2V5XHJcbiAgICAgICAgKS5zZXRTY2FsZSgwLjcwLCAwLjcwKTtcclxuXHJcbiAgICAgICAgLy8gVGV4dCBpbmRpY2F0aW9uXHJcbiAgICAgICAgdGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiB0aGlzLm1hcFBpY2tlci50aXRsZS54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLm1hcFBpY2tlci50aXRsZS55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlRFUlJBSU5cIixcclxuICAgICAgICAgICAgc3R5bGU6IHRoaXMudGl0bGVTdHlsZVxyXG4gICAgICAgIH0pLnNldE9yaWdpbigwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgIC8vIE5leHQgbWFwIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IG5leE1hcEJ1dHRvbiA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLm1hcFBpY2tlci5idXR0b24ueCxcclxuICAgICAgICAgICAgdGhpcy5tYXBQaWNrZXIuYnV0dG9uLnksXHJcbiAgICAgICAgICAgIFwidGFiV29vZFwiXHJcbiAgICAgICAgKS5zZXRJbnRlcmFjdGl2ZSh7XHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICB9KS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbmV4TWFwQnV0dG9uLnNldFRleHR1cmUoXCJ0YWJXb29kU2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfSkub24oXCJwb2ludGVyb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgbmV4TWFwQnV0dG9uLnNldFRleHR1cmUoXCJ0YWJXb29kXCIpO1xyXG4gICAgICAgIH0pLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwibGV2ZWxzXCIpLnB1c2godGhpcy5kYXRhLmdldChcImxldmVsc1wiKS5zaGlmdCgpKTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFRodW1iLnNldFRleHR1cmUodGhpcy5kYXRhLmdldChcImxldmVsc1wiKS5hdCgwKS50aHVtYm5haWxLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwidXNlcjFcIikubGV2ZWxJbnN0YW5jZSA9IHRoaXMuZGF0YS5nZXQoXCJsZXZlbHNcIikuYXQoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2VyMlwiKS5sZXZlbEluc3RhbmNlID0gdGhpcy5kYXRhLmdldChcImxldmVsc1wiKS5hdCgwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTmV3IG1hcCBidXR0b24gdGV4dFxyXG4gICAgICAgIHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogdGhpcy5tYXBQaWNrZXIuYnV0dG9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMubWFwUGlja2VyLmJ1dHRvbi55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblxyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqIENIT09TRSBDSEFSQUNURVIgMSAqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgZm9yIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlscyBvZiBwbGF5ZXIgMVxyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLndpbmRvdy54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLndpbmRvdy55LFxyXG4gICAgICAgICAgICBcIndpbmRvd0JsYW5rXCJcclxuICAgICAgICApLnNldFNjYWxlKDAuNzAsIDAuNzApO1xyXG5cclxuICAgICAgICAvLyBDaGFyYWN0ZXIgb2YgcGxheWVyIDEgdGh1bWJuYWlsXHJcbiAgICAgICAgY29uc3QgY2hhclRodW1iUGxheWVyMSA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLnRodW1ibmFpbC54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLnRodW1ibmFpbC55LFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5hdCgwKS50aHVtYm5haWxLZXlcclxuICAgICAgICApLnNldFNjYWxlKDAuODAsIDAuODApO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjEudGl0bGUueCxcclxuICAgICAgICAgICAgeTogdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMS50aXRsZS55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBMQVlFUiAxXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRpdGxlU3R5bGUsXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgLy8gTmV4dCBjaGFyYWN0ZXIgYnV0dG9uIGZvciBwbGF5ZXIgMVxyXG4gICAgICAgIGNvbnN0IG5leHRDaGFyUGxheWVyMSA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLmJ1dHRvbi54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLmJ1dHRvbi55LFxyXG4gICAgICAgICAgICBcInRhYldvb2RcIlxyXG4gICAgICAgICkuc2V0SW50ZXJhY3RpdmUoe1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgfSkub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRDaGFyUGxheWVyMS5zZXRUZXh0dXJlKFwidGFiV29vZFNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0pLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRDaGFyUGxheWVyMS5zZXRUZXh0dXJlKFwidGFiV29vZFwiKTtcclxuICAgICAgICB9KS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcImNoYXJhY3RlcnNcIikucHVzaCh0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5zaGlmdCgpKTtcclxuICAgICAgICAgICAgY2hhclRodW1iUGxheWVyMS5zZXRUZXh0dXJlKHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpWzBdLnRodW1ibmFpbEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2VyMVwiKS5jaGFyYWN0ZXJJbnN0YW5jZSA9IHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpWzBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBOZXcgY2hhcmFjdGVyIGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgdGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLmJ1dHRvbi54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIxLmJ1dHRvbi55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblxyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqIENIT09TRSBDSEFSQUNURVIgMiAqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG5cclxuICAgICAgICAvLyBDb250YWluZXIgZm9yIHRoZSBjaGFyYWN0ZXIgdGh1bWJuYWlscyBvZiBwbGF5ZXIgMlxyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLndpbmRvdy54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLndpbmRvdy55LFxyXG4gICAgICAgICAgICBcIndpbmRvd0JsYW5rXCJcclxuICAgICAgICApLnNldFNjYWxlKDAuNzAsIDAuNzApO1xyXG5cclxuICAgICAgICAvLyBDaGFyYWN0ZXIgb2YgcGxheWVyIDIgdGh1bWJuYWlsXHJcbiAgICAgICAgY29uc3QgY2hhclRodW1iUGxheWVyMiA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLnRodW1ibmFpbC54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLnRodW1ibmFpbC55LFxyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5hdCgwKS50aHVtYm5haWxLZXlcclxuICAgICAgICApLnNldFNjYWxlKDAuODAsIDAuODApO1xyXG5cclxuICAgICAgICB0aGlzLm1ha2UudGV4dCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuY2hhcmFjdGVyUGlja2VyVXNlcjIudGl0bGUueCxcclxuICAgICAgICAgICAgeTogdGhpcy5jaGFyYWN0ZXJQaWNrZXJVc2VyMi50aXRsZS55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBMQVlFUiAyXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRpdGxlU3R5bGUsXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcbiAgICAgICAgLy8gTmV4dCBjaGFyYWN0ZXIgYnV0dG9uIGZvciBwbGF5ZXIgMVxyXG4gICAgICAgIGNvbnN0IG5leHRDaGFyUGxheWVyMiA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLmJ1dHRvbi54LFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLmJ1dHRvbi55LFxyXG4gICAgICAgICAgICBcInRhYldvb2RcIlxyXG4gICAgICAgICkuc2V0SW50ZXJhY3RpdmUoe1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXHJcbiAgICAgICAgfSkub24oXCJwb2ludGVyb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRDaGFyUGxheWVyMi5zZXRUZXh0dXJlKFwidGFiV29vZFNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0pLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRDaGFyUGxheWVyMi5zZXRUZXh0dXJlKFwidGFiV29vZFwiKTtcclxuICAgICAgICB9KS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja1NvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdldChcImNoYXJhY3RlcnNcIikucHVzaCh0aGlzLmRhdGEuZ2V0KFwiY2hhcmFjdGVyc1wiKS5zaGlmdCgpKTtcclxuICAgICAgICAgICAgY2hhclRodW1iUGxheWVyMi5zZXRUZXh0dXJlKHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpWzBdLnRodW1ibmFpbEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5nZXQoXCJ1c2VyMVwiKS5jaGFyYWN0ZXJJbnN0YW5jZSA9IHRoaXMuZGF0YS5nZXQoXCJjaGFyYWN0ZXJzXCIpWzBdO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBOZXcgY2hhcmFjdGVyIGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgdGhpcy5tYWtlLnRleHQoe1xyXG4gICAgICAgICAgICB4OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLmJ1dHRvbi54LFxyXG4gICAgICAgICAgICB5OiB0aGlzLmNoYXJhY3RlclBpY2tlclVzZXIyLmJ1dHRvbi55LFxyXG4gICAgICAgICAgICB0ZXh0OiBcIk5FWFRcIixcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IERFRkFVTFRfRk9OVF9GQU1JTElFUyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy53aGl0ZS5zdHJpbmcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuc2V0T3JpZ2luKDAuNSwgMC41KTtcclxuXHJcblxyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBEQVRBICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIE1PRElGSUVEIHVzZXJzIGRhdGEgZnJvbSB0aGUgYm9vdCBzY2VuZSB0byB0aGlzIGFjdHVhbCBzY2VuZS5cclxuICAgICAgICAvLyBBdCB0aGlzIHN0YWdlIGFuZCBub3QgZWFybGllciwgYmVjYXVzZSBsZXZlbCBhbmQgY2hhcmFjdGVycyBpbnN0YW5jZXMgaGFzIGJlZW4gbGlua2VkIHRvXHJcbiAgICAgICAgLy8gZWFjaCB1c2VycyB0aGFua3MgdG8gdGhlIHNsaWRlIGJ1dHRvbnMgY2FsbGJhY2tzIGFuZCB0aGUgdGh1bWJuYWlscy5cclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcjFcIiwgdGhpcy5kYXRhLmdldChcInVzZXIxXCIpKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2V0KFwidXNlcjJcIiwgdGhpcy5kYXRhLmdldChcInVzZXIyXCIpKTtcclxuXHJcblxyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKiogU1RBUlQgR0FNRSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG4gICAgICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovL1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0U2NlbmVCdXR0b24gPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgZ2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgZ2FtZUhlaWdodCh0aGlzKSAtIDEwMCxcclxuICAgICAgICAgICAgXCJ0ZXh0QnV0dG9uV29vZFwiXHJcbiAgICAgICAgKS5zZXRJbnRlcmFjdGl2ZSh7XHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcclxuICAgICAgICB9KS5vbihcInBvaW50ZXJvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgbmV4dFNjZW5lQnV0dG9uLnNldFRleHR1cmUoXCJ0ZXh0QnV0dG9uV29vZFNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0pLm9uKFwicG9pbnRlcm91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5leHRTY2VuZUJ1dHRvbi5zZXRUZXh0dXJlKFwidGV4dEJ1dHRvbldvb2RcIik7XHJcbiAgICAgICAgfSkub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmQuYWRkKFwiY2xpY2tTb3VuZFwiKS5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ub25jZShQaGFzZXIuQ2FtZXJhcy5TY2VuZTJELkV2ZW50cy5GQURFX09VVF9DT01QTEVURSwgKGNhbSwgZWZmZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJHYW1lXCIsIHRoaXMuZGF0YS5nZXRBbGwoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGUgdGV4dCBvbiBtYWluIGJ1dHRvblxyXG4gICAgICAgIHRoaXMubWFrZS50ZXh0KHtcclxuICAgICAgICAgICAgeDogZ2FtZVdpZHRoKHRoaXMpIC8gMixcclxuICAgICAgICAgICAgeTogZ2FtZUhlaWdodCh0aGlzKSAtIDEwMCxcclxuICAgICAgICAgICAgdGV4dDogXCJTVEFSVFwiLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogREVGQVVMVF9GT05UX0ZBTUlMSUVTLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTLndoaXRlLnN0cmluZyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5zZXRPcmlnaW4oMC41LCAwLjUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gXCIuL0Jvb3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tIFwiLi9NZW51U2NlbmVcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4vR2FtZVNjZW5lXCI7XHJcbmltcG9ydCB7IEdhbWVvdmVyU2NlbmUgfSBmcm9tIFwiLi9HYW1lb3ZlclNjZW5lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBCb290U2NlbmUsXHJcbiAgICBNZW51U2NlbmUsXHJcbiAgICBHYW1lU2NlbmUsXHJcbiAgICBHYW1lb3ZlclNjZW5lXHJcbl07XHJcbiIsImltcG9ydCB7IFN0b3JlR2FtZSB9IGZyb20gJy4vdHlwZXMvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZSgpOiB7IGdhbWVzOiBTdG9yZUdhbWVbXSB9IHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaG9hZmlnaHQnKTtcclxuICAgIGlmIChkYXRhKSByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHJldHVybiB7IGdhbWVzOiBbXSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGdhbWVzOiBTdG9yZUdhbWVbXSk6IHZvaWQge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvYWZpZ2h0JywgSlNPTi5zdHJpbmdpZnkoeyBnYW1lcyB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyUmF0aW8odXNlcjogJ3VzZXIxJyB8ICd1c2VyMicpOiBudW1iZXIge1xyXG4gICAgY29uc3QgeyBnYW1lcyB9ID0gZ2V0TG9jYWxTdG9yYWdlKCk7XHJcbiAgICBjb25zdCB3b24gPSBnYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUud2lubmVyID09PSB1c2VyKS5sZW5ndGg7XHJcbiAgICBjb25zdCBhbGwgPSBnYW1lcy5sZW5ndGg7XHJcbiAgICBjb25zdCByYXRpbyA9ICgod29uIC8gYWxsKSAqIDEwMCkgfHwgMDtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHJhdGlvKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9