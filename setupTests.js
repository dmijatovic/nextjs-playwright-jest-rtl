import "@testing-library/jest-dom"
import "whatwg-fetch"
// setup mock service worker for unit tests
import {server} from 'msw/mocks/server'

beforeAll(()=>server.listen())

afterEach(()=>server.resetHandlers())

afterAll(()=>server.close())