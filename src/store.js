import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    fetchFilms() {
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "bbbbe1f6641100f5a65f3317ba27b0dc",
                query: "John wick"
            }
        }).then((response) => {
            let ris = response.data.results;
            console.log(ris);
        })
    }
});
