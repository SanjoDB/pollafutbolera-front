import { PollaService } from "../../services/polla.service";

export const createPolla = async (category: any) => {
    const service = new PollaService(process.env.REACT_APP_POLLA_SERVICE_URL || 'localhost:8000/pollafutbolera');
    const categories = await service.createPolla(category);
    return categories;
}