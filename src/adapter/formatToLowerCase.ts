import { Adapter } from "../interface/adapter";

export class Formatter implements Adapter {
    format(message: string): string {
        return message.toLowerCase();
    }
}

/* export const format = (message: string): string => {
    return message.toLocaleLowerCase();
} */
