import * as chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../server.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('API Tests', () => {
  it('should return 200 status and the correct sum for valid inputs', (done) => {
    chai.request(server)
      .get('/add?a=2&b=3')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('result').eql(5);
        done();
      });
  });

  it('should return NaN when non-numeric inputs are provided', (done) => {
    chai.request(server)
      .get('/add?a=abc&b=3')
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('result').eql(NaN);
        done();
      });
  });
});