import React from 'react'
import './businessList.css'
import Business from '../Business/Business'

class BusinessList extends React.Component {
  render () {
    const businessList = (
    <div className="BusinessList">
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
    <Business />
  </div>)
  return businessList
  }
}
export default BusinessList