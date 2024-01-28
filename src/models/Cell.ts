import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";



export class Cell  {
    
    readonly x:number;
    readonly y:number;
    readonly color:Colors;
    figure:Figure | null;
    id:number
    available:boolean;

    constructor(x:number,y:number,color:Colors,figure:Figure | null){ 
        this.x=x;
        this.y=y;
        this.color=color
        this.figure=figure;
        this.id=Math.random()
        this.available=false
    }
   

    moveFigure(target: Cell) {
        if(this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target)

            target.figure=this.figure
            this.figure = null;
             }
            }
   

}