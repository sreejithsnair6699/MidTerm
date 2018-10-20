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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // public properties
        // constructor
        function Cloud() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Cloud.prototype._move = function () {
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    this.y += this._verticalSpeed;
                    this.x += this._horizontalSpeed;
                    this._updatePosition();
                    break;
                case config.Scene.LEVEL2:
                    this.y += this._verticalSpeed;
                    this.x -= this._horizontalSpeed;
                    this._updatePosition();
                    break;
                case config.Scene.LEVEL3:
                    this.y += this._verticalSpeed;
                    this.x += this._horizontalSpeed;
                    this._updatePosition();
                    break;
            }
        };
        Cloud.prototype._checkBounds = function () {
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    if (this.y > 480 + this.Height) {
                        this.Reset();
                    }
                    break;
                case config.Scene.LEVEL2:
                    if (this.x < 0 - this.Width) {
                        this.Reset();
                    }
                    break;
                case config.Scene.LEVEL3:
                    if (this.x > 640 + this.Width) {
                        this.Reset();
                    }
                    break;
            }
        };
        // public methods
        Cloud.prototype.Reset = function () {
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    this._verticalSpeed = Math.floor((Math.random() * 5) + 5);
                    this._horizontalSpeed = Math.floor((Math.random() * 4) - 2);
                    this.y = -this.Height;
                    this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
                    this.IsColliding = false;
                    break;
                case config.Scene.LEVEL2:
                    this._verticalSpeed = Math.floor((Math.random() * 2) - 1);
                    this._horizontalSpeed = Math.floor((Math.random() * 5) + 5);
                    this.x = 640 + this.Width;
                    this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                    this.IsColliding = false;
                    break;
                case config.Scene.LEVEL3:
                    this._verticalSpeed = Math.floor((Math.random() * 2) - 1);
                    this._horizontalSpeed = Math.floor((Math.random() * 5) + 5);
                    this.x = 0 - this.Width;
                    this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                    this.IsColliding = false;
                    break;
            }
        };
        Cloud.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Cloud.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Cloud.prototype.Destroy = function () {
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map