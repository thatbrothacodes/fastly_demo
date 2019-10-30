import express from 'express';
import assignmentData from '../data/assignment.json';

export default () => {
    const router = express.Router();
    const pageSize: number = 25;

    router.get('/', async(req, res, next) => {
        const page: number = (req.query.page - 1) || 0;
        const offset: number = page * pageSize;
        
        try {
            const data: Array<any> = assignmentData.data.slice(offset, offset + pageSize);
            const rows: Array<any> = data.map(i => {
                return {
                    id: i.id,
                    name: i.name
                }
            });
            res.status(200).json({
                rows,
                count: assignmentData.data.length
            });
        } catch(e) {
            res.status(500).json({
                error: 'Internal Sever Error'
            });
            next(e);
        }
    });

    router.get('/search', async(req, res, next) => {
        const page: number = (req.query.page - 1) || 0;
        const offset: number = page * pageSize;
        const nameQuery: string = req.query.name;
        
        try {
            const data: Array<any> = assignmentData.data
                .filter(p => p.name.includes(nameQuery))
                .slice(offset, offset + pageSize);

            res.status(200).json({
                rows: data,
                count: data.length
            });
        } catch(e) {
            res.status(500).json({
                error: 'Internal Sever Error'
            });
            next(e);
        }
    });

    router.get('/:id', async(req, res, next) => {
        try {
            const data: any = assignmentData.data.find(i => i.id === parseInt(req.params.id));
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json({
                error: 'Internal Sever Error'
            });
            next(e);
        }
    });

    return router;
}
