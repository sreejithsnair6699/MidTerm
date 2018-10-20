module objects {
    export class Player extends objects.GameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            switch(managers.Game.currentState){
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

            
        }

        public Update():void {

            switch(managers.Game.currentState){
                case config.Scene.PLAY:
                this.x = managers.Game.stage.mouseX;
                this._updatePosition();
                // checks the right boundary
                if(this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
                }

                // check the left boundary
                if(this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
                }
                break;

                case config.Scene.LEVEL2:
                this.rotation = 90;
                this.y = managers.Game.stage.mouseY;
                this._updatePosition();
                // checks the bottom boundary
                if(this.y > 480 - this.HalfHeight) {
                    this.y = 480 - this.HalfHeight;
                }
    
                // check the top boundary
                if(this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
                }
                break;

                case config.Scene.LEVEL3:
                this.rotation = 270;
                this.y = managers.Game.stage.mouseY;
                this._updatePosition();
                // checks the bottom boundary
                if(this.y > 480 - this.HalfHeight) {
                    this.y = 480 - this.HalfHeight;
                }
    
                // check the top boundary
                if(this.y < this.HalfHeight) {
                this.y = this.HalfHeight;
                }
                break;
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}