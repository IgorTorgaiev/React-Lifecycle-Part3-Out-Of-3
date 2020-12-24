import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component{
  constructor(props){
    super(props);
    this.state={action: true};
  }
  textAway = () => {
    this.setState({action: false});
  }
  render(){
    let thetext;
    if(this.state.action){
      thetext = <Page />;
    };
    return(
      <div>
        <p>This text will not be deleted</p>
        {thetext}
        <button onClick={this.textAway}>Delete some text</button>
      </div>
    );
  }
}
class Page extends React.Component {
  componentWillUnmount() {
    alert("Let's exclude some text from here");
  }
  render() {
    return(
      <div>
        <h1>Bla-bla-bla</h1>
        <p>Bla-bla-bla</p>
        <p>Bla-bla-bla</p>
        <p>Bla-bla-bla</p>
      </div>
    );
  }
}
ReactDOM.render(<Book />, document.getElementById('root'));