import React from 'react';



class Option extends React.Component{
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

        const featureHash = this.props.feature + '-' + this.props.idx;
        const selectedOption = this.props.selected[this.props.feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
        }
    }

export default Option;