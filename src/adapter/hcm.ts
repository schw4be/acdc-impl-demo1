import { Backend } from "../interface/adapter";

export class BackendAdapter implements Backend {
    getEmail(user: string): string {
        return "klein@abs-team.de";
    }
}