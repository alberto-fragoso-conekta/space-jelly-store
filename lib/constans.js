export const CART_TABLE_COLUMNS = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerItem',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  },
]

export const INITIAL_CART_STATE = { products: {} }

export const SPACE_JELLY_CART_LOCAL_STORAGE_NAME = 'spacejelly_cart'
