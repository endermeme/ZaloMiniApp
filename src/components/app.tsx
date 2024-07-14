import React from 'react';

const App = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', margin: 0, padding: 0 }}>
      <iframe
        src="https://aurabusiness.tech/ces/dashboard/"
        title="CES Global"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default App;
