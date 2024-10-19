import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface ItemInterface {
    slug: string,
    title: string,
    body: string
}

export async function createMany(n:number){

    await prisma.item.deleteMany();

    const result = [];

    for (let index = 0; index < n; index++) {
        const item:ItemInterface  = await prisma.item.create({
            data: {
                slug: faker.string.sample(),
                title: faker.string.sample(),
                body: faker.string.sample()
            },
        });
        result.push(item);
    }

    await prisma.$disconnect();

    return {
        result: result,
        count: result.length
    }
}

