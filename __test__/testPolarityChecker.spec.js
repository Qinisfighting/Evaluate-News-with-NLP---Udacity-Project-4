import { checkForPolarity } from "../src/client/js/polarityChecker"

describe('Testing polarity check functionality', () => {
    test('Testing the checkForPolarity() function', () => {
        expect(checkForPolarity('P+')).toBe('STRONG POSITIVE')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('P')).toBe('POSITIVE')
    })

    test('Testing the polarityChecker() function', () => {
        expect(checkForPolarity('NEW')).toBe('NEUTRAL')
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