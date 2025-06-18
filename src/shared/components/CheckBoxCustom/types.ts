export interface CheckBoxCustomProps {
  containerCheckboxClassName?: string;
  textLabel?: string;
  classNameCheck?: string;
  onChange: (selectedValue: boolean) => void;
  error?: string;
  isChecked?: boolean;
}
