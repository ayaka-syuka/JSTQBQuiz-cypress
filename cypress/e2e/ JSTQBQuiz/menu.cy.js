describe('メニュー画面テスト', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()
    
        cy.url().should('include', '/menu')
      })

    it('テストID01(レイアウト)', () => {
    
        cy.contains('JSTQB問題集').should('be.visible'); 
        cy.contains('テストの基礎').should('be.visible'); 
        cy.contains('履歴').should('be.visible'); //履歴画面に遷移するページはメニュー画面しかないため

    })

    it('テストID02', () =>{
        cy.title().should('eq', '一問一答アプリ - メニュー');
    })

    it('テストID03(画面遷移)', () =>{

        cy.contains('a', 'テストの基礎').click();
        cy.contains('テストの基礎').should('be.visible');
        cy.contains('解答を確定').should('be.visible');
    })

    it('テストID04(画面遷移)', () =>{

        cy.contains('a', 'ソフトウェア開発ライフサイクル全体を通してのテスト').click();
        cy.contains('ソフトウェア開発ライフサイクル全体を通してのテスト').should('be.visible');
        cy.contains('解答を確定').should('be.visible');
    })

    it('テストID05(画面遷移)', () =>{

        cy.contains('a', '静的テスト').click();
        cy.contains('静的テスト').should('be.visible');
        cy.contains('解答を確定').should('be.visible');
    })


    it('テストID06(画面遷移)', () =>{

        cy.contains('a', 'テスト分析と設計').click();
        cy.contains('テスト分析と設計').should('be.visible');
        cy.contains('解答を確定').should('be.visible');
    })

    it('テストID07(画面遷移)', () =>{

        cy.contains('a', 'テスト活動のマネジメント').click();
        cy.contains('テスト活動のマネジメント').should('be.visible');
        cy.contains('解答を確定').should('be.visible');
    })

    it('テストID08(画面遷移)', () =>{

        cy.contains('a', 'テストツール').click();
        cy.contains('テストツール').should('be.visible');
        cy.contains('解答を確定').should('be.visible');
    })

    it('テストID09(画面遷移)', () =>{

        cy.contains('a', '模擬試験').click();
        cy.contains('残り時間').should('be.visible'); //残り時間は模擬試験のみの設定のため
        cy.contains('解答を確定').should('be.visible');
    })

    it('テストID10(画面遷移)', () =>{

        cy.contains('a', '履歴').click();
        cy.contains('正答数の推移').should('be.visible');
    })



  })