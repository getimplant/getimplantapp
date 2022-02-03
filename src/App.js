import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Forprovider from './components/Forprovider';
import Awareness from './components/Modals/Awareness';
import Compare from './components/Modals/Compare';
import Implant from './components/Modals/Implant';
import Lives from './components/Modals/Lives';
import Procedure from './components/Modals/Procedure';
import Types from './components/Modals/Types';
import Navbar from './components/Navbar';
import Navmenu from './components/Navmenu';
import Academy from './pages/Academy/Academy';
import Club from './pages/Club';
import Home from './pages/Home';
import Market from './pages/Market';
import Profile from './pages/Academy/Profile';
import AcademyContent from './pages/Academy/AcademyContent';
import PrivateRoute from './pages/Academy/PrivateRoute';
import { Shop } from './pages/Academy/shop/Shop';
import { AuthContext } from './pages/Academy/AuthProvider';
import { AdminContext } from './pages/Admin/AdminProvider';
import AdminProvider from './pages/Admin/AdminProvider';
import Beamenber from './pages/Academy/Beamember';
import { Cart } from './pages/Academy/shop/Cart';
import ListProducts from './pages/Admin/ListProducts';
import AddProduct from './pages/Admin/AddProduct';
import Preloader from './components/Modals/Preloader';
import Bookaslot from './components/Modals/Bookaslot';
function App() {
  // const [scroll, setScroll] = useState(0);
  // const [menu, setMenu] = useState(false);
  // const [modal, setModal] = useState(0);
  // const [provider, setProvider] = useState(false);
  const [preloader, setPreloader] = useState(false);

  const authcontext = useContext(AuthContext);
  const navbar = authcontext.value.navbar;
  const setNavbar = authcontext.value.setNavbar;
  const menu = authcontext.value.menu;
  const setMenu = authcontext.value.setMenu;
  const modal = authcontext.value.modal;
  const setModal = authcontext.value.setModal;
  const provider = authcontext.value.provider;
  const setProvider = authcontext.value.setProvider;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPreloader(true);
  //   }, 3000);
  // }, []);
  return (
    <Router>
      <div className='App'>
        {preloader ? (
          <Preloader setPreloader={setPreloader} setModal={setModal} />
        ) : (
          ''
        )}
        <Navmenu menu={menu} setMenu={setMenu} />
        {navbar ? (
          <Navbar setMenu={setMenu} setProvider={setProvider} navbar={navbar} />
        ) : (
          ''
        )}
        {provider ? (
          <Forprovider
            setProvider={setProvider}
            setNavbar={setNavbar}
            navbar={navbar}
          />
        ) : (
          ''
        )}
        {modal === 1 ? <Implant setModal={setModal} /> : ''}
        {modal > 1 && modal < 5 ? (
          <Types modal={modal} setModal={setModal} />
        ) : (
          ''
        )}
        {modal === 5 ? <Procedure setModal={setModal} /> : ''}
        {modal === 6 ? <Compare setModal={setModal} /> : ''}
        {modal > 6 && modal < 11 ? (
          <Lives modal={modal} setModal={setModal} />
        ) : (
          ''
        )}
        {modal > 10 && modal < 15 ? (
          <Awareness modal={modal} setModal={setModal} />
        ) : (
          ''
        )}
        {modal > 15 && modal < 20 ? (
          <Bookaslot
            modal={modal}
            setModal={setModal}
            setPreloader={setPreloader}
          />
        ) : (
          ''
        )}

        <Switch>
          <Route exact path='/'>
            <Home setModal={setModal} setMenu={setMenu} />
          </Route>
          <Route exact path='/club/members'>
            <PrivateRoute component={AcademyContent} setNavbar={setNavbar} />
          </Route>
          <Route path='/club'>
            <Club setNavbar={setNavbar} setMenu={setMenu} />
          </Route>
          <Route exact path='/club/beamember'>
            <Beamenber setNavbar={setNavbar} setMenu={setMenu} />
          </Route>

          <Route path='/marketing'>
            <Market />
          </Route>

          <Route exact path='/academy'>
            <Academy setNavbar={setNavbar} setMenu={setMenu} />
          </Route>
          <Route exact path='/academy/beamember'>
            <Beamenber
              setNavbar={setNavbar}
              setMenu={setMenu}
              setMenu={setMenu}
            />
          </Route>
          <Route exact path='/academy/members'>
            <PrivateRoute
              component={AcademyContent}
              setNavbar={setNavbar}
              setMenu={setMenu}
            />
          </Route>
          <Route exact path='/admin'>
            <PrivateRoute
              component={ListProducts}
              setNavbar={setNavbar}
              setMenu={setMenu}
            />
          </Route>
          <Route exact path='/admin/addnewproduct'>
            <PrivateRoute
              component={AddProduct}
              setNavbar={setNavbar}
              setMenu={setMenu}
            />
          </Route>
          <Route exact path='/academy/members/cart'>
            <PrivateRoute
              component={Cart}
              setNavbar={setNavbar}
              setMenu={setMenu}
            />
          </Route>
          <Route exact path='/academy/shop'>
            <PrivateRoute
              component={Shop}
              setNavbar={setNavbar}
              setMenu={setMenu}
            />
          </Route>
          <Route exact path='/academy/members/profile'>
            <PrivateRoute
              component={Profile}
              setNavbar={setNavbar}
              setMenu={setMenu}
            />
          </Route>
        </Switch>

        {navbar ? <Footer setProvider={setProvider} /> : ''}
      </div>
    </Router>
  );
}

export default App;
