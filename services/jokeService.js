const { default: axios } = require("axios");

const fetchJoke = async (category) => {
    const URL = `https://jokes-always.p.rapidapi.com/${category}`;
    const headers = {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST
    };

    const response = await axios.get(URL, {headers});
    return response.data;
};

module.exports = { fetchJoke };
