const app = require('../server.js');
const supertest = require("supertest");

describe('app', () => {
 
    describe('POST /auth/login', () => {

        describe('POST: when the request body is valid', () => {
            it('given username and password', async () => {
                const response = await supertest(app)
                    .post('/auth/login')
                    .send({ email: 'uroljon@exadel.com', password: 'Uroljon_admin' });

                expect(response.status).toBe(201);
                expect(response.body).toEqual({
                    ok: true,
                    token: expect.any(String)
                });
                expect(response.header['content-type']).toBe('application/json; charset=utf-8');
            })
        });

        describe('POST: when the request body is not valid', () => {
            it('invalid email', async () => {

                const response = await supertest(app).post('/auth/login').send({ email: "someone@gmail.com", password: 'Uroljon_admin' });

                expect(response.status).toBe(403);
                expect(response.body.message).toBe('Username or password incorrect.');
                expect(response.header['content-type']).toBe('application/json; charset=utf-8');
            });
        });

        describe('POST: when the request body is not valid', () => {
            it('invalid password', async () => {

                const response = await supertest(app).post('/auth/login').send({ email: "uroljon@exadel.com", password: 'guest' });

                expect(response.status).toBe(403);
                expect(response.body.message).toBe('Username or password incorrect.');
                expect(response.header['content-type']).toBe('application/json; charset=utf-8');
            });
        });
    })
    describe('POST auth/logout', ()=>{
        it("should log out user", async ()=>{
            const response = await supertest(app).post("/auth/logout");
            expect(response.status).toBe(200)
            expect(response.body.message).toBe('User logged out!');
            expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        })
    })
});