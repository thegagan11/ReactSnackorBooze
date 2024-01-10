import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const BASE_API_URL = "http://localhost:5000";

function NewItemForm({ type }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_API_URL}/${type}`, formData);
      history.push(`/${type}`);
    } catch (err) {
      console.error("Failed to add item", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
          type="text"
          name="recipe"
          id="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
          type="text"
          name="serve"
          id="serve"
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Add {type}</Button>
    </Form>
  );
}

export default NewItemForm;
