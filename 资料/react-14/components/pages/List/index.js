import React,{Component} from "react"
import "./index.scss" 
import { Carousel, WingBlank,Grid  } from 'antd-mobile';
class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.setState({
            data:Array.from(new Array(12)).map((_val, i) => ({
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
                text: `${i}`,
                url:`/home/homeIndex/${i}`
              }))
        })
    }
    render(){
        return (
            <div>
               <div className="cj">
                <WingBlank>
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            swiping={false}
                            autoplay
                            infinite
                            speed={1500}
                            autoplayInterval={3000}
                            resetAutoplay={false}
                            >
                            {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                                <div className="v-item" key={type}>{type}</div>
                            ))}
                        </Carousel>
                    </WingBlank>
               </div>

               <hr/>

               <hr/>

               <div>
                    <div className="sub-title">Carousel</div>
                    <Grid data={this.state.data} isCarousel onClick={_el => this.props.history.push("/mine/login")} />                 

               </div>
            </div>
        )
    }
}
export default List;