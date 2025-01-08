import { FormControlLabel, Input } from "@mui/material";
import { CrudFilter } from "@refinedev/core";

const SearchFilter = ({
  setFilters: setCrudFilters,
}: {
  setFilters: (filters: CrudFilter[]) => void;
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = event.target.value;
    if (!filterValue) {
      return;
    }
    setCrudFilters([
      {
        field: "title",
        operator: "contains",
        value: filterValue,
      },
    ]);
  };

  return (
    <FormControlLabel
      label={""}
      control={<Input fullWidth onChange={handleFilterChange} />}
    />
  );
};

export default SearchFilter;
