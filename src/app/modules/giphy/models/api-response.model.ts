export interface Pagination {
  count: number;
  offset: number;
  total_count: number;
}

export interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

export interface ApiResponse<T> {
  meta: Meta;
  pagination: Pagination;
  data: T[];
}
