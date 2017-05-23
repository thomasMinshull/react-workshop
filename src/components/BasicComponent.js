import React, {Component} from 'react'
import FirstComponent from './MyFirstComponent'

class BasicComponent extends Component {
  render(){
    return(
      <div>
        <FirstComponent />
        Hi, I'm a Basic Component!
      </div>)

  }
}

export default BasicComponent;
