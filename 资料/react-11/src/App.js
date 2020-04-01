import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
  componentDidMount(){
    //请求数据    
    // this.$get({
    //   url:"/db/v2/movie/in_theaters",
    //   data:{
    //     count:6
    //   }
    // }).then(res=>{
    //   console.log(res)
    // })
  }
}

export default App;
