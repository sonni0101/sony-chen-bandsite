export class BandSiteApi {
    constructor(apiKey, baseUrl) {
        this.apiKey = "27144eb1-1da3-4727-a8d3-2b47af0e571a";  // Static API key
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';  // Static base URL
    }

    postComment = async (postBody) => {
        try {
            const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
            const response = await axios.post(url, postBody, 
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    };

    getComments = async () => {
        try{
            const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
            const response = await axios.get(url);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };

    getShows = async () => {
        try{
            const url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;
            const response = await axios.get(url);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };

    likeComment = async () => {
        try{
            const url = `${this.baseUrl}/comments/:id/like?api_key=${this.apiKey}`;
            const response = await axios.put(url);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };

    deleteComment = async () => {
        try{
            const url = `${this.baseUrl}/comments/:id?api_key=${this.apiKey}`;
            const response = await axios.delete(url);
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

