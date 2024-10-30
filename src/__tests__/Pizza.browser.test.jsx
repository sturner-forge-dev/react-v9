import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';
import Pizza from '../Pizza';

test('alt text renders on pizza image', async () => {
  const name = 'My Favorite Pizza';
  const src = 'https://picsum.photos/200';
  const screen = render(
    <Pizza name={name} image={src} description="some kind of pizza" />
  );

  const img = await screen.getByRole('img');

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute('src', src);
  await expect.element(img).toHaveAttribute('alt', name);
});
