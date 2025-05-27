describe('4xxエラー画面テスト', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()

        cy.url().should('include', '/menu')
    })


    it('テストID01(レイアウト)', () => {

        cy.visit('/not-found', { failOnStatusCode: false });
        cy.contains('ページが見つかりません').should('be.visible');
        cy.contains('メニューへ').should('be.visible');
    })

    it('テストID02(レイアウト)', () => {

        cy.visit('/not-found', { failOnStatusCode: false });
        cy.contains('ページが見つかりません').should('be.visible');
        cy.contains('メニューへ').should('be.visible');
    })

    it('テストID03(機能動作)', () => {

        cy.visit('/not-found', { failOnStatusCode: false });
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    })

    it('テストID04(ブラウザバック)', () => {

        cy.visit('/not-found', { failOnStatusCode: false });
        cy.go('back')
        cy.location('pathname').should('eq', '/menu');
    })
})