import axios from "../../Utils/Axios";
import { loadpeople } from "../Reducers/peopleReducer";

export const asyncpeopleload = (id) => async (dispatch, getstate) => {
  try {
    const [
      detail,
      externalID,
      combinedCredits,
      movieCredits,
      tvCredits,
    ] = await Promise.all([
      axios.get(`/person/${id}`),
      axios.get(`/person/${id}/external_ids`),
      axios.get(`/person/${id}/combined_credits`),
      axios.get(`/person/${id}/movie_credits`),
      axios.get(`/person/${id}/tv_credits`),
    ]);
    
    let SingleDetails = {
      detail: detail.data,
      externalID: externalID.data,
      combinedCredits: combinedCredits.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
    }

    // console.log(SingleDetails)
    dispatch(loadpeople(SingleDetails))
   
  } catch (error) {
    console.error(error);
  }
};

