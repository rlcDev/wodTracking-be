import { Request, Response } from 'express';

export abstract class CrudController {
    public abstract create(req: Request, res: Response): void;
    public abstract get(req: Request, res: Response): void;
    public abstract update(req: Request, res: Response): void;
    public abstract remove(req: Request, res: Response): void;
    public abstract getAll(req: Request, res: Response): void;
}