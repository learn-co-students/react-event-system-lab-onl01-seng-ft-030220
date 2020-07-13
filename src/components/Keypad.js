// Code Keypad Component Here
import React, {Component} from 'react';
class Keypad extends Component {

  pass = () => {
   console.log('Entering password...');
 }

 render() {
   return (
     <input onKeyUp={this.pass} type="password" />
   );
 }
}

export default Keypad
