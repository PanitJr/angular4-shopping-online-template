import { Angular4ShoppingOnlineTemplatePage } from './app.po';

describe('angular4-shopping-online-template App', () => {
  let page: Angular4ShoppingOnlineTemplatePage;

  beforeEach(() => {
    page = new Angular4ShoppingOnlineTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
