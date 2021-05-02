// App.tsx
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigation/Navigator';

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer onStateChange={state => console.log('New state is', state)}>
      <MyStack /> 
      </NavigationContainer>
    </ApplicationProvider>
  );
};

/*import  LoginScreen  from './src/screens/LoginScreen';
import StorybookUIRoot from './storybook';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : LoginScreen;
export default UI;
*/
/*
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MyStack } from './src/navigation/Navigator';
import {Provider } from 'react-native-paper';

//import { LoginScreen as App } from './src/screens/LoginScreen';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
         <Provider>
          <MyStack /> 
        </Provider>
    </QueryClientProvider>
   

  );
};

export default App;
*/

