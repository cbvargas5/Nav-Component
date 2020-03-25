import React from 'react';
import RightListItem from './RightListItem.jsx';
import AccountButtonItem from './AccountButtonItem.jsx';
import RecentlyViewedButtonItem from './RecentlyViewedButtonItem.jsx';
import OrderHistoryButtonItem from './OrderHistoryButtonItem.jsx';

const BottomRightNav = props => (
    <nav className="rightnavigation">
        <ul>    
            <AccountButtonItem />
            <RecentlyViewedButtonItem />
            <OrderHistoryButtonItem />
            <RightListItem title="Saved Items" />
        </ul>
    </nav>



)

export default BottomRightNav;