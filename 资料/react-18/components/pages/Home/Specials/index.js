import React,{Component} from "react"
import "./index.scss" 
import GroupState from "../../../../modules/group"
import {NavLink} from "react-router-dom"
class Specials extends Component{

    componentDidMount(){
        let {url} = this.props;
        //请求Specials数据
        this.props.getSpecialsInfo(url);
    }
    

    renderSpecials(){
        let {luxurySpecials,playSpecials,states} =  this.props;
        if(states === "luxury" && luxurySpecials){
            return luxurySpecials.map((item,index)=>{
                    return (
                        <div className="item" key={index}>
                            <h2 className="title">{item.title}</h2>
                            <p className="subtitle">{item.subTitle}</p>
                            <NavLink
                                to={"/list/"+item.urlType}
                            >
                                <img  alt="" width="100%" src={item.img}/>
                            </NavLink>
                        </div>
                    )
                })
        }else if(states === "play" && playSpecials){
            return playSpecials.map((item,index)=>{
                return (
                    <div className="item" key={index}>
                        <h2 className="title">{item.title}</h2>
                        <p className="subtitle">{item.subTitle}</p>
                        <NavLink
                            to={{
                                pathname:"/list/listdetail",
                                search:"title="+item.title+"&subtitle="+item.subTitle+"&url="+item.img
                            }}
                        >
                            <img  alt="" width="100%" src={item.img}/>
                        </NavLink>
                    </div>
                )
            })
        }

        // return specials.map((item,index)=>{
        //     return (
        //         <div className="item" key={index}>
        //             <h2 className="title">{item.title}</h2>
        //             <p className="subtitle">{item.subTitle}</p>
        //             <p>
        //                 <img  alt="" width="100%" src={item.img}/>
        //             </p>
        //         </div>
        //     )
        // })
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
    states:["luxurySpecials","playSpecials"]
});