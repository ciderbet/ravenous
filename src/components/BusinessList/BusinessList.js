import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'

// Creates a list of businesses

class BusinessList extends React.Component {
  render () {
    const businessList = (
    <div className="BusinessList">
   {
    this.props.businesses.map(business => {
      return <Business business={business} />
      }
    )
   }
  </div>)
  return businessList
  }
}
export default BusinessList