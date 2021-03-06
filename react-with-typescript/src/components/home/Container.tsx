import React from 'react'
import { Button } from 'antd';
import logo from '@/assets/logo.svg';

function Container() {
  return (
    <div className="home-container">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Button type="primary">Button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Container
