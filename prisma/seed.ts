
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

console.log('START');

async function main() {

    const item  = await prisma.item.create({
        data: {
            slug: 'asdasd-asdasd',
            title: 'Alice',
            body: 'foo'
        },
    });
    
    console.log(item);
}

main()
    .catch(async (e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

console.log('END');