import { faker } from "@faker-js/faker";
function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      "https://imgs.search.brave.com/vdywdcVhOyg1nayF6JBPG_6jpZt03MfO4zqZ8RRs3M0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMzA4/bGprcTZlNjJvMS5j/bG91ZGZyb250Lm5l/dC9pbWcvamRieGd4/U25SV0taeHJabDJm/NzdSQS90YWIvZmls/ZS5qZmlm",
    miles: 1000,
    gearType: "Automatic",
    price: faker.finance.amount({ min: 4000, max: 20000 }),
  };
}

const carList = faker.helpers.multiple(createRandomCarList, {
  count: 7,
});

export default { carList };
