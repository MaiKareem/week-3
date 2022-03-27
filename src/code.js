import React, {Component} from "react";
import image from "./Lens.jpg"
import { Player } from "video-react";
import "./Style.css"
const divstyle = {
    border:'solid 1 black',
     maxwidth:'100vw'
    } ;

const vidstyle= {
    width:320, 
    height:240

}
class Code extends Component {
    render() { 
        return (
            <> 
             <div style={divstyle}/>
            <h1 className="title red">Your name here </h1>return <img src={image} alt ='Lens' />
            <img src="/Lens.jpg" alt=""/>
            <Player style= {vidstyle}/>
            <source src="myVideo.mp4" type="video/mp4" >

            </source></>
           

        );
    }
}

export default Code; 
