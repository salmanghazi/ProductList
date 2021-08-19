import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "../products";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

describe('Product component tests', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Products />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly initial document', () => {
    const inputs = container.querySelectorAll('input');
    // expect(inputs).toHaveLength(5);
    // expect(inputs[0].labels).toBe('Name');
    // expect(inputs[1].name).toBe('password');
    // expect(inputs[2].value).toBe('Login');
    // expect(inputs[3].name).toBe('login');
    // expect(inputs[4].name).toBe('password');

    // const label = container.querySelector('label');
    // expect(label).not.toBeInTheDocument();

  });

});