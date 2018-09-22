import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatListModule, MatButtonModule } from '@angular/material';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';

export const routes: Route[] = [
  { path: 'tutorials', component: ReadComponent },
  { path: 'tutorials/create', component: CreateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateComponent,
    ReadComponent
  ]
})
export class TutorialsModule { }
