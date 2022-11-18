import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProComponent } from './pro.component';

describe('ProComponent', () => {
  let fixture: ComponentFixture<ProComponent>;
  let component: ProComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ProComponent ]
    })

    fixture = TestBed.createComponent(ProComponent);
    component = fixture.componentInstance;
  });

  it('should create pro component', () => {
    expect(component).toBeInstanceOf(ProComponent);
  });
});
