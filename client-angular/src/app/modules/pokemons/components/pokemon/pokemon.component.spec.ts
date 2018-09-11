import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core'

import { PokemonComponent } from './pokemon.component';
import {RouterLinkDirectiveStub} from "../../../../../testing/router-link-directive-stub";
import {By} from '@angular/platform-browser';
import {Pokemon} from "../../../../domain/Pokemon";

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  let routerLinks: RouterLinkDirectiveStub[];
  let linkDes: DebugElement[];

  const testPokemon: Pokemon = {
    _id: '',
    id: 1,
    name: 'Pokemon1'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonComponent, RouterLinkDirectiveStub ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    component.pokemon = testPokemon;
    fixture.detectChanges();

    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
