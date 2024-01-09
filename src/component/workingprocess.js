import React from "react";
import design from "../images/design1.png"
import arrow from "../images/small-arrow.png"
export default function WrokingProcess(){
    return(
        <div className="W-P-main">

            {/* head */}
            <div className="W-P-head" id="process"><p>How Does It Work?</p></div>

            {/* comp - 1 */}
            <div className="W-P-comp-1">
                <img className="W-P-comp-1-design" src={design} alt=""/>
                <div className="W-P-comp-1-round">
                    <p className="W-P-comp-1-round-text">1</p>
                </div>
                <div className="W-P-comp-1-text-1">
                    <p>Phone Number</p>
                </div> 
                <div className="W-P-comp-1-text-2">
                    <p>Enter their phone number and the text of the message.</p>
                </div> 
                <div className="W-P-comp-1-arrow">
                    <img className="W-P-comp-1-arrow-img" src={arrow} alt=""/>
                </div>
            
            </div>


            {/* comp - 2 */}
            <div className="W-P-comp-2">
                <img className="W-P-comp-2-design" src={design} alt=""/>
                <div className="W-P-comp-2-round">
                    <p className="W-P-comp-2-round-text">2</p>
                </div>  
                <div className="W-P-comp-2-text-1">
                    <p>Hook</p>
                </div> 
                <div className="W-P-comp-2-text-2">
                    <p>Locateperso sends an SMS containing the tracking link directly to their device.</p>
                </div> 
                <div className="W-P-comp-2-arrow">
                    <img className="W-P-comp-3-arrow-img" src={arrow} alt=""/>
                </div>           
            
            </div>


            {/* comp - 3 */}
            <div className="W-P-comp-3">
                <img className="W-P-comp-3-design" src={design} alt=""/>
                <div className="W-P-comp-3-round">
                    <p className="W-P-comp-3-round-text">3</p>
                </div> 
                <div className="W-P-comp-3-text-1">
                    <p>Locate</p>
                </div>
                <div className="W-P-comp-3-text-2">
                    <p>They tap the link, and it's location is shared.</p>
                </div>                 
                <div className="W-P-comp-3-arrow">
                    <img className="W-P-comp-3-arrow-img" src={arrow} alt=""/>
                </div> 
            
            </div>
            

        </div>
    )
    
}