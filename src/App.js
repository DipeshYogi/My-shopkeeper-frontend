import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './component/Header';
import Home from './component/Home';
import Register from './component/AuthScreens/Register';
import Login from './component/AuthScreens/Login';
import ShopInfo from './component/ShopInfo';
import ItemInfo from './component/ItemInfo';
import Profile from './component/Profile';
import PrivateRouter from './services/PrivateRouter';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <PrivateRouter path='/shop-info' component={ShopInfo} />
              <PrivateRouter path='/item-info' component={ItemInfo} />
              <PrivateRouter path='/profile' component={Profile} />
            </Switch>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
