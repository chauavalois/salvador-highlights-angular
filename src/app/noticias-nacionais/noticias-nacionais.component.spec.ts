import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasNacionaisComponent } from './noticias-nacionais.component';

describe('NoticiasNacionaisComponent', () => {
  let component: NoticiasNacionaisComponent;
  let fixture: ComponentFixture<NoticiasNacionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasNacionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasNacionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
