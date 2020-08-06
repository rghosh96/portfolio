import React, {useState, useEffect} from 'react';
import '../css/home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      menuClass0: "expand",
      subMenuClass0: "hidden",
      msg0: "㊉",
      menuClass1: "expand",
      subMenuClass1: "hidden",
      msg1: "㊉",
      menuClass2: "expand",
      subMenuClass2: "hidden",
      msg2: "㊉",
      menuClass3: "expand",
      subMenuClass3: "hidden",
      msg3: "㊉"
    };
  }

  setToggle(toggled, type){
    console.log(toggled)
    this.setState({
      toggle: toggled
    },
    () => this.checkToggle(type) // callback function to guarantee called after state is updated
    );
  }

  checkToggle(type) {
    console.log(this.state.toggle)
    if(this.state.toggle) {
      switch(type) {
        case 0:
          this.setState({
            menuClass0: "expanded",
            subMenuClass0: "show",
            msg0: "-"
          });
          break;
        case 1:
          this.setState({
            menuClass1: "expanded",
            subMenuClass1: "show",
            msg1: "-"
          });
          break;
        case 2:
          this.setState({
            menuClass2: "expanded",
            subMenuClass2: "show",
            msg2: "-"
          });
          break;
        case 3:
          this.setState({
            menuClass3: "expanded",
            subMenuClass3: "show",
            msg3: "-"
          });
          break;
        default:
          console.log("error")
      }
    } else {
      switch(type) {
        case 0:
          this.setState({
            menuClass0: "expand",
            subMenuClass0: "hidden",
            msg0: "㊉"
          });
          break;
        case 1:
          this.setState({
            menuClass1: "expand",
            subMenuClass1: "hidden",
            msg1: "㊉"
          });
          break;
        case 2:
          this.setState({
            menuClass2: "expand",
            subMenuClass2: "hidden",
            msg2: "㊉"
          });
          break;
        case 3:
          this.setState({
            menuClass3: "expand",
            subMenuClass3: "hidden",
            msg3: "㊉"
          });
          break;
        default:
          console.log("error")
      }
    }
    
  }

  
  

  render() {
    return (
      <div className="home">
        <div className="menu">
          <h1>rashi ghosh</h1>

          <span>
            <h2 className="">story</h2>
            <h2 onClick = {() => this.setToggle(!this.state.toggle, 0)} className={this.state.menuClass0}>{this.state.msg0}</h2>
          </span>
          <div className={this.state.subMenuClass0}>hidden</div>

          <span>
            <h2 className="">ingredients</h2>
            <h2 onClick = {() => this.setToggle(!this.state.toggle, 1)} className={this.state.menuClass1}>{this.state.msg1}</h2>
          </span>
          <div className={this.state.subMenuClass1}>hidden</div>

          <span>
            <h2 className="">nutrition facts</h2>
            <h2 onClick = {() => this.setToggle(!this.state.toggle, 2)} className={this.state.menuClass2}>{this.state.msg2}</h2>
          </span>
          <div className={this.state.subMenuClass2}>hidden</div>

          <span>
            <h2 className="">contact</h2>
            <h2 onClick = {() => this.setToggle(!this.state.toggle, 3)} className={this.state.menuClass3}>{this.state.msg3}</h2>
          </span>
          <div className={this.state.subMenuClass3}>hidden</div>

        </div>
      </div>
    )
  }
}