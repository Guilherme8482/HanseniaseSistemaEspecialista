import { sepreStore } from "./LocalStore";

export enum ResultType {
	NoReaction,
	Type1,
	Type2,
}
export class Flags {
	private resultListener?: () => void

	get isToSaveData() {
		return sepreStore.get().saveData
	}
	set isToSaveData(value: boolean) {
		sepreStore.set({saveData: value})
	}
	setResultListener = (listener: () => void) => {
		this.resultListener = listener
	}
	startDiagnosis = () => {
		if (this.resultListener) this.resultListener()
	}
}
