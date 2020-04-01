import React,{Component} from 'react';
import TodoList from "./components/TodoList"
import Calculator from "./components/Calculator"
class App extends Component {
  render() {
    return (
      <div className="App container pt50">
        <TodoList></TodoList>
        <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
