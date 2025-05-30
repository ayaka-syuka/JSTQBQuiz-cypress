//ブランチ名(test)で実行
describe('結果画面テスト', () => {

    beforeEach(() => {
        cy.visit('/login')
        cy.get('input[name="username"]').type('cc@cc')
        cy.get('input[name="password"]').type('cccc')
        cy.get('button').contains('ログイン').click()

        cy.url().should('include', '/menu')
    })


    it('テストID01(画面レイアウト)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('第1章 テストの基礎').should('be.visible');
        cy.contains('問正解').should('be.visible');
        cy.contains('正解率').should('be.visible');
        cy.contains('メニューへ').should('be.visible');

    })


    it('テストID02(タブレイアウト)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.title().should('eq', 'JSTQB問題集')

    })

    it('テストID03(画面レイアウト-出題順)', () => {

        cy.contains('a', 'テストの基礎').click();

        const shownQuestions = []

        for (let i = 0; i < 10; i++) {
            cy.get('.question-text') // ← 問題文のセレクタに合わせて変えてね！
                .invoke('text')
                .then((text) => {
                    shownQuestions.push(text.trim()) // 問題文を保存しておく
                })

            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click()
            cy.get('#next-question').should('be.visible').click()
        }

        cy.wrap(null).then(() => {
            cy.get('.question-title')
                .then(($els) => {
                    const resultQuestions = [...$els].map(el => {
                        // テキストを取得して余計な文字を消す
                        return el.innerText.replace(/◯|問題\d+：/g, '').trim()
                    })

                    expect(resultQuestions).to.deep.equal(shownQuestions)
                })
        })

    })


    it('テストID04(画面遷移)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('button', 'メニューへ').click()

        cy.url().should('eq', 'http://localhost:8080/menu')

    })


    it('テストID05(動的表示 正答率０％)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').last().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('0 / 10 問正解 正解率（0%）').should('be.visible');
        cy.get('span.incorrect-mark').should('have.length', 10) //「×」10個
    })


    it('テストID06(動的表示 正答率１０％)', () => {

        cy.contains('a', 'ソフトウェア開発ライフサイクル全体を通してのテスト').click();

        for (let i = 0; i < 10; i++) {
            if (i === 0) {
                // 最初の1問だけ一番上の選択肢
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                // 残りは全部一番下の選択肢
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }


        cy.contains('1 / 10 問正解 正解率（10%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 1)
        cy.get('span.incorrect-mark').should('have.length', 9) //「×」9個
    })

    it('テストID07(動的表示 正答率２０％)', () => {

        cy.contains('a', '静的テスト').click();

        for (let i = 0; i < 10; i++) {
            if (i < 2) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }


        cy.contains('2 / 10 問正解 正解率（20%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 2)
        cy.get('span.incorrect-mark').should('have.length', 8)
    })

    it('テストID08(動的表示 正答率３０％)', () => {

        cy.contains('a', 'テスト分析と設計').click();

        for (let i = 0; i < 10; i++) {
            if (i < 3) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('3 / 10 問正解 正解率（30%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 3)
        cy.get('span.incorrect-mark').should('have.length', 7)
    })

    it('テストID09(動的表示 正答率４０％)', () => {

        cy.contains('a', 'テスト活動のマネジメント').click();

        for (let i = 0; i < 10; i++) {
            if (i < 4) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('4 / 10 問正解 正解率（40%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 4)
        cy.get('span.incorrect-mark').should('have.length', 6)
    })

    it('テストID10(動的表示 正答率５０％)', () => {

        cy.contains('a', 'テストツール').click();

        for (let i = 0; i < 10; i++) {
            if (i < 5) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('5 / 10 問正解 正解率（50%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 5)
        cy.get('span.incorrect-mark').should('have.length', 5)
    })

    it('テストID11(動的表示 正答率６０％)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            if (i < 6) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('6 / 10 問正解 正解率（60%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 6)
        cy.get('span.incorrect-mark').should('have.length', 4)
    })

    it('テストID12(動的表示 正答率７０％)', () => {

        cy.contains('a', 'ソフトウェア開発ライフサイクル全体を通してのテスト').click();

        for (let i = 0; i < 10; i++) {
            if (i < 7) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('7 / 10 問正解 正解率（70%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 7)
        cy.get('span.incorrect-mark').should('have.length', 3)
    })

    it('テストID13(動的表示 正答率８０％)', () => {

        cy.contains('a', '静的テスト').click();

        for (let i = 0; i < 10; i++) {
            if (i < 8) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('8 / 10 問正解 正解率（80%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 8)
        cy.get('span.incorrect-mark').should('have.length', 2)
    })

    it('テストID14(動的表示 正答率９０％)', () => {

        cy.contains('a', 'テスト分析と設計').click();

        for (let i = 0; i < 10; i++) {
            if (i < 9) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('9 / 10 問正解 正解率（90%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 9)
        cy.get('span.incorrect-mark').should('have.length', 1)
    })

    it('テストID15(動的表示 正答率１００％)', () => {

        cy.contains('a', 'テスト活動のマネジメント').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('10 / 10 問正解 正解率（100%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 10)
    })

    it('テストID16(動的表示-模擬試験 正答率０％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            cy.get('input[type="radio"][name="answer"]').last().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('0 / 40 問正解 正解率（0%）').should('be.visible');
        cy.contains('😢 残念…不合格でした').should('be.visible');
        cy.get('span.incorrect-mark').should('have.length', 40)
    })

    it('テストID17(動的表示-模擬試験 正答率２％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 1) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('1 / 40 問正解 正解率（2%）').should('be.visible');
        cy.contains('😢 残念…不合格でした').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 1)
        cy.get('span.incorrect-mark').should('have.length', 39)
    })

    it('テストID18(動的表示-模擬試験 正答率４７％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 19) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('19 / 40 問正解 正解率（47%）').should('be.visible');
        cy.contains('😢 残念…不合格でした').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 19)
        cy.get('span.incorrect-mark').should('have.length', 21)
    })

    it('テストID19(動的表示-模擬試験 正答率５０％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 20) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('20 / 40 問正解 正解率（50%）').should('be.visible');
        cy.contains('😢 残念…不合格でした').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 20)
        cy.get('span.incorrect-mark').should('have.length', 20)
    })

    it('テストID20(動的表示-模擬試験 正答率５２％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 21) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('21 / 40 問正解 正解率（52%）').should('be.visible');
        cy.contains('😢 残念…不合格でした').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 21)
        cy.get('span.incorrect-mark').should('have.length', 19)
    })

    it('テストID21(動的表示-模擬試験 正答率６２％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 25) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('25 / 40 問正解 正解率（62%）').should('be.visible');
        cy.contains('😢 残念…不合格でした').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 25)
        cy.get('span.incorrect-mark').should('have.length', 15)
    })

    it('テストID22(動的表示-模擬試験 正答率６５％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 26) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('26 / 40 問正解 正解率（65%）').should('be.visible');
        cy.contains('🎉 合格おめでとう！').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 26)
        cy.get('span.incorrect-mark').should('have.length', 14)
    })

    it('テストID23(動的表示-模擬試験 正答率９７％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            if (i < 39) {
                cy.get('input[type="radio"][name="answer"]').first().check()
            } else {
                cy.get('input[type="radio"][name="answer"]').last().check()
            }

            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('39 / 40 問正解 正解率（97%）').should('be.visible');
        cy.contains('🎉 合格おめでとう！').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 39)
        cy.get('span.incorrect-mark').should('have.length', 1)
    })

    it('テストID24(動的表示-模擬試験 正答率１００％)', () => {

        cy.contains('a', '模擬試験').click();

        for (let i = 0; i < 40; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.contains('40 / 40 問正解 正解率（100%）').should('be.visible');
        cy.contains('🎉 合格おめでとう！').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 40)
    })

    it('テストID25(動的表示)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 9; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.visit('http://localhost:8080/menu') // タブ閉じ→開き直しの代わりに再訪問
        cy.contains('a', 'テストの基礎').click();

        cy.contains('問1').should('be.visible');
    })

    it('テストID26(動的表示)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.visit('http://localhost:8080/menu') // タブ閉じ→開き直しの代わりに再訪問
        cy.contains('a', 'テストの基礎').click();

        cy.contains('問1').should('be.visible');
    })

    it('テストID27(ブラウザバック)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 10; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.go('back')
        
        cy.get('input[type="radio"][name="answer"]').last().check() //不正解の解答を選択
        cy.get('#submit-button').should('not.be.disabled').click() 
        cy.get('#next-question').should('be.visible').click() 

        cy.contains('10 / 10 問正解 正解率（100%）').should('be.visible');
        cy.get('span.correct-mark').should('have.length', 10)
    })

    it('テストID28(セッション切れ)', () => {

        cy.contains('a', 'テストの基礎').click();

        for (let i = 0; i < 9; i++) {
            cy.get('input[type="radio"][name="answer"]').first().check()
            cy.get('#submit-button').should('not.be.disabled').click() // 解答を確定
            cy.get('#next-question').should('be.visible').click() // 次へ
        }

        cy.get('input[type="radio"][name="answer"]').first().check()
        cy.get('#submit-button').should('not.be.disabled').click()

        cy.clearCookies() // ←セッションが保持されているCookieを削除！

        cy.get('#next-question').click()

        cy.url().should('eq', 'http://localhost:8080/login')

    })



})