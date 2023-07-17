import { Component } from "react";
import circle from './circle.png'
import check from './check.png'

export class Checklist extends Component {
  state = {
    userInput: "",
    itemList: [],
    checked: true,
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
  handleClick =() => {
    this.handleEvent1();
    this.handleEvent2();
  }
  handleEvent1 = () => {
    this.crossItem()
  }
  handleEvent2 = () => {
    this.setState({checked : !this.state.checked})
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
              <li onClick={this.handleClick}  key={index}>
                <img className="imgCheck" src={this.state.checked ? {circle} : {check}} alt="check box" />{" "}
                {item}
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
