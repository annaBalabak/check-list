import { Component } from "react";
import checked from './checked.png'

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
      listArray.push(input);
      this.setState({ itemList: listArray, userInput: "" });
    }
  }

  crossItem(e){
    let li = e.target
    li.classList.toggle('checked')
  }
            
  deleteItem(){
    let listArray = this.state.itemList
    listArray = []
    this.setState({itemList: listArray})
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
            <button className="btnAdd" onClick={() => this.addItem(this.state.userInput)}>
              Add
            </button>
          </div>
          <ul> 
            
            {this.state.itemList.map((item, index) => (
               
                <li onClick={this.crossItem} key={index}> <img className="imgCheck" src={checked} alt="chech box" />
                {item}
                </li>
            ))}
          </ul>

          <div>
            <button className="btnDel" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
          </div>
        </div>
      </form>
    );
  }
}
