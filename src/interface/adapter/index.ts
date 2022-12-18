export interface Adapter {
    format?: (message: string) => string;
    // getEmail?: (user: string) => string;    
}

export interface Backend extends Adapter {
    getEmail?: (user: string) => string;
}
