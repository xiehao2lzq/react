import React,{Component} from "react"
import {NavBar,Icon} from "antd-mobile"
import qs from "querystring"
class ListDetail extends Component{


    componentDidMount(){
        //let detailId = this.props.match.params.id;
        //redux=> this.props.getDetailInfo(id)  //sk/api/getDetailById/+id
    }
    render(){
        let search = this.props.location.search.replace("?","");
        let paramObj = qs.parse(search);
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.replace("/list")}
                    >{paramObj.title}</NavBar>
                    <p>{paramObj.subtitle}</p>
                    <img width="100%" src={paramObj.url} alt=""/>
            </div>
        )
    }
}

export default ListDetail;