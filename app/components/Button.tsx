type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
};
export default function Button({
  children,
  variant,
  onClick
}: ButtonProps) {
  const styles : Record<ButtonProps['variant'], string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };
  return (
    <button
      onClick={onClick}
      className={`
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}