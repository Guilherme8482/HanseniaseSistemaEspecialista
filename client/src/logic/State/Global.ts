import { QuestionsState } from "./Managers/Questions";
import { LanguageManager } from "./Managers/Language";
import { Flags } from "./Managers/Flags";
import { DatabaseFilter } from "./Managers/DatabaseFilter";

export class State {
    static language = new LanguageManager
    static flags = new Flags
    static databaseFilter = new DatabaseFilter
    static questions = new QuestionsState
}