import express, { Request, Response } from 'express';
import { wodController } from '../../contollers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    wodController.create(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
    wodController.get(req, res);
});

router.patch('/:id/update', (req: Request, res: Response) => {
    wodController.update(req, res);
});

router.delete('/:id/delete', (req: Request, res: Response) => {
    wodController.remove(req, res);
});

router.get('/', (req: Request, res: Response) => {
    wodController.getAll(req, res);
});
