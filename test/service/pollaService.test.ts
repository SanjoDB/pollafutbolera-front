import { PollaService } from '../../src/services/polla.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Cookies from 'js-cookie';

describe('PollaService', () => {
    //let mock: MockAdapter;
    let service: PollaService;

    beforeEach(() => {
        //mock = new MockAdapter(axios);
        service = new PollaService('http://localhost:8000/pollafutbolera');
        Cookies.set('currentUser', JSON.stringify({ token: 'test-token' }));
    });

    afterEach(() => {
        //mock.reset();
        Cookies.remove('currentUser');
    });
/*
    it('should fetch all pollas', async () => {
        const pollas = [{ id: 1, name: 'Polla 1' }];
        //mock.onGet('/polla').reply(200, pollas);

        const result = await service.getAllPollas();
        expect(result).toEqual(pollas);
    });

    it('should fetch a polla by id', async () => {
        const polla = { id: 1, name: 'Polla 1' };
        //mock.onGet('/polla/1').reply(200, polla);

        const result = await service.getPollaById('1');
        expect(result).toEqual(polla);
    });
*/
    it('should create a new polla', async () => {
        const newPolla = {
            startDate: new Date(),
            endDate: new Date(),
            isPrivate: true,
            imageUrl: 'http://example.com/image.png',
            platformConfig: {"hook":"test"},
            tournamentId: 1
        };
        const createdPolla = { id: 1, ...newPolla };
        //mock.onPost('/polla/save').reply(200, createdPolla);

        const result = await service.createPolla(newPolla);
        expect(result).toEqual(createdPolla);
    });
/*
    it('should handle errors when fetching all pollas', async () => {
        //mock.onGet('/polla').reply(500);

        await expect(service.getAllPollas()).rejects.toThrow();
    });

    it('should handle errors when fetching a polla by id', async () => {
        //mock.onGet('/polla/1').reply(500);

        await expect(service.getPollaById('1')).rejects.toThrow();
    });

    it('should handle errors when creating a polla', async () => {
        //mock.onPost('/polla/save').reply(500);

        await expect(service.createPolla({
            startDate: new Date(),
            endDate: new Date(),
            isPrivate: true,
            imageUrl: 'http://example.com/image.png',
            platformConfig: {},
            tournamentId: 1
        })).rejects.toThrow();
    });*/
});
