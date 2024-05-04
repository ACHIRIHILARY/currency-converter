
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e77062eb91msh4dde1a91ecc4f2cp11902djsn277f35de9bd9',
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
    }
};



// get the list of currencies
//let currency_data = ""
//let codes = ""

function get_all_currencies() {
    const currency_list_url = "https://currency-converter5.p.rapidapi.com/currency/list"

    try {
        fetch(currency_list_url, options)
            .then(response => response.json())
            .then(data => {
            console.log(Object.keys("data", data))
                // currency_data = data
                // codes = Object.keys(currency_data)
                // console.log(codes)
            })

    } catch (err) {
        console.log(err)
    }
}

get_all_currencies()




