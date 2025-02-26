import React from 'react';
import RightSidebar from './RightSidebar'; 

const LayoutWithSidebar = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Render the Sidebar */}
      <RightSidebar style={{ width: '250px', position: 'fixed', left: 0, top: 0, height: '100%' }} />
      
      {/* Render the page content */}
      <main
        style={{
          flexGrow: 1,
          padding: '16px',
          marginTop: '64px', 
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default LayoutWithSidebar;
