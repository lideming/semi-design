describe('timePicker', () => {
    it('select', () => {
        cy.visit('http://127.0.0.1:6006/iframe.html?id=timepicker--range-picker&args=&viewMode=story');
        cy.get('.semi-input').eq(0).click();
        cy.wait(500);
        cy.get('.semi-timepicker-panel-list-hour').contains('23').click();
        cy.get('.semi-timepicker-panel-list-minute').eq(0).contains('59').click();
        cy.get('.semi-timepicker-panel-list-second').eq(0).contains('59').click();
        cy.get('.semi-timepicker-panel-list-hour .semi-scrolllist-item-selected').contains('23');
        // todo: item-selected class ?
        cy.get('.semi-timepicker-panel-list-minute').contains('59');
        cy.get('.semi-timepicker-panel-list-second').contains('59');

        cy.get('.semi-input').eq(4).click();
        cy.wait(500);
        cy.get('.semi-timepicker-panel-list-ampm').contains('下午').click();
        cy.get('.semi-timepicker-panel-list-hour').eq(0).contains('09').click();
        cy.get('.semi-timepicker-panel-list-minute').eq(0).contains('09').click();
        cy.get('.semi-timepicker-panel-list-ampm .semi-scrolllist-item-sel').contains('下午');
        cy.get('.semi-timepicker-panel-list-hour .semi-scrolllist-item-sel').contains('09');
        cy.get('.semi-timepicker-panel-list-minute .semi-scrolllist-item-sel').contains('09');

        cy.get('.semi-timepicker-panel-list-ampm').contains('上午').click();
        cy.get('.semi-timepicker-panel-list-hour').eq(0).contains('10').click();
        cy.get('.semi-timepicker-panel-list-minute').eq(0).contains('10').click();
        cy.get('.semi-timepicker-panel-list-ampm .semi-scrolllist-item-sel').contains('上午');
        cy.get('.semi-timepicker-panel-list-hour .semi-scrolllist-item-sel').contains('10');
        cy.get('.semi-timepicker-panel-list-minute .semi-scrolllist-item-sel').contains('10');

    });

    it('clear', () => {
        cy.visit('http://127.0.0.1:6006/iframe.html?id=timepicker--range-picker&args=&viewMode=story');
        cy.get('.semi-input').eq(0).click();
        cy.wait(500);

        cy.get('.semi-input').eq(0).trigger('mouseover');
        cy.get('.semi-input-clearbtn').click();
        cy.get('.semi-input').eq(0).should('have.value', '');
    });

    it('custom trigger', () => {
        cy.visit('http://127.0.0.1:6006/iframe.html?id=timepicker--custom-trigger&args=&viewMode=story');
        cy.get('.semi-button-content').click();
        cy.wait(500);

        cy.get('.semi-timepicker-panel-list-hour .semi-scrolllist-list-outer').scrollTo('top');
        cy.get('#root').trigger('mousedown','right');
    });
});