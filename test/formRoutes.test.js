const request = require('supertest');
const app = require('../app'); // Assuming 'app.js' is your main server file
const assert = require('assert');

describe('Form Routes', function () {

  // Test GET /contact
  it('should render the form page on GET /contact', function (done) {
    request(app)
      .get('/contact')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(function (err, res) {
        if (err) return done(err);
        assert(res.text.includes('<form'), 'Form element not found in response');
        done();
      });
  });

  // Test POST /submit-form
  it('should handle form submission on POST /submit-form', function (done) {
    const formData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '0718085827',
      query: 'This is a test message'
    };

    request(app)
      .post('/submit-form')
      .send(formData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        assert(res.body.success === true, 'Form submission failed');
        done();
      });
  });

  // Test POST /submit-form with missing data
  it('should return an error if required form fields are missing', function (done) {
    const incompleteFormData = {
      email: 'johndoe@example.com',
      // Missing 'name' and 'message'
    };

    request(app)
      .post('/submit-form')
      .send(incompleteFormData)
      .expect(400)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        assert(res.body.success === false, 'Form submission should have failed');
        assert(typeof res.body.error === 'string', 'Error message should be a string');
        done();
      });
  });

});
