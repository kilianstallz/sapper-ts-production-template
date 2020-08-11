import type { Request, Response } from 'express'

export async function get(req: Request, res: Response, next) {
    const { slug } = req.query;
    res.end(JSON.stringify({slug}))
}