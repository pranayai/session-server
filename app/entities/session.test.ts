import Session from './session';

describe("when session is created", () => {
    it("it should be created with valid values", () => {
        const dummySessionName = 'test-session';
        const sess = new Session(dummySessionName);

        expect(sess).not.toBe(null);
        expect(sess).not.toBe(undefined);
    });
});