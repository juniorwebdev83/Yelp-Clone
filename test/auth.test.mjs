// auth.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Adjust the path based on your file structure

chai.use(chaiHttp);
const expect = chai.expect; // Ensure this is the only declaration of `expect` in this scope

describe('Sample Tests', () => {
  it('should return "Hello, World!" when GET /api/hello', (done) => {
    chai.request(app)
      .get('/api/hello')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Hello, World!');
        done();
      });
  });

  // Add more test cases as needed
});
