const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:4000`;
const request = require('supertest')(url);

describe('GraphQL', () => {
    it('Returns all menus', (done) => {
        request.post('/graphql')
        .send({ query: '{ types { name menus { name price } } }' })
        .expect(200)
        .end((err, res) => {
            // res will contain array of all menus
            if (err) return done(err);
            // assume there are a 11 menu types
            expect(res.body.data.types.length).to.equal(11);
            done();
        })  
    })
});