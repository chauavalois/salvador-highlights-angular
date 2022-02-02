import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasRegionaisComponent } from './noticias-regionais.component';

describe('NoticiasRegionaisComponent', () => {
  let component: NoticiasRegionaisComponent;
  let fixture: ComponentFixture<NoticiasRegionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasRegionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasRegionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
