import React, { ReactNode } from "react";
import Select, { SelectProps } from "@mui/material/Select";
import { FormHelperText, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)<SelectProps>(() => ({
  "&& fieldset": {
    border: "none",
  },

  "&.MuiInputBase-root.MuiOutlinedInput-root": {
    background: "#E5E5E5",
    borderRadius: "1.25rem",

    "&:hover": {
      background: "#E1E1E1",
    },
    "> .MuiSelect-icon": {
      right: ".625rem",
    },

    svg: {
      color: "#126AE8",
      opacity: 0.9,
    },
  },
}));

type CustomDropdownInput = {
  id: string;
  selectedValue: string | undefined;
  items: { value: string; label: string }[];
  errorMessage?: string;
} & SelectProps;

const StyledPlaceholder = styled("div")`
  color: #919191;
`;

const Placeholder = ({ children }: { children: ReactNode }) => {
  return <StyledPlaceholder>{children}</StyledPlaceholder>;
};

export default ({
  id,
  name,
  selectedValue,
  items,
  error,
  errorMessage,
  ...selectProps
}: CustomDropdownInput) => {
  return (
    <>
      <StyledSelect
        {...selectProps}
        displayEmpty
        renderValue={
          selectedValue
            ? () => {
                const selectedItem = items.find(
                  ({ value }) => value === selectedValue
                );
                if (selectedItem) {
                  return selectedItem.label;
                }
              }
            : () => <Placeholder>{selectProps.placeholder}</Placeholder>
        }
        id={id}
        fullWidth
        value={selectedValue}
      >
        {items.map(({ value, label }, index) => (
          <MenuItem key={`select_${label}_${index}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
      {error && errorMessage && (
        <FormHelperText className="muiSelect" error={true}>
          {errorMessage}
        </FormHelperText>
      )}
    </>
  );
};
