export interface Todo  {
	id: number;
	title: string;
	data:Data;

}
export interface TodosState {
	todos:Todo[];
}