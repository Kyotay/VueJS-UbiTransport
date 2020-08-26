import { mutations } from '../../src/store/index.js'

describe('Mutations', () => {

  it('setItems updates state with items in payload', () => {
    const { SAVE_EMPLOYEES } = mutations
    const state = {
      employees: []
    }
    const employees = {"employees": [{}, {}]}
    SAVE_EMPLOYEES(state, employees )
    expect(state.employees).toBe(employees)
  });

});
