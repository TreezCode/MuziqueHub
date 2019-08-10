import axios from "axios";

export default {
    login: (loginInfo) => {
        return axios.post("/api/users/login", loginInfo);
    },
    signup: (signupInfo) => {
        return axios.post("/api/users/signup", signupInfo);
    },
    getArtistInfo: (artistName) => {
        return axios.get("/api/artist/search", { params: { artistName } });
    }
};