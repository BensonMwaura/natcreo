/** import * as actions from './products.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, State } from '@ngrx/store';
import { Url } from 'url';

// Main data interface
export interface Product {
  id: string,
  name: string,
  img: string,
  offer: string
}

// Entity adapter
export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();
export interface State extends EntityState<Product> { }

// Default data / initial state
const defaultProduct = {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      name: 'test product',
      img: 'http://www.theproductmart.com/images/65c0ea70c74fa85564aeac96d1b0e550.png',
      offer: 'Free'
    }
  }
}

export const initialState: State = productAdapter.getInitialState(defaultProduct);

export function productsReducer( state: State = initialState, action: actions.ProductActions) {
  switch (action.type) {

    case actions.CREATE:
      return productAdapter.addOne(action.product, state);

    case actions.UPDATE:
      return productAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE:
      return productAdapter.removeOne(action.id, state);

    default:
      return state;
  }
}

// Create default selectors
export const getProductState = createFeatureSelector<State>('product');
export const { selectIds, selectEntities, selectAll, selectTotal } =
  productAdapter.getSelectors(getProductState);
*/
