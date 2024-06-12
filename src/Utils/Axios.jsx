import axios from "axios";

const Axios = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGZiOGI5MWUzZWRlZGVhNjY1NTQwMTllYjAzYjMyMiIsInN1YiI6IjY2NWUwNTk3MzhjNzc2YzU5NWU1NDdmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3-tsSzFCelGpix7CzUtaKgiBEJIrI5P0kDesUqfiQ74'
      }
})

export default Axios