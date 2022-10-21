import React, {useState, useEffect} from "react";
import { Quote } from "../models/Quote";
import quotesList from "../services/QuotesList";

export function Quotes() {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        quotesList().then((response) => {
           const {data} =response;
           setQuotes(data);
        })
    },[]);

    return(
        <div>
            {quotes.map((quote) => (
                <ul>
                    <li>{quote.text}</li>
                    <li>{quote.author}</li>
                </ul>
            ))}
        </div>
    )
}