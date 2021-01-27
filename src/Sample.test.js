import App from './App.svelte';
import { render } from '@testing-library/svelte';

test('App', () => {
  const { getByText } = render(App, {

  });

  expect(getByText('Kanishk, Rohila')).toBeInTheDocument();
});