import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctelComponent } from './coctel.component';

describe('CoctelComponent', () => {
  let component: CoctelComponent;
  let fixture: ComponentFixture<CoctelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoctelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
