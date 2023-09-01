const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../files/server");

const expect = chai.expect;
chai.use(chaiHttp);

describe("Exam Question List API", () => {
	it("should return an array", (done) => {
		chai
			.request(app)
			.get("/api/exam")
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("array");
				done();
			});
	});
});
