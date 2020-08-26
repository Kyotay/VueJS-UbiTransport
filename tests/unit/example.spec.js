import { mutations, actions } from '../../src/store/index.js'
import axios from 'axios'

jest.mock('axios')

// Basic unittest for mutations
describe('Mutations', () => {

  it('set employees', () => {
    const state = {
      employees: []
    }
    const employees = {"employees": [{}, {}]}
    mutations.SAVE_EMPLOYEES(state, employees )
    expect(state.employees).toBe(employees)
  });
});

// Attemp of test for actions, but problems with axios and mock.
describe('Actions', () => {
  beforeEach(() => {
    axios.mockClear();
  })

  it('should delete one employee', async () => {
    axios.delete.mockResolvedValue({status: 200})
    expect(await actions.deleteEmployee(1)).toBe(200)
  })
});
