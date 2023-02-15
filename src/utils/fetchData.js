const exAPI = {
  baseUrl: 'https://youtube-search-and-download.p.rapidapi.com/',
  options: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }
}
const ytAPI = {
  baseUrl: 'https://exercisedb.p.rapidapi.com/',
  options: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  }
}
const calcAPI = {
  baseUrl: 'https://mega-fitness-calculator1.p.rapidapi.com/',
  options: {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
    }
  }
}


export const fetchData = async (db, urlEnd) => {
  let response;

  if (db === 'ex') {
    let url = exAPI.baseUrl + urlEnd;
    response = await fetch(url, exAPI.options)
      .then(data => data.json())
      .catch(err => console.log(err));

  } else if ( db === 'yt' ) {
    let url = ytAPI.baseUrl + urlEnd;
    response = await fetch(url, ytAPI.options)
      .then(data => data.json())
      .catch(err => console.log(err));

  } else {
    let url = calcAPI.baseUrl + urlEnd;
    response = await fetch(url, calcAPI.options)
      .then(data => data.json())
      .catch(err => console.log(err)); 
  }

  return response
}