import React, { useState } from 'react';

import { sectionsArray } from '../../data/directory.data';
import { MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.scss';

export interface SectionsArray {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

export const Directory = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sections, setSections] = useState<SectionsArray[]>(sectionsArray);

  return (
    <div className='directory-menu'>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  );
};
