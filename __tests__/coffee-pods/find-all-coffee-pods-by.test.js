const db = require("../../models");
const coffeePods = require("../../seeders/data/coffee-pods.json");
const { coffeePodsProductTypes, coffeeFlavors } = require("../../helpers");
const { findAllBy } = require("../../repositories/coffee-pods.respository");

const addTestData = async () => {
  await db.CoffeePod.bulkCreate(coffeePods, { ignoreDuplicates: true });
};

const removeTestData = async () => {
  await db.CoffeePod.destroy({ where: {} });
};

describe("GET /api/v1/coffee-pods ", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await addTestData();
  });

  test("All large pods", async () => {
    const coffeePods = await findAllBy({
      product_type: coffeePodsProductTypes.COFFEE_POD_LARGE,
    });

    const data = coffeePods.map((coffeePod) => coffeePod.sku);
    expect(data).toStrictEqual([
      "CP101",
      "CP103",
      "CP111",
      "CP113",
      "CP121",
      "CP123",
      "CP131",
      "CP133",
      "CP141",
      "CP143",
    ]);
  });

  test("All espresso vanilla pods", async () => {
    const coffeePods = await findAllBy({
      product_type: coffeePodsProductTypes.ESPRESSO_POD,
      coffee_flavor: coffeeFlavors.COFFEE_FLAVOR_VANILLA,
    });

    const data = coffeePods.map((coffeePod) => coffeePod.sku);
    expect(data).toStrictEqual(["EP003", "EP007", "EP005"]);
  });

  afterAll(async () => {
    await removeTestData();
    await db.sequelize.close();
  });
});
