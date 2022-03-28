import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriasComponent } from './list-historias.component';

describe('ListHistoriasComponent', () => {
  let component: ListHistoriasComponent;
  let fixture: ComponentFixture<ListHistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHistoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
