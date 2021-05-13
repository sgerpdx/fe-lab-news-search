export const fetchArticles = async () => {
  const res = await fetch('URL');
  const { data } = await res.json();

  return data;
};
