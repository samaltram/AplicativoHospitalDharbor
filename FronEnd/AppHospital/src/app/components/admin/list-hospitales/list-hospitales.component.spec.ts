import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHospitalesComponent } from './list-hospitales.component';

describe('ListHospitalesComponent', () => {
  let component: ListHospitalesComponent;
  let fixture: ComponentFixture<ListHospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHospitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
