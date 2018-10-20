module objects {
    export class Cloud extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("cloud");

            this.Start();
        }

        // private methods
        private _move():void {
            
            switch(managers.Game.currentState){
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
            

            switch(managers.Game.currentState){
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