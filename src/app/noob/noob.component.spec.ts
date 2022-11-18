import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoobComponent } from './noob.component';

describe('NoobComponent', () => {
  let fixture: ComponentFixture<NoobComponent>;
  let component: NoobComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ NoobComponent ]
    })

    fixture = TestBed.createComponent(NoobComponent);
    component = fixture.componentInstance;
  });

  it('should create noob component', () => {
    expect(component).toBeInstanceOf(NoobComponent);
  });
});
