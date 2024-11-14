import ItemsController from "~/server/controllers/itemsController";

export default defineEventHandler(async () => {

    
    try {
        const c = new ItemsController();
        const items = await c.getItems();

        return {
            statusCode: 200,
            data: items,
        };
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 404,
            statusMessage: 'Datas not found',
        });
    }


})
