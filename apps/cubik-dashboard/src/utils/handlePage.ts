export const handlePageSkip = (page: string | undefined) => {
  if (!page) return 1;
  if (page === '1') return 1;
  if (isNaN(parseInt(page))) return 1;
  if (parseInt(page) < 0) return 1;

  return parseInt(page);
};
