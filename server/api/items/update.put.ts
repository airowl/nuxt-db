import { z } from 'zod';
import ItemsController from "~/server/controllers/itemsController";

export default defineEventHandler(async (event) => {

    const {id} = getQuery(event);

    const {
        title,
        slug,
        body
        } = await readBody(event);

    try{
        const c = new ItemsController();

        const item = await c.updateItem(
            String(id),
            {
                slug: slug,
                title: title,
                body: body
            }
        );

        return {
            statusCode: 200,
            data: item,
        };

    } catch (error) {
        console.log(error);
        throw createError({
            statusCode: 404,
            statusMessage: 'Data not found',
            message: 'foo',
            data: {
                slug: slug,
                title: title,
                body: body
            },
        });
    }
});