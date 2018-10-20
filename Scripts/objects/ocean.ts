module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private verticalSpeed:number;
        private firstIteration:boolean = true;

        // public properties

        // constructor
        constructor() {
            super("ocean");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            switch(managers.Game.currentState){
                case config.Scene.START:
                if(this.y >=0) {
                    this.Reset();
                }
                break;
                case config.Scene.PLAY:
                if(this.y >=0) {
                    this.Reset();
                }
                break;
                case config.Scene.LEVEL2:
                if(this.x <=640) {
                    this.Reset();                    
                }
                break;
                case config.Scene.LEVEL3:
                if(this.x >=1440) {
                    this.Reset();                    
                }
                break;
                case config.Scene.OVER:
                if(this.y >=0) {
                    this.Reset();
                }
                break;
            }
        }

        private _move():void {
            switch(managers.Game.currentState){                
                case config.Scene.START:
                this.y += this.verticalSpeed;
                break;
                case config.Scene.PLAY:
                this.y += this.verticalSpeed;
                break;
                case config.Scene.LEVEL2:
                this.x -= this.verticalSpeed;
                break;  
                case config.Scene.LEVEL3:
                this.x += this.verticalSpeed;
                break;             
                case config.Scene.OVER:
                this.y += this.verticalSpeed;
                break;
            }
        }

        // public methods

        public Reset(): void {
            switch(managers.Game.currentState){
                case config.Scene.START:
                this.y = -960;
                break;
                case config.Scene.PLAY:
                this.y = -960;
                break;
                case config.Scene.LEVEL2:
                this.x = 1440;
                break;
                case config.Scene.LEVEL3:
                this.x = 640;
                break;
                case config.Scene.OVER:
                this.y = -960;
                break;
            }
            
        }        
        
        public Start(): void {
            if(managers.Game.currentState == config.Scene.LEVEL2 || managers.Game.currentState == config.Scene.LEVEL3){      
                this.rotation = 90;
            }
            this.Reset();
            this.verticalSpeed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
            
        }

        public Destroy(): void {
            
        }

    }
}