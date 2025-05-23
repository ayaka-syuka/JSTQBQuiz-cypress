    describe('問題画面テスト', () => {

        beforeEach(() => {
            cy.visit('/login')
            cy.get('input[name="username"]').type('cc@cc')
            cy.get('input[name="password"]').type('cccc')
            cy.get('button').contains('ログイン').click()
        
            cy.url().should('include', '/menu')
          })


        it('テストID01(レイアウト)', () => {
    
            cy.contains('a', 'テストの基礎').click();
            cy.contains('テストの基礎').should('be.visible');
            cy.contains('問1').should('be.visible');
            cy.contains('解答を確定').should('be.visible');

        })

        it('テストID02(画面遷移)', () =>{

                cy.contains('a', 'ソフトウェア開発ライフサイクル全体を通してのテスト').click();
                cy.contains('ソフトウェア開発ライフサイクル全体を通してのテスト').should('be.visible');
                cy.contains('問1').should('be.visible');
                cy.contains('解答を確定').should('be.visible');
            })

        it('テストID03(画面遷移)', () =>{

                cy.contains('a', '静的テスト').click();
                cy.contains('静的テスト').should('be.visible');
                cy.contains('問1').should('be.visible');
                cy.contains('解答を確定').should('be.visible');
            })

        it('テストID04(画面遷移)', () =>{

                cy.contains('a', 'テスト分析と設計').click();
                cy.contains('テスト分析と設計').should('be.visible');
                cy.contains('問1').should('be.visible');
                cy.contains('解答を確定').should('be.visible');
            })
        
        it('テストID05(画面遷移)', () =>{

                cy.contains('a', 'テスト活動のマネジメント').click();
                cy.contains('テスト活動のマネジメント').should('be.visible');
                cy.contains('問1').should('be.visible');
                cy.contains('解答を確定').should('be.visible');
            })

        it('テストID06(画面遷移)', () =>{

                cy.contains('a', 'テストツール').click();
                cy.contains('テストツール').should('be.visible');
                cy.contains('問1').should('be.visible');
                cy.contains('解答を確定').should('be.visible');
            })

        it('テストID07(画面遷移)', () =>{

                cy.contains('a', '模擬試験').click();
                cy.contains('残り時間').should('be.visible'); //残り時間は模擬試験のみの設定のため
                cy.contains('解答を確定').should('be.visible');
                cy.contains('問1').should('be.visible');
            })

        it('テストID08(タイトル確認)', () =>{
                cy.contains('a', 'テストの基礎').click();
                cy.title().should('eq', 'JSTQB問題集');
            })
        

    
        })

    