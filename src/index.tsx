import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Input placeholder="Search tournament ..." />
        <Button>CREATE TOURNAMENT</Button>
      </div>
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
