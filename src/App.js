import React from 'react';

function App() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1>🧘‍♂️ Scroll Sanctuary</h1>
      <p>Transform endless scrolling into mindful creativity rituals</p>
      <p>✨ Application is loading... ✨</p>
      <div style={{ marginTop: '30px' }}>
        <h3>🚀 Deployment Successful!</h3>
        <p>Frontend is now live on Vercel</p>
        <small>API URL: {process.env.REACT_APP_API_URL || 'Loading...'}</small>
      </div>
    </div>
  );
}

export default App;
