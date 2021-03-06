export type Sneaker = {
  id: number,
  brand_name?: string,
  name: string,
  retail_price_cents: number,
  release_date_unix: number,
  grid_picture_url: string,
  main_picture_url: string,
  silhouette?: string,
};
