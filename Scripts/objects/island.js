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
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // public properties
        // constructor
        function Island() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        /*
                switch(managers.Game.currentState){
                    case config.Scene.PLAY:
                    break;
                    case config.Scene.LEVEL2:
                    break;
                }
         */
        // private methods
        Island.prototype._move = function () {
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    this.y += this._verticalSpeed;
                    this._updatePosition();
                    break;
                case config.Scene.LEVEL2:
                    this.x -= this._verticalSpeed;
                    this._updatePosition();
                    break;
                case config.Scene.LEVEL3:
                    this.x += this._verticalSpeed;
                    this._updatePosition();
                    break;
            }
        };
        Island.prototype._checkBounds = function () {
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
        Island.prototype.Reset = function () {
            this._verticalSpeed = 5;
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    this.y = -this.Height;
                    this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
                    this.IsColliding = false;
                    break;
                case config.Scene.LEVEL2:
                    this.x = 640 + this.Width;
                    this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                    this.IsColliding = false;
                    break;
                case config.Scene.LEVEL3:
                    this.x = 0 - this.Width;
                    this.y = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                    this.IsColliding = false;
                    break;
            }
        };
        Island.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        };
        Island.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Island.prototype.Destroy = function () {
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map