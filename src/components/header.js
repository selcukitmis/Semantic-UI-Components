import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class Header extends Component {
  state           = {activeItem: "home"};
  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
    switch (name) {
      case "home":
        this.props.history.push('/');
        break;
      case "accordion":
        this.props.history.push('/accordion');
        break;
      case "breadcrumb":
        this.props.history.push('/breadcrumb');
        break;
      case "buttons":
        this.props.history.push('/buttons');
        break;
      case "card":
        this.props.history.push('/card');
        break;
      case "checkbox":
        this.props.history.push('/checkbox');
        break;
      case "confirm":
        this.props.history.push('/confirm');
        break;
      case "dimmer":
        this.props.history.push('/dimmer');
        break;
      case "divider":
        this.props.history.push('/divider');
        break;
      case "dropdown":
        this.props.history.push('/dropdown');
        break;
      case "embed":
        this.props.history.push('/embed');
        break;
      case "headers":
        this.props.history.push('/headers');
        break;
      case "icon":
        this.props.history.push('/icon');
        break;
      case "image":
        this.props.history.push('/image');
        break;
      case "input":
        this.props.history.push('/input');
        break;
      case "label":
        this.props.history.push('/label');
        break;
      case "list":
        this.props.history.push('/list');
        break;
      case "message":
        this.props.history.push('/message');
        break;
      case "modal":
        this.props.history.push('/modal');
        break;
      case "notification":
        this.props.history.push('/notification');
        break;
      case "popup":
        this.props.history.push('/popup');
        break;
      case "progress":
        this.props.history.push('/progress');
        break;
      case "radio":
        this.props.history.push('/radio');
        break;
      case "rating":
        this.props.history.push('/rating');
        break;
      case "search":
        this.props.history.push('/search');
        break;
      case "segment":
        this.props.history.push('/segment');
        break;
      case "sidebar":
        this.props.history.push('/sidebar');
        break;
      case "statistic":
        this.props.history.push('/statistic');
        break;
      case "step":
        this.props.history.push('/step');
        break;
      case "tab":
        this.props.history.push('/tab');
        break;
      case "table":
        this.props.history.push('/table');
        break;
      case "transition":
        this.props.history.push('/transition');
        break;
      default:
        this.props.history.push('/');
        break;
    }

  };

  render() {
    const {activeItem} = this.state;
    return (
      <div>
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
          <Menu.Item name='accordion' active={activeItem === 'accordion'}
                     onClick={this.handleItemClick}>accordion</Menu.Item>
          <Menu.Item name='breadcrumb' active={activeItem === 'breadcrumb'}
                     onClick={this.handleItemClick}>breadcrumb</Menu.Item>
          <Menu.Item name='buttons' active={activeItem === 'buttons'} onClick={this.handleItemClick}>buttons</Menu.Item>
          <Menu.Item name='card' active={activeItem === 'card'} onClick={this.handleItemClick}>card</Menu.Item>
          <Menu.Item name='checkbox' active={activeItem === 'checkbox'}
                     onClick={this.handleItemClick}>checkbox</Menu.Item>
          <Menu.Item name='confirm' active={activeItem === 'confirm'} onClick={this.handleItemClick}>confirm</Menu.Item>
          <Menu.Item name='dimmer' active={activeItem === 'dimmer'} onClick={this.handleItemClick}>dimmer</Menu.Item>
          <Menu.Item name='divider' active={activeItem === 'divider'} onClick={this.handleItemClick}>divider</Menu.Item>
          <Menu.Item name='dropdown' active={activeItem === 'dropdown'}
                     onClick={this.handleItemClick}>dropdown</Menu.Item>
          <Menu.Item name='embed' active={activeItem === 'embed'} onClick={this.handleItemClick}>embed</Menu.Item>
          <Menu.Item name='headers' active={activeItem === 'header'} onClick={this.handleItemClick}>header</Menu.Item>
          <Menu.Item name='icon' active={activeItem === 'icon'} onClick={this.handleItemClick}>icon</Menu.Item>
          <Menu.Item name='image' active={activeItem === 'image'} onClick={this.handleItemClick}>image</Menu.Item>
          <Menu.Item name='transition' active={activeItem === 'transition'}
                     onClick={this.handleItemClick}>transition</Menu.Item>
        </Menu>
        <Menu>
          <Menu.Item name='input' active={activeItem === 'input'} onClick={this.handleItemClick}>input</Menu.Item>
          <Menu.Item name='label' active={activeItem === 'label'} onClick={this.handleItemClick}>label</Menu.Item>
          <Menu.Item name='list' active={activeItem === 'list'} onClick={this.handleItemClick}>list</Menu.Item>
          <Menu.Item name='message' active={activeItem === 'message'} onClick={this.handleItemClick}>message</Menu.Item>
          <Menu.Item name='modal' active={activeItem === 'modal'} onClick={this.handleItemClick}>modal</Menu.Item>
          <Menu.Item name='notification' active={activeItem === 'notification'}
                     onClick={this.handleItemClick}>notification</Menu.Item>
          <Menu.Item name='popup' active={activeItem === 'popup'} onClick={this.handleItemClick}>popup</Menu.Item>
          <Menu.Item name='progress' active={activeItem === 'progress'}
                     onClick={this.handleItemClick}>progress</Menu.Item>
          <Menu.Item name='radio' active={activeItem === 'radio'} onClick={this.handleItemClick}>radio</Menu.Item>
          <Menu.Item name='rating' active={activeItem === 'rating'} onClick={this.handleItemClick}>rating</Menu.Item>
          <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>search</Menu.Item>
          <Menu.Item name='segment' active={activeItem === 'segment'} onClick={this.handleItemClick}>segment</Menu.Item>
          <Menu.Item name='sidebar' active={activeItem === 'sidebar'} onClick={this.handleItemClick}>sidebar</Menu.Item>
          <Menu.Item name='statistic' active={activeItem === 'statistic'}
                     onClick={this.handleItemClick}>statistic</Menu.Item>
          <Menu.Item name='step' active={activeItem === 'step'} onClick={this.handleItemClick}>step</Menu.Item>
          <Menu.Item name='tab' active={activeItem === 'tab'} onClick={this.handleItemClick}>tab</Menu.Item>
          <Menu.Item name='table' active={activeItem === 'table'} onClick={this.handleItemClick}>table</Menu.Item>
        </Menu>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function matchDispatchToProps(dispatch) {
  return {};
}

export default withRouter(connect(mapStateToProps)(Header))