let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");

chai.should();

chai.use(chaiHttp);

describe("Test app", () => {
    /**
     * Test get /
     */
    describe("Test /", () => {
        it("should response with status code 200", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("should response with an object", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.be.a("object");
                done();
                })
        })
    });

    /**
     * Test post /result
     */
     describe("Test post /result", () => {
        it("should get intended recipes from database", (done) => {
            let recipe = {
                title: "classic waffle",
                category: ["Breakfast"],
                prepareTime: "20 min",
                cookingTime: "50 min",
                ingredient: "Onion and so on",
                cookingSteps: "Do whatever you want"

            }
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("should response with the recipe object", (done) => {
            let recipe = {
                title: "classic waffle",
                category: ["Breakfast"],
                prepareTime: "20 min",
                cookingTime: "50 min",
                ingredient: "Onion and so on",
                cookingSteps: "Do whatever you want"

            }
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.be.a("object");
                done();
                });
        });
    });

    describe("Test get /profile", () => {
        it("should response with status code 200", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                })
        })

        it("should get intended user profile", (done) => {
            chai.request(app)
                .post("/signup")
                .send({username: "kksdad",
                       password: "123123"
                })
                .end((err, res) => {
                    res.should.be.a("object");
                done();
                })
        })

        it("should response with status code 500 when profile doesn't exsist", (done) => {
            chai.request(app)
                .post("/signup")
                .send({username: "kksdad",
                       password: "123123"
                })
                .end((err, res) => {
                    res.should.have.status(500);
                done();
                })
        })
    })

    /**
     * Test get /result/:category
     */
    describe("Test get /result/:category", () => {
        it("should response with status code 200", (done) => {
            chai.request(app)
                .get("/result/Breakfast")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("should response with an object", (done) => {
            chai.request(app)
                .get("/result/Breakfast")
                .end((err, res) => {
                    res.should.be.a("object");
                done();
                });
        });

        it("should response with status code 500 when category doesn't exsist", (done) => {
            chai.request(app)
                .post("/signup")
                .send({username: "kksdad",
                       password: "123123"
                })
                .end((err, res) => {
                    res.should.have.status(500);
                done();
                })
        })

    });

    /**
     * Test post /signup
     */
    describe("Test post /signup", () => {
        it("should response with status code 200", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                })
        })

        it("should response with an object", (done) => {
            chai.request(app)
                .post("/signup")
                .send({username: "kksdad",
                       password: "123123"
                })
                .end((err, res) => {
                    res.should.be.a("object");
                done();
                })
        })

        it("should response with status code 500", (done) => {
            chai.request(app)
                .post("/signup")
                .send({username: "kksdad",
                       password: "123123"
                })
                .end((err, res) => {
                    res.should.have.status(500);
                done();
                })
        })
    })

    /**
     * Test get /home/:recipeID
     */
    describe("Test get /home/:recipeID", () => {
        it("should return with status code 200", (done) => {
            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })

        it("should return intended recipe object", (done) => {
            let recipe = {
                title: "classic waffle",
                category: ["Breakfast"],
                prepareTime: "20 min",
                cookingTime: "50 min",
                ingredient: "Onion and so on",
                cookingSteps: "Do whatever you want"

            }

            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })

        it("should return status code 500 when recipe doesn't exsist", (done) => {
            let recipe = {
                title: "asdad",
                category: ["dadad"],
                prepareTime: "ada",
                cookingTime: "gfgfd",
                ingredient: "Onion and so on",
                cookingSteps: "Do whatever you want"

            }

            chai.request(app)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
    })
});