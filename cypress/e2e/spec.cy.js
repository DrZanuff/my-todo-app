describe('Todo', () => {
  it('should be able to create a todo', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="data-test-new-todo-input"]').type('New Todo')

    cy.contains('Submit').click()

    cy.contains('New Todo')
  })
})
