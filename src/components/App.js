import React from 'react';
import Header from Header;
import Order from Order;
import Inventory from Inventory;

class App extends React.Component {
    render() {
        return (
            <div className='ocean-harvest'>
                <div className='menu'>
                    <Header />
                    <Order />
                    <Inventory />
                </div>
            </div>
        )
    }
}

export default App;