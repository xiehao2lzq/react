import React,{Component} from "react"
import "./index.scss" 
import GroupState from "../../../../modules/group"
import {NavLink} from "react-router-dom"
class Specials extends Component{

    componentDidMount(){
        //移除掉之前的specials
        this.props.removeSpecials();

        let {specialsName} = this.props;
        if(specialsName==="luxury"){
            this.props.getSpecialsInfo("/api/home/home_page?code=1&c_platform_type=0&c_app_ver=6.0.0&c_upk=");
        }else if(specialsName==="play"){
           this.props.getSpecialsInfo("/api/home/home_page?code=2&c_platform_type=0&c_app_ver=6.0.0&c_upk=");
        }
    }
    

    renderSpecials(){
        let {specials} = this.props;
        if(!specials) return (<div style={{fontSize:"100px",textAlign:"center"}}><i className="fa fa-cog fa-spin"></i></div>);
        return specials.map((item,index)=>{
            return (
                <div className="item" key={index}>
                    <h2 className="title">{item.title}</h2>
                    <p className="subtitle">{item.subTitle}</p>
                    <NavLink
                        to={{
                            pathname:"/list/listdetail",
                            search:`title=${item.title}&subtitle=${item.subTitle}&url=${item.img}`
                        }}
                    >
                        <img  alt="" width="100%" src={item.img}/>
                    </NavLink>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="specials">
                {
                    this.renderSpecials()
                }
            </div>
        )
    }
}
export default GroupState(Specials,{
    reducer:"home",
    states:["specials"]
});