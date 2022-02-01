import React from 'react';
import Layout from './Components/Layout/Layout';
import ChatMenu from './Components/Left/ChatMenu';
import ChatScreen from './Components/Right/ChatScreen';


function App() {

  return (
    <Layout>

      <ChatMenu />

      <ChatScreen />

    </Layout>
  );
}

export default App;
