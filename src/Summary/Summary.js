import React from 'react';
import Total from './Total/Total'
import Option from './Option/Option'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Summary extends React.Component {
    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return(
              <Option 
              feature={feature}
              idx={idx}
              selected={this.props.selected}
              />
            )
          });

          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total 
            USCurrencyFormat={USCurrencyFormat}
            total={total}
            />
           
          </section>
        )
    }
}

export default Summary;