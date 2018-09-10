export interface Person {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        coordinates: {
            latitude: number;
            longitude: number;
        }
    };
    email: string;
    phone: string;
    cell: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
