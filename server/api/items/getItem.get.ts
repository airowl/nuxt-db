import ItemsController from "~/server/controllers/itemsController";

export default defineEventHandler(async (event) => {
    const {id} = getQuery(event);

    if(!id){
        throw createError({
            statusCode: 400,
            statusMessage: 'ID is undefined',
        })
    }

    // prisma init
    try {
        const c = new ItemsController();

        const item = await c.getItem(String(id));

        //const item = await prisma.item.findFirst({
        //    where: {
        //        id: String(id)
        //    }
        //});

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
            data: id,
        });
    }

})
