import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRoutesComponent } from './layout-routes.component';

describe('LayoutRoutesComponent', () => {
  let component: LayoutRoutesComponent;
  let fixture: ComponentFixture<LayoutRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
