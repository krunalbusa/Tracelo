import React from "react";
import firstimg from "../images/first-icon.png"
import secondimg from "../images/second-icon.png"
import thirdimg from "../images/third-icon.png"
import fourthimg from "../images/fourth-icon.png"

export default function WhyTracelo(){
    return(
        <div className="W-T-main" >
            <div className="W-T-head" id="whytracelo"><h1>Why Choose Tracelo</h1></div>
            <div className="W-T-head-contain"><h6>One click and zero effort to find anyone's location across the globe</h6></div>

            {/*first component*/}
            <div className="W-T-first">
                <img className="W-T-first-img" src={firstimg} alt=""/>
                <div className="W-T-First-Text-1">
                    <b>"invisible" service</b>
                </div>
                <div className="W-T-First-Text-2">
                    <p>The owner of the phone will not know who tried to locate it. The service is invisible and sends notification directly to your device.</p>
                </div>
            </div>


            {/*second component*/}
            <div className="W-T-second"> 
                <img className="W-T-second-img" src={secondimg} alt=""/>
                <div className="W-T-second-Text-1">
                    <b>Skip installtion</b>
                </div>
                <div className="W-T-second-Text-2">
                    <p>No need to install the app on the other end. Just enter their number and Localize gets to work. Really. That's it.</p>
                </div> 
            </div>


            {/*third component*/}
            <div className="W-T-third">
                <img className="W-T-third-img" src={thirdimg} alt=""/>
                <div className="W-T-third-Text-1">
                    <b>Work for all phones and carries</b>
                </div>
                <div className="W-T-third-Text-2">
                    <p>Need to find an old phone? Or is your phone lost with a local South African sim card? Localize operates on all phone and carries.</p>
                </div> 
            </div>
            


            {/*fourth component*/}
            <div className="W-T-fourth">
            <img className="W-T-fourth-img" src={fourthimg} alt=""/>
            <div className="W-T-fourth-Text-1">
                    <b>Skip installtion</b>
            </div>
            <div className="W-T-fourth-Text-2">
                    <p>Whatever phone is, Localize works like magic. in fact, you don't even need to know the phone model to find it.</p>
            </div> 

            <button className="W-T-btn">Locate phone</button>

            </div>

        
        </div>


    )
}