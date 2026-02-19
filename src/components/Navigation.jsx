import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/todolist">TodoList</NavLink>
      <a href="http://www.naver.com" target="_blank" rel="noopener noreferrer">
        네이버
      </a>
    </nav>
  );
}

export default Navigation;
