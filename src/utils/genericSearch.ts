import { UserType } from "@/constants/Types";

export function genericSearch<T>(query: string, properties: UserType[]): (UserType[] | []){

    if (query === "") {
        return properties;
    } 

    const findItem = properties.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    return findItem;
}


