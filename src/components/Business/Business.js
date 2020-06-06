import React from 'react';
import './Business.css'

// Component to contain information about the business

class Business extends React.Component {
  render () {
    const pizzaria = (
    <div className="Business">
    <div className="image-container">
      <img src={this.props.business.imageSrc} alt=''/>
    </div>
    <h2>{this.props.business.name}</h2>
    <div className="Business-information">
      <div className="Business-address">
        <p>{this.props.business.address}</p>
        <p>{this.props.business.city}</p>
        <p>{this.props.business.state} {this.props.business.zipCode}</p>
      </div>
      <div className="Business-reviews">
        <h3>{this.props.business.category.toUpperCase}</h3>
        <h3 className="rating">{this.props.rating} stars</h3>
        <p>{this.props.business.reviewCount} reviews</p>
      </div>
    </div>
  </div>)
  return pizzaria
  }
}
export default Business