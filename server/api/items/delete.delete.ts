import { z } from 'zod';
import ItemsController from "~/server/controllers/itemsController";

export default defineEventHandler(async (event) => {

    const {id} = getQuery(event);

    try{
        const c = new ItemsController();

        const item = await c.deleteItem(String(id));

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
                id: id
            },
        });
    }
});