import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPokemonsListComponent } from './users-pokemons-list.component';

describe('UsersPokemonsListComponent', () => {
  let component: UsersPokemonsListComponent;
  let fixture: ComponentFixture<UsersPokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPokemonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
