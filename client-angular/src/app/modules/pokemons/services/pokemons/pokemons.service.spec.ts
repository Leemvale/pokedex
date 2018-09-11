import {TestBed, inject} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';

import {PokemonsService} from "./pokemons.service";
import {Pokemon} from "../../../../domain/Pokemon";
import {AuthService} from "../../../auth/sevices/auth/auth.service";

describe('PokemonsService', () => {

  const testPokemons: Pokemon[] = [
    {
      _id: '',
      id: 1,
      name: 'Pokemon1'
    },
    {
      _id: '',
      id: 2,
      name: 'Pokemon2'
    }
  ];

  const testPutResponse = {
    message: 'updated'
  };

  let httpClientSpy: { get: jasmine.Spy,  put: jasmine.Spy};
  let authServiceStub: Partial<AuthService>;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put']);

    authServiceStub = {
      isAuth: false,
    };

    TestBed.configureTestingModule({
      providers: [PokemonsService, {provide: HttpClient, useValue:  httpClientSpy }, {provide: AuthService, useValue: authServiceStub }]
    });
  });

  it('should be created', inject([PokemonsService], (service: PokemonsService) => {
    expect(service).toBeTruthy();
  }));
});
