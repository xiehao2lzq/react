import React,{Component} from "react"
import "./index.scss" 
import {Route} from "react-router-dom"
import Specials from "../Home/Specials"
class List extends Component{

   render (){
       return (
           <div>
               <Specials specialsName="luxury"/>
           </div> 
       )
   }
}
export default List;