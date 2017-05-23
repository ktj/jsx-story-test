import React from 'react'
import { Link } from 'react-router';
import { setAddon, storiesOf } from '@kadira/storybook'
import { action } from '@kadira/storybook-addon-actions'
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'
import JSXAddon from 'storybook-addon-jsx'
import Nav from '../src/Nav/Nav'
import logo from './static/logo.png'

setAddon(JSXAddon)

const languages = [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }];

const stories = storiesOf('NavKnobs', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('without title', () =>{
    // const test = text('Test knob', 'Some text');
    return (<Nav logo={logo} alt={'logo'} languages={languages} changeLanguage={action('language changed')}>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </Nav>)
  })
