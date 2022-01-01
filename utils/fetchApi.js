export const baseUrl = 'https://bayut.p.rapidapi.com/auto-complete'

export const fetchApi = async () => {    
    var APIData = await fetch("https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "47840682d7msh909e96eb14b8d63p1b6040jsn940e5be51aa2"
        }
    })
    var data = await APIData.json();
    return data;
}
