import React, { Component } from 'react';

class CreatureComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            changename: '',
            changeimg: '',
            changescary: ''

        }

    }

    newname = event => {
        this.setState({ changename: event.target.value })
    }

    newimg = event => {
        this.setState({ changeimg: event.target.value })
    }

    newscary = event => {
        this.setState({ changescary: event.target.value })
    }

    render() {

        return (

            /* Create div for individual creature */
            <div key={this.props.c.id} className='creature'>

                {/* creature text */}
                <p className='disptext' >{this.props.c.name.toUpperCase()}</p>

                {/* scary level text */}
                <p className='disptext' >Scary Level: {this.props.c.scary.level}</p>

                {/* creature GIF */}
                <img src={this.props.c.image_url} alt={this.props.c.name} />

                <div>

                    <input placeholder='New Name' onChange={this.newname} />
                    <input placeholder='New Image URL' onChange={this.newimg} />
                    <input placeholder='New Scary Level' onChange={this.newscary} />

                </div>

                {/* Button that gets a new creature for a given block (use PUT request) */}
                <button onClick={() => this.props.updatecreature(this.props.c.id, this.state)} className='myButton' >Update creature</button>

                {/* Button that deletes creature/gif (makes DELETE request) */}
                <button onClick={() => this.props.deletecreature(this.props.c.id)} className='myButton' >Delete creature</button>

            </div >

        )

    }

}

export default CreatureComponent