// src/components/Todo.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Todo from "../components/Todo.js";

test('Todo renders correctly', () => {
    const tree = renderer.create(
       <Todo todo={{text: "Test", id: 1, done: false}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
