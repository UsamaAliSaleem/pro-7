// import React from 'react';
// import './App.css';

// import { initNotification } from './services/firebaseService';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <button onClick={initNotification}>
//          Configure Notifications
//       </button>
//     </div>
//   );
// }

// export default App;

// ----------------

import { initNotification } from './services/firebaseService';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
  // import Main from "./main"
import './App.css';

//  import { initNotification } from './firebaseService';

function App() {
  return (
    
    <GlobalProvider>
      <Header />
      <div className="container">
      {/* <Main/> */}

      
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
       <button onClick={initNotification}>
         Allow Notifications
      </button> 
    </GlobalProvider>
    
  );
}

export default App;
