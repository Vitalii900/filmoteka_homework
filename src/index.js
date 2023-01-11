import getPopularMovieFromServer from './getPopularMovieFromServer';

addPopularMovieToPage();

function addPopularMovieToPage() {
  getPopularMovieFromServer().then(data => {
    console.log(data.results);
    const {id, title, poster_path, release_date, genre_ids} = data.results;

  });
}










function addMurkupOnPage(arrayOfObjects) {
  const murkupFromArray = arrayOfObjects.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `<div class="photo-card">
              <a href="${largeImageURL}"> 
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
              </a>
              <div class="info">
                <p class="info-item">
                  <b>Likes: </b>${likes}
                </p>
                <p class="info-item">
                  <b>Views: </b>${views}
                </p>
                <p class="info-item">
                  <b>Comments: </b>${comments}
                </p>
                <p class="info-item">
                  <b>Downloads: </b>${downloads}
                </p>
              </div>
      </div>`;
      }
    )
    .join('');

  galleryRef.insertAdjacentHTML('beforeend', murkupFromArray);
}

