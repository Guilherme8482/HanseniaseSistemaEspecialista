import { State } from '../Global'
import { sepreStore } from "./LocalStore";

export class QuestionsState {
	readonly answers = this.storedAnswers
	private answerListeners: ((value: number) => void)[] = []

	private get storedAnswers(): number[] {
		return sepreStore.get().answers
	}
	private saveStoredAnswers = () => {
		if (State.flags.isToSaveData)
			sepreStore.set({answers: this.answers})
	}
	getAnswer = (id: number) => {
		return this.answers[id]
	}
	setAnswer = (id: number, value: number) => {
		value = value === 0 ? -1 : value
		this.answers[id] = value
		const listener = this.answerListeners[id]
		if (listener) listener(value)
		this.saveStoredAnswers()
	}
	clearAnswers = () => {
		for (const [index] of this.answers.entries())
			if (this.getAnswer(index) !== -1) this.setAnswer(index, -1)
	}
	setAnswerListener = (id: number, listener: (value: number) => void) => {
		this.answerListeners[id] = listener
	}
}
