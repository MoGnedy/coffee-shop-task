const app = require("../../app");
const db = require("../../models");
const { findAllBy } = require("../../repositories/coffee-machines.repository");
const coffeeMachines = require("../../seeders/data/coffee-machines.json");
const { coffeeMachinesProductTypes } = require("../../helpers");

const addTestData = async () => {
  await db.CoffeeMachine.bulkCreate(coffeeMachines, { ignoreDuplicates: true });
};

const removeTestData = async () => {
  await db.CoffeeMachine.destroy({ where: {} });
};

describe("GET /api/v1/coffee-machines ", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await addTestData();
  });

  test("It should return an object", async () => {
    const coffeeMachines = findAllBy();

    expect(coffeeMachines).toBeInstanceOf(Object);
  });

  test("All large machines", async () => {
    const coffeeMachines = await findAllBy({
      product_type: coffeeMachinesProductTypes.COFFEE_MACHINE_LARGE,
    });
    console.log(coffeeMachines);
    const data = coffeeMachines.map((coffeeMachine) => coffeeMachine.sku);
    expect(data).toBeInstanceOf(Array);
    expect(data).toStrictEqual(["CM101", "CM102", "CM103"]);
  });

  afterAll(async () => {
    await removeTestData();
    await db.sequelize.close();
  });
});
