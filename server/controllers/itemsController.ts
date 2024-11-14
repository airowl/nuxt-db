import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

export interface ItemInterface {
    slug?: string,
    title: string,
    body?: string
}


class ItemsController {


    public async getItems():Promise<ItemInterface[]>{
        const items = await prisma.item.findMany();
        return items;
    }

    public async getItem(criteria:object|string): Promise<ItemInterface|null>{

        let query;
        switch (typeof criteria) {
            case 'object':
                query = criteria;
                break;
            case 'string':
                query = {
                    id: criteria
                };
                break;
        }
        
        const item = await prisma.item.findFirst({
            where: query
        });

        return item;
    }

    public async createItem(data: Prisma.ItemCreateInput): Promise<ItemInterface|null>{
        const item:ItemInterface = await prisma.item.create({
            data: data
        });
        return item;
    }

    public async updateItem(criteria:string, data:Prisma.ItemCreateInput): Promise<ItemInterface|null>{
        const item:ItemInterface = await prisma.item.update({
            where: {
                id: criteria
            },
            data: data
        });
        return item;
    }

    public async deleteItem(criteria:string): Promise<ItemInterface|null>{
        const item:ItemInterface = await prisma.item.delete({
            where: {
                id: criteria
            }
        });
        return item;
    }

}

export default ItemsController;