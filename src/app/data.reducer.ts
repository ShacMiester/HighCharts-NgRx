import { Data } from "./data.model";
import { Action } from 'rxjs/internal/scheduler/Action';
import * as DataActions from "./data.actions";



export const initialState: Data[] = [{
    name: 'whatEver.com',
    data: [512, 760, 880, 922, 965, 621, 829, 846, 900, 928, 705, 886]
  }, {
    name: 'google.com',
    data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
  },
  {
    name: 'fb.com',
    data: [512, 760, 2430, 41, 415, 621, 229, 8236, 6310, 1238, 705, 886]
  }];


export function reducer(state: Data[] = initialState, action: DataActions.Actions) {
  switch (action.type) {
    case DataActions.ADD_DATA:
      return [...state, action.payload];
  
    default: 
    return state;
    
      
  }

}























// let a = {name:'hello', data:[123,4124,123,5123]}
//   const _counterReducer = createReducer(initialState,
//     on(increment, state =>state.push({data:[124,124],name:'hello'}))
//   );

// const _counterReducer = createReducer(initialState,
//   on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   on(reset, state => initialState),
// );

// export function counterReducer(state, action) {
//   return _counterReducer(state, action);
// }