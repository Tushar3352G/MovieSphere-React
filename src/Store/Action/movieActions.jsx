import axios from "../../Utils/Axios";
import { loadMovie } from "../Reducers/movieReducer";

export const asyncmovieload = (id) => async (dispatch, getstate) => {
  try {
    const [
      detail,
      externalID,
      recommendations,
      videos,
      similar,
      WatchProviders,
      translations
    ] = await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/external_ids`),
      axios.get(`/movie/${id}/recommendations`),
      axios.get(`/movie/${id}/videos`),
      axios.get(`/movie/${id}/similar`),
      axios.get(`/movie/${id}/watch/providers`),
      axios.get(`/movie/${id}/translations`)
    ]);
    
    let SingleDetails = {
      detail: detail.data,
      externalID: externalID.data,
      recommendations: recommendations.data.results,
      videos: videos.data.results.find(m => m.type === "Trailer"),
      similar: similar.data.results,
      WatchProviders: WatchProviders.data.results.IN,
      translations: translations.data.translations.filter((m,i) => m.english_name),
    }

    // console.log(SingleDetails)
    dispatch(loadMovie(SingleDetails))
   
  } catch (error) {
    console.error(error);
  }
};

