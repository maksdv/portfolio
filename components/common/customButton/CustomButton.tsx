type CustomButtonType = {
  label: string;
  action: () => void;
  background?: string;
  textColor: string;
};
export const CustomButton = ({
  label,
  action,
  background,
  textColor,
}: CustomButtonType) => {
  return (
    <div style={{ color: textColor, background: background }}>
      <button type="button" onClick={action}>
        {label}
      </button>
    </div>
  );
};
