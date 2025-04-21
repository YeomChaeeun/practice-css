import { useState } from 'react';
import styled from '@emotion/styled';
import Button from './components/Button';
import { container, title } from './styles/global.css.ts';

// Using Emotion for component-specific styles
const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
`;

const CounterContainer = styled.div`
  margin-top: 32px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Count = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #3498db;
`;

function App() {
  const [count, setCount] = useState(0);

  // return <div className={testStyle}>Test</div>;
  return (
    <div className={container}>
      <h1 className={title}>Vite + React + TypeScript with Vanilla Extract & Emotion</h1>
      <ButtonsContainer>
        <Button variant="primary" size="medium" onClick={() => setCount(count + 1)}>
          Primary Button
        </Button>
        <Button variant="secondary" size="small">
          Secondary Small
        </Button>
        <Button variant="animated" size="large">
          Animated Large
        </Button>
      </ButtonsContainer>
      <CounterContainer>
        <h2>Counter Example</h2>
        <Count>Count: {count}</Count>
        <Button variant="primary" onClick={() => setCount(0)}>
          Reset Counter
        </Button>
      </CounterContainer>
    </div>
  );
}

export default App;
