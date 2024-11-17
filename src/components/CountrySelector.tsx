import Select from "react-select";
import { countries } from "../utils/countries";

const CountrySelector = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const countryOptions = countries.map((country) => ({
    value: country,
    label: country,
  }));

  return (
    <div className="flex flex-col gap-2 items-start">
      <label htmlFor="pais" className="block text-sm font-medium">
        País
      </label>
      <Select
        id="pais"
        options={countryOptions}
        value={countryOptions.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption?.value || "")}
        placeholder="Seleccione un país"
        isClearable
        styles={{
          container: (provided) => ({
            ...provided,
            width: "100%",
            padding: "12",
          }),
          control: (provided) => ({ ...provided, borderRadius: "6px" }),
        }}
      />
    </div>
  );
};

export default CountrySelector;
