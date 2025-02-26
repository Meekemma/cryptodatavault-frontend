import React from 'react';
import CustomWithdrawal from '../components/CustomWithdrawal';
import LayoutWithSidebar from '../components/LayoutWithSidebar'; // Import the layout component

const WithdrawalPage = () => {
  return (
    <LayoutWithSidebar>
      <CustomWithdrawal />
    </LayoutWithSidebar>
  );
};

export default WithdrawalPage;
