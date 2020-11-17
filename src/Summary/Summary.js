import React from 'react';
import Total from './Total/Total'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Summary extends React.Component {
    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
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