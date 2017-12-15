import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Header from './components/header';
import App from './components/app';
import Accordions from './components/accordion';
import breadcrumbs from './components/breadcrumb';
import Buttons from './components/buttons';
import card from './components/card';
import checkbox from './components/checkbox';
import confirm from './components/confirm';
import dimmer from './components/dimmer';
import divider from './components/divider';
import dropdown from './components/dropdown';
import embed from './components/embed';
import headers from './components/headers';
import icon from './components/icon';
import image from './components/image';
import input from './components/input';
import label from './components/label';
import list from './components/list';
import message from './components/message';
import modal from './components/modal';
import notification from './components/notification';
import popup from './components/popup';
import progress from './components/progress';
import radio from './components/radio';
import Rating from './components/Rating';
import search from './components/search';
import segment from './components/segment';
import sidebar from './components/sidebar';
import statistic from './components/statistic';
import step from './components/step';
import tab from './components/tab';
import table from './components/table';
import transition from './components/transition';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header/>
        <br />
        <Switch>
          <Route path="/accordion" component={Accordions}/>
          <Route path="/breadcrumb" component={breadcrumbs}/>
          <Route path="/buttons" component={Buttons}/>
          <Route path="/card" component={card}/>
          <Route path="/checkbox" component={checkbox}/>
          <Route path="/confirm" component={confirm}/>
          <Route path="/dimmer" component={dimmer}/>
          <Route path="/divider" component={divider}/>
          <Route path="/dropdown" component={dropdown}/>
          <Route path="/embed" component={embed}/>
          <Route path="/headers" component={headers}/>
          <Route path="/icon" component={icon}/>
          <Route path="/image" component={image}/>
          <Route path="/input" component={input}/>
          <Route path="/label" component={label}/>
          <Route path="/list" component={list}/>
          <Route path="/message" component={message}/>
          <Route path="/modal" component={modal}/>
          <Route path="/notification" component={notification}/>
          <Route path="/popup" component={popup}/>
          <Route path="/progress" component={progress}/>
          <Route path="/radio" component={radio}/>
          <Route path="/rating" component={Rating}/>
          <Route path="/search" component={search}/>
          <Route path="/segment" component={segment}/>
          <Route path="/sidebar" component={sidebar}/>
          <Route path="/statistic" component={statistic}/>
          <Route path="/step" component={step}/>
          <Route path="/tab" component={tab}/>
          <Route path="/table" component={table}/>
          <Route path="/transition" component={transition}/>
          <Route path="/" component={App}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
