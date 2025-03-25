import axios, {AxiosInstance} from 'axios';
import Cookies from 'js-cookie';

export class PollaService{

    private axios: AxiosInstance;

    public constructor(baseUrl: string) {
        const token = this.getAuthToken();
        this.axios = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            timeout: 10000, // Set a timeout of 10 seconds
        });
    }


    private getAuthToken(): string | null {
        const currentUser = Cookies.get('currentUser');
        if (currentUser) {
            const user = JSON.parse(currentUser);
            return user.token;
        }
        return null;
    }

    public async getAllPollas(){
        try {
            const token = this.getAuthToken();
            const response = await this.axios.get("/polla", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching pollas', error);
            throw error;
        }
    }

    public async getPollaById(id: string) {
        try {
            const token = this.getAuthToken();

            const response = await this.axios.get(`/polla/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            return response.data;
        } catch (error) {
            console.error(`Error fetching polla with id ${id}`, error);
            throw error;
        }
    }

    
    public async createPolla(polla: any) {
        try {
            const response = await this.axios.post("/polla/save", polla);
            return response.data;
        } catch (error) {
            console.error('Error creating polla', error);
            throw error;
        }
    }

}