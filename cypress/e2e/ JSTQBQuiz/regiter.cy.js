describe('登録画面テスト', () => {

    beforeEach(() => {
        cy.visit('/register')
    })

    it('テストID01(レイアウト)', () => {
        cy.contains('ユーザー登録フォーム').should('be.visible');
        cy.contains('名前：').should('be.visible')
        cy.contains('メールアドレス：').should('be.visible')
        cy.contains('パスワード：').should('be.visible')
        cy.contains('登録').should('be.visible')
        cy.contains('登録済みの場合はこちら').should('be.visible')
    })

    it('テストID02(レイアウト)', () => {
        cy.title().should('eq', 'ユーザー登録')
    })

    it('テストID03(画面遷移)', () => {
        cy.contains('こちら').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID04(入力確認)', () => {
        cy.get('input[name="name"]').type('ああああああああああああああああああああ')
        cy.get('input[name="email"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID05(不正文字)', () => {
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('名前を入力してください').should('be.visible');
    })

    it('テストID06(不正文字)', () => {
        cy.get('input[name="name"]').type('   ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('名前を入力してください').should('be.visible');
    })

    it('テストID07(不正文字)', () => {
        cy.get('input[name="name"]').type('　　　')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('名前を入力してください').should('be.visible');
    })

    it('テストID08(不正文字)', () => {
        cy.get('input[name="name"]').type('あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('名前は100文字以下で入力してください').should('be.visible');
    })

    it('テストID09(不正文字)', () => {
        cy.get('input[name="name"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('名前は100文字以下で入力してください').should('be.visible');
    })

    it('テストID10(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスを入力してください').should('be.visible');
    })

    it('テストID11(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('   ')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスを入力してください').should('be.visible');
    })

    it('テストID12(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('　　　')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスを入力してください').should('be.visible');
    })

    it('テストID13(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@example.com')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスは100文字以下で入力してください').should('be.visible');
    })

    it('テストID14(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('aaa.example.co.jp')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスの形式が不正です').should('be.visible');
    })

    it('テストID15(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('.abcd@example.co.jp')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスの形式が不正です').should('be.visible');
    })

    it('テストID16(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('abcd.@example.co.jp')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスの形式が不正です').should('be.visible');
    })

    it('テストID17(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('ab@cd@example.co.jp')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスの形式が不正です').should('be.visible');
    })

    it('テストID18(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('ab[cd@example.co.jp')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('メールアドレスの形式が不正です').should('be.visible');
    })

    it('テストID19(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('cc@cc')
        cy.get('input[name="password"]').type('0Jw3XhCSB408rKdEMJxC')
        cy.get('button').contains('登録').click()
        cy.contains('そのメールアドレスはすでに使われています').should('be.visible');
    })

    it('テストID20(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('button').contains('登録').click()
        cy.contains('パスワードを入力してください').should('be.visible');
        cy.contains('パスワードは4文字以上20字以内、半角英数で入力してください').should('be.visible');
        cy.contains('半角英数で入力してください').should('be.visible');
    })

    it('テストID21(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('   ')
        cy.get('button').contains('登録').click()
        cy.contains('パスワードを入力してください').should('be.visible');
        cy.contains('パスワードは4文字以上20字以内、半角英数で入力してください').should('be.visible');
        cy.contains('半角英数で入力してください').should('be.visible');
    })

    it('テストID22(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('　　　')
        cy.get('button').contains('登録').click()
        cy.contains('パスワードを入力してください').should('be.visible')
        cy.contains('パスワードは4文字以上20字以内、半角英数で入力してください').should('be.visible')
        cy.contains('半角英数で入力してください').should('be.visible');
    })

    it('テストID23(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('1234567890abcdefghijk')
        cy.get('button').contains('登録').click()
        cy.contains('パスワードは4文字以上20字以内、半角英数で入力してください').should('be.visible');
    })

    it('テストID24(不正文字)', () => {
        cy.get('input[name="name"]').type('あ')
        cy.get('input[name="email"]').type('a@example.com')
        cy.get('input[name="password"]').type('abc')
        cy.get('button').contains('登録').click()
        cy.contains('パスワードは4文字以上20字以内、半角英数で入力してください').should('be.visible');
    })

    it('テストID25(XSS)', () => {
        // ランダムな文字列生成（簡易）
        const randomStr = Math.random().toString(36).substring(2, 8);
        const testName = `<h1>あ</h1>`;
        const testEmail = `test_${randomStr}@example.com`;
        const testPassword = `pass${randomStr}`;

        // アカウント登録
        cy.get('input[name="name"]').type(testName);
        cy.get('input[name="email"]').type(testEmail);
        cy.get('input[name="password"]').type(testPassword);
        cy.get('button').contains('登録').click();

        // ログイン
        cy.get('input[name="username"]').type(testEmail);
        cy.get('input[name="password"]').type(testPassword);
        cy.get('button').contains('ログイン').click();

        // 登録名の表示確認
        cy.contains('<h1>あ</h1>').should('be.visible');
    });

    it.only('テストID26(SQLインジェクション)', () => {
        // ランダムな文字列生成（簡易）
        const randomStr = Math.random().toString(36).substring(2, 8);
        const testName = `' OR 1=1 '`;
        const testEmail = `test_${randomStr}@example.com`;
        const testPassword = `pass${randomStr}`;

        // アカウント登録
        cy.get('input[name="name"]').type(testName);
        cy.get('input[name="email"]').type(testEmail);
        cy.get('input[name="password"]').type(testPassword);
        cy.get('button').contains('登録').click();

        // ログイン
        cy.get('input[name="username"]').type(testEmail);
        cy.get('input[name="password"]').type(testPassword);
        cy.get('button').contains('ログイン').click();

        // 登録名の表示確認
        cy.contains("' OR 1=1 '").should('be.visible');
    });

    it.only('テストID27(不正文字)', () => {
        // ランダムな文字列生成（簡易）
        const randomStr = Math.random().toString(36).substring(2, 8);
        const testName = `${randomStr}`;
        const testEmail = `test_${randomStr}@example.com`;
        const testPassword = `pass${randomStr}`;

        // アカウント登録
        cy.get('input[name="name"]').type(testName);
        cy.get('input[name="email"]').type(testEmail);
        cy.get('input[name="password"]').type(testPassword);
        cy.get('button').contains('登録').click();

        cy.go('back');
        cy.contains('こちら').click()


        // ログイン
        cy.get('input[name="username"]').type(testEmail);
        cy.get('input[name="password"]').type(testPassword);
        cy.get('button').contains('ログイン').click();

        // 登録名の表示確認
        cy.location('pathname').should('eq', '/menu');
    });
})