import { Cell } from "../models/Cell";
import { FC } from "react";
interface CellProps{
cell:Cell
selected:boolean;
click:(cell:Cell)=>void;
}

const CellComponent :FC<CellProps>=({cell,selected,click}) => {
   
   
    return ( 
        <div 
        onClick={()=>click(cell)} 
            className={["cell",cell.color,selected ? "selected" : ''].join(' ')}
        style={{background: cell.available && cell.figure ? 'green' : ''}}

        >
            {cell.available && !cell.figure && <div className="available"/>}

            {cell.figure?.logo && <img src={cell.figure.logo}></img>}
            
        </div>
        );
}
 
export default CellComponent;