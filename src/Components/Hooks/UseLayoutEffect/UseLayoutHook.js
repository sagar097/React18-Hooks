import { Fragment } from "react";
import Flicker from "./Flicker";
import TooltipRenderer from "./TooltipRenderer";


function UseLayoutHook() {
    return (
        <Fragment>
            <TooltipRenderer/>
            <Flicker color={"rgb(42, 13, 37)"}/>
        </Fragment>
       
    );
}

export default UseLayoutHook;