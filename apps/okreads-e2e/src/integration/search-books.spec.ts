describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  it('Then: I should see search results as I am typing', () => {
    cy.get('input[type="search"]').valueChanges.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
    this.searchForm.controls.term.detectChanges();

    const storeSpy = spyOn(component.store$, 'dispatch').and.callThrough();
    component.onClearSearch();
    fixture.detectChanges();
    expect(storeSpy).toHaveBeenCalledTimes(1);

    let taskList = this.searchForm.controls.term.componentInstance,
    element = this.searchForm.controls.term.nativeElement;
    let input = element.querySelector(this.searchForm.controls.term);
    taskList.searchTerm.updateValue("Term", {});
    this.searchForm.controls.term.detectChanges();
    tick(600);
    expect(storeSpy).toHaveBeenCalledWith({'q': 'Term'});
  });
});
