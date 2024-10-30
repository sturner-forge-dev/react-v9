import { expect, test, vi, afterEach } from 'vitest';
import { renderHook, waitFor, cleanup } from '@testing-library/react';
import createFetchMock from 'vitest-fetch-mock';
import { usePizzaOfTheDay } from '../usePizzaOfTheDay';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

afterEach(cleanup);

const testPizza = {
  id: 'cali_ckn',
  name: 'The California Chicken Pizza',
  category: 'Chicken',
  description:
    'Chicken, Artichoke, Spinach, Garlic, Jalapeno Peppers, Fontina Cheese, Gouda Cheese',
  image: '/public/pizzas/cali_ckn.webp',
  sizes: {
    S: 12.75,
    M: 16.75,
    L: 20.75
  }
};

test('to be null on initial load', async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());

  expect(result.current).toBeNull();
});

test('to call the API and give back the pizza of the day', async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());

  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });

  expect(fetchMocker).toBeCalledWith('/api/pizza-of-the-day');
});
