
export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>;
  create(data: T): Promise<T>;
  update(id: number, data: T): Promise<T>;
  delete(id: number): Promise<void>;
}