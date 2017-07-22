import { BfcPage } from './app.po';

describe('bfc App', () => {
  let page: BfcPage;

  beforeEach(() => {
    page = new BfcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
