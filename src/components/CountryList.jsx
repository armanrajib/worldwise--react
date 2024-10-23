import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country))
      return [...acc, { country: city.country, emoji: city.emoji }];
    else return acc;
  }, []);

  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="" />;

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem key={index} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
