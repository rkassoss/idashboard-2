import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlikComponentWrapperComponent } from './qlik-component-wrapper.component';

describe('QlikComponentWrapperComponent', () => {
  let component: QlikComponentWrapperComponent;
  let fixture: ComponentFixture<QlikComponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlikComponentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlikComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
