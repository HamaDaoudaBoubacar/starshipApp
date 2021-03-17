import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import StarShipScreen from './src/screens/StarShipScreen';


const App = () => {

    const queryClient = new QueryClient

    return (
        <QueryClientProvider client={queryClient}>


            <StarShipScreen />


        </QueryClientProvider>

    );
};



export default App;