import React from 'react';

const CheckboxSection = ({ category, items, onChange }) => (
  <div>
    <h3 className="font-semibold text-lg mb-2">{category}</h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-green-500"
            checked={item.checked}
            onChange={() => onChange(index)}
          />
          <span>{item.label}</span>
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxSection;
