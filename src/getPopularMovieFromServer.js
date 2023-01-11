// import axios from 'axios';

const API_KEY = '197007a676a4d3e84c6bdb6f21b18a1a';

// export default async function getPhotoFromServer(value, page) {
//   const KEY = '32193446-673e16063f0204736e3ddb7cd';
//   try {
//     const response = await axios.get(
//       `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
//     );
//     const arrayOfPhoto = response.data;
//     // console.log(response.data);
//     return arrayOfPhoto;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default function getPopularMovieFromServer() {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
  .then(response => response.json())
}


