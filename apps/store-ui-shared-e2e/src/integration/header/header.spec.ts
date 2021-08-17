describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&args=title:BoardGameHoard'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Header!');
    });
    it('should show the title', () => {
      cy.get('header').contains('BoardGameHoard');
    });
});
