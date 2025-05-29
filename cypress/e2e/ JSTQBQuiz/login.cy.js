describe('ログイン画面テスト', () => {

    beforeEach(() => {
        cy.visit('/login')
    })

    it('テストID01(レイアウト)', () => {
        cy.contains('ログイン').should('be.visible');
        cy.contains('メールアドレス:').should('be.visible');
        cy.contains('パスワード:').should('be.visible');
        cy.contains('登録してログインはこちら').should('be.visible');
    })

    it('テストID02(エラー表示)', () => {
        cy.get('input[name="username"]').type('not@exist')
        cy.get('input[name="password"]').type('notexist')
        cy.get('button').contains('ログイン').click()
        cy.contains('メールアドレスまたはパスワードが間違っています。').should('be.visible');
    })

    it('テストID02(エラー表示)', () => {
        cy.get('input[name="username"]').type('not@exist')
        cy.get('input[name="password"]').type('notexist')
        cy.get('button').contains('ログイン').click()
        cy.contains('メールアドレスまたはパスワードが間違っています。').should('be.visible');
    })

    it('テストID03(エラー表示)', () => {
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('notexist')
        cy.get('button').contains('ログイン').click()
        cy.contains('メールアドレスまたはパスワードが間違っています。').should('be.visible');
    })

    it('テストID04(エラー表示)', () => {
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('button').contains('ログイン').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID05(エラー表示)', () => {
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()
        cy.location('pathname').should('eq', '/login');
    })

     it('テストID06(エラー表示)', () => {
        cy.get('button').contains('ログイン').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID07(機能動作)', () => {
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()
        cy.location('pathname').should('eq', '/menu');
    })
})