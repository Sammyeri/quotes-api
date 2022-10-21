import axios from "axios";
import { Quote } from "../models/Quote";

export default function quotesList() {
    return axios.get<Quote[]>("https://grandcircusco.github.io/demo-apis/quotes.json");
}