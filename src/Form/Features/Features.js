import React from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem/FeatureItem.js'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Features extends React.Component {
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              return(
                <FeatureItem
                  item={item} 
                  feature={feature}
                  selected={this.props.selected}
                  updateFeature={this.props.updateFeature}
                  />
              )
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });


        return (
            <>
            {features}
            </>

        )
    }
}

export default Features;