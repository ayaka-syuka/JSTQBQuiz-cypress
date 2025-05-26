describe('ヘッダーテスト', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()

        cy.url().should('include', '/menu')
    })

    it('テストID01(レイアウト)', () => {
        cy.get('button').contains('ログアウト').click()
        cy.contains('さあ、君も、JSTQB道場へ入門だ！！！！！').should('be.visible');
    })

    it('テストID02(レイアウト)', () => {

        cy.get('button').contains('ログアウト').click()
        cy.visit('/register')
        cy.contains('さあ、君も、JSTQB道場へ入門だ！！！！！').should('be.visible');
    })

    it('テストID03(レイアウト)', () => {

        cy.contains('JSTQB問題集').should('be.visible');
        cy.contains('メニューへ').should('be.visible');
        cy.contains(/ようこそ、.*さん！/).should('be.visible');
        cy.contains('ログアウト').should('be.visible');

    })

    it('テストID04(レイアウト)', () => {
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID05(画面遷移)', () => {
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });


    it('テストID06(画面遷移)', () => {
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID07(レイアウト)', () => {
        cy.contains('第1章').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID08(画面遷移)', () => {
        cy.contains('第1章').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });


    it('テストID09(画面遷移)', () => {
        cy.contains('第1章').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID10(レイアウト)', () => {
        cy.contains('第2章').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID11(画面遷移)', () => {
        cy.contains('第2章').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID12(画面遷移)', () => {
        cy.contains('第2章').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID13(レイアウト)', () => {
        cy.contains('第3章').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID14(画面遷移)', () => {
        cy.contains('第3章').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID15(画面遷移)', () => {
        cy.contains('第3章').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID16(レイアウト)', () => {
        cy.contains('第4章').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID17(画面遷移)', () => {
        cy.contains('第4章').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID18(画面遷移)', () => {
        cy.contains('第4章').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID19(レイアウト)', () => {
        cy.contains('第5章').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID20(画面遷移)', () => {
        cy.contains('第5章').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID21(画面遷移)', () => {
        cy.contains('第5章').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID22(レイアウト)', () => {
        cy.contains('第6章').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID23(画面遷移)', () => {
        cy.contains('第6章').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID24(画面遷移)', () => {
        cy.contains('第6章').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID25(レイアウト)', () => {
        cy.contains('模擬試験').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID26(画面遷移)', () => {
        cy.contains('模擬試験').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID27(画面遷移)', () => {
        cy.contains('模擬試験').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID28(レイアウト)', () => {
        cy.contains('履歴').click();
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID29(画面遷移)', () => {
        cy.contains('履歴').click();
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });

    it('テストID30(画面遷移)', () => {
        cy.contains('履歴').click();
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID31(レイアウト)', () => {
        cy.visit('/menu');
        cy.contains('第1章').click();
        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"]').first().check({ force: true });
            cy.contains('解答を確定').click();
            cy.contains('次へ').click();
        }
        cy.contains(/ようこそ、cさん！/).should('be.visible');
    })

    it('テストID32(画面遷移)', () => {
        cy.contains('第1章').click();
        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"]').first().check({ force: true });
            cy.contains('解答を確定').click();
            cy.contains('次へ').click();
        }
        cy.contains('メニューへ').click();
        cy.location('pathname').should('eq', '/menu');
    });


    it('テストID33(画面遷移)', () => {
        cy.contains('第1章').click();
        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"]').first().check({ force: true });
            cy.contains('解答を確定').click();
            cy.contains('次へ').click();
        }
        cy.get('button').contains('ログアウト').click()
        cy.location('pathname').should('eq', '/login');
    })

    it('テストID34(画面遷移)', () => {
        cy.get('button').contains('ログアウト').click()
        cy.visit('localhost:8080/menu')
        cy.location('pathname').should('eq', '/login');
    })
})