import { faker } from "@faker-js/faker";

const length = 20;
const list = Array.from({ length }, () => ({
  id: faker.datatype.uuid(),
  product: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.abstract(200, 200, true),
}));

export default list;