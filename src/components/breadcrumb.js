import React, {Component} from 'react';
import {Breadcrumb} from 'semantic-ui-react'

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Section link onClick={() => { alert("Breadcrumb clicked!"); }}>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron'/>
          <Breadcrumb.Section link onClick={() => { alert("Breadcrumb clicked!"); }}>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right arrow'/>
          <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <br />
        <Breadcrumb size='mini'>
          <Breadcrumb.Section link onClick={() => { alert("Breadcrumb clicked!"); }}>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link onClick={() => { alert("Breadcrumb clicked!"); }}>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <br />
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section link>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
        </Breadcrumb>
      </div>
    );
  }
}
