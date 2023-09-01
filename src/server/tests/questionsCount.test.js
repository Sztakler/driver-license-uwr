const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../files/server");

const expect = chai.expect;
chai.use(chaiHttp);

describe("Number of questions in DB", () => {
	it("should return a number", (done) => {
		chai
			.request(app)
			.get("/api/questions-count")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("number");
				done();
			});
	});
});
