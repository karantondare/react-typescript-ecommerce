import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './menu-item.styles.scss';

export interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

export const MenuItem = ({ title, imageUrl, size, linkUrl }: MenuItemProps) => {
  let history = useHistory();
  let match = useRouteMatch();

  console.log(match);

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};
