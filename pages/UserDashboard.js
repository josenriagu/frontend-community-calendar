import React from 'react';
import {withRouter} from 'next/router';
import Dashboard from '../components/organisms/Dashboard';

const UserDashboard = () => (
  <div>
    <Dashboard />
  </div>
);

export default withRouter(UserDashboard);
