module objects {
    export class Island extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("island");

            this.Start();
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
        private _move():void {
            switch(managers.Game.currentState){
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
            
        }

        private _checkBounds():void {
            switch(managers.Game.currentState){
                case config.Scene.PLAY:
                if(this.y > 480 + this.Height) {
                    this.Reset();
                }
                break;
                case config.Scene.LEVEL2:
                if(this.x < 0 - this.Width) {
                    this.Reset();
                }
                break;
                case config.Scene.LEVEL3:
                if(this.x > 640 + this.Width) {
                    this.Reset();
                }
                break;
            }
            
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = 5;
            switch(managers.Game.currentState){
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
            
        }        
        
        public Start(): void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}