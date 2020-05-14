import { Request, Response } from 'express';
import { CrudController } from '../crudController';
import { wodModel } from '../../database/model';
import { HTTP_SUCESS, HTTP_BAD_REQUEST } from './constants';

export class WodController extends CrudController {

    public create(req: Request, res: Response) {
        const wod = new wodModel(req.body);
        wod.save().then(
            i => {
                res.status(HTTP_SUCESS).json({ "item saved": i.id })
            }).catch(
                err => {
                    res.status(HTTP_BAD_REQUEST).send(`Item has not been saved: ${err}`)
                })
    }

    public get(req: Request, res: Response) {
        const id = req.params.id;
        wodModel.findById(id, (error, item) => {
            if (error) res.status(HTTP_BAD_REQUEST).json(error);
            else res.status(HTTP_SUCESS).send(item);
        })
    }

    public update(req: Request, res: Response) {
        const id = req.params.id;
        const itemUpdated = req.body;
        wodModel.updateOne({ _id: id }, {
            date: itemUpdated.date,
            type: itemUpdated.type,
            time: itemUpdated.time,
            metcon: itemUpdated.metcon,
            result: itemUpdated.result,
            comment: itemUpdated.comment
        }, (error, item) => {
            if (error) res.status(HTTP_BAD_REQUEST).send(error)
            else res.status(HTTP_SUCESS).send(`Item ${item._id} updated`)
        })
    }

    public remove(req: Request, res: Response) {
        const id = req.params.id;
        wodModel.deleteOne({ _id: id }, (error) => {
            if (error) res.status(HTTP_BAD_REQUEST).send(error);
            else res.status(HTTP_SUCESS).send(`Item successfully deleted ${id}`);
        });

    }

    public getAll(req: Request, res: Response) {
       wodModel.find((error, wods) => {
            if (error) res.status(HTTP_BAD_REQUEST).send(error);
            else res.status(HTTP_SUCESS).send(wods)
        })
    }
}