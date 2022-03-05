import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasInternacionaisComponent } from './noticias-internacionais.component';

describe('NoticiasInternacionaisComponent', () => {
  let component: NoticiasInternacionaisComponent;
  let fixture: ComponentFixture<NoticiasInternacionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasInternacionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasInternacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
