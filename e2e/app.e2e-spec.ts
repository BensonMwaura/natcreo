import { NatcreoPage } from './app.po';

describe('natcreo App', () => {
  let page: NatcreoPage;

  beforeEach(() => {
    page = new NatcreoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
