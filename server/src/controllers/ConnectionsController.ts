import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { coach_id } = request.body;

    if (!coach_id) {
      return response.status(400).json({
        error: 'Missing coach_id'
      });
    }

    await db('connections').insert({
      coach_id,
    });

    return response.status(201).send();
  }
}