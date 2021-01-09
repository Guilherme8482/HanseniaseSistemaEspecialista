import { LanguageAvailable } from "../../../staticData/Language/Available";
import { QuestionsByDatabase } from "../../../staticData/QuestionsByDatabase";

class State {
	static CURRENT_VERSION = 1;

	version = State.CURRENT_VERSION;
	databaseId = QuestionsByDatabase.defaultDatabaseId();
	saveData = true;
	answers = [...Array(38)].map(() => -1);
	languageId = LanguageAvailable.defaultLanguageId();
}

function isStateUpToDate(state: any): state is State {
	return "version" in state && state.version === State.CURRENT_VERSION;
}

class SepreStore {
	static LOCALSTORAGE_ITEM_ID = "sepreState";

	private state!: State;

	constructor() {
		this.load();
	}

	private load() {
		let state = new State();
		try {
			const localStateString =
				localStorage.getItem(SepreStore.LOCALSTORAGE_ITEM_ID) || "{}";
			const localState = JSON.parse(localStateString);
			if (isStateUpToDate(localState)) {
				state = localState;
			} else {
				localStorage.clear();
			}
		} catch {
			console.log("DEU ERRO NO STATE LOAD");
		} finally {
			this.state = state;
			this.save();
		}
	}

	private save() {
		const stateString = JSON.stringify(this.state);
		localStorage.setItem(SepreStore.LOCALSTORAGE_ITEM_ID, stateString);
	}

	set(newState: Partial<State>) {
		Object.assign(this.state, newState);
		this.save();
	}

	get() {
		return this.state;
	}
}

export const sepreStore = new SepreStore();
