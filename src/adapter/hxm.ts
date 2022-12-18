import { Backend } from "../interface/adapter";

export class BackendAdapter implements Backend {
    getEmail(user: string): string {
        return "markus.klein@abs-team.de";
    }
}