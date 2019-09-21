import HttpService from '@veams/http-service';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

// Service instance
const httpService = new HttpService({
    type: 'json',
    headers
});

/**
 * Method overrides the default parser,
 * which only returns `responseText`
 */
httpService.parser = ({ request }) => ({
    body: request.responseText ? JSON.parse(request.responseText) : {},
    status: request.status,
    statusText: request.statusText
});

class GeographyPostsService {
    private endpoint = 'https://wf-challenge-abqs4otg74.herokuapp.com/api/v1';
    private http: any = httpService;

    /**
     * Get data
     */
    public getData(url: string, data: any) {
        return this.http.get(url);
    }

    /**
     * Post data
     */
    public postData(url: string, data: any) {
        return this.http.post(url, data.request);
    }

    /**
     * Put data
     */
    public putData(url: string, data: any) {
        return this.http.put(url, data.request);
    }

    /**
     * Delete data
     */
    public deleteData(url: string, data: any) {
        return this.http.delete(url);
    }

    /**
     *  Geography Posts
     */
    public getGeographyPosts(data: any) {
        return this.getData(`${this.endpoint}/posts`, data);
    }

    public getGeographySinglePost(data: any) {
        return this.getData(`${this.endpoint}/posts/${data.postId}`, data);
    }

    public createGeographyPost(data: any) {
        return this.postData(`${this.endpoint}/posts`, data);
    }

    public updateGeographyPost(data: any) {
        return this.putData(`${this.endpoint}/posts/${data.postId}`, data);
    }

    public deleteGeographyPost(data: any) {
        return this.deleteData(`${this.endpoint}/posts/${data.postId}`, data);
    }
}

const geographyPostsService = new GeographyPostsService();

export default geographyPostsService;
