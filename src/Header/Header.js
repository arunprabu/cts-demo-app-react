import React from 'react';
import Config from '../config';

import configData from "../apiConfig.json";


const Header = () => {

  const config = new Config();

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  return (
    <div>
      <h1>My App</h1>
      <h2>Option 1 - Using JS</h2>
      <p>{config.BLOG_API_URL}</p>
      <hr />
      <h2>Option 2 - Using JSON </h2>
      <p>{configData.SERVER_URL}</p>
      <hr/>
      <h2>Option 3 - Using .env file</h2>
      <p>{ SERVER_URL } </p>
    </div>
  )
}

export default Header
