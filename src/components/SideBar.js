import React from 'react';
import 'components/sidebar.scss';

export default function SideBar(props) {
  return (
    <div id="sidebar">
      <div className="profile">
        <img className="rounded-circle" src="img/profile.png" alt="brian_profile_pic"/>
        <p>Brian Chang</p>
      </div>
      <div>
        <p>Junior Full Stack Developer</p>
        <p>ReactJS</p>
        <p>NodeJS with Express, Ruby on Rails</p>
        <p>PostgreSQL</p>
        <p>Contact Icons</p>
      </div>
    </div>
  )
}