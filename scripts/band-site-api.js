export class BandSiteApi {
    constructor(apiKey, baseUrl) {
        this.apiKey = "27144eb1-1da3-4727-a8d3-2b47af0e571a";  // Static API key
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';  // Static base URL
    }

    getComments = async () => {
        try{
            const url = `${this.baseUrl}comments?api_key=<${this.apiKey}>`;
            const response = await axios.get(url);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };

    postComment = async () => {
        try{
            const url = `${this.baseUrl}comments?api_key=<${this.apiKey}>`;
            const response = await axios.post(url);
            const result = response.data;
            // console.log (result);
        } catch (error) {
            return (error);
        }
    };

    getShows = async () => {
        try{
            const url = `${this.baseUrl}showdates?api_key=<${this.apiKey}>`;
            const response = await axios.get(url);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };
}


// async function test(){
//     const api = new BandSiteApi;
//     await api.getComments();
//     await api.getShows();
// };

// test();

