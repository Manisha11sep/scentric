import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ViewInventory from './ViewInventory'
import AddInventory from './AddInventory'
import Customers from './Customers'
import Orders from './Orders'
import AdminHomePortal from './AdminHomePortal'


class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: ''
        }
        this.goBack = this.goBack.bind(this)
        this.showAddInventory = this.showAddInventory.bind(this)
        this.showViewInventory = this.showViewInventory.bind(this)
        this.showCustomers = this.showCustomers.bind(this)
        this.showOrders = this.showOrders.bind(this)
    }

    goBack(){
        this.setState({
            route: ''
        })
    }

    showViewInventory(){
        this.setState ({
            route: 'viewinventory'
        })
    }

    showAddInventory(){
        this.setState ({
            route: 'addinventory'
        })
    }

    showCustomers(){
        this.setState ({
            route: 'customers'
        })
    }

    showOrders(){
        this.setState ({
            route: 'orders'
        })
    }
    

    render() {
        return (
            <div>
                <div className="admin_header_wrapper">
                    <img src="https://s3-us-west-1.amazonaws.com/scentric/favicon.ico" alt="logo" width="28px"/>
                    <span className="admin_header_logo">SCENTRIC</span>
                    <span>Admin Portal</span>
                </div>
                <div className="admin_flex">
                    <div className="admin_menu">
                        <div onClick={this.goBack}>Admin Home</div>
                        <div onClick={this.showViewInventory}>View Inventory</div>
                        <div onClick={this.showAddInventory}>Add Inventory</div>
                        <div onClick={this.showCustomers}>Customers</div>
                        <div onClick={this.showOrders}>Orders</div>
                        <Link to="/home"><div>Store HomePage</div></Link>
                    </div>
                    <AdminHomePortal/>
                    <div style={margin}>
                        {this.state.route === 'viewinventory' ? <ViewInventory/> : null}
                        {this.state.route === 'addinventory' ? <AddInventory/> : null}
                        {this.state.route === 'customers' ? <Customers/> : null}
                        {this.state.route === 'orders' ? <Orders/> : null}
                    </div>
                </div>
            </div>
        )
    }
}

const margin = {
    margin: '70px auto'
}


export default Admin
