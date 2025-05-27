describe('5xxエラー画面テスト', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()

        cy.url().should('include', '/menu')
    })


    it('テストID01(レイアウト)', () => {
        cy.contains('第1章').click();
        cy.visit('/chapter/1/question/7', { failOnStatusCode: false });
        cy.contains('サーバーエラー').should('be.visible');
        cy.contains('恐れ入りますが最初からやり直してください').should('be.visible');
        cy.contains('メニューへ').should('be.visible');
    })

    it('テストID02(レイアウト)', () => {
        cy.contains('第1章').click();
        cy.visit('/chapter/1/question/7', { failOnStatusCode: false });
        cy.contains('サーバーエラー').should('be.visible');
        cy.contains('恐れ入りますが最初からやり直してください').should('be.visible');
        cy.contains('メニューへ').should('be.visible');
    })

    it('テストID03(機能動作)', () => {
        cy.contains('第1章').click();
        cy.visit('/chapter/1/question/7', { failOnStatusCode: false });
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    })

    it('テストID04(ブラウザバック)', () => {
        cy.contains('第1章').click();
        cy.visit('/chapter/1/question/7', { failOnStatusCode: false });
        cy.go('back')
        cy.location('pathname').should('eq', '/chapter/1/question/1');
    })
})