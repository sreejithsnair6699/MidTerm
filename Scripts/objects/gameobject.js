var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // constructors
        function GameObject(imageString) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "Width", {
            // public properties
            get: function () {
                return this._width;
            },
            set: function (newValue) {
                this._width = newValue;
                this.HalfWidth = this._width * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newValue) {
                this._height = newValue;
                this.HalfHeight = this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "HalfHeight", {
            get: function () {
                return this._halfHeight;
            },
            set: function (newValue) {
                this._halfHeight = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            set: function (newValue) {
                this._halfWidth = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "IsColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newValue) {
                this._isColliding = newValue;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        GameObject.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.Position = new util.Vector2(this.x, this.y);
            this.IsColliding = false;
        };
        GameObject.prototype._updatePosition = function () {
            this.Position.x = this.x;
            this.Position.y = this.y;
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map