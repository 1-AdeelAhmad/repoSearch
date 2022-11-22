import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { repoMock, repoMockError } from './mocks/mockdata';

describe('App', () => {
  it('Should Render App With No Errors', async () => {
    render(
      <MockedProvider mocks={repoMock}>
        <App />
      </MockedProvider>
    );
    const container = await screen.findByTestId('appContainer');
    expect(container).toBeInTheDocument();
  });

  it('Should Show Loading Component', () => {
    render(
      <MockedProvider mocks={repoMock}>
        <App />
      </MockedProvider>
    );
    const loadingComponent = screen.getByTestId('loadingComponent');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('Should Show Error Component', async () => {
    render(
      <MockedProvider mocks={repoMockError}>
        <App />
      </MockedProvider>
    );
    const errorComponent = await screen.findByTestId('errorComponent');
    expect(errorComponent).toBeInTheDocument();
  });

  it('Should Render Repo Entry Info', async () => {
    render(
      <MockedProvider mocks={repoMock}>
        <App />
      </MockedProvider>
    );

    const component = await screen.findByText('testRepo');
    expect(component).toBeInTheDocument();
  });

  it('Should Update Search Query State on Input Change', async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    // @ts-ignore
    useStateSpy.mockImplementation((initialState) => [initialState, setState]);

    render(
      <MockedProvider mocks={repoMock}>
        <App />
      </MockedProvider>
    );

    const component = screen.getByTestId('repoSearchInput');
    expect(component).toBeInTheDocument();
    fireEvent.change(component, { target: { value: 'facebook' } });
    expect(setState).toHaveBeenCalledWith('facebook');
  });
});
