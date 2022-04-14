import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import RouteStoryListCSS from './css/routeStoryList.module.css';

import RouteStoryItem from "./routeStoryItem";

const RouteStoryList = () => {
  return (
    <section className={RouteStoryListCSS.route_list_story}>
      <div className={RouteStoryListCSS.route_list_story__container}>
        <ul className={RouteStoryListCSS.route_story}>
          <RouteStoryItem />
        </ul>
      </div>
    </section>
  )
};

export default RouteStoryList;