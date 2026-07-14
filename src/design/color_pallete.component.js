import { theme } from "../infrastructure/theme/index";

export const ColorPalette = () => {
  return (
    <>
      {Object.entries(theme.colors.brand).map(([name, color]) => (
        <div key={name}>
          <div
            style={{
              width: 80,
              height: 80,
              background: color,
            }}
          />

          <p>{name}</p>
          <p>{color}</p>
        </div>
      ))}
    </>
  );
};
