import axios from 'axios';

const fetchImagesWithQuery = (query, page = 1) => {
  const apiKey = '19901626-05d28a6fd401ec47b5efa4d58';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data.hits);
};
export default { fetchImagesWithQuery };
