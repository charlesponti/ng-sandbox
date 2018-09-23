import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[Tutorial] Add';
export const REMOVE_TUTORIAL = '[Tutorial] Remove';
export const GET_TUTORIALS = '[Tutorial] Get';
export const LOAD_TUTORIALS = '[Tutorial] Load';

export class GetTutorials implements Action {
    readonly type = GET_TUTORIALS;
    constructor(public payload?: any) {}
}

export class LoadTutorials implements Action {
    readonly type = LOAD_TUTORIALS;
    constructor(public payload: Tutorial[]) {}
}

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;
    constructor(public payload: Tutorial[]) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: Tutorial[]) {}
}

export type Actions =
  AddTutorial
  | RemoveTutorial
  | GetTutorials
  | LoadTutorials;
