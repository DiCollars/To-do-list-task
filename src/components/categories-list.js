import React from 'react';

const categoryList = ['Private', 'Public', 'My'];

export default function CategoryList() {
  return (
    <div>
      <ol>
        {categoryList.map(category => (
          <li>{category}</li>
        ))}
      </ol>
    </div>
  );
}