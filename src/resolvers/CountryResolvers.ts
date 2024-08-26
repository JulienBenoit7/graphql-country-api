import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Country } from "../entities/Country";
import { AppDataSource } from "../data-source";

@Resolver(Country)
export class CountryResolver {
  private countryRepository = AppDataSource.getRepository(Country);

  @Query(() => [Country])
  getAllCountries(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  @Query(() => Country, { nullable: true })
  getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
    return this.countryRepository.findOne({ where: { code } });
  }

  @Mutation(() => Country)
  addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continentCode") continentCode: string
  ): Promise<Country> {
    const country = this.countryRepository.create({
      code,
      name,
      emoji,
      continentCode,
    });
    return this.countryRepository.save(country);
  }

  @Query(() => [Country])
  getCountriesByContinent(
    @Arg("continentCode") continentCode: string
  ): Promise<Country[]> {
    return this.countryRepository.find({ where: { continentCode } });
  }
}
