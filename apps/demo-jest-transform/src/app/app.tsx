import { useEffect } from 'react';
import styled from 'styled-components';
import ky from 'ky-universal';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  useEffect(() => {
    (async () => {
      const json = await ky.get('https://date.nager.at/api/v3/publicholidays/2017/AT').json();
      console.log({ json });
    })();
  }, []);

  return (
    <StyledApp>
      <NxWelcome title="demo-jest-transform" />
    </StyledApp>
  );
}

export default App;
