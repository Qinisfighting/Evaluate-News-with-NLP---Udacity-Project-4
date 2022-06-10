import { checkForPolarity } from "../src/client/js/allChecker"
import { checkForAgreement } from "../src/client/js/allChecker"
import { checkForSubjectivity } from "../src/client/js/allChecker"
import { checkForIrony } from "../src/client/js/allChecker"

describe("Testing the polarity checker functionality", () => {
    test('Testing the checkForPolarity() function', () => {
        expect(checkForPolarity('P+')).toBe('STRONG POSITIVE')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('P')).toBe('POSITIVE')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('NEU')).toBe('NEUTRAL')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('N')).toBe('NEGATIVE')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('N+')).toBe('STRONG NEGATIVE')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('NONE')).toBe('WITHOUT POLARITY')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity).toBeDefined();
    })

});


describe("Testing the agreement checker functionality", () => {
    test('Testing the checkForSubjectivity() function', () => {
        expect(checkForAgreement('AGREEMENT')).toBe(' AGREEMENT - The different elements have the same polarity.')
    })

    test('Testing the checkForSubjectivity() function', () => {
        expect(checkForAgreement('DISAGREEMENT')).toBe(' DISAGREEMENT - There is disagreement between the different elements.')
    })

    test('Testing the checkForSubjectivity() function', () => {
        expect(checkForAgreement).toBeDefined();
    })

});


describe("Testing the subjectivity checker functionality", () => {
    test('Testing the checkForSubjectivity() function', () => {
        expect(checkForSubjectivity('OBJECTIVE')).toBe(' OBJECTIVE - The text does not have any subjectivity marks.')
    })

    test('Testing the checkForSubjectivity() function', () => {
        expect(checkForSubjectivity('SUBJECTIVE')).toBe(' SUBJECTIVE - The text has subjective marks.')
    })

    test('Testing the checkForSubjectivity() function', () => {
        expect(checkForSubjectivity).toBeDefined();
    })

});


describe("Testing the irony checker functionality", () => {
    test('Testing the checkForIrony() function', () => {
        expect(checkForIrony('NONIRONIC')).toBe(' NONIRONIC -  The text does not have any irony marks.')
    })

    test('Testing the checkForIrony() function', () => {
        expect(checkForIrony('IRONIC')).toBe(' IRONIC - The text has irony marks.')
    })

    test('Testing the checkForIrony() function', () => {
        expect(checkForIrony).toBeDefined();
    })

});