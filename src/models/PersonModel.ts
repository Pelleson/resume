import { action, observable, computed } from 'mobx';

export interface IPerson {
	city: string;
	email: string;
	lastname: string;
	firstname: string;
}

const Default = <IPerson> {
	city: "",
	email: "",
	lastname: "",
	firstname: ""
};

export class Person implements IPerson {

	@observable public city: string;
	@observable public email: string;
	@observable public lastname: string;
	@observable public firstname: string;

	constructor(person: IPerson = Default) {
		this.fromJson(person);
	}

	@action public fromJson(person: IPerson): void {
		this.city = person.city;
		this.email = person.email;
		this.lastname = person.lastname;
		this.firstname = person.firstname;
	}

	@action public toJson(): IPerson {
		return {
			city: this.city,
			email: this.email,
			lastname: this.lastname,
			firstname: this.firstname,
		}
	}

	@computed get fullname(): string {
		return `${this.firstname} ${this.lastname}`;
	}

};