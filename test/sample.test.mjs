import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server'; // Adjust the path based on your file structure
chai.use(chaiHttp);
const expect = chai.expect;

describe('Authentication Tests', function () {
  it('should register a new user when POST /auth/register', function (done) {
    chai.request(app)
      .post('/auth/register')
      .send({
        email: 'test@example.com',
        password: 'test123',
        city: 'Sample City',
        state: 'Sample State',
      })
      .end(function (err, res) {
        expect(res).to.have.status(201); // Assuming you return 201 for successful registration
        expect(res.body).to.have.property('message').that.includes('registered');
        done();
      });
  });

  // Add more authentication tests as needed
});
