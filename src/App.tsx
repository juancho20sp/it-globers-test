import React from 'react';
import './App.scss';

import { Layout } from './views/Layout';
import { Main } from './views/Main';

function App() {
  return (
    <>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

export default App;
