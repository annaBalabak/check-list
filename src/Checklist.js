import { Component } from "react";
import circle from './circle.png'
import check from './check.png'

export class Checklist extends Component {
  state = {
    userInput: "",
    itemList: [],
  };

  onFormSubmit(e) {
    e.preventDefault();
  }

  onChangeEvent(e) {
    this.setState({ userInput: e });
  }

  addItem(input) {
    if (input === "") {
      alert("Please, enter an item or a task");
    } else {
      let listArray = this.state.itemList;
      listArray.push({
        todo: input,
        done: false,
      })
      this.setState({ itemList: listArray, userInput: "" });
    }
  }

  crossItem(i){
    let newArray = [];
    this.state.itemList.map((todo, index) =>(
      index === i ? newArray.push({...todo,
      done: true,})
      : newArray.push(todo)
    ))
    this.setState({itemList: newArray})
  }
            
  deleteItem(){
    let listArray = this.state.itemList
    listArray = []
    this.setState({itemList: listArray});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="Checklist">
          <div>
            <input
              type="text"
              placeholder="Enter an item or a task..."
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>

          <div>
            <button
              className="btnAdd"
              onClick={() => this.addItem(this.state.userInput)}
            >
              Add
            </button>
          </div>
          <ul>
            {this.state.itemList.map((item, index) => (
              <li key={index} className={item.done === true ? "checked" : null} onClick={() => this.crossItem(index)}  >
                <img className="imgCheck" src={item.done === true ? check : circle} alt="check box" /> {item.todo}
              </li>
            ))}
          </ul>

          <div>
            <button
              className="btnDel"
              onClick={() => this.deleteItem(this.state.userInput)}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    );
  }
}
