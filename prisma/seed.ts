import { createMany } from "./itemSeed.ts";

console.log('START');

async function main() {

    const resItem = await createMany(10);

    console.log(await resItem);
}

main()
    .catch(async (e) => {
        console.error(e)
    })
    .finally(async () => {
        console.log('finish');
    })

console.log('END');