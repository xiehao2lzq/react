import React,{Component} from 'react';
import TodoList from "./components/commons/TodoList"
class App extends Component {
  render() {
    return (
      <div className="App container pt50">
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
