import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('Test 1', () => {
    console.log(environment.TEST1);
    expect(Number.parseInt(environment.TEST1) / 100).toBeLessThan(
      Math.random()
    );
  });
  it('Test 2', () => {
    console.log(environment.TEST2);
    expect(Number.parseInt(environment.TEST2) / 100).toBeLessThan(
      Math.random()
    );
  });
  it('Test 3', () => {
    console.log(environment.TEST3);
    expect(Number.parseInt(environment.TEST3) / 100).toBeLessThan(
      Math.random()
    );
  });
  it('Test 4', () => {
    console.log(environment.TEST4);
    expect(Number.parseInt(environment.TEST4) / 100).toBeLessThan(
      Math.random()
    );
  });
});
