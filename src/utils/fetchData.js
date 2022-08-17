export const exerciseOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b8021ebc95msh48691e6de21e1a5p1c2e65jsndc185c5b5a94',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const youtubeOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b8021ebc95msh48691e6de21e1a5p1c2e65jsndc185c5b5a94',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, option) => {
  const reponse = await fetch(url, option);
  const data = await reponse.json();
  return data;
};
