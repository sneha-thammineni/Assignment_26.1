import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'Sneha',
          age: 78,
          show: true
        };
      }
    // Incrementing the value 
      IncrementItem = () => {
        this.setState({ age: this.state.age + 3 });
      }
    
      render() {
        return (
          <div>
            <p>Your name is { this.state.name } and your age is { this.state.show ? <span>{ this.state.age }</span> : '' }</p>
          
            <button onClick={this.IncrementItem}>Make me Older</button>
          </div>
        );
      }
    }


export default User