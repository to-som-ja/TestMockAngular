import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import  tests  from './tests.json';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('fail test', () => {
    console.log('ahoj');
    console.log(environment.TEST1);
    console.log(tests.TEST1);
    expect(false).toBeTruthy();
  });
});
