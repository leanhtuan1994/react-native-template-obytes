import React from 'react';

import { cleanup, fireEvent, render, screen } from '@/core/test-utils';

import { Input } from './input';

afterEach(cleanup);

describe('Input component ', () => {
  it('renders correctly ', () => {
    render(<Input testID="text-input" />);
    expect(screen.queryByTestId('text-input')).not.toBeNull();
  });

  it('should render the placeholder correctly ', () => {
    render(<Input testID="text-input" placeholder="Enter your username" />);
    expect(screen.queryByTestId('text-input')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your username')).toBeDefined();
  });

  it('should render the label correctly ', () => {
    render(<Input testID="text-input" label="Username" />);
    expect(screen.queryByTestId('text-input')).not.toBeNull();
    expect(screen.queryByTestId('text-input-label')).not.toBeNull();
    expect(screen.queryByTestId('text-input-label')?.props.children).toBe(
      'Username'
    );
  });

  it('should render the error message correctly ', () => {
    render(<Input testID="text-input" error="This is an error message" />);
    expect(screen.queryByTestId('text-input')).not.toBeNull();
    expect(screen.queryByTestId('text-input-error')).not.toBeNull();
    expect(screen.queryByTestId('text-input-error')?.props.children).toBe(
      'This is an error message'
    );
  });
  it('should render the label, error message & placeholder correctly ', () => {
    render(
      <Input
        testID="text-input"
        label="Username"
        placeholder="Enter your username"
        error="This is an error message"
      />
    );
    expect(screen.queryByTestId('text-input')).not.toBeNull();
    expect(screen.queryByTestId('text-input-label')).not.toBeNull();
    expect(screen.queryByTestId('text-input-label')?.props.children).toBe(
      'Username'
    );
    expect(screen.queryByTestId('text-input-error')).not.toBeNull();
    expect(screen.queryByTestId('text-input-error')?.props.children).toBe(
      'This is an error message'
    );
    expect(screen.getByPlaceholderText('Enter your username')).toBeDefined();
  });

  it('should trigger onFocus event correctly ', () => {
    const onFocus = jest.fn();
    render(<Input onFocus={onFocus} />);

    const input = screen.getByTestId('input');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should trigger onBlur event correctly ', () => {
    const onBlur = jest.fn();
    render(<Input onBlur={onBlur} />);

    const input = screen.getByTestId('input');
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});