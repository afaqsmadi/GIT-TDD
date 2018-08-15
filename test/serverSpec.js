//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
let db = require('../database/index.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index.js');
let should = chai.should();
chai.use(chaiHttp);

describe('/cats', () => {
    it('it should GET all the cats', (done) => {
            chai.request(server)
            .get('/cats')
            .end((err, res) => {
                //res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(13);
              done();
     
    });
}); 

})
it('it should POST a cat ', (done) => {
        let cat = {
            catName: "The Lord of the Rings",
            ownerEmail: "J.R.R. Tolkien",
            imageUrl: "1954",
            adoptionMessage: "1170"
        }
        chai.request(server)
            .post('/cats')
            .send(cat)
            .end((err, res) => {
                // res.should.have.status(200);
                // res.body.should.be.a('object');
                res.body.cat.should.have.property('catName');
                // res.body.cat.should.have.property('ownerEmail');
                // res.body.cat.should.have.property('imageUrl');
                // res.body.cat.should.have.property('adoptionMessage');
              done();
            });
      })



