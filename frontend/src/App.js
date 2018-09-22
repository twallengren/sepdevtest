import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CreatureComponent from './components/CreatureComponent'

// BASE URL
const BASE_URL = "http://localhost:3005"

class App extends Component {

  constructor() {

    super();

    this.state = {

      creatures: [],
      newcreattext: '',
      newcreatimg: '',
      newcreatscary: ''

    }

  }

  componentDidMount = () => {

    axios.get(BASE_URL + "/api/creatures").then(res => {
      this.setState({ creatures: res.data })
    })

  }

  deletecreature = creatureID => {
    // axios (DELETE)
    axios.delete(BASE_URL + "/api/creatures/" + creatureID).then(res => {

      this.setState({ creatures: res.data })

    })
  }

  addcreature = creature => {
    // axios (POST)
    axios.post(BASE_URL + "/api/creatures", { newcreature: this.state.newcreattext, newimg: this.state.newcreatimg, scary: { level: 7 } }).then(resp => {

      this.setState({ creatures: resp.data })

    })
  }

  updatecreature = (id, details) => {

    axios.put(BASE_URL + "/api/creatures/" + id, details).then(res => {

      this.setState({ creatures: res.data })

    })

  }

  creaturename = event => {
    this.setState({ newcreattext: event.target.value })
  }

  creatureimg = event => {
    this.setState({ newcreatimg: event.target.value })
  }

  creaturescary = event => {
    this.setState({ newcreatscary: event.target.value })
  }

  render() {

    // Define 'creatures' to display
    const creatures = this.state.creatures.map(creature => {
      return (

        <CreatureComponent c={creature} deletecreature={this.deletecreature} updatecreature={this.updatecreature} key={creature.id} />

      );
    });

    return (
      // Div for whole app
      <div className='App'>

        {/* Section on left side of screen (displays existing creatures)*/}
        <section className='creaturedisplay'>

          {creatures}

        </section>

        {/* Section on right side of screen (add creature form) */}
        <div className='addnewdisplay'>

          <input placeholder='Creature Name' onChange={this.creaturename} />
          <input placeholder='Image URL' onChange={this.creatureimg} />
          <input placeholder='Scary Level' onChange={this.creaturescary} />
          <button onClick={this.addcreature} className='myButton' >Add Creature</button>

        </div>

      </div>
    );
  }
}

export default App;
