import React, { useState } from 'react';

const EditRecipeForm = ({ recipe, onSave }) => {
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Save</button>
    </form>
  );
};

export default EditRecipeForm;
