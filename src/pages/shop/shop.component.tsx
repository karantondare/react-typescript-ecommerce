import React, { useState } from 'react';

import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';
import { shopData } from '../../data/shop.data';

export interface CollectionState {
  id: number;
  title: string;
  routeName: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export const ShopPage = () => {
  const [collections, setCollections] = useState<CollectionState[]>(shopData);

  return (
    <div className='shop-page'>
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};
