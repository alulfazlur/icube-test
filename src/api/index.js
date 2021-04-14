import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query products($search: String!) {
    products(search: $search, pageSize: 20) {
      total_count
      items {
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query products($eq: String!) {
    products(filter: { sku: { eq: $eq } }) {
      total_count
      items {
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
      }
    }
  }
`;
