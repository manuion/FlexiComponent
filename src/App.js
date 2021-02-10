import React, { Component } from "react";
import Flexi from './components/Flexi';
import FlexiInfo from './components/FlexiInfo'

const flexiConfig = {
  items: [
  {
  "name": "person_name",
  "label": "Person's Name",
  "type": "TextField",
  },
  {
  "name": "states",
           "label": "Person's state",
  "type": "DropDown",
           "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
  ]
  }
            ]
         };

class App extends Component {
  state = {
    name: "",
    place: "",      
  };
  onSubmitHandler = (val) => {
    this.setState({ name: val.name, place: val.place });
  }

  render() {
    return (
      <div>
        <Flexi onSubmit={this.onSubmitHandler} config={flexiConfig.items} />
        <FlexiInfo name={this.state.name} place={this.state.place} />
        
      </div>
    );
  }
  }

export default App;
