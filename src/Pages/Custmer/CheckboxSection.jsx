import React from 'react';

const CheckboxSection = ({ category, items, onCategoryChange, onSubcategoryChange }) => (
  <div>
    <label className="flex space-x-2 ">
      {/* <input
        type="checkbox"
        className="form-checkbox text-green-500"
        checked={items.every(item => item.checked)}
        onChange={onCategoryChange}
      /> */}
      <span className="font-semibold text-lg ">{category}</span>
    </label>
    <div className="space-y-0 ml-4">
      {items.map((item, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-green-500"
            checked={item.checked}
            onChange={() => onSubcategoryChange(index)}
          />
          <span>{item.label}</span>
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxSection;
