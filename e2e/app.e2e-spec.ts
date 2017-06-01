import { NgCliDemoPage } from './app.po';

describe('ng-cli-demo App', () => {
  let page: NgCliDemoPage;

  beforeEach(() => {
    page = new NgCliDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
