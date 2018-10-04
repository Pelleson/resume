import { Person } from 'models';
import { ViewModel } from 'interfaces';
import { action, observable} from 'mobx';
import { createViewModel } from 'mobx-utils';

export class PersonStore {

	@observable public person: Person;
	@observable public viewModel: ViewModel<Person>;

	constructor() {
		this.person = new Person();
		this.viewModel = createViewModel(this.person);
	};

	@action public onChange(key: string, value: any): void {
		this.viewModel[key] = value;
	};

	@action public onDateChange(key: string, value: any): void {
		this.viewModel[key] = value;
	};

	@action public onReset(): void {
		this.viewModel.reset();
	};

	@action public toJson() {
		this.viewModel.submit();
		return this.person.toJson();
	};

};
