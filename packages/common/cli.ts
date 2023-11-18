import { fetchPossibleSwapRoute } from './jupiter';

(async () => {
  const route = await fetchPossibleSwapRoute(
    'So11111111111111111111111111111111111111112',
    1,
  );

  console.log(route);
})();
