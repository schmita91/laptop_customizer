import React from 'react';
import Features from './Features/Features.js';



class Form extends React.Component {
    render() {
      return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            
            <Features 
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            features={this.props.features}
            />
          </form>
        )
    }
}

export default Form;