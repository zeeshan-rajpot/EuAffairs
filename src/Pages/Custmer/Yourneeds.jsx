import React from 'react';
import NeedsCard from './NeedsCard';

const Yourneeds = () => {
    const cards = [
        {
          title: 'The path to technical leadership',
          date: 'Dec 28',
          readTime: '7',
          category: 'Leadership',
          description: 'If software development feels like it is only part of your professional purpose, ...',
          image: 'https://via.placeholder.com/300' // replace with actual image
        },
        {
          title: 'The path to technical leadership: ',
          date: 'Dec 28',
          readTime: '7',
          category: 'Leadership',
          description: 'If software development feels like it is only part of your professional purpose, ...',
          image: 'https://via.placeholder.com/300' // replace with actual image
        },
        {
          title: 'The path to technical leadership: ',
          date: 'Dec 28',
          readTime: '7',
          category: 'Leadership',
          description: 'If software development feels like it is only part of your professional purpose, ...',
          image: 'https://via.placeholder.com/300' // replace with actual image
        }
      ];
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <NeedsCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Yourneeds;
