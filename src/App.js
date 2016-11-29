import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }
    update( e ) {
        this.setState({txt: e.target.value})
    }
    render(){
        let txt = this.props.txt;
        let cat = this.props.cat;
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/>
                <h2>{this.state.txt} - {this.state.cat}</h2>
            </div>
            )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: "This is the default text",
    cat: 2
};

export default App;
