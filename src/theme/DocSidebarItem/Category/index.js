import React from 'react';
import OriginalCategory from '@theme-original/DocSidebarItem/Category';
import { FaRocket, FaBook, FaWrench } from 'react-icons/fa';

const iconMap = {
  'Getting Started': <FaRocket style={{marginRight: '0.5rem'}} />,
  'Basics': <FaBook style={{marginRight: '0.5rem'}} />,
  'Technical Details': <FaWrench style={{marginRight: '0.5rem'}} />,
};

export default function Category(props) {
  const icon = iconMap[props.item.label];
  
  if (icon) {
    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        {icon}
        <OriginalCategory {...props} />
      </div>
    );
  }
  
  return <OriginalCategory {...props} />;
}