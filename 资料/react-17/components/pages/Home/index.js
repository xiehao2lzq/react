import React,{Component} from "react"
import "./index.scss" 
import Navbar from "./Navbar"
import Banner from "./Banner"
import {Route} from "react-router-dom"
import luxury  from "./HPage/luxury"
import Play  from "./HPage/Play"
class Home extends Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <div  style={{"paddingTop":".1rem","height":'6.5rem'}}>
                    <Banner></Banner>
                </div>
                <Route path="/home/luxury" component={luxury}/>
                <Route path="/home/play" component={Play}/>
            </div>
        )
    }
}
export default Home;