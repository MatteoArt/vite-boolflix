import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    searchText: "",
    //metodo a cui passo la stringa con cui effettuare la ricerca che 
    //verrà poi passata ai params della chiamata axios
    fetchFilms(search) {
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "bbbbe1f6641100f5a65f3317ba27b0dc",
                query: search
            }
        }).then((response) => {
            let ris = response.data.results;
            this.filmList = ris;
            //ora la proprietà filmlist contiene il risultato della ricerca
            console.log(this.filmList);
        })
    },
});
