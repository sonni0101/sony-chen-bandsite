export class BandSiteApi {
    constructor(apiKey, baseUrl) {
        this.apiKey = "b633b25d-d38c-4e8c-9af4-e1a85935a8e3";  // Static API key
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

    likeComment = async (commentId) => {
        try{
            const url = `${this.baseUrl}comments/${commentId}/like?api_key=${this.apiKey}`;
            const response = await axios.put(url, commentId);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };

    deleteComment = async (commentId) => {
        try{
            const url = `${this.baseUrl}comments/${commentId}?api_key=${this.apiKey}`;
            const response = await axios.delete(url, commentId);
            const result = response.data;
            return result;
        } catch (error) {
            return (error);
        }
    };
}


