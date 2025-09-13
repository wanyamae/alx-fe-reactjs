import React from 'react';

const DeleteRecipeButton = ({ onDelete }) => (
  <button
    onClick={onDelete}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Delete Recipe
  </button>
);

export default DeleteRecipeButton;
