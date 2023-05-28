export async function GET() {
    let quote;
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    await fetch(
        "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
        requestOptions
    )
        .then((response) => response.json())
        .then((result) => {
            quote = result.quoteText;
        })
        .catch((error) => console.log("error", error));

    return new Response(quote);
}
