import axios from "../../Utils/Axios";
import { loadTv } from "../Reducers/TvReducer";

 
export const asynctvload = (id) => async(dispatch) => {
    try{
    const [
        detail,
        externalID,
        recommendations,
        videos,
        similar,
        WatchProviders,
        translations
      ] = await Promise.all([
        axios.get(`/tv/${id}`),
        axios.get(`/tv/${id}/external_ids`),
        axios.get(`/tv/${id}/recommendations`),
        axios.get(`/tv/${id}/videos`),
        axios.get(`/tv/${id}/similar`),
        axios.get(`/tv/${id}/watch/providers`),
        axios.get(`/tv/${id}/translations`)
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
      dispatch(loadTv(SingleDetails))
     
    } catch (error) {
      console.error(error);
    }

}