import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { CustomApolloProvider } from './utils/initApollo';
import ErrorSnackBar from './Components/ErrorSnackBar';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <CustomApolloProvider>
      <BrowserRouter>
        <React.StrictMode>
          <ErrorSnackBar />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </CustomApolloProvider>

  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
