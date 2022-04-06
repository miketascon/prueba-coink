import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CoinkService } from '../services/coink.service';

import { RegisterFormPage } from './register-form.page';

describe('RegisterFormPage', () => {
  let component: RegisterFormPage;
  let fixture: ComponentFixture<RegisterFormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]), FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [ CoinkService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
