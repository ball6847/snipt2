import { SniplrPage } from './app.po';

describe('sniplr App', () => {
  let page: SniplrPage;

  beforeEach(() => {
    page = new SniplrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
