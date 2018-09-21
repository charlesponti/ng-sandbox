import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersComponent } from './members.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../reducers/user.reducer';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        StoreModule.forRoot({ user: userReducer })
      ],
      declarations: [MembersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
