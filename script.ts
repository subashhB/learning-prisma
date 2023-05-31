import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Ths was just for practice and I have recorded all the codes that were executed ehre somewhere safe ;)
async function main() {

  const user = await prisma.user.deleteMany({
    where:{
      age: {
        gt: 20
      }
    }
  })
  console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
