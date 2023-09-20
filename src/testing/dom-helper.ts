import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


export class DOMHelper<T> {
  private fixture: ComponentFixture<T>;
  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }
  singleText(tagName: string): string {
    const element = this.fixture.debugElement.query(By.css(tagName));
    if (element) {
      return element.nativeElement.textContent;
    }
  }

  count(tagName: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.length;
  }

  countText(tagName: string, text: string): number {
    const elements = this.fixture.debugElement.queryAll(By.css(tagName));
    return elements.filter((ele) => ele.nativeElement.textContent === text)
      .length;
  }
}