require('@testing-library/jest-dom');
require('whatwg-fetch');
const server = require('../mocks/server').default;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
