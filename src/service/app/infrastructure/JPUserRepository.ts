import axios from "axios";
import { UserRepository } from "../application/domain/models/UserRepository";

export class JPUserRepository implements UserRepository {
  async findById(id: number): Promise<UserJson> {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = response.data;

    const userJson = new UserJson(
      data.id,
      data.name,
      data.username,
      data.email,
      new AddressJson(
        data.address.street,
        data.address.suite,
        data.address.city,
        data.address.zipcode,
        new GeoJson(data.address.geo.lat, data.address.geo.lng) // Here is 'lng', not 'lug'
      ),
      data.phone,
      data.website,
      new CompanyJson(
        data.company.name,
        data.company.catchPhrase,
        data.company.bs
      )
    );

    return userJson;
  }
}

export class UserJson {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly username: string,
    readonly email: string,
    readonly address: AddressJson,
    readonly phone: string,
    readonly website: string,
    readonly company: CompanyJson
  ) {}
}

export class AddressJson {
  constructor(
    readonly street: string,
    readonly suite: string,
    readonly city: string,
    readonly zipcode: string,
    readonly geo: GeoJson
  ) {}
}

export class GeoJson {
  constructor(readonly lat: string, readonly lug: string) {}
}

export class CompanyJson {
  constructor(
    readonly name: string,
    readonly catchPhrase: string,
    readonly bs: string
  ) {}
}
