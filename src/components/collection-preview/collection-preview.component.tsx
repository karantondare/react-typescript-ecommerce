import React from 'react';
import { CollectionItem } from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

export interface CollectionPreviewProps {
  title: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export const CollectionPreview = ({ title, items }: CollectionPreviewProps) => {
  return (
    <div className='collection-preview'>
      <h1>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
};
