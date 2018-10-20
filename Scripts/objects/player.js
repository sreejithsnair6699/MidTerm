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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // private instance variables
        // public properties
        // constructors
        function Player() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Player.prototype.Start = function () {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    this.y = 435;
                    break;
                case config.Scene.LEVEL2:
                    this.x = 45;
                    break;
                case config.Scene.LEVEL3:
                    this.x = 595;
                    break;
            }
        };
        Player.prototype.Update = function () {
            switch (managers.Game.currentState) {
                case config.Scene.PLAY:
                    this.x = managers.Game.stage.mouseX;
                    this._updatePosition();
                    // checks the right boundary
                    if (this.x > 640 - this.HalfWidth) {
                        this.x = 640 - this.HalfWidth;
                    }
                    // check the left boundary
                    if (this.x < this.HalfWidth) {
                        this.x = this.HalfWidth;
                    }
                    break;
                case config.Scene.LEVEL2:
                    this.rotation = 90;
                    this.y = managers.Game.stage.mouseY;
                    this._updatePosition();
                    // checks the bottom boundary
                    if (this.y > 480 - this.HalfHeight) {
                        this.y = 480 - this.HalfHeight;
                    }
                    // check the top boundary
                    if (this.y < this.HalfHeight) {
                        this.y = this.HalfHeight;
                    }
                    break;
                case config.Scene.LEVEL3:
                    this.rotation = 270;
                    this.y = managers.Game.stage.mouseY;
                    this._updatePosition();
                    // checks the bottom boundary
                    if (this.y > 480 - this.HalfHeight) {
                        this.y = 480 - this.HalfHeight;
                    }
                    // check the top boundary
                    if (this.y < this.HalfHeight) {
                        this.y = this.HalfHeight;
                    }
                    break;
            }
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Destroy = function () {
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map