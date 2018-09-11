import { InfiniteScrollDirective } from './infinite-scroll.directive';

describe('InfiniteScrollDirective', () => {

  it('should create an instance', () => {
    const directive = new InfiniteScrollDirective();
    expect(directive).toBeTruthy();
  });
  // it('should not emit scrollBottom', () => {
  //   const directive = new InfiniteScrollDirective();
  //
  //   spyOn(directive.scrollBottom, 'emit');
  //
  //   window.scrollTo({top: 0, behavior: "instant"});
  //   window.dispatchEvent(new Event('scroll'));
  //   document.body.setAttribute("height", "0");
  //   expect(directive.scrollBottom.emit).not.toHaveBeenCalled()
  // });
  //
  // it('should emit scrollBottom', () => {
  //   const directive = new InfiniteScrollDirective();
  //
  //   spyOn(directive.scrollBottom, 'emit');
  //
  //   document.body.setAttribute("height", "1000");
  //   window.scrollTo({top: 10000000, behavior: "instant"});
  //   window.dispatchEvent(new Event('scroll'));
  //   expect(directive.scrollBottom.emit).toHaveBeenCalled()
  // });
});
