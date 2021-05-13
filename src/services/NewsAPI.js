const newsKey = process.env.NEWS_API_KEY;

export const fetchArticles = async (query) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q={query}&{newsKey}`
  );
  const { data } = await res.json();
  const articles = data.articles;

  return articles.map((article) => ({
    title: article.title,
    author: article.author,
    description: article.description,
  }));
};

// Example Response:
// {
// status: "ok",
// totalResults: 10995,
// articles: [
// {
// source: {
// id: "engadget",
// name: "Engadget"
// },
// author: "https://www.engadget.com/about/editors/richard-lawler",
// title: "Tesla 'suspends' Bitcoin car purchases citing environmental impact",
// description: "You can't buy a Tesla with Bitcoin anymore..",
// url: "https://www.engadget.com/elon-musk-bitcoin-221708146.html",
// urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2021-05/a0f90c30-b36f-11eb-aff6-04fb28cf2f4b",
// publishedAt: "2021-05-12T22:17:08Z",
// content: "Just weeks after Tesla started accepting Bitcoin as currency for cars, Elon Musk revealed in a tweet that it will \"suspend\" the effort. According to the release (Tesla does not appear to have a funct… [+768 chars]"
// },
// {
// source: {
// id: "techcrunch",
// name: "TechCrunch"
// },
// author: "Alex Wilhelm",
// title: "What Square’s smashing earnings tell us about consumer bitcoin demand",
// description: "Today we're talking Square earnings and its bitcoin base, especially in how it relates to the results of other entities that offer bitcoin sales.",
// url: "http://techcrunch.com/2021/05/07/what-squares-smashing-earnings-tell-us-about-consumer-bitcoin-demand/",
// urlToImage: "https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-ORNG.jpg?w=533",
// publishedAt: "2021-05-07T18:17:36Z",
// content: "Shares of Square are up more than 6% today after the American fintech company reported a staggering $5.06 billion in revenue in its Q1 2021 earnings report, far ahead of an expected tally of $3.36 bi… [+2045 chars]"
// },
// ]
// }
