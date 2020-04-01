import React,{Component} from "react"
import "./index.scss" 
import Navbar from "./Navbar"
import Banner from "./Banner"
class Home extends Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
        )
    }
}
export default Home;