/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require('mysql');
const axios = require('axios');
const expect = require('chai').expect;
const fs = require('fs');
const util = require('util');
const dotenv = require('dotenv');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
dotenv.config();

const schema = fs.readFileSync('./schema.sql').toString();
const seed = fs.readFileSync('./seed.sql').toString();
const testDB = 'cmarket_test';

chai.use(chaiHttp);
let dbConnection, app, ordersController, spyGet, spyPost;
describe('๐  Cmarket Database', () => {
  before((done) => {
    ordersController = require('../controllers');
    spyGet = sinon.spy(ordersController.orders, 'get');
    spyPost = sinon.spy(ordersController.orders, 'post');
    dbConnection = mysql.createConnection({
      user: 'root',
      password: process.env.DATABASE_SPRINT_PASSWORD,
      multipleStatements: true,
    });
    dbConnection.connect(done);
  });

  beforeEach((done) => {
    /* Empty the db table befo test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query(
      `DROP DATABASE IF EXISTS ${testDB};
        CREATE DATABASE ${testDB};
        USE ${testDB};
        ${schema}
        ${seed}`,
      (err, result) => {
        if (result) {
          if (!app) {
            console.log('dd');

            app = require('../app');
          }
          done();
        }
      }
    );
  });

  describe('๐บ -------- Cmarket Router', () => {
    it('users router ํ์ผ์ด ์กด์ฌํด์ผ ํฉ๋๋ค', () => {
      let hasUsersRouter = fs.existsSync('./routes/users.js');
      expect(hasUsersRouter).to.be.true;
    });

    it('orders controller์๋ get, post ๋ฉ์๋๊ฐ ๊ฐ๊ฐ ์กด์ฌํด์ผ ํฉ๋๋ค', () => {
      expect(ordersController.orders).to.have.property('get');
      expect(ordersController.orders).to.have.property('post');
    });

    it('GET /users๋ orders controller์ get ๋ฉ์๋๋ฅผ ์คํํฉ๋๋ค', (done) => {
      axios
        .get('http://localhost:4000/users/1/orders')
        .then(() => {
          expect(spyGet.callCount).to.be.eql(1);
        })
        .then(done)
        .catch(done);
    });

    it('POST /users๋ orders controller์ post ๋ฉ์๋๋ฅผ ์คํํฉ๋๋ค', (done) => {
      axios({
        method: 'post',
        url: 'http://localhost:4000/users/1/orders',
        data: {
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        },
      })
        .then(() => {
          expect(spyPost.callCount).to.be.eql(1);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('๐น -------- Cmarket Controller', () => {
    it('GET /items ์์ฒญ์ ์ฑ๊ณตํ์ ๊ฒฝ์ฐ ์ํ์ฝ๋ 200์ ๋ณด๋ด์ผํฉ๋๋ค.', (done) => {
      chai
        .request(app)
        .get('/items')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('GET /users/:userId/orders ์์ฒญ์ ์ฑ๊ณตํ์ ๊ฒฝ์ฐ ์ํ์ฝ๋ 200์ ๋ณด๋ด์ผํฉ๋๋ค.', (done) => {
      chai
        .request(app)
        .get('/users/1/orders')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('POST /users/:userId/orders ์์ฒญ์์ ํด๋ผ์ด์ธํธ๊ฐ ์๋ชป๋ ์์ฒญ์ ํ์ ๊ฒฝ์ฐ ์ํ์ฝ๋ 400์ ๋ณด๋ด์ผํฉ๋๋ค.', (done) => {
      chai
        .request(app)
        .post('/users/1/orders')
        .send({ totalPrice: 79800 })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('POST /users/:userId/orders ์์ฒญ์ ์ฑ๊ณตํ์ ๊ฒฝ์ฐ ์ํ์ฝ๋ 201์ ๋ณด๋ด์ผํฉ๋๋ค.', (done) => {
      chai
        .request(app)
        .post('/users/1/orders')
        .send({
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });

  describe('โจ-------- Cmarket Model', () => {
    it('๋ฐ์ดํฐ๋ฒ?์ด์ค์ ์?์ฅ๋ ์ํ ๋ชฉ๋ก์ ๊ฐ์?ธ์์ผํฉ๋๋ค.', (done) => {
      chai
        .request(app)
        .get('/items')
        .end((err, res) => {
          expect(res.body.length).to.equal(8);
          done();
        });
    });

    it('์ฃผ๋ฌธ๋ด์ญ์ ๋ฐ์ดํฐ๋ฒ?์ด์ค์ ์?์ฅํด์ผํฉ๋๋ค.', (done) => {
      const query = util.promisify(dbConnection.query).bind(dbConnection);

      chai
        .request(app)
        .post('/users/1/orders')
        .send({
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        })
        .then(() => {
          const queryString = 'SELECT * FROM orders';
          return query(queryString);
        })
        .then((result) => {
          expect(result.length).to.equal(1);
          expect(result[0].total_price).to.equal(79800);
        })
        .then(() => {
          const queryString = 'SELECT * FROM order_items';
          return query(queryString);
        })
        .then((result) => {
          expect(result.length).to.equal(2);
          expect(result[0].order_id).to.equal(1);
          expect(result[0].item_id).to.equal(1);
          expect(result[0].order_quantity).to.equal(2);

          expect(result[1].order_id).to.equal(1);
          expect(result[1].item_id).to.equal(2);
          expect(result[1].order_quantity).to.equal(5);
        })
        .then(done)
        .catch(done);
    });

    it('๋ฐ์ดํฐ๋ฒ?์ด์ค์ ์?์ฅ๋ ์ฃผ๋ฌธ๋ด์ญ์ ๊ฐ์?ธ์์ผํฉ๋๋ค.', async () => {
      const postOrder = (data) => {
        return chai.request(app).post('/users/1/orders').send(data);
      };

      const payload = [
        {
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        },
        {
          orders: [
            { itemId: 5, quantity: 1 },
            { itemId: 6, quantity: 2 },
          ],
          totalPrice: 10700,
        },
      ];

      await postOrder(payload[0]);
      await postOrder(payload[1]);

      await chai
        .request(app)
        .get('/users/1/orders')
        .then((res) => res.body)
        .then((data) => {
          expect(data[0].id).to.equal(1);
          expect(data[0].image).to.equal('../images/egg.png');
          expect(data[0].name).to.equal('๋ธ๋ฅธ์ ๋ถ๋ฆฌ๊ธฐ');
          expect(data[0].order_quantity).to.equal(2);
          expect(data[0].price).to.equal(9900);
          expect(data[0].total_price).to.equal(79800);

          expect(data[3].id).to.equal(2);
          expect(data[3].image).to.equal('../images/fish.jpg');
          expect(data[3].name).to.equal('์์ด ์์ฆ');
          expect(data[3].order_quantity).to.equal(2);
          expect(data[3].price).to.equal(3900);
          expect(data[3].total_price).to.equal(10700);
        });
    });
  });
  after(() => {
    dbConnection.end();
    app.close();
  });
});
